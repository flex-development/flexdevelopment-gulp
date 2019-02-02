"use strict";

// theme
var THEME_DARK = 'dark';
var THEME_LIGHT = 'light';
var STORAGE = window.localStorage; // main functions

function getThemeFromStorage() {
  var currentTheme = get('theme');
  if (currentTheme && currentTheme === THEME_DARK) return dark();
  set('theme', THEME_LIGHT);
  return light();
}

function toggleTheme() {
  var currentTheme = get('theme');
  set('theme', currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  currentTheme = get('theme');
  if (currentTheme === THEME_LIGHT) return light();
  return dark();
} // helper functions


function dark() {
  document.querySelector('body').classList.remove(THEME_LIGHT);
  document.querySelector('body').classList.add(THEME_DARK);
  return true;
}

function get(location) {
  return JSON.parse(STORAGE.getItem(location));
}

function light() {
  document.querySelector('body').classList.remove(THEME_DARK);
  document.querySelector('body').classList.add(THEME_LIGHT);
  return true;
}

function set(location, data) {
  return STORAGE.setItem(location, JSON.stringify(data));
}