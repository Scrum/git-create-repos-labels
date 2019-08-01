import test from 'ava';
import gitCreateReposLables from './index';

test('pkg is function', t => {
	t.is(typeof gitCreateReposLables, 'function');
});