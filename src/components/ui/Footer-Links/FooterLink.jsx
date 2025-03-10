import './FooterLink.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

export default function FooterLink({ text, link, icon }) {
    return (
        <div className='flex items-center gap-4'>
            {icon && <FaArrowRightLong className='icon' />}
            <Link to={link} className='footer-link'>{text}</Link>
        </div>
    )
}
