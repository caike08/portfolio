import { useRef } from 'react'

import Header from './components/header/Header'
import WelcomeSection from './components/welcome-section/WelcomeSection'
import AboutSection from './components/about-section/AboutSection'
import HobbiesSection from './components/hobbies-section/HobbiesSection'
import ContactMeSection from './components/contact-me-section/ContactMeSection'
import Footer from './components/footer/Footer'

import { HEADER_ADDRESSES } from './constants/header.const'

import { useScrolling } from './hooks/useScrolling'

const SCROLLING_BREAKPOINT = 240

function App() {
  const mainRef = useRef<HTMLDivElement>(null)
  const hasReachedBreakpoint = useScrolling(SCROLLING_BREAKPOINT);

  return (
    <>    
      <main ref={mainRef}>
        <Header addresses={HEADER_ADDRESSES} hasReachedBreakpoint={hasReachedBreakpoint} />
        <WelcomeSection />
        <AboutSection />
        <HobbiesSection />
        <ContactMeSection />
      </main>
      <Footer />
    </>
  )
}

export default App
