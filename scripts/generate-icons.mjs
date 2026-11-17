import sharp from "sharp";

await sharp("public/favicon.svg")
  .resize(32, 32)
  .png()
  .toFile("public/favicon-32x32.png");

await sharp("public/favicon.svg")
  .resize(180, 180)
  .png()
  .toFile("public/apple-touch-icon.png");

console.log("Favicon PNG files generated successfully.");