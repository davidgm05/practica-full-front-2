import {Provider} from "react-redux";
import './App.css'
import store from "./core/store/store";
import HomePage from "../../pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesComponent from "../../components/favoritesComponent";
import UpdateComponent from "../../components/updateComponent";

function App() {
 

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/favorites" element={<FavoritesComponent/>}></Route>
        <Route path="/update" element={<UpdateComponent/>}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
