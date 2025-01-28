import { IoArrowUp } from "react-icons/io5";
import "./GoUp.css";
export default function GoUp() {

    const handleGoUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return (
        <div className="GoUp-container" onClick={handleGoUp}><IoArrowUp /></div>
    )
}
