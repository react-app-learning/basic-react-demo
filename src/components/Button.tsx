import React from 'react'

interface Props {
    children: string;
    color: 'primary' | 'success' | 'danger' | 'info';
    onClickButton: () => void;
}

const Button = ({children, color, onClickButton} : Props) => {
  return (
        <button type="button" className={"btn btn-" + color} onClick={onClickButton}>{children}</button>
  )
}

export default Button
