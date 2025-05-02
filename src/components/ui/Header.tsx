
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Портфолио МДК.02.03</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="#program" className="text-sm font-medium hover:text-primary transition-colors">
            О программе
          </Link>
          <Link to="#materials" className="text-sm font-medium hover:text-primary transition-colors">
            Методические материалы
          </Link>
          <Link to="#achievements" className="text-sm font-medium hover:text-primary transition-colors">
            Достижения
          </Link>
        </nav>

        <Button variant="outline" size="sm" className="md:hidden">
          <Icon name="Menu" className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
