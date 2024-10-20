import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <h1 className="bg-dark p-1 text-white text-center tw-font-montserrat">ShopEasy</h1>
          <br/>
         <p className="tw-font-poppins">
         The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities. We provide best products at good price.
         </p> 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
