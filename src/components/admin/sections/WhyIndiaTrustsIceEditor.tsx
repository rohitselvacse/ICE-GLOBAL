import { Plus, Trash2 } from "lucide-react";
import { type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type WhyIndiaTrustsIceContent } from "@/data/ice-legacy";

interface WhyIndiaTrustsIceEditorProps {
  data: WhyIndiaTrustsIceContent;
  onChange: (data: WhyIndiaTrustsIceContent) => void;
}

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
  <label className="space-y-2">
    <span className="text-sm font-medium text-muted-foreground">{label}</span>
    {multiline ? (
      <Textarea value={value} onChange={(event) => onChange(event.target.value)} rows={4} />
    ) : (
      <Input value={value} onChange={(event) => onChange(event.target.value)} />
    )}
  </label>
);

const SectionCard = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">{children}</CardContent>
  </Card>
);

const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <Button type="button" variant="destructive" size="sm" onClick={onClick}>
    <Trash2 className="mr-2 h-4 w-4" />
    Delete
  </Button>
);

const AddButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <Button type="button" variant="outline" size="sm" onClick={onClick}>
    <Plus className="mr-2 h-4 w-4" />
    {label}
  </Button>
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

const WhyIndiaTrustsIceEditor = ({ data, onChange }: WhyIndiaTrustsIceEditorProps) => {
  const patch = (patchData: Partial<WhyIndiaTrustsIceContent>) => onChange({ ...data, ...patchData });

  const updateArray = <T,>(items: T[], index: number, nextItem: T) =>
    items.map((item, itemIndex) => (itemIndex === index ? nextItem : item));

  return (
    <div className="space-y-4">
      <SectionCard title="Section Visibility" description="Show or hide every section on the Why India Trusts ICE page.">
        <div className="grid gap-3 md:grid-cols-3">
          {Object.entries(data.sectionVisibility).map(([key, value]) => (
            <ToggleField
              key={key}
              label={key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase())}
              checked={value}
              onChange={(checked) =>
                patch({
                  sectionVisibility: {
                    ...data.sectionVisibility,
                    [key]: checked,
                  },
                })
              }
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Hero" description="Edit the split hero headline, trust chips, and image.">
        <Field label="H1 title" value={data.hero.title} onChange={(title) => patch({ hero: { ...data.hero, title } })} multiline />
        <Field
          label="Hero paragraph"
          value={data.hero.subtitle}
          onChange={(subtitle) => patch({ hero: { ...data.hero, subtitle } })}
          multiline
        />
        <Field
          label="Trust chips, one per line"
          value={data.hero.chips.join("\n")}
          onChange={(value) =>
            patch({ hero: { ...data.hero, chips: value.split("\n").map((item) => item.trim()).filter(Boolean) } })
          }
          multiline
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Hero image URL" value={data.hero.image} onChange={(image) => patch({ hero: { ...data.hero, image } })} />
          <Field label="Hero image alt" value={data.hero.imageAlt} onChange={(imageAlt) => patch({ hero: { ...data.hero, imageAlt } })} />
        </div>
      </SectionCard>

      <SectionCard title="Five Credibility Pillars" description="Add, update, or delete alternating text and image rows.">
        <div className="flex justify-end">
          <AddButton
            label="Add pillar"
            onClick={() =>
              patch({
                pillars: {
                  ...data.pillars,
                  reasons: [
                    ...data.pillars.reasons,
                    { title: "New credibility pillar", body: "Write the proof point.", image: "", imageAlt: "ICE proof image" },
                  ],
                },
              })
            }
          />
        </div>
        <Field
          label="Section heading"
          value={data.pillars.title}
          onChange={(title) => patch({ pillars: { ...data.pillars, title } })}
        />
        {data.pillars.reasons.map((reason, index) => (
          <div key={`${reason.title}-${index}`} className="rounded-lg border border-border p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Pillar {index + 1}</h3>
              <DeleteButton
                onClick={() =>
                  patch({ pillars: { ...data.pillars, reasons: data.pillars.reasons.filter((_, itemIndex) => itemIndex !== index) } })
                }
              />
            </div>
            <div className="grid gap-4">
              <Field
                label="Heading"
                value={reason.title}
                onChange={(title) =>
                  patch({ pillars: { ...data.pillars, reasons: updateArray(data.pillars.reasons, index, { ...reason, title }) } })
                }
              />
              <Field
                label="Body"
                value={reason.body}
                onChange={(body) =>
                  patch({ pillars: { ...data.pillars, reasons: updateArray(data.pillars.reasons, index, { ...reason, body }) } })
                }
                multiline
              />
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label="Image URL"
                  value={reason.image}
                  onChange={(image) =>
                    patch({ pillars: { ...data.pillars, reasons: updateArray(data.pillars.reasons, index, { ...reason, image }) } })
                  }
                />
                <Field
                  label="Image alt"
                  value={reason.imageAlt}
                  onChange={(imageAlt) =>
                    patch({ pillars: { ...data.pillars, reasons: updateArray(data.pillars.reasons, index, { ...reason, imageAlt }) } })
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </SectionCard>

      <SectionCard title="Stats Strip" description="Manage the four proof counters shown below the pillar rows.">
        <div className="flex justify-end">
          <AddButton label="Add stat" onClick={() => patch({ stats: [...data.stats, { value: "New", label: "Stat label" }] })} />
        </div>
        {data.stats.map((stat, index) => (
          <div key={`${stat.value}-${index}`} className="grid gap-4 rounded-lg border border-border p-4 md:grid-cols-[180px_1fr_auto]">
            <Field
              label="Value"
              value={stat.value}
              onChange={(value) => patch({ stats: updateArray(data.stats, index, { ...stat, value }) })}
            />
            <Field
              label="Label"
              value={stat.label}
              onChange={(label) => patch({ stats: updateArray(data.stats, index, { ...stat, label }) })}
            />
            <div className="flex items-end">
              <DeleteButton onClick={() => patch({ stats: data.stats.filter((_, itemIndex) => itemIndex !== index) })} />
            </div>
          </div>
        ))}
      </SectionCard>

      <SectionCard title="Media Proof" description="Representative press and media coverage cards.">
        <div className="flex justify-end">
          <AddButton
            label="Add media card"
            onClick={() =>
              patch({
                mediaProof: {
                  ...data.mediaProof,
                  cards: [
                    ...data.mediaProof.cards,
                    {
                      source: "Publication",
                      headline: "Headline",
                      detail: "Context",
                      year: "Year",
                      image: "",
                      imageAlt: "Media clipping",
                    },
                  ],
                },
              })
            }
          />
        </div>
        <Field
          label="Section heading"
          value={data.mediaProof.title}
          onChange={(title) => patch({ mediaProof: { ...data.mediaProof, title } })}
        />
        {data.mediaProof.cards.map((card, index) => (
          <div key={`${card.source}-${index}`} className="rounded-lg border border-border p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Media card {index + 1}</h3>
              <DeleteButton
                onClick={() =>
                  patch({ mediaProof: { ...data.mediaProof, cards: data.mediaProof.cards.filter((_, itemIndex) => itemIndex !== index) } })
                }
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {(["source", "headline", "detail", "year", "image", "imageAlt"] as const).map((field) => (
                <Field
                  key={field}
                  label={field}
                  value={card[field] || ""}
                  onChange={(value) =>
                    patch({
                      mediaProof: {
                        ...data.mediaProof,
                        cards: updateArray(data.mediaProof.cards, index, { ...card, [field]: value }),
                      },
                    })
                  }
                  multiline={field === "headline" || field === "detail"}
                />
              ))}
            </div>
          </div>
        ))}
      </SectionCard>

      <TestimonialSection
        title="Buyer Testimonials"
        section={data.buyerTestimonials}
        onChange={(buyerTestimonials) => patch({ buyerTestimonials })}
      />
      <TestimonialSection
        title="Seller / Brand Testimonials"
        section={data.sellerTestimonials}
        onChange={(sellerTestimonials) => patch({ sellerTestimonials })}
      />

      <PeopleGallerySection
        title="VVIP Gallery"
        section={data.vvipGallery}
        fields={["image", "name", "title", "year"]}
        onChange={(vvipGallery) => patch({ vvipGallery })}
      />
      <PeopleGallerySection
        title="Celebrity Gallery"
        section={data.celebrityGallery}
        fields={["image", "name", "occasion", "year"]}
        onChange={(celebrityGallery) => patch({ celebrityGallery })}
      />

      <SectionCard title="Closing CTA" description="Edit the final conversion section and both links.">
        <Field label="Statement" value={data.closingCta.title} onChange={(title) => patch({ closingCta: { ...data.closingCta, title } })} multiline />
        <Field
          label="Sub text"
          value={data.closingCta.subtitle}
          onChange={(subtitle) => patch({ closingCta: { ...data.closingCta, subtitle } })}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Primary CTA label"
            value={data.closingCta.primaryCta.label}
            onChange={(label) => patch({ closingCta: { ...data.closingCta, primaryCta: { ...data.closingCta.primaryCta, label } } })}
          />
          <Field
            label="Primary CTA URL"
            value={data.closingCta.primaryCta.href}
            onChange={(href) => patch({ closingCta: { ...data.closingCta, primaryCta: { ...data.closingCta.primaryCta, href } } })}
          />
          <Field
            label="Secondary CTA label"
            value={data.closingCta.secondaryCta.label}
            onChange={(label) => patch({ closingCta: { ...data.closingCta, secondaryCta: { ...data.closingCta.secondaryCta, label } } })}
          />
          <Field
            label="Secondary CTA URL"
            value={data.closingCta.secondaryCta.href}
            onChange={(href) => patch({ closingCta: { ...data.closingCta, secondaryCta: { ...data.closingCta.secondaryCta, href } } })}
          />
        </div>
      </SectionCard>
    </div>
  );
};

const TestimonialSection = ({
  title,
  section,
  onChange,
}: {
  title: string;
  section: WhyIndiaTrustsIceContent["buyerTestimonials"];
  onChange: (section: WhyIndiaTrustsIceContent["buyerTestimonials"]) => void;
}) => {
  const updateArray = <T,>(items: T[], index: number, nextItem: T) =>
    items.map((item, itemIndex) => (itemIndex === index ? nextItem : item));

  return (
    <SectionCard title={title} description="Add, edit, or delete testimonial cards.">
      <div className="flex justify-end">
        <AddButton
          label="Add testimonial"
          onClick={() =>
            onChange({
              ...section,
              cards: [...section.cards, { name: "Name", designation: "Designation", quote: "Quote", rating: "5.0", image: "" }],
            })
          }
        />
      </div>
      <Field label="Section heading" value={section.title} onChange={(sectionTitle) => onChange({ ...section, title: sectionTitle })} />
      {section.cards.map((card, index) => (
        <div key={`${card.name}-${index}`} className="rounded-lg border border-border p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Testimonial {index + 1}</h3>
            <DeleteButton onClick={() => onChange({ ...section, cards: section.cards.filter((_, itemIndex) => itemIndex !== index) })} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {(["name", "designation", "rating", "image"] as const).map((field) => (
              <Field
                key={field}
                label={field}
                value={card[field]}
                onChange={(value) => onChange({ ...section, cards: updateArray(section.cards, index, { ...card, [field]: value }) })}
              />
            ))}
            <div className="md:col-span-2">
              <Field
                label="quote"
                value={card.quote}
                onChange={(quote) => onChange({ ...section, cards: updateArray(section.cards, index, { ...card, quote }) })}
                multiline
              />
            </div>
          </div>
        </div>
      ))}
    </SectionCard>
  );
};

const PeopleGallerySection = <T extends Record<string, string>>({
  title,
  section,
  fields,
  onChange,
}: {
  title: string;
  section: { title: string; cards: T[] };
  fields: (keyof T)[];
  onChange: (section: { title: string; cards: T[] }) => void;
}) => {
  const updateArray = (items: T[], index: number, nextItem: T) =>
    items.map((item, itemIndex) => (itemIndex === index ? nextItem : item));

  const blank = fields.reduce((acc, field) => ({ ...acc, [field]: field === "image" ? "" : String(field) }), {} as T);

  return (
    <SectionCard title={title} description="Manage gallery cards with image, names, labels, and years.">
      <div className="flex justify-end">
        <AddButton label="Add gallery card" onClick={() => onChange({ ...section, cards: [...section.cards, blank] })} />
      </div>
      <Field label="Section heading" value={section.title} onChange={(sectionTitle) => onChange({ ...section, title: sectionTitle })} />
      {section.cards.map((card, index) => (
        <div key={`${card.name || card.title || index}-${index}`} className="rounded-lg border border-border p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Gallery card {index + 1}</h3>
            <DeleteButton onClick={() => onChange({ ...section, cards: section.cards.filter((_, itemIndex) => itemIndex !== index) })} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {fields.map((field) => (
              <Field
                key={String(field)}
                label={String(field)}
                value={card[field] || ""}
                onChange={(value) => onChange({ ...section, cards: updateArray(section.cards, index, { ...card, [field]: value }) })}
              />
            ))}
          </div>
        </div>
      ))}
    </SectionCard>
  );
};

export default WhyIndiaTrustsIceEditor;
