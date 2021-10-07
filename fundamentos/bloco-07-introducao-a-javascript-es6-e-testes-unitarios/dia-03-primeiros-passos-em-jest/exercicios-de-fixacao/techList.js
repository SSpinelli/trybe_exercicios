const techList = (techArray, name) => {
  const newTechArray = [];
  const sortedArray = techArray.sort();

  sortedArray.forEach((tech) => {
    newTechArray.push({ tech: tech, name: name }) 
  });

  return (newTechArray.length > 0) ? newTechArray : 'Vazio!';
}

module.exports = techList;