// Recipe Object
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes = Object.assign({}, obj, key, value);
  return recipes;
}