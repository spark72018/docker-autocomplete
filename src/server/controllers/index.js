const model = require("../models");

/**
 * @function getQuotes
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 * @returns {void}
 */

async function getStates(req, res) {
    const query  = req.query;

    if (!query.text) {
        return res.status(422).json({
            error: true,
            data: "Missing required parameter: text"
        });
    }

    try {
        const result = await model.getStates(req.query);
        res.json({ success: true, data: result });

    } catch (err) {
        res.status(500).json({ success: false, error: "Unknown error."});
    }
}

module.exports = {
    getStates,
};