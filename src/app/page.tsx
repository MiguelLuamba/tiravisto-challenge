"use client"
import { gsap } from "gsap";
import { useEffect } from "react";
import { Footer } from "./sections/footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OurPackages } from "./sections/our-packages";
import { HomeSection } from "./sections/home-section";
import { MoreInfoSection } from "./sections/more-info-section";
import { ConsultoriaSection } from "./sections/consultoria-section";
import { MostPopularDestenies } from "./sections/most-popular-destenies";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Hero Section Animation
    gsap.from(".hero-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".hero-image", {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Consultoria Section Animation
    gsap.from(".consultoria-text-left", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".consultoria-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".consultoria-text-right", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".consultoria-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Tranquilidade Section Animation
    gsap.from(".tranquilidade-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tranquilidade-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".tranquilidade-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tranquilidade-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(".tranquilidade-image", {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      delay: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tranquilidade-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Destinos Section Animation
    gsap.from("#destinos-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".destinos-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Pacotes Section Animation
    gsap.from("#pacotes-card", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".pacotes-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Footer Animation
    gsap.from("#footer-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      <HomeSection />

      <ConsultoriaSection/>

      <MoreInfoSection />

      <MostPopularDestenies />

      <OurPackages />

      <Footer />
    </main>
  );
}