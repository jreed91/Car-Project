const types = {
  ADD: 'ADD',
  UPDATE: 'UPDATE'
}

export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, payload: item}
    },
    update: (item) => {
      return {type: types.UPDATE, payload: item}
    }
}

const initialState = {
    cars: [
        {
            id: 1,
            make: 'Toyota',
            model: 'Corolla',
            year: '2004',
            trim: 'CE',
            icon: 'http://news.millertoyota.com/wp-content/uploads/sites/15/2014/03/14Corolla-ClassicSilverMetallic.png'
        },
        {
            id: 2,
            make: 'Toyota',
            model: 'Camry',
            year: '2015',
            trim: 'CE',
            icon: 'http://news.millertoyota.com/wp-content/uploads/sites/15/2014/03/14Corolla-ClassicSilverMetallic.png'
        }
    ]  
}


export const reducer = (state = initialState, action) => {
  
  const {cars} = state
  const {type, payload} = action

  switch(type) {
    case types.ADD: {
      return {
        ...state,
        cars: [payload, ...cars],
      }
    }
    case types.UPDATE: {
       return Object.assign({}, state, {

          cars: state.cars.map((car, index) => {
            if (car.id === action.payload.id) {
                                   console.log("This is being called")
              return Object.assign({}, car, action.payload)
            }
        return car
       })
    })}
    default: {
      return state
    }
  }
}