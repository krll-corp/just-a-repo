  "use strict"
let employee1 = {
  fullName: "Vasya Pupkin",
  position: "Junior Developer",
  salary: "500",
};
let employee = {
  fullName: "Petya Vaskin",
  position: "Senior",
  salary: "2000",
}
function showInfo(currency){
  console.log(`${this.fullName} на позиції ${this.position} заробляє ${this.salaryj} ${currency}`);
}
apply(showInfo(), employee1, "$");

apply(showInfo(), employee2, "$");
