import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import dishesReducer from '../slices/dishesSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    dishes: dishesReducer
  },
})