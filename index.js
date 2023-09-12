const hqLocation = 42;

function distanceFromHqInBlocks(startingBlockInt) {
    return startingBlockInt <= hqLocation ? hqLocation - startingBlockInt : startingBlockInt - hqLocation;
};

function convertBlocksToFt(blockInt) {
    return blockInt * 264;
}

function distanceFromHqInFeet(startingBlockInt) {
   return convertBlocksToFt(distanceFromHqInBlocks(startingBlockInt));
};

function distanceTravelledInFeet(startingBlockInt, endingBlockInt) {
    return convertBlocksToFt(startingBlockInt <= endingBlockInt ? endingBlockInt - startingBlockInt : startingBlockInt - endingBlockInt);
}

function calculatesFarePrice(startingBlockInt, endingBlockInt) {
    let distanceTravelled = distanceTravelledInFeet(startingBlockInt, endingBlockInt);
    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * .02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}