import { v4 as uuidv4 } from 'uuid'
import { UserProfileString } from './UserProfileString'
export const UserProfile = ({ user }) => {
  return (
    <div>
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
