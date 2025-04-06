import "@styles/Footer.css";
import FooterLink from "./ui/Footer-Links/FooterLink";
import data from "@assets/json/footer.json";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer-Container">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="contact-info">
            <p className="font-bold text-gray-500">DevOops</p>
            <h2>
              <strong>Reach us</strong>
            </h2>
            <Link to="https://wa.me/96181977913" target="_blank">
              <span className="phone">+961 81 977 913</span>
            </Link>
            <Link to="https://wa.me/16198371807" target="_blank">
              <span className="phone">+1 (619) 873-1807</span>
            </Link>
            <Link to="mailto:support@devoops.info" target="_blank">
              <span className="email">support@devoops.info</span>
            </Link>
          </div>
          <div className="footer-links">
            <p className="font-bold text-gray-500 ">Links</p>
            <div className="links">
              {data.footer_links.map((item, index) => (
                <FooterLink key={index} text={item.text} link={item.link} />
              ))}
            </div>
          </div>
          <div className="footer-socials">
            <p className="font-bold text-gray-500 ">Follow us</p>
            <div className="links">
              {data.footer_socials.map((item, index) => (
                <FooterLink
                  key={index}
                  text={item.text}
                  link={item.link}
                  icon={item.icon}
                />
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
  );
}
