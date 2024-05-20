const VERSION = '1.0.0'

import fs from 'node:fs';
import {minify} from 'uglify-js';

fs.readFile('./myscript.js', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    var result = minify(data, { toplevel: true });
    console.log(result.code);
});
