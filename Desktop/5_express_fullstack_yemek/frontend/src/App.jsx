import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import Sidebar from "./components/Sidebar";
import CreatePage from "./pages/CreatePage";


const App = () => {
  return <BrowserRouter>
  
  <div className="flex">
  <Sidebar/>
  <Routes>
    <Route path="/" element={<MainPage/>}></Route>
    <Route path="/tarif/:id" element={<DetailPage/>}></Route>
    <Route path="/ekle" element={<CreatePage/>}></Route>
  </Routes>
  </div>
  </BrowserRouter>
       
}
export default App;