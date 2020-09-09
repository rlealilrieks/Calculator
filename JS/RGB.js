let redValue=0;
let greenValue=0;
let blueValue=0;
let hexRed1='';
let hexRed2='';
let hexGreen1='';
let hexGreen2='';
let hexBlue1='';
let hexBlue2='';
let hex='Hex Code: #';
let hexInfo=[];
let hexInfoReader=-1;
let hslRed='';
let hslGreen='';
let hslBlue='';
let hslCmax='';
let hslCmin='';
let hslDelta='';
let hslHue='';
let hslSaturation='';
let hslLightness='';
let hslLightnessForSat='';

document.querySelector('#redIndicator').addEventListener('input', redReader)
document.querySelector('#redIndicator').addEventListener('mouseup', rgbToHex)
document.querySelector('#redIndicator').addEventListener('mouseup', rgbToHSL)
document.querySelector('#greenIndicator').addEventListener('input', greenReader)
document.querySelector('#greenIndicator').addEventListener('mouseup', rgbToHex)
document.querySelector('#greenIndicator').addEventListener('mouseup', rgbToHSL)
document.querySelector('#blueIndicator').addEventListener('input', blueReader)
document.querySelector('#blueIndicator').addEventListener('mouseup', rgbToHex)
document.querySelector('#blueIndicator').addEventListener('mouseup', rgbToHSL)



function redReader() {
  redValue=document.querySelector('#redIndicator').value;
  document.querySelector('#redNumber').innerHTML = redValue;
  rgb()
}

function greenReader() {
  greenValue=document.querySelector('#greenIndicator').value;
  document.querySelector('#greenNumber').innerHTML = greenValue;
  rgb()
}

function blueReader() {
  blueValue=document.querySelector('#blueIndicator').value;
  document.querySelector('#blueNumber').innerHTML = blueValue;
  rgb()
}

function rgb() {
  document.querySelector('#rgbColor').style.background = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
  document.querySelector('#calculator').style.background = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
  document.querySelector('#rgb').innerHTML = 'RGB Code: rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
}

function rgbToHex() {
  hexRed1 = Math.floor(redValue/16);
  hexRed2 = (redValue/16 - Math.floor(redValue/16)) * 16;
  hexGreen1 = Math.floor(greenValue/16);
  hexGreen2 = (greenValue/16 - Math.floor(greenValue/16)) * 16;
  hexBlue1 = Math.floor(blueValue/16);
  hexBlue2 = (blueValue/16 - Math.floor(blueValue/16)) * 16;
  hexInfo.push(hexRed1, hexRed2, hexGreen1, hexGreen2, hexBlue1, hexBlue2)
  while (hex.length != 17) {
    ++hexInfoReader;
    if (hexInfo[hexInfoReader]==15) {
      hex = hex + 'F';
    }
    else if (hexInfo[hexInfoReader]==14) {
      hex = hex + 'E';
    }
    else if (hexInfo[hexInfoReader]==13) {
      hex = hex + 'D';
    }
    else if (hexInfo[hexInfoReader]==12) {
      hex = hex + 'C';
    }
    else if (hexInfo[hexInfoReader]==11) {
      hex = hex + 'B';
    }
    else if (hexInfo[hexInfoReader]==10) {
      hex = hex + 'A';
    }
    else if (hexInfo[hexInfoReader]==9) {
      hex = hex + '9';
    }
    else if (hexInfo[hexInfoReader]==8) {
      hex = hex + '8';
    }
    else if (hexInfo[hexInfoReader]==7) {
      hex = hex + '7';
    }
    else if (hexInfo[hexInfoReader]==6) {
      hex = hex + '6';
    }
    else if (hexInfo[hexInfoReader]==5) {
      hex = hex + '5';
    }
    else if (hexInfo[hexInfoReader]==4) {
      hex = hex + '4';
    }
    else if (hexInfo[hexInfoReader]==3) {
      hex = hex + '3';
    }
    else if (hexInfo[hexInfoReader]==2) {
      hex = hex + '2';
    }
    else if (hexInfo[hexInfoReader]==1) {
      hex = hex + '1';
    }
    else {
      hex = hex + '0';
    }
  }
  document.querySelector('#hex').innerHTML = hex;
  hex='Hex Code: #';
  hexInfo=[];
  hexInfoReader=-1;
}

function rgbToHSL() {
  hslRed = redValue/255;
  hslGreen = greenValue/255;
  hslBlue = blueValue/255;
  hslCmax = Math.max(hslRed, hslGreen, hslBlue);
  hslCmin = Math.min(hslRed, hslGreen, hslBlue);
  hslDelta = hslCmax - hslCmin;
  hue();
  lightness();
  saturation();
  document.querySelector('#hsl').innerHTML = 'HSL Code: hsl(' + hslHue + ', ' + hslSaturation + '%, ' + hslLightness + '%)';
}

function hue() {
  if (hslRed==hslCmax) {
    hslHue = Math.round(60 * (((hslGreen - hslBlue) / hslDelta) % 6))
  }
  else if (hslGreen==hslCmax) {
    hslHue = Math.round(60 * (((hslBlue - hslRed) / hslDelta) + 2))
  }
  else if (hslBlue==hslCmax) {
    hslHue = Math.round(60 * (((hslRed - hslGreen) / hslDelta) + 4))
  }
  else {
    hslHue = 0;
  }
}

function lightness() {
  hslLightnessForSat = (hslCmax + hslCmin) / 2;
  hslLightness = Math.round(((hslCmax + hslCmin) / 2) * 100);
}

function saturation() {
  if (hslDelta==0) {
    hslSaturation=0;
  }
  else {
    hslSaturation = Math.round((hslDelta / (1 - Math.abs((2 * hslLightnessForSat) - 1))) * 100)
  }
}
