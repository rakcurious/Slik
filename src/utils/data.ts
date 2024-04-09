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
    category: string;
  }

  export interface Product {
    id: string;
    title: string;
    target: string;
    images: string[];
    price: number;
    brand: string;
    likes?: number;
    category: string;
    clicks?: number;
    userid: string;
    collection: string;
  }

  export const productD = {
    title: "Polo Oversized",
    target: "https://www.thesouledstore.com/product/tss-originals-wandering-soul-women-playsuit?gte=2",
    image: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711526675_6345129.jpg?format=webp&w=480&dpr=1.0",
    price: 499,
    brand: "The Souled Store",
    likes: 1,
    category: "Men",
    clicks: 0,
    userid: "rak",
    collection: "Oversized",
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
    category: "women",
    size: "small",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-banner-copy-2_copy.jpg",
    collectionLink: "/collection3",
    category: "women",
    size: "small",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-Banner_43.jpg",
    collectionLink: "/collection4",
    category: "men",
    size: "small",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_oversized_t-shirt_bif_vive_big_print.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection1",
    category: "men",
    size: "big",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage-banner_16.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection2",
    category: "women",
    size: "big",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner-copy_copy.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection3",
    category: "women",
    size: "big",
  },
  {
    imageUrl:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_21.jpg?format=webp&w=1366&dpr=1.0",
    collectionLink: "/collection4",
    category: "men",
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
    category: "women",
  },
  {
    id: 2,
    name: "Shirts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Big-Tile1.jpg?format=webp&w=200&dpr=3.0",
    imageAlt: "Shirts",
    category: "men",
  },
  {
    id: 3,
    name: "Dresses",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Big-Tile-dresses_BkMF7iR.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Dresses",
    category: "women",
  },
  {
    id: 4,
    name: "Jackets",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small_Tile_33_copy_fIV1sMS.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Jackets",
    category: "men",
  },
  {
    id: 5,
    name: "Tops",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Big-Tile-Tops_gsWjXW5.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Tops",
    category: "women",
  },
  {
    id: 6,
    name: "Shorts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-31_1_3ZbB97R.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Shorts",
    category: "men",
  },

  {
    id: 7,
    name: "Bottoms",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Small-Tile-botoms_299jpjf.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Bottoms",
    category: "women",
  },

  {
    id: 8,
    name: "T-Shirts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-37_c07CpXP.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "T-Shirts",
    category: "men",
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
      category: "men"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "men"
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
      category: "women"
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
      category: "men"
    },
  ];
export interface Prods  {
  $collectionId?: string,
  $createdAt?: string,
  $databaseId?: string,
  $id?: string,
  $permissions?: string[],
  $updatedAt?: string,
  brand: string,
  category: string,
  images: string[],
  wishlist: string[],
  price: number,
  target: string,
  title: string,
  userid: string,
  type: string
}


  export {banners, categories, products}