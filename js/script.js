const building = document.querySelector(".building");

init();

function Lift() {
  this.currentFloor = 1;
  this.going = "up";
}

let l1 = new Lift();
let l2 = new Lift();
let l3 = new Lift();

const lifts = document.querySelectorAll(".lift.selected");
const floor = document.querySelectorAll(".floor");

// /***
//  * Method to choose random lift when there are more than one lift
//  * with the same distance to the requesting floor.
//  */
// function randomLift() {
//   const t = Math.floor(Math.random() * 3);
//   return t;
// }

/***
 * Method to initialize all floors and elevators during initialization
 */
function init() {
  for (let i = 20; i > 0; i--) {
    const divFloorWrapper = document.createElement("div");
    divFloorWrapper.classList.add("floor-wrapper");

    const divFloor = document.createElement("div");
    divFloor.classList.add("floor");
    divFloor.textContent = "Floor " + i;

    const divElevators = document.createElement("div");
    divElevators.classList.add("lifts");
    divElevators.setAttribute("id", "f" + i);

    divFloorWrapper.appendChild(divElevators);
    divFloorWrapper.appendChild(divFloor);

    building.appendChild(divFloorWrapper);
  }

  for (let j = 0; j < 3; j++) {
    const divElevators = document.querySelector("#f1");
    const divElevator = document.createElement("div");
    divElevator.classList.add("lift");
    divElevator.setAttribute("id", "l" + (j + 1));
    divElevators.appendChild(divElevator);
  }
}
