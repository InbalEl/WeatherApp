import { createStore } from 'redux'

const initialState = {
    selectedCity: 'HAF',
    cities: [
        {name: 'Haifa', symbol: 'HAF'},
        {name: 'Tel-Aviv', symbol: 'TLV'},
        {name: 'Jerusalem', symbol: 'JLM'}
    ],
    weather: {
        'HAF' : [{day:'Sunday', degrees:'28', description:'Nice and sunny'},
                 {day:'Monday', degrees:'24', description:'Nice and sunny'},
                 {day:'Tuesday', degrees:'22', description:'Clear and cool'},
                 {day:'Wednesday', degrees:'29', description:'Nice and sunny'},
                 {day:'Thursday', degrees:'31', description:'Very hot'}],
        
        'TLV' : [{day:'Sunday', degrees:'31', description:'Very hot'},
                 {day:'Monday', degrees:'28', description:'Nice and sunny'},
                 {day:'Tuesday', degrees:'25', description:'Perfect day'},
                 {day:'Wednesday', degrees:'27', description:'Nice and sunny'},
                 {day:'Thursday', degrees:'34', description:'Satan\'s balls'}],
        
        'JLM' : [{day:'Sunday', degrees:'25', description:'Nice and sunny'},
                 {day:'Monday', degrees:'23', description:'Nice and sunny'},
                 {day:'Tuesday', degrees:'21', description:'Clear and cool'},
                 {day:'Wednesday', degrees:'18', description:'A Bit Cold'},
                 {day:'Thursday', degrees:'19', description:'A Bit Cold'}]
    }
}

function reducer(state, action) {
    if (action.type === 'SET_CITY') {
        return { ...state, selectedCity: action.citySymbol }
    }

    return state
}

export default createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())