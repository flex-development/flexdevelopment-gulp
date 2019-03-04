/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// theme
const THEME_DARK = 'dark'
const THEME_LIGHT = 'light'

const STORAGE = window.localStorage

// main functions
export const get_theme_from_storage = () => {
  let currentTheme = get('theme')

  if (currentTheme && currentTheme === THEME_DARK) return dark()

  set('theme', THEME_LIGHT)
  return light()
}

export const toggle_theme = () => {
  let currentTheme = get('theme')

  set('theme', (currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT))

  currentTheme = get('theme')

  if (currentTheme === THEME_LIGHT) return light()

  return dark()
}

export const on_click = e => {
  console.log(e.target)

  e.preventDefault()
}

// helper functions
export const dark = () => {
  document.querySelector('body').classList.remove(THEME_LIGHT)
  document.querySelector('body').classList.add(THEME_DARK)

  return true
}

export const get = location => JSON.parse(STORAGE.getItem(location))

export const light = () => {
  document.querySelector('body').classList.remove(THEME_DARK)
  document.querySelector('body').classList.add(THEME_LIGHT)

  return true
}

export const set = (location, data) => {
  return STORAGE.setItem(location, JSON.stringify(data))
}
