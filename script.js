const API_KEY = "ac4703d8a7f14989b79164444242011";

async function fetchWeather() {
    const location = document.getElementById("location").value;
    const weatherInfoDiv = document.getElementById("weather-info");
    
    if (!location) {
        alert("Please enter a location!");
        alert("Then you will contiune.....")
        return;
    }

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Unable to fetch weather data.");
        }
        
        const data = await response.json();
        displayWeather(data);
        weatherInfoDiv.style.display = "block";
    } catch (error) {
        alert("Error: " + error.message);
        weatherInfoDiv.style.display = "none";
    }
}

function displayWeather(data) {
    document.getElementById("location-name").innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temperature").innerText = data.current.temp_c;
    document.getElementById("condition").innerText = data.current.condition.text;
    document.getElementById("humidity").innerText = data.current.humidity;

    updateBackground(data.current.condition.text);
}

function updateBackground(condition) {
    const body = document.body;

    const lowerCondition = condition.toLowerCase();

    if (lowerCondition.includes("snow")) {
        body.style.backgroundImage = "url('https://images.wallpapersden.com/image/download/forest-house-covered-in-snow-4k_bGdnaGuUmZqaraWkpJRpZW5qrWdoZWg.jpg')";
    } else if (lowerCondition.includes("rain") || lowerCondition.includes("drizzle")) {
        body.style.backgroundImage = "url('https://wallpapers.com/images/hd/rain-4k-a2id6opqg50o1dc1.jpg')";
    } else if (lowerCondition.includes("thunder") || lowerCondition.includes("storm")) {
        body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmLZt9KxMo2xsoyRpyzx6mZmjdKvD5AMz4w&s')";
    } else if (lowerCondition.includes("mist") || lowerCondition.includes("fog")) {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?cs=srgb&dl=pexels-eberhardgross-1367192.jpg&fm=jpg')";
    } else if (lowerCondition.includes("clear")) {
        body.style.backgroundImage = "url('https://c1.wallpaperflare.com/preview/998/702/367/clouds-cumulus-cumulus-clouds-summer-day.jpg')";
    } else if (lowerCondition.includes("cloud")) {
        if (lowerCondition.includes("partly")) {
            body.style.backgroundImage = "url('https://images.unsplash.com/photo-1509803874385-db7c23652552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWR8ZW58MHx8MHx8fDA%3D')";
        } else {
            body.style.backgroundImage = "url('https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?cs=srgb&dl=pexels-pixabay-314726.jpg&fm=jpg')";
        }
    } else if (lowerCondition.includes("haze")) {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1507369512168-9b7de6ec6be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D')";
    } else if (lowerCondition.includes("smoke")) {
        body.style.backgroundImage = "url('https://media.istockphoto.com/id/1017212854/photo/bizarre-forms-of-white-powder-explosion-cloud-against-black-background.jpg?s=1024x1024&w=is&k=20&c=yPYA0NMG8wTNp5hWOg2PnDmO0CNCZOdDxtM-nAYgu-U=')";
    } else if (lowerCondition.includes("wind") || lowerCondition.includes("breeze")) {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1444962668425-360f59fa2c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2luZHxlbnwwfHwwfHx8MA%3D%3D')";
    } else if (lowerCondition.includes("sand") || lowerCondition.includes("dust")) {
        body.style.backgroundImage = "url('https://plus.unsplash.com/premium_photo-1680307335397-d0eba67adcdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZHxlbnwwfHwwfHx8MA%3D%3D')";
    } else if (lowerCondition.includes("sunny") || lowerCondition.includes("sun")) {
            body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534629938736-b1b076531d3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D')";
    } else if (lowerCondition.includes("overcast")) {
        body.style.backgroundImage = "url('https://images.unsplash.com/44/9s1lvXLlSbCX5l3ZaYWP_hdr-1.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    } else {
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "#000000";
    }

    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
}
