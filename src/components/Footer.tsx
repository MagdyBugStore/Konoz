import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">كنوز القراءات</h3>
            <p className="text-gray-400">
              دورة متخصصة في تعليم القراءات القرآنية بمنهجية عصرية ومبتكرة
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">الرئيسية</a></li>
              <li><a href="#course" className="text-gray-400 hover:text-white">عن الدورة</a></li>
              <li><a href="#instructors" className="text-gray-400 hover:text-white">المدرسون</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-white">المصادر</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 ml-2" />
                <span className="text-gray-400">info@quranreadings.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 ml-2" />
                <span className="text-gray-400">+1234567890</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} كنوز القراءات. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;