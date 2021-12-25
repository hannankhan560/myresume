import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from './pages/Resume'
import Layout from "./pages/Layout";
import NoPage from "./pages/Nopage";
import Cursor from './Cursor';
import './sass/style.scss';


// function App() {  
//   return (
//     <div className="App">
//       <Home />
//       <Cursor />
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/resume-light" element={<Resume theme={"light-theme"} />} />
          <Route path="/resume-dark" element={<Resume theme={"dark-theme"} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    <Cursor />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));