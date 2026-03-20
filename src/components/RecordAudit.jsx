import React from "react";

const RecordAudit = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="flex h-screen overflow-hidden">
        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="h-14 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                Global Admin
              </span>
              <span className="text-slate-300">/</span>
              <h2 className="text-sm font-bold text-slate-800 dark:text-white">
                System Audit Logs
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">
                  download
                </span>
                Export CSV
              </button>
              <div className="h-6 w-px bg-slate-200 dark:border-slate-700"></div>
              <button className="p-1.5 rounded text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-xl">help</span>
              </button>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded shadow-sm">
              <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    filter_alt
                  </span>
                  Log Filters
                </h3>
                <button className="text-[10px] font-bold text-primary dark:text-blue-400 uppercase hover:underline">
                  Clear All Filters
                </button>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">
                    Date Range
                  </label>
                  <div className="relative">
                    <input
                      className="w-full text-xs border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded py-2 pl-8 pr-3 focus:ring-primary"
                      type="text"
                      value="Oct 01, 2023 - Oct 24, 2023"
                    />
                    <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                      calendar_month
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">
                    User / Principal
                  </label>
                  <select className="w-full text-xs border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded py-2 focus:ring-primary">
                    <option>All Users</option>
                    <option>System Automations</option>
                    <option>Alex Chen</option>
                    <option>Sarah Jenkins</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">
                    Action Type
                  </label>
                  <select className="w-full text-xs border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded py-2 focus:ring-primary">
                    <option>All Actions</option>
                    <option>Data Modification</option>
                    <option>Security Event</option>
                    <option>Workflow Transition</option>
                    <option>Login / Access</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-primary hover:bg-slate-800 text-white text-xs font-bold py-2 rounded transition-colors shadow-sm">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded shadow-sm overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="w-full text-left audit-table border-collapse">
                  <thead>
                    <tr>
                      <th>Record ID</th>
                      <th>Timestamp</th>
                      <th>Changed By</th>
                      <th>Action Type</th>
                      <th>Field Name</th>
                      <th>Old Value</th>
                      <th>New Value</th>
                      <th>Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="font-mono text-[10px] text-slate-500 font-bold">
                        #TRX-992104
                      </td>
                      <td className="whitespace-nowrap">
                        2023-10-24 14:22:10.04
                      </td>
                      <td className="font-medium">System (Batch Processor)</td>
                      <td>
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                          Auto-Reconcile
                        </span>
                      </td>
                      <td className="font-mono text-slate-500">match_status</td>
                      <td className="text-rose-600 dark:text-rose-400">
                        UNMATCHED
                      </td>
                      <td className="text-emerald-600 dark:text-emerald-400">
                        MATCHED
                      </td>
                      <td>
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-slate-400">
                          <span className="material-symbols-outlined text-xs">
                            memory
                          </span>{" "}
                          System
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-mono text-[10px] text-slate-500 font-bold">
                        #BNK-001254
                      </td>
                      <td className="whitespace-nowrap">
                        2023-10-24 13:45:02.12
                      </td>
                      <td className="font-medium">Sarah Jenkins</td>
                      <td>
                        <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium">
                          Manual Override
                        </span>
                      </td>
                      <td className="font-mono text-slate-500">
                        settlement_date
                      </td>
                      <td className="italic text-slate-400">NULL</td>
                      <td className="font-semibold text-slate-800 dark:text-white">
                        2023-10-23
                      </td>
                      <td>
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-600">
                          <span className="material-symbols-outlined text-xs">
                            person
                          </span>{" "}
                          Manual
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-mono text-[10px] text-slate-500 font-bold">
                        #ACC-771200
                      </td>
                      <td className="whitespace-nowrap">
                        2023-10-24 11:15:33.88
                      </td>
                      <td className="font-medium">System (ERP Sync)</td>
                      <td>
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                          Update
                        </span>
                      </td>
                      <td className="font-mono text-slate-500">
                        ledger_balance
                      </td>
                      <td className="text-slate-500">$45,200,000.00</td>
                      <td className="font-semibold text-slate-800 dark:text-white">
                        $45,210,450.22
                      </td>
                      <td>
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-slate-400">
                          <span className="material-symbols-outlined text-xs">
                            memory
                          </span>{" "}
                          System
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-mono text-[10px] text-slate-500 font-bold">
                        #USR-8821
                      </td>
                      <td className="whitespace-nowrap">
                        2023-10-24 09:02:11.45
                      </td>
                      <td className="font-medium">Admin Root</td>
                      <td>
                        <span className="px-1.5 py-0.5 rounded bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 font-medium">
                          Security Policy Change
                        </span>
                      </td>
                      <td className="font-mono text-slate-500">mfa_required</td>
                      <td className="text-rose-600">false</td>
                      <td className="text-emerald-600">true</td>
                      <td>
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-600">
                          <span className="material-symbols-outlined text-xs">
                            person
                          </span>{" "}
                          Manual
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-mono text-[10px] text-slate-500 font-bold">
                        #TRX-992105
                      </td>
                      <td className="whitespace-nowrap">
                        2023-10-24 08:30:00.00
                      </td>
                      <td className="font-medium">System (Batch Processor)</td>
                      <td>
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                          Validation
                        </span>
                      </td>
                      <td className="font-mono text-slate-500">
                        compliance_flag
                      </td>
                      <td className="text-slate-400">PENDING</td>
                      <td className="text-emerald-600">PASSED</td>
                      <td>
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-slate-400">
                          <span className="material-symbols-outlined text-xs">
                            memory
                          </span>{" "}
                          System
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-mono text-[10px] text-slate-500 font-bold">
                        #BNK-001255
                      </td>
                      <td className="whitespace-nowrap">
                        2023-10-24 08:12:44.21
                      </td>
                      <td className="font-medium">Alex Chen</td>
                      <td>
                        <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium">
                          Comment Add
                        </span>
                      </td>
                      <td className="font-mono text-slate-500">audit_note</td>
                      <td className="italic text-slate-400">NULL</td>
                      <td className="text-slate-700 dark:text-slate-300">
                        "Verified against Swift confirmation"
                      </td>
                      <td>
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-amber-600">
                          <span className="material-symbols-outlined text-xs">
                            person
                          </span>{" "}
                          Manual
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                  Showing 1 to 50 of 24,102 Audit Records
                </p>
                <div className="flex items-center gap-1">
                  <button
                    className="p-1 rounded border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 disabled:opacity-30"
                    disabled=""
                  >
                    <span className="material-symbols-outlined text-sm">
                      first_page
                    </span>
                  </button>
                  <button
                    className="p-1 rounded border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 disabled:opacity-30"
                    disabled=""
                  >
                    <span className="material-symbols-outlined text-sm">
                      chevron_left
                    </span>
                  </button>
                  <div className="flex items-center gap-1 px-2">
                    <span className="text-xs font-bold px-2 py-1 bg-primary text-white rounded">
                      1
                    </span>
                    <span className="text-xs font-medium px-2 py-1 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded cursor-pointer">
                      2
                    </span>
                    <span className="text-xs font-medium px-2 py-1 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded cursor-pointer">
                      3
                    </span>
                    <span className="text-xs font-medium px-1">...</span>
                    <span className="text-xs font-medium px-2 py-1 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded cursor-pointer">
                      482
                    </span>
                  </div>
                  <button className="p-1 rounded border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">
                      chevron_right
                    </span>
                  </button>
                  <button className="p-1 rounded border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-sm">
                      last_page
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  Critical Changes
                </span>
                <span className="text-xl font-black text-rose-600">124</span>
                <span className="text-[9px] text-slate-400 mt-1">
                  Requires supervisor review
                </span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  Security Alerts
                </span>
                <span className="text-xl font-black text-amber-500">12</span>
                <span className="text-[9px] text-slate-400 mt-1">
                  Failed login attempts tracked
                </span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  Manual Overrides
                </span>
                <span className="text-xl font-black text-primary dark:text-blue-400">
                  842
                </span>
                <span className="text-[9px] text-slate-400 mt-1">
                  Current audit cycle
                </span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  Log Integrity
                </span>
                <span className="text-xl font-black text-emerald-600">
                  Verified
                </span>
                <span className="text-[9px] text-slate-400 mt-1">
                  SHA-256 chain validated
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RecordAudit;
