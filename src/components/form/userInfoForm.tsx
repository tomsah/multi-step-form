import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {updateUserInfo} from '../../slices/userInfo'
import {updateCurrentStep} from '../../slices/formProgress'
import {RootState} from '../../store'
import form from './form.module.scss'
import classnames from 'classnames'

interface FormValues {
  name: string
  role: string
  email: string
  password: string
}

const UserInfoForm: React.FunctionComponent = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo)
  const currentStep = useSelector((state: RootState) => state.currentStep.step)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [formValues, setFormValues] = useState<FormValues>(() => ({
    ...userInfo,
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  useEffect(() => {
    const {name, role, email, password} = formValues
    const noEmptyField = !name || !role || !email || !password

    noEmptyField ? setIsDisabled(true) : setIsDisabled(false)
  }, [formValues])

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      updateUserInfo({
        ...formValues,
      }),
    )

    dispatch(updateCurrentStep(currentStep + 1))
    history.push('./privacy')
  }

  return (
    <div className={form['form-outer']}>
      <div className={classnames(form.page, form['slide-page'])}>
        <div className={form.title}>Step 1</div>
        <form name="multi-step-form" onSubmit={handleSubmit}>
          <div className={form.field}>
            <label htmlFor="name" className={form.label}>
              name:
              <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              pattern="([^\s][A-z0-9À-ž\s]+)"
              title="The name input only takes letters and numbers"
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className={form.field}>
            <label htmlFor="role" className={form.label}>
              Role:
              <span>*</span>
            </label>
            <input
              type="text"
              name="role"
              id="role"
              pattern="[a-zA-Z0-9\s]+"
              title="The role input only takes letters and numbers"
              value={formValues.role}
              onChange={handleChange}
            />
          </div>
          <div className={form.field}>
            <label htmlFor="email" className={form.label}>
              email:
              <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className={form.field}>
            <label htmlFor="password" className={form.label}>
              Password:
              <span>*</span>
            </label>

            <input
              type="password"
              name="password"
              id="password"
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])\S{9,}"
              title="You password should be minimum 9 characters containing 1 number and 1 capital letter "
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className={classnames(form['field'], form['btns'])}>
            <button
              type="submit"
              value="Submit"
              id="submit"
              className={form.submit}
              disabled={isDisabled}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserInfoForm
