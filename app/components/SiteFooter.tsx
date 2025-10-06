'use client';

import { useSiteContent } from '../context/SiteContentContext';

export default function SiteFooter() {
  const { content } = useSiteContent();
  const { footer } = content;

  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
            Visit Erin Ijesa
          </h3>
          <p style={{ margin: 0, maxWidth: '60ch' }}>{footer.address}</p>
          <p style={{ margin: '0.75rem 0 0' }}>Email: {footer.contactEmail}</p>
        </div>
        <div>
          <p style={{ marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
            Follow the Journey
          </p>
          <div className="tag-list">
            {footer.social.map((item) => (
              <a key={item.platform} className="tag" href={item.url} target="_blank" rel="noreferrer">
                {item.platform}
              </a>
            ))}
          </div>
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', opacity: 0.8 }}>
          © {new Date().getFullYear()} Erin Ijesa Destination Collective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
