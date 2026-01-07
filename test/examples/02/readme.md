### Create PNG QRCode from text files, contains URL

`file2qr` can create PNG QRCodes from text files, contains URL.

```typescript file=./gulpfile.ts
import { file2qr } from '#gulp-file2qr';
import GulpClient from 'gulp';

function task1() {
  return GulpClient.src('fixtures/*.txt')
    .pipe(file2qr())
    .pipe(GulpClient.dest('output'));
};
task1.description = 'Test gulp task for creating PNG QR codes';
GulpClient.task(task1);

```

.txt files, for this example:

```text file=./fixtures/test-file.txt
https://github.com/IT-Service-NPM/gulp-file2qr
```

QRCode:

[![QRCode](./output/test-file.png)](./output/test-file.png)
