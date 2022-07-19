import axios from "axios"
const Api = {
    getRandomAdvice: async () => {
        try {
            const BASE_URL = "https://api.adviceslip.com/advice"
            let json = await axios.get(BASE_URL)
            return json.data
        } catch (error) {
            console.log(error)
        }
    },
    getAndTranslate: async (e) =>{
        try {
            const BASE_URL = `https://api.mymemory.translated.net/get?q=${e.advice}&langpair=en|pt-br`
            let json = await axios.get(BASE_URL) 
            return {id: e.id, advice:`“${json.data.responseData.translatedText}”`}
        } catch (error) {
            return {id: 404, advice: "Esses foram seus conselhos do dia! Volte amanhã para mais conselhos."}
        }
    }
}
export default Api;