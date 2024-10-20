import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center tw-font-montserrat ">PRIVACY POLICY</h1>
          <p className="tw-font-poppins">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
information when You use the Service and tells You about Your privacy rights and how the law protects You.
We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
collection and use of information in accordance with this Privacy Policy. This Privacy Policy was generated
by TermsFeed Privacy Policy Generator.</p>
        
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
