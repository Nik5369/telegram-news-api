import { useState } from 'react';
import cl from './MyForm.module.css'
export const MyForm = ({children, active, canClose, setActive, ...props }) => {
  
  return (
    <div className={`${cl.backForFormCont} ${active ? cl.active : ''}`} onClick={() => {
      if(canClose){
        setActive(false)
      }}
    }>

      <form  onClick={(e) => e.stopPropagation()}
 className={cl.backForForm} {...props}>{children}</form>
    </div>
  )
}