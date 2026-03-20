import React from "react";

const UploadMapping = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">

          <main className="flex-1 flex flex-col max-w-[1200px] mx-auto w-full px-6 py-8">
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="hover:text-primary cursor-pointer">
                  Data Management
                </span>
                <span className="material-symbols-outlined text-xs">
                  chevron_right
                </span>
                <span className="text-slate-900 dark:text-slate-100 font-medium">
                  File Upload &amp; Mapping
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight mt-2">
                Upload &amp; Map Transactions
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Standardize your financial data by mapping source file columns
                to R2R system fields.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary">
                      cloud_upload
                    </span>
                    <h3 className="font-bold text-lg">Step 1: Upload File</h3>
                  </div>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/50 transition-colors group cursor-pointer h-64">
                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        upload_file
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 text-center">
                      Drop your CSV or Excel file here
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
                      Supported: .csv, .xlsx, .xls (Max 50MB)
                    </p>
                    <button className="mt-6 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm">
                      Select File
                    </button>
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <p className="text-sm font-bold text-emerald-900 dark:text-emerald-100">
                        Q3_Reconciliation_Export.csv
                      </p>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400">
                        1.2 MB • 2,450 records detected
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        table_view
                      </span>
                      <h3 className="font-bold text-lg">
                        Step 2: Preview &amp; Data Audit
                      </h3>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">
                      Showing first 20 rows
                    </span>
                  </div>
                  <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800">
                          <th className="p-3 font-semibold border-b border-slate-200 dark:border-slate-700">
                            TXN_ID
                          </th>
                          <th className="p-3 font-semibold border-b border-slate-200 dark:border-slate-700">
                            DATE_VAL
                          </th>
                          <th className="p-3 font-semibold border-b border-slate-200 dark:border-slate-700">
                            CURR_AMT
                          </th>
                          <th className="p-3 font-semibold border-b border-slate-200 dark:border-slate-700">
                            REF_CODE
                          </th>
                          <th className="p-3 font-semibold border-b border-slate-200 dark:border-slate-700">
                            STATUS
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <td className="p-3 font-mono text-xs">TRX-00982</td>
                          <td className="p-3">2023-10-12</td>
                          <td className="p-3 font-medium">$4,250.00</td>
                          <td className="p-3">INV-2023-01</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-slate-700">
                              PENDING
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <td className="p-3 font-mono text-xs">TRX-00983</td>
                          <td className="p-3">2023-10-12</td>
                          <td className="p-3 font-medium">$120.50</td>
                          <td className="p-3">PAY-REF-99</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-slate-700">
                              PENDING
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <td className="p-3 font-mono text-xs">TRX-00984</td>
                          <td className="p-3">2023-10-13</td>
                          <td className="p-3 font-medium">$9,000.00</td>
                          <td className="p-3">CORP-EXT-1</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-slate-700">
                              PENDING
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-12">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">
                          schema
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">
                          Step 3: Column Mapping
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Map your source headers to the required system fields.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-sm">
                          auto_fix_high
                        </span>
                        Auto-Match Fields
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        Transaction ID <span className="text-red-500">*</span>
                      </label>
                      <select className="form-select w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:border-primary focus:ring-primary">
                        <option value="">Select source field</option>
                        <option selected="">TXN_ID</option>
                        <option>DATE_VAL</option>
                        <option>CURR_AMT</option>
                        <option>REF_CODE</option>
                      </select>
                      <p className="text-[11px] text-slate-400">
                        Unique identifier for the audit trail.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        Date <span className="text-red-500">*</span>
                      </label>
                      <select className="form-select w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:border-primary focus:ring-primary">
                        <option value="">Select source field</option>
                        <option>TXN_ID</option>
                        <option selected="">DATE_VAL</option>
                        <option>CURR_AMT</option>
                        <option>REF_CODE</option>
                      </select>
                      <p className="text-[11px] text-slate-400">
                        Transaction recording date.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        Amount <span className="text-red-500">*</span>
                      </label>
                      <select className="form-select w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:border-primary focus:ring-primary">
                        <option value="">Select source field</option>
                        <option>TXN_ID</option>
                        <option>DATE_VAL</option>
                        <option selected="">CURR_AMT</option>
                        <option>REF_CODE</option>
                      </select>
                      <p className="text-[11px] text-slate-400">
                        Absolute financial value.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        Reference Number
                      </label>
                      <select className="form-select w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:border-primary focus:ring-primary">
                        <option value="">Select source field</option>
                        <option>TXN_ID</option>
                        <option>DATE_VAL</option>
                        <option>CURR_AMT</option>
                        <option selected="">REF_CODE</option>
                      </select>
                      <p className="text-[11px] text-slate-400">
                        Optional reconciliation key.
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                        Mapping Verified
                      </span>
                      <p className="text-xs text-slate-500">
                        4 of 4 required fields mapped correctly.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <button className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Cancel
                      </button>
                      <button className="px-8 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
                        Process Reconciliation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                © 2024 R2R Reconciliation Platform. Confidential Financial Tool.
              </p>
              <div className="flex gap-6">
                <a className="text-sm text-slate-500 hover:text-primary" href="#">
                  User Guide
                </a>
                <a className="text-sm text-slate-500 hover:text-primary" href="#">
                  Compliance
                </a>
                <a className="text-sm text-slate-500 hover:text-primary" href="#">
                  Support
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default UploadMapping;
