import "@styles/About.css";
import AOverlay from "./ui/About-Overlay/AOverlay";
import { assets } from "@assets/assets";
import Subheader from "./ui/Subhead/Subheader";
import Btnt from "./ui/btns/btn-t";
import Modal from "./ui/Modal/Modal";
import AboutBox from "./ui/About-box/AboutBox";
import data from "@assets/json/about.json";
import { useState } from "react";
import BookCallReqForm from "./ui/Forms/BookCallReq";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="About-container">
      <div className="left-section">
        <div className="decor-overlay">
          <AOverlay />
          <img src={assets.hx_decor1} className="decor" alt="Decoration" />
        </div>
        <div className="left-content">
          <div className="left-head">
            <Subheader text="who we are" />
            <h1 className="font-semibold">
              Crafting Ideas into
              <br />
              Digital <span className="text-indigo-800">Excellence.</span>
            </h1>
          </div>
          <div className="left-body">
            <h1>
              At DevOops, we specialize in crafting intuitive user experiences
              and delivering high-quality digital solutions. Whether it&apos;s
              designing sleek interfaces, developing robust web applications, or
              building scalable mobile apps, our team ensures every project
              meets the highest standards of creativity and functionality.
            </h1>
            <Btnt
              text="book a call"
              bg={true}
              border={true}
              action={() => setIsModalOpen(true)}
            />
            <Modal
              header="Book a Call"
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <BookCallReqForm />
            </Modal>
          </div>
        </div>
      </div>
      <div className="right-section">
        {data.about.map((item, index) => (
          <AboutBox key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
}
