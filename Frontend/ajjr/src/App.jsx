
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FAQ from "./pages/faq/faq";
import "./App.css";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              { }
              { }
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </nav>
          <div className="main-content">
            <Routes>
              { }
              { }
              <Route path="/faq" element={<FAQ faqData={faqData} />} />
            </Routes>

          </div>
        </div>
      </Router>
      <Footer></Footer>
    </>
  );
};

const faqData = [
  { question: 'Har ni en butik?', answer: 'Ja, Chas academy lokal 7' },
  { question: 'Vad är Musk Oud?', answer: 'Parfym från Mekka' },
];


export default App;
