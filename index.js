#!/usr/bin/env node

function main() {
  const coordinate = getLatLng()
  console.log(render(coordinate))
}

/// Get the lat and lng from the command line
function getLatLng() {
  const args = process.argv
  if (args.length < 4) {
    const errorMessage = `
Not enough arguments. Usage:
  gpx-make <latitude> <longitude>
    `
    throw new Error(errorMessage)
  }

  return {
    lat: args[2],
    lng: args[3]
  }
}

/// Generate the contents of a GPX file using this coordinate.
/// coordinate: { lat: string, lng: string}
function render(coordinate) {
  return `
<?xml version="1.0"?>
<gpx version="1.1" creator="gpx-make">
<wpt lat="${coordinate.lat}" lon="${coordinate.lng}"></wpt>
</gpx>
  `
}

try {
  main()
} catch (error) {
  console.error(error)
}