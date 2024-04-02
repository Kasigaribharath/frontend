import React, { useEffect} from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { HeadSection } from './components/headsection';
import Home from './components/Home';
import { Register } from './components/bookslot';
import { VerifyCoupon } from './components/verifyCoupon';
import { SelectSlot } from './components/slotSelectionPage';
import TermsAndConditions from './components/TermsAndConditions';
import RegisterPage from './components/RegisterPage';
import LoginForm from './components/loginpage';
import { Wallet } from './components/wallet';
import ProfilePage from './components/profilePage';
import { GameHistory } from './components/GameHistory';
import { Footer } from './components/Footer';
import AboutUs from './components/About';
import LegalInformation from './components/legalInformation';
import Contact from './components/contact';
import UserGuide from './components/userGuide';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='bgShade'>
          <HeadSection />
          <div className='Routes'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/couponentry/:id/slot' element={<SelectSlot  />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/couponentry/:id/slot/register' element={<Register />} />
              <Route path='/couponentry/:id' element={<VerifyCoupon />} />
              <Route path='/tmc' element={<TermsAndConditions />} />
              <Route path='/registerpage' element={<RegisterPage />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/wallet' element={<Wallet />} />
              <Route path='/gamehistory' element={<GameHistory />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/footer' element={<Footer />} />
              <Route path='/conditions' element={<LegalInformation />} />
              <Route path='/conditions' element={<LegalInformation />} />
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/userguide" element={<UserGuide/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
