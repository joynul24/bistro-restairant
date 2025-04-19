import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "./Login.css";
import loginBanner from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";

const Login = () => {

    const captchaRef = useRef(null)
    const [disablet, setDisablet] = useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleGoogleSignIn = ()=> {
        console.log('google login');
    }

    const handleLogin = event => {
     event.preventDefault()
     console.log('login suss');
    }

    const handleValidateCaptcha = ()=> {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
           setDisablet(false)
        }else{
            setDisablet(true)
        }
    }

  return (
    <div className="login-page flex flex-col md:flex-row justify-between items-center font-i">
        {/* login img */}
        <div>
            <img className=" md:w-[400px] lg:w-[500px]" src={loginBanner} alt="" />
        </div>
        {/* login form */}
      <div className="card-body">
        <h1 className="text-xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-2">

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="rounded-full w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Your password"
              className="rounded-full w-full input input-bordered"
              required
            />
          </div>
          {/* Captcha */}
          <div className="form-control">
            <label className="label">
              <span className="label-text my-3">
              <LoadCanvasTemplate />
              </span>
            </label>
            <input
              ref={captchaRef}
              name="captcha"
              type="text"
              placeholder="Type here"
              className="rounded-full w-full input input-bordered"
            />
          </div>
          <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs w-full mt-2 hover:bg-black hover:text-white border-gray-300">Validate</button>
          <div className="form-control mt-3">
            <button disabled={disablet} className="rounded-full btn btn-primary w-full bg-[#D1A054B3] border-0 text-white">
              Login
            </button>
          </div>
          <p className="font-semibold text-center text-[#D1A054B3]">
            New to this website? please?{" "}
            <Link className="text-red-400" to="/register">
              Register
            </Link>
            .
          </p>
        </form>
        <h2 className="text-center mt-5 md:text-xl font-bold">Or Sign In With</h2>
        <div className="flex justify-center gap-5">
            {/* Google */}
        <button
            onClick={handleGoogleSignIn}
            className="border-gray-300 rounded-full btn mt-5 text-blue-500 border"
          >
            <FcGoogle></FcGoogle>
          </button>
          {/* Facebook */}
          <button
            className="border-gray-300 rounded-full btn mt-5 text-blue-500 border"
          >
            <SiFacebook />
          </button>
          {/* Github */}
          <button
            className="border-gray-300 rounded-full btn mt-5 border"
          >
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
