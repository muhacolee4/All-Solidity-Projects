import "./App.css";
import "./components/index";
import { Footer, Navbar, Services, Welcome, Transactions } from "./components";
// import Navbar from "./components";
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
