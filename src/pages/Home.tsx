import { useEffect } from "react";
import { Navbar, Footer, CollectionCards } from "../index";
import { Link } from "react-router-dom";
function Home() {
  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-grow">
        <div className="flex flex-col w-screen gap-4 xl:gap-10 px-4 xl:px-10 mb-5">
          <Link to={'/women'}>
        <img   
                src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1714029926/slik/misc/womenswearcard_wnmt5r.webp"
                alt="Womenswear"
                className="cursor-pointer w-full aspect-[2/1] object-cover rounded-xl"
              />
          </Link>
          <Link to={'/men'}>
        <img
                
                src="https://res.cloudinary.com/dnhz5reqf/image/upload/v1714029926/slik/misc/menswearcard_dldeyd.webp"
                alt="Menswear"
                className="cursor-pointer w-full aspect-[2/1] object-cover rounded-xl"
              />
          </Link>
        </div>
        <CollectionCards category="home" />
        <CollectionCards category="brands" />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
