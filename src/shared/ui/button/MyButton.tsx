import type { ButtonHTMLAttributes, FC } from 'react'
import cl from './MyButton.module.css'

export const MyButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button className={cl.MyButton} {...props}>
      {children}
    </button>
  )
}
