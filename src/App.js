import DisplayContent from "./components/Users/DisplayContent";
import AddUser from "./components/Users/AddUser";
import { useState } from "react";

function App() {
  const [List, setList] = useState([]);

  const userListHandler = (username, age) => {
    setList((prev) => {
      return [...prev, { username: username, age: age }];
    });
  };

  return (
    <>
      <AddUser userList={userListHandler} />
      <DisplayContent users={List} />
    </>
  );
}

export default App;
