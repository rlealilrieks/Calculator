let visibletotal="";
let total="";
let firstnumber="";
let secondnumber='';
let calctotal='';
let dividesymbol='/';
let divideoperation='&divide;';
let multiplysymbol='*';
let multiplyoperation='x';
let minussymbol='-';
let plussymbol='+';
let period=".";
let equalsymbol="=";
let priornumber='';
let priorsymbol='';
let prioroperation='';

document.querySelector('#nine').addEventListener('click', nine)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#clear').addEventListener('click', clear)
document.querySelector('#deleteItem').addEventListener('click', deleteItem)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#minus').addEventListener('click', minus)
document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#decimal').addEventListener('click', decimal)
document.querySelector('#execute').addEventListener('click', execute)

function nine() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
    total = total + 9;
    visible();
  }
  else {
    total = total + 9;
    visible();
  }
}
function eight() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
    total = total + 8;
    visible();
  }
  else {
    total = total + 8;
    visible();
  }
}
function seven() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
    total = total + 7;
    visible();
  }
  else {
    total = total + 7;
    visible();
  }
}
function six() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
    total = total + 6;
    visible();
  }
  else {
    total = total + 6;
    visible();
  }
}
function five() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
    total = total + 5;
    visible();
  }
  else {
    total = total + 5;
    visible();
  }
}
function four() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
    total = total + 4;
    visible();
  }
  else {
    total = total + 4;
    visible();
  }
}
function three() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
    total = total + 3;
    visible();
  }
  else {
    total = total + 3;
    visible();
  }
}
function two() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
    total = total + 2;
    visible();
  }
  else {
    total = total + 2;
    visible();
  }
}
function one() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
    total = total + 1;
    visible();
  }
  else {
    total = total + 1;
    visible();
  }
}

function zero() {
  if (firstnumber=='Cannot divide by zero' || equalsymbol==visibletotal[visibletotal.length-1]) {
    clear();
  }
  else {
    if (total=='') {
      total = total + 0;
      visible();
    }
    else if (total=="0") {
      total;
      visible();
    }
    else {
      total = total + 0;
      visible();
    }
  }
}

function clear() {
  visibletotal="";
  total="";
  firstnumber="";
  secondnumber='';
  calctotal='';
  priornumber='';
  priorsymbol='';
  prioroperation='';
  reload();
}

function visible() {
  if (firstnumber=='') {
    document.querySelector('#result').innerHTML = total;
    document.querySelector('#result2').innerHTML = '';
  }
  else if (firstnumber!='' && total=='') {
    document.querySelector('#result').innerHTML = firstnumber;
    document.querySelector('#result2').innerHTML = visibletotal;
    priornumber='';
    priorsymbol='';
    prioroperation='';
  }
  else {
    document.querySelector('#result').innerHTML = total;
    document.querySelector('#result2').innerHTML = visibletotal;
  }
}

function deleteItem() {
  if (total.length>=1) {
    total=total.slice(0, -1);
    if ('0'===total || total=='') {
      total='';
      document.querySelector('#result').innerHTML = 0;
    }
    else {
      document.querySelector('#result').innerHTML = total;
    }
  }
  else if (visibletotal!='' && firstnumber!='Cannot divide by zero') {
    document.querySelector('#result').innerHTML = firstnumber;
  }
  else if (firstnumber=='Cannot divide by zero') {
    clear();
  }
  else {
    total='';
    document.querySelector('#result').innerHTML = 0;
  }
}

function decimal() {
  if (total=='') {
    total='0' + period;
    document.querySelector('#result').innerHTML = total;
  }
  else if (total.includes('.')) {
    document.querySelector('#result').innerHTML = total;
  }
  else {
    total = total + period;
    document.querySelector('#result').innerHTML = total;
  }
}

function revise() {
  while ((total[total.length-1]==0 || total[total.length-1]=='.') && total.includes('.')) {
    if (total[total.length-1]=='.') {
      total=total.slice(0,-1);
    }
    else {
      total=total.slice(0,-1);
    }
  }
}

