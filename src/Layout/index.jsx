// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../shared/Sidebar";
// import Header from "../shared/Header";

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header onMenuClick={() => setSidebarOpen(true)} />

//       <div className="flex">
//         {/* Sidebar */}
//         <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//         {/* Main Content */}
//         <main className="min-h-[calc(100vh-64px)] w-full overflow-x-hidden">
//           <div className="p-3 sm:p-4 md:p-5 lg:p-6">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../shared/Sidebar";
// import Header from "../shared/Header";
// // import Sidebar from "./shared/Sidebar";
// // import Header from "./shared/Header";

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-full bg-slate-950 text-slate-100 flex flex-col">
//       {/* Top Header */}
//       <Header onMenuClick={() => setSidebarOpen(true)} />

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//         {/* Main Route Content */}
//         <main className="min-h-[calc(100vh-64px)] w-full overflow-x-hidden flex-1 bg-slate-950">
//           <div className="p-3 sm:p-4 md:p-5 lg:p-6">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import Header from "../shared/Header";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-full flex-col bg-slate-950 text-slate-100">
      {/* Header: Normal flow, not fixed */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Remaining Screen Height */}
      <div className="flex flex-1 items-stretch">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="min-h-[calc(100vh-64px)] min-w-0 flex-1 overflow-x-hidden bg-slate-950">
          <div className="p-3 sm:p-4 md:p-5 lg:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
