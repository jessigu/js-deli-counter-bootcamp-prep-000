let katxDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return katzDeliLine.splice(0,1);
  }
}