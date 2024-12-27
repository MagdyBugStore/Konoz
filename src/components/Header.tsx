import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-emerald-800 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8" />
            <span className="ml-3 text-2xl font-bold">كنوز القراءات</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="hover:text-emerald-200">الرئيسية</a>
            <a href="#course" className="hover:text-emerald-200">عن الدورة</a>
            <a href="#instructors" className="hover:text-emerald-200">المدرسون</a>
            <a href="#resources" className="hover:text-emerald-200">المصادر</a>
            <button className="bg-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-500 transition-colors">
              سجل الآن
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-right">
            <a href="#home" className="block hover:text-emerald-200">الرئيسية</a>
            <a href="#course" className="block hover:text-emerald-200">عن الدورة</a>
            <a href="#instructors" className="block hover:text-emerald-200">المدرسون</a>
            <a href="#resources" className="block hover:text-emerald-200">المصادر</a>
            <button className="w-full bg-emerald-600 px-6 py-2 rounded-lg hover:bg-emerald-500 transition-colors">
              سجل الآن
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;