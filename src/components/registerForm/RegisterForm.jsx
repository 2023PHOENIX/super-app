import "./registerForm.css";

const RegisterForm = () => {
    return (
    <div className="form">
      <div class="title">
        <h1>Super App</h1>
        <p> Create your new account</p>
      </div>
      <div className="form-input">
        <input type="text" className="input" placeholder="Name" />
        <input type="text" className="input" placeholder="UserName" />
        <input type="text" className="input" placeholder="Email" />
        <input type="text" className="input" placeholder="Mobile" />

        <div className="checkbox-container">
          <input type="checkbox" />
          <span>Share my registration data with Superapp</span>
        </div>
        <button className="submit-button">SIGN UP</button>
      </div>

      <div className="term-condition">
        <p>
          By clicking on Sign up. you agree to Superapp <span className='special-text'>Terms and Conditions of
          Use </span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
                    your personal data please head Superapp&nbsp;
                    <span className="special-text">

                     Privacy Policy
                    </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
