import Newsletter from "./components/Newsletter";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Success from "./components/Success";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Newsletter /> } />
        <Route path="success" element={ <Success /> } />
      </Routes>
    </Router>
  );
}

export default App;
