import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartItems } from '../services/cart.services'
import { CartType } from '../types/cart'
import { ProductCardType } from '../types/product'

interface ICart {
  cart: CartType
}

const initialState: ICart = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartType>) => {
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
    dispatch(cartActions.setCart(result))
  },
)

export const cartActions = { ...cartSlice.actions, setCartItems }

export default cartSlice.reducer
