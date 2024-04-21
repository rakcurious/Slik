import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <>
       <footer className="bg-indigo-200 font-urbanist text-black py-2 flex items-center justify-between px-2 md:px-10">
        <div><img
              src='https://res.cloudinary.com/dnhz5reqf/image/upload/v1713705965/slik/sliklogo_iiawiz.webp'
              className="h-8 w-auto m-0"
              alt="Slik Logo"
            /></div>
        <div className="flex gap-x-4">
          <Link className="font-medium uppercase" to="/privacyterms">Privacy Policy & Terms</Link>
          <Link className="font-medium uppercase" to="/contact">Contact</Link>
        </div>
      </footer>
      </>
    );
  };

  export default Footer;