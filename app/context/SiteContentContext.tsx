'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { SiteContent, defaultContent } from '@/lib/defaultContent';

const STORAGE_KEY = 'erin-ijesa-site-content';

type SiteContentContextValue = {
  content: SiteContent;
  isLoaded: boolean;
  setEntireContent: (content: SiteContent) => void;
  updateSection: <K extends keyof SiteContent>(section: K, value: SiteContent[K]) => void;
  resetContent: () => void;
};

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

function mergeContent(partial: Partial<SiteContent>): SiteContent {
  return {
    ...defaultContent,
    ...partial,
    hero: {
      ...defaultContent.hero,
      ...partial.hero,
    },
    overview: {
      ...defaultContent.overview,
      ...partial.overview,
    },
    culture: {
      ...defaultContent.culture,
      ...partial.culture,
      timeline: partial.culture?.timeline ?? defaultContent.culture.timeline,
    },
    experiences: {
      ...defaultContent.experiences,
      ...partial.experiences,
      items: partial.experiences?.items ?? defaultContent.experiences.items,
    },
    planning: {
      ...defaultContent.planning,
      ...partial.planning,
      tips: partial.planning?.tips ?? defaultContent.planning.tips,
    },
    gallery: {
      ...defaultContent.gallery,
      ...partial.gallery,
      items: partial.gallery?.items ?? defaultContent.gallery.items,
    },
    footer: {
      ...defaultContent.footer,
      ...partial.footer,
      social: partial.footer?.social ?? defaultContent.footer.social,
    },
    attractions: partial.attractions ?? defaultContent.attractions,
  };
}

export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<SiteContent>;
        setContent(mergeContent(parsed));
      }
    } catch (error) {
      console.warn('Unable to read saved site content', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (error) {
      console.warn('Unable to persist site content', error);
    }
  }, [content, isLoaded]);

  const value = useMemo<SiteContentContextValue>(
    () => ({
      content,
      isLoaded,
      setEntireContent: setContent,
      updateSection: (section, value) => {
        setContent((prev) => ({
          ...prev,
          [section]: value,
        }));
      },
      resetContent: () => setContent(defaultContent),
    }),
    [content, isLoaded]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);
  if (!context) {
    throw new Error('useSiteContent must be used within a SiteContentProvider');
  }
  return context;
}
