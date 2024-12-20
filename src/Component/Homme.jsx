import React from "react";
import Slider from "react-slick"; // Import the slider component
import medcins from "../assets/staf.jpg"; // Your first image
import anotherImage from "../assets/reserva.jpg"; // Your second image
import thirdImage from "../assets/time-run.jpg"; // Your third image

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true, // Adds navigation arrows
  autoplay: true, // Enables auto play
  autoplaySpeed: 5000, // Adjust autoplay speed
};

const SliderComponent = () => {
  return (
    <section className="bg-gray-100 py-18" id ="hero">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <Slider {...settings} className="w-full"> {/* Ensure the slider takes full width */}
          {/* First Slide */}
          <div className="relative flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden h-[500px]">
            <div className="absolute inset-0">
              <img
                alt="Medical Staff"
                src={medcins}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
            <div className="absolute bottom-0 w-full p-8 bg-white bg-opacity-20 border-1 border-black border-opacity-20 rounded-lg text-center shadow-xl my-6">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Find An{" "}
                <span className="text-blue-600">
                  Appointment with your{" "}
                  <span className="font-semibold">Doctor</span>
                </span>
              </h2>
              <p className="text-black-700 text-base sm:text-lg leading-relaxed mb-6">
                Welcome to our medical reservation website, where your health is
                our top priority. Our platform allows you to easily book
                appointments with qualified healthcare professionals at your
                convenience.
              </p>
            </div>
          </div>

          {/* Second Slide */}
          <div className="relative flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden h-[500px]">
            <div className="absolute inset-0">
              <img
                alt="Reservation"
                src={anotherImage}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
            <div className="absolute bottom-0 w-full p-8 bg-white bg-opacity-20 border-1 border-black border-opacity-20 rounded-lg text-center shadow-xl my-6">
              <h2 className="text-3xl font-semibold text-black-900 mb-4">
                Join Our <span className="text-blue-600">Community</span>
              </h2>
              <p className="text-black-700 text-base sm:text-lg leading-relaxed mb-6">
                Become a part of our health community. Stay updated with the
                latest health tips, news, and events. Together, we can achieve
                better health outcomes.
              </p>
            </div>
          </div>

          {/* Third Slide */}
          <div className="relative flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden h-[500px]">
            <div className="absolute inset-0">
              <img
                alt="Time Management"
                src={thirdImage}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
            <div className="absolute bottom-0 w-full p-8 bg-white bg-opacity-20 border-1 border-black border-opacity-20 rounded-lg text-center shadow-xl my-6">
              <h2 className="text-3xl font-semibold text-black-900 mb-4">
                Explore Our <span className="text-blue-600">Services</span>
              </h2>
              <p className="text-black-700 text-base sm:text-lg leading-relaxed mb-6">
               We offer a variety of services to meet your health needs. Let us
                help you on your journey to better health.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SliderComponent;