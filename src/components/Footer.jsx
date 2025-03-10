import '@styles/Footer.css';
import FooterLink from './ui/Footer-Links/FooterLink';
import data from "@assets/data.json";

export default function Footer() {
    return (
        <div className='Footer-Container'>
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="contact-info">
                        <p className='font-bold text-gray-500'>DevOops</p>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <span className="phone">+961 19 234 567</span>
                        <span className="email">support@example.com</span>
                    </div>
                    <div className="footer-links">
                        <p className='font-bold text-gray-500 '>Links</p>
                        <div className="links">
                            {data.footer_links.map((item, index) => (
                                <FooterLink key={index} text={item.text} link={item.link} />
                            ))}
                        </div>
                    </div>
                    <div className="footer-socials">
                        <p className='font-bold text-gray-500 '>Follow us</p>
                        <div className="links">
                            {data.footer_socials.map((item, index) => (
                                <FooterLink key={index} text={item.text} link={item.link} icon={item.icon}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span className="copy-right">
                        &copy; 2025 <span>DevOops</span>. All rights reserved
                    </span>
                </div>
            </div>
        </div>
    )
}
