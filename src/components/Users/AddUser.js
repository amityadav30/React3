import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../UI/Wrapper";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);
  const [valid, setValid] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setValid({ title: "Error", content: "Enter the required details" });
      return;
    }

    setUsers([...users, { username: username, age: age }]);

    props.userList(username, age);

    setUsername("");
    setAge("");
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () => {
    setValid();
  };

  return (
    <Wrapper>
      {valid && (
        <ErrorModal
          title={valid.title}
          content={valid.content}
          error={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input value={username} onChange={usernameHandler} />

          <label>Age</label>
          <input value={age} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
