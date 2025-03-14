// Code your solution in this file!
function distanceFromHqInBlocks(street){
    let result;
    if (street >= 42){
        result= street - 42;}
     else{
        result = 42 - street;
    }
    return result;
}
function  distanceFromHqInFeet(street){
    let dInFeet;
    dInFeet=distanceFromHqInBlocks(street)*264;
    return dInFeet;
}
function distanceTravelledInFeet(start,finish){
    let distance;
    if(start>=finish){
        distance=start-finish;
    }
    else{
        distance=finish-start;
    }
    return distance*264
}
function calculatesFarePrice(start, finish) {
    let distance = distanceTravelledInFeet(start, finish)
    if (distance <= 400) {
        return 0
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500)
        return 25;
    else {
        return "cannot travel that far"
    }
}