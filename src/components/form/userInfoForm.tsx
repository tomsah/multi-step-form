import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {updateUserInfo} from '../../slices/userInfo'
import {updateCurrentStep} from '../../slices/formProgress'
import {RootState} from '../../store'

const UserInfoForm: React.FunctionComponent = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo)
  const currentStep = useSelector((state: RootState) => state.currentStep.step)

  const [name, setName] = useState<string>(() => userInfo.name)
  const [role, setRole] = useState<string>(() => userInfo.role)
  const [email, setEmailField] = useState<string>(() => userInfo.email)
  const [password, setPasswordField] = useState<string>('')

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      updateUserInfo({
        name,
        role,
        email,
        password,
      }),
    )

    dispatch(updateCurrentStep(currentStep + 1))
    history.push('./privacy')
  }

  return (
    <div>
      <h1>Step 1</h1>
      <form name="multi-step-form" onSubmit={handleSubmit}>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmailField(e.target.value)}
        />
        <label htmlFor="email">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPasswordField(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default UserInfoForm
