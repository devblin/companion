import "./App.css";
import Chatbox from "./components/chatbox/Chatbox";
import Navbar from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Navbar} />
        <Route path="/Chat" exact component={Chatbox} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
