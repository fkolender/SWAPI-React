import axios from "axios"



const everyChar = async(state) => {
    const request = await axios.get('https://swapi.dev/api/people/')
    state(request.data.results)
    console.log(request.data.results)
}

const singleChar = async (id, state) => {

    const request = await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log(request)
}


export { everyChar, singleChar }