import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBg from './Assets/Home.png'; 
import AboutUs from './components/AboutUs';
import IntroductionSection from './components/Mid';
import NewfToken from './components/NewfToken';

// Type for AppWrapper props
interface AppWrapperProps {
  children: React.ReactNode;
}

// Home component that combines the landing page sections
const Home = () => (
  <>
    <div 
      className="relative flex min-h-screen flex-col overflow-x-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        fontFamily: '"Spline Sans", "Noto Sans", sans-serif',
        backgroundImage: `url(${HomeBg})`,
      }}
    >
      <main className="flex-1 pt-16">
        <LandingPage />
      </main>
    </div>
    
    <div id="introduction">
      <IntroductionSection />
    </div>
  </>
);

// Properly typed AppWrapper component
const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <div className="flex-1">
      {children}
    </div>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/token" element={<NewfToken />} />
          </Routes>
        </AppWrapper>
      </div>
    </Router>
  );
};

export default App;