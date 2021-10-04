import React, {useState} from 'react'
import form from '../app.module.scss'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {updateUserPrivacy} from '../../slices/userPrivacy'
import {updateCurrentStep} from '../../slices/formProgress'
import {RootState} from '../../store'

const UserPrivacyForm: React.FunctionComponent = () => {
  const userPrivacy = useSelector((state: RootState) => state.userPrivacy)
  const currentStep = useSelector((state: RootState) => state.currentStep.step)
  const [isUpdatesChecked, setIsUpdatesChecked] = useState<boolean>(
    () => userPrivacy.isUpdatesChecked,
  )
  const [isComChecked, setIsComChecked] = useState<boolean>(
    () => userPrivacy.isComChecked,
  )

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      updateUserPrivacy({
        isUpdatesChecked,
        isComChecked,
      }),
    )
    dispatch(updateCurrentStep(currentStep + 1))
    history.push('./done')
  }
  return (
    <div>
      <h1>Step 2</h1>
      <form name="multi-step-form" onSubmit={handleSubmit}>
        <div className={form.checkbox}>
          <input
            type="checkbox"
            name="updates"
            value="updates"
            checked={isUpdatesChecked}
            onChange={() => setIsUpdatesChecked(!isUpdatesChecked)}
          />
          <label htmlFor="updates">:Receive updates</label>
        </div>

        <div className={form.checkbox}>
          <input
            type="checkbox"
            name="communication"
            value="communication"
            checked={isComChecked}
            onChange={() => setIsComChecked(!isComChecked)}
          />
          <label htmlFor="communication">:Receive communication</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default UserPrivacyForm
