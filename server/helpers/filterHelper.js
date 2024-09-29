const createQueryFilters = (filters) => {
  const queryFilters = {};

  // Location filter
  if (filters.location) {
    queryFilters.$or = [
      { city: { $regex: filters.location, $options: 'i' } },
      { country: { $regex: filters.location, $options: 'i' } },
      { title: { $regex: filters.location, $options: 'i' } }
    ];
  }

  // Purpose filter
  if (filters.purpose) {
    queryFilters.purpose = { $regex: new RegExp(`^${filters.purpose}$`, 'i') };
  }

  // Type filter
  if (filters.type) {
    queryFilters.type = { $regex: new RegExp(`^${filters.type}$`, 'i') };
  }

  // Price filter
  if (typeof filters.price === 'string') {
    if (filters.price.includes('+')) {
      const minPrice = parseInt(filters.price.replace('+', ''), 10);
      queryFilters.price = { $gte: minPrice };
    } else {
      const [minPrice, maxPrice] = filters.price.split('-').map(Number);
      queryFilters.price = { $gte: minPrice, $lte: maxPrice };
    }
  }

  // Area filter
  if (typeof filters.area === 'string') {
    if (filters.area.includes('+')) {
      const minArea = parseInt(filters.area.replace('+', ''), 10);
      queryFilters.area = { $gte: minArea };
    } else {
      const [minArea, maxArea] = filters.area.split('-').map(Number);
      queryFilters.area = { $gte: minArea, $lte: maxArea };
    }
  }

  // Rooms filter
  if (filters.rooms) {
    if (filters.rooms === '4+') {
      queryFilters.rooms = { $gte: 4 };
    } else {
      const roomCount = parseInt(filters.rooms, 10);
      if (!isNaN(roomCount)) {
        queryFilters.rooms = roomCount;
      }
    }
  }

  return queryFilters;
};

module.exports = createQueryFilters;
