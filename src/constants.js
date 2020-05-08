export default {
    url: `https://${window.location.hostname}`,
    pagination: {
        offset: 0,
        number: 24,
        totalResults: 45
    },
    api: {
        url: process.env.REACT_APP_RECIPE_API_URL,
        urlImages: process.env.REACT_APP_RECIPE_API_URL_IMAGES,
        apiKey: process.env.REACT_APP_RECIPE_API_APIKEY
    }
}