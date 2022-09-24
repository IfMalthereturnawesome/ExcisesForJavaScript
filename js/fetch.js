

function fetchUrl(input1) {
  let url = "https://jsonplaceholder.typicode.com/users/" + input1;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      name.innerText = `Name: ${data.name}`;
      phone.innerText = `Phone: ${data.phone}`;
      street.innerText = `Street: ${data.address.street}`;
      city.innerText = `City: ${data.address.city}`;
      zipcode.innerText = `Zip: ${data.address.zipcode}`;
      geo.innerText = `Geo (lat,lng): ${data.address.geo.lat}, ${data.address.geo.lng}`;
    });
}
// create a function that takes an input and fetches the data from the url in a table
function fetchAll() {
  let url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      let table = document.getElementById("table");
      if (data.length > 0) {
     
         for (let i = 0; i < data.length; i++) {
           let row = table.insertRow(i + 1);
           let cell1 = row.insertCell(0);
           let cell2 = row.insertCell(1);
           cell1.innerHTML = data[i].name;
           cell2.innerHTML = data[i].phone;
         }
      } else if(data.length == 0) {
        table.innerHTML = "No data found";
      }
     
    }
    );} 