
import './App.css'
import About from './Components/About/About';
import AboutSection2 from './Components/AboutSection2/AboutSection2';
import Accordionn from './Components/Accordionn/Accordionn';
import CardAbout from './Components/CardAbout/CardAbout';
import Carousel2 from './Components/Carousel2/Carousel2';
import Contact from './Components/Contact/Contact';
import Departmens from './Components/Departments/Departmens';
import Doctors from './Components/Doctors/Doctors';
import FirstNavBar from './Components/FirstNavBar/FirstNavBar';
import Footer from './Components/Footer/Footer';
import Form1 from './Components/Form1/Form';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/Navbar'
import Pricing from './Components/Pricing/Pricing';
import Section2 from './Components/Section2/Section2';
import Services from './Components/Services/Services';
import Text from './Components/Text/Text';



function App() {
  const logo = {
    img1: '/src/assets/new/logo.png'
  };

  const items = [
    { id: 'home', name: 'HOME' },
    { id: 'about', name: 'ABOUT' },
    { id: 'contact', name: 'SERVICES' },
    { id: 'contact', name: 'DEPARTMENTS' },
    { id: 'contact', name: 'DOCTORS' },
  ];

  const dropdownItems = [
    { id: 'action1', name: 'Action 1' },
    { id: 'action2', name: 'Action 2' },
    { id: 'action3', name: 'Action 3' },
    { id: 'action4', name: 'Action 4' }
  ];

  const contactItem = [
    { id: 'contact', name: 'CONTACT' }
  ];
  const photoData = {
    carosel1: "/src/assets/hero-carousel/hero-carousel-1.jpg",
    carosel2: "/src/assets/hero-carousel/hero-carousel-2.jpg",
    carosel3: "/src/assets/hero-carousel/hero-carousel-3.jpg"
  };
  const text ="Nulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue mollis interdum a vitae elit libero, a pharetra augue mollis interdum a vitae elit libero, a pharetra augue mollis interdum."
  
  return (
    <>
    
     <NavBar 
        logo={logo} 
        items={items} 
        dropdownItems={dropdownItems} 
        contactItem={contactItem}
        btn="Make an Appointment"
      />
      <Hero  photo={photoData} title="Temporibus autem quibsudam" 
      text={text}
       className="z-index-20"/>

       <Section2 />
       <Text />
      <About />
      <CardAbout />
      <AboutSection2 />
      <Services />
      <Form1 />
      <Departmens />
       <Carousel2 />
       <Doctors />
       <Pricing/>
       <Accordionn />
       <Contact />
       <Footer/>
       
       
    </>
  )
}

export default App
