import { useState } from "react";
import Btnt from "./ui/btns/btn-t";
import Separator from "./ui/Separator/Separator";
import { HiMenu, HiX } from "react-icons/hi";
import Modal from "./ui/Modal/Modal";
import ServiceReqForm from "./ui/Forms/ServiceReq";
import { svg } from "@assets/assets";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <div className="relative w-screen Navbar-container">
      <h1 className="logo">
        <img src={svg.logo} alt="DevOops" className="w-[200px]"/>
      </h1>
      <div className="flex items-center justify-between w-full nav-content [padding-right:5rem]">
        <ul className="hidden nav-list md:flex">
          <li className="nav-item" data-title="Home">
            <span>Home</span>
          </li>
          <Separator />
          <li className="nav-item" data-title="About">
            <span>About</span>
          </li>
          <Separator />
          <li className="nav-item" data-title="Services">
            <span>Services</span>
          </li>
          <Separator />
          <li className="nav-item" data-title="Contact">
            <span>Contact</span>
          </li>
        </ul>
        <Btnt
          bg={false}
          text="get in touch"
          border={true}
          className="hidden md:block"
          action={() => setIsModalOpen(true)}
        />
        <Modal
          header="Submit Service Request"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <ServiceReqForm />
        </Modal>
      </div>
      <div className="burger md:hidden" onClick={toggleMenu}>
        <HiMenu size={28} />
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen ? "w-64" : "w-0"
        } overflow-hidden z-50`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:text-gray-900"
          >
            <HiX size={28} />
          </button>
        </div>
        <ul className="flex flex-col p-5 space-y-4">
          <li className="nav-item hover:text-indigo-500" data-title="Home">
            <span>Home</span>
          </li>
          <li className="nav-item hover:text-indigo-500" data-title="About">
            <span>About</span>
          </li>
          <li className="nav-item hover:text-indigo-500" data-title="Services">
            <span>Services</span>
          </li>
          <li className="nav-item hover:text-indigo-500" data-title="Contact">
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
