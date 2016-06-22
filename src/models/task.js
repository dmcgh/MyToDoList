/* eslint-disable func-names */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

function Task() {
  this.name = '';
}

const taskSchema = new Schema({
  name: String,
  due: Date,
  priority: Number,
  category: String,
  isComplete: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
console.log('MONGOOSE BELOW!!')
console.log(mongoose.model('Task', taskSchema));

Task.prototype.returnAll = function () {
  task.find();
};

//Task.prototype.returnAll = mongoose.find({});
