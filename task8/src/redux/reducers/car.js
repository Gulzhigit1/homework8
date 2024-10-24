const ADD_CAR = 'ADD_CAR';
const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const RESET_NUM = 'RESET_NUM';
const ADDFIVE_NUM = 'ADDFIVE_NUM';
const MINUSFIVE_NUM ='MINUSFIVE_NUM';

const initState = {
    num: 0,
    cars:[
        {
            model: "BMW",
            year: 2017
        },
        {
            model: "Honda",
            year: 2015
        },
        {
            model: "Audi",
            year: 2010
        },
        {
            model: "Toyota",
            year: 2020
        },
        {
            model: "Mercedes",
            year: 2016
        }
    ]
}


export default (state = initState, action) => {
    switch (action.type) {
        case ADD_CAR:{
            return {
                ...state,
                cars: [
                    action.car,
                    ...state.cars
                ]
            }
        }

        case INCREMENT_NUM :{
            return{
                ...state,
                num: state.num < 15 ? state.num +1 : state.num
            }
        }
        case DECREMENT_NUM :{
            return{
                ...state,
                num: state.num > 0 ? state.num -1  : state.num
            }
        }
        case RESET_NUM:{
            return{
                ...state,
                num: 0
            }
        }
        case ADDFIVE_NUM: {
            return {
                ...state,
                num: (state.num + 5 > 15) ? 15 : state.num + 5
            };
        }

        case MINUSFIVE_NUM :{
            return{
                ...state,
                num: (state.num - 5 < 0 ) ? 0 : state.num - 5
            }
        }

        default: return state
    }
};


export const addCar = (car) =>{
    return (dispatch) =>{
        dispatch({type: ADD_CAR, car})
    }
};

export const incrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: INCREMENT_NUM})
    }
};

export const decrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: DECREMENT_NUM})
    }
}

export const resetNum = () =>{
    return (dispatch) =>{
        dispatch({type: RESET_NUM})
    }
}

export const addfiveNum = () =>{
    return (dispatch) =>{
        dispatch({type: ADDFIVE_NUM})
    }
}

export const minusfiveNum = () =>{
    return (dispatch) =>{
        dispatch({type: MINUSFIVE_NUM})
    }
}