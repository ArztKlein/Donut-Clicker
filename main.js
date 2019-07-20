let donuts = 0;
let dpc = 1;
let dps = 0;


function update(){
  updateDonutText();
  updateDPCText();
}


function donutClicked(){
  donuts += dpc;
  updateDonutText();
}

function updateDonutText(){
  document.getElementById("DonutText").innerHTML = donuts + " Donuts";
}

function updateDPCText(){
  document.getElementById("DPCText").innerHTML = dpc + " Per Click";
}

function canBuy(cost){
  return (cost <= donuts);
}

function calculateDPC(){
  dpc = 1 + cursors;
}

// ============================================================================= //
// =============================   Buildings   ================================= //
// ============================================================================= //


// ==============================   Cursor  ====================================

let cursorCost = 10;
let cursors = 0;
const cursorCostMultiplier = 1.4;

function buyCursor(free){
  if(free == false){
    if(canBuy(cursorCost)){
      donuts -= cursorCost;
      cursors++;cursorCost = Math.round(cursorCost * cursorCostMultiplier);
      calculateDPC();
    }

  }else if (free === true) {
    cursors++;
    calculateDPC();
  }

update();
console.log("Cursor Cost is now: " + cursorCost);
}

function showCursorCost(){
  document.getElementById("CursorCostText").innerHTML = cursorCost + " Donuts";
}
