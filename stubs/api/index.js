const router = require('express').Router()
const { sleep, loadJson } = require('./utils.js')

router.get('/getQuizzesList', async (_, res) => {
  await sleep(1000)
  const quizzes = await loadJson('quizzes.json')
  res.status(200)
  res.send(quizzes)
})

module.exports = router
