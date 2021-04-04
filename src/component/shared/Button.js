import React from 'react'
import { Button as MaterialButton, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    button: {
        backgroundColor: ({ bgColor }) => bgColor,
        width:150

    },
    buttonLabel: {
        color: 'white'
    }
})
const Button = (props) => {
    const { bgColor = '#4c003f',width='150px', classes = {}, children, variant = 'contained', className = '', ...rest } = props
    const buttonClasses = useStyles({ bgColor })
    return (
        <MaterialButton
            classes={{
                label: buttonClasses.buttonLabel,
                ...classes
            }}
            className={`${buttonClasses.button} ${className}`}
            variant={variant} {...rest}
        >{children}
        </MaterialButton>
    )
}
export default Button