// https://calculator.swiftutors.com/hydraulic-radius-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const hydraulicradiusRadio = document.getElementById('hydraulicradiusRadio');
const areaofsectionflowRadio = document.getElementById('areaofsectionflowRadio');
const wettedPerimeterRadio = document.getElementById('wettedPerimeterRadio');

let hydraulicradius;
let areaofsectionflow = v1;
let wettedPerimeter = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

hydraulicradiusRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area of section flow (m)';
  variable2.textContent = '(Pw) Wetted Perimeter (m²)';
  areaofsectionflow = v1;
  wettedPerimeter = v2;
  result.textContent = '';
});

areaofsectionflowRadio.addEventListener('click', function() {
  variable1.textContent = '(Rh) Hydraulic radius (m)';
  variable2.textContent = '(Pw) Wetted Perimeter (m²)';
  hydraulicradius = v1;
  wettedPerimeter = v2;
  result.textContent = '';
});

wettedPerimeterRadio.addEventListener('click', function() {
  variable1.textContent = '(Rh) Hydraulic radius (m)';
  variable2.textContent = '(A) Area of section flow (m)';
  hydraulicradius = v1;
  areaofsectionflow = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(hydraulicradiusRadio.checked)
    result.textContent = `Hydraulic radius = ${computeHydraulicradius().toFixed(2)} m`;

  else if(areaofsectionflowRadio.checked)
    result.textContent = `Area of section flow = ${computeAreaofsectionflow().toFixed(2)} m`;

  else if(wettedPerimeterRadio.checked)
    result.textContent = `Wetted Perimeter = ${computeWettedPerimeter().toFixed(2)} m²`;
})

// calculation

function computeHydraulicradius() {
  return Number(areaofsectionflow.value) / Number(wettedPerimeter.value);
}

function computeAreaofsectionflow() {
  return Number(hydraulicradius.value) * Number(wettedPerimeter.value);
}

function computeWettedPerimeter() {
  return Number(areaofsectionflow.value) / Number(hydraulicradius.value);
}