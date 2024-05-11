import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaProps {
  title: string;
  description?: string;
  image?: string;
  url: string;
}

const Meta: React.FC<MetaProps> = ({ title, url }) => (
  <Helmet>
    <title>Product</title>
    <meta name="description" content='Visit Slik for Product Info' data-react-helmet="true" />
    <meta property="og:title" content="Product" data-react-helmet="true" />
    <meta property="og:description" content='Visit Slik for Product Info' data-react-helmet="true" />
    <meta property="og:url" content={url} data-react-helmet="true" />
    <meta property="og:image" content="https://res.cloudinary.com/dnhz5reqf/image/upload/v1714373699/slik/level_up_your_fashion_game_pkf4ye.webp" data-react-helmet="true"/>
    <meta property="og:type" content="website" data-react-helmet="true" />
    <meta property="og:site_name" content="Slik" data-react-helmet="true" />
    <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
    <meta name="twitter:title" content='Product' data-react-helmet="true" />
   <meta name="twitter:image" content="https://res.cloudinary.com/dnhz5reqf/image/upload/v1714373699/slik/level_up_your_fashion_game_pkf4ye.webp" data-react-helmet="true" />
   <meta name="twitter:image:alt" content={title} data-react-helmet="true" />
  </Helmet>
);

export default Meta;