const request = require("request-promise");

async function getStates(req) {
    const requestOptions = {
        json: {
            "suggest": {
                "stateSuggestion": {
                    "prefix": req.text,
                    "completion": {
                        "field": "suggest",
                        "size": 50
                    }
                }
            }
        }
    };

    try {
        const result = await request.post(`${process.env.ELASTIC_URL}/states/_search`, requestOptions);
        const suggestions = result.suggest.stateSuggestion[0].options || [];
        const values  = suggestions.map(hit => ({
                name:  hit._source.name,
                score:  hit._score
            }));

        return {
            results: values.length,
            values
        }
    } catch (e) {
        console.log("Error: ", e);
        return {
            results: 0,
            values: [],
            error: "Error occurred while searching ElasticSearch"
        }
    }

}

module.exports = {
    getStates
}