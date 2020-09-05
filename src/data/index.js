const elastic = require("../elastic");
const states  = require("./states.json");

/**
 * @function createESAction
 * @returns {{index: { _index: string, _type: string }}}
 * @description Returns an ElasticSearch Action in order to
 *              correctly index documents.
 */

const esAction = {
    index: {
        _index: elastic.index,
        _type: elastic.type
    }
};

/**
 * @function populateDatabase
 * @returns {void}
 */

async function populateDatabase() {
    const docs = states.reduce((acc, state) => {
        const { name, abbreviation } = state;

        acc.push(esAction);
        acc.push({
            suggest: {
                input: name.split(" ")
            },
            name
        });

        return acc;
    }, []);

    return elastic.esclient.bulk({ body: docs });
}

module.exports = {
    populateDatabase
};