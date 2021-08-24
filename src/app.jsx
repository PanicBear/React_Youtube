import "./app.css";
import Content from "./component/content";
import Navbar from "./component/navbar";

const App = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <Content></Content>
    </>
  );
};

export default App;
