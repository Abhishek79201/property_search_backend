const { Estate } = require('../models/index');
const createQueryFilters = require('../helpers/filterHelper');

const estateService = {
    getEstates: async (filters, page, limit) => {

        const queryFilters = createQueryFilters(filters);

        const estates = await Estate.find(queryFilters)
            .skip((page - 1) * limit)
            .limit(limit);

        const totalEstates = await Estate.countDocuments(queryFilters);
        const totalPages = Math.ceil(totalEstates / limit);

        return {
            estates,
            pagination: {
                total: totalEstates,
                page,
                totalPages
            }
        };
    }
};

module.exports = estateService;
