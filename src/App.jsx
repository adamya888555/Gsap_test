import React from 'react'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);



const App = () => {
    return (
        <div className="flex-center h-screen">
            <h1 className="text-3xl text-violet-600"> Helolo </h1>

        </div>
    )
}
export default App
