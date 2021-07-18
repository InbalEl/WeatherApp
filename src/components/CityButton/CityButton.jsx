import './CityButton.css'

function CityButton(props) {
    return (
        <button className='city-button'
        onClick={() => props.onClick(props.city)}>
            {props.city.name}
        </button>
    )
}

export default CityButton