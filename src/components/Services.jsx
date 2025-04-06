import "@styles/Services.css";
import data from "@assets/json/services.json";
import ServiceItem from "./ServiceItem";

export default function Services() {
  return (
    <div className="Services-Container">
      {data.services.map((item, index) => (
        <ServiceItem key={index} item={item} />
      ))}
    </div>
  );
}
