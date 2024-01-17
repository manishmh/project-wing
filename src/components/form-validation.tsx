import { initiatlValueProps } from "./Registeration"

const FormValidation = (registeration: initiatlValueProps) => {
  if (registeration.name === "") {
    return "Name is required";
  } else if (registeration.year === "") {
    return "Year is required";
  } else if (registeration.roll === "") {
    return "Roll is required";
  } else if (registeration.kiitMail === "") {
    return "KIIT Email is required";
  } else if (registeration.domain === "") {
    return "Domain is required";
  } else if (registeration.phone === "") {
    return "Phone is required";
  } else if (registeration.phone.length < 10) {
    return "Invalid Phone Number";
  }
  return null;
};

export default FormValidation 