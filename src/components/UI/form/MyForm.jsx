import { useState } from 'react'
import cl from './MyForm.module.css'
import { setUserModal } from '../../../features/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
export const MyForm = ({ active, children, canClose, ...props }) => {
  const dispatch = useDispatch()
  const { userModal } = useSelector((state) => state.user)
  return (
    <div
      className={`${cl.backForFormCont} ${
        userModal || active ? cl.active : ''
      }`}
      onClick={() => {
        if (canClose) {
          dispatch(setUserModal(false))
        }
      }}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        className={cl.backForForm}
        {...props}
      >
        {children}
      </form>
    </div>
  )
}
