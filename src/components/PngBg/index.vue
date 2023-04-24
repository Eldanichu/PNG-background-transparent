<template>
  <div class="t px-2 py-1">
    <div class="w-5/12">
      <input
          type="file"
          multiple
          @change="upload"
          accept=".png"
      />
     <div class="flex">
       <el-slider
           class="w-11/12 mx-2"
           @change="number"
           v-model="simple.value"
           :max="255"
           :min="0"
       ></el-slider>
       <el-button type="primary" @click="exportImage">导出</el-button>
     </div>
    </div>

    <div>
      <ul class="flex mt-2" style="background-color: hsla(0,0%,100%,0.1);">
        <li v-for="img in images">
          <el-image
              style="height: 200px;width: 200px"
              fit="contain"
              :src="img.data"
              :title="img.name"
              :alt="img.name"
          ></el-image>
        </li>
      </ul>
    </div>
    <div class="warp">

    </div>

  </div>
</template>

<script>
export default {
  name: "PngBgColorTool",
  components: {},
  data() {
    return {
      cav: {
        h: 600,
        w: 800
      },
      simple: {
        value: 0
      },
      files: [],
      images: [],
      selected_image: null
    };
  },
  mounted() {

  },
  methods: {
    upload(e) {
      let {target} = e;
      let files = target.files;
      let file;
      for (let i = 0; i <= files.length - 1; ++i) {
        file = files[i];
        this.readImage(file).then(res => {
          this.images.push({name: file.name, data: res});
          this.files.push({name: file.name, data: res});
        });
      }
    },
    readImage(file) {
      return new Promise(resolve => {
        let fr = new FileReader();
        fr.onload = (f) => {
          let res = f.target.result;
          resolve(res);
        };
        fr.readAsDataURL(file);
      });
    },
    async number(v) {
      let value = v;
      await this.draw(value);
    },
    async draw(value) {
      this.$set(this, 'images', []);
      this.files.reduce(async (prev, file) => {
        let i = await this.getImageDom(file.data);
        let res = this.convertColorSampleToTransparent(i, [0, 0, 0], value);
        this.images.push({name: file.name, data: res});
      }, []);
    },
    getImageDom(data) {
      return new Promise(resolve => {
        let $img = document.createElement("img");
        $img.src = data;
        $img.onload = () => {
          resolve($img);
        };
      });
    },
    exportImage() {
      let {images} = this;
      images.forEach((item, index) => {
        this.createDownloader({
          id: item.name,
          data: item.data,
          fileName: index + '@' + item.name
        });
      });
    },
    createDownloader({id, data, fileName}) {
      let fileURL = data;
      let $link = document.createElement('a');
      $link.setAttribute('class', id || 'file-downloader');
      $link.setAttribute('href', fileURL || '#');
      $link.setAttribute('download', fileName);
      document.body.appendChild($link);
      $link.style.display = 'none';
      $link.click();
      // let el = document.getElementsByClassName(id) || [];
      //
      // el.forEach(i => document.removeChild(i));
    },
    convertColorSampleToTransparent(img, sampleColor, tolerance = 200) {
      // Create a canvas element

      let $cav = document.createElement('canvas');
      const canvas = $cav;
      canvas.width = img.width;
      canvas.height = img.height;

      // Get the 2D drawing context of the canvas
      const ctx = canvas.getContext("2d");

      // Draw the image onto the canvas
      ctx.drawImage(
          img,
          0,
          0
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
    }
  },
};
</script>

<style lang="scss" scoped>
.t {

  .warp {
    position: relative;

    .cav {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 99;
    }
  }

  img {
    max-height: 120px;
    width: 90px;

  }

  input {
    color: black;
    background-color: #8d8d8d;
  }
}
</style>
