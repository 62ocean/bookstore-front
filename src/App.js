import logo from './logo.svg';
import './App.css';
import HomeView from "./views/HomeView";
import BookView from "./views/BookView";
import MyCartView from "./views/MyCartView";
import MyOrderView from "./views/MyOrderView";
import TakeOrderView from "./views/TakeOrderView";
import BasicRoute from "./Router";

function App() {
  return (
    <BasicRoute />
  );
}

export default App;

