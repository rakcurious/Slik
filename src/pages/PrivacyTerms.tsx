import { useEffect } from "react";
import { Navbar } from "..";

const PrivacyTerms = () => {
  useEffect(() => {
    document.body.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 font-urbanist">
        <div className="p-8 pt-1">
          <h1 className=" text-xl md:text-3xl font-bold mb-6">
            Privacy Policy & Terms of Use
          </h1>
          <div className="mb-8 text-lg font-medium">
            <h2 className="text-lg md:text-2xl font-bold mb-4">
              Privacy Policy
            </h2>
            <p className="mb-4">
              <strong>Introduction</strong>
              <br />
              This Privacy Policy governs your use of our website and services.
              By accessing or using our services, you agree to be bound by this
              policy.
            </p>
            <p className="mb-4">
              <strong>Information We Collect</strong>
              <br />
              When you create an account with us, we collect your name and email
              address. We also automatically receive your device's internet
              protocol (IP) address to help us understand usage by browser and
              operating system.
            </p>
            <p className="mb-4">
              <strong>Use of Information</strong>
              <br />
              We use the information we collect to provide, maintain, and
              improve our services. This includes allowing you to create
              wishlists, browse products, and receive account updation emails
              like password reset emails when requested. We will not send you
              marketing emails or share your personal information without your
              consent.
            </p>
            <p className="mb-4">
              <strong>Cookies</strong>
              <br />
              We use cookies to maintain your user session. These are not used
              to personally identify you on other websites.
            </p>
            <p className="mb-4">
              <strong>Data Security</strong>
              <br />
              We take reasonable precautions to protect your personal
              information from loss, misuse or unauthorized access or
              disclosure.
            </p>
            <p className="mb-4">
              <strong>Third-Party Links</strong>
              <br />
              Our website may contain links to third-party sites we do not
              control. Though we make sure we don't put links to random sites
              without verification, We are not responsible for their privacy
              practices.
            </p>
            <p className="mb-4">
              <strong>Children's Privacy</strong>
              <br />
              Our services are not intended for children under 13. We do not
              knowingly collect personal information from children.
            </p>
            <p className="mb-4">
              <strong>Policy Updates</strong>
              <br />
              We may update this policy from time to time. Your continued use of
              our services means you accept any updates.
            </p>
            <p>
              <strong>Contact</strong>
              <br />
              Please contact rakcurious@gmail.com with any privacy questions.
            </p>
          </div>
          <div className="mb-8 text-lg font-medium">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Terms of Use</h2>
            <p className="mb-4">
              <strong>Introduction</strong>
              <br />
              This website, Slik, is operated by Slik team. Throughout the site, the terms "we", "us", and "our" refer to Slik team. We offer this website, including all information, tools, and services available on this site, to you, the user, upon your acceptance of these terms, conditions, policies, and notices.
              <br />


By visiting our site or using our services, you engage in our "Service" and agree to be bound by these Terms of Use ("Terms"), including any additional terms, conditions, and policies referenced herein or available through hyperlinks. These Terms apply to all users of the site.
<br />

Please read these Terms carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms. If you do not agree with all the terms and conditions, you may not access the website or use any services. If these Terms are considered an offer, acceptance is expressly limited to these Terms.
<br />

Any new features or tools added to the website shall also be subject to these Terms of Use. We reserve the right to update, change, or replace any part of these Terms by posting updates on our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
            </p>
            <p className="mb-4">
              <strong>Account Use</strong>
              <br />
              You must be 13 or older to use our services. You are responsible
              for your account and actions. Do not share your account or use the
              services illegally or to violate the rights of others.
            </p>
            <p className="mb-4">
              <strong>Our Services</strong>
              <br />
              We provide a platform to discover products from various brands. We
              do not process transactions, ship products, or receive payments.
              To purchase, you must visit the brand's website. We do not own or
              control the products. If you are a brand, you can contact us about
              collaborating or removing your products or for any objection or
              queries you have regarding the presentation of your products on
              our site.
            </p>
            <p className="mb-4">
              <strong>Third-Party Links</strong>
              <br />
              Our site contains links to third-party sites we do not control. We
              are not liable for their content or actions.
            </p>
            <p className="mb-4">
              <strong>Intellectual Property</strong>
              <br />
              Do not copy or use our branding without permission.
            </p>
            <p className="mb-4">
              <strong>Disclaimer of Warranties</strong>
              <br />
              We provide our services as-is without warranties. We are not
              liable for errors, interruptions, or issues using our services.
            </p>
            <p className="mb-4">
              <strong>Limitation of Liability</strong>
              <br />
              We are not liable for any damages from your use of our services.
            </p>
            <p className="mb-4">
              <strong>Indemnification</strong>
              <br />
              You will indemnify us against claims arising from your violation
              of these Terms.
            </p>
            <p className="mb-4">
              <strong>Termination</strong>
              <br />
              We may suspend or terminate your account for violations of these
              Terms.
            </p>
            <p className="mb-4">
              <strong>Disputes</strong>
              <br />
              These Terms are governed by the laws of India. Disputes will be
              resolved in Indian courts.
            </p>
            <p>
              <strong>Changes</strong>
              <br />
              We may update these Terms at any time. Your continued use means
              you accept the updated Terms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyTerms;
