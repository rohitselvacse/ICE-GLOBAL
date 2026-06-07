

import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";

const BASE_URL = import.meta.env?.VITE_API_BASE_URL || "";

// ─── Token helpers ────────────────────────────────────────────────────────────
const getToken = () => localStorage.getItem("admin_access_token");
const getRefreshToken = () => localStorage.getItem("admin_refresh_token");
const setToken = (t) => localStorage.setItem("admin_access_token", t);

async function refreshToken() {
  const rt = getRefreshToken();
  if (!rt) return null;
  const res = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: rt }),
  });
  if (!res.ok) return null;
  const d = await res.json();
  if (d.accessToken) { setToken(d.accessToken); return d.accessToken; }
  return null;
}

async function authFetch(url, opts = {}) {
  let token = getToken() || await refreshToken();
  const doFetch = (t) => fetch(url, {
    ...opts,
    headers: { "Content-Type": "application/json", ...(t ? { Authorization: `Bearer ${t}` } : {}), ...opts.headers },
  });
  let res = await doFetch(token);
  if (res.status === 401) {
    token = await refreshToken();
    res = await doFetch(token);
  }
  return res;
}

// ─── Section metadata ─────────────────────────────────────────────────────────
const SECTIONS = [
  { key: "heroBanner",            label: "Hero Banner",             icon: "ti-home",            group: "Core" },
  { key: "splitInfoSection",      label: "Split Info",              icon: "ti-layout-sidebar",  group: "Core" },
  { key: "featureCards",          label: "Feature Cards",           icon: "ti-cards",            group: "Core" },
  { key: "gridCards",             label: "Grid Cards",              icon: "ti-grid-dots",        group: "Core" },
  { key: "statsStrip",            label: "Stats Strip",             icon: "ti-chart-bar",        group: "Core" },
  { key: "timeline",              label: "Timeline",                icon: "ti-timeline",         group: "Story" },
  { key: "testimonialCards",      label: "Testimonials",            icon: "ti-message-circle",   group: "Social Proof" },
  { key: "logoPartnerStrip",      label: "Logo Strip",              icon: "ti-building-store",   group: "Social Proof" },
  { key: "founderTeam",           label: "Founder & Team",          icon: "ti-users",            group: "About" },
  { key: "videoShowcase",         label: "Video Showcase",          icon: "ti-player-play",      group: "Media" },
  { key: "faqAccordion",          label: "FAQ",                     icon: "ti-help-circle",      group: "Support" },
  { key: "ctaBanner",             label: "CTA Banner",              icon: "ti-speakerphone",     group: "Conversion" },
  { key: "galleryMasonry",        label: "Gallery",                 icon: "ti-photo",            group: "Media" },
  { key: "awardsAchievements",    label: "Awards",                  icon: "ti-award",            group: "Social Proof" },
  { key: "processSteps",          label: "Process Steps",           icon: "ti-list-numbers",     group: "Core" },
  { key: "comparisonSection",     label: "Comparison",              icon: "ti-table",            group: "Core" },
  { key: "stickyScrollStory",     label: "Scroll Story",            icon: "ti-book",             group: "Story" },
  { key: "sectorCategoryTabs",    label: "Sector Tabs",             icon: "ti-category",         group: "Core" },
  { key: "hoverAnimationCards",   label: "Hover Cards",             icon: "ti-sparkles",         group: "Core" },
  { key: "communitySection",      label: "Community",               icon: "ti-heart",            group: "About" },
  { key: "imageBulletSection",    label: "Image + Bullets",         icon: "ti-list",             group: "Core" },
  { key: "newsBlogPreview",       label: "News / Blog",             icon: "ti-news",             group: "Media" },
  { key: "megaFeatureBanner",     label: "Mega Banner",             icon: "ti-flag",             group: "Conversion" },
  { key: "interactiveMap",        label: "Interactive Map",         icon: "ti-map-pin",          group: "Core" },
  { key: "vvipCelebrityShowcase", label: "VVIP Showcase",           icon: "ti-star",             group: "Social Proof" },
];

