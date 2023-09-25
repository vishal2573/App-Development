import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import "animate.css"; // Import Animate.css
import LandingDog from "../assets/LandingPage/LandingDog.jpg";
import HouseDog from "../assets/LandingPage/HouseDog.jpg";
import AdoptDog from "../assets/LandingPage/Dog.jpg";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import useRememberMe from "../service/rememberMe";

export default function HomePage() {
  useRememberMe();

  const landingRef = useRef(null);
  const adoptRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      <NavBar />
      
      <Element
        name="landing"
        className="relative w-full animate__animated animate__fadeIn"
        ref={landingRef}
      ></Element>
      <Element
        name="landing"
        className="relative w-full animate__animated animate__fadeIn"
        ref={landingRef}
      >
        <img src={LandingDog} alt="Dog" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center lg:mb-[10%]">
            <h1 className="text-3xl font-bold lg:text-6xl mb-2">
              Welcome to PetAdopt
            </h1>
            <p className="text-base lg:text-2xl">
              Discover adorable furry companions waiting to be adopted and
              loving homes for your furry friends!
            </p>
          </div>
        </div>
      </Element>
      <Element
        name="adopt"
        className="relative w-full animate__animated animate__fadeIn"
        ref={adoptRef}
      >
        <img src={AdoptDog} alt="Dog" />
        <Link
          to="/allpets"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="text-white text-center lg:mb-[6%] group">
            <h1 className="text-3xl lg:text-6xl font-bold mb-2">
              Find Your Next Furry Friend!
            </h1>
            <p className="text-base lg:text-2xl underline group-hover:underline">
              Explore pets looking for a loving home {">"}
            </p>
          </div>
        </Link>
      </Element>
      <Element
        name="home"
        className="relative w-full animate__animated animate__fadeIn"
        ref={homeRef}
      >
        <img src={HouseDog} alt="Dog" />
        <Link
          to="/newpet"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="text-white text-center lg:mb-[6%] group">
            <h1 className="text-3xl lg:text-6xl font-bold mb-2">
              Find a Loving Home for Your Pet!
            </h1>
            <p className="text-base lg:text-2xl underline group-hover:underline">
              Put your pet up for adoption {">"}
            </p>
          </div>
        </Link>
      </Element>
      
      <Footer />
    </div>
  );
}
