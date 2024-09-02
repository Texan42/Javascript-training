import { Button } from "@mui/material";

function Buttons(props) {
  return (
    <Button
      onClick={props.handleClick}
      variant="contained"
      disabled={props.disabled}
      color="secondary"
      size="large"
    >
      {props.children}
    </Button>
  );
}

export default Buttons;
