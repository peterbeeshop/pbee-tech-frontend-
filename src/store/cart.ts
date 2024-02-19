import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { RootState } from '.'
import { handleApiError } from '../errors/api-error'
import {
  addToCartService,
  getCartItemsService,
} from '../services/cart.services'
import { CartType } from '../types/cart'
import { ProductCardType } from '../types/product'
import { userActions } from './user'

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
    clearCart: (state) => {
      state.cart = []
    },
    removeProductFromCart: () => {},
  },
})

const setCartItems = createAsyncThunk<void, void>(
  'cart/set-cart',
  async (_, { dispatch }) => {
    try {
      const result = (await getCartItemsService()) as ProductCardType[]
      dispatch(cartActions.setCart(result))
    } catch (error) {
      handleApiError(error)
    }
  },
)

const addProductToCart = createAsyncThunk<void, { product: ProductCardType }>(
  'cart/add-to-cart',
  async (argument, { dispatch }) => {
    try {
      const result = await addToCartService(argument.product._id)
      dispatch(userActions.setUpdateCart({ cart: result }))
      toast.success('Item has been added to your cart.')
    } catch (error) {
      handleApiError(error)
    }
  },
)

export const cartActions = {
  ...cartSlice.actions,
  setCartItems,
  addProductToCart,
}

export const cartSelectors = {
  itemsInCart: (state: RootState) => state.cart.cart,
}

export default cartSlice.reducer
