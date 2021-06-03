import React from 'react'
import "./form-section.css";
import { useState } from "react";
import { Section } from "./components/Section";
import { CardList } from "./ui/CardList";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "8800"
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    name: false,
    lastName: false,
    phone: false
  });
  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  };
  const isValidData = ({ name, lastName, phone }) => {
    if (name === "Павел" && lastName === "Петров" && phone === "84951234567") {
      return true;
    }
    if (!(name === "Павел")) {
      setError((prevState) => {
        return {
          ...prevState,
          name: "Имя введено не верно"
        };
      });
    }

    if (!(lastName === "Петров")) {
      setError((prevState) => {
        return {
          ...prevState,
          secondName: "Фамилия введена не верно"
        };
      });
    }
    if (!(phone === "84951234567")) {
      setError((prevState) => {
        return {
          ...prevState,
          phone: "телефон введен неверно"
        };
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidData(formData)) {
      localStorage.setItem("isLoggedIn", "true");
      setSuccess(true);
      setError({
        name: false,
        lastName: false,
        phone: false
      });
    } else {
      setSuccess(false);
    }
  };
  return (
    <form className="form" id="login-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form__input-wrapper">
        {error.name && <span style={{ color: "red" }}>{error.name}</span>}
        <input
          value={formData.name}
          name="name"
          placeholder="Name"
          className="form__input"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="form__input-wrapper">
        {error.secondName && (
          <span style={{ color: "red" }}>{error.secondName}</span>
        )}

        <input
          value={formData.lastName}
          placeholder="Last Name"
          name="lastName"
          className="form__input"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="form__input-wrapper">
        {error.phone && <span style={{ color: "red" }}>{error.phone}</span>}

        <input
          value={formData.phone}
          name="phone"
          placeholder="Phone"
          className="form__input"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      {success && (
        <div className="form__input-wrapper form__input-wrapper--success">
          Успешно отправлены данные
        </div>
      )}
      <div className="form__btn-wrapper ">
        <button className="form__btn m-form__btn">Submit</button>
      </div>
    </form>
  );
};
export const FormSection = () => {
  return (
    <Section className="form-section-container">
      <div className="form-section m-form-section">
        <Form />
      </div>
      <div className="form-section-container__ui-container m-form-section-container__ui-container">
        <CardList />
      </div>
    </Section>
  );
};
