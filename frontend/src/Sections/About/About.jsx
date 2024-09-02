import React from "react";
import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="data:image/jpeg;base64,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"
              className="w-100"
            />
          </div>
          <div className="col-md-6">
            <h2>About Us</h2>
            <p className="about-paragraph mt-4">
              Your App Name is your ultimate destination for finding
              high-quality, pre-owned vehicles with ease. We offer a diverse
              selection of used cars, each meticulously inspected to ensure
              reliability and transparency. Our user-friendly platform allows
              you to explore, compare, and connect with trusted sellers, making
              your car-buying journey smooth and enjoyable. Discover your next
              vehicle with confidence at [Your App Name], where quality and
              affordability meet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
