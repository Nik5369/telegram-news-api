import { v4 as uuidv4 } from 'uuid'
import { UserProfileString } from './UserProfileString'
import { MyButton } from './UI/button/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { setUserModal } from '../features/UserSlice'
export const UserProfile = () => {
  const { userValues } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="change-user-info-btn">
        <MyButton
          onClick={() => {
            dispatch(setUserModal(true))
          }}
        >
          Изменить данные
        </MyButton>
      </div>
      {Object.entries(userValues).map((el) => {
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
