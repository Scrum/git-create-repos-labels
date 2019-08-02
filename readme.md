# git-create-repos-labels
> A iny helper to get a list of labels from the github repository

[![Travis Build Status](https://img.shields.io/travis/Scrum/git-create-repos-labels/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/git-create-repos-labels)[![Coveralls status](https://img.shields.io/coveralls/Scrum/git-create-repos-labels.svg?style=flat-square)](https://coveralls.io/r/Scrum/git-create-repos-labels)

## Install
```bash
npm install git-create-repos-labels
```

## Usage
```js
import gitCreateReposLables from 'git-create-repos-labels';

gitCreateReposLables({
  label: {
    name: 'bug',
    color: 'd73a4a',
    description: 'Something isn\'t working'
  },
  owner: 'scrum', 
  repo: 'slims', 
  token: '59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f'
});
//=> {id: 1479855803, node_id: 'MDU6TGFiZWwxNDc5ODU1ODAz', url: 'https://api.github.com/repos/post/post-slims/labels/bug', name: 'bug', color: 'd73a4a', default: true}
```

## API
#### `label`

Type: `object` **`Required`**  
Default: `undefined`  
Description: *label creation options `{name: string, color: string, description: string}`* when `{name, color}` are required

#### `owner`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *Github owner or organization name.*

#### `repo`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *Repository name.*

#### `token`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)*
