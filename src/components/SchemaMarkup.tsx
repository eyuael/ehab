'use client';

import { useEffect } from 'react';

const SchemaMarkup = () => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "name": "EHAB Accountancy Services",
      "description": "Professional accounting and financial services for businesses and individuals. Expert tax planning, bookkeeping, financial consulting, and business advisory services.",
      "url": "https://ehab-accountancy.com",
      "logo": "https://ehab-accountancy.com/logo.png",
      "image": "https://ehab-accountancy.com/office.jpg",
      "telephone": "+1-555-123-4567",
      "email": "info@ehab-accountancy.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business District",
        "addressLocality": "Downtown",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-14:00"
      ],
      "priceRange": "$$",
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "40.7128",
          "longitude": "-74.0060"
        },
        "geoRadius": "50000"
      },
      "serviceType": [
        "Tax Planning & Preparation",
        "Bookkeeping & Payroll",
        "Financial Consulting",
        "Business Advisory",
        "Audit & Assurance",
        "Estate Planning"
      ],
      "founder": {
        "@type": "Person",
        "name": "Eyuael Berhe",
        "jobTitle": "Senior Partner & CPA",
        "description": "Certified Public Accountant with over 15 years of experience in corporate finance and tax planning."
      },
      "employee": [
        {
          "@type": "Person",
          "name": "Eyuael Berhe",
          "jobTitle": "Senior Partner & CPA"
        },
        {
          "@type": "Person",
          "name": "Sarah Johnson",
          "jobTitle": "Tax Specialist"
        },
        {
          "@type": "Person",
          "name": "Michael Chen",
          "jobTitle": "Financial Advisor"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Jennifer Martinez"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "EHAB Accountancy transformed our financial processes. Their expertise in tax planning saved us thousands while ensuring full compliance."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Robert Thompson"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Professional, reliable, and incredibly knowledgeable. They've been handling our books for 3 years now with exceptional results."
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Accounting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tax Planning & Preparation",
              "description": "Comprehensive tax planning and preparation services for individuals and businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bookkeeping & Payroll",
              "description": "Professional bookkeeping and payroll management services."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Financial Consulting",
              "description": "Strategic financial consulting and business planning services."
            }
          }
        ]
      }
    };

    // Remove existing schema markup
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default SchemaMarkup;