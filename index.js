// Code your solution here
function findMatching(drivers, attribute) {
    return drivers.filter (driver => driver.toLowerCase() === attribute.toLowerCase())
}

function fuzzyMatch(drivers, attribute) {
    return drivers.filter( driver => driver.startsWith(attribute))
}

function matchName(drivers, attribute) {
    return drivers.filter(driver => driver.name.toLowerCase() === attribute.toLowerCase())
}