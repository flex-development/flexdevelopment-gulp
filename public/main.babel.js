"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.light = exports.get = exports.dark = exports.on_click = exports.toggle_theme = exports.get_theme_from_storage = void 0;

/* eslint-disable camelcase */

/* eslint-disable space-before-function-paren */
// theme
var THEME_DARK = 'dark';
var THEME_LIGHT = 'light';
var STORAGE = window.localStorage; // main functions

var get_theme_from_storage = function get_theme_from_storage() {
  var currentTheme = get('theme');
  if (currentTheme && currentTheme === THEME_DARK) return dark();
  set('theme', THEME_LIGHT);
  return light();
};

exports.get_theme_from_storage = get_theme_from_storage;

var toggle_theme = function toggle_theme() {
  var currentTheme = get('theme');
  set('theme', currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  currentTheme = get('theme');
  if (currentTheme === THEME_LIGHT) return light();
  return dark();
};

exports.toggle_theme = toggle_theme;

var on_click = function on_click(e) {
  console.log(e.target);
  e.preventDefault();
}; // helper functions


exports.on_click = on_click;

var dark = function dark() {
  document.querySelector('body').classList.remove(THEME_LIGHT);
  document.querySelector('body').classList.add(THEME_DARK);
  return true;
};

exports.dark = dark;

var get = function get(location) {
  return JSON.parse(STORAGE.getItem(location));
};

exports.get = get;

var light = function light() {
  document.querySelector('body').classList.remove(THEME_DARK);
  document.querySelector('body').classList.add(THEME_LIGHT);
  return true;
};

exports.light = light;

var set = function set(location, data) {
  return STORAGE.setItem(location, JSON.stringify(data));
};

exports.set = set;