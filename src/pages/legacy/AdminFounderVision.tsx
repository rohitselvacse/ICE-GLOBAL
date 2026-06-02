// import { useEffect, useState } from "react";
// import { toast } from "@/components/ui/sonner";

// import AdminLayout from "@/components/admin/AdminLayout";
// import IceLegacyEditor from "@/components/admin/sections/IceLegacyEditor";
// import { adminNavLinks } from "@/data/admin";
// import {
//   defaultIceLegacyContent,
//   mergeIceLegacyContent,
//   type IceLegacyContent,
// } from "@/data/ice-legacy";

// const AdminIceLegacytrust = () => {
//   const base = import.meta.env.VITE_API_BASE_URL || "";
//   const [data, setData] = useState<IceLegacyContent>(defaultIceLegacyContent);
//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);

//   const refreshAccessToken = async () => {
//     const refreshToken = localStorage.getItem("admin_refresh_token");
//     if (!refreshToken) return null;
//     const res = await fetch(`${base}/auth/refresh`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ refreshToken }),
//     });
//     if (!res.ok) {
//       localStorage.removeItem("admin_access_token");
//       localStorage.removeItem("admin_refresh_token");
//       return null;
//     }
//     const tokenData = await res.json();
//     if (tokenData.accessToken) {
//       localStorage.setItem("admin_access_token", tokenData.accessToken);
//       return tokenData.accessToken as string;
//     }
//     return null;
//   };

//   const getAccessToken = async () => {
//     const token = localStorage.getItem("admin_access_token");
//     if (token) return token;
//     return refreshAccessToken();
//   };

//   const load = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${base}/ice-legacy-content`);
//       const contentType = res.headers.get("content-type") || "";
//       if (!res.ok || !contentType.includes("application/json")) throw new Error("Failed to load ICE Legacy content");
//       const payload = await res.json();
//       setData(mergeIceLegacyContent(payload));
//     } catch (err) {
//       console.error(err);
//       setData(defaultIceLegacyContent);
//       toast.error("Could not load ICE Legacy content");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     load();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const save = async (nextData?: IceLegacyContent) => {
//     const content = nextData || data;
//     setSaving(true);
//     try {
//       const token = await getAccessToken();
//       if (!token) throw new Error("Not authenticated");
//       const attempt = async (authToken: string | null) =>
//         fetch(`${base}/ice-legacy-content`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
//           },
//           body: JSON.stringify(content),
//         });
//       let res = await attempt(token);
//       if (res.status === 401) {
//         const refreshed = await refreshAccessToken();
//         res = await attempt(refreshed);
//       }
//       if (!res.ok) {
//         const body = await res.json().catch(() => ({}));
//         throw new Error(body.message || "Save failed");
//       }
//       setData(mergeIceLegacyContent(content));
//       toast.success("ICE Legacy pages saved");
//     } catch (err: any) {
//       console.error(err);
//       toast.error(err.message || "Could not save ICE Legacy pages");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const restore = async () => {
//     setSaving(true);
//     try {
//       const token = await getAccessToken();
//       if (!token) throw new Error("Not authenticated");
//       const attempt = async (authToken: string | null) =>
//         fetch(`${base}/ice-legacy-content/restore`, {
//           method: "POST",
//           headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
//         });
//       let res = await attempt(token);
//       if (res.status === 401) {
//         const refreshed = await refreshAccessToken();
//         res = await attempt(refreshed);
//       }
//       if (!res.ok) throw new Error("Restore failed");
//       const payload = await res.json();
//       setData(mergeIceLegacyContent(payload));
//       toast.success("ICE Legacy defaults restored");
//     } catch (err: any) {
//       console.error(err);
//       toast.error(err.message || "Could not restore ICE Legacy pages");
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <AdminLayout
//       title="ICE Legacy Pages"
//       description="Manage Founder Vision, Marketplace Philosophy, Why India Trusts ICE, and ICE Brand Evolution sub-pages."
//       navItems={adminNavLinks}
//       sections={[{ id: "ice-legacy", label: "ICE Legacy" }]}
//     >
//       <IceLegacyEditor
//         data={data}
//         onChange={setData}
//         onSave={save}
//         onRestore={restore}
//         saving={saving}
//         loading={loading}
//       />
//     </AdminLayout>
//   );
// };

