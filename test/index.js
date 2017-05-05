'use strict';

import test from 'ava';
import stylelint from 'stylelint';
import tempWrite from 'temp-write';

const runStyleLint = text => stylelint.lint({
    configFile: require.resolve('../'),
    files: [tempWrite.sync(text)]
});

test('stylelint', async t => {
    const result = await runStyleLint('a { color: #000; }');

    t.is(JSON.parse(result.output)[0].warnings[0].rule, 'no-missing-end-of-source-newline');
});
