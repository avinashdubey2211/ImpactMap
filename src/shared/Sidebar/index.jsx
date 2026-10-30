import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiGrid,
  FiServer,
  FiAlertTriangle,
  FiGitCommit,
  FiFileText,
  FiBarChart2,
  FiSettings,
  FiX,
} from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { id: 1, label: "Dashboard", path: "/dashboard", icon: FiGrid },
    { id: 2, label: "Services Graph", path: "/services", icon: FiServer },
    {
      id: 3,
      label: "Incidents",
      path: "/incidents",
      icon: FiAlertTriangle,
      badge: "1 Down",
    },
    { id: 4, label: "Deployments", path: "/deployments", icon: FiGitCommit },
    { id: 5, label: "Error Logs", path: "/logs", icon: FiFileText },
    { id: 6, label: "Reports", path: "/reports", icon: FiBarChart2 },
    { id: 7, label: "Settings", path: "/settings", icon: FiSettings },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/70 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-16 z-50
          flex h-[calc(100dvh-64px)] w-64 shrink-0
          flex-col justify-between 
          border-r border-slate-800 bg-slate-900
          transition-none
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:sticky md:top-0 md:h-screen md:translate-x-0
        `}
      >
    
        {/* Navigation */}
        <nav className="space-y-1 p-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={onClose}
                className={`
                  flex w-full items-center justify-between
                  rounded-lg border px-3 py-2.5
                  text-sm font-medium
                  ${
                    isActive
                      ? "border-indigo-500/20 bg-indigo-600/10 text-indigo-400"
                      : "border-transparent text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-2 py-0.5 text-[10px] font-semibold text-rose-400">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto border-t border-slate-800 p-4">
          <div className="rounded-lg border border-slate-800/80 bg-slate-950/60 p-3">
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
              Environment
            </p>

            <div className="mt-1.5 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-xs font-medium text-slate-300">
                Production-Cluster-01
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Close Sidebar"
        >
          <FiX className="h-5 w-5" />
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
