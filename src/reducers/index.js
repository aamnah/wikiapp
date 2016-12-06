const initialState = {
  data: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLE':
      // do something
      break
    default:
      return state
  }
}

