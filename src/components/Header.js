import React, { useState } from "react";
import { LOGO_URL } from "../constants";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [istoggle, settogele] = useState(false);

  const onclick = () => {
    settogele(!istoggle);
  };
  return (
    <header className="w-[100vw] bg-black text-white sticky top-0 z-[1000]">
      <nav className="w-[80%] flex mx-auto items-center justify-between">
        <img src={LOGO_URL} alt="Error" width={120} />
        <ul className="md:flex gap-4 text-xl hidden">
          <li className="cursor-pointer">
            <NavLink
              to="/body"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline"
                  : "text-white hover:text-blue-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              settogele(!istoggle);
            }}
          >
            <NavLink
              to="/body/service"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline"
                  : "text-white hover:text-blue-200"
              }
            >
              Services
            </NavLink>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              settogele(!istoggle);
            }}
          >
            <NavLink
              to="/body/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline"
                  : "text-white hover:text-blue-200"
              }
            >
              About
            </NavLink>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              settogele(!istoggle);
            }}
          >
            <NavLink
              to="/body/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline"
                  : "text-white hover:text-blue-200"
              }
            >
              Blog
            </NavLink>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              settogele(!istoggle);
            }}
          >
            <NavLink
              to="/body/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline"
                  : "text-white hover:text-blue-200"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="hidden bg-red-600 p-2 rounded-sm text-sm md:block">
          Log Out
        </button>

        <div className="md:hidden text-4xl" onClick={onclick}>
          <button>{istoggle ?<RxCross2 />:<IoMenu />}</button>
        </div>
      </nav>
      <ul
        className={`md:hidden gap-4 text-xl bg-black w-[100%] p-4 absolute z-20 ${
          istoggle ?"flex flex-col items-center":"hidden"
        }`}
      >
        <li className="cursor-pointer" onClick={() => settogele(!istoggle)}>
          <NavLink
            to="/body"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer" onClick={() => settogele(!istoggle)}>
          <NavLink
            to="/body/service"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-white"
            }
          >
            Services
          </NavLink>
        </li>
        <li className="cursor-pointer" onClick={() => settogele(!istoggle)}>
          <NavLink
            to="/body/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li className="cursor-pointer" onClick={() => settogele(!istoggle)}>
          <NavLink
            to="/body/blog"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-white"
            }
          >
            Blog
          </NavLink>
        </li>
        <li className="cursor-pointer" onClick={() => settogele(!istoggle)}>
          <NavLink
            to="/body/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 underline" : "text-white"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
