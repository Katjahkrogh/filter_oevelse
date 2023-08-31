const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

// Vælger alle knapperne fra vores HTML
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", clickBtn);
});

function clickBtn(evt) {
  console.log("hej", evt.target.dataset.filter);
  let whatFilter;
  if (evt.target.dataset.filter === "only_electric") {
    whatFilter = onlyElectric;
  } else if (evt.target.dataset.filter === "moreThanTwo") {
    whatFilter = moreThanTwoSeats;
  } else if (evt.target.dataset.filter === "electricJonas") {
    whatFilter = ownedByJonas;
  }
  if (evt.target.dataset.filter === "all") {
    showTheseVehicles(vehicles);
  } else {
    showTheseVehicles(vehicles.filter(whatFilter));
  }
}

// Filtrering der viser alle el drevne fartøjer
function onlyElectric(vehicles) {
  if (vehicles.isElectric) {
    return true;
  } else {
    return false;
  }
}

// Filtrering der viser alle fartøjer med mere end 2 sæder
function moreThanTwoSeats(vehicles) {
  if (vehicles.passengers > 2) {
    return true;
  } else {
    return false;
  }
}

// Filtrering der viser alle el-drevne fartøjer ejet af Jonas
function ownedByJonas(vehicles) {
  if (vehicles.ownedBy === "Jonas" && vehicles.isElectric) {
    return true;
  } else {
    return false;
  }
}

// Filtrering der viser alle rugbrøds drevne fartøjer med plads til mere end en.
function selfDrivenMoreThanOne(vehicles) {
  if (vehicles.fuel === "rugbrød" && vehicles.passengers > 1) {
    return true;
  } else {
    return false;
  }
}

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
  });
}
