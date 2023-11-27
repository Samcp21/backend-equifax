const express = require('express')
const { generateReport } = require('../../controllers/reporte')
const authHandlerBasic = require('../../middlewares/authHandlerBasic')

const router = express.Router()

router.post('/reports', authHandlerBasic, generateReport)

module.exports = router
