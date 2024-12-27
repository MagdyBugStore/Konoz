import Header from './components/Header';
import Hero from './components/Hero';
import CourseDetails from './components/CourseDetails';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CourseDetails />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;