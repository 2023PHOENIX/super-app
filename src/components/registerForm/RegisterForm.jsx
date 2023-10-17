import { useState } from "react";
import "./registerForm.css";
const RegisterForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    permissions: false,
  });

  const handleInputChange = (e) => {
    // console.log(e.target.name,e.target.value)
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setUserInfo({ ...userInfo, [name]: checked });
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    
 
  };
  return (
    <div className="form">
      <div className="title">
        <h1>Super App</h1>
        <p> Create your new account</p>
      </div>
      <form className="form-input">
        <input
          type="text"
          className="input"
          placeholder="Name"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="input"
          placeholder="UserName"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Mobile"
          name="phone"
          value={userInfo.phone}
          onChange={handleInputChange}
        />

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="permissions"
            checked={userInfo.permissions}
            onChange={handleInputChange}
          />
          <span>Share my registration data with Superapp</span>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          SIGN UP
        </button>
      </form>

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
