import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type CurrentStep = {
  step: number
}

const initialState: CurrentStep = {
  step: 1,
}

/*
 *  reducers An object of "case reducers". Key names will be used to generate actions.
 */

export const currentStepSLice = createSlice({
  name: 'currentStep',
  initialState,
  reducers: {
    updateCurrentStep: (
      state: CurrentStep,
      action: PayloadAction<CurrentStep['step']>,
    ) => {
      state.step = action.payload
    },
  },
})

export const {updateCurrentStep} = currentStepSLice.actions

export default currentStepSLice.reducer
