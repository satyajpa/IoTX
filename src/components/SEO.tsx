import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "IOTX Platform", 
  description = "Power Smarter Decisions Across Assets, Buildings, People & Urban Spaces", 
  keywords = "IoT, smart buildings, asset management" 
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

export default SEO; 