const estateService = require('../services/estateService');

exports.getEstates = async (req, res) => {
  try {
    const filters = {
      location: req.query.location,
      purpose: req.query.purpose?.toLowerCase(),
      type: req.query.type?.toLowerCase(),
      price: req.query.price,
      area: req.query.area,
      rooms: req.query.rooms
    };

    const page = parseInt(req.query.page || '1', 10);
    const limit = parseInt(req.query.limit || '10', 10);

    const result = await estateService.getEstates(filters, page, limit);

    res.status(200).json(result);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};
