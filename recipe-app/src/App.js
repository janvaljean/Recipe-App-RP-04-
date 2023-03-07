
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar/MyNavbar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About";
import Details from "./pages/details/Details";
import Login from "./pages/login/Login";
import './App.css';


function App() {
  return (
    <div className="App">
       <Router>
        <MyNavbar />

        <Routes>
          {/* / (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         / başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir . */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>

        
      </Router>
    </div>
  );
}

export default App;
