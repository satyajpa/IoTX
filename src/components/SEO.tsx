import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "IoT X - AI Powered IoT Platform",
  description = "Transform buildings and urban spaces with our advanced IoT platform.",
  keywords = "IoT platform, smart buildings" 
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/IoTX.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#1f2937" />
    </>
  );
};

export default SEO; 