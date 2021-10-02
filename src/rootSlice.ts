import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type DefaultState = {
  name: string
  email: string
  password: string
  receive_update: boolean
  receive_com: boolean
}

const initialState: DefaultState = {
  name: '',
  email: '',
  password: '',
  receive_update: false,
  receive_com: false,
}

/*
 *  reducers An object of "case reducers". Key names will be used to generate actions.
 */

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setName: (state: DefaultState, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmail: (state: DefaultState, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state: DefaultState, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setReceivedUpdate: (
      state: DefaultState,
      action: PayloadAction<boolean>,
    ) => {
      state.receive_update = action.payload
    },
    setReceivedCom: (state: DefaultState, action: PayloadAction<boolean>) => {
      state.receive_com = action.payload
    },
  },
})

export const reducer = rootSlice.reducer
export const {
  setName,
  setEmail,
  setPassword,
  setReceivedUpdate,
  setReceivedCom,
} = rootSlice.actions
