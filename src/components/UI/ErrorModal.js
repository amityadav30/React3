import Button from "./Button";
import Card from "./Card";
import Wrapper from "./Wrapper";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const backDropClick = () => {
    props.error();
  };
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={backDropClick}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={backDropClick}>Close</Button>
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
