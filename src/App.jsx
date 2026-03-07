import './App.css';
import gsap, { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar.jsx';
// import * as gsap from "gsap";
import Hero from './components/Hero.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <Hero></Hero>
        <div className='h-dvh bg-black'></div>
      </main>
    </>
  );
}

export default App;
