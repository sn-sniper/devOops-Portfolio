import { useState } from "react";
import "./ServiceReq.css";
import SelectDropdown from "../Select-Dropdown/SelectDropdown";

export default function ServiceReqForm() {
  const [userPhone, setUserPhone] = useState("");
  // const [selectedService, setSelectedService] = useState("");

  return (
    <div className="req-service-Container">
      <form>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
        {/* <select
          type="text"
          placeholder="Name"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="UI/UX">UI/UX</option>
          <option value="Website">Website</option>
          <option value="Mobile App">Mobile App</option>
          <option value="System">Software</option>
          <option value="Other">Other</option>
        </select>  */}
        <SelectDropdown />
        <div className="btn-container flex w-full align-center justify-center py-2">
          <button className="btn" type="submit"><span>Submit</span></button>
        </div>
      </form>
    </div>
  );
}
