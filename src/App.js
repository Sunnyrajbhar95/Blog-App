import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { app } from "./utilities/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import Services from "./components/Services";
import Dummy from "./components/Dummy";

const auth = getAuth(app);

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("Setting up auth state listener");
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("User is signed in:", user);
  //       if (window.location.pathname !== '/body') {
  //         navigate('/body');
  //       }
  //     } else {
  //       console.log("User is signed out");
  //       if (window.location.pathname !== '/') {
  //         navigate('/');
  //       }
  //     }
  //   });

  //   return () => {
  //     console.log("Cleaning up auth state listener");
  //     unsubscribe();
  //   };
  // }, [auth, navigate]);

  return (
    <div className="w-[100vw] h-[100vh]">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/body" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Services />} />
          <Route path="blog" element={<Blog />}>
            <Route path=":id" element={<Dummy />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
