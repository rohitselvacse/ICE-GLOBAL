import { useEffect, useState } from "react";
import { AlertCircle, Plus, RotateCcw, Save, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
// import { type mergeIceLegacyContent } from "@/data/ice-legacy";
import WhyIndiaTrustsIceEditor from "./WhyIndiaTrustsIceEditor";

// interface IceLegacyEditorProps {
//   data: IceLegacyContent;
//   onChange: (data: IceLegacyContent) => void;
//   onSave: (nextData?: IceLegacyContent) => void;
//   onRestore: () => void;
//   saving: boolean;
//   loading: boolean;
// }

const formatJson = (value: unknown) => JSON.stringify(value, null, 2);

const parseSection = <T,>(value: string, sectionName: string): T => {
  try {
    return JSON.parse(value) as T;
  } catch {
    throw new Error(`${sectionName} JSON is not valid`);
  }
};

const fieldClass = "space-y-2";

const Field = ({
  label,
  value,
  onChange,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) => (
  <label className={fieldClass}>
    <span className="text-sm font-medium text-muted-foreground">{label}</span>
    {multiline ? (
      <Textarea value={value} onChange={(event) => onChange(event.target.value)} rows={4} />
    ) : (
      <Input value={value} onChange={(event) => onChange(event.target.value)} />
    )}
  </label>
);

const ToggleField = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) => (
  <label className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background p-3 text-sm font-medium">
    <span>{label}</span>
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
      className="h-4 w-4 accent-primary"
    />
  </label>
);

const ArrayActions = ({ onAdd }: { onAdd: () => void }) => (
  <Button type="button" variant="outline" size="sm" onClick={onAdd}>
    <Plus className="mr-2 h-4 w-4" />
    Add item
  </Button>
);

const IceLegacyEditor = ({ data, onChange, onSave, onRestore, saving, loading }: IceLegacyEditorProps) => {
  // const [founderText, setFounderText] = useState(formatJson(data.founderVision));
  // const [philosophyText, setPhilosophyText] = useState(formatJson(data.marketplacePhilosophy));
  const [error, setError] = useState("");

  // useEffect(() => {
  //   setFounderText(formatJson(data.founderVision));
  //   setPhilosophyText(formatJson(data.marketplacePhilosophy));
  // }, [data]);

  const getParsed = () => {
    const next: IceLegacyContent = {
      // founderVision: parseSection(founderText, "Founder Vision"),
      // marketplacePhilosophy: parseSection(philosophyText, "Marketplace Philosophy"),
      whyIndiaTrustsIce: data.whyIndiaTrustsIce,
      brandEvolution: data.brandEvolution,
    };
    return next;
  };

  const apply = () => {
    try {
      const next = getParsed();
      setError("");
      onChange(next);
      return next;
    } catch (err: any) {
      setError(err.message || "Could not parse ICE Legacy content");
      return null;
    }
  };

  const save = () => {
    const next = apply();
    if (next) onSave(next);
  };

  const updateBrand = (brandEvolution: BrandEvolutionContent) => {
    onChange({ ...data, brandEvolution });
  };

  const patchBrand = (patch: Partial<BrandEvolutionContent>) => {
    updateBrand({ ...data.brandEvolution, ...patch });
  };

  const updateList = <T,>(
    key: keyof BrandEvolutionContent,
    listKey: string,
    items: T[]
  ) => {
    patchBrand({
      [key]: {
        ...(data.brandEvolution[key] as Record<string, unknown>),
        [listKey]: items,
      },
    } as Partial<BrandEvolutionContent>);
  };

  const brand = data.brandEvolution;

  return (
    <div id="ice-legacy" className="space-y-4 pt-10">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-display font-semibold md:text-3xl">ICE Legacy Page Editor</h2>
        <p className="text-sm text-muted-foreground">
          Manage Founder Vision and Marketplace Philosophy content, images, CTAs, cards, quotes, and timeline sections.
        </p>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <Tabs defaultValue="brand-evolution" className="w-full">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="brand-evolution">Brand Evolution</TabsTrigger>
          <TabsTrigger value="why-india-trusts">Why India Trusts</TabsTrigger>
          <TabsTrigger value="founder">Founder Vision</TabsTrigger>
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="actions">Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="brand-evolution" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Section Visibility</CardTitle>
              <CardDescription>Show or hide every section on the ICE Brand Evolution page.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-3">
              {Object.entries(brand.sectionVisibility).map(([key, value]) => (
                <ToggleField
                  key={key}
                  label={key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase())}
                  checked={value}
                  onChange={(checked) =>
                    patchBrand({
                      sectionVisibility: { ...brand.sectionVisibility, [key]: checked },
                    })
                  }
                />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Brand Evolution Hero</CardTitle>
              <CardDescription>Read and edit the H1 and subheadline shown at the top of the page.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Field
                label="H1 title"
                value={brand.hero.title}
                onChange={(title) => patchBrand({ hero: { ...brand.hero, title } })}
                multiline
              />
              <Field
                label="Subtitle"
                value={brand.hero.subtitle}
                onChange={(subtitle) => patchBrand({ hero: { ...brand.hero, subtitle } })}
                multiline
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle>Brand Name Evolution</CardTitle>
                <CardDescription>Four-step flow content. Add, edit, or delete flow steps.</CardDescription>
              </div>
              <ArrayActions
                onAdd={() =>
                  updateList("nameEvolution", "steps", [
                    ...brand.nameEvolution.steps,
                    { era: "New era", brandName: "New brand name", description: "Short description" },
                  ])
                }
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <Field
                label="Section heading"
                value={brand.nameEvolution.heading}
                onChange={(heading) => patchBrand({ nameEvolution: { ...brand.nameEvolution, heading } })}
              />
              {brand.nameEvolution.steps.map((step, index) => (
                <div key={`${step.era}-${index}`} className="rounded-lg border border-border p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">Step {index + 1}</h3>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        updateList(
                          "nameEvolution",
                          "steps",
                          brand.nameEvolution.steps.filter((_, itemIndex) => itemIndex !== index)
                        )
                      }
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field
                      label="Era chip"
                      value={step.era}
                      onChange={(era) =>
                        updateList(
                          "nameEvolution",
                          "steps",
                          brand.nameEvolution.steps.map((item, itemIndex) => (itemIndex === index ? { ...item, era } : item))
                        )
                      }
                    />
                    <Field
                      label="Brand name"
                      value={step.brandName}
                      onChange={(brandName) =>
                        updateList(
                          "nameEvolution",
                          "steps",
                          brand.nameEvolution.steps.map((item, itemIndex) =>
                            itemIndex === index ? { ...item, brandName } : item
                          )
                        )
                      }
                    />
                    <div className="md:col-span-2">
                      <Field
                        label="Description"
                        value={step.description}
                        onChange={(description) =>
                          updateList(
                            "nameEvolution",
                            "steps",
                            brand.nameEvolution.steps.map((item, itemIndex) =>
                              itemIndex === index ? { ...item, description } : item
                            )
                          )
                        }
                        multiline
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle>Logo History Grid</CardTitle>
                <CardDescription>Upload/paste media URLs from the media library and manage logo cards.</CardDescription>
              </div>
              <ArrayActions
                onAdd={() =>
                  updateList("logoHistory", "cards", [
                    ...brand.logoHistory.cards,
                    { image: "", era: "New era", caption: "Logo caption", alt: "ICE logo" },
                  ])
                }
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <Field
                label="Section heading"
                value={brand.logoHistory.heading}
                onChange={(heading) => patchBrand({ logoHistory: { ...brand.logoHistory, heading } })}
              />
              {brand.logoHistory.cards.map((card, index) => (
                <div key={`${card.era}-${index}`} className="rounded-lg border border-border p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">Logo card {index + 1}</h3>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        updateList(
                          "logoHistory",
                          "cards",
                          brand.logoHistory.cards.filter((_, itemIndex) => itemIndex !== index)
                        )
                      }
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {(["image", "era", "alt", "caption"] as const).map((field) => (
                      <Field
                        key={field}
                        label={field}
                        value={card[field]}
                        onChange={(value) =>
                          updateList(
                            "logoHistory",
                            "cards",
                            brand.logoHistory.cards.map((item, itemIndex) =>
                              itemIndex === index ? { ...item, [field]: value } : item
                            )
                          )
                        }
                        multiline={field === "caption"}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Brand Philosophy</CardTitle>
              <CardDescription>Edit the two-column explanation and supporting image.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Field
                label="H2 title"
                value={brand.philosophy.title}
                onChange={(title) => patchBrand({ philosophy: { ...brand.philosophy, title } })}
              />
              <Field
                label="Paragraphs, one per line"
                value={brand.philosophy.paragraphs.join("\n")}
                onChange={(value) =>
                  patchBrand({
                    philosophy: {
                      ...brand.philosophy,
                      paragraphs: value.split("\n").filter((item) => item.trim()),
                    },
                  })
                }
                multiline
              />
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Image URL"
                  value={brand.philosophy.image}
                  onChange={(image) => patchBrand({ philosophy: { ...brand.philosophy, image } })}
                />
                <Field
                  label="Image alt"
                  value={brand.philosophy.imageAlt}
                  onChange={(imageAlt) => patchBrand({ philosophy: { ...brand.philosophy, imageAlt } })}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle>Promo Material Showcase</CardTitle>
                <CardDescription>Manage marketing-material image cards.</CardDescription>
              </div>
              <ArrayActions
                onAdd={() =>
                  updateList("promoMaterials", "cards", [
                    ...brand.promoMaterials.cards,
                    { image: "", year: "Year", caption: "Caption", alt: "ICE promotional material" },
                  ])
                }
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <Field
                label="Section heading"
                value={brand.promoMaterials.heading}
                onChange={(heading) => patchBrand({ promoMaterials: { ...brand.promoMaterials, heading } })}
              />
              {brand.promoMaterials.cards.map((card, index) => (
                <div key={`${card.year}-${index}`} className="rounded-lg border border-border p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">Promo card {index + 1}</h3>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        updateList(
                          "promoMaterials",
                          "cards",
                          brand.promoMaterials.cards.filter((_, itemIndex) => itemIndex !== index)
                        )
                      }
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {(["image", "year", "alt", "caption"] as const).map((field) => (
                      <Field
                        key={field}
                        label={field}
                        value={card[field]}
                        onChange={(value) =>
                          updateList(
                            "promoMaterials",
                            "cards",
                            brand.promoMaterials.cards.map((item, itemIndex) =>
                              itemIndex === index ? { ...item, [field]: value } : item
                            )
                          )
                        }
                        multiline={field === "caption"}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle>Website Evolution Cards</CardTitle>
                <CardDescription>Add, edit, or delete the digital brand cards.</CardDescription>
              </div>
              <ArrayActions
                onAdd={() =>
                  updateList("websiteEvolution", "cards", [
                    ...brand.websiteEvolution.cards,
                    { title: "New digital milestone", body: "Milestone body" },
                  ])
                }
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <Field
                label="Section heading"
                value={brand.websiteEvolution.heading}
                onChange={(heading) => patchBrand({ websiteEvolution: { ...brand.websiteEvolution, heading } })}
              />
              {brand.websiteEvolution.cards.map((card, index) => (
                <div key={`${card.title}-${index}`} className="rounded-lg border border-border p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">Digital card {index + 1}</h3>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        updateList(
                          "websiteEvolution",
                          "cards",
                          brand.websiteEvolution.cards.filter((_, itemIndex) => itemIndex !== index)
                        )
                      }
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                  <Field
                    label="Heading"
                    value={card.title}
                    onChange={(title) =>
                      updateList(
                        "websiteEvolution",
                        "cards",
                        brand.websiteEvolution.cards.map((item, itemIndex) => (itemIndex === index ? { ...item, title } : item))
                      )
                    }
                  />
                  <Field
                    label="Body"
                    value={card.body}
                    onChange={(body) =>
                      updateList(
                        "websiteEvolution",
                        "cards",
                        brand.websiteEvolution.cards.map((item, itemIndex) => (itemIndex === index ? { ...item, body } : item))
                      )
                    }
                    multiline
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle>Brand Constants</CardTitle>
                <CardDescription>Manage the values that never changed.</CardDescription>
              </div>
              <ArrayActions
                onAdd={() =>
                  updateList("brandValues", "cards", [
                    ...brand.brandValues.cards,
                    { title: "New value", body: "Value body" },
                  ])
                }
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <Field
                label="Section heading"
                value={brand.brandValues.heading}
                onChange={(heading) => patchBrand({ brandValues: { ...brand.brandValues, heading } })}
              />
              {brand.brandValues.cards.map((card, index) => (
                <div key={`${card.title}-${index}`} className="rounded-lg border border-border p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">Value card {index + 1}</h3>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        updateList(
                          "brandValues",
                          "cards",
                          brand.brandValues.cards.filter((_, itemIndex) => itemIndex !== index)
                        )
                      }
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                  <Field
                    label="Heading"
                    value={card.title}
                    onChange={(title) =>
                      updateList(
                        "brandValues",
                        "cards",
                        brand.brandValues.cards.map((item, itemIndex) => (itemIndex === index ? { ...item, title } : item))
                      )
                    }
                  />
                  <Field
                    label="Body"
                    value={card.body}
                    onChange={(body) =>
                      updateList(
                        "brandValues",
                        "cards",
                        brand.brandValues.cards.map((item, itemIndex) => (itemIndex === index ? { ...item, body } : item))
                      )
                    }
                    multiline
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle>Brand Milestone Strip</CardTitle>
                <CardDescription>Add, edit, or delete milestone nodes.</CardDescription>
              </div>
              <ArrayActions
                onAdd={() =>
                  updateList("milestones", "nodes", [...brand.milestones.nodes, { year: "Year", body: "Milestone body" }])
                }
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <Field
                label="Section heading"
                value={brand.milestones.heading}
                onChange={(heading) => patchBrand({ milestones: { ...brand.milestones, heading } })}
              />
              {brand.milestones.nodes.map((node, index) => (
                <div key={`${node.year}-${index}`} className="rounded-lg border border-border p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">Milestone {index + 1}</h3>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        updateList(
                          "milestones",
                          "nodes",
                          brand.milestones.nodes.filter((_, itemIndex) => itemIndex !== index)
                        )
                      }
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-[220px_1fr]">
                    <Field
                      label="Year"
                      value={node.year}
                      onChange={(year) =>
                        updateList(
                          "milestones",
                          "nodes",
                          brand.milestones.nodes.map((item, itemIndex) => (itemIndex === index ? { ...item, year } : item))
                        )
                      }
                    />
                    <Field
                      label="Body"
                      value={node.body}
                      onChange={(body) =>
                        updateList(
                          "milestones",
                          "nodes",
                          brand.milestones.nodes.map((item, itemIndex) => (itemIndex === index ? { ...item, body } : item))
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Brand CTA</CardTitle>
              <CardDescription>Edit the final conversion section.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Field label="Heading" value={brand.cta.heading} onChange={(heading) => patchBrand({ cta: { ...brand.cta, heading } })} />
              <Field
                label="Subtitle"
                value={brand.cta.subtitle}
                onChange={(subtitle) => patchBrand({ cta: { ...brand.cta, subtitle } })}
                multiline
              />
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Primary CTA label"
                  value={brand.cta.primaryCta.label}
                  onChange={(label) => patchBrand({ cta: { ...brand.cta, primaryCta: { ...brand.cta.primaryCta, label } } })}
                />
                <Field
                  label="Primary CTA URL"
                  value={brand.cta.primaryCta.href}
                  onChange={(href) => patchBrand({ cta: { ...brand.cta, primaryCta: { ...brand.cta.primaryCta, href } } })}
                />
                <Field
                  label="Secondary CTA label"
                  value={brand.cta.secondaryCta.label}
                  onChange={(label) => patchBrand({ cta: { ...brand.cta, secondaryCta: { ...brand.cta.secondaryCta, label } } })}
                />
                <Field
                  label="Secondary CTA URL"
                  value={brand.cta.secondaryCta.href}
                  onChange={(href) => patchBrand({ cta: { ...brand.cta, secondaryCta: { ...brand.cta.secondaryCta, href } } })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="why-india-trusts" className="mt-4">
          <WhyIndiaTrustsIceEditor
            data={data.whyIndiaTrustsIce}
            onChange={(whyIndiaTrustsIce) => onChange({ ...data, whyIndiaTrustsIce })}
          />
        </TabsContent>

        {/* <TabsContent value="founder" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Founder Vision Content</CardTitle>
              <CardDescription>
                Edit the complete Sub-page 02 content tree. Keep valid JSON object syntax.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={founderText}
                onChange={(event) => setFounderText(event.target.value)}
                rows={30}
                className="font-mono text-xs leading-5"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="philosophy" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Marketplace Philosophy Content</CardTitle>
              <CardDescription>
                Edit the complete Sub-page 03 content tree. Keep valid JSON object syntax.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={philosophyText}
                onChange={(event) => setPhilosophyText(event.target.value)}
                rows={24}
                className="font-mono text-xs leading-5"
              />
            </CardContent>
          </Card>
        </TabsContent> */}

        <TabsContent value="actions" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Publish Changes</CardTitle>
              <CardDescription>
                Apply JSON edits, save them to the backend, or restore the default ICE Legacy content.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-end gap-3">
              <Button variant="outline" onClick={onRestore} disabled={saving || loading}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Restore defaults
              </Button>
              <Button variant="outline" onClick={apply} disabled={saving || loading}>
                Apply JSON
              </Button>
              <Button onClick={save} disabled={saving || loading}>
                <Save className="mr-2 h-4 w-4" />
                {saving ? "Saving..." : "Save ICE Legacy"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IceLegacyEditor;
