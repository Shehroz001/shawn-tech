import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useGlobalContext } from "../context";

const Home = () => {

  // using props
  // const data ={ 
  //   name: "SHAWN TECH",
  //   image: "./images/hero.svg"
  // }

const { updateHomePage } = useGlobalContext();

useEffect(() =>{
  updateHomePage();
}, []);

  return <HeroSection/>;
};

export default Home;
