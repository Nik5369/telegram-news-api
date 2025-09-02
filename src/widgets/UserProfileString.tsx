import type { FC } from 'react'

type TProps = {
  fieldKey: string
  fieldValue: string
}

export const UserProfileString: FC<TProps> = ({ fieldKey, fieldValue }) => {
  return (
    <div className="user-text-string">
      <div className="user-text-string-title">{fieldKey}</div>
      <div className="user-text-string-value">{fieldValue}</div>
    </div>
  )
}
