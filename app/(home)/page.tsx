import { Feature } from "@/src/features/home/Feature";
import { Hero } from "@/src/features/home/Hero";
import { Testimonials } from "@/src/features/home/Testimonials";
import { Toolkit } from "@/src/features/home/Toolkit";
import { WorkedWithMe } from "@/src/features/home/WorkedWithMe";
import "./styles.css";

export default function page() {
  return (
    <>
      <Hero />
      <WorkedWithMe />
      <div className="relative overflow-hidden my-16 border-t sm:my-28 ">
        <div className="blur-[100px] absolute inset-0 w-full h-full linear-gradient"></div>
        <div className="container">
          <Feature />
          <Toolkit />
        </div>
      </div>
      <div className="relative overflow-hidden my-16 border-t sm:my-28 ">
        <div className="blur-[100px] absolute inset-0 w-full h-full linear-gradient"></div>
        <div className="container">
          <Testimonials />
        </div>
      </div>
    </>
  );
}
