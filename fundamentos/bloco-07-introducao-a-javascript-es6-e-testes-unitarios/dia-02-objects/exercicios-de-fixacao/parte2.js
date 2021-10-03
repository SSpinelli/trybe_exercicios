const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nightShift = (object, key, value) => object[key] = value;
nightShift(lesson2, 'turno', 'noite');

const listKeys = (object) => Object.keys(object);

const objectLength = (object) => Object.keys(object).length;

const objectValues = (object) => Object.values(object);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const sumOfStudents = (object) => {
  let result = 0;
  const array = Object.keys(object);

  for (let index in array) {
    result += object[array[index]].numeroEstudantes;
  }
  return result;
}

const getValueByNumber = (object, key) => Object.values(object)[key];

const thisPropertyExist =  (object, key, value) => object[key] === value ? true : false;

console.log(thisPropertyExist(lesson1, 'turno', 'noite'));

// Exercício Bônus

const mathStudents = (object) => {
  let result = 0;
  const array = Object.keys(object);

  for (let index in array) {
    if (object[array[index]].materia === 'Matemática') {
      result += object[array[index]].numeroEstudantes;
    }
  }
  return result;
}

console.log(mathStudents(allLessons, 'Maria Clara'))