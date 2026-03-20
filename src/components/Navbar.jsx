import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CallToEndUser } from "../services/Master";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("Please Sign In");

  // Memoised so useEffect dep-array stays stable
  const fetchUser = useCallback(async () => {
    try {
      const data = await CallToEndUser();
      setUserData(data);
    } catch (e) {
      // 401 or network error → redirect to sign-in
      if (!e.response || e.response.status === 401) {
        setUserData("Please Sign In");
      }
    }
  }, [navigate]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/auth/signout",
        {},
        { withCredentials: true } // ⭐ VERY IMPORTANT
      );

      setUserData("Please Sign In"); // clear navbar state
      navigate("/signin"); // redirect

    } catch (error) {
      console.log("Logout failed:", error.message);
    }
  };


  return (
    <div className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 py-3 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-8">
        <Link to={"/"}>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-primary text-white">
              <span className="material-symbols-outlined text-3xl">
                account_balance
              </span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-slate-100 text-sm font-bold leading-tight tracking-tight">
                Smart Reconciliation &amp; Audit
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                R2R Suite
              </span>
            </div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 ml-4">
          <Link
            className="text-slate-600 dark:text-slate-400 text-sm font-semibold hover:text-slate-900 dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-slate-900 pb-1"
            to={"/upload-mapping"}
          >
            Upload
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-400 text-sm font-semibold hover:text-slate-900 dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-slate-900 pb-1"
            to={"/reconciliation"}
          >
            Reconciliation
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-400 text-sm font-semibold hover:text-slate-900 dark:hover:text-white transition-colors border-b-2 border-transparent hover:border-slate-900 pb-1"
            to={"/record-audit"}
          >
            Audit-Logs
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center">
          <label className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-slate-400 text-lg">
              search
            </span>
            <input
              className="h-9 w-56 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-10 pr-4 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
              placeholder="Search..."
              type="text"
            />
          </label>
        </div>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
        <Link to={"/signin"}>
          <div className="flex flex-col items-center min-w-[80px]">
            <div className="relative mb-1">
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-slate-100 dark:border-slate-800 bg-slate-100 shadow-sm">
                <img
                  alt="User Profile"
                  className="h-full w-full object-cover"
                  src="https://img.icons8.com/?size=100&id=98957&format=png&color=228BE6"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-slate-900 bg-green-500"></div>
            </div>
            <div className="flex flex-col items-center">
              {/* Shows real username from API, falls back to "Guest" */}
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-none">
                {userData}
              </span>
              {/* <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter mt-0.5">
              {userData}
            </span> */}
            </div>
          </div>
        </Link>
        {/* Logout — uncomment and wire when auth flow is complete */}
        {userData !== "Please Sign In" && (
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all border border-transparent hover:border-red-100"
            onClick={handleLogout}
          >
            <span className="material-symbols-outlined text-lg">logout</span>
            <span>Logout</span>
          </button>
        )
        }
      </div>
    </div>
  );
};

export default Navbar;
