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

const repoId = 'MDEwOlJlcG9zaXRvcnkxOTc3MjY4NTY=';
const token = '00a82e375c76ef7099c615677b7a97d0024d2465';
const label = {color: 'ff0000', name: 'test', description: 'test description'};

gitCreateReposLables({label, repoId, token});
//=> {id: 1479855803, node_id: 'MDU6TGFiZWwxNDc5ODU1ODAz', url: 'https://api.github.com/repos/post/post-static/labels/test', name: 'test', color: 'ff0000', description: 'test description', default: true}
```

## API
#### `label`

Type: `object` **`Required`**  
Default: `undefined`  
Description: *label creation options `{name: string, color: string, description: string}` when `{name, color}` are required*

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
