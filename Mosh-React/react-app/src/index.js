const square = function(number) {
  return number * number;
};

console.log(square(5));

const square2 = number => number * number;

console.log(square2(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

const activeJobs = jobs.filter(function(job) {
  return job.isActive;
});

const activeJobs2 = jobs.filter(job => job.isActive);

////

const person = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};
person.talk();