const GROUPS = [...new Set(SECTIONS.map((s) => s.group))];

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ toasts }) {
  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999, display: "flex", flexDirection: "column", gap: 8 }}>
      {toasts.map((t) => (
        <div key={t.id} style={{
          padding: "10px 16px", borderRadius: 8, fontSize: 14, fontWeight: 500,
          background: t.type === "error" ? "var(--color-background-danger)" : "var(--color-background-success)",
          color: t.type === "error" ? "var(--color-text-danger)" : "var(--color-text-success)",
          border: `0.5px solid ${t.type === "error" ? "var(--color-border-danger)" : "var(--color-border-success)"}`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}>
          <i className={`ti ${t.type === "error" ? "ti-circle-x" : "ti-circle-check"}`} style={{ marginRight: 8 }} aria-hidden="true" />
          {t.message}
        </div>
      ))}
    </div>
  );
}

// ─── JSON Editor ──────────────────────────────────────────────────────────────
function JsonEditor({ value, onChange, onErrorChange }) {
  const [raw, setRaw] = useState(() => JSON.stringify(value, null, 2));
  const [localErr, setLocalErr] = useState("");

  useEffect(() => {
    setRaw(JSON.stringify(value, null, 2));
    setLocalErr("");
  }, [value]);

  const handleChange = (e) => {
    const text = e.target.value;
    setRaw(text);
    try {
      const parsed = JSON.parse(text);
      onChange(parsed);
      setLocalErr("");
      if (onErrorChange) onErrorChange(false);
    } catch (err) {
      setLocalErr("Invalid JSON: " + err.message);
      if (onErrorChange) onErrorChange(true);
    }
  };

  const lineCount = raw.split("\n").length;

  return (
    <div style={{ position: "relative" }}>
      <textarea
        value={raw}
        onChange={handleChange}
        spellCheck={false}
        style={{
          width: "100%", boxSizing: "border-box",
          minHeight: Math.max(200, lineCount * 20 + 32),
          fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: "1.6",
          padding: "12px 14px", borderRadius: 8,
          border: `0.5px solid ${localErr ? "var(--color-border-danger)" : "var(--color-border-secondary)"}`,
          background: "var(--color-background-secondary)",
          color: "var(--color-text-primary)", resize: "vertical", outline: "none",
        }}
      />
      {localErr && (
        <p style={{ fontSize: 12, color: "var(--color-text-danger)", marginTop: 4 }}>
          <i className="ti ti-alert-triangle" style={{ marginRight: 4 }} aria-hidden="true" />{localErr}
        </p>
      )}
    </div>
  );
}

// ─── Field editors ────────────────────────────────────────────────────────────
function StringField({ label, value, onChange, multiline }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 5, fontWeight: 500 }}>{label}</label>
      {multiline ? (
        <textarea value={value || ""} onChange={(e) => onChange(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", minHeight: 80, padding: "8px 10px", borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)", fontSize: 14, resize: "vertical", fontFamily: "var(--font-sans)" }} />
      ) : (
        <input type="text" value={value || ""} onChange={(e) => onChange(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", padding: "8px 10px", borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)", fontSize: 14 }} />
      )}
    </div>
  );
}

function CtaField({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: 14, padding: "12px 14px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8 }}>
      <p style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 10, fontWeight: 500 }}>{label}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <StringField label="Label" value={value?.label} onChange={(v) => onChange({ ...value, label: v })} />
        <StringField label="URL / href" value={value?.href} onChange={(v) => onChange({ ...value, href: v })} />
      </div>
    </div>
  );
}

