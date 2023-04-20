import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/component";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
