const initialState = {
  loading: false,
  error: false,
  data: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQ_DATA':
      return Object.assign({}, state, {
        loading: true
      })
    case 'RECV_DATA':
      return Object.assign({}, state, {
        loading: false,
        error: false,
        data: action.payload
      })
    case 'RECV_ERROR':
      return Object.assign({}, state, {
        loading: false,
        error: true,
        data: action.payload
      })
    default:
      return state
  }
}