function plus() {
  revise();
  if (firstnumber=='' && total!='') {
    firstnumber=total;
    visibletotal = firstnumber + plussymbol;
    calctotal=visibletotal;
    total='';
    visible();
  }
  else if (visibletotal=='') {
    firstnumber='0';
    visibletotal = firstnumber + plussymbol;
    calctotal=visibletotal;
    visible();
  }
  else if (equalsymbol==visibletotal[visibletotal.length-1] && total==='' && firstnumber!='Cannot divide by zero') {
    visibletotal = firstnumber + plussymbol;
    calctotal=visibletotal;
    visible();
  }
  else if (((plussymbol==calctotal[calctotal.length-1] || minussymbol==calctotal[calctotal.length-1] || multiplysymbol==calctotal[calctotal.length-1] || dividesymbol==calctotal[calctotal.length-1]) && total==='') || firstnumber=='Cannot divide by zero') {
    document.querySelector('#result').innerHTML = firstnumber;
    document.querySelector('#result2').innerHTML = visibletotal;
  }
  else if (firstnumber!='' && total=='0') {
    execute();
  }
  else {
    secondnumber=total;
    calctotal = calctotal + secondnumber;
    visibletotal = visibletotal + secondnumber + plussymbol;
    firstnumber = eval(calctotal);
    total='';
    execute();
    calctotal = firstnumber + plussymbol;
    secondnumber='';
  }
}

function minus() {
  revise();
  if (firstnumber=='' && total!='') {
    firstnumber=total;
    visibletotal=firstnumber + minussymbol;
    calctotal=visibletotal;
    total='';
    visible();
  }
  else if (visibletotal=='') {
    firstnumber='0';
    visibletotal = firstnumber + minussymbol;
    calctotal=visibletotal;
    visible();
  }
  else if (equalsymbol==visibletotal[visibletotal.length-1] && total==='' && firstnumber!='Cannot divide by zero') {
    visibletotal = firstnumber + minussymbol;
    calctotal=visibletotal;
    visible();
  }
  else if (((plussymbol==calctotal[calctotal.length-1] || minussymbol==calctotal[calctotal.length-1] || multiplysymbol==calctotal[calctotal.length-1] || dividesymbol==calctotal[calctotal.length-1]) && total==='') || firstnumber=='Cannot divide by zero') {
    document.querySelector('#result').innerHTML = firstnumber;
    document.querySelector('#result2').innerHTML = visibletotal;
  }
  else if (firstnumber!='' && total=='0') {
    execute();
  }
  else {
    secondnumber=total;
    calctotal = calctotal + secondnumber;
    visibletotal = visibletotal + secondnumber + minussymbol;
    firstnumber=eval(calctotal);
    total='';
    execute();
    calctotal = firstnumber + minussymbol;
    secondnumber='';
  }
}

function multiply() {
  revise();
  if (firstnumber=='' && total!='') {
    firstnumber=total;
    visibletotal=firstnumber + multiplyoperation;
    calctotal=firstnumber + multiplysymbol;
    total='';
    visible();
  }
  else if (visibletotal=='') {
    firstnumber='0';
    visibletotal = firstnumber + multiplyoperation;
    calctotal=firstnumber + multiplysymbol;
    visible();
  }
  else if (equalsymbol==visibletotal[visibletotal.length-1] && total==='' && firstnumber!='Cannot divide by zero') {
    visibletotal = firstnumber + multiplyoperation;
    calctotal = firstnumber + multiplysymbol;
    visible();
  }
  else if (((plussymbol==calctotal[calctotal.length-1] || minussymbol==calctotal[calctotal.length-1] || multiplysymbol==calctotal[calctotal.length-1] || dividesymbol==calctotal[calctotal.length-1]) && total==='') || firstnumber=='Cannot divide by zero') {
    document.querySelector('#result').innerHTML = firstnumber;
    document.querySelector('#result2').innerHTML = visibletotal;
  }
  else if (firstnumber!='' && total=='0') {
    execute();
  }
  else {
    secondnumber=total;
    calctotal = calctotal + secondnumber;
    visibletotal = visibletotal + secondnumber + multiplyoperation;
    firstnumber = eval(calctotal);
    total='';
    execute();
    calctotal = firstnumber + multiplysymbol;
    secondnumber='';
  }
}

function divide() {
  revise();
  if (firstnumber=='' && total!='') {
    firstnumber=total;
    visibletotal = firstnumber + divideoperation;
    calctotal=firstnumber + dividesymbol;
    total='';
    visible();
  }
  else if (visibletotal=='') {
    firstnumber='0';
    visibletotal = firstnumber + divideoperation;
    calctotal=firstnumber + dividesymbol;
    visible();
  }
  else if (equalsymbol==visibletotal[visibletotal.length-1] && total==='' && firstnumber!='Cannot divide by zero') {
    visibletotal = firstnumber + divideoperation;
    calctotal = firstnumber + dividesymbol;
    visible();
  }
  else if (((plussymbol==calctotal[calctotal.length-1] || minussymbol==calctotal[calctotal.length-1] || multiplysymbol==calctotal[calctotal.length-1] || dividesymbol==calctotal[calctotal.length-1]) && total==='') || firstnumber=='Cannot divide by zero') {
    document.querySelector('#result').innerHTML = firstnumber;
    document.querySelector('#result2').innerHTML = visibletotal;
  }
  else if (firstnumber!='' && total=='0') {
    execute();
  }
  else {
    secondnumber=total;
    calctotal = calctotal + secondnumber;
    visibletotal = visibletotal + secondnumber + divideoperation;
    firstnumber=eval(calctotal);
    total='';
    execute();
    calctotal = firstnumber + dividesymbol;
    secondnumber='';
  }
}

