import React from 'react'
import {NavLink} from 'react-router-dom'
import form from '../app.module.scss'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import style from './formProgress.module.scss'

const StepProgress: React.FunctionComponent = () => {
  const currentStep = useSelector((state: RootState) => state.currentStep.step)

  return (
    <div className={style['progress-bar']}>
      <div className={style.step}>
        <NavLink to="/" activeClassName={style['active']}>
          <p>User Info</p>
          <div className={style.bullet}>
            <span>1</span>
          </div>
        </NavLink>
      </div>

      <div className={style.step}>
        <NavLink
          to="/privacy"
          className={currentStep < 2 ? form['disabled-link'] : style['active']}>
          <p>Privacy</p>
          <div className={style.bullet}>
            <span>2</span>
          </div>
        </NavLink>
      </div>
      <div className={style.step}>
        <NavLink
          to="/done"
          className={currentStep < 3 ? form['disabled-link'] : style['active']}>
          <p>Done</p>
          <div className={style.bullet}>
            <span>3</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default StepProgress
