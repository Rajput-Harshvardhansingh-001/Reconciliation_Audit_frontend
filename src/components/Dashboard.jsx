import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-20 lg:w-20 border-r border-slate-800 bg-navy-sidebar flex flex-col items-center py-6 transition-all duration-300">
          <div className="flex flex-col items-center justify-center py-3 text-slate-400 hover:text-white transition-colors group">
            <span className="material-symbols-outlined text-3xl">
              account_balance
            </span>
          </div>
          <nav className="flex-1 w-full space-y-4">
            <Link
              className="flex flex-col items-center justify-center py-3 text-slate-400 hover:text-white transition-colors group"
              to="/dashboard"
              title="Dashboard"
            >
              <span className="material-symbols-outlined text-2xl">
                dashboard
              </span>
              <span className="text-[10px] mt-1 uppercase font-bold tracking-tighter">
                Dash
              </span>
            </Link>
            <Link
              className="flex flex-col items-center justify-center py-3 text-slate-400 hover:text-white transition-colors group"
              to="/reconciliation"
              title="Reconciliations"
            >
              <span className="material-symbols-outlined text-2xl">sync_alt</span>
              <span className="text-[10px] mt-1 uppercase font-bold tracking-tighter">
                Recs
              </span>
            </Link>
            <Link
              className="flex flex-col items-center justify-center py-3 text-slate-400 hover:text-white transition-colors group"
              to="/record-audit"
              title="Audit Trail"
            >
              <span className="material-symbols-outlined text-2xl">history</span>
              <span className="text-[10px] mt-1 uppercase font-bold tracking-tighter">
                Audit
              </span>
            </Link>
            <Link
              className="flex flex-col items-center justify-center py-3 text-slate-400 hover:text-white transition-colors group"
              to="/upload-mapping"
              title="Compliance"
            >
              <span className="material-symbols-outlined text-2xl">
                verified_user
              </span>
              <span className="text-[10px] mt-1 uppercase font-bold tracking-tighter">
                Comp
              </span>
            </Link>
          </nav>
          <div className="mt-auto flex flex-col items-center gap-6">
            <button className="text-slate-400 hover:text-white">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="size-10 bg-slate-700 overflow-hidden border border-slate-600">
              <img
                alt="User Avatar"
                className="w-full h-full object-cover opacity-80 hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArEKUp2p-jV7O9Df-JPoUNky1Sx2kVSBarZm3gf8LMx2RF8Riaes6_TAmPX4EQgbetT8DFx4O6AWX1_WhtvFUdWS9q6vFxDJ3x1bw3ZvinNBp6cjYgS7AeYgoq2R5d_6ygewOVimY64ssH9hhGyd8EQ8OAFyYlJrRD8oIHt_LuuixKZHXqMzsf_qj4KzoS9jRu8O9p_qO5Za8hGgxtAjJnufRz2D1jMl7HaAHE175i1oTQTUifK54klFsLNFDlPdxc39_pJicvatU"
              />
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col overflow-y-auto">
          <header className="h-14 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100">
                Executive Reconciliation Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-xs font-mono text-slate-500 hidden md:block">
                SYSTEM STATUS:{" "}
                <span className="text-emerald-500 font-bold uppercase">
                  Operational
                </span>
              </div>
              <button className="bg-primary text-white px-4 py-1.5 font-bold text-xs uppercase flex items-center gap-2 hover:bg-blue-700 transition-colors">
                <span className="material-symbols-outlined text-sm">
                  upload_file
                </span>
                Execute New Upload
              </button>
            </div>
          </header>
          <div className="p-6 space-y-6">
            <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Date Range
                </span>
                <select className="text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 py-1 pl-2 pr-8 focus:ring-0">
                  <option>Current Fiscal Month</option>
                  <option>Last 7 Days</option>
                  <option>Last Quarter</option>
                  <option>Custom Range...</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Status
                </span>
                <select className="text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 py-1 pl-2 pr-8 focus:ring-0">
                  <option>All Statuses</option>
                  <option>Completed</option>
                  <option>Pending Audit</option>
                  <option>Flagged</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  Uploader
                </span>
                <select className="text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 py-1 pl-2 pr-8 focus:ring-0">
                  <option>All Personnel</option>
                  <option>Sarah Jenkins</option>
                  <option>Mike Ross</option>
                  <option>Alex Chen</option>
                </select>
              </div>
              <div className="ml-auto flex gap-2">
                <button className="p-1.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined text-lg">
                    refresh
                  </span>
                </button>
                <button className="p-1.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined text-lg">
                    download
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-800">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2">
                  Total Records
                </p>
                <h3 className="text-2xl font-bold font-mono">2,481,209</h3>
                <div className="mt-2 text-[10px] text-slate-400">
                  System aggregate
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-800 border-l-4 border-l-emerald-500">
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-wider mb-2">
                  Matched
                </p>
                <h3 className="text-2xl font-bold font-mono">2,410,502</h3>
                <div className="mt-2 text-[10px] text-emerald-600 font-bold italic">
                  Perfect Match
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-800 border-l-4 border-l-orange-500">
                <p className="text-[10px] font-black text-orange-600 uppercase tracking-wider mb-2">
                  Partially Matched
                </p>
                <h3 className="text-2xl font-bold font-mono">52,441</h3>
                <div className="mt-2 text-[10px] text-orange-600 font-bold italic">
                  Rule Threshold
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-800 border-l-4 border-l-red-600">
                <p className="text-[10px] font-black text-red-600 uppercase tracking-wider mb-2">
                  Unmatched
                </p>
                <h3 className="text-2xl font-bold font-mono text-red-600">
                  18,016
                </h3>
                <div className="mt-2 text-[10px] text-red-600 font-bold italic">
                  High Priority
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-800 border-l-4 border-l-purple-600">
                <p className="text-[10px] font-black text-purple-600 uppercase tracking-wider mb-2">
                  Duplicates
                </p>
                <h3 className="text-2xl font-bold font-mono">250</h3>
                <div className="mt-2 text-[10px] text-purple-600 font-bold italic">
                  Audit Flagged
                </div>
              </div>
              <div className="bg-slate-900 dark:bg-primary p-5 border border-slate-800">
                <p className="text-[10px] font-black text-slate-400 dark:text-blue-100 uppercase tracking-wider mb-2">
                  Accuracy %
                </p>
                <h3 className="text-2xl font-black font-mono text-white">
                  99.98%
                </h3>
                <div className="mt-2 text-[10px] text-emerald-400 font-bold">
                  Compliant
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Recent Upload Jobs
                </h4>
                <span className="text-[10px] font-bold text-slate-400">
                  Total 142 Jobs processed this month
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 text-[10px] font-black uppercase tracking-tighter">
                    <tr>
                      <th className="px-6 py-3 border-b border-slate-200 dark:border-slate-800">
                        Job ID
                      </th>
                      <th className="px-6 py-3 border-b border-slate-200 dark:border-slate-800">
                        File Name
                      </th>
                      <th className="px-6 py-3 border-b border-slate-200 dark:border-slate-800">
                        Record Count
                      </th>
                      <th className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 text-center">
                        Status
                      </th>
                      <th className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 text-right">
                        Accuracy
                      </th>
                      <th className="px-6 py-3 border-b border-slate-200 dark:border-slate-800">
                        Date/Time
                      </th>
                      <th className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-primary uppercase">
                        JOB-82910-X
                      </td>
                      <td className="px-6 py-4 font-medium">
                        JPM_DAILY_LEDGER_OCT24.csv
                      </td>
                      <td className="px-6 py-4 font-mono">852,100</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase">
                          Success
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-emerald-600">
                        100.00%
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        2023-10-24 14:20:01
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            description
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-primary uppercase">
                        JOB-82909-Y
                      </td>
                      <td className="px-6 py-4 font-medium">
                        STRIPE_PAYMENTS_RECON_Q4.xlsx
                      </td>
                      <td className="px-6 py-4 font-mono">1,042,000</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-[9px] font-black uppercase">
                          Pending Audit
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-amber-600">
                        94.12%
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        2023-10-24 11:45:12
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            description
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-primary uppercase">
                        JOB-82908-Z
                      </td>
                      <td className="px-6 py-4 font-medium">
                        INTERNAL_ERP_EXPORT_FINAL.csv
                      </td>
                      <td className="px-6 py-4 font-mono">542,000</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-[9px] font-black uppercase">
                          Failed Match
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-red-600">
                        72.40%
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        2023-10-23 09:12:44
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            description
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-primary uppercase">
                        JOB-82907-A
                      </td>
                      <td className="px-6 py-4 font-medium">
                        WIRE_TRANSFER_BATCH_9921.csv
                      </td>
                      <td className="px-6 py-4 font-mono">45,109</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-[9px] font-black uppercase">
                          Dupes Detected
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-purple-600">
                        99.10%
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        2023-10-23 08:30:12
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            description
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-primary uppercase">
                        JOB-82906-B
                      </td>
                      <td className="px-6 py-4 font-medium">
                        GLOBAL_SETTLEMENT_REPORT.csv
                      </td>
                      <td className="px-6 py-4 font-mono">1,245,000</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-800 text-[9px] font-black uppercase">
                          Success
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-emerald-600">
                        100.00%
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        2023-10-22 18:00:00
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-lg">
                            description
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 text-right">
                <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                  Access Complete Archive
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">
                  Historical Accuracy Trends
                </h4>
                <div className="h-48 flex items-end justify-between gap-1 px-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[88%] relative group">
                    <span className="hidden group-hover:block absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-slate-800 text-white px-1">
                      99.8%
                    </span>
                  </div>
                  <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[92%] relative group"></div>
                  <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[95%] relative group"></div>
                  <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[91%] relative group"></div>
                  <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[98%] relative group"></div>
                  <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[99%] relative group"></div>
                  <div className="w-full bg-primary/20 hover:bg-primary transition-colors h-[97%] relative group"></div>
                  <div className="w-full bg-primary hover:bg-blue-600 transition-colors h-[99.98%] relative group">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-slate-800 text-white px-1 font-bold">
                      99.98%
                    </span>
                  </div>
                </div>
                <div className="flex justify-between mt-2 px-1">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                    W1-SEP
                  </span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                    W2-SEP
                  </span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                    W3-SEP
                  </span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                    W4-SEP
                  </span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                    W1-OCT
                  </span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                    W2-OCT
                  </span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                    W3-OCT
                  </span>
                  <span className="text-[8px] font-bold text-primary uppercase tracking-tighter">
                    W4-OCT
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">
                  Error Source Distribution
                </h4>
                <div className="flex-1 flex items-center justify-around gap-4">
                  <div className="size-32 relative">
                    <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                      <circle
                        className="text-slate-100 dark:text-slate-800"
                        cx="18"
                        cy="18"
                        fill="none"
                        r="15.9155"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        className="text-red-500"
                        cx="18"
                        cy="18"
                        fill="none"
                        r="15.9155"
                        stroke="currentColor"
                        strokeDasharray="45 100"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        className="text-purple-500"
                        cx="18"
                        cy="18"
                        fill="none"
                        r="15.9155"
                        stroke="currentColor"
                        strokeDasharray="30 100"
                        strokeDashoffset="-45"
                        strokeWidth="4"
                      ></circle>
                      <circle
                        className="text-orange-500"
                        cx="18"
                        cy="18"
                        fill="none"
                        r="15.9155"
                        stroke="currentColor"
                        strokeDasharray="25 100"
                        strokeDashoffset="-75"
                        strokeWidth="4"
                      ></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-lg font-black font-mono">70,457</span>
                      <span className="text-[8px] font-black uppercase text-slate-400">
                        Total Exceptions
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="size-2 bg-red-500"></span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter">
                        Missing Values (45%)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 bg-purple-500"></span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter">
                        Format Mismatch (30%)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 bg-orange-500"></span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter">
                        Amount Variance (25%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
