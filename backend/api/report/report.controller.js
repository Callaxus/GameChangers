const Report = require('../../models/report');

// Create a new report
exports.createReport = async (req, res) => {
  try {
    const { targetType, targetId, reason } = req.body;

    if (!targetType || !targetId || !reason) {
      return res.status(400).json({ msg: 'Missing required fields' });
    }

    const report = new Report({
      reporterId: req.user.id,
      targetType,
      targetId,
      reason
    });

    await report.save();
    res.status(201).json({ msg: 'Report submitted', report });
  } catch (err) {
    console.error('Error creating report:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Get all reports (admin-only)
exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().populate('reporterId');
    res.json(reports);
  } catch (err) {
    console.error('Error fetching reports:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Update a report's status (admin-only)
exports.updateReportStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const report = await Report.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!report) return res.status(404).json({ msg: 'Report not found' });

    res.json(report);
  } catch (err) {
    console.error('Error updating report status:', err.message);
    res.status(500).json({ error: err.message });
  }
};
