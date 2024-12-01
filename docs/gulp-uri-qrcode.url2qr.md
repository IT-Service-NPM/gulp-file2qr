<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [gulp-uri-qrcode](./gulp-uri-qrcode.md) &gt; [url2qr](./gulp-uri-qrcode.url2qr.md)

## url2qr() function

Plugin fabric function.

Returns Gulp plugin stream for transformation .url files to PNG QR codes.

.url files - INI files. For example:

```ini
[{000214A0-0000-0000-C000-000000000046}]
Prop3=19,2
[InternetShortcut]
URL=https://github.com/IT-Service-NPM/gulp-URI-QRCode
```

**Signature:**

```typescript
declare function url2qr(options?: Options): QRCodesFromURICreatorStream;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

options


</td><td>

[Options](./gulp-uri-qrcode.options.md)


</td><td>

_(Optional)_ [Options](./gulp-uri-qrcode.options.md) for QRCode generator


</td></tr>
</tbody></table>
**Returns:**

[QRCodesFromURICreatorStream](./gulp-uri-qrcode.qrcodesfromuricreatorstream.md)
