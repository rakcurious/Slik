import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar, Modal, Error, handleWishlistUpdate, selectProducts, selectUserData, selectWishlist, useAppSelector } from "../index";

const ProductInfo: React.FC = () => {
  const products = useAppSelector(selectProducts);
  const userdata = useAppSelector(selectUserData);
  const wishlist = useAppSelector(selectWishlist);
  const [share, setShare] = useState(false);

  const navigate = useNavigate();

  const { slug } = useParams();
  const [showModal, setShowModal] = useState(false);

  const product = products.find((product) => product.slug == slug);

  const isAuthenticated = !!userdata;
  const isVerified = userdata?.emailVerification || false;

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  const copyToShare = () => {
    window.navigator.clipboard.writeText(window.location.href);
    setShare(true);
    setTimeout(() => {
      setShare(false);
    }, 5000);
  };

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

      const brandPage = (name:string) => {
        const brandSlug = slugify(name)
        navigate(`/brands/${brandSlug}`)
      }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    swipeToSlide: true,
  };

  return (
    <>
      <Navbar />
      {product ? (
        <>
          <div className="hidden xl:flex h-auto overflow-hidden">
            <div className="w-2/3 overflow-y-auto flex flex-wrap p-4 justify-center scrollbar-none">
              {product?.images.map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="w-1/3 flex flex-col gap-1 px-4 py-10 rounded-xl fixed top-32 right-4 h-auto">
              <h1 className="text-xl font-bold mb-1 capitalize text-center">
                {product?.title}
              </h1>
              <p onClick={()=>brandPage(product?.brand.toLowerCase())} className="cursor-pointer text-purple-800 text-lg capitalize font-semibold text-center">
                {product?.brand}
              </p>
              <p className="text-lg font-semibold text-center mb-2">
                ₹{product?.price}
              </p>
              <div className="flex flex-col items-center gap-2 w-full">
                <button
                  onClick={() =>
                    handleWishlistUpdate(
                      product.$id,
                      userdata,
                      wishlist,
                      products,
                      setShowModal
                    )
                  }
                  className="bg-black text-xl  w-4/5 font-medium h-auto text-white py-4 rounded-lg transition duration-500 hover:-translate-y-0.5 hover:text-purple-100"
                >
                  {wishlist.includes(product.$id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </button>
                <a
                  target="_blank"
                  href={product.target}
                  className="bg-black text-xl w-4/5 font-medium h-auto text-center text-white py-4 rounded-lg transition duration-500 hover:-translate-y-0.5"
                >
                  Buy Now
                </a>
                <button
                  onClick={copyToShare}
                  className={` text-xl w-4/5 font-medium h-auto text-center  py-4 rounded-lg transition duration-500 hover:-translate-y-0.5 ${
                    share ? "text-black bg-indigo-200" : "bg-black text-white"
                  }`}
                >
                  {share ? "Link Copied!" : "Share"}
                </button>
              </div>
            </div>
          </div>
          <div className="xl:hidden h-auto w-screen flex flex-col">
            <div className="w-full mx-auto">
              <Slider {...settings}>
                {product.images.map((image, index) => (
                  <div key={index} className="relative w-full aspect-[3/4]">
                    <img
                      key={index}
                      src={image}
                      alt={product.title}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="w-full flex flex-col gap-1 items-center justify-center p-5">
              <h1 className="text-xl font-bold my-1 capitalize text-center">
                {product?.title}
              </h1>
              <p onClick={()=>brandPage(product?.brand.toLowerCase())} className="cursor-pointer text-purple-800 text-lg capitalize font-semibold text-center">
                {product?.brand}
              </p>
              <p className="text-lg font-semibold text-center mb-2">
                ₹{product?.price}
              </p>
              <div className="flex flex-col gap-2 w-full">
                <button
                  onClick={() =>
                    handleWishlistUpdate(
                      product.$id,
                      userdata,
                      wishlist,
                      products,
                      setShowModal
                    )
                  }
                  className="bg-black text-xl font-medium h-auto py-4 text-white rounded-lg transition duration-500 hover:-translate-y-0.5"
                >
                  {wishlist.includes(product.$id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </button>
                <a
                  target="_blank"
                  href={product.target}
                  className="bg-black text-xl font-medium h-auto py-4 text-white rounded-lg text-center transition duration-500 hover:-translate-y-0.5"
                >
                  Buy Now
                </a>
                <button
                  onClick={copyToShare}
                  className={`text-xl font-medium h-auto py-4 rounded-lg text-center transition duration-500 hover:-translate-y-0.5 ${
                    share ? "text-black bg-indigo-200" : "bg-black text-white"
                  }`}
                >
                  {share ? "Link Copied!" : "Share"}
                </button>
              </div>
            </div>
          </div>
          <Modal
            isOpen={showModal}
            isAuthenticated={isAuthenticated}
            isVerified={isVerified}
            onClose={() => setShowModal(false)}
            onLogin={() => {
              navigate("/login");
              setShowModal(false);
            }}
          />
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default ProductInfo;
