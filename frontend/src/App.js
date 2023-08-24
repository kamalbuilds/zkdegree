import "./App.css";
import { useContext, useState } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import VcGatedDapp from "./VcGatedDapp";
import { Center, Card, Image, CardBody, Container } from "@chakra-ui/react";
import University from "../src/components/University";
import { Route, Routes } from "react-router-dom";
import Dash from "./Dash";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import CircleContextProvider, { CircleContext } from "./Contexts/CircleContext";
import Checkout from "./components/Circle/Checkout";


function App() {
  // if you're developing and just want to see the dapp without going through the Polygon ID flow,
  // temporarily set this to "true" to ignore the Polygon ID check and go straight to the dapp page
  const [provedAccessBirthday, setProvedAccessBirthday] = useState(true);

  const { CheckoutData } = useContext(CircleContext);

  console.log("Checkout data", CheckoutData);

  return (
    <>
      <BrowserRouter>
        {/* <CircleContextProvider> */}
        {/* {CheckoutData && <Checkout data={CheckoutData} />} */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
        {/* </CircleContextProvider> */}

      </BrowserRouter>
    </>
  );
}

export default App;
