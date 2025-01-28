import "./Subheader.css"
import { useState } from "react"
export default function Subheader({ text,bg }) {
    const [Text, SetText] = useState(text);
    const [bgcolor, setBgColor] = useState(bg);
    return (
        <div className='Subheader-main'>
            <span className="sub-flicker"></span>
            <p className={bgcolor ? "text-white":''}>{Text}</p>
        </div>
    )
}
