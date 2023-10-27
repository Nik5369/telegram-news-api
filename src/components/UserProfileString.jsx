export const UserProfileString = ({ stringName, stringValue }) => {
  return (
    <div className="user-text-string">
      <div className="user-text-string-title">{stringName}</div>
      <div className="user-text-string-value">{stringValue}</div>
    </div>
  )
}
