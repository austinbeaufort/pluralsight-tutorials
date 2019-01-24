
const Task = require('./task');
const Repo = require('./taskRepository');

let task1 = new Task(Repo.get(1));
let task2 = new Task('create a demo for modules');
let task3 = new Task('create a demo for singletons');
let task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();