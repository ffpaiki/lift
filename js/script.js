const lifts = document.querySelectorAll(".lift.selected");
const floor = document.querySelectorAll(".floor");

/***
 * List to save the floor location of each elevator
 */
let listCurrentFloor = [];

lifts.forEach((element) => {
  listCurrentFloor.push(element.id.substr(0, 1));
});

/***
 * Method to choose random lift when there are more than one lift
 * with the same distance to the requesting floor.
 */
function randomLift() {
  const t = Math.floor(Math.random() * 3);
  return t;
}

/***
 * Method to generate all floors and elevators during initialization
 */
function init() {
  const building = document.querySelector(".building");
  const divFloorWrapper = document.createElement("div");
  divFloorWrapper.classList.add("floor-wrapper");

  const divFloor = document.createElement("div");
  divFloor.classList.add("floor");
  divFloor.textContent = "Floor";

  const divElevators = document.createElement("div");
  divElevators.classList.add("lifts");

  const divElevator = document.createElement("div");
  divElevator.classList.add("lift");

  divElevators.appendChild(divElevator);
  divFloorWrapper.appendChild(divElevators);
  divFloorWrapper.appendChild(divFloor);
}
