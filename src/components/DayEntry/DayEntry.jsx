import './DayEntry.css'

function DayEntry(props) {

    return (
        <div className='single-day-container'>
            <h2>{props.info.day}</h2>
            <h4>{props.info.degrees}</h4>
            <p>{props.info.description}</p>
        </div>
    )
}

export default DayEntry