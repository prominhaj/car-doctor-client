import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/Auth_Context";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn, githubSingUp, googleSingUp } = useContext(UserContext);
  const navigate = useNavigate();

  // Location
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Toast
  const error = (error) => toast.error(error);

  const handleSingIn = (event) => {
    const loading = toast.loading("Loading...");
    () => loading;

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Auth
    logIn(email, password)
      .then(() => {
        toast.dismiss(loading);
        Swal.fire({
          title: "Login SuccessFull",
          text: "You clicked the button!",
          icon: "success",
        });
        navigate(from, {replace: true})
        
      })
      .catch((e) => {
        toast.dismiss(loading);
        error(e.message.substr(10));
      });
  };

  const handleGithubAuth = () => {
    const loading = toast.loading("Loading...");
    () => loading;

    githubSingUp()
      .then(() => {
        toast.dismiss(loading);
        Swal.fire({
          title: "Login SuccessFull",
          text: "You clicked the button!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.dismiss(loading);
        error(e.message.substr(10));
      });
  };

  const handleGoogleAuth = () => {
    const loading = toast.loading("Loading...");
    () => loading;

    googleSingUp()
      .then(() => {
        toast.dismiss(loading);
        Swal.fire({
          title: "Login SuccessFull",
          text: "You clicked the button!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.dismiss(loading);
        error(e.message.substr(10));
      });
  };

  return (
    <div className="container mx-auto grid gap-10 lg:grid-cols-2  items-center py-10 px-5">
      <div className="hidden lg:block">
        <img className="block" src={loginImg} alt="" />
      </div>
      <div className="rounded-[10px] py-[50px] px-[30px] sm:px-[80px] border border-stone-300">
        <form onSubmit={handleSingIn}>
          <h2 className="text-center text-neutral-700 text-[40px] font-semibold font-['Inter']">
            Login
          </h2>
          <div className="flex flex-col gap-7 mt-6">
            <div className="flex flex-col gap-2">
              <label
                className="text-neutral-700 text-lg font-semibold font-['Inter']"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-white px-3 py-2 text-lg text-gray-800 outline-none rounded border border-gray-200"
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-neutral-700 text-lg font-semibold font-['Inter']"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="bg-white px-3 py-2 text-lg text-gray-800 outline-none rounded border border-gray-200"
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
              />
            </div>
            <button
              type="submit"
              className="text-center py-3 mt-2 bg-[#FF3811] btn rounded-[10px] text-white text-xl font-medium font-['Inter'] leading-none border-none"
            >
              Sign In
            </button>
          </div>
          <div className="pt-8 flex flex-col gap-5">
            <p className="text-center text-neutral-700 text-lg font-medium font-['Inter']">
              Or Sign In with
            </p>
            <div className="flex justify-center gap-7">
              <button
                onClick={handleGithubAuth}
                className="w-[55px] h-[55px] group/item btn border-none flex justify-center items-center bg-neutral-100 rounded-full"
                type="button"
              >
                <FaGithub className="text-black w-full h-full group-hover/item:text-white" />
              </button>
              <button
                onClick={handleGoogleAuth}
                className="w-[55px] h-[55px] group/item btn border-none flex justify-center items-center bg-neutral-100 rounded-full"
                type="button"
              >
                <FcGoogle className=" w-full h-full group-hover/item:text-white" />
              </button>
            </div>
            <p className="text-center text-neutral-500 text-lg font-normal font-['Inter']">
              Have an account?{" "}
              <Link
                className="text-orange-600 text-lg font-semibold font-['Inter']"
                to="/register"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
