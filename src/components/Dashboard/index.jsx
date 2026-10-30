import React from "react";
import {
  FiServer,
  FiAlertOctagon,
  FiAlertTriangle,
  FiCheckCircle,
  FiArrowUpRight,
  FiActivity,
  FiClock,
  FiRefreshCw,
} from "react-icons/fi";

const Dashboard = () => {
  // Mock Data for Dashboard Metrics
  const metrics = [
    {
      id: 1,
      title: "Total Services",
      value: "12",
      color: "text-slate-100",
      border: "border-slate-800",
      bg: "bg-slate-900",
      icon: FiServer,
    },
    {
      id: 2,
      title: "Service Down",
      value: "1",
      color: "text-rose-400",
      border: "border-rose-500/30",
      bg: "bg-rose-950/20",
      icon: FiAlertOctagon,
    },
    {
      id: 3,
      title: "Degraded",
      value: "2",
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-950/20",
      icon: FiAlertTriangle,
    },
    {
      id: 4,
      title: "Healthy",
      value: "9",
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-950/20",
      icon: FiCheckCircle,
    },
  ];

  // Mock Logs List
  const recentLogs = [
    {
      id: 1,
      time: "14:27:32",
      service: "payment-service",
      level: "ERROR",
      message:
        "TypeError: Cannot read properties of undefined (reading 'status')",
    },
    {
      id: 2,
      time: "14:26:18",
      service: "payment-service",
      level: "ERROR",
      message: "Payment gateway connection timeout after 5000ms",
    },
    {
      id: 3,
      time: "14:24:03",
      service: "checkout-service",
      level: "WARN",
      message: "High API response latency detected (3.8s)",
    },
    {
      id: 4,
      time: "14:21:17",
      service: "api-gateway",
      level: "ERROR",
      message: "502 Bad Gateway response returned to client",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
            System Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time health monitoring and failure intelligence status.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors">
            <FiRefreshCw className="h-3.5 w-3.5" />
            <span>Refresh</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-colors">
            <span>Run Health Check</span>
            <FiArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 2. Key Metrics Grid (4 Column Layout) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {metrics.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`${item.bg} border ${item.border} p-4 sm:p-5 rounded-xl flex flex-col justify-between transition-all`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {item.title}
                </span>
                <Icon className={`h-4 w-4 ${item.color}`} />
              </div>
              <div className="mt-3">
                <p className={`text-2xl sm:text-3xl font-bold ${item.color}`}>
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Main Dashboard Section: Dependency Graph & Active Incident */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Big Card: Dependency Graph Workspace */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-[360px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiActivity className="h-4 w-4 text-indigo-400" />
              <h2 className="text-sm font-semibold text-slate-200">
                Service Dependency Graph
              </h2>
            </div>
            <span className="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full border border-slate-700">
              Live Topology
            </span>
          </div>

          {/* Canvas Placeholder for D3.js / React Flow Graph */}
          <div className="border border-dashed border-slate-800 rounded-lg flex-1 my-4 flex flex-col items-center justify-center bg-slate-950/40 p-6 text-center">
            <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400 mb-2">
              <FiServer className="h-6 w-6" />
            </div>
            <p className="text-sm font-medium text-slate-300">
              Central Service Dependency Graph Map
            </p>
            <p className="text-xs text-slate-500 max-w-sm mt-1">
              Nodes will render here using D3.js or React Flow to illustrate
              payment, checkout & database link statuses.
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-3">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>{" "}
                Healthy
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>{" "}
                Degraded
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-500"></span> Down
              </span>
            </div>
            <span>12 Microservices linked</span>
          </div>
        </div>

        {/* Right Card: Critical Incident Details Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-slate-200">
                Active Critical Incident
              </h2>
              <span className="bg-rose-500/10 text-rose-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-500/20 animate-pulse">
                CRITICAL
              </span>
            </div>

            <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-lg space-y-3">
              <div>
                <h3 className="font-semibold text-slate-100 text-sm">
                  Payment Service Down
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Payment processing requests timing out. Checkout flow
                  currently interrupted.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <FiClock className="h-3.5 w-3.5 text-slate-500" />
                <span>Started: 14:21 (11 mins ago)</span>
              </div>

              <div className="pt-3 border-t border-rose-500/20">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  AI Root Cause Analysis:
                </p>
                <p className="text-xs font-medium text-rose-300 mt-1">
                  Recent Deployment{" "}
                  <code className="bg-slate-900 px-1 py-0.5 rounded text-indigo-300">
                    v2.4.1
                  </code>{" "}
                  caused database connection exhaustion.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex gap-2">
            <button className="flex-1 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold py-2 rounded-lg transition-colors">
              Investigate Incident
            </button>
            <button className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition-colors">
              Rollback v2.4.1
            </button>
          </div>
        </div>
      </div>

      {/* 4. Bottom Section: Live Error Logs Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-slate-200">
            Recent System Error Logs
          </h2>
          <span className="text-xs text-indigo-400 cursor-pointer hover:underline">
            View All Logs
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-semibold tracking-wider">
              <tr>
                <th className="p-3 rounded-l-lg">Time</th>
                <th className="p-3">Service</th>
                <th className="p-3">Level</th>
                <th className="p-3 rounded-r-lg">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {recentLogs.map((log) => (
                <tr
                  key={log.id}
                  className="hover:bg-slate-800/40 transition-colors"
                >
                  <td className="p-3 font-mono text-slate-400 whitespace-nowrap">
                    {log.time}
                  </td>
                  <td className="p-3 font-medium text-indigo-400 whitespace-nowrap">
                    {log.service}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        log.level === "ERROR"
                          ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {log.level}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-slate-300 truncate max-w-md">
                    {log.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
