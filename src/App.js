import "./App.css";
import Chatbox from "./components/chatbox/Chatbox";
import Resources from "./api/resources";
import Phrases from "./api/phrases";
import Videos from "./api/videos";
function App() {
    return (
        <div className="App">
            react
            <Chatbox />
            <Resources />
            <Phrases />
            <Videos />
        </div>
    );
}

export default App;
