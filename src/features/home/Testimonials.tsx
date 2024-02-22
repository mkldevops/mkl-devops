import { getTestimonials } from "@/src/query/get-testimonials";
import Image from "next/image";
import Link from "next/link";

export const Testimonials = () => {
  return (
    <div className="relative">
      <section className="py-16 pb-0">
        <div id="testimonials" className="max-w-screen-4xl mx-auto">
          <div className="max-w-2xl sm:text-center md:mx-auto">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Découvrez l&apos;écho de notre réputation
            </h2>
            <p className="mt-3 text-gray-600">
              Plongez dans les éloges des experts internationaux à notre égard.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {getTestimonials().map((testimonial) => (
                <li
                  className="bg-white border p-4 rounded-xl"
                  key={testimonial.name}
                >
                  <figure>
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={testimonial.picture}
                        className="w-14 h-14 object-cover rounded-full"
                        width="56"
                        height="56"
                        alt={testimonial.name}
                      />
                      <div>
                        <Link
                          href={testimonial.linedinLink}
                          target="_blank"
                          className="block text-gray-800 font-semibold"
                        >
                          {testimonial.name}
                        </Link>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {testimonial.job}
                        </span>
                      </div>
                    </div>
                    <blockquote>
                      <p className="mt-6 text-gray-700 whitespace-pre-wrap">
                        {testimonial.content}
                      </p>
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
