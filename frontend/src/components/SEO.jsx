// src/components/SEO.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Success Interior Design | Custom Window Blinds & Installation"
  const defaultDescription = "Professional custom window blind measurement, mounting, and smart home motorization services.."
  const defaultKeywords = "window blinds, custom blinds, blind installation, motorized shades, roller blinds, smart home window treatments"
  const siteUrl = "https://successinteriordesign.com.ng"
  const defaultImage = "/logo.jpeg" // Image shown on social Media

  return (
    <Helmet>
      {/* Basic Standard Meta Tags */}
      <title>{title ? `${title} || Success Interior Design` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Success Interior Design" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook / WhatsApp Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || `${siteUrl}${defaultImage}`} />
      <meta property="og:url" content={url || siteUrl} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || `${siteUrl}${defaultImage}`} />

      {/* Canonical URL to prevent duplicate content penalty */}
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
    
  )
}

export default SEO