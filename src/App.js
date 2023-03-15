import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Component/Footer";
import Content from "./view/Content";
import Create from "./view/Create";
import Header from "./Component/Header";
import ProviderDB from "./context/ContextDB";

function App() {
  return (
    <>
      <ProviderDB>
        <div>
          <header>
            <Header />
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/content" element={<Content />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </ProviderDB>
    </>
  );
}

export default App;
