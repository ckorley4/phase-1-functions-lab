// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return distance < 43 ? 8 : (distance % 43) + 1
}

function distanceFromHqInFeet(distance) {
  return distance < 43 ? 8 * 264 : ((distance % 43) + 1) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)
  console.log(distance)
  return distance > 2500
    ? 'cannot travel that far'
    : distance >= 2000
    ? 25
    : distance > 400 && distance <= 2000
    ? (distance - 400) * 0.02
    : 0
}
