import "@styles/HContact.css";
import Subheader from "./ui/Subhead/Subheader";
import Btnt from "./ui/btns/btn-t";
export default function HContact() {
  return (
    <div className='HContact-Container'>
      <div className="HContact-content">
        <Subheader text="Connect with us" bg={true} />
        <h1>We are committed to delivering only the best</h1>
        <Btnt text="Get Started" bg={true} border={false} />
      </div>
    </div>
  )
}
