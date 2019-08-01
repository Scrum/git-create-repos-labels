import ghGot = require('gh-got');
import { options, label } from './interface';

export default async ({label, owner, repo, token}: options): Promise<object> => {
  const {name, color, description}: label = label;
  const {body} =  await ghGot.post(`repos/${owner}/${repo}/labels`, {
    json: true,
    token,
    body: {name, color, description}
  });

  return body;
}
