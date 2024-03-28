interface ImageData {
  imageUrl: string;
  collectionLink: string;
  category: string;
  size: string;
}

interface CategoryData {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
}

interface ProductData {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    price: string;
    brand: string;
  }

const banners: ImageData[] = [
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_-_oversized_t-shirt_big_vibe_big_print.jpg",
    collectionLink: "/collection1",
    category: "men",
    size: "small",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile_34.jpg",
    collectionLink: "/collection2",
    category: "Collection 2",
    size: "small",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-banner-copy-2_copy.jpg",
    collectionLink: "/collection3",
    category: "Collection 3",
    size: "small",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner_43.jpg",
    collectionLink: "/collection4",
    category: "Men",
    size: "small",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_oversized_t-shirt_bif_vive_big_print.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection1",
    category: "Men",
    size: "big",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage-banner_16.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection2",
    category: "Men",
    size: "big",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner-copy_copy.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection3",
    category: "Men",
    size: "big",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_21.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection4",
    category: "Men",
    size: "big",
  },
];

const categories: CategoryData[] = [
  {
    id: 1,
    name: "Oversized T-Shirts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Small-Tile-OST_L540YKc.jpg?format=webp&w=480&dpr=2.0",
    imageAlt: "Oversized T-Shirts",
    category: "Women",
  },
  {
    id: 2,
    name: "Shirts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Big-Tile1.jpg?format=webp&w=200&dpr=3.0",
    imageAlt: "Shirts",
    category: "Men",
  },
  {
    id: 3,
    name: "Dresses",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Big-Tile-dresses_BkMF7iR.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Dresses",
    category: "Women",
  },
  {
    id: 4,
    name: "Jackets",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small_Tile_33_copy_fIV1sMS.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Jackets",
    category: "Men",
  },
  {
    id: 5,
    name: "Tops",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Big-Tile-Tops_gsWjXW5.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Tops",
    category: "Women",
  },
  {
    id: 6,
    name: "Shorts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-31_1_3ZbB97R.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Shorts",
    category: "Men",
  },

  {
    id: 7,
    name: "Bottoms",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Small-Tile-botoms_299jpjf.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Bottoms",
    category: "Women",
  },

  {
    id: 8,
    name: "T-Shirts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-37_c07CpXP.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "T-Shirts",
    category: "Men",
  },
];

const products: ProductData[] = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711526675_6345129.jpg?format=webp&w=480&dpr=1.0",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹350",
      brand: "AJIO",
    },
    {
      id: 2,
      name: "Basic",
      href: "#",
      imageSrc:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711544427_6307183.jpg?format=webp&w=480&dpr=1.0",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹354",
      brand: "MYNTRA",
    },
    {
      id: 3,
      name: "Superd",
      href: "#",
      imageSrc:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711526675_6345129.jpg?format=webp&w=480&dpr=1.0",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹345",
      brand: "THE SOULED STORE",
    },
    {
      id: 4,
      name: "Pink Tee",
      href: "#",
      imageSrc:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711544427_6307183.jpg?format=webp&w=480&dpr=1.0",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹435",
      brand: "GUCCI",
    },
    {
      id: 5,
      name: "Lol Tee",
      href: "#",
      imageSrc:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711544427_6307183.jpg?format=webp&w=480&dpr=1.0",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹235",
      brand: "H&M",
    },
    {
      id: 6,
      name: "Super Tee",
      href: "#",
      imageSrc:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711526675_6345129.jpg?format=webp&w=480&dpr=1.0",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "₹355",
      brand: "ZARA",
    },
  ];


  export {banners, categories, products}