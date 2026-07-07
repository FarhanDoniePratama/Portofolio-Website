import HeaderLeft from './components/HeaderLeft';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />

        <main className="flex-[3]">
          <Home />
          <Skills /> {/* FIXED: Changed from <Experience /> to <Skills /> */}
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;