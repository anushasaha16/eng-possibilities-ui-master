import axios from 'axios'

const REST_API_URL = "http://localhost:8080/api/v1/forecast"

class ForecastService {
    getInvestmentOptions() {
        return axios.get(REST_API_URL);    
    }

    getForecast(allocations) {
        var req = JSON.stringify(allocations)
        req = req.replace("FinancialServices", "Financial Services");
        req = req.replace("RealEstate", "Real Estate");
        console.log(req)
        const request = JSON.parse(req)
        return axios.post(REST_API_URL, request); 
    }
}

export default new ForecastService();
