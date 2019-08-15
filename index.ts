import graphqlGot = require('graphql-got');
import { options } from './interface';

export default ({label: {color, name, description}, repoId, token}: options) => {
  return graphqlGot('https://api.github.com/graphql', {
    query: `mutation {
      createLabel(input: {color: "${color}", name: "${name}", description: "${description}", repositoryId: "${repoId}"}) {
        label {
          id
          url
        }
      }
    }`, 
    headers: {
      'accept': 'application/vnd.github.bane-preview+json'
    },
    token
  }).then(({body: {createLabel: {label}}}) => label);
}
