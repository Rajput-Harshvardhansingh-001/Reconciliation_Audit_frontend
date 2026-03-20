import React from "react";

const Reconciliation = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">

          <div className="flex flex-1 px-8 py-6 gap-8 max-w-[1400px] mx-auto w-full">
            {/* Main Content Area */}
            <div className="flex flex-col flex-1 min-w-0">
              {/* Title & Actions */}
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <div className="flex min-w-72 flex-col gap-1">
                  <h1 className="text-3xl font-bold leading-tight">
                    Reconciliation Table
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
                    Manage and compare transaction records.
                  </p>
                </div>
                <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-medium hover:bg-blue-600 transition-colors gap-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "18px" }}
                  >
                    add
                  </span>
                  <span className="truncate">New Reconciliation</span>
                </button>
              </div>
              {/* Search & Filters */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex w-full items-stretch rounded-lg h-11 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
                  <div className="text-slate-400 flex items-center justify-center pl-4 pr-2">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="w-full bg-transparent border-none text-sm focus:ring-0 placeholder:text-slate-400 px-2"
                    placeholder="Search by Transaction ID..."
                    defaultValue=""
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button className="flex h-8 items-center justify-center rounded-full bg-primary text-white px-4 text-sm font-medium transition-colors">
                    All (1,240)
                  </button>
                  <button className="flex h-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 px-4 text-sm font-medium transition-colors">
                    Matched (1,150)
                  </button>
                  <button className="flex h-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 px-4 text-sm font-medium transition-colors text-orange-600 dark:text-orange-400">
                    Unmatched (45)
                  </button>
                  <button className="flex h-8 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 px-4 text-sm font-medium transition-colors text-red-600 dark:text-red-400">
                    Exception (45)
                  </button>
                </div>
              </div>
              {/* Table */}
              <div className="flex overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm flex-1">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-5 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Transaction ID
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                        System Amt
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                        Uploaded Amt
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                        Variance
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                        Status
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-5 py-4 text-sm font-medium">
                        TRX-2023-001
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono">
                        $10,000.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono">
                        $10,000.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono text-slate-500">
                        0.00%
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                          Matched
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button className="text-primary hover:text-blue-700 text-sm font-medium flex items-center justify-center w-full gap-1">
                          <span>View</span>
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            arrow_forward
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors bg-blue-50/50 dark:bg-blue-900/10">
                      <td className="px-5 py-4 text-sm font-medium text-primary">
                        TRX-2023-002
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono">
                        $5,500.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono text-orange-600 dark:text-orange-400 font-semibold">
                        $5,000.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono text-orange-600 dark:text-orange-400">
                        9.09%
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                          Unmatched
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button className="text-primary hover:text-blue-700 text-sm font-medium flex items-center justify-center w-full gap-1">
                          <span>Active</span>
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            chevron_right
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-5 py-4 text-sm font-medium">
                        TRX-2023-003
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono">
                        $2,300.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono">
                        $2,300.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono text-slate-500">
                        0.00%
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                          Matched
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button className="text-primary hover:text-blue-700 text-sm font-medium flex items-center justify-center w-full gap-1">
                          <span>View</span>
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            arrow_forward
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-5 py-4 text-sm font-medium">
                        TRX-2023-004
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono">
                        $8,000.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono text-red-600 dark:text-red-400 font-semibold">
                        $8,100.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono text-red-600 dark:text-red-400">
                        -1.25%
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800">
                          Exception
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button className="text-primary hover:text-blue-700 text-sm font-medium flex items-center justify-center w-full gap-1">
                          <span>View</span>
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            arrow_forward
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-5 py-4 text-sm font-medium">
                        TRX-2023-005
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono">
                        $1,200.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono">
                        $1,200.00
                      </td>
                      <td className="px-5 py-4 text-sm text-right font-mono text-slate-500">
                        0.00%
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                          Matched
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button className="text-primary hover:text-blue-700 text-sm font-medium flex items-center justify-center w-full gap-1">
                          <span>View</span>
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            arrow_forward
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Side Panel (Comparison) */}
            <div className="w-[480px] flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md sticky top-24 h-[calc(100vh-8rem)]">
              <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">TRX-2023-002</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Comparison View
                  </p>
                </div>
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                <div className="grid grid-cols-2 gap-4">
                  {/* Left Card: System */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-sm text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                      System Record
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Date</p>
                        <p className="text-sm font-medium">Oct 24, 2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Account</p>
                        <p className="text-sm font-medium">1020-Cash Operating</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Description</p>
                        <p className="text-sm font-medium line-clamp-2">
                          Vendor Payment - Acme Corp Services Q3
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-xs text-slate-500 mb-1">Amount</p>
                        <p className="text-lg font-mono font-bold">$5,500.00</p>
                      </div>
                    </div>
                  </div>
                  {/* Right Card: Uploaded */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-sm text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                      Uploaded Record
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Date</p>
                        <p className="text-sm font-medium">Oct 24, 2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Account</p>
                        <p className="text-sm font-medium">1020-Cash</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Description</p>
                        <p className="text-sm font-medium line-clamp-2">
                          Acme Corp Pmt
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700 bg-red-50 dark:bg-red-900/20 -mx-4 px-4 pb-2 rounded-b-lg">
                        <p className="text-xs text-red-500 dark:text-red-400 mb-1 font-medium mt-2">
                          Amount (Mismatch)
                        </p>
                        <p className="text-lg font-mono font-bold text-red-600 dark:text-red-400">
                          $5,000.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/50">
                  <div className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-orange-500 mt-0.5"
                      style={{ fontSize: "20px" }}
                    >
                      info
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-orange-800 dark:text-orange-300">
                        Variance Detected
                      </h5>
                      <p className="text-xs text-orange-700 dark:text-orange-400 mt-1">
                        There is a $500.00 (9.09%) difference between the system
                        and uploaded amounts. Manual review required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-slate-200 dark:border-slate-700 flex gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-b-xl">
                <button className="flex-1 h-10 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Edit Record
                </button>
                <button className="flex-1 h-10 rounded-lg bg-primary text-white text-sm font-medium hover:bg-blue-600 transition-colors">
                  Force Match
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reconciliation;
