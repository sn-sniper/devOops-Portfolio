import { useState } from "react";
import "./ServiceReq.css";
import SelectDropdown from "../Select-Dropdown/SelectDropdown";
import {
  selectCountry,
  handleDataChange,
  handlePhoneChange,
  handleSubmit,
} from "@handlers/ReqFormActionsHandles.jsx";
// import axios from "axios";
import countries from "@assets/json/countries.json";

export default function ServiceReqForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    selectedCountry: "",
    userPhone: "",
    selectedService: "",
  });

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const { data } = await axios.get("https://restcountries.com/v3.1/all");

  //       const options = data
  //         .filter(
  //           (country) =>
  //             country.name.common !== "Israel" &&
  //             country.idd?.root &&
  //             country.idd?.suffixes &&
  //             country.idd.suffixes.length > 0
  //         )
  //         .map((country) => ({
  //           name: country.cca2,
  //           code: country.idd.root + country.idd.suffixes[0],
  //           flag: country.flags.png,
  //         }))
  //         .sort((a, b) => a.name.localeCompare(b.name));

  //       setCountries(options);
  //       setData((prev) => ({
  //         ...prev,
  //         selectedCountry: options.find((c) => c.code === "+961"),
  //       }));
  //     } catch (err) {
  //       console.error("Error fetching countries", err);
  //     }
  //   };

  //   fetchCountries();
  // }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="req-service-Container">
      <form
        onSubmit={(e) => {
          handleSubmit(e, data);
        }}
      >
        <div className="phone-input-container flex gap-4 items-center relative flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={data.title}
            onChange={(e) => {
              handleDataChange(e, setData);
            }}
            className="title-input"
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            value={data.first_name}
            onChange={(e) => {
              handleDataChange(e, setData);
            }}
            className="first_name-input"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={data.last_name}
            onChange={(e) => {
              handleDataChange(e, setData);
            }}
            className="last_name-input"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => {
              handleDataChange(e, setData);
            }}
            className="email-input"
          />
          <div className="flex items-center gap-2 relative w-full">
            <div className="custom-dropdown" onClick={toggleDropdown}>
              <div className="selected-option w-[110px] bg-white flex items-center gap-4 cursor-pointer duration-300 hover:bg-[#f5f5f5] py-1 px-2 rounded">
                {selectCountry && (
                  <img
                    src={data.selectedCountry.flag}
                    alt={data.selectedCountry.name}
                    width={20}
                  />
                )}
                <span>{data.selectedCountry.code || "+ -"}</span>
              </div>

              {isOpen && (
                <div className="dropdown-menu absolute z-20 bg-white border max-h-60 overflow-y-auto w-full shadow">
                  {countries.countries.map((country, index) => (
                    <div
                      key={index}
                      className="dropdown-item flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200"
                      onClick={() => selectCountry(country, setData, setIsOpen)}
                    >
                      <img src={country.flag} alt={country.name} width={20} />
                      <span>({country.code})</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              placeholder="Enter your phone number"
              value={data.userPhone}
              onChange={(e) => {
                handlePhoneChange(e, data, setData);
              }}
              className="number-input"
              disabled={!data.selectedCountry.code}
            />
          </div>
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
