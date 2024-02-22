import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Service {
  id: string;
  label: string;
}

export const FormGetStarted = () => {
  const services: Service[] = [
    {
      id: "mobile-development",
      label: "Mobile development",
    },
    {
      id: "ui-ux-design",
      label: "UI/UX Design",
    },
    {
      id: "web-development",
      label: "web development",
    },
    {
      id: "seo",
      label: "SEO",
    },
  ];

  return (
    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0">
      <form className="space-y-5 font-medium">
        <div>
          <Label>Nom & Prénom</Label>
          <Input
            aria-label="Votre nom complet"
            type="text"
            placeholder="Votre nom complet"
            required={true}
            className="mt-2 focus:border-indigo-600 w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150"
          />
        </div>
        <div>
          <Label>E-mail</Label>
          <Input
            aria-label="Email"
            placeholder="my-email@gmail.com"
            type="email"
            required={true}
            className="mt-2 focus:border-indigo-600 w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150"
          />
        </div>
        <div>
          <Label>Message</Label>
          <Textarea
            aria-label="Message"
            placeholder="Votre message..."
            required={true}
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <Label>Service</Label>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16">
            {services.map((service) => (
              <li className="flex gap-x-2 items-center" key={service.id}>
                <Checkbox
                  id={service.id}
                  className="form-checkbox duration-75 rounded"
                />
                <Label htmlFor={service.id} className="text-sm">
                  {service.label}
                </Label>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-1">
          <Button
            type="submit"
            role="submit"
            className="w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring px-4 py-2 rounded-lg duration-150"
          >
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
};
