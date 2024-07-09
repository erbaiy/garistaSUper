import React, { useState, useEffect, useContext, createContext } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import Sidebar, { SidebarItem } from "../pages/SideBar.jsx";
import { BiDrink } from "react-icons/bi";
import { BiDish } from "react-icons/bi";
import { BsMegaphone } from "react-icons/bs";
import { RiPieChartLine } from "react-icons/ri";
import { LayoutDashboard, Settings } from "lucide-react";
import Login from "../authentification/page.jsx";
import { CiBoxes } from "react-icons/ci";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { GrSort } from "react-icons/gr";
import { BiCommentError } from "react-icons/bi";
import NavBar from "../pages/dashboard/navBar.jsx";
import "../index.css";

export const SidebarContext = createContext();

function Layout() {
  const [expanded, setExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  const [authenticated, setAuthenticated] = useState(false); // État d'authentification
  const navigate = useNavigate(); // Utiliser la fonction de navigation
  // const { expanded } = useContext(SidebarContext);

  useEffect(() => {
    // Vérifiez si l'utilisateur est déjà authentifié lors du chargement de la page
    const isUserAuthenticated = localStorage.getItem("authenticated");
    if (isUserAuthenticated === "true") {
      setAuthenticated(true);
    }
  }, []);

  // Si l'utilisateur n'est pas authentifié, afficher la page de connexion
  //   if (!authenticated) {
  //     return <Login onLogin={() => setAuthenticated(true)} />;
  //   }

  console.log(expanded);
  return (
    <>
      {/* <Login/> */}
      {/* {!authenticated && <Login onLogin={() => setAuthenticated(true)} />}
    {authenticated && ( */}
      <SidebarContext.Provider
        value={{ expanded, setExpanded, selectedItem, handleItemClick }}
      >
        <header>
          <div className="flex">
            <Sidebar>
              <Link to="/Dashboard">
                <SidebarItem
                  icon={<LayoutDashboard size={20} />}
                  text="Dashboard"
                  active
                />
              </Link>
              <Link to="/Report">
                <SidebarItem
                  icon={<RiPieChartLine size={20} />}
                  text="Report"
                />
              </Link>

              <hr className="my-3" />
              <Link to="/Menu">
                <SidebarItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  }
                  text="Menu"
                />
              </Link>
              <Link to="/userList">
                <SidebarItem
                  icon={<GrSort size={18} />}
                  text="Users List"
                  alert
                />
              </Link>

              <Link to="/Supers">
                <SidebarItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
                      />
                    </svg>
                  }
                  text="Supers"
                />
              </Link>
              <Link to="/Users">
                <SidebarItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                  }
                  text="Users"
                />
              </Link>
              <hr className="my-3" />
              <Link to="/Restos">
                <SidebarItem icon={<BiDish size={20} />} text="Restos" />
              </Link>
            </Sidebar>

            {/* ${expanded ? "ml-64" : "ml-16"} */}

            <main
              className={` col-span-1 w-full  ${
                expanded ? "ml-64" : "ml-16"
              } transition-all duration-200 `}
            >
              <NavBar />
              <Outlet />
            </main>
          </div>
        </header>
      </SidebarContext.Provider>
      {/* )} */}
    </>
  );
}

export default Layout;
