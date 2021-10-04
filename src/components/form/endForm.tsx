import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import style from './form.module.scss'

const EndForm: React.FunctionComponent = () => {
  const {userInfo, userPrivacy} = useSelector((state: RootState) => state)
  const displayData = {
    name: userInfo.name,
    role: userInfo.role,
    email: userInfo.email,
    password: userInfo.password,
    ReceivingUpdate: userPrivacy.isUpdatesChecked,
    ReceivingCommunication: userPrivacy.isComChecked,
  }
  useEffect(() => {
    /*
     * As a requirement we are expected to console.log the final data.
     */
    // eslint-disable-next-line no-console
    console.log('the final data is:', displayData)
  })
  return (
    <div className={style.done}>
      <h2>&#x2714;</h2>
      <p>
        Please verify your email address, you should have received an email from
        us already
      </p>
    </div>
  )
}

export default EndForm
