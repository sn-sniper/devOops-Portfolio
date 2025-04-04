import { useState } from "react";
import "./ServiceReq.css";

export default function ServiceReqForm() {
  const [userPhone, setUserPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="req-service-Container">
      <form>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
        <select
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
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
