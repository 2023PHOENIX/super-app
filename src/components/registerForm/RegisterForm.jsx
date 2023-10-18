import { useState } from "react";
import "./registerForm.css";
import { useEffect } from "react";
const RegisterForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    permissions: false,
  });
  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    permissions: "",
  });

  const validateCheck = () => {
    const newErr = {
      name: "",
      username: "",
      email: "",
      phone: "",
      permissions: "",
    };

    if (userInfo.name === "") {
      newErr.name = "Feild is required";
    }
    if (userInfo.username === "") {
      newErr.username = "Feild is required";
    }
    if (userInfo.email === "") {
      newErr.email = "Feild is required";
    }
    if (userInfo.phone === "") {
      newErr.phone = "Feild is required";
    }
    if (userInfo.permissions === false) {
      newErr.permissions = "Check this box if you want to proceed";
    }
    setError(newErr);
    return newErr;
  };

  const handleInputChange = (e) => {
    // console.log(e.target.name,e.target.value)
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setUserInfo({ ...userInfo, [name]: checked });
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };
  const handleSubmit = () => {
    validateCheck();
  };
  return (
    <div className="form">
      <div className="title">
        <h1>Super App</h1>
        <p> Create your new account</p>
      </div>
      <div className="form-input">
        <input
          type="text"
          className="input"
          placeholder="Name"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
        />

        {error && error.name && <p className="error-message">{error.name}</p>}
        <input
          type="text"
          className="input"
          placeholder="UserName"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
        />
        {error && error.username && <p className="error-message">{error.username}</p>}
        <input
          type="text"
          className="input"
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        {error?.email && <p className="error-message">{error.email}</p>}
        <input
          type="text"
          className="input"
          placeholder="Mobile"
          name="phone"
          value={userInfo.phone}
          onChange={handleInputChange}
        />
        {error?.phone && <p className="error-message">{error.phone}</p>}

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="permissions"
            checked={userInfo.permissions}
            onChange={handleInputChange}
          />
          <span>Share my registration data with Superapp</span>
          {error?.permissions && <p className="error-message permission-error">{error.permissions}</p>}
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          SIGN UP
        </button>
      </div>
{/* // TODO: Make the boxes red input box */}
      <div className="term-condition">
        <p>
          By clicking on Sign up. you agree to Superapp{" "}
          <span className="special-text">Terms and Conditions of Use </span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp&nbsp;
          <span className="special-text">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
