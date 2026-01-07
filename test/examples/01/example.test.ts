/* eslint-disable max-statements */
import { describe, expect, it, beforeEach } from 'vitest';
import { promisify } from 'node:util';
import * as path from 'node:path';
import * as fs from 'node:fs';
/* eslint-disable-next-line
    @typescript-eslint/no-unsafe-assignment,
    @typescript-eslint/no-require-imports
*/
const QrCode = require('qrcode-reader');
import { Jimp } from 'jimp';
import GulpClient from 'gulp';
import './gulpfile.mjs';

const testDestFilesPath: string = path.join(__dirname, 'output');

describe('url2qr', () => {

  beforeEach(() => {
    fs.rmSync(testDestFilesPath, { force: true, recursive: true });
  });

  it('must generate PNG QR code from string, contains URL', async () => {
    try {
      const _cwd = process.cwd();
      try {
        process.chdir(__dirname);
        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
        await promisify(GulpClient.series('task1'))();
      } finally {
        process.chdir(_cwd);
      };
    } catch (err) {
      expect.unreachable(`
Unexpected error processing block.
All exceptions must be handled in test. Error:
${err as Error}
`
      );
    };

    expect(
      fs.existsSync(testDestFilesPath),
      `Output directory must be exists: "${testDestFilesPath}"`
    ).toBeTruthy();
    const QRCodePath = path.join(testDestFilesPath, 'test-file.png');
    expect(
      fs.existsSync(QRCodePath),
      `Output QR code file expected: "${QRCodePath}"`
    ).toBeTruthy();

    let QRCodeData: string;
    try {
      const QRCodeBuffer = fs.readFileSync(QRCodePath);
      const QRCodeImage = await Jimp.read(QRCodeBuffer);
      QRCodeData = await new Promise<string>((resolve, reject) => {
        /* eslint-disable-next-line
            @typescript-eslint/no-unsafe-assignment,
            @typescript-eslint/no-unsafe-call
        */
        const qr = new QrCode();
        /* eslint-disable-next-line
            @typescript-eslint/no-unsafe-member-access,
            @typescript-eslint/no-explicit-any
        */
        qr.callback = function (error: Error | null, value: any) {
          if (error) {
            reject(error);
          } else {
            /* eslint-disable-next-line
                @typescript-eslint/no-unsafe-member-access
            */
            resolve(value.result as string);
          };
        };
        /* eslint-disable-next-line
            @typescript-eslint/no-unsafe-member-access,
            @typescript-eslint/no-unsafe-call
        */
        qr.decode(QRCodeImage.bitmap);
      });
    } catch (err) {
      expect.unreachable(`
Unexpected error processing block.
All exceptions must be handled in test. Error:
${err as Error}
`
      );
    };

    expect(QRCodeData).to.be
      .equals('https://github.com/IT-Service-NPM/gulp-file2qr');
  });

});
