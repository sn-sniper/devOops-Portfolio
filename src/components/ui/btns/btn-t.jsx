import { useState } from 'react'
import "./btn.css"
import { FaArrowRight } from "react-icons/fa6";
function Btnt({ bg, border, text }) {
    const [bgColor, setBgColor] = useState(bg)
    const [Border, setBorder] = useState(border)
    const [Text, setText] = useState(text)
    return (
        <button className={`btn-t ${bgColor ? "bg-w" : ""} ${border ? `border-w` : ""}`} >
            <span className='Arrow'><FaArrowRight className='arrow'/></span>
            <p className={bgColor? "text-black btn-text":"btn-text"}>{Text}</p>
        </button>
    )
}
export default Btnt