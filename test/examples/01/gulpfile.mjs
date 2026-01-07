import { file2qr } from '#gulp-file2qr';
import GulpClient from 'gulp';
import file from 'gulp-file';

function task1() {
  return file('test-file', 'https://github.com/IT-Service-NPM/gulp-file2qr', { src: true })
    .pipe(file2qr())
    .pipe(GulpClient.dest('output'));
};
task1.description = 'Test gulp task for creating PNG QR codes';
GulpClient.task(task1);
