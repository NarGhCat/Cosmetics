import React from 'react'
import { Button as MaterialButton, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    button: {
        border: ({ border }) => border,
        background:({ bgColor }) => bgColor,
        width:({ width }) => width

    },
    buttonLabel: {
        color: ({ labelColor }) => labelColor
    }
})
const Button = (props) => {
    
    const { border = '2px solid #4c003f', bgColor='#4c003f',labelColor='white', width='150px', classes = {},color='secondary', children, variant = 'outlined', className = '', ...rest } = props
   const buttonClasses = useStyles({ border ,bgColor,labelColor,width})
    return (
        <MaterialButton
            classes={{
                label: buttonClasses.buttonLabel,
                ...classes
            }}
            labelColor={labelColor}
            className={`${buttonClasses.button} ${className}`}
            variant={variant}
             {...rest}
        >{children}
        </MaterialButton>
    )
}
export default Button