function SmartField({ label, value, onChange, depth = 0 }) {
  if (value === null || value === undefined) return null;

  if (typeof value === "string") {
    return <StringField label={label} value={value} onChange={onChange} multiline={value.length > 80} />;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return (
      <div style={{ marginBottom: 14 }}>
        <label style={{ display: "block", fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 5, fontWeight: 500 }}>{label}</label>
        <input type={typeof value === "boolean" ? "checkbox" : "text"}
          checked={typeof value === "boolean" ? value : undefined}
          value={typeof value === "number" ? value : undefined}
          onChange={(e) => onChange(typeof value === "boolean" ? e.target.checked : Number(e.target.value))}
          style={{ padding: "8px 10px", borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)", fontSize: 14 }} />
      </div>
    );
  }

  if (typeof value === "object" && !Array.isArray(value) && "label" in value && "href" in value && Object.keys(value).length === 2) {
    return <CtaField label={label} value={value} onChange={onChange} />;
  }

  if (Array.isArray(value)) {
    return <ArrayField label={label} value={value} onChange={onChange} depth={depth} />;
  }

  if (typeof value === "object") {
    return <ObjectField label={label} value={value} onChange={onChange} depth={depth} />;
  }

  return null;
}

function ArrayField({ label, value, onChange, depth }) {
  const [collapsed, setCollapsed] = useState(depth > 1);
  const add = () => {
    const template = value.length > 0 ? JSON.parse(JSON.stringify(value[0])) : (typeof value[0] === "string" ? "" : {});
    onChange([...value, template]);
  };
  const remove = (i) => onChange(value.filter((_, idx) => idx !== i));
  const update = (i, v) => onChange(value.map((item, idx) => idx === i ? v : item));

  if (typeof value[0] === "string" || typeof value[0] === "number") {
    return (
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <label style={{ fontSize: 12, color: "var(--color-text-secondary)", fontWeight: 500 }}>{label} <span style={{ color: "var(--color-text-tertiary)" }}>({value.length} items)</span></label>
          <Button onClick={add} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, border: "0.5px solid var(--color-border-secondary)", background: "transparent", color: "var(--color-text-primary)", cursor: "pointer" }}>
            <i className="ti ti-plus" style={{ marginRight: 4 }} aria-hidden="true" />Add
          </Button>
        </div>
        {value.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
            <input type="text" value={item} onChange={(e) => update(i, e.target.value)}
              style={{ flex: 1, padding: "7px 10px", borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)", fontSize: 14 }} />
            <Button onClick={() => remove(i)} style={{ padding: "7px 10px", borderRadius: 8, border: "0.5px solid var(--color-border-danger)", background: "transparent", color: "var(--color-text-danger)", cursor: "pointer" }}>
              <i className="ti ti-trash" aria-hidden="true" />
            </Button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <Button onClick={() => setCollapsed(!collapsed)} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "var(--color-text-secondary)", fontSize: 12, fontWeight: 500, padding: 0 }}>
          <i className={`ti ${collapsed ? "ti-chevron-right" : "ti-chevron-down"}`} style={{ fontSize: 12 }} aria-hidden="true" />
          {label} <span style={{ color: "var(--color-text-tertiary)" }}>({value.length} items)</span>
        </Button>
        <Button onClick={add} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, border: "0.5px solid var(--color-border-secondary)", background: "transparent", color: "var(--color-text-primary)", cursor: "pointer" }}>
          <i className="ti ti-plus" style={{ marginRight: 4 }} aria-hidden="true" />Add
        </Button>
      </div>
      {!collapsed && value.map((item, i) => (
        <div key={i} style={{ marginBottom: 12, padding: "14px 14px 6px", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 8, position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontWeight: 500 }}>Item {i + 1}</span>
            <Button onClick={() => remove(i)} style={{ padding: "3px 8px", borderRadius: 6, border: "0.5px solid var(--color-border-danger)", background: "transparent", color: "var(--color-text-danger)", cursor: "pointer", fontSize: 12 }}>
              <i className="ti ti-trash" style={{ marginRight: 4 }} aria-hidden="true" />Remove
            </Button>
           
          </div>
          {typeof item === "object" && !Array.isArray(item) ? (
            Object.entries(item).map(([k, v]) => (
              <SmartField key={k} label={k} value={v} onChange={(nv) => update(i, { ...item, [k]: nv })} depth={depth + 1} />
            ))
          ) : (
            <SmartField label="Value" value={item} onChange={(nv) => update(i, nv)} depth={depth + 1} />
          )}
        </div>
      ))}
    </div>
  );
}

