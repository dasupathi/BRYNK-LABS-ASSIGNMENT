
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { api } from '@/services/api';
import { useToast } from "@/hooks/use-toast";

const CMSForm: React.FC = () => {
  const [heading, setHeading] = useState<string>("");
  const [headingColor, setHeadingColor] = useState<string>("#0056A4"); // Default color is brynk-blue
  const [highlightText, setHighlightText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchHeading = async () => {
      try {
        setLoading(true);
        const response = await api.getHeading();
        setHeading(response.heading);
        if (response.headingColor) {
          setHeadingColor(response.headingColor);
        }
        if (response.highlightText) {
          setHighlightText(response.highlightText);
        }
      } catch (error) {
        console.error("Failed to fetch heading:", error);
        toast({
          title: "Error",
          description: "Failed to load current heading.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHeading();
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      await api.saveHeading(heading, headingColor, highlightText);
      toast({
        title: "Success",
        description: "Heading updated successfully.",
      });
    } catch (error) {
      console.error("Failed to save heading:", error);
      toast({
        title: "Error",
        description: "Failed to update heading.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  // Function to generate preview with highlighted text
  const getHeadingPreview = () => {
    if (!highlightText || !heading.includes(highlightText)) {
      return <span>{heading}</span>;
    }

    const parts = heading.split(new RegExp(`(${highlightText})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === highlightText.toLowerCase() 
            ? <span key={i} style={{ color: headingColor }}>{part}</span> 
            : <span key={i}>{part}</span>
        )}
      </>
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto backdrop-blur-sm bg-white/90 border shadow-lg animate-[fadeIn_0.5s_ease-out] hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-center text-brynk-blue">Heading Management</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 animate-[slideIn_0.3s_ease-out]" style={{ animationDelay: "0.1s" }}>
            <label htmlFor="heading" className="text-sm font-medium">
              Heading
            </label>
            <Input
              id="heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              disabled={loading}
              className="w-full transition-all duration-300 focus:ring-2 focus:ring-brynk-blue focus:ring-opacity-50"
              placeholder="Enter the main heading text here"
            />
          </div>

          <div className="space-y-2 animate-[slideIn_0.3s_ease-out]" style={{ animationDelay: "0.2s" }}>
            <label htmlFor="highlightText" className="text-sm font-medium">
              Text to Highlight
            </label>
            <Input
              id="highlightText"
              value={highlightText}
              onChange={(e) => setHighlightText(e.target.value)}
              disabled={loading}
              className="w-full transition-all duration-300 focus:ring-2 focus:ring-brynk-blue focus:ring-opacity-50"
              placeholder="Enter text to highlight with color"
            />
            <p className="text-xs text-gray-500">
              Enter specific words from the heading that you want to highlight with color
            </p>
          </div>

          <div className="space-y-2 animate-[slideIn_0.3s_ease-out]" style={{ animationDelay: "0.3s" }}>
            <label htmlFor="headingColor" className="text-sm font-medium">
              Highlight Color
            </label>
            <div className="flex items-center gap-3">
              <Input
                id="headingColor"
                type="color"
                value={headingColor}
                onChange={(e) => setHeadingColor(e.target.value)}
                disabled={loading}
                className="w-12 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={headingColor}
                onChange={(e) => setHeadingColor(e.target.value)}
                disabled={loading}
                className="flex-1 transition-all duration-300 focus:ring-2 focus:ring-brynk-blue focus:ring-opacity-50"
                placeholder="#000000"
              />
            </div>
          </div>

          <div className="mt-4 p-4 border rounded-md bg-gray-50/80 backdrop-blur-sm animate-[slideIn_0.3s_ease-out]" style={{ animationDelay: "0.4s", transform: "perspective(1000px) rotateX(2deg)" }}>
            <p className="text-sm font-medium mb-2">Preview:</p>
            <p className="text-lg">{getHeadingPreview()}</p>
          </div>
          
          <div className="flex justify-end space-x-4 animate-[slideIn_0.3s_ease-out]" style={{ animationDelay: "0.5s" }}>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => window.location.href = '/'}
              className="hover:scale-105 transition-transform duration-300"
            >
              Exit
            </Button>
            <Button 
              type="submit" 
              disabled={loading || saving}
              className="bg-brynk-blue hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
            >
              {saving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CMSForm;
