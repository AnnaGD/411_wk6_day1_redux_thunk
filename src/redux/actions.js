// const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const deleteMake = (index) => {
    return {
        type: 'DELTE_MAKE',
        value: index
    }
}

export const fetchMakes = () => {
    return dispatch => {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
            .then(res => res.json())
            .then(response => {
                const action = {
                    type: 'FETCH_MAKES',
                    value: response.Results
                }
                dispatch(action)
            })
    }
}
