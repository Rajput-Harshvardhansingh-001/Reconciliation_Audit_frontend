import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CallToEndUser } from "../services/Master";
import axios from "axios";

const HomePage = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState("Please Sign In");

  const fetchUserData = useCallback(async () => {
    try {
      const data = await CallToEndUser();
      setUserData(data);
    } catch (e) {
      if (!e.response || e.response.status === 401) {
        // Not authenticated — stay on landing page, just show guest state
        setUserData("Please Sign In");
      }
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

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

    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">
                  account_balance
                </span>
                <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight">
                  Smart Reconciliation & Audit
                </h2>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                  to={"/dashboard"}>
                  Dashboard
                </Link>

                <Link
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                  to={"/upload-mapping"}
                >
                  Uploads
                </Link>

                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                  to={"/reconciliation"}>
                  Reconciliation
                </Link>

                <Link className="text-slate-600 dark:text-slate-400 hover:text-primary          dark:hover:text-primary text-sm font-medium transition-colors"
                  to={"/record-audit"}>
                  Audits
                </Link>


              </nav>
            </div>
            <div className="flex items-center gap-4">
              {/* <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-slate-400 text-sm">
                  search
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-400"
                  placeholder="Search system..."
                  type="text"
                />
              </div> */}
              <Link className="bg-primary text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm"
                to={"/signup"}>
                Get Started
              </Link>
              <Link to={"/signin"}>
                <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col items-end hidden sm:block">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      {userData}
                    </span>
                    {/* <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                      Admin
                    </span> */}
                  </div>
                  <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 overflow-hidden">
                    <img
                      alt="User Profile"
                      className="size-full object-cover"
                      src="https://img.icons8.com/?size=100&id=98957&format=png&color=228BE6"
                    />
                  </div>
                </div>
              </Link>
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
        </div>
      </header>
      <main>
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    New: AI Discrepancy Engine
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <h1 className="text-slate-900 dark:text-slate-100 text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                    Precision in Every{" "}
                    <span className="text-primary">Transaction</span>
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl leading-relaxed max-w-xl">
                    Enterprise-grade R2R financial reconciliation and audit
                    system. Automate your complex financial workflows with
                    99.9% accuracy and total compliance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link className="bg-primary text-white px-8 py-4 rounded-xl text-base font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/25 flex items-center gap-2"
                    to={"/signin"}>
                    Get Started{" "}
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </Link>
                  <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>{" "}
                    Watch Demo
                  </button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-3">
                    <img
                      alt="User"
                      className="size-10 rounded-full border-2 border-white dark:border-slate-900"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU-ge0O2gPWzCnsg9MHIoFSyzH6eC2HDFuhhHcX0nsPTSo7ZVj9ISeaWKj-z_BGwRFGR3fFFIlJpsNg9j9qTOL6dUFldcNELCwYSH5f-mQQky2JCvcHhv3bmDX0bHzqJvQD8oAd_gRm_aCFNNJ_CuFLKxTeLcVj7zC1_cIkhp3dbFpTrDJ8arwcz4UP3kfsqfMMiwP7GfwHMXVD_h3bt1jZyo-8F1Bog6SGCt5c6MG2SwT2UMiy1jYE2VZKtb6I9IL_zlq8EfqwAM"
                    />
                    <img
                      alt="User"
                      className="size-10 rounded-full border-2 border-white dark:border-slate-900"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBogPizf8Mu_q95kaAqp3QYv_NNE_91BWItiSen2ZPxcZi9xgMbm6bsJ-YgaxP8CYjOZqDcT5P0MN4NpfGrXV0-1ES7uA89DQwoyIVBZ67_nSuxEy5onafnGcqXVHinRLkVobZwy_H-yM73R3w56Gxqm-nrIRcslWdt6-hRlQcHRJu1YHb370zQ8j5plr_OWaGhTKnsnE9lZRSehIgZD0r3EWXHXMuk91fNJZ0k0M5LUDuHwKPLCLr65_ocBBGq9OsmYpKO4rkV6uE"
                    />
                    <img
                      alt="User"
                      className="size-10 rounded-full border-2 border-white dark:border-slate-900"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCucBdwK89-AHFwhGtXXi8os-z12Ob3nSbDcJPzeXvr6BQFUeZ5EPtaadaTOgY6iT-j4Kfo_Ffn3-e61sTmsJZYAMv-xSIioeA3mbNmsu_WfQEe_6wnXTSVTafVEbSqm8c65P7XoYOTbgMWmONFf9g62Fn_pUFd-KSCmtUj_-bGz4tJ1-TjR6KlJUfTjsP3WAZ9LHx0JQreU3H5d5ge8OWSsIS7zu_F5gD4mff1ZQp1lqqQ3Eaj7Ndt6-2QhN9OtYNhocS2l_nVWeM"
                    />
                  </div>
                  <p className="text-sm text-slate-500 font-medium">
                    Trusted by 500+ global enterprises
                  </p>
                </div>
              </div>
              <div className="relative flex items-center justify-center py-10">
                <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 to-blue-400/10 rounded-full blur-[100px] opacity-40"></div>
                <div className="relative z-20 w-full glass-panel rounded-3xl p-6 border border-white/40 shadow-2xl transform rotate-1 -translate-y-4">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="h-2 w-32 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-white/20">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-sm">
                              receipt_long
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-bold">TXN-90281-B</p>
                            <p className="text-[10px] text-slate-500">
                              Internal Ledger
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-bold">$12,450.00</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-500/20 rounded-lg">
                            <span className="material-symbols-outlined text-green-600 text-sm">
                              check_circle
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-green-700 dark:text-green-400">
                              Match Found
                            </p>
                            <p className="text-[10px] text-green-600/70">
                              Verified with Bank Statement
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-green-700 dark:text-green-400">
                          $12,450.00
                        </span>
                      </div>
                    </div>
                    <div className="h-32 w-full flex items-end gap-2 px-2 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                      <div className="w-full bg-primary/20 h-1/2 rounded-t-sm"></div>
                      <div className="w-full bg-primary/40 h-2/3 rounded-t-sm"></div>
                      <div className="w-full bg-primary/60 h-3/4 rounded-t-sm"></div>
                      <div className="w-full bg-primary h-full rounded-t-sm"></div>
                      <div className="w-full bg-primary/80 h-4/5 rounded-t-sm"></div>
                      <div className="w-full bg-primary/50 h-3/5 rounded-t-sm"></div>
                      <div className="w-full bg-primary/30 h-1/2 rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 z-30 transform translate-x-8 -translate-y-8 glass-panel p-4 rounded-2xl w-40 shadow-xl border border-white/50 rotate-3">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-2">
                    Reconciliation
                  </p>
                  <p className="text-2xl font-black text-primary">99.9%</p>
                  <div className="h-1 w-full bg-slate-100 dark:bg-slate-700 rounded-full mt-2">
                    <div className="h-full w-[99%] bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 z-10 transform -translate-x-12 translate-y-8 glass-panel p-5 rounded-2xl w-48 shadow-xl border border-white/50 -rotate-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-orange-500 text-lg">
                      warning
                    </span>
                    <span className="text-xs font-bold">2 Discrepancies</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="h-1.5 w-2/3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
                Streamlined Workflow
              </h2>
              <h3 className="text-slate-900 dark:text-slate-100 text-4xl font-black mb-6 tracking-tight">
                How it Works
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                A powerful three-step process designed to eliminate human
                error and accelerate your record-to-report cycle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-12 z-0"></div>
              <div className="relative z-10 flex flex-col items-center text-center group">
                <Link className="size-24 rounded-3xl bg-primary text-white flex items-center justify-center mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-300"
                  to={"/upload-mapping"}>
                  <span className="material-symbols-outlined text-4xl">
                    cloud_upload
                  </span>
                </Link>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  1. Upload
                </h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-[280px]">
                  Securely ingest financial data from multiple ERPs, banks,
                  and gateways via API or SFTP.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center group">
                <Link className="size-24 rounded-3xl bg-primary text-white flex items-center justify-center mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-300"
                  to={"/reconciliation"}>
                  <span className="material-symbols-outlined text-4xl">
                    dynamic_feed
                  </span>
                </Link>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  2. Reconcile
                </h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-[280px]">
                  AI-driven matching engine automatically flags discrepancies
                  and suggests resolutions in real-time.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-center text-center group">
                <Link className="size-24 rounded-3xl bg-primary text-white flex items-center justify-center mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform duration-300"
                  to={"/record-audit"}>
                  <span className="material-symbols-outlined text-4xl">
                    verified_user
                  </span>
                </Link>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                  3. Audit
                </h4>
                <p className="text-slate-600 dark:text-slate-400 max-w-[280px]">
                  Generate immutable audit trails and compliance reports
                  (SOC2, GDPR) with a single click.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <h3 className="text-slate-900 dark:text-slate-100 text-3xl lg:text-4xl font-black tracking-tight mb-4">
                  Enterprise-Grade Capabilities
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  Designed for scale, security, and precision in the most
                  demanding financial environments.
                </p>
              </div>
              <button className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
                View All Features{" "}
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group">
                <div className="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">
                    update
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Real-time R2R
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Monitor your financial health second-by-second. Close books
                  60% faster with continuous reconciliation.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group">
                <div className="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">
                    fact_check
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Audit Ready
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Full traceability for internal and external requirements.
                  Never fear an audit request again with instant history
                  exports.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group">
                <div className="size-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary">
                    lock
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Data Integrity
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  End-to-end AES-256 encryption. We maintain the highest
                  standards of financial data security and privacy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-3xl font-bold">
                  account_balance
                </span>
                <h2 className="text-xl font-bold tracking-tight">
                  Smart Reconciliation & Audit
                </h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                The world's most trusted reconciliation platform for
                high-volume enterprise financial operations. Built for
                precision, scale, and uncompromising security.
              </p>
              <div className="flex items-center gap-4">
                <a
                  className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                  href="#"
                >
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.477 14.634c-.234-.117-1.384-.683-1.598-.762-.214-.077-.37-.117-.527.117-.156.234-.604.762-.74.918-.137.156-.273.175-.507.058-.234-.117-.987-.364-1.88-1.16-.693-.618-1.162-1.382-1.298-1.616-.137-.234-.015-.361.102-.477.106-.105.234-.273.35-.41.117-.137.156-.234.234-.39.078-.156.039-.293-.019-.41-.059-.117-.527-1.27-.722-1.737-.19-.457-.38-.395-.527-.402-.136-.007-.292-.007-.448-.007-.156 0-.41.059-.624.293-.214.234-.819.8-.819 1.954 0 1.153.84 2.266.956 2.422.117.156 1.653 2.522 4.004 3.539.559.242.996.387 1.337.495.56.177 1.07.152 1.472.092.449-.066 1.384-.566 1.579-1.113.195-.547.195-1.015.137-1.113-.058-.098-.214-.156-.448-.273zM12 2C6.48 2 2 6.48 2 12c0 1.83.493 3.543 1.353 5.02L2.05 22l5.075-1.33A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.63 0-3.15-.43-4.47-1.19l-.32-.18-3.01.79.804-2.93-.2-.31A7.957 7.957 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"></path>
                  </svg>
                </a>
                <a
                  className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                  href="https://github.com/Rajput-Harshvardhansingh-001/"
                >
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </a>
                <a
                  className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                  href="mailto:harsh.vardhan.singh.3669.it@gmail.com"
                >
                  <span className="material-symbols-outlined text-lg">
                    mail
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Product</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Core Platform
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    AI Discrepancies
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Compliance Engine
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-primary transition-colors"
                    href="#"
                  >
                    System Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-500 uppercase tracking-widest">
              © Copyright 2024 SmartRecon Systems Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-green-500">
                  check_circle
                </span>
                <span className="text-xs font-bold text-slate-400">
                  All Systems Operational
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-500">
                <span className="material-symbols-outlined text-sm">
                  language
                </span>
                <span className="text-xs font-bold">English (US)</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default HomePage;
