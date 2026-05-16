import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <section id="about" className="py-16 md:py-24 container mx-auto px-4">
          <About />
        </section>
        <section id="skills" className="py-16 md:py-24 container mx-auto px-4">
          <Skills />
        </section>
        <section id="projects" className="py-16 md:py-24 container mx-auto px-4">
          <Projects />
        </section>
        <section id="experience" className="py-16 md:py-24 container mx-auto px-4">
          <Experience />
        </section>
        <section id="contact" className="py-16 md:py-24 container mx-auto px-4">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
