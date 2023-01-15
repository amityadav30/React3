import Button from "./Button";
import Card from "./Card";
import Wrapper from "./Wrapper";
import classes from "./ErrorModal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.content}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const backDropClick = () => {
    //triggered onClick
    props.error(); //function is called onClick which is passed as a prop
  };
  return (
    <Wrapper>
      {ReactDom.createPortal(
        <Backdrop onClick={backDropClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay
          title={props.title}
          content={props.content} //Title content  input le rahe hai
          onClick={backDropClick} //Bhej rahe hai
        />,
        document.getElementById("overlay-root")
      )}
    </Wrapper>
  );
};

export default ErrorModal;
