const hqLocation = 42;

function distanceFromHqInBlocks(distanceInt) {
    return distanceInt < hqLocation ? hqLocation - distanceInt : distanceInt - hqLocation;
};

function distanceFromHqInFeet(inputValue) {
    distanceFromHqInBlocks(inputValue);

}

