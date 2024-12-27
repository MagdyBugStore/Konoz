import React from 'react';
import { BookOpen, Video, FileText, Users, Clock } from 'lucide-react';

const CourseDetails = () => {
  const modules = [
    {
      title: 'أساسيات علم القراءات',
      description: 'مقدمة شاملة في علم القراءات وأهميته وتاريخه',
      duration: '٤ أسابيع',
      lessons: '١٢ درس'
    },
    {
      title: 'رواية قالون',
      description: 'دراسة تفصيلية لرواية قالون عن نافع',
      duration: '٦ أسابيع',
      lessons: '١٨ درس'
    },
    {
      title: 'رواية ابن كثير',
      description: 'دراسة تفصيلية لقراءة ابن كثير',
      duration: '٦ أسابيع',
      lessons: '١٨ درس'
    },
    {
      title: 'قراءة أبي جعفر',
      description: 'دراسة تفصيلية لقراءة أبي جعفر',
      duration: '٦ أسابيع',
      lessons: '١٨ درس'
    }
  ];

  return (
    <section id="course" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">محتوى الدورة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            دورة شاملة ومتكاملة في علم القراءات، مصممة لتناسب جميع المستويات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-emerald-600" />
                <h3 className="text-xl font-semibold mr-3">{module.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 ml-2" />
                  {module.duration}
                </span>
                <span className="flex items-center">
                  <BookOpen className="h-4 w-4 ml-2" />
                  {module.lessons}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Video className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">محاضرات مسجلة</h3>
            <p className="text-gray-600">محاضرات مسجلة بجودة عالية مع إمكانية المشاهدة في أي وقت</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <FileText className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">مواد تعليمية</h3>
            <p className="text-gray-600">ملفات PDF وخرائط ذهنية لتسهيل الفهم والمراجعة</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Users className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">دعم مباشر</h3>
            <p className="text-gray-600">تواصل مباشر مع المدرسين للإجابة على استفساراتك</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;