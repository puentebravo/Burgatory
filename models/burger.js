const orm = require("../config/orm");

const burger = {
  selectAll(cb) {
    orm.selectAll((res) => cb(res));
  },
  insertOne(formInput, cb) {
    orm.insertOne(formInput, (res) => cb(res));
  },
  updateOne(dataId, cb) {
    orm.updateOne(dataId, (res) => cb(res));
  },
  deleteOne(dataId, cb) {
    orm.deleteOne(dataId, (res) => cb(res));
  },
};

module.exports = burger