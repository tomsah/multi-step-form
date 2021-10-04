import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'

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
    <div>
      <h1>Step 3</h1>
      <p>
        Please verify your email address, you should have received an email from
        us already
      </p>
      <pre>{JSON.stringify(displayData, null, 2)}</pre>
    </div>
  )
}

export default EndForm
