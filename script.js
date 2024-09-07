// Function to update the clock hands
function updateClock() {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('min');
    const secondHand = document.getElementById('sec');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate degree for each hand
    const hoursDegree = (hours % 12) * 30 + minutes * 0.5;
    const minutesDegree = minutes * 6;
    const secondsDegree = seconds * 6;

    // Apply rotation to the hands
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}

// Function to update the date
function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are 0-indexed
    const year = now.getFullYear();

    // Format the date as DD-MM-YYYY
    const formattedDate = `${day}-${month}-${year}`;
    dateElement.textContent = formattedDate;
}

// Function to fetch and update the weather (temperature)
async function updateWeather() {
    const weatherElement = document.getElementById('weather');
    const apiKey = 'b0ba3f62442858ad65428e79adfa6d71'; // Replace with your OpenWeatherMap API key
    const city = 'Pune'; // Replace with your city name
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

    try {
      const response = await fetch(url);
      const data = await response.json();
      const temp = data.main.temp;

      // Display temperature in Celsius
      weatherElement.textContent = `Temp: ${temp}°C`;
    } catch (error) {
    //   weatherElement.textContent = 'Error fetching weather';
      console.error(error);
    }
}
// Call updateClock every second
setInterval(() => {
    updateClock();
    updateDate();
    updateWeather();
    }, 1000);

// Initial call to set time and date immediately
updateClock();
updateDate();
updateWeather();
