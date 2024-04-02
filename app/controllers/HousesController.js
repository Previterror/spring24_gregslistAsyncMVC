import { housesService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"

export class HousesController {
    constructor() {
        console.log('Battleship HousesController is Fully Operational')
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



}