import "./App.css";


import NewFooter from "./components/common/footer/NewFooter.tsx";
import Navbar from "./components/common/navbar/Navbar.tsx";
import Router from "./routes/Router.tsx";

function App() {
  return (
    <>
      <Navbar />

      <Router />
      <NewFooter />
    </>
  );
}

export default App;
