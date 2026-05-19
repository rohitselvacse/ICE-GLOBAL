import { useEffect, useState } from "react";
import { AlertCircle, RotateCcw, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { type IceLegacyContent } from "@/data/ice-legacy";

interface IceLegacyEditorProps {
  data: IceLegacyContent;
  onChange: (data: IceLegacyContent) => void;
  onSave: (nextData?: IceLegacyContent) => void;
  onRestore: () => void;
  saving: boolean;
  loading: boolean;
}

const formatJson = (value: unknown) => JSON.stringify(value, null, 2);

const parseSection = <T,>(value: string, sectionName: string): T => {
  try {
    return JSON.parse(value) as T;
  } catch {
    throw new Error(`${sectionName} JSON is not valid`);
  }
};

const IceLegacyEditor = ({ data, onChange, onSave, onRestore, saving, loading }: IceLegacyEditorProps) => {
  const [founderText, setFounderText] = useState(formatJson(data.founderVision));
  const [philosophyText, setPhilosophyText] = useState(formatJson(data.marketplacePhilosophy));
  const [error, setError] = useState("");

  useEffect(() => {
    setFounderText(formatJson(data.founderVision));
    setPhilosophyText(formatJson(data.marketplacePhilosophy));
  }, [data]);

  const getParsed = () => {
    const next: IceLegacyContent = {
      founderVision: parseSection(founderText, "Founder Vision"),
      marketplacePhilosophy: parseSection(philosophyText, "Marketplace Philosophy"),
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

      <Tabs defaultValue="founder" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="founder">Founder Vision</TabsTrigger>
          <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
          <TabsTrigger value="actions">Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="founder" className="mt-4">
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
        </TabsContent>

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
