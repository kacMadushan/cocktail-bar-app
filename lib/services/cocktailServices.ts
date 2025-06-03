import axiosServices from "../utils/axios"

export function getCocktail() {
    return axiosServices.get("/json/v1/1/random.php")
};

export function getCocktailByName(query: string) {
    return axiosServices.get(`/json/v1/1/search.php?s=${query}`)
};