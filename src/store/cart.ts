import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { getCartItems } from '../services/cart.services'
import { CartType } from '../types/cart'
import { ProductCardType } from '../types/product'

interface ICart {
  cart: Partial<CartType>
}

const initialState: ICart = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Partial<CartType>>) => {
      state.cart = action.payload
    },
    addToCart: (state, action: PayloadAction<{ product: ProductCardType }>) => {
      state.cart = [...state.cart, action.payload.product]
    },
    removeProductFromCart: () => {},
  },
})

const setCartItems = createAsyncThunk<void, void>(
  'cart/set-cart',
  async (_, { dispatch }) => {
    const result = (await getCartItems()) as ProductCardType[]
    console.log('cart', result)
    dispatch(cartActions.setCart(result))
  },
)

export const cartActions = { ...cartSlice.actions, setCartItems }

export const cartSelectors = {
  usersCart: (state: RootState) => state.cart.cart,
}

export default cartSlice.reducer