function execute() {
  if (total=='' && visibletotal=='') {
    document.querySelector('#result').innerHTML = '0=';
    document.querySelector('#result2').innerHTML = '0=';
  }
  else if (total=='' && priornumber=='' && firstnumber!='Cannot divide by zero')  {
    document.querySelector('#result').innerHTML = firstnumber;
    document.querySelector('#result2').innerHTML = visibletotal;
  }
  else if (priorsymbol=='' && firstnumber!='Cannot divide by zero' && firstnumber!='') {
    revise();
    if (dividesymbol==calctotal[calctotal.length-1] && total=='0') {
      visibletotal = visibletotal + total + equalsymbol;
      firstnumber='Cannot divide by zero';
      calctotal=firstnumber;
      document.querySelector('#result').innerHTML = firstnumber;
      document.querySelector('#result2').innerHTML = visibletotal;
      total='';
      disable();
    }
    else {
      secondnumber=total;
      if (plussymbol==calctotal[calctotal.length-1]) {
        priorsymbol=plussymbol;
        prioroperation=plussymbol;
      }
      else if (minussymbol==calctotal[calctotal.length-1]) {
        priorsymbol=minussymbol;
        prioroperation=minussymbol;
      }
      else if (multiplysymbol==calctotal[calctotal.length-1]) {
        priorsymbol=multiplysymbol;
        prioroperation=multiplyoperation;
      }
      else {
        priorsymbol=dividesymbol;
        prioroperation=divideoperation;
      }
      calctotal = calctotal + secondnumber;
      priornumber=secondnumber;
      visibletotal = visibletotal + secondnumber + equalsymbol;
      firstnumber=eval(calctotal);
      document.querySelector('#result').innerHTML = firstnumber;
      document.querySelector('#result2').innerHTML = visibletotal;
      total='';
      secondnumber='';
    }
  }
  else if (firstnumber=='') {
    visibletotal = total + equalsymbol;
    document.querySelector('#result').innerHTML = total;
    document.querySelector('#result2').innerHTML = visibletotal;
  }
  else if (firstnumber=='Cannot divide by zero') {
    clear();
  }
  else {
    calctotal = firstnumber + priorsymbol + priornumber;
    visibletotal = firstnumber + prioroperation + priornumber + equalsymbol;
    firstnumber=eval(calctotal);
    document.querySelector('#result').innerHTML = firstnumber;
    document.querySelector('#result2').innerHTML = visibletotal;
  }
}

function disable() {
  document.querySelector('#decimal').style.backgroundColor = 'rgb(66, 50, 56)';
  document.querySelector('#decimal').removeAttribute('id');
  document.querySelector('#plus').style.backgroundColor = 'rgb(66, 50, 56)';
  document.querySelector('#plus').removeAttribute('id');
  document.querySelector('#minus').style.backgroundColor = 'rgb(66, 50, 56)';
  document.querySelector('#minus').removeAttribute('id');
  document.querySelector('#multiply').style.backgroundColor = 'rgb(66, 50, 56)';
  document.querySelector('#multiply').removeAttribute('id');
  document.querySelector('#divide').style.backgroundColor = 'rgb(66, 50, 56)';
  document.querySelector('#divide').removeAttribute('id');
}

function reload() {
  if (document.querySelector('.decimal').hasAttribute('id')) {
    document.querySelector('#result').innerHTML = 0;
    document.querySelector('#result2').innerHTML = 0;
  }
  else {
    document.querySelector('.decimal').style.backgroundColor = 'rgb(130, 168, 217)';
    document.querySelector('.decimal').id = 'decimal';
    document.querySelector('.plus').style.backgroundColor = 'rgb(130, 168, 217)';
    document.querySelector('.plus').id = 'plus';
    document.querySelector('.minus').style.backgroundColor = 'rgb(130, 168, 217)';
    document.querySelector('.minus').id = 'minus';
    document.querySelector('.multiply').style.backgroundColor = 'rgb(130, 168, 217)';
    document.querySelector('.multiply').id = 'multiply';
    document.querySelector('.divide').style.backgroundColor = 'rgb(130, 168, 217)';
    document.querySelector('.divide').id = 'divide';
    document.querySelector('#result').innerHTML = 0;
    document.querySelector('#result2').innerHTML = 0;
  }
}
