import AboutSection from './components/about-section/AboutSection'
import ContactMeSection from './components/contact-me-section/ContactMeSection'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HobbiesSection from './components/hobbies-section/HobbiesSection'
import WelcomeSection from './components/welcome-section/WelcomeSection'
import { HEADER_ADDRESSES } from './constants/header.const'
import { useScrolling } from './hooks/useScrolling'

const SCROLLING_BREAKPOINT = 240

function App() {
  const hasReachedBreakpoint = useScrolling(SCROLLING_BREAKPOINT)

  return (
    <>
      <main>
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
