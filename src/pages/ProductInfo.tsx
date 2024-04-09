import ProductImage from "../components/ProductImagesSlider";

const ProductInfo: React.FC = () => {
  const imgs: string[] = [
    "https://adahbyleesha.com/cdn/shop/files/WhatsAppImage2024-04-07at17.40.52_750x.jpg?v=1712492068",
    "https://adahbyleesha.com/cdn/shop/files/WhatsAppImage2024-04-07at17.42.50_750x.jpg?v=1712492068",
    "https://adahbyleesha.com/cdn/shop/files/WhatsAppImage2024-04-07at17.42.49_750x.jpg?v=1712492068",
    "https://adahbyleesha.com/cdn/shop/files/WhatsAppImage2024-04-07at17.43.26_750x.jpg?v=1712492068",
    "https://adahbyleesha.com/cdn/shop/files/WhatsAppImage2024-04-07at17.43.26_750x.jpg?v=1712492068",
  ];

  return (
    <>
      <div className="hidden xl:flex h-auto overflow-hidden">
        <div className="w-2/3 overflow-y-auto flex flex-wrap p-4 justify-center scrollbar-none">
          {imgs.map((image, index) => (
            <div key={index} className="w-1/2 p-2">
              <img
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="w-1/3  px-4 py-10 rounded-xl fixed top-32 right-4 h-auto font-urbanist">
          <h1 className="text-xl font-bold mb-4 capitalize text-center">
            Formal attire shadow grey trouser sfdfjsgfsfjshf
          </h1>
          <p className="mb-2 gap-2 text-lg capitalize font-medium text-center">
            Adah by Leesha
          </p>
          <p className="text-lg font-semibold text-center mb-4">₹1299</p>
          <div className="flex flex-col gap-2 w-full">
            <button className="bg-black text-xl font-semibold h-14 text-white py-2 rounded-lg transition duration-500 hover:-translate-y-0.5">
              Add to Wishlist
            </button>
            <button className="bg-black text-xl font-semibold h-14 text-white py-2 rounded-lg transition duration-500 hover:-translate-y-0.5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <ProductImage images={imgs} />
    </>
  );
};

export default ProductInfo;
