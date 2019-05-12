/* eslint-disable camelcase */

/* eslint-disable space-before-function-paren */
// theme
var THEME_DARK = 'dark';
var THEME_LIGHT = 'light';
var STORAGE = window.localStorage; // main functions

export var get_theme_from_storage = function get_theme_from_storage() {
  var currentTheme = get('theme');
  if (currentTheme && currentTheme === THEME_DARK) return dark();
  set('theme', THEME_LIGHT);
  return light();
};
export var toggle_theme = function toggle_theme() {
  var currentTheme = get('theme');
  set('theme', currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  currentTheme = get('theme');
  if (currentTheme === THEME_LIGHT) return light();
  return dark();
};
export var on_click = function on_click(e) {
  console.log(e.target);
  e.preventDefault();
}; // helper functions

export var dark = function dark() {
  document.querySelector('body').classList.remove(THEME_LIGHT);
  document.querySelector('body').classList.add(THEME_DARK);
  return true;
};
export var get = function get(location) {
  return JSON.parse(STORAGE.getItem(location));
};
export var light = function light() {
  document.querySelector('body').classList.remove(THEME_DARK);
  document.querySelector('body').classList.add(THEME_LIGHT);
  return true;
};
export var set = function set(location, data) {
  return STORAGE.setItem(location, JSON.stringify(data));
};