import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  url: string;
}

const Meta: React.FC<MetaProps> = ({ title, description, image, url }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Slik" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
   <meta name="twitter:image" content={image} />
   <meta name="twitter:image:alt" content={title} />
  </Helmet>
);

export default Meta;