// export default AdminIceLegacytrust;


import { useEffect, useState } from "react";
import { toast } from "@/components/ui/sonner";
import { Save, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

import AdminLayout from "@/components/admin/AdminLayout";
import WhyIndiaTrustsIceEditor from "@/components/admin/sections/WhyIndiaTrustsIceEditor";
import { adminNavLinks } from "@/data/admin";
import {
  defaultIceLegacyContent,
  mergeIceLegacyContent,
  type IceLegacyContent,
} from "@/data/ice-legacy";

const AdminFounderVision = () => {
  const base = import.meta.env.VITE_API_BASE_URL || "";
  const [data, setData] = useState<IceLegacyContent>(defaultIceLegacyContent);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("admin_refresh_token");
    if (!refreshToken) return null;
    const res = await fetch(`${base}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    if (!res.ok) {
      localStorage.removeItem("admin_access_token");
      localStorage.removeItem("admin_refresh_token");
      return null;
    }
    const tokenData = await res.json();
    if (tokenData.accessToken) {
      localStorage.setItem("admin_access_token", tokenData.accessToken);
      return tokenData.accessToken as string;
    }
    return null;
  };

  const getAccessToken = async () => {
    const token = localStorage.getItem("admin_access_token");
    if (token) return token;
    return refreshAccessToken();
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${base}/ice-legacy-content`);
        const contentType = res.headers.get("content-type") || "";
        if (!res.ok || !contentType.includes("application/json")) throw new Error("Failed to load");
        const payload = await res.json();
        setData(mergeIceLegacyContent(payload));
      } catch (err) {
        console.error(err);
        setData(defaultIceLegacyContent);
        toast.error("Could not load content");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const save = async () => {
    setSaving(true);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Not authenticated");
      const attempt = (authToken: string | null) =>
        fetch(`${base}/ice-legacy-content`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
          },
          body: JSON.stringify(data),
        });
      let res = await attempt(token);
      if (res.status === 401) {
        const refreshed = await refreshAccessToken();
        res = await attempt(refreshed);
      }
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Save failed");
      }
      setData(mergeIceLegacyContent(data));
      toast.success("Saved successfully");
    } catch (err: any) {
      toast.error(err.message || "Could not save");
    } finally {
      setSaving(false);
    }
  };

  const restore = async () => {
    setSaving(true);
    try {
      const token = await getAccessToken();
      if (!token) throw new Error("Not authenticated");
      const attempt = (authToken: string | null) =>
        fetch(`${base}/ice-legacy-content/restore`, {
          method: "POST",
          headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
        });
      let res = await attempt(token);
      if (res.status === 401) {
        const refreshed = await refreshAccessToken();
        res = await attempt(refreshed);
      }
      if (!res.ok) throw new Error("Restore failed");
      const payload = await res.json();
      setData(mergeIceLegacyContent(payload));
      toast.success("Defaults restored");
    } catch (err: any) {
      toast.error(err.message || "Could not restore");
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout
      title="Why India Trusts ICE"
      description="Manage the Why India Trusts ICE page content."
      navItems={adminNavLinks}
      sections={[{ id: "why-india-trusts", label: "Why India Trusts ICE" }]}
      
    >
        <div className="sticky top-12 flex flex-wrap justify-end gap-3 pt-6">
        <Button variant="outline" onClick={restore} disabled={saving || loading}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Restore defaults
        </Button>
        <Button onClick={save} disabled={saving || loading}>
          <Save className="mr-2 h-4 w-4" />
          {saving ? "Saving..." : "Save"}
        </Button>
      </div>
      <WhyIndiaTrustsIceEditor
        data={data.whyIndiaTrustsIce}
        onChange={(whyIndiaTrustsIce) => setData((prev) => ({ ...prev, whyIndiaTrustsIce }))}
      />

    
    </AdminLayout>
  );
};

export default AdminFounderVision;