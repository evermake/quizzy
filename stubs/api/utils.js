const fs = require('node:fs')
const path = require('node:path')

async function loadJson(filepath, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, filepath),
      { encoding },
      (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(data))
        }
      },
    )
  })
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

module.exports = {
  loadJson,
  sleep,
}
