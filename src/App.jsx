import HeaderLeft from './components/HeaderLeft';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      
      <div className="flex min-h-screen w-full max-w-full subpixel-antialiased overflow-x-hidden">
        <HeaderLeft />

       
        <main className="flex-[3] w-full max-w-full overflow-x-hidden">
          <Home />
          <Skills /> 
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;