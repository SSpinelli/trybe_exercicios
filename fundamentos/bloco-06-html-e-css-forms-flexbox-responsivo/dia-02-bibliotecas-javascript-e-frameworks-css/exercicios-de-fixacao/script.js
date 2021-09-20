function statesOfBrazil() {
  const states = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espirito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PN)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)'];

  const parentElement = document.querySelector('#user-state');

  for (let index = 0; index < states.length; index += 1) {
    let createOption = document.createElement('option');
    createOption.innerText = states[index];
    createOption.value = states[index];
    parentElement.appendChild(createOption);
  }
}
statesOfBrazil();

const submitButton = document.querySelector('.submit-button');

function noDefault(event) {
  event.preventDefault();
}

submitButton.addEventListener('click', noDefault)