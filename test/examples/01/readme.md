# Create PNG QRCode from string, contains URL

`file2qr` can create PNG QRCodes from string, contains URL.

```javascript file=./gulpfile.mjs
import { file2qr } from '#gulp-file2qr';
import GulpClient from 'gulp';
import file from 'gulp-file';

function task1() {
  return file(
    'test-file',
    'https://github.com/IT-Service-NPM/gulp-file2qr',
    { src: true }
  )
    .pipe(file2qr())
    .pipe(GulpClient.dest('output'));
};
task1.description = 'Test gulp task for creating PNG QR codes';
GulpClient.task(task1);
```

QRCode:

[![QRCode](./output/test-file.png)](./output/test-file.png)
