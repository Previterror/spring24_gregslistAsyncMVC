import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"


class HousesService {
    async createHouse(houseData) {
        const response = await api.post('api/houses', houseData)
        console.log('🔧created', response);
    }


    async getHouses() {
        // console.log('🔧 getting houses')
        const response = await api.get('api/houses')
        // console.log('🔧 response', response)
        const houses = response.data.map(house => new House(house))
        AppState.houses = houses
        console.log('appstate', AppState.houses);
    }




}

export const housesService = new HousesService