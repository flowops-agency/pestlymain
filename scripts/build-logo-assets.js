const sharp = require("sharp");
const fs = require("fs");

async function run() {
  const src =
    "C:/Users/noahb/.grok/sessions/C%3A%5CUsers%5Cnoahb%5CDesktop%5CVsCode%5CPestly%5CWebsite%5Caoidjas/019f4840-d69e-79a0-b976-ff0deb9a0816/images/8.jpg";

  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const v = (data[i] + data[i + 1] + data[i + 2]) / 3;
    if (v < 140) {
      rgba[j] = 17;
      rgba[j + 1] = 17;
      rgba[j + 2] = 17;
      rgba[j + 3] = v < 100 ? 255 : Math.round(((140 - v) / 40) * 255);
    } else {
      rgba[j] = 0;
      rgba[j + 1] = 0;
      rgba[j + 2] = 0;
      rgba[j + 3] = 0;
    }
  }

  const mark = await sharp(rgba, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim()
    .png()
    .toBuffer();

  const tm = await sharp(mark).metadata();
  const side = Math.max(tm.width, tm.height);
  const pad = Math.round(side * 0.1);

  await sharp(mark)
    .extend({
      top: pad + Math.floor((side - tm.height) / 2),
      bottom: pad + Math.ceil((side - tm.height) / 2),
      left: pad + Math.floor((side - tm.width) / 2),
      right: pad + Math.ceil((side - tm.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .resize(512, 512)
    .png()
    .toFile("public/pestly-icon.png");

  const icon = await sharp("public/pestly-icon.png")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < icon.data.length; i += 4) {
    if (icon.data[i + 3] > 10) {
      icon.data[i] = 255;
      icon.data[i + 1] = 255;
      icon.data[i + 2] = 255;
    }
  }
  await sharp(icon.data, {
    raw: { width: icon.info.width, height: icon.info.height, channels: 4 },
  })
    .png()
    .toFile("public/pestly-icon-white.png");

  await sharp("public/pestly-icon.png")
    .flatten({ background: "#ffffff" })
    .png()
    .toFile("public/logo-prototypes/verify-on-white.png");

  const small = await sharp("public/pestly-icon.png").resize(128, 128).png().toBuffer();
  const b64 = small.toString("base64");
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Pestly">' +
    '<image href="data:image/png;base64,' +
    b64 +
    '" width="128" height="128"/></svg>';
  fs.writeFileSync("public/pestly-icon.svg", svg);

  const mark72 = await sharp("public/pestly-icon.png")
    .resize(72, 72, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const textSvg = Buffer.from(
    '<svg width="220" height="72" xmlns="http://www.w3.org/2000/svg"><text x="0" y="50" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#111111">Pestly</text></svg>'
  );
  const textPng = await sharp(textSvg).png().toBuffer();
  await sharp({
    create: {
      width: 300,
      height: 72,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: mark72, left: 0, top: 0 },
      { input: textPng, left: 84, top: 0 },
    ])
    .png()
    .toFile("public/pestly-logo.png");

  // logo svg
  fs.writeFileSync(
    "public/pestly-logo.svg",
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 72" role="img" aria-label="Pestly">' +
      '<image href="data:image/png;base64,' +
      (await sharp("public/pestly-icon.png").resize(72, 72).png().toBuffer()).toString("base64") +
      '" x="0" y="0" width="72" height="72"/>' +
      '<text x="88" y="48" font-family="Inter, Arial, sans-serif" font-size="40" font-weight="700" letter-spacing="-1.5" fill="#111111">Pestly</text>' +
      "</svg>"
  );

  const out = await sharp("public/pestly-icon.png")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let opaque = 0,
    clear = 0;
  for (let i = 0; i < out.data.length; i += 4) {
    if (out.data[i + 3] < 10) clear++;
    else opaque++;
  }
  console.log({ opaque, clear, svgBytes: svg.length });
}
run().catch((e) => {
  console.error(e);
  process.exit(1);
});
