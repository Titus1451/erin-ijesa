'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { useSiteContent } from '../context/SiteContentContext';

function isDataUrl(src: string) {
  return src.startsWith('data:');
}

export default function HomeContent() {
  const { content } = useSiteContent();

  const immersionVideo = useMemo(() => content.hero.video, [content.hero.video]);

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-media" aria-hidden="true">
          {immersionVideo ? (
            <video
              className="embed-responsive"
              src={immersionVideo}
              autoPlay
              loop
              muted
              playsInline
              poster={content.hero.image}
            />
          ) : (
            <Image
              src={content.hero.image}
              alt="Erin Ijesa waterfall"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              unoptimized={isDataUrl(content.hero.image)}
            />
          )}
        </div>
        <div className="hero-content">
          <div>
            <p className="tag">Destination Spotlight</p>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.subtitle}</p>
            <div className="cta-group">
              <a href="#planning" className="button-primary">
                {content.hero.ctaPrimary}
              </a>
              <a href="#attractions" className="button-secondary">
                {content.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="section-heading">
          <h2>{content.overview.title}</h2>
          <p>{content.overview.description}</p>
        </div>
        <div className="card-grid">
          {content.overview.highlights.map((highlight, index) => (
            <div key={index} className="card">
              <h3>Signature Highlight {index + 1}</h3>
              <p>{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="culture">
        <div className="section-heading">
          <h2>{content.culture.title}</h2>
          <p>{content.culture.description}</p>
        </div>
        <div className="timeline">
          {content.culture.timeline.map((item, index) => (
            <div key={`${item.title}-${index}`} className="timeline-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="attractions">
        <div className="section-heading">
          <h2>Flagship Attractions</h2>
          <p>
            From the thundering cascades to tranquil forest groves, Erin Ijesa rewards every explorer with layered
            adventures.
          </p>
        </div>
        <div className="card-grid">
          {content.attractions.map((attraction) => (
            <div key={attraction.title} className="card">
              <div className="gallery-item" style={{ height: 220 }}>
                <Image
                  src={attraction.image}
                  alt={attraction.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  unoptimized={isDataUrl(attraction.image)}
                />
              </div>
              <div>
                <h3>{attraction.title}</h3>
                <p>{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experiences">
        <div className="section-heading">
          <h2>{content.experiences.title}</h2>
          <p>{content.experiences.description}</p>
        </div>
        <div className="card-grid">
          {content.experiences.items.map((item) => (
            <div key={item.title} className="card">
              {item.image && (
                <div className="gallery-item" style={{ height: 200 }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    unoptimized={isDataUrl(item.image ?? '')}
                  />
                </div>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="immersive-video">
        <div className="section-heading">
          <h2>Feel the Mist</h2>
          <p>
            Watch the cascades roar to life. This cinematic reel captures the serenity and exhilaration of tracing the Olumirin
            terraces at dawn.
          </p>
        </div>
        <div className="video-frame">
          {immersionVideo ? (
            <video
              className="embed-responsive"
              src={immersionVideo}
              controls
              playsInline
              poster={content.hero.image}
            />
          ) : (
            <div
              style={{
                display: 'grid',
                placeItems: 'center',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(15,118,110,0.45), rgba(15,23,42,0.85))',
                color: '#fff',
                textAlign: 'center',
                padding: '2rem',
              }}
            >
              <p style={{ maxWidth: '40ch', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Upload a signature waterfall video in the admin studio to bring Erin Ijesa to life.
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="planning">
        <div className="section-heading">
          <h2>{content.planning.title}</h2>
          <p>{content.planning.description}</p>
        </div>
        <div className="card-grid">
          {content.planning.tips.map((tip) => (
            <div key={tip.title} className="card">
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery">
        <div className="section-heading">
          <h2>{content.gallery.title}</h2>
          <p>{content.gallery.description}</p>
        </div>
        <div className="gallery">
          {content.gallery.items.map((item) => (
            <div key={item.id} className="gallery-item" style={{ aspectRatio: '4 / 5' }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{ objectFit: 'cover' }}
                unoptimized={isDataUrl(item.src)}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
