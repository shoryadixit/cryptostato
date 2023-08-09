const axios = require("axios");

const search = "falconheavy"
// Make a GET request to the SpaceX API
axios.get(`https://api.spacexdata.com/v3/rockets/${search}`)
    .then((response) => {
        // Check if the request was successful (status code 200)
        if (response.status === 200) {
            const rocketData = response.data;

            // Loop through each rocket and log its name and description
            // rocketData.forEach((rocket) => {
            //     if (rocket.rocket_id === search) {
            //         console.log("Rocket Name:", rocket.rocket_name);
            //         console.log("Description:", rocket.description);
            //         console.log("-------------------------------------------------");
            //     }
            // });

            console.log(rocketData);
        } else {
            throw new Error("Error occurred while retrieving data. Status code: " + response.status);
        }
    })
    .catch((error) => {
        console.error("An error occurred:", error.message);
    });

