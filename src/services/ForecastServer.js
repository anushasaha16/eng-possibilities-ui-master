import axios from 'axios'


const REST_API_URL = "http://localhost:8080/api/v1/forecast"


class ForecastService {
    getInvestmentOptions() {
        return axios.get(REST_API_URL);    
    }

    getForecast() {
        return axios.post(REST_API_URL); 
    }
}

export default new ForecastService();