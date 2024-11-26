import React from "react";
import StyledButton from "./extraComponents/StyledButton";
import logo from "@/assets/next buy.png";

const Footer = () => {
  return (
    <div className="footer bg-neutral-100">
      <div className="py-10 border-b border-gray-300 relative">
        <div className="flex flex-wrap justify-between items-start">
          {/* logo */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-16 h-16 object-cover" />
              <h3 className="text-2xl font-bold ml-3">Nextbuy</h3>
            </div>
            <div className="mt-4">
              <p>
                Address:{" "}
                <span>1234 Fashion Street, Suite 567, New York, NY</span>
              </p>
              <p>
                Email: <span>info@fashionshop.com</span>
              </p>
              <p>
                Phone: <span>(212)555-1234</span>
              </p>
            </div>
          </div>

          {/* Help */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 pt-5">
            <h3 className="text-xl font-bold">Help</h3>
            <div className="mt-4">
              <p>Privacy Policy</p>
              <p>Returns + Exchanges</p>
              <p>Shipping</p>
              <p>Terms & Conditions</p>
              <p>My Wishlist</p>
            </div>
          </div>

          {/* About */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 pt-5">
            <h3 className="text-xl font-bold">About Us</h3>
            <div className="mt-4">
              <p>Our Story</p>
              <p>Visit Our Store</p>
              <p>Contact Us</p>
              <p>About Us</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 pt-5">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <div className="mt-4">
              <p>
                Sign up to get first dibs on new arrivals, sales, exclusive
                content, events and more!
              </p>
              <div className="flex items-center mt-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="border p-2  w-full "
                />
                <StyledButton title={"Subscribe"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      {/* <div className="py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fashion Shop. All rights reserved.
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
