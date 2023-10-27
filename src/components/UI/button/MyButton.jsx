import cl from './MyButton.module.css'
export const MyButton = ({ children, ...props }) => {
  return (
    <button className={cl.MyButton} {...props}>
      {children}
    </button>
  )
}
