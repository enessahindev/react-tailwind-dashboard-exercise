import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import {
  Catalog,
  Customers,
  Error,
  Layout,
  Login,
  Orders,
  Register,
  Stores,
  UserEditProfile,
  Users,
  UsersGroup,
} from "./pages";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  });
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "bg-white min-h-screen md:ml-72 w-full "
                : "bg-white  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-white navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Layout />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/stores" element={<Stores />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/catalog" element={<Catalog />} />
                {/* managment */}
                <Route path="/users" element={<Users />} />
                <Route path="/users-group" element={<UsersGroup />} />
                <Route
                  path="/user edit profile"
                  element={<UserEditProfile />}
                />
                {/* AUTH Pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/error" element={<Error />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
