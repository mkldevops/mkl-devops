import { Feature } from "@/src/features/home/Feature";
import { Hero } from "@/src/features/home/Hero";
import { Testimonials } from "@/src/features/home/Testimonials";
import { Toolkit } from "@/src/features/home/Toolkit";
import { WorkedWithMe } from "@/src/features/home/WorkedWithMe";

export default function page() {
  const backgroundLinbearGradient = {
    background:
      "linear-gradient(202.72deg, rgba(237, 78, 80, 0.05) 14.76%, rgba(152, 103, 240, 0.04) 34.37%, rgba(152, 103, 240, 0) 86.62%)",
  };

  return (
    <>
      <Hero />
      <WorkedWithMe />
      <div className="relative overflow-hidden my-16 border-t sm:my-28 ">
        <div
          className="blur-[100px] absolute inset-0 w-full h-full"
          style={backgroundLinbearGradient}
        ></div>
        <div className="container">
          <Feature />
          <Toolkit />
        </div>
      </div>
      <div className="relative overflow-hidden my-16 border-t sm:my-28 ">
        <div
          className="blur-[100px] absolute inset-0 w-full h-full"
          style={backgroundLinbearGradient}
        ></div>
        <div className="container">
          <Testimonials />
        </div>
      </div>
    </>
  );
}
