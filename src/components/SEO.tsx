import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQSchemaItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQSchemaItem[];
  keywords?: string;
}

export default function SEO({
  title,
  description,
  canonicalPath,
  type = 'website',
  breadcrumbs,
  faqs,
  keywords,
}: SEOProps) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `https://fingtaj.online${currentPath === '/' ? '' : currentPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely update or create meta tags
    const setMeta = (nameAttr: string, key: string, content: string) => {
      let tag = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(nameAttr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'title', title);
    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }
    setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 4. OpenGraph Tags
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', 'FingTaj');
    setMeta('property', 'og:locale', 'en_US');
    setMeta('property', 'og:image', 'https://fingtaj.online/og-image.png');

    // 5. Twitter / X Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:site', '@FinGTaj');
    setMeta('name', 'twitter:creator', '@FinGTaj');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:url', canonicalUrl);
    setMeta('name', 'twitter:image', 'https://fingtaj.online/og-image.png');

    // 6. Inject Dynamic Schema.org JSON-LD
    const schemaScriptId = 'fingtaj-dynamic-schema';
    let scriptTag = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaScriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaGraph: any[] = [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description: description,
        isPartOf: {
          '@id': 'https://fingtaj.online/#website',
        },
        inLanguage: 'en-US',
      },
    ];

    // Add BreadcrumbList schema if breadcrumbs are provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `https://fingtaj.online${crumb.path}`,
        })),
      });
    }

    // Add FAQPage schema if FAQs are provided
    if (faqs && faqs.length > 0) {
      schemaGraph.push({
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    scriptTag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    });
  }, [title, description, canonicalUrl, type, breadcrumbs, faqs, keywords]);

  return null;
}
