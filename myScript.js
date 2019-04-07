function createCell(text, rate) {
  return `
    <span class="text">
      ${text}
    </span>

    <span class="rate">
      ${rate}
    </span>
  `;
}

const appendToTable = dataItem => {
  const container = document.getElementById("container");
  const div = document.createElement("div");

  div.setAttribute("class", "cell");
  div.innerHTML = createCell(dataItem.txt, dataItem.rate);

  container.appendChild(div);
};

function showData(data) {
  console.log("data?", data);

  data.forEach(appendToTable);
}

// promise based
// function fetchData() {
//   fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       showData(json);
//     });
// }

//async/await
const fetchData = async () => {
  const response = await fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );
  const data = await response.json();

  showData(data);
};
