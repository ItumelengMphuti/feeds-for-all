const form = document.querySelector('#registration-form');
const centerName = document.querySelector('#center-name');
const address = document.querySelector('#address');
const npoNumber = document.querySelector('#npo-number');
const municipality = document.querySelector('#municipality');
const bankingDetails = document.querySelector('#banking-details');
const peopleFed = document.querySelector('#people-fed');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const center = {
    name: centerName.value,
    address: address.value,
    npoNumber: npoNumber.value,
    municipality: municipality.value,
    bankingDetails: bankingDetails.value,
    peopleFed: peopleFed.value
  };
  let centers = JSON.parse(localStorage.getItem('centers')) || [];
  centers.push(center);
  localStorage.setItem('centers', JSON.stringify(centers));
  window.location.href = 'our_centers.html';
});