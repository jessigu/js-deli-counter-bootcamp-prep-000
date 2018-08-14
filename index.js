let katxDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    let nowServing = katzDeliLine.splice(0,1);
    return `Currently serving ${nowServing}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    let number = [];
    let name = [];
    
    return 'The line is currently: ' + number + '. ' + name + ', ';
  }
}