import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At LIFEQUEST CARE, we are dedicated to
           providing exceptional healthcare services to our community.
            Our team of experienced professionals is committed to delivering personalized care
             that meets the unique needs of each patient. We believe in treating not 
             just the symptoms but the whole person, ensuring a holistic approach
              to health and wellness
          </p>
          <p>Established in 2024, we have quickly become a trusted healthcare provider</p>
        
          <p>
          We specialize in a wide range of medical services, including 
          primary care, specialist consultations, and preventive health screenings.
           Our dedicated staff works collaboratively to ensure that every patient
           receives comprehensive care tailored to their individual needs.
          </p>
          <p> Join us as we continue to innovate and improve healthcare </p>
         
        </div>
      </div>
    </>
  );
};

export default Biography;
