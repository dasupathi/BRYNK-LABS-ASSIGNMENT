
import React, { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { useToast } from "@/hooks/use-toast";

const Hero: React.FC = () => {
  const [heading, setHeading] = useState<string>("");
  const [headingColor, setHeadingColor] = useState<string>("#0056A4");
  const [highlightText, setHighlightText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
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
          description: "Failed to load heading content.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHeading();
  }, [toast]);

  // Function to render heading with highlighted text
  const renderHeading = () => {
    if (!highlightText || !heading.includes(highlightText)) {
      return heading;
    }

    const parts = heading.split(new RegExp(`(${highlightText})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === highlightText.toLowerCase() 
            ? <span key={i} style={{ color: headingColor }} className="transition-all duration-500 hover:scale-105 inline-block">{part}</span> 
            : <span key={i}>{part}</span>
        )}
      </>
    );
  };

  return (
    <section className="relative bg-gradient-to-br from-brynk-grey to-gray-100 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: index % 2 === 0 ? '#0056A4' : '#46627c',
              animation: `float-${index % 3} ${Math.random() * 15 + 15}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8 relative z-10">
        {loading ? (
          <div className="h-12 w-3/4 mx-auto bg-gray-200 animate-pulse rounded"></div>
        ) : (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 max-w-3xl mx-auto animate-[fadeIn_0.8s_ease-out] perspective-container">
            {renderHeading()}
          </h2>
        )}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto animate-[slideIn_0.5s_ease-out]" style={{ animationDelay: "0.2s" }}>
          Unlock the potential of your business with our cutting-edge solutions. We deliver value through innovation and expertise.
        </p>
        <div className="mt-10 animate-[slideIn_0.5s_ease-out]" style={{ animationDelay: "0.4s" }}>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brynk-blue hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
