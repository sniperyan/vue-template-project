function saveToLocal(key, value) {
  let vueSmart = window.localStorage.__vueSmart__
  if (!vueSmart) {
    vueSmart = {}
  } else {
    vueSmart = JSON.parse(vueSmart)
  }
  vueSmart[key] = value
  window.localStorage.__vueSmart__ = JSON.stringify(vueSmart)
}

function loadFromLocal(key, def) {
  let vueSmart = window.localStorage.__vueSmart__
  if (!vueSmart) {
    return def
  }
  vueSmart = JSON.parse(vueSmart)
  if (!vueSmart) {
    return def
  }
  let result = vueSmart[key]
  return result || def
}

export { saveToLocal, loadFromLocal }