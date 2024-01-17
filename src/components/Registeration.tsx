"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import FormValidation from "./form-validation";

export type initiatlValueProps = {
  name: string;
  year: string;
  roll: string;
  kiitMail: string;
  resume: string;
  personalMail: string;
  github: string;
  phone: string;
  domain: string;
  optPW: boolean;
};

const initialValue = {
  name: "",
  year: "",
  roll: "",
  kiitMail: "",
  resume: "",
  personalMail: "",
  github: "",
  phone: "",
  domain: "",
  optPW: false,
};

const Registeration = () => {
  const [registeration, setRegistration] =
    useState<initiatlValueProps>(initialValue);
  const [errors, setErrors] = useState<string | null>("");
  console.log(registeration);

  const options = [
    "Web Development",
    "App Development",
    "AI / ML",
    "Cloud",
    "Graphic Design",
    "Marketing",
    "Creative",
    "YouTube",
    "Video Editing",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistration((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  function hanldeRadioChange() {
    setRegistration((prevValues) => ({
      ...prevValues,
      optPW: !registeration.optPW,
    }));
  }

  const handleDomainChange = (value: string) => {
    setRegistration((prevValues) => ({
      ...prevValues,
      domain: value,
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors("");
    const formError = FormValidation(registeration);
    setErrors(formError);

    if (formError !== null) {
      return;
    }
    try {
      console.log("Form submission successful:", registeration);
    } catch (error: any) {
      console.error("Validation error:", error);
      setErrors(error.errors[0].message);
    }
  };

  return (
    <div className="flex flex-col gap-5 px-4 md:px-12 lg:px-20">
      <div className="flex gap-9 items-center">
        <div className="h-[1px] w-full bg-black"></div>
        <span className="lg:tracking-[-3px] uppercase font-bold text-2xl md:text-4xl lg:text-5xl bg-recruitment-text bg-clip-text text-transparent">
          Registration
        </span>
        <div className="h-[1px] w-full bg-black"></div>
      </div>
      <h1 className="text-center text-xl">Fill the form carefully</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 py-4">
          <Inputs
            type="text"
            placeholder="Name"
            name="name"
            value={registeration.name}
            onChange={handleInputChange}
          />
          <Inputs
            type="number"
            placeholder="Year"
            name="year"
            value={registeration.year}
            onChange={handleInputChange}
          />
          <Inputs
            type="number"
            placeholder="Roll Number"
            name="roll"
            value={registeration.roll}
            onChange={handleInputChange}
          />
          <div className="grid grid-cols-1 rounded-xl domain-select-wrapper">
            <Select onValueChange={handleDomainChange}>
              <SelectTrigger className="outline-none text-gray-400 text-base">
                <SelectValue placeholder="Domain" />
              </SelectTrigger>
              <SelectContent className="bg-[#EBEBEB]">
                <SelectGroup>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="app">App Development</SelectItem>
                  <SelectItem value="ai/ml">AI/Machine Learning</SelectItem>
                  <SelectItem value="cloud">Cloud Computing</SelectItem>
                  <SelectItem value="ar/vr">AR/VR</SelectItem>
                  <SelectItem value="ui/ux">UI/UX</SelectItem>
                  <SelectItem value="cp/dsa">CP/DSA</SelectItem>
                  <SelectItem value="Content">Content Writing</SelectItem>
                  <SelectItem value="graphic design">Graphic Design</SelectItem>
                  <SelectItem value="broadcasting">
                    Broadcasting YouTube Hosting
                  </SelectItem>
                  <SelectItem value="video editing">Video Editing</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Inputs
            type="gmail"
            placeholder="Kiit Email"
            name="kiitMail"
            value={registeration.kiitMail}
            onChange={handleInputChange}
          />
          <Inputs
            type="text"
            placeholder="Resume Link"
            name="resume"
            value={registeration.resume}
            onChange={handleInputChange}
          />
          <Inputs
            type="gmail"
            placeholder="Personal Email"
            name="personalMail"
            value={registeration.personalMail}
            onChange={handleInputChange}
          />
          <Inputs
            type="text"
            placeholder="Github Link"
            name="github"
            value={registeration.github}
            onChange={handleInputChange}
          />
          <Inputs
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={registeration.phone}
            onChange={handleInputChange}
          />
          <button className="bg-[#54b6e2fa] text-white px-4 py-4 w-full rounded-xl border-none">
            Register
          </button>
          <div>
            {registeration.year == "" ||
              (parseInt(registeration.year) === 1 && (
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={hanldeRadioChange}
                >
                  <input
                    type="radio"
                    name="optPW"
                    checked={registeration.optPW}
                    onChange={hanldeRadioChange}
                  />
                  <span className="capitalize">
                    Do not opt for project wing
                  </span>
                </div>
              ))}
            <span className="text-red-400 text-sm mt-8">{errors}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registeration;

function Inputs({
  type,
  placeholder,
  name,
  value,
  onChange,
}: {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="bg-[#EBEBEB] border-none outline-none px-4 py-4 rounded-xl w-full col-span-1"
    />
  );
}
