import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import Layout from "./Layout";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          {routes.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
