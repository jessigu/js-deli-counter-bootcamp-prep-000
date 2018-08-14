const katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let lineNumber = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${lineNumber} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    let name = katzDeliLine.splice(0, 1);
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine === 0) {
    return 'The line is currently empty.';
  } else {
    let line = []; 
    for( let i = 0; i < katzDeliLine.length; i++) {
      line += (i + 1) + '. ' + katzDeliLine[i] + ', ';
    }
    line = line.slice(0);
    return 'The line is currently: ' + line;
  }
}