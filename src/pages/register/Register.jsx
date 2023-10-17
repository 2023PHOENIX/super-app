import "./register.css"
import Disco from "../../assets/disco.png";
import RegisterForm from "../../components/registerForm/RegisterForm";
const Register = () => {


    return <div className='register-page'>
        <div className="left-side">
                
            {/* <img src={Disco} alt='img' /> */}
             <p className="quote">Discover new things on Superapp</p>
        </div>
        <section className="right-side">
            <RegisterForm/>
        </section>
    </div> 
}


export default Register;