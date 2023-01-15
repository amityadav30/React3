import React from "react";
import classes from "./DisplayContent.module.css";
import Card from "../UI/Card";

const DisplayContent = (props) => {
  console.log("BEFORE USERSSSSS", props.users);
  return (
    <Card classname={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.username} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DisplayContent;
