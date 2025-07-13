const express = require('express');
const router = express.Router();
const reportController = require('../../api/report/report.controller');
const auth = require('../../api/auth/auth.middleware'); // JWT auth
const adminOnly = require('../../api/admin/admin.middleware'); // Admin check

// Create a new report (any logged-in user)
router.post('/', auth, reportController.createReport);

// Get all reports (admin-only)
router.get('/', auth, adminOnly, reportController.getAllReports);

// Update a report's status (admin-only)
router.put('/:id/status', auth, adminOnly, reportController.updateReportStatus);

module.exports = router;
