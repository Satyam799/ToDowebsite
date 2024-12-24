import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Comnponent/Header";
import Footer from "./Comnponent/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainscreen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
