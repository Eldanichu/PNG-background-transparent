<template>
  <div class="app-index content__inner">
    <png-bg-color-tool></png-bg-color-tool>
  </div>
</template>

<script>
import PngBgColorTool from "@/components/PngBg";

export default {
  name: "AppIndex",
  components: {PngBgColorTool}
};
</script>

<style lang="scss" scoped>
.app-index {
  $colors: (
      #3d0377 #380589 #370399 #3b0670 #24086b #5c0189 #290277 #630191 #33027c #50048e
  );

  $font-colors: (
      #fcfcfc #545454 #0a0a0a #141414 #bababa #d3d3d3 #f7f7f7 #424242 #353535 #bababa
  );
  background-color: nth($colors, 1);
  color: nth($font-colors, 1);
}
</style>
