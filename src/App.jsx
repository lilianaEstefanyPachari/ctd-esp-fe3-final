
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useGlobalState } from "./Components/utils/global.context";


function App() {
  const {state} = useGlobalState();
  return (
      <div className={`app main-page ${state.tema}`}>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={<h1>Page not found - Error 404</h1>} />
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;

