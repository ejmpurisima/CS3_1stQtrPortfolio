/*( for (i = 1; i < 11; i++){
    console.log(i)
}

for (i = 2; i < 20; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

let i = 1;
while (i <=3 ){
    console.log(i);
    i++
}

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 3) */

/*grades = [67, 100, 97, 82, 96]
for (let i = 0; i < grades.length; i++){
    console.log(grades[i]);
}

for (let grade of grades){
    console.log(grade)
}

grades.forEach(print_grade) */

grades = [67, 100, 97, 82, 96]
arr = grades
grades[0] = 1000;
console.log(arr[0])

grades = [67, 100, 97, 82, 96]
grades.push("kangkong")
grades.unshift("mango mango mango")

var popped = grades.pop()
var shifted = grades.shift()
console.log (grades)
console.log (popped, shifted)