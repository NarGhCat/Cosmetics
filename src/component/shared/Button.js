import React from 'react'
import { Button as MaterialButton, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    button: {
        border: ({ borderColor }) => borderColor,
        width:150

    },
    buttonLabel: {
        color: '#4c003f'
    }
})
const Button = (props) => {
    
    const { borderColor = '2px solid #4c003f',width='150px', classes = {},color='secondary', children, variant = 'outlined', className = '', ...rest } = props
   const buttonClasses = useStyles({ borderColor })
    return (
        <MaterialButton
            classes={{
                label: buttonClasses.buttonLabel,
                ...classes
            }}
            color={color}
            className={`${buttonClasses.button} ${className}`}
            variant={variant}
             {...rest}
        >{children}
        </MaterialButton>
    )
}
export default Button