import axios from 'axios'

export const weatherAPI = () =>{
    const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    }
    const url  = 'api.openweathermap.org/data/2.5/weather?q=Dehradun&appid=2712cea70c7dfa5a562cecd318ac7892&units=metric'
    const { data } =  axios.get(url, {}, options)
    
    return {
        type: "Weather_Data",
        payload: data
    }
}