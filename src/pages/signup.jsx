import Colors from "../styles/colors";
import loginImg from "../assets/signup.jpg";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setError('This is how errors will be shown');
    console.log("FROM LOGIN PAGE", email, password);
  }
  return (
    <>
      <div className="flex">
        <div className="w-full flex flex-col ">
          <div className="absolute bg-white/95  lg:w-1/2 w-full p-10">
            <div className="flex justify-between">
              <div>
                Train
                <span className={`${Colors.textAccent}`}>Traverse</span>
              </div>
              <div>
                Already have an account?{" "}
                <span 
                className={`cursor-pointer ${Colors.textAccent}`}
                onClick={()=>{navigate('/')}}>
                  Log in
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-screen w-full">
            <div className="lg:w-[500px] sm:w-[600px]">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="text-2xl font-bold">Sign up</div>
                  <div className={`${Colors.textGray} pb-2`}>
                    Enter your details and sign up to use the application
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  {error ? <div className="text-red-500 font-bold"> {error} </div> : ""}
                </div>
                <button
                  type="submit"
                  className={` ${Colors.primaryBtn} flex pl-8 items-center text-white focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
                >
                  Signup <ChevronRight />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:block h-screen">
          <img
            src={loginImg}
            alt="Signup image"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Signup;
