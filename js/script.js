const building = document.querySelector(".building");

init();

// Constructor for Elevator object
function Elevator(index, currentFloor, html_id, x, y) {
  this.currentFloor = currentFloor;
  this.index = index;
  this.id = html_id;
  this.px = x;
  this.py = y;
  this.distance = 0;
}

/**
 * At the beginning, all three elevator are located in the top floor.
 */
let l1 = new Elevator(1, 20, "l1", -200, 0);
let l2 = new Elevator(2, 20, "l2", -140, 0);
let l3 = new Elevator(3, 20, "l3", -80, 0);

const listElevator = [l1, l2, l3];

let divSelectedElevator;
let distance;

const floor = document.querySelectorAll(".floor");

/***
 * Method to initialize all 20 floors and 3 elevators for the building
 */
function init() {
  for (let i = 20; i > 0; i--) {
    const divFloor = document.createElement("div");

    divFloor.classList.add("floor");
    divFloor.textContent = "Floor " + i;
    divFloor.setAttribute("id", "f" + i);

    const divFloorContainer = document.createElement("div");
    divFloorContainer.classList.add("floor-container");
    divFloorContainer.appendChild(divFloor);

    divFloor.addEventListener("click", function (e) {
      callingFloor = i;

      selectedElevator = getNearestElevator(callingFloor);
      divSelectedElevator = document.querySelector("#" + selectedElevator.id);

      selectedElevator.currentFloor = callingFloor;

      selectedElevator.py +=
        distance == 0 ? selectedElevator.py : selectedElevator.distance * 41;

      divSelectedElevator.style.top = selectedElevator.py + "px";
    });

    building.appendChild(divFloorContainer);
  }
}

/**
 * Get the nearest elevator from list of elevators
 */

function getNearestElevator(requestedFloor) {
  let minDistance = 100,
    minIndex = 0;

  listElevator.forEach(function (elevator, index) {
    distance = elevator.currentFloor - requestedFloor;

    if (Math.abs(distance) < minDistance) {
      minDistance = Math.abs(distance);
      minIndex = index;
      elevator.distance = distance;
    }
  });

  return listElevator[minIndex];
}
