import React from 'react'
import {Link} from 'react-router-dom'
import form from '../app.module.scss'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'

const StepProgress: React.FunctionComponent = () => {
  const currentStep = useSelector((state: RootState) => state.currentStep.step)

  return (
    <ul>
      <li>
        <Link to="/">User Info</Link>
      </li>
      <li>
        <Link
          to="/privacy"
          className={currentStep < 2 ? form['disabled-link'] : undefined}>
          Privacy
        </Link>
      </li>
      <li>
        <Link
          to="/done"
          className={currentStep < 3 ? form['disabled-link'] : undefined}>
          Done
        </Link>
      </li>
    </ul>
  )
}

export default StepProgress
