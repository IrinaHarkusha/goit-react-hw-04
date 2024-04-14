import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"

export async function fetchImg (query, page) {
    const params = {
        client_id: "cO5ZMrt3hKUJGKmlN8bGR8AbXstpx6Ed5j_x8Sze-Lg",
        query,
        page,
        per_page: 9,
    };


    const responce = await axios.get("search/photos", { params })
    return responce.data
}