import { useEffect, useState } from "react";
import "./ServiceReq.css";
import SelectDropdown from "../Select-Dropdown/SelectDropdown";
import emailjs from "emailjs-com";
// import { AsYouType } from "libphonenumber-js";
import { isValidPhoneNumber, formatPhoneNumber } from "@utils/Validations";
import axios from "axios";

export default function ServiceReqForm() {
  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    selectedCountry: "",
    userPhone: "",
    selectedService: "",
  });
  // const [selectedCountry, setSelectedCountry] = useState(null);
  // const [userPhone, setUserPhone] = useState("");

  // const proxyUrl =
  //   "https://api.allorigins.hexocode.repl.co/get?disableCache=true&url=";
  // const targetUrl = encodeURIComponent("https://restcountries.com/v3.1/all");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // const { data } = await axios.get(proxyUrl + targetUrl);
        const { data } = await axios.get("https://restcountries.com/v3.1/all");
        // const data = await res.json();

        const options = data
          .filter(
            (country) =>
              country.name.common !== "Israel" &&
              country.idd?.root &&
              country.idd?.suffixes &&
              country.idd.suffixes.length > 0
          )
          .map((country) => ({
            name: country.cca2,
            code: country.idd.root + country.idd.suffixes[0],
            flag: country.flags.png,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(options);
        setData((prev) => ({
          ...prev,
          selectedCountry: options.find((c) => c.code === "+961"),
        }));
      } catch (err) {
        console.error("Error fetching countries", err);
      }
    };

    fetchCountries();
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCountry = (country) => {
    setData((prev) => ({
      ...prev,
      selectedCountry: country,
    }));
    setIsOpen(false);
    setData((prev) => ({
      ...prev,
      userPhone: "",
    }));
  };

  const handlePhoneChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    const formatted = formatPhoneNumber(
      raw,
      data.selectedCountry?.name || "US"
    );
    setData((prev) => ({
      ...prev,
      userPhone: formatted,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(data.userPhone, data.selectedCountry?.name)) {
      alert("Invalid phone number");
      return;
    }
    const templateParams = {
      user_phone: data.userPhone,
      selected_service: data.selectedService,
    };

    emailjs
      .send(
        "service_4x3z5qk",
        "template_8v7xj5k",
        templateParams,
        "user_0Q2t9m3g1pH1Zl2h2h2h2"
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        alert("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email", error);
        alert("Error sending email");
      });
  };

  return (
    <div className="req-service-Container">
      <form onClick={handleSubmit}>
        <div className="phone-input-container flex gap-4 items-center relative">
          <div className="custom-dropdown" onClick={toggleDropdown}>
            {data.selectedCountry && (
              <div className="selected-option w-[170px] bg-white flex items-center gap-4 cursor-pointer duration-300 hover:bg-[#f5f5f5] py-1 px-2 rounded">
                <img
                  src={data.selectedCountry.flag}
                  alt={data.selectedCountry.name}
                  width={20}
                />
                <span>
                  {data.selectedCountry.name} ({data.selectedCountry.code})
                </span>
              </div>
            )}
            {isOpen && (
              <div className="dropdown-menu absolute z-20 bg-white border max-h-60 overflow-y-auto w-full shadow">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="dropdown-item flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200"
                    onClick={() => selectCountry(country)}
                  >
                    <img src={country.flag} alt={country.name} width={20} />
                    <span>
                      {country.name} ({country.code})
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Enter your phone number"
            value={data.userPhone}
            onChange={handlePhoneChange}
            className="number-input"
          />
        </div>

        <SelectDropdown Data={data.selectedService} setData={setData} />

        <div className="btn-container flex w-full align-center justify-center py-2">
          <button className="btn" type="submit">
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}
