import "./Subheader.css"
import { useState } from "react"
export default function Subheader({ text }) {
    const [Text, SetText] = useState(text);
    return (
        <div className='Subheader-main'>
            
            {Text}
        </div>
    )
}
