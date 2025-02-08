import axios from "axios";

const API_URL = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "87349a96";
const APP_KEY = "f4ca35bf647ec6a0ef2405eddaa2a16e";
const EDAMAM_USER = "test-user";

export const fetcheRecipes = async (query, from = 0, to = 10) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                type: "public",
                q: query,
                app_id: APP_ID,
                app_key: APP_KEY,
                from,
                to
            },
            headers: {
                "Edamam-Account-User": EDAMAM_USER 
            }
        });

        return response.data.hits.map(hit => hit.recipe);
    } catch (error) {
        if (error.response) {
            console.error("API Error:", error.response.status, error.response.data);
        } else {
            console.error("Network/Server Error:", error.message);
        }
        return [];
    }
};
