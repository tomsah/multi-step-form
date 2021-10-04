import React, {useState} from 'react'
import form from './form.module.scss'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {updateUserPrivacy} from '../../slices/userPrivacy'
import {updateCurrentStep} from '../../slices/formProgress'
import {RootState} from '../../store'
import classnames from 'classnames'

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
    <div className={form['form-outer']}>
      <div className={classnames(form.page, form['slide-page'])}>
        <div className={form.title}>Step 2</div>
        <form name="multi-step-form" onSubmit={handleSubmit}>
          <div className={form.field}>
            <input
              type="checkbox"
              name="updates"
              value="updates"
              checked={isUpdatesChecked}
              onChange={() => setIsUpdatesChecked(!isUpdatesChecked)}
            />
            <label htmlFor="updates" className={form['label-checkbox']}>
              Receive updates about Tray.io by email
            </label>
          </div>

          <div className={form.field}>
            <input
              type="checkbox"
              name="communication"
              value="communication"
              checked={isComChecked}
              onChange={() => setIsComChecked(!isComChecked)}
            />
            <label htmlFor="communication" className={form['label-checkbox']}>
              Receive communication by email for other products created by the
              Tray.io team
            </label>
          </div>

          <div className={classnames(form.field, form.btns)}>
            <button
              id="backButton"
              value="backButton"
              className={form.submit}
              onClick={() => history.goBack()}>
              back
            </button>
          </div>

          <div className={classnames(form.field, form.btns)}>
            <button
              id="submit2"
              type="submit"
              value="Submit2"
              className={form.submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserPrivacyForm
