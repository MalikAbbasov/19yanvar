import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Home from "./page/Home";
import "./assets/reset.scss"
import Add from "./page/Add";
import Detail from "./page/Detail";
import Basket from "./page/Basket";
import Wishlist from "./page/Wishlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
