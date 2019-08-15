"use strict";
exports.__esModule = true;
var graphqlGot = require("graphql-got");
exports["default"] = (function (_a) {
    var _b = _a.label, color = _b.color, name = _b.name, description = _b.description, repoId = _a.repoId, token = _a.token;
    return graphqlGot('https://api.github.com/graphql', {
        query: "mutation {\n      createLabel(input: {color: \"" + color + "\", name: \"" + name + "\", description: \"" + description + "\", repositoryId: \"" + repoId + "\"}) {\n        label {\n          id\n          url\n        }\n      }\n    }",
        headers: {
            'accept': 'application/vnd.github.bane-preview+json'
        },
        token: token
    }).then(function (_a) {
        var label = _a.body.createLabel.label;
        return label;
    });
});
