import DayEntry from "../DayEntry/DayEntry";
import './DaysRow.css'
function DaysRow(props) {
    
    return (
        <div className='days-row-container'>
            {props.dayInfo.map((singelDay, idx) => <DayEntry key={idx} info={singelDay}/>)}
        </div>
    )
}

export default DaysRow
