import axios from "axios"
const BASE_URL = "https://api.adviceslip.com/advice"
const Api = {
    getRandomPhrase: async () =>{
        try {
            let json = await axios.get(BASE_URL)
            return json.data
        } catch (error) {
            console.log(error)
        }
    }
}