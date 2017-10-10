var katzDeliLine = [];
//take a number function
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var deliLength = katzDeliLine.length
  return (`Welcome, ${name}. You are number ${deliLength} in line.`);
}
//now serving function
function nowServing (katzDeliLine) {
  if katzDeliLine.length == 0 {
    return "There is nobody waiting to be served!"
  }
  else {
    var firstInLine = katzDeliLine.slice(1)
    katzDeliLine.shift()
    return `Currently serving ${firstInLine}.`
  }
}
