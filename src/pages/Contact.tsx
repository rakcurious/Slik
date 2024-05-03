import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const team = [
    {
      role: 'Idea and Research',
      image: 'https://res.cloudinary.com/dnhz5reqf/image/upload/v1714635700/slik/SlikIdeaAndResearch_hsqk62.webp'
    },
    {
      role: 'Designer',
      image: 'https://res.cloudinary.com/dnhz5reqf/image/upload/v1714635700/slik/SlikDesigner_xlpixd.webp'
    },
    {
      role: 'Developer',
      image: 'https://res.cloudinary.com/dnhz5reqf/image/upload/v1714635700/slik/SlikDeveloper_zqyn2d.webp'
    },
    {
      role: 'Vibes',
      image: 'https://res.cloudinary.com/dnhz5reqf/image/upload/v1714719598/slik/SlikVibes_ouahlm.webp'
    },
    {
      role: 'Catalogue Curation (Women)',
      image: 'https://res.cloudinary.com/dnhz5reqf/image/upload/v1714635700/slik/SlikCatalogueCurationWomen_hrah6r.webp'
    },
    {
      role: 'Catalogue Curation (Men)',
      image: 'https://res.cloudinary.com/dnhz5reqf/image/upload/v1714635700/slik/SlikCatalogueCurationMen_ow2fto.webp'
    },
    {
      role: 'Customer Support',
      image: 'https://res.cloudinary.com/dnhz5reqf/image/upload/v1714719598/slik/SlikCustomerSupport_uvweoq.webp'
    },
    {
      role: 'In-house Therapist',
      image: 'https://res.cloudinary.com/dnhz5reqf/image/upload/v1714635700/slik/SlikTherapist_b9bcvc.webp'
    },
    
  ]

  useEffect(() => {
    document.body.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <h1 className="text-center font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl mt-2 lg:mt-6">
        Team
      </h1>
      <div className="mt-5 lg:mt-10 grid grid-cols-2 gap-5 px-4 sm:gap-10 md:grid-cols-3 md:px-5 lg:grid-cols-3 lg:gap-20 xl:grid-cols-4 xl:gap-16 text-black pb-5 xl:mr-5">
        
        {team.map((genius) => (
          <img 
          key={genius.role}
          src={genius.image}
          className="h-full w-full object-cover rounded-lg"
          alt={genius.role}
        />))}
        </div>
      <div className="container p-10 text-lg font-medium">
        <h1 className="text-3xl font-medium mb-2">Contact Us</h1>
        <p className="mb-4 text-xl font-medium">Email: rakcurious@gmail.com</p>
        <div className="mb-8">
          <h2 className="text-2xl font-medium mb-2">For Brands</h2>
          <p className="mb-4 text-lg">
            If you are a brand, you can reach out to us via email for
            collaboration or discussions about the presentation of your products
            on our site. you can also reach out to us for removal of your
            products and brand from our site or any suggestion or feedback. If you are a brand and you think you should be on Slik, reach out to us. We are a young company and still learning as we grow. We would love to hear from you.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2">For Users</h2>
          <p className="text-lg">
            {" "}
            You can reach out to us via email for feedback, suggestions, bug
            reports or anything else about the site. We are a young company and
            still learning as we grow. We would love to hear from you. Please
            let us know if you love what we are doing.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
