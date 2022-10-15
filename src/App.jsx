import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./Form";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Print from "./Print";

function App() {
  const [listData, setPrintData] = useState([]);
  const [isNameAge, setIsNameAge] = useState(true);
  const [letter, setLetter] = useState("");
  const submitFormHandler = (inputData) => {
    if (inputData.entredName.length !== 0 && inputData.entredAge !== "") {
      setIsNameAge(true);
      setPrintData((prevState) => {
        return [inputData, ...prevState];
      });
    } else if (inputData.entredName === "" && inputData.entredAge === "") {
      setIsNameAge(false);
      setLetter("you have to provide valid Name and Age)");
    } else if (inputData.entredName === "") {
      setIsNameAge(false);
      setLetter("you have to provide valid Name)");
    } else if (inputData.entredAge === "") {
      setIsNameAge(false);
      setLetter("you have to provide valid Age)");
    }
  };

  return (
    <>
      {!isNameAge && <Backdrop />}
      {!isNameAge && <Modal isNameAge={setIsNameAge} text={letter} />}
      <Form onSubmitForm={submitFormHandler} />
      {listData.length !== 0 &&
        listData.map((el) => (
          <Print data={el} key={Math.random().toString()} />
        ))}
    </>
  );
}

export default App;