function ObjectField({ label, value, onChange, depth }) {
  const [collapsed, setCollapsed] = useState(depth > 1);
  return (
    <div style={{ marginBottom: 14 }}>
      <Button onClick={() => setCollapsed(!collapsed)} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "var(--color-text-secondary)", fontSize: 12, fontWeight: 500, padding: "0 0 8px", width: "100%", textAlign: "left" }}>
        <i className={`ti ${collapsed ? "ti-chevron-right" : "ti-chevron-down"}`} style={{ fontSize: 12 }} aria-hidden="true" />
        {label}
      </Button>
      {!collapsed && (
        <div style={{ paddingLeft: 14, borderLeft: "2px solid var(--color-border-tertiary)" }}>
          {Object.entries(value).map(([k, v]) => (
            <SmartField key={k} label={k} value={v} onChange={(nv) => onChange({ ...value, [k]: nv })} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Section Visibility Panel ─────────────────────────────────────────────────
function SectionVisibilityPanel({ allData, onToggle }) {
  return (
    <div style={{
      margin: "16px 20px",
      border: "0.5px solid var(--color-border-tertiary)",
      borderRadius: 10,
      overflow: "hidden",
      background: "var(--color-background-primary)",
      flexShrink: 0,
    }}>
      {/* Panel header */}
      <div style={{
        padding: "13px 18px",
        borderBottom: "0.5px solid var(--color-border-tertiary)",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        <i className="ti ti-eye" style={{ fontSize: 16, color: "var(--color-text-secondary)" }} aria-hidden="true" />
        <div>
          <p style={{ fontSize: 14, fontWeight: 500, margin: 0, color: "var(--color-text-primary)" }}>Section Visibility</p>
          <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0 }}>
            Toggle which sections appear on the frontend. Changes save with the section or "Save all".
          </p>
        </div>
      </div>

      {/* 3-column checkbox grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
        {SECTIONS.map((s, i) => {
          const isVisible = allData[s.key]?.visible !== false;
          const col = i % 3;
          const isLastRow = i >= SECTIONS.length - (SECTIONS.length % 3 || 3);
          return (
            <label
              key={s.key}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 16px",
                cursor: "pointer",
                userSelect: "none",
                borderRight: col < 2 ? "0.5px solid var(--color-border-tertiary)" : "none",
                borderBottom: !isLastRow ? "0.5px solid var(--color-border-tertiary)" : "none",
                gap: 10,
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-background-secondary)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
                <i
                  className={`ti ${s.icon}`}
                  style={{ fontSize: 14, flexShrink: 0, color: isVisible ? "var(--color-text-secondary)" : "var(--color-text-tertiary)" }}
                  aria-hidden="true"
                />
                <span style={{
                  fontSize: 13,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: isVisible ? "var(--color-text-primary)" : "var(--color-text-tertiary)",
                }}>
                  {s.label}
                </span>
              </div>
              <input
                type="checkbox"
                checked={isVisible}
                onChange={() => onToggle(s.key)}
                style={{
                  width: 15,
                  height: 15,
                  accentColor: "var(--color-text-primary)",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}

// ─── Section editor panel ─────────────────────────────────────────────────────
function SectionEditor({ sectionKey, data, onSave, onRestore, saving ,apiPath }) {
  const [localData, setLocalData] = useState(data);
  const [mode, setMode] = useState("fields");
  const [jsonError, setJsonError] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => { setLocalData(data); setDirty(false); }, [data]);

  const update = (newData) => { setLocalData(newData); setDirty(true); };

  const meta = SECTIONS.find((s) => s.key === sectionKey);
  const isVisible = localData?.visible !== false;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Editor header */}
      <div style={{ padding: "16px 24px", borderBottom: "0.5px solid var(--color-border-tertiary)", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <i className={`ti ${meta?.icon || "ti-settings"}`} style={{ fontSize: 18, color: "var(--color-text-secondary)" }} aria-hidden="true" />
          <div>
            <h2 style={{ fontSize: 15, fontWeight: 500, margin: 0, color: "var(--color-text-primary)" }}>{meta?.label || sectionKey}</h2>
            <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: 0 }}>{apiPath}/{sectionKey}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {/* Mode toggle */}
          <div style={{ display: "flex", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, overflow: "hidden" }}>
            {["fields", "json"].map((m) => (
              <Button key={m} onClick={() => setMode(m)} style={{ padding: "6px 14px", fontSize: 13, background: mode === m ? "var(--color-background-secondary)" : "transparent", color: mode === m ? "var(--color-text-primary)" : "var(--color-text-secondary)", border: "none", cursor: "pointer", fontWeight: mode === m ? 500 : 400 }}>
                {m === "fields" ? <><i className="ti ti-forms" style={{ marginRight: 5 }} aria-hidden="true" />Fields</> : <><i className="ti ti-code" style={{ marginRight: 5 }} aria-hidden="true" />JSON</>}
              </Button>
            ))}
          </div>
          <Button onClick={() => onRestore(sectionKey)} disabled={saving} style={{ padding: "6px 14px", fontSize: 13, borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "transparent", color: "var(--color-text-secondary)", cursor: "pointer" }}>
            <i className="ti ti-refresh" style={{ marginRight: 5 }} aria-hidden="true" />Restore
          </Button>
          <Button
            onClick={() => onSave(sectionKey, localData)}
            disabled={saving || jsonError || !dirty}
            style={{ padding: "6px 16px", fontSize: 13, borderRadius: 8, border: "none", background: dirty && !jsonError ? "var(--color-text-primary)" : "var(--color-background-secondary)", color: dirty && !jsonError ? "var(--color-background-primary)" : "var(--color-text-tertiary)", cursor: dirty && !jsonError ? "pointer" : "default", fontWeight: 500 }}>
            <i className="ti ti-device-floppy" style={{ marginRight: 5 }} aria-hidden="true" />
            {saving ? "Saving…" : "Save section"}
          </Button>
        </div>
      </div>

      {/* Visibility notice banner */}
      {!isVisible && (
        <div style={{ padding: "8px 24px", background: "var(--color-background-warning)", borderBottom: "0.5px solid var(--color-border-warning)", fontSize: 13, color: "var(--color-text-warning)", display: "flex", alignItems: "center", gap: 8 }}>
          <i className="ti ti-eye-off" aria-hidden="true" />
          This section is currently <strong style={{ fontWeight: 500 }}>hidden</strong> on the frontend. Toggle it visible in the Section Visibility panel above.
        </div>
      )}

      {dirty && (
        <div style={{ padding: "8px 24px", background: "var(--color-background-warning)", borderBottom: "0.5px solid var(--color-border-warning)", fontSize: 13, color: "var(--color-text-warning)" }}>
          <i className="ti ti-pencil" style={{ marginRight: 6 }} aria-hidden="true" />Unsaved changes
        </div>
      )}

      {/* Editor body */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
        {mode === "json" ? (
          <JsonEditor value={localData} onChange={update} onErrorChange={setJsonError} />
        ) : (
          <div>
            {Object.entries(localData || {}).map(([key, val]) => {
              // Skip the internal `visible` key — it's managed by the visibility panel
              if (key === "visible") return null;
              return (
                <SmartField key={key} label={key} value={val} onChange={(nv) => update({ ...localData, [key]: nv })} depth={0} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ activeKey, onSelect, sectionStatus, allData }) {
  const [search, setSearch] = useState("");
  const filtered = SECTIONS.filter((s) => s.label.toLowerCase().includes(search.toLowerCase()) || s.key.toLowerCase().includes(search.toLowerCase()));
  const filteredGroups = GROUPS.filter((g) => filtered.some((s) => s.group === g));

  return (
    <aside style={{ width: 240, borderRight: "0.5px solid var(--color-border-tertiary)", display: "flex", flexDirection: "column", flexShrink: 0, background: "var(--color-background-primary)" }}>
      <div style={{ padding: "16px 16px 12px", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <i className="ti ti-layout-dashboard" style={{ fontSize: 18, color: "var(--color-text-secondary)" }} aria-hidden="true" />
          <span style={{ fontSize: 14, fontWeight: 500 }}>ICE Sections</span>
          <span style={{ marginLeft: "auto", fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "var(--color-background-secondary)", color: "var(--color-text-secondary)" }}>{SECTIONS.length}</span>
        </div>
        <div style={{ position: "relative" }}>
          <i className="ti ti-search" style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "var(--color-text-tertiary)", pointerEvents: "none" }} aria-hidden="true" />
          <input type="text" placeholder="Search sections…" value={search} onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", boxSizing: "border-box", padding: "7px 10px 7px 30px", borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)", color: "var(--color-text-primary)", fontSize: 13 }} />
        </div>
      </div>
      <nav style={{ flex: 1, overflowY: "auto", padding: "8px 8px" }}>
        {filteredGroups.map((group) => (
          <div key={group} style={{ marginBottom: 4 }}>
            <p style={{ fontSize: 10, fontWeight: 500, color: "var(--color-text-tertiary)", padding: "8px 8px 4px", margin: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>{group}</p>
            {filtered.filter((s) => s.group === group).map((s) => {
              const isVisible = allData[s.key]?.visible !== false;
              return (
                <Button key={s.key} onClick={() => onSelect(s.key)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 9, padding: "7px 8px", borderRadius: 7, border: "none", cursor: "pointer", textAlign: "left", fontSize: 13, fontWeight: activeKey === s.key ? 500 : 400, background: activeKey === s.key ? "var(--color-background-secondary)" : "transparent", color: activeKey === s.key ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>
                  <i
                    className={`ti ${s.icon}`}
                    style={{ fontSize: 15, flexShrink: 0, color: isVisible ? undefined : "var(--color-text-tertiary)" }}
                    aria-hidden="true"
                  />
                  <span style={{
                    flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    color: isVisible ? undefined : "var(--color-text-tertiary)",
                  }}>
                    {s.label}
                  </span>
                  {/* Hidden indicator */}
                  {!isVisible && (
                    <i className="ti ti-eye-off" style={{ fontSize: 11, color: "var(--color-text-tertiary)", flexShrink: 0 }} aria-hidden="true" />
                  )}
                  {sectionStatus[s.key] === "saving" && <i className="ti ti-loader-2" style={{ fontSize: 12, color: "var(--color-text-tertiary)" }} aria-hidden="true" />}
                  {sectionStatus[s.key] === "saved" && <i className="ti ti-check" style={{ fontSize: 12, color: "var(--color-text-success)" }} aria-hidden="true" />}
                </Button>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}

// ─── Bulk actions bar ─────────────────────────────────────────────────────────
function BulkBar({ onSaveAll, onRestoreAll, saving, loading }) {
  return (
    <div style={{ padding: "10px 24px", borderBottom: "0.5px solid var(--color-border-tertiary)", display: "flex", alignItems: "center", gap: 12, background: "var(--color-background-secondary)" }}>
      <span style={{ fontSize: 13, color: "var(--color-text-secondary)", flex: 1 }}>
        <i className="ti ti-info-circle" style={{ marginRight: 6 }} aria-hidden="true" />
        Use individual section Save, or bulk actions below
      </span>
      <Button onClick={onRestoreAll} disabled={saving || loading}
        style={{ fontSize: 13, padding: "6px 14px", borderRadius: 8, border: "0.5px solid var(--color-border-danger)", background: "transparent", color: "var(--color-text-danger)", cursor: "pointer" }}>
        <i className="ti ti-refresh" style={{ marginRight: 5 }} aria-hidden="true" />Restore all defaults
      </Button>
      <Button onClick={onSaveAll} disabled={saving || loading}
        style={{ fontSize: 13, padding: "6px 16px", borderRadius: 8, border: "none", background: "var(--color-text-primary)", color: "var(--color-background-primary)", cursor: "pointer", fontWeight: 500 }}>
        <i className="ti ti-device-floppy" style={{ marginRight: 5 }} aria-hidden="true" />
        {saving ? "Saving all…" : "Save all sections"}
      </Button>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
type AdminLeadGenerationAtICEProps = {
  apiPath?: string;
  pageTitle?: string;
};

export default function AdminLeadGenerationAtICE({ apiPath = "/api/exhibit-at-ice/lead-generation-at-ice", pageTitle = "Lead Generation at ICE" }: AdminLeadGenerationAtICEProps = {}) {
  const [allData, setAllData] = useState({});
  const [activeKey, setActiveKey] = useState(SECTIONS[0].key);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sectionStatus, setSectionStatus] = useState({});
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
  }, []);

  // Load all sections on mount
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}${apiPath}`);
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        setAllData(data);
      } catch (err) {
        addToast("Could not load sections — check API connection", "error");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [apiPath, addToast]);

  // Toggle visibility for a section (marks dirty — persists on next save)
  // const toggleVisible = useCallback((sectionKey) => {
  //   setAllData((prev) => {
  //     const current = prev[sectionKey] ?? {};
  //     const nowVisible = current.visible !== false;
  //     return { ...prev, [sectionKey]: { ...current, visible: !nowVisible } };
  //   });
  // }, []);


  // Replace your toggleVisible with this:
const toggleVisible = useCallback(async (sectionKey) => {
  // 1. Optimistically update local state
  const current = allData[sectionKey] ?? {};
  const nowVisible = current.visible !== false;
  const updatedSection = { ...current, visible: !nowVisible };

  setAllData((prev) => ({ ...prev, [sectionKey]: updatedSection }));

  // 2. Persist to backend immediately
  try {
    const res = await authFetch(`${BASE_URL}${apiPath}/${sectionKey}`, {
      method: "PATCH",
      body: JSON.stringify(updatedSection),
    });
    if (!res.ok) throw new Error("Failed to save visibility");
    const result = await res.json();
    setAllData((prev) => ({ ...prev, [sectionKey]: result.data }));
  } catch (err) {
    // Rollback on failure
    setAllData((prev) => ({ ...prev, [sectionKey]: current }));
    addToast(`Could not update visibility for ${sectionKey}`, "error");
  }
}, [allData, addToast]);
  // Save single section (PATCH)
  const saveSection = async (sectionKey, data) => {
    setSectionStatus((p) => ({ ...p, [sectionKey]: "saving" }));
    try {
      const res = await authFetch(`${BASE_URL}${apiPath}/${sectionKey}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Save failed");
      }
      const result = await res.json();
      setAllData((prev) => ({ ...prev, [sectionKey]: result.data }));
      setSectionStatus((p) => ({ ...p, [sectionKey]: "saved" }));
      addToast(`${SECTIONS.find((s) => s.key === sectionKey)?.label} saved`);
      setTimeout(() => setSectionStatus((p) => ({ ...p, [sectionKey]: null })), 2500);
    } catch (err) {
      setSectionStatus((p) => ({ ...p, [sectionKey]: null }));
      addToast(err.message || "Save failed", "error");
    }
  };

  // Restore single section
  const restoreSection = async (sectionKey) => {
    setSectionStatus((p) => ({ ...p, [sectionKey]: "saving" }));
    try {
      const res = await authFetch(`${BASE_URL}${apiPath}/${sectionKey}/restore`, { method: "POST" });
      if (!res.ok) throw new Error("Restore failed");
      const result = await res.json();
      setAllData((prev) => ({ ...prev, [sectionKey]: result.data }));
      setSectionStatus((p) => ({ ...p, [sectionKey]: "saved" }));
      addToast(`${SECTIONS.find((s) => s.key === sectionKey)?.label} restored to defaults`);
      setTimeout(() => setSectionStatus((p) => ({ ...p, [sectionKey]: null })), 2500);
    } catch (err) {
      setSectionStatus((p) => ({ ...p, [sectionKey]: null }));
      addToast(err.message || "Restore failed", "error");
    }
  };

  // Save all sections (PUT)
  const saveAll = async () => {
    setSaving(true);
    try {
      const res = await authFetch(`${BASE_URL}${apiPath}`, {
        method: "PUT",
        body: JSON.stringify(allData),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Save all failed");
      }
      addToast("All 25 sections saved successfully");
    } catch (err) {
      addToast(err.message || "Save all failed", "error");
    } finally {
      setSaving(false);
    }
  };

  // Restore all sections
  const restoreAll = async () => {
    if (!confirm("Restore ALL 25 sections to default content? This cannot be undone.")) return;
    setSaving(true);
    try {
      const res = await authFetch(`${BASE_URL}${apiPath}/restore`, { method: "POST" });
      if (!res.ok) throw new Error("Restore all failed");
      const result = await res.json();
      setAllData(result.data);
      addToast("All sections restored to defaults");
    } catch (err) {
      addToast(err.message || "Restore all failed", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", gap: 12, color: "var(--color-text-secondary)" }}>
        <i className="ti ti-loader-2" style={{ fontSize: 24, animation: "spin 1s linear infinite" }} aria-hidden="true" />
        <span style={{ fontSize: 15 }}>Loading ICE sections…</span>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", fontFamily: "var(--font-sans)", background: "var(--color-background-tertiary)" }}>
      <h2 className="sr-only">ICE Sections Admin Panel — CRUD editor for all 25 content sections</h2>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        input, textarea, select { outline: none; }
        input:focus, textarea:focus { border-color: var(--color-border-primary) !important; }
        button:disabled { opacity: 0.5; cursor: not-allowed !important; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--color-border-secondary); border-radius: 4px; }
      `}</style>

      {/* Top bar */}
      <header style={{ padding: "0 24px", height: 52, display: "flex", alignItems: "center", borderBottom: "0.5px solid var(--color-border-tertiary)", background: "var(--color-background-primary)", flexShrink: 0, gap: 12 }}>
        <i className="ti ti-layout-grid" style={{ fontSize: 20, color: "var(--color-text-secondary)" }} aria-hidden="true" />
        <span style={{ fontSize: 15, fontWeight: 500 }}>{pageTitle} Admin</span>
        <span style={{ fontSize: 13, color: "var(--color-text-tertiary)", marginLeft: 4 }}>Content editor for all 25 page sections</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 20, background: "var(--color-background-success)", color: "var(--color-text-success)", border: "0.5px solid var(--color-border-success)" }}>
            <i className="ti ti-wifi" style={{ marginRight: 5 }} aria-hidden="true" />Connected
          </span>
        </div>
      </header>

      <BulkBar onSaveAll={saveAll} onRestoreAll={restoreAll} saving={saving} loading={loading} />

      {/* Body */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        <Sidebar
          activeKey={activeKey}
          onSelect={setActiveKey}
          sectionStatus={sectionStatus}
          allData={allData}
        />

        {/* Right: visibility panel + editor stacked */}
        <main style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", background: "var(--color-background-primary)" }}>

          {/* Scrollable wrapper so visibility panel + editor scroll together */}
          <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>

            {/* Section Visibility Panel — always visible at top */}
            <SectionVisibilityPanel allData={allData} onToggle={toggleVisible} />

            {/* Divider */}
            <div style={{ height: "0.5px", background: "var(--color-border-tertiary)", margin: "0 20px" }} />

            {/* Section editor */}
            <div style={{ flex: 1 }}>
              {activeKey && allData[activeKey] !== undefined ? (
                <SectionEditor
                  key={activeKey}
                  sectionKey={activeKey}
                  data={allData[activeKey]}
                  onSave={saveSection}
                  onRestore={restoreSection}
                  saving={sectionStatus[activeKey] === "saving"}
                />
              ) : (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 200, color: "var(--color-text-tertiary)", gap: 10 }}>
                  <i className="ti ti-click" style={{ fontSize: 24 }} aria-hidden="true" />
                  <span>Select a section from the sidebar</span>
                </div>
              )}
            </div>

          </div>
        </main>
      </div>

      <Toast toasts={toasts} />
    </div>
  );
}