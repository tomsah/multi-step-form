import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type UserInfo = {
  name: string
  role: string
  email: string
  password: string
}

const initialState: UserInfo = {
  name: '',
  role: '',
  email: '',
  password: '',
}

/*
 *  reducers An object of "case reducers". Key names will be used to generate actions.
 */

export const userInfoSLice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    updateUserInfo: (state: UserInfo, action: PayloadAction<UserInfo>) => {
      state.name = action.payload.name
      state.role = action.payload.role
      state.email = action.payload.email
      state.password = action.payload.password
    },
  },
})

export const {updateUserInfo} = userInfoSLice.actions

export default userInfoSLice.reducer
