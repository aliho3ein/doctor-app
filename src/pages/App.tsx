import { Routes, Route } from "../../node_modules/react-router-dom/dist/index";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import { RouterType } from "../model/routerType";
import AboutPage from "./aboutPage";
import ContactPage from "./contactPage";
import HomePage from "./homePage";
import { useEffect } from "react";
import * as Aos from "aos";

// eslint-disable-next-line react-refresh/only-export-components
export const pageList: RouterType[] = [
  { element: <HomePage />, path: "", title: "Home" },
  { element: <AboutPage />, path: "about-us", title: "Über uns" },
  { element: <ContactPage />, path: "contact-us", title: "Kontakt uns" },
  { element: <ContactPage />, path: "team", title: "Unsere Team" },
];

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          {pageList.map((rout: RouterType, i) => (
            <Route key={i} element={rout.element} path={rout.path} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
