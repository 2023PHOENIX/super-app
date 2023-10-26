import { useState } from "react";
import "./registerForm.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
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
    return Object.values(newErr).some((x) => x !== "");
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
    const hasError = validateCheck();

    if (hasError) {
      toast.error("Error Please fill it correctly 💀", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      localStorage.setItem("user", JSON.stringify(userInfo));
      toast.info("Your data has been saved !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      toast;
    }
  };
  const hasError = Object.values(error).some((x) => x !== "");
  return (
    <div className={"form " + (hasError ? "error-state-form" : "")}>
      <div className="title">
        <h1>Super App</h1>
        <p>Create your new account</p>
      </div>
      <div
        className={"form-input " + (hasError ? "error-state-input-form" : "")}
      >
        <input
          type="text"
          className={"input " + (error?.name ? "input-feild-error" : "")}
          placeholder="Name"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
        />

        {error && error.name && <p className="error-message">{error.name}</p>}
        <input
          type="text"
          className={"input " + (error?.name ? "input-feild-error" : "")}
          placeholder="UserName"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
        />
        {error && error.username && (
          <p className="error-message">{error.username}</p>
        )}
        <input
          type="text"
          className={"input " + (error?.name ? "input-feild-error" : "")}
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        {error?.email && <p className="error-message">{error.email}</p>}
        <input
          type="text"
          className={"input " + (error?.name ? "input-feild-error" : "")}
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
          {error?.permissions && (
            <p className="error-message permission-error">
              {error.permissions}
            </p>
          )}
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          SIGN UP
        </button>
      </div>
      {/* // TODO: Make the boxes red input box */}
      <div className="term-condition">
        <p>
          By clicking on Sign up. you agree to Superapp{" "}
          <span className="special-text">Terms and Conditions of Use</span>
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
