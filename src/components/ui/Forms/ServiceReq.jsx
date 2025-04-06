import { useEffect, useState } from "react";
import "./ServiceReq.css";
import SelectDropdown from "../Select-Dropdown/SelectDropdown";
import { AsYouType } from "libphonenumber-js";
import axios from "axios";

export default function ServiceReqForm() {
  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [userPhone, setUserPhone] = useState("");

  const proxyUrl =
    "https://api.allorigins.hexocode.repl.co/get?disableCache=true&url=";
  const targetUrl = encodeURIComponent("https://restcountries.com/v3.1/all");

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
        setSelectedCountry(options.find((c) => c.code === "+961"));
      } catch (err) {
        console.error("Error fetching countries", err);
      }
    };

    fetchCountries();
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setUserPhone("");
  };

  const handlePhoneChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    const formatter = new AsYouType(selectedCountry?.name || "US");
    const formatted = formatter.input(raw);
    setUserPhone(formatted);
  };

  return (
    <div className="req-service-Container">
      <form>
        <div className="phone-input-container flex gap-4 items-center relative">
          <div className="custom-dropdown" onClick={toggleDropdown}>
            {selectedCountry && (
              <div className="selected-option w-[170px] bg-white flex items-center gap-4 cursor-pointer duration-300 hover:bg-[#f5f5f5] py-1 px-2 rounded">
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width={20}
                />
                <span>
                  {selectedCountry.name} ({selectedCountry.code})
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
            value={userPhone}
            onChange={handlePhoneChange}
            className="number-input"
          />
        </div>

        <SelectDropdown />

        <div className="btn-container flex w-full align-center justify-center py-2">
          <button className="btn" type="submit">
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}
