'use client';

import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { SiteContent, defaultContent } from '@/lib/defaultContent';
import { useSiteContent } from '../context/SiteContentContext';

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export default function AdminPage() {
  const { content, setEntireContent, resetContent, isLoaded } = useSiteContent();
  const [draft, setDraft] = useState<SiteContent>(content);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded) {
      setDraft(content);
    }
  }, [content, isLoaded]);

  const handleHeroChange = (field: keyof SiteContent['hero'], value: string) => {
    setDraft((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value,
      },
    }));
  };

  const handleOverviewHighlightChange = (index: number, value: string) => {
    setDraft((prev) => {
      const highlights = [...prev.overview.highlights];
      highlights[index] = value;
      return {
        ...prev,
        overview: {
          ...prev.overview,
          highlights,
        },
      };
    });
  };

  const handleTimelineChange = (index: number, field: 'title' | 'description', value: string) => {
    setDraft((prev) => {
      const timeline = [...prev.culture.timeline];
      timeline[index] = {
        ...timeline[index],
        [field]: value,
      };
      return {
        ...prev,
        culture: {
          ...prev.culture,
          timeline,
        },
      };
    });
  };

  const handleAttractionChange = (index: number, field: 'title' | 'description' | 'image', value: string) => {
    setDraft((prev) => {
      const attractions = [...prev.attractions];
      attractions[index] = {
        ...attractions[index],
        [field]: value,
      };
      return { ...prev, attractions };
    });
  };

  const handleExperienceChange = (index: number, field: 'title' | 'description' | 'image', value: string) => {
    setDraft((prev) => {
      const items = [...prev.experiences.items];
      items[index] = {
        ...items[index],
        [field]: value,
      };
      return {
        ...prev,
        experiences: {
          ...prev.experiences,
          items,
        },
      };
    });
  };

  const handlePlanningTipChange = (index: number, field: 'title' | 'description', value: string) => {
    setDraft((prev) => {
      const tips = [...prev.planning.tips];
      tips[index] = {
        ...tips[index],
        [field]: value,
      };
      return {
        ...prev,
        planning: {
          ...prev.planning,
          tips,
        },
      };
    });
  };

  const handleGalleryChange = (index: number, field: 'src' | 'alt', value: string) => {
    setDraft((prev) => {
      const items = [...prev.gallery.items];
      items[index] = {
        ...items[index],
        [field]: value,
      };
      return {
        ...prev,
        gallery: {
          ...prev.gallery,
          items,
        },
      };
    });
  };

  const handleFooterChange = (field: keyof SiteContent['footer'], value: any) => {
    setDraft((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        [field]: value,
      },
    }));
  };

  const handleSocialChange = (index: number, field: 'platform' | 'url', value: string) => {
    setDraft((prev) => {
      const social = [...prev.footer.social];
      social[index] = {
        ...social[index],
        [field]: value,
      };
      return {
        ...prev,
        footer: {
          ...prev.footer,
          social,
        },
      };
    });
  };

  const addHighlight = () => {
    setDraft((prev) => ({
      ...prev,
      overview: {
        ...prev.overview,
        highlights: [...prev.overview.highlights, 'New highlight'],
      },
    }));
  };

  const addTimeline = () => {
    setDraft((prev) => ({
      ...prev,
      culture: {
        ...prev.culture,
        timeline: [
          ...prev.culture.timeline,
          { title: 'New milestone', description: 'Describe the cultural moment.' },
        ],
      },
    }));
  };

  const addAttraction = () => {
    setDraft((prev) => ({
      ...prev,
      attractions: [
        ...prev.attractions,
        {
          title: 'New attraction',
          description: 'Tell visitors why this spot is special.',
          image: '',
        },
      ],
    }));
  };

  const addExperience = () => {
    setDraft((prev) => ({
      ...prev,
      experiences: {
        ...prev.experiences,
        items: [
          ...prev.experiences.items,
          {
            title: 'New experience',
            description: 'Share the feeling this moment delivers.',
            image: '',
          },
        ],
      },
    }));
  };

  const addPlanningTip = () => {
    setDraft((prev) => ({
      ...prev,
      planning: {
        ...prev.planning,
        tips: [
          ...prev.planning.tips,
          { title: 'New travel tip', description: 'Offer practical guidance.' },
        ],
      },
    }));
  };

  const addGalleryItem = () => {
    setDraft((prev) => ({
      ...prev,
      gallery: {
        ...prev.gallery,
        items: [
          ...prev.gallery.items,
          { id: `gallery-${Date.now()}`, src: '', alt: 'New gallery item' },
        ],
      },
    }));
  };

  const addSocialLink = () => {
    setDraft((prev) => ({
      ...prev,
      footer: {
        ...prev.footer,
        social: [
          ...prev.footer.social,
          { platform: 'New platform', url: 'https://example.com' },
        ],
      },
    }));
  };

  const removeItem = <T,>(items: T[], index: number) => items.filter((_, i) => i !== index);

  const handleRemove = (collection: keyof SiteContent, index: number) => {
    setDraft((prev) => {
      if (collection === 'overview') {
        return {
          ...prev,
          overview: {
            ...prev.overview,
            highlights: removeItem(prev.overview.highlights, index),
          },
        };
      }
      if (collection === 'culture') {
        return {
          ...prev,
          culture: {
            ...prev.culture,
            timeline: removeItem(prev.culture.timeline, index),
          },
        };
      }
      if (collection === 'attractions') {
        return {
          ...prev,
          attractions: removeItem(prev.attractions, index),
        };
      }
      if (collection === 'experiences') {
        return {
          ...prev,
          experiences: {
            ...prev.experiences,
            items: removeItem(prev.experiences.items, index),
          },
        };
      }
      if (collection === 'planning') {
        return {
          ...prev,
          planning: {
            ...prev.planning,
            tips: removeItem(prev.planning.tips, index),
          },
        };
      }
      if (collection === 'gallery') {
        return {
          ...prev,
          gallery: {
            ...prev.gallery,
            items: removeItem(prev.gallery.items, index),
          },
        };
      }
      if (collection === 'footer') {
        return {
          ...prev,
          footer: {
            ...prev.footer,
            social: removeItem(prev.footer.social, index),
          },
        };
      }
      return prev;
    });
  };

  const handleFileUpload = async (
    event: ChangeEvent<HTMLInputElement>,
    onValue: (value: string) => void
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    onValue(dataUrl);
    event.target.value = '';
  };

  const handleSave = () => {
    setEntireContent(draft);
    setStatus('Content saved to local storage. Refresh the main page to preview.');
    setTimeout(() => setStatus(null), 4000);
  };

  const handleReset = () => {
    resetContent();
    setDraft(defaultContent);
    setStatus('Content reset to curated defaults.');
    setTimeout(() => setStatus(null), 4000);
  };

  const unsavedChanges = useMemo(() => JSON.stringify(draft) !== JSON.stringify(content), [draft, content]);

  return (
    <div className="admin-container">
      <div className="admin-card">
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', margin: 0 }}>Admin Studio</h1>
          <p style={{ marginTop: '0.5rem', maxWidth: '60ch', color: 'var(--color-muted)' }}>
            Edit every facet of the Erin Ijesa experience. Upload new visuals, rewrite copy, and curate itineraries without
            leaving the browser. Changes are stored locally in this device so you can iterate safely before publishing.
          </p>
          {status && (
            <p style={{ marginTop: '1rem', color: 'var(--color-primary)', fontWeight: 600 }}>{status}</p>
          )}
        </div>

        <div className="admin-grid">
          <section>
            <h2 style={{ fontFamily: 'var(--font-display)' }}>Hero Area</h2>
            <div className="admin-field">
              <label htmlFor="hero-title">Title</label>
              <input
                id="hero-title"
                value={draft.hero.title}
                onChange={(event) => handleHeroChange('title', event.target.value)}
              />
            </div>
            <div className="admin-field">
              <label htmlFor="hero-subtitle">Subtitle</label>
              <textarea
                id="hero-subtitle"
                value={draft.hero.subtitle}
                onChange={(event) => handleHeroChange('subtitle', event.target.value)}
              />
            </div>
            <div className="admin-field">
              <label htmlFor="hero-cta-primary">Primary Call to Action</label>
              <input
                id="hero-cta-primary"
                value={draft.hero.ctaPrimary}
                onChange={(event) => handleHeroChange('ctaPrimary', event.target.value)}
              />
            </div>
            <div className="admin-field">
              <label htmlFor="hero-cta-secondary">Secondary Call to Action</label>
              <input
                id="hero-cta-secondary"
                value={draft.hero.ctaSecondary}
                onChange={(event) => handleHeroChange('ctaSecondary', event.target.value)}
              />
            </div>
            <div className="admin-field">
              <label htmlFor="hero-image">Hero Image</label>
              <input
                id="hero-image"
                value={draft.hero.image}
                placeholder="Paste an image URL or upload a file"
                onChange={(event) => handleHeroChange('image', event.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleFileUpload(event, (value) => handleHeroChange('image', value))}
              />
            </div>
            <div className="admin-field">
              <label htmlFor="hero-video">Hero Video</label>
              <input
                id="hero-video"
                value={draft.hero.video}
                placeholder="Paste a video URL or upload"
                onChange={(event) => handleHeroChange('video', event.target.value)}
              />
              <input
                type="file"
                accept="video/*"
                onChange={(event) => handleFileUpload(event, (value) => handleHeroChange('video', value))}
              />
            </div>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)' }}>Overview</h2>
            <div className="admin-field">
              <label htmlFor="overview-title">Section Title</label>
              <input
                id="overview-title"
                value={draft.overview.title}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    overview: {
                      ...prev.overview,
                      title: event.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="admin-field">
              <label htmlFor="overview-description">Description</label>
              <textarea
                id="overview-description"
                value={draft.overview.description}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    overview: {
                      ...prev.overview,
                      description: event.target.value,
                    },
                  }))
                }
              />
            </div>
            {draft.overview.highlights.map((highlight, index) => (
              <div key={`highlight-${index}`} className="admin-field">
                <label>Highlight {index + 1}</label>
                <textarea
                  value={highlight}
                  onChange={(event) => handleOverviewHighlightChange(index, event.target.value)}
                />
                <button
                  type="button"
                  className="site-nav__cta"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => handleRemove('overview', index)}
                >
                  Remove highlight
                </button>
              </div>
            ))}
            <button type="button" className="button-secondary" onClick={addHighlight}>
              Add highlight
            </button>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)' }}>Cultural Timeline</h2>
            <p style={{ color: 'var(--color-muted)' }}>
              Chronicle Erin Ijesa's heritage milestones. These appear as moments on the main page.
            </p>
            {draft.culture.timeline.map((item, index) => (
              <div key={`timeline-${index}`} className="card" style={{ gap: '0.75rem' }}>
                <div className="admin-field">
                  <label>Title</label>
                  <input
                    value={item.title}
                    onChange={(event) => handleTimelineChange(index, 'title', event.target.value)}
                  />
                </div>
                <div className="admin-field">
                  <label>Description</label>
                  <textarea
                    value={item.description}
                    onChange={(event) => handleTimelineChange(index, 'description', event.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="site-nav__cta"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => handleRemove('culture', index)}
                >
                  Remove moment
                </button>
              </div>
            ))}
            <button type="button" className="button-secondary" onClick={addTimeline}>
              Add timeline moment
            </button>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)' }}>Attractions</h2>
            {draft.attractions.map((attraction, index) => (
              <div key={`attraction-${index}`} className="card" style={{ gap: '1rem' }}>
                <div className="admin-field">
                  <label>Title</label>
                  <input
                    value={attraction.title}
                    onChange={(event) => handleAttractionChange(index, 'title', event.target.value)}
                  />
                </div>
                <div className="admin-field">
                  <label>Description</label>
                  <textarea
                    value={attraction.description}
                    onChange={(event) => handleAttractionChange(index, 'description', event.target.value)}
                  />
                </div>
                <div className="admin-field">
                  <label>Image</label>
                  <input
                    value={attraction.image}
                    placeholder="Image URL"
                    onChange={(event) => handleAttractionChange(index, 'image', event.target.value)}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      handleFileUpload(event, (value) => handleAttractionChange(index, 'image', value))
                    }
                  />
                </div>
                <button
                  type="button"
                  className="site-nav__cta"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => handleRemove('attractions', index)}
                >
                  Remove attraction
                </button>
              </div>
            ))}
            <button type="button" className="button-secondary" onClick={addAttraction}>
              Add attraction
            </button>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)' }}>Experiences</h2>
            {draft.experiences.items.map((item, index) => (
              <div key={`experience-${index}`} className="card" style={{ gap: '1rem' }}>
                <div className="admin-field">
                  <label>Title</label>
                  <input
                    value={item.title}
                    onChange={(event) => handleExperienceChange(index, 'title', event.target.value)}
                  />
                </div>
                <div className="admin-field">
                  <label>Description</label>
                  <textarea
                    value={item.description}
                    onChange={(event) => handleExperienceChange(index, 'description', event.target.value)}
                  />
                </div>
                <div className="admin-field">
                  <label>Image</label>
                  <input
                    value={item.image ?? ''}
                    onChange={(event) => handleExperienceChange(index, 'image', event.target.value)}
                    placeholder="Image URL"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      handleFileUpload(event, (value) => handleExperienceChange(index, 'image', value))
                    }
                  />
                </div>
                <button
                  type="button"
                  className="site-nav__cta"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => handleRemove('experiences', index)}
                >
                  Remove experience
                </button>
              </div>
            ))}
            <button type="button" className="button-secondary" onClick={addExperience}>
              Add experience
            </button>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)' }}>Planning Tips</h2>
            {draft.planning.tips.map((tip, index) => (
              <div key={`tip-${index}`} className="card" style={{ gap: '1rem' }}>
                <div className="admin-field">
                  <label>Title</label>
                  <input
                    value={tip.title}
                    onChange={(event) => handlePlanningTipChange(index, 'title', event.target.value)}
                  />
                </div>
                <div className="admin-field">
                  <label>Description</label>
                  <textarea
                    value={tip.description}
                    onChange={(event) => handlePlanningTipChange(index, 'description', event.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="site-nav__cta"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => handleRemove('planning', index)}
                >
                  Remove tip
                </button>
              </div>
            ))}
            <button type="button" className="button-secondary" onClick={addPlanningTip}>
              Add tip
            </button>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)' }}>Gallery</h2>
            {draft.gallery.items.map((item, index) => (
              <div key={item.id} className="card" style={{ gap: '1rem' }}>
                <div className="admin-field">
                  <label>Image Source</label>
                  <input
                    value={item.src}
                    onChange={(event) => handleGalleryChange(index, 'src', event.target.value)}
                    placeholder="Image URL"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      handleFileUpload(event, (value) => handleGalleryChange(index, 'src', value))
                    }
                  />
                </div>
                <div className="admin-field">
                  <label>Alt text</label>
                  <input
                    value={item.alt}
                    onChange={(event) => handleGalleryChange(index, 'alt', event.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="site-nav__cta"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => handleRemove('gallery', index)}
                >
                  Remove gallery item
                </button>
              </div>
            ))}
            <button type="button" className="button-secondary" onClick={addGalleryItem}>
              Add gallery item
            </button>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-display)' }}>Footer</h2>
            <div className="admin-field">
              <label htmlFor="footer-email">Contact email</label>
              <input
                id="footer-email"
                value={draft.footer.contactEmail}
                onChange={(event) => handleFooterChange('contactEmail', event.target.value)}
              />
            </div>
            <div className="admin-field">
              <label htmlFor="footer-address">Address</label>
              <textarea
                id="footer-address"
                value={draft.footer.address}
                onChange={(event) => handleFooterChange('address', event.target.value)}
              />
            </div>
            {draft.footer.social.map((item, index) => (
              <div key={`social-${index}`} className="card" style={{ gap: '1rem' }}>
                <div className="admin-field">
                  <label>Platform</label>
                  <input
                    value={item.platform}
                    onChange={(event) => handleSocialChange(index, 'platform', event.target.value)}
                  />
                </div>
                <div className="admin-field">
                  <label>URL</label>
                  <input
                    value={item.url}
                    onChange={(event) => handleSocialChange(index, 'url', event.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="site-nav__cta"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => handleRemove('footer', index)}
                >
                  Remove social link
                </button>
              </div>
            ))}
            <button type="button" className="button-secondary" onClick={addSocialLink}>
              Add social link
            </button>
          </section>
        </div>

        <div className="admin-actions">
          <button type="button" className="reset" onClick={handleReset}>
            Reset to curated defaults
          </button>
          <button
            type="button"
            className="save"
            onClick={handleSave}
            disabled={!unsavedChanges}
            style={{ opacity: unsavedChanges ? 1 : 0.6 }}
          >
            {unsavedChanges ? 'Save changes' : 'All changes saved'}
          </button>
        </div>
      </div>
    </div>
  );
}
