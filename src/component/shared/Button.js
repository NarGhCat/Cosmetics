import React from "react";
import { Button as MaterialButton, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  button: {
    border: ({ border }) => border,
    background: ({ bgColor }) => bgColor,
    width: ({ width }) => width,
  },
  buttonLabel: {
    color: ({ labelcolor }) => labelcolor,
  },
});
const Button = (props) => {
  const {
    border = "2px solid #4c003f",
    bgColor = "#4c003f",
    labelcolor = "white",
    width = "150px",
    classes = {},
    children,
    variant = "outlined",
    className = "",
    ...rest
  } = props;
  const buttonClasses = useStyles({ border, bgColor, labelcolor, width });
  return (
    <MaterialButton
      classes={{
        label: buttonClasses.buttonLabel,
        ...classes,
      }}
      labelcolor={labelcolor}
      className={`${buttonClasses.button} ${className}`}
      variant={variant}
      {...rest}
    >
      {children}
    </MaterialButton>
  );
};
export default Button;
