// Recipe Object
var recipes = {};

// Update object without mutating
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}
