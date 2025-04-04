import "@styles/Services.css";
import data from "@assets/data.json";
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
