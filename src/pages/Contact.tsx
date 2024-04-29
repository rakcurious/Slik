import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8 text-lg font-medium">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-4 text-xl font-medium">Email: rakcurious@gmail.com</p>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">For Brands</h2>
          <p className="mb-4 text-lg">
            If you are a brand, you can reach out to us via email for
            collaboration or discussions about the presentation of your products
            on our site. you can also reach out to us for removal of your
            products or any suggestion or feedback. We are a young company and
            still learning as we grow. We would love to hear from you.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">For Users</h2>
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
