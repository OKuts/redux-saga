const initial = {
  people: [],
  planets: []
}

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        people: [...state.people, ...action.payload]
    }

    case 'GET_PLANETS':
      return {
        ...state,
        planets: [...state.planets, ...action.payload]
      }
    default: return state;
  }
}
