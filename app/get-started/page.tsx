import Link from "next/link";
import { FormGetStarted } from "./FormGetStarted";

export default function page() {
  return (
    <div className="pt-12">
      <div className="container text-gray-600">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg sm:text-center lg:text-left">
            <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Contacter un expert du développement web
            </h1>
            <p className="mt-3">
              Nous sommes là pour vous aider. Contactez notre équipe et
              dites-nous comment nous pouvons vous aider. ou envoyez-nous un
              courriel à l&apos;adresse suivante :{" "}
              <Link
                href="mailto:mkl.devops@gmail.com"
                className="text-indigo-600 hover:text-indigo-400 font-medium duration-150"
                rel="noreferrer"
                target="_blank"
              >
                mkl.devops@gmail.com
              </Link>
            </p>
          </div>
          <FormGetStarted />
        </div>
      </div>
    </div>
  );
}
