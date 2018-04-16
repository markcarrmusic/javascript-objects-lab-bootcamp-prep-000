// Recipe Object
var recipes = {};

// Update object without mutating
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

// Update object by mutation
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var dUOKV = object[key] = value
}