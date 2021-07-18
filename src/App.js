import './App.css';
import DaysRow from './components/DaysRow/DaysRow';
import CitySelector from './components/CitySelector/CitySelector';
import {useSelector} from 'react-redux';

function App() {
       
    const citySymbol = useSelector((state) => state.selectedCity);
    const cities = useSelector((state) => state.cities);
    const daysInfo = useSelector((state) => state.weather[citySymbol]);
    const cityName = useSelector(
      state => state.cities.find((city) => city.symbol === citySymbol).name
    );
    
    return (
    <div>
        <h1 className="page-title">{daysInfo.length}-day Forcast</h1>
        <h3 className="page-subtitle">{cityName}</h3>
        <DaysRow dayInfo={daysInfo}/>
        <CitySelector cities={cities}/>
    </div>
  );
}

export default App;
