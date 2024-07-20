import HeroSection from "../components/HeroSection"
import { useGlobalContext } from "../context"
import { useEffect } from 'react';


const About = () => {
  // const data = {
  //   name: "SHAWN TECH TEAM",
  //   image: "./images/about.svg"
  // }

  const { updateAboutPage } = useGlobalContext();
   
  useEffect(() => {
    updateAboutPage();
  }, []);
  return (
    <>
    <HeroSection/>
    </>
  )
}

export default About