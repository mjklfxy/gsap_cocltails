import './App.css'
import gsap, {ScrollTrigger, SplitText} from "gsap/all";
// import * as gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

    return (
        <>
            <div className={"flex-center h-[100vh]"}>
                <h1 className="h1 text-3xl text-indigo-300">Hello JK</h1>
            </div>
        </>
    )
}

export default App
