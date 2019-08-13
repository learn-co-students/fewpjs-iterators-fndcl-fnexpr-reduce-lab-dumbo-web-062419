const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function totalBatteries(batteries) {
//     let totalBatteries = 0;
//     const reducer = (totalBatteries, currentValue) => totalBatteries + currentValue

//     // totalBatteries = batteryBatches.reduce(reducer)

//     // return totalBatteries
//     return batteryBatches.reduce(reducer)
// }

const totalBatteries = batteryBatches.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  

console.log(totalBatteries(batteryBatches))