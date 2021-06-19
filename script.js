const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const girls = students.filter(student => student[student.length - 1] === 'а');
const boys = students.filter(student => student[student.length - 1] !== 'а');

function getPairs(boys, girls) {
    const studentsPairs = [];
    for (let i = 0; i < boys.length; i++) {
        studentsPairs[i] = [boys[i], girls[i]];
    }
    return studentsPairs;
}
const studentsPairs = getPairs(boys, girls);
console.log(studentsPairs);

function devideThemes(studentsPairs, themes) {
    const groups = [];
    for (let i = 0; i < studentsPairs.length; i++) {
        groups[i] = [studentsPairs[i].join(' i '), themes[i]];
    }
    return groups;
}
const groups = devideThemes(studentsPairs, themes);
console.log(groups);

function setMarks(arr) {
    const markedStudents = [];
    arr.forEach((item, index) => {
        markedStudents.push([item, marks[index]])
    });
    return markedStudents;

}
console.log(setMarks(students));

function getRandomtMarks(team) {
    const groupsMarks = [];
    for (let i = 0; i < team.length; i++) {
        groupsMarks[i] = [team[i], Math.ceil(Math.random() * 5)]
    }
    return groupsMarks;
}
const groupsMarks = getRandomtMarks(groups);
console.log(groupsMarks);