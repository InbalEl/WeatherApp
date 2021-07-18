import CityButton from '../CityButton/CityButton'
import {useDispatch} from 'react-redux';
import './CitySelector.css'

function CitySelector(props) {

    const dispatch = useDispatch()

    function onClickHandler(city) {
        dispatch({type: 'SET_CITY', citySymbol: city.symbol})
    }

    return (
        <div className='city-buttons-row'>
            {
                props.cities.map((city) =>
                    <CityButton
                    onClick={onClickHandler}
                    key={city.name}
                    city={city}/>
            )}
        </div>
    )
}

export default CitySelector