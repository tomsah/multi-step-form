import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type UserPrivacy = {
  isUpdatesChecked: boolean
  isComChecked: boolean
}

const initialState: UserPrivacy = {
  isUpdatesChecked: false,
  isComChecked: false,
}

/*
 *  reducers An object of "case reducers". Key names will be used to generate actions.
 */

export const userPrivacySLice = createSlice({
  name: 'userPrivacy',
  initialState,
  reducers: {
    updateUserPrivacy: (
      state: UserPrivacy,
      action: PayloadAction<UserPrivacy>,
    ) => {
      state.isComChecked = action.payload.isComChecked
      state.isUpdatesChecked = action.payload.isUpdatesChecked
    },
  },
})

export const {updateUserPrivacy} = userPrivacySLice.actions

export default userPrivacySLice.reducer
