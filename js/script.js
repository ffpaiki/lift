const building = document.querySelector(".building");

init();

function Elevator(index, currentFloor, html_id, x, y) {
  this.currentFloor = currentFloor;
  this.index = index;
  this.id = html_id;
  this.px = x;
  this.py = y;
  // this.going = "up";
}

let l1 = new Elevator(1, 20, "l1", -200, 8);
let l2 = new Elevator(2, 20, "l2", -140, 8);
let l3 = new Elevator(3, 20, "l3", -80, 8);

let divSelectedElevator;
let distance;

const listElevator = [l1, l2, l3];

const floor = document.querySelectorAll(".floor");

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
    divFloor.setAttribute("id", "f" + i);

    const divFloorContainer = document.createElement("div");
    divFloorContainer.classList.add("floor-container");
    divFloorContainer.appendChild(divFloor);

    divFloor.addEventListener("click", function (e) {
      callingFloor = i;
      console.log(i);
      console.log(getNearestElevator(callingFloor));

      selectedElevator = getNearestElevator(callingFloor);
      divSelectedElevator = document.querySelector("#" + selectedElevator.id);

      selectedElevator.currentFloor = callingFloor;

      selectedElevator.py = distance * 47;

      divSelectedElevator.style.transform =
        "translate(" +
        selectedElevator.px +
        ".px, " +
        selectedElevator.py +
        "px)";
    });

    const divElevators = document.createElement("div");
    divElevators.classList.add("lifts");

    divFloorWrapper.appendChild(divElevators);
    divFloorWrapper.appendChild(divFloorContainer);

    building.appendChild(divFloorWrapper);
  }
}

function getNearestElevator(requestedFloor) {
  let minDistance = 100,
    minIndex;

  listElevator.forEach(function (elevator, index) {
    distance = elevator.currentFloor - requestedFloor;
    console.log(
      "requested floor: " + requestedFloor + " distance: " + distance
    );
    if (Math.abs(distance) < minDistance) {
      minDistance = Math.abs(distance);
      minIndex = index;
    }
  });

  return listElevator[minIndex];
}
