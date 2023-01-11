import { API } from "../utils/constants";

export async function getPokemons(endpointUrl) {
    try {
        const url = `${API}/pokemon?limit=20&offset=0`
        const response = await fetch(endpointUrl || url)
        const data = await response.json()
        return data
    } 
    catch {
        throw console.error();
    }
}

export async function getPokemonDetailsByUrlAPi(url) {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    }
    catch  {
        throw console.error();
    }
}

export async function getPokemonDetailsApi(id) {
    try {
        const url = `${API}/pokemon/${id}`
        const response = await fetch(url)
        const result = await response.json()
        return result
    }
    catch (error) {
        throw error
    }
}