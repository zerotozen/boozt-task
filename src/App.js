import React from "react";
import { Header } from "./components/header/header.component";
import { HomePage } from "./pages/home-page/home-page.components";
import { Footer } from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
