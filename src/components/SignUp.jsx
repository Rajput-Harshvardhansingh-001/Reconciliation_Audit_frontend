import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
const SignUp = () => {

  const navigate = useNavigate();

  const toSignInPage = () => {
    navigate("/signin");
  }

  const [endUserObj, setEndUserObj] = useState({
    username: "",
    email: "",
    password: "",
  });

  const getSignupFormData = (event, key) => {
    setEndUserObj((obj) => ({ ...obj, [key]: event.target.value }))
  }

  const getSignupCall = async () => {
    try {
      const EndUserData = await axios.post("http://localhost:8080/signup/up", endUserObj);
      if (EndUserData.status === 202) {
        alert("You have been registered");
        window.location.href = "/signin";
        // toSignInPage();
      }
      else {
        alert("You have not been registered");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="bg-[#f8fafc] font-display min-h-screen flex flex-col">

      <main className="flex-1 flex items-center justify-center p-6 bg-slate-50">
        <div className="w-full max-w-[480px]">
          <div className="bg-white border border-slate-200 shadow-xl rounded-lg overflow-hidden">
            <div className="px-8 pt-8 pb-6 text-center">
              <h2 className="text-2xl font-bold text-slate-900">
                Create System Account
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Access the Record-to-Report Reconciliation Environment
              </p>
            </div>
            <form className="px-8 pb-8 space-y-4" >
              <div>
                <label
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                  className="w-full h-10 px-3 text-sm border border-slate-300 rounded focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-white transition-all"
                  id="full-name"
                  name="full-name"
                  value={endUserObj.username}
                  placeholder="John D. Doe"
                  type="text"
                  onChange={(event) => { getSignupFormData(event, 'username'); }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  htmlFor="work-email"
                >
                  Work Email Address
                </label>
                <input
                  className="w-full h-10 px-3 text-sm border border-slate-300 rounded focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-white transition-all"
                  id="work-email"
                  name="work-email"
                  placeholder="name@organization.com"
                  type="email"
                  value={endUserObj.email}
                  onChange={(event) => { getSignupFormData(event, 'email'); }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full h-10 px-3 text-sm border border-slate-300 rounded focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-white transition-all"
                    id="password"
                    name="password"
                    type="password"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    htmlFor="confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="w-full h-10 px-3 text-sm border border-slate-300 rounded focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-white transition-all"
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    value={endUserObj.password}
                    onChange={(event) => { getSignupFormData(event, 'password'); }}
                  />
                </div>
              </div>
              <div className="flex items-start gap-3 py-2">
                <div className="flex items-center h-5">
                  <input
                    className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
                    id="terms"
                    name="terms"
                    type="checkbox"
                  />
                </div>
                <label className="text-xs text-slate-600 leading-tight" htmlFor="terms">
                  I agree to the{" "}
                  <a
                    className="text-brand-blue font-semibold hover:underline"
                    href="#"
                  >
                    Terms of Service
                  </a>{" "}
                  and acknowledge the{" "}
                  <a
                    className="text-brand-blue font-semibold hover:underline"
                    href="#"
                  >
                    Data Confidentiality Agreement
                  </a>{" "}
                  for financial audit access.
                </label>
              </div>
              <button
                className="w-full h-11 bg-[#0f172a] hover:bg-slate-800 text-white font-semibold rounded text-sm transition-colors flex items-center justify-center gap-2 mt-2"
                type="submit"
                onClick={getSignupCall}
              >
                Create Account
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </form>
            <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-600">
                Already have an account?
                <a className="text-brand-blue font-bold hover:underline" href="/signin">
                  Sign In
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex items-center gap-4 grayscale opacity-60">
              <span className="text-[10px] font-bold text-slate-400 border border-slate-300 px-2 py-0.5 rounded">
                SOC2 TYPE II
              </span>
              <span className="text-[10px] font-bold text-slate-400 border border-slate-300 px-2 py-0.5 rounded">
                GDPR COMPLIANT
              </span>
              <span className="text-[10px] font-bold text-slate-400 border border-slate-300 px-2 py-0.5 rounded">
                ISO 27001
              </span>
            </div>
            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              Security Notice: This system is for authorized personnel only. All
              actions are logged and monitored for audit compliance purposes.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
          © 2026 R2R Suite Global Operations
        </p>
        <div className="flex gap-4">
          <a
            className="text-[10px] text-slate-500 hover:text-slate-900 font-semibold uppercase tracking-widest"
            href="#"
          >
            Support
          </a>
          <a
            className="text-[10px] text-slate-500 hover:text-slate-900 font-semibold uppercase tracking-widest"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-[10px] text-slate-500 hover:text-slate-900 font-semibold uppercase tracking-widest"
            href="#"
          >
            Documentation
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
