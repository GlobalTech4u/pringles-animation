import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import "./Pringles.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Pringles = () => {
  useGSAP(() => {
    gsap.to(".slide-board", {
      y: "-100vh",
      scrollTrigger: {
        trigger: ".wrapper2",
        start: () => "top bottom",
        end: () => "top top",
        toggleActions: "restart none none reverse",
        scrub: 0.1,
      },
      ease: "none",
    });
    gsap.to(".slide-chips", {
      y: "-100vh",
      scrollTrigger: {
        trigger: ".wrapper2",
        start: () => "top bottom",
        end: () => "top top",
        toggleActions: "restart none none reverse",
        scrub: 0.1,
      },
      ease: "none",
    });
    gsap.to(".slide-onion", {
      y: "-100vh",
      scrollTrigger: {
        trigger: ".wrapper2",
        start: () => "top bottom",
        end: () => "top top",
        toggleActions: "restart none none reverse",
        scrub: 0.1,
      },
      ease: "none",
    });
  });

  useGSAP(() => {
    gsap.to(".chips2", {
      y: "-100vh",
      scrollTrigger: {
        trigger: ".slide3",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
        toggleActions: "restart none none reverse",
      },
      ease: "none",
    });
  });

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".slide2",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        pin: ".wrapper1",
        toggleActions: "restart none none reverse",
      },
      ease: "none",
    });
  });

  useGSAP(() => {
    gsap.to(".chips3", {
      y: "-100vh",
      scrollTrigger: {
        trigger: ".slide4",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
        toggleActions: "restart none none reverse",
      },
      ease: "none",
    });
  });

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".slide3",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        pin: ".wrapper2",
        toggleActions: "restart none none reverse",
      },
      ease: "none",
    });
  });

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".slide4",
        start: "top bottom",
        end: "+=500",
        scrub: 1,
        pin: ".wrapper3",
        toggleActions: "restart none none reverse",
      },
      ease: "none",
    });
  });

  useGSAP(() => {
    gsap.to(".slide-pringles-blue", {
      rotation: -10,
      ease: "none",
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
    gsap.to(".slide-pringles-green", {
      rotation: -3,
      ease: "none",
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
    gsap.to(".slide-pringles-yellow", {
      rotation: 8,
      ease: "none",
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
  });

  return (
    <div className="slide-container">
      <div className="slide-wrapper wrapper1">
        <img className="slide-sky" src={"/images/sky.png"} />
        <img className="slide-ground" src={"/images/ground.png"} />
        <img className="slide-menu" src={"/images/iconoir_menu.png"} />
        <img className="slide-logo" src={"/images/pringles_logo.png"} />
        <div className="slide-pringles">
          <img
            className="slide-pringles-blue"
            src={"/images/pringles blue.png"}
          />
          <img
            className="slide-pringles-green"
            src={"/images/pringles green.png"}
          />
          <img
            className="slide-pringles-yellow"
            src={"/images/pringles yellow.png"}
          />
        </div>
        <img className="slide-board" src={"/images/image 5.png"} />
        <img className="slide-chips" src={"/images/image 7.png"} />
        <img className="slide-onion" src={"/images/image 8.png"} />
      </div>
      <div className="slide-wrapper wrapper2">
        <img className="slide-text" src={"/images/Green Pringles Text.png"} />
        <img className="slide slide2" src={"/images/background green.png"} />
        <img className="chips chips2" src={"/images/chips.png"} />
        <img className="pringles" src={"/images/pringles green.png"} />
      </div>
      <div className="slide-wrapper wrapper3">
        <img className="slide-text" src={"/images/Blue Pringles Text.png"} />
        <img className="slide slide3" src={"/images/background blue.png"} />
        <img className="chips chips3" src={"/images/chips.png"} />
        <img className="pringles" src={"/images/pringles blue.png"} />
      </div>
      <div className="slide-wrapper wrapper4">
        <img className="slide-text" src={"/images/Yellow Pringles Text.png"} />
        <img className="slide slide4" src={"/images/background yellow.png"} />
        <img className="chips chips4" src={"/images/chips.png"} />
        <img className="pringles" src={"/images/pringles yellow.png"} />
      </div>
    </div>
  );
};

export default Pringles;
