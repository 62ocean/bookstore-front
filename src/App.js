import './App.css';
import HomeView from "./views/HomeView";
import BookView from "./views/BookView";
import MyCartView from "./views/MyCartView";
import MyOrderView from "./views/MyOrderView";
import TakeOrderView from "./views/TakeOrderView";
import BasicRoute from "./Router";
import LoginView from "./views/LoginView";
import {openSocket} from "./utils/websocket";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  if (user !== null) openSocket();
  return (
    <BasicRoute />
    //   <LoginView />
  );
}

export default App;

