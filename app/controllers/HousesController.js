import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
    constructor() {
        console.log('Battleship HousesController is Fully Operational')
        AppState.on('houses', this.drawHouses)
        this.getHouses()

    }


    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            console.error('❗', error)
            Pop.toast("Couldn't Get Houses, please try again later", 'error')
        }
    }

    drawHouses() {
        const houses = AppState.houses
        console.log('drawing houses');
        let houseListContent = ''
        houses.forEach(house => houseListContent += house.HouseCard)
        setHTML('houseslist', houseListContent)
    }


}