
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711526675_6345129.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "₹350",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Teessssssssssssssss dhhhhhhhh dhhhhhhhhhhs",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711544427_6307183.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "₹354",
    color: "White",
  },
  {
    id: 3,
    name: "Lasic Tee",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711526675_6345129.jpg?format=webp&w=480&dpr=1.0",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "₹345",
    color: "Purple",
  },
  {
    id: 4,
    name: "Pink Tee",
    href: "#",
    imageSrc:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711544427_6307183.jpg?format=webp&w=480&dpr=1.0",
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


export default function ProductCards() {
  return (
    <>
    <h1 className="text-center font-urbanist font-bold text-4xl mt-10">PRODUCTS</h1>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-0 font-urbanist text-black">
        {products.map((product) => (
          <CardContainer key={product.id} className="inter-var ">
            <CardBody className=" flex flex-col items-center justify-center  h-full w-full lg:h-96 lg:w-96 relative group/card  rounded-xl p-10">
              
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
                
                  <div className="flex justify-between w-full">
                    <CardItem
                    translateZ="50"
                    className="text-sm font-semibold"
                  >
                    <div className="truncate max-w-60">
                        {product.name}
                    </div>
                    <div className=" text-lg font-medium  truncate max-w-60">
                        {product.color}
                    </div>
                    
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-xl mt-1 font-normal "
                  >
                    {product.price}
                  </CardItem>
                  
                </div>
              
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}