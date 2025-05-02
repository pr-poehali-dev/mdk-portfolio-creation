
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Методическое обеспечение</span>
            <span className="block text-primary mt-2">внеурочной деятельности</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            в компенсирующем и коррекционно-развивающем образовании
          </p>
          <div className="flex gap-4 mt-10">
            <Button asChild>
              <a href="#program">Подробнее о программе</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#materials">Методические материалы</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-y-0 right-0 hidden w-1/4 xl:block -z-10">
        <svg 
          viewBox="0 0 500 500" 
          className="absolute inset-0 h-full w-full text-primary/10"
          preserveAspectRatio="xMinYMin slice"
        >
          <path d="M0,0 L500,0 L500,500 L0,500 Z" fill="currentColor" />
          <circle cx="250" cy="250" r="200" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
