import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiBell, FiMenu, FiActivity } from "react-icons/fi";

const Header = ({ onMenuClick }) => {
  return (
    <header className="relative z-30 flex h-16 w-full items-center justify-between gap-3 border-b border-slate-800 bg-slate-900 px-3 sm:px-5 md:px-6">
      {/* Left Section: Menu + Logo + Search */}
      <div className="flex min-w-0 items-center gap-3 sm:gap-5">
        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          className="shrink-0 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Open Sidebar"
        >
          <FiMenu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <Link
          to="/dashboard"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <div className="rounded-lg bg-indigo-600 p-2 text-white">
            <FiActivity className="h-5 w-5" />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-sm font-bold leading-none tracking-wide text-slate-100 sm:text-base">
              ImpactMap
            </h1>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-wider text-indigo-400">
              Failure Intelligence
            </p>
          </div>
        </Link>

        {/* Search */}
        <div className="relative min-w-0 w-32 sm:w-48 md:w-64 lg:w-80">
          <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

          <input
            type="text"
            placeholder="Search services, logs..."
            className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 pl-9 pr-2 text-xs text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none sm:text-sm"
          />
        </div>
      </div>

      {/* Right Section: Status + Notifications + Profile */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-3 md:gap-4">
        {/* System Status */}
        <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 lg:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="whitespace-nowrap text-xs font-medium text-emerald-400">
            All Operational
          </span>
        </div>

        {/* Notifications */}
        <button
          className="relative rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          aria-label="Notifications"
        >
          <FiBell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-indigo-500" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 border-l border-slate-800 pl-2 sm:gap-3 sm:pl-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
            AV
          </div>

          <div className="hidden text-left lg:block">
            <p className="text-xs font-semibold leading-tight text-slate-200">
              Avinash
            </p>
            <p className="text-[10px] text-slate-500">Lead CTO</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
