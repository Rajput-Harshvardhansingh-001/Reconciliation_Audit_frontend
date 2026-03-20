import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
const SignIn = () => {

  const navigate = useNavigate();

  // const handleRedirectToHomePage = () =>{
  //   toHomePage("/");
  // }

  const [endUserObj, setEndUserObj] = useState({
    username: "",
    password: "",
  });

  const getSigninFormData = (event, key) => {
    setEndUserObj((obj) => ({ ...obj, [key]: event.target.value }))
  }

  const getSigninCall = async () => {
    try {
      const EndUserData = await axios.post("http://localhost:8080/auth/signin", endUserObj, { withCredentials: true });
      if (EndUserData.status === 200) {
        alert("SignIn Successfully!");
        navigate("/");

      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Incorrect Credentials!");
      } else {
        console.log(error.message);
      }
    }
  }

  return (
    <div className="bg-background-light font-display">
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-4">
                <span className="material-symbols-outlined text-3xl">
                  account_balance
                </span>
              </div>
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-1">
                  R2R Suite
                </span>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">
                  Smart Reconciliation &amp; Audit System
                </h1>
                <p className="text-slate-500 text-sm mt-2">
                  Enterprise-grade financial compliance
                </p>
              </div>
            </div>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault(); //stop reload
              getSigninCall();
            }}>
              <div>
                <label
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                  htmlFor="username"
                >
                  User Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    mail
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900"
                    id="username"
                    name="username"
                    placeholder="John Duo"
                    required
                    type="text"
                    onChange={(event) => { getSigninFormData(event, 'username'); }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    className="block text-sm font-semibold text-slate-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    lock
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-slate-900"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                    onChange={(event) => { getSigninFormData(event, 'password'); }}
                  />
                </div>
              </div>
              <button
                className="w-full bg-primary hover:bg-blue-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-4">
              <a
                className="text-sm font-medium text-primary hover:underline transition-all"
                href="#"
              >
                Forgot Password?
              </a>
              <div className="text-sm text-slate-500">
                Don&#39;t have an account?
                <a
                  className="font-semibold text-primary hover:underline ml-1"
                  href="/signup"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-6 opacity-60">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Secure 256-bit Encryption
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="material-symbols-outlined text-sm">gavel</span>
            Compliance Certified
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
