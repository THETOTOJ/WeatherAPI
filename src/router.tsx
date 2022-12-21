import { Route, Routes, BrowserRouter} from 'react-router-dom'
import ProviderStore from './Components/Store/Store'
import Weather from './Components/Weather/results'
const Pages = () => {
  return (
    <ProviderStore>
        <Routes>
          <Route path='/WeatherAPI' element={<Weather/>} />
        </Routes>
    </ProviderStore> 
  )
}



export default Pages
