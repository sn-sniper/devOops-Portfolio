import emailjs from "emailjs-com";
import { isValidPhoneNumber, formatPhoneNumber } from "@utils/Validations";

emailjs.init(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY);

const emails = {
  bob: import.meta.env.VITE_EMAIL_JS_BOB_MAIL,
  grex: import.meta.env.VITE_EMAIL_JS_GREX_MAIL,
  hassan: import.meta.env.VITE_EMAIL_JS_HASSAN_MAIL,
  jad: import.meta.env.VITE_EMAIL_JS_JAD_MAIL,
};

export const selectCountry = (country, setData, setIsOpen) => {
  setData((prev) => ({
    ...prev,
    selectedCountry: country,
  }));
  setIsOpen(false);
};

export const handleDataChange = (e, setData) => {
  setData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

export const handlePhoneChange = (e, data, setData) => {
  const raw = e.target.value.replace(/\D/g, "");
  const formatted = formatPhoneNumber(raw, data.selectedCountry?.name || "US");
  setData((prev) => ({
    ...prev,
    userPhone: formatted,
  }));
};

export const handleSubmit = (e, data) => {
  e.preventDefault();
  console.log(data);

  if (!isValidPhoneNumber(data.userPhone, data.selectedCountry?.name)) {
    alert("Invalid phone number");
    return;
  }

  let receiverEmail = "";
  let ccEmail = "";

  if (data.selectedService === "Website") {
    // For Website: receivers: bob and hassan; cc: grex and jad.
    receiverEmail = `${emails.bob}, ${emails.hassan}`;
    ccEmail = `${emails.grex}, ${emails.jad}`;
  } else if (data.selectedService === "Mobile App") {
    // For mobile: receivers: grex and jad; cc: bob and hassan.
    receiverEmail = `${emails.grex}, ${emails.jad}`;
    ccEmail = `${emails.bob}, ${emails.hassan}`;
  } else if (data.selectedService === "UI UX") {
    // For UI UX: receiver: hassan; cc: bob, grex, and jad.
    receiverEmail = `${emails.hassan}`;
    ccEmail = `${emails.bob}, ${emails.grex}, ${emails.jad}`;
  } else if (data.selectedService === "Software") {
    // For Software: receivers: bob and grex; cc: jad and hassan.
    receiverEmail = `${emails.bob}, ${emails.grex}`;
    ccEmail = `${emails.jad}, ${emails.hassan}`;
  }

  const templateParams = {
    title: data.title,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone_number: `${data.selectedCountry.code} ${data.userPhone}`,
    service: data.selectedService,
    receiver_email: receiverEmail,
    cc: ccEmail,
  };

  emailjs
    .send(
      import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
      import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
      templateParams
    )
    .then((response) => {
      console.log("Email sent successfully", response);
      // Handle success (e.g., show a notification to the user)
    })
    .catch((error) => {
      console.error("Error sending email", error);
      // Handle error (e.g., display an error message to the user)
    });
};
