import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slices/loginSlice'
import dishesReducer from '../slices/dishesSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    dishes: dishesReducer
  },
})