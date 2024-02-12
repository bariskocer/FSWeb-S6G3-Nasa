const nasa_api_key = "DEMO_KEY";

const apiObj = {
    fetchData: async function (count) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasa_api_key}&count=${count}`, requestOptions)
            if (!response.ok) {
                throw new Error("Response'da HATA VAR !")
            }

            const resultJson = response.json();
            return resultJson;

        } catch (error) {
            console.log("error!!: ", error);
            return null
        }
}
}
export default apiObj;