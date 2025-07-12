const express = require('express');
const router = express.Router();
const reportController = require('../../api/report/report.controller');
const authMiddleware = require('../../api/auth/auth.middleware');

// Create a report (protected)
router.post('/', authMiddleware, reportController.createReport);

// Get all reports (admin-only, needs role check)
router.get('/', authMiddleware, reportController.getAllReports);

// Update report status (admin-only, needs role check)
router.put('/:id', authMiddleware, reportController.updateReportStatus);

module.exports = router;
