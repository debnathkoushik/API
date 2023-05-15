var request = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var apikey = "bFkSgkYZj6TSv7HWQePHy6h76RUmfM6jy1LfhUdU";

//initialises the request object
request.open("GET", url + apikey);

//sends the request to the server
request.send();


request.addEventListener("load", () => {
    if (request.status == 200 && request.readyState == 4) {
        var response = JSON.parse(request.responseText);
        document.getElementById("title").textContent = response.title;
        document.getElementById("date").textContent = response.date;
        document.getElementById("APOD").src = response.hdurl;
        document.getElementById("explanation").textContent = response.explanation;
    }
})
