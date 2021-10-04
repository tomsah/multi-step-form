import {configureStore} from '@reduxjs/toolkit'
import currentStepReducer from './slices/formProgress'
import userInfoReducer from './slices/userInfo'
import userPrivacyReducer from './slices/userPrivacy'

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    userPrivacy: userPrivacyReducer,
    currentStep: currentStepReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
