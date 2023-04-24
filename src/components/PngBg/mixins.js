export const PMethods = {
  methods: {
    toTransparent(e) {
      let ctx = e.getContext("2d");
      let _w = e.width,
        _h = e.height;
      let image = ctx.createImageData(_w, _h);
      let data = image.data;
      for (let ph = 0; ph < _h; ph++) {
        for (let pw = 0; pw < _w; pw++) {
          let c = (ph * _w + pw) << 2;
          let l = ((ph >> 2) + (pw >> 2)) & !0 ? 204 : 255;
          data[c] = l;
          data[c + 1] = l;
          data[c + 2] = l;
          data[c + 3] = 255;
        }
        ctx.putImageData(image, 0, 0);
      }
    },
    convertColorSampleToTransparent(img, sampleColor, tolerance = 200) {
      // Create a canvas element

      let $cav = this.$refs.cav;
      let {h, w} = this.cav;
      const canvas = $cav;
      canvas.width = w;
      canvas.height = h;

      // Get the 2D drawing context of the canvas
      const ctx = canvas.getContext("2d");

      // Draw the image onto the canvas
      ctx.drawImage(
          img,
          canvas.width * 0.5 - img.width * 0.5,
          canvas.height * 0.5 - img.height * 0.5
      );

      // Get the image data for the canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Loop through each pixel in the image data and check if it's within the tolerance range of the sample color
      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        const a = imageData.data[i + 3];

        // Calculate the distance between the pixel color and the sample color
        const distance = Math.sqrt(
            Math.pow(r - sampleColor[0], 2) +
            Math.pow(g - sampleColor[1], 2) +
            Math.pow(b - sampleColor[2], 2)
        );

        if (distance <= tolerance) {
          // Set the alpha value of the pixel to 0
          imageData.data[i + 3] = 0;
        }
      }

      // Put the modified image data back onto the canvas
      ctx.putImageData(imageData, 0, 0);

      // Return the new image element
      return canvas.toDataURL();
    },
  },
};
