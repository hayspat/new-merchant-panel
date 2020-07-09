export enum sliceTypes {
  products = 'products',
  orders = 'orders',
  auth = 'auth',
}

export enum sliceNames {
  productList = 'productList',
  orderList = 'orderList',
  auth = 'auth',
}

export enum thunkActionTypes {
  getProducts = 'products/getProducts',
  getOrders = 'orders/searchOrderAsync',
  insertAddress = 'address/insertAddress',
  getAddressList = 'address/getAddressList',
  registerUser = 'auth/registerUser',
  validateUser = 'auth/validateUser',
  userDetails = 'auth/userDetails',
  createForgetPasswordRequest = 'auth/createForgetPasswordRequest',
  validateForgetPasswordRequest = 'auth/validateForgetPasswordRequest',
  updateForgetPasswordRequest = 'auth/updateForgetPasswordRequest',
}
