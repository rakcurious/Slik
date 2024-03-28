
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const categories = [
  {
    id: 1,
    name: "Oversized T-Shirts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Small-Tile-OST_L540YKc.jpg?format=webp&w=480&dpr=2.0",
    imageAlt: "Oversized T-Shirts",
    cat :"Women"
  },
  {
    id: 2,
    name: "Shirts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Big-Tile1.jpg?format=webp&w=200&dpr=3.0",
    imageAlt: "Shirts",
    cat: "Men"
  },
  {
    id: 3,
    name: "Dresses",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Big-Tile-dresses_BkMF7iR.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Dresses",
    cat: "Women"
  },
  {
    id: 4,
    name: "Jackets",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small_Tile_33_copy_fIV1sMS.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Jackets",
    cat: "Men"
  },
  {
    id: 5,
    name: "Tops",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Big-Tile-Tops_gsWjXW5.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Tops",
    cat: "Women"
  },
  {
    id: 6,
    name: "Shorts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-31_1_3ZbB97R.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Shorts",
    cat: "Men"
  },
  
  {
    id: 7,
    name: "Bottoms",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Small-Tile-botoms_299jpjf.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Bottoms",
    cat: "Women"
  },
  
  {
    id: 8,
    name: "T-Shirts",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-37_c07CpXP.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "T-Shirts",
    cat: "Men"
  },
  
];


export default function CategoryCards() {
  return (
    <>
    <h1 className="text-center font-urbanist font-bold text-4xl mt-6">CATEGORIES</h1>
      <div className="mt-4 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-0 font-urbanist text-black">
        {categories.map((product) => (
          <CardContainer key={product.id} className="inter-var">
            <CardBody className="h-full w-full lg:h-96 lg:w-96 relative group/card rounded-xl p-10 py-0 -my-px">
              
                <CardItem
                  translateZ="100"
                  className="w-full flex justify-center mb-2"
                >
                  <img
                    src={product.imageSrc}
                    className="h-full w-full lg:h-96 lg:w-80  object-cover  rounded-lg group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                  
                </CardItem>
                  {/* <CardItem
                    as="p"
                    translateZ="200"
                    className="text-3xl font-urbanist font-bold text-center w-full text-wrap h-auto relative -top-52  z-100 "
                  >
                    {product.name}
                  </CardItem> */}
                  
                
              
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}