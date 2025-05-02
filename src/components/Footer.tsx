
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Портфолио МДК.02.03</h3>
            <p className="mb-4">
              Методическое обеспечение внеурочной деятельности в компенсирующем и коррекционно-развивающем образовании
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              </li>
              <li>
                <a href="#program" className="hover:text-white transition-colors">О программе</a>
              </li>
              <li>
                <a href="#materials" className="hover:text-white transition-colors">Методические материалы</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">Достижения</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Контакты</h3>
            <p className="mb-2">Email: example@edu.ru</p>
            <p>Телефон: +7 (XXX) XXX-XX-XX</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
