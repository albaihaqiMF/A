var requestOptions = {
  method: "GET",
  redirect: "follow",
};

var url =
  "https://api.weatherapi.com/v1/forecast.json?key=57a7c45ba0284608b7c232259222312&q=Jakarta&days=5&aqi=no&alerts=no";

var weatheropenapi =
  "https://api.openweathermap.org/data/2.5/forecast?q=Jakarta,id&appid=ba29f9ea6659a1a83fca91fa309ea1ac";

var dataJSON;

// function getAPI(url, options) {
//   return fetch(url, options).then((response) => {
//     return response
//       .json()
//       .then((data) => {
//         // console.log(data);
//         forecast = data.forecast;
//         console.log("data", dataJSON);

//         forecast.forEach(element => {
//             console.log(element.forecastday.day.avgtemp_c)
//         });
//         return data;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// }

// // getAPI(url, requestOptions).then((r) => {
// //   data = r;
// // });

// getAPI(url, requestOptions);

// console.log("data", dataJSON);

// // console.log(getAPI(url, requestOptions).json());

// // console.log("forecast", forecast);
// const logBtn = document.getElementById("log");
// logBtn.addEventListener("click", fetchData);

async function fetchData() {
  const response = await fetch(weatheropenapi);
  const data = await response.json();

  const forecast = data.list;

  forecast.forEach(obj => {

    console.log(obj.dt_txt, obj.main.temp)
  });
}

fetchData();
