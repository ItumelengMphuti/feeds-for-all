const centers = JSON.parse(localStorage.getItem('centers')) || [];
const centersDiv = document.querySelector('#centers');

function renderCenters() {
  let centerHTML = '';
  centers.forEach((center, index) => {
    centerHTML += `
      <div>
        <h2>${center.name}</h2>
        <p><strong>Address:</strong> ${center.address}</p>
        <p><strong>Municipality:</strong> ${center.municipality}</p>
        <p><strong>Estimated number of people fed per day:</strong> ${center.peopleFed}</p>
      </div>
    `;
  });
  centersDiv.innerHTML = centerHTML;
}

function saveCenter(center) {
  centers.push(center);
  localStorage.setItem('centers', JSON.stringify(centers));
}

// function editCenter(index) {
//   const center = centers[index];
//   const newCenter = {
//     name: prompt(`Enter new center name (${center.name}):`) || center.name,
//     address: prompt(`Enter new center address (${center.address}):`) || center.address,
//     // npoNumber: prompt(`Enter new NPO number (${center.npoNumber}):`) || center.npoNumber,
//     municipality: prompt(`Enter new municipality (${center.municipality}):`) || center.municipality,
//     // bankingDetails: prompt(`Enter new banking details (${center.bankingDetails}):`) || center.bankingDetails,
//     peopleFed: prompt(`Enter new estimated number of people fed per day (${center.peopleFed}):`) || center.peopleFed
//   };
//   centers[index] = newCenter;
//   localStorage.setItem('centers', JSON.stringify(centers));
//   renderCenters();
// }

// function deleteCenter(index) {
//   if (confirm(`Are you sure you want to delete ${centers[index].name}?`)) {
//     centers.splice(index, 1);
//     localStorage.setItem('centers', JSON.stringify(centers));
//     renderCenters();
//   }
// }

renderCenters();