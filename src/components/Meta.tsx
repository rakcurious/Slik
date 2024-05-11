import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const Meta: React.FC<MetaProps> = ({ title, description, image, url }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} data-react-helmet="true" />
    <meta property="og:title" content={title} data-react-helmet="true" />
    <meta property="og:description" content={description} data-react-helmet="true" />
    <meta property="og:url" content={url} data-react-helmet="true" />
    <meta property="og:image" content={image} data-react-helmet="true"/>
    <meta property="og:type" content="website" data-react-helmet="true" />
    <meta property="og:site_name" content="Slik" data-react-helmet="true" />
    <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
    <meta name="twitter:title" content={title} data-react-helmet="true" />
   <meta name="twitter:image" content={image} data-react-helmet="true" />
   <meta name="twitter:image:alt" content={title} data-react-helmet="true" />
  </Helmet>
);

export default Meta;