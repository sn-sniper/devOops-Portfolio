import { IoArrowUp } from "react-icons/io5";
import "./GoUp.css";

import {useState, useEffect} from 'react';
export default function GoUp() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY === 0) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        
        window.addEventListener('scroll', toggleVisibility);
        return  () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
    
    const handleGoUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return (
        <div className={`GoUp-container ${isVisible ? "scale-100":"scale-0 pointer-events-none"}`} onClick={handleGoUp}><IoArrowUp /></div>
    )
}
