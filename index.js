function display(id) {
  if (id == 'π') {
    document.getElementById('display').value += Math.PI;
  } else {
    document.getElementById('display').value += id;
  }
}

function clearInput() {
  document.getElementById('display').value = "";
}


function squareRoot() {
  let output = document.getElementById('display').value;
  let arr = output.split(/[x+/-]/g).map(x => parseInt(x));
  let arr2 = output.replace(/[0-9]/g, '').split('');
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] == "x") {
      arr[0] = arr[0]*arr[1];
      arr.splice(1,1);
    } else if (arr2[i] == "+") {
      arr[0] = arr[0]+arr[1];
      arr.splice(1,1);
    } else if (arr2[i] == "-") {
      arr[0] = arr[0]-arr[1];
      arr.splice(1,1);
    } else if (arr2[i] == "/") {
      arr[0] = arr[0]/arr[1];
      arr.splice(1,1);
    } else if (arr2[i] == "^") {
      arr[0] = Math.pow(arr[0], arr[1]);
      arr.splice(1,1);
    }
  }
  if (typeof parseFloat(output) == 'number') {
    document.getElementById('display').value = Math.sqrt(parseFloat(output));
  } else {
    document.getElementById('display').value = Math.sqrt(parseFloat(arr.join('')));
  }
}

function equalsTo() {
  let output = document.getElementById('display').value;
  let arr = output.split(/[x+/-]/g).map(x => parseFloat(x));
  let arr2 = output.replace(/[0-9]/g, '').split('');
  console.log(arr);
  console.log(arr2);
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] == "x") {
      arr[0] = arr[0]*arr[1];
      arr.splice(1,1);
    } else if (arr2[i] == "+") {
      arr[0] = arr[0]+arr[1];
      arr.splice(1,1);
    } else if (arr2[i] == "-") {
      arr[0] = arr[0]-arr[1];
      arr.splice(1,1);
    } else if (arr2[i] == "/") {
      arr[0] = arr[0]/arr[1];
      console.log(arr);
      arr.splice(1,1);
    }
  }
  document.getElementById('display').value = parseFloat(arr.join(''));
}
