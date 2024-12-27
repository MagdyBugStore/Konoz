import React from 'react';
import { BookOpen, Users, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-emerald-800 to-emerald-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            تعلم القراءات القرآنية بطريقة عصرية ومبتكرة
          </h1>
          <p className="text-xl mb-8 text-emerald-100">
            دورة شاملة في علم القراءات تجمع بين الأصالة والمعاصرة
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-500 transition-colors text-lg">
              سجل الآن
            </button>
            <button className="bg-white text-emerald-800 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors text-lg">
              اعرف المزيد
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="flex items-center space-x-4 bg-emerald-700/50 p-4 rounded-lg">
            <BookOpen className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">دروس شاملة</h3>
              <p className="text-emerald-200">محتوى تعليمي متكامل</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-emerald-700/50 p-4 rounded-lg">
            <Users className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">أساتذة متخصصون</h3>
              <p className="text-emerald-200">خبرة في التعليم</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-emerald-700/50 p-4 rounded-lg">
            <Clock className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">مرونة في التعلم</h3>
              <p className="text-emerald-200">تعلم حسب وقتك</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-emerald-700/50 p-4 rounded-lg">
            <Award className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">شهادة معتمدة</h3>
              <p className="text-emerald-200">عند إتمام الدورة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;