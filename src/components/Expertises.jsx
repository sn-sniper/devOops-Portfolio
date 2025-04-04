import Services from "./Services";
import "@styles/Expertises.css";
import Subheader from "./ui/Subhead/Subheader";
export default function Expertises() {
  return (
    <div className="Expertises-Container">
      <div className="expertises-top">
        <span>
          <Subheader text="Expertises" bg={false} />
        </span>
        <h2>Customized digital solutions</h2>
      </div>
      <Services />
    </div>
  );
}
