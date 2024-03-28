
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Women-Small-Tile-OST_L540YKc.jpg?format=webp&w=480&dpr=2.0",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Teesss",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Big-Tile1.jpg?format=webp&w=200&dpr=3.0",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$354",
    color: "White",
  },
  {
    id: 3,
    name: "Lasic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$345",
    color: "Purple",
  },
  {
    id: 4,
    name: "Pink Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Lol Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$235",
    color: "Hue",
  },
  {
    id: 6,
    name: "Super Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$355",
    color: "Beige",
  },
  // More products...
];


export default function CategoryCards() {
  return (
    <>
    <h1 className="text-center font-urbanist font-bold text-4xl mt-6">CATEGORIES</h1>
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 font-urbanist text-black">
        {products.map((product) => (
          <CardContainer key={product.id} className="inter-var ">
            <CardBody className="   h-full w-full relative group/card rounded-xl p-10">
              
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
                    {product.color}
                  </CardItem> */}
                  
                
              
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}