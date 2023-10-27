import { v4 as uuidv4 } from 'uuid'
import { UserProfileString } from './UserProfileString'
import { MyButton } from './UI/button/MyButton'
export const UserProfile = ({ user,setChangeUserInfoModal }) => {
  return (
    <div>
      <div className="change-user-info-btn">

      <MyButton onClick={() => {setChangeUserInfoModal(true)}}>Изменить данные</MyButton>
      </div>
      {Object.entries(user).map((el) => {
        const stringName = el[0].split('_').join(' ')
        const stringValue = el[1]
        const key = uuidv4()
        return (
          <UserProfileString
            key={key}
            stringName={stringName}
            stringValue={stringValue}
          />
        )
      })}
    </div>
  )
}
