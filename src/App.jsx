import './App.css';
import gsap, { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar.jsx';
// import * as gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <main>
        <Navbar></Navbar>
      </main>
    </>
  );
}

export default App;
