import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slices/loginSlice'
import dishesReducer from '../slices/dishesSlice'
import restaurantReducer from '../slices/restaurantSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    dishes: dishesReducer,
    restaurant: restaurantReducer
  },
})