<template>
  <div ref="splineContainer" :style="containerStyle"></div>
</template>

<script>
import { Application } from '@splinetool/runtime';

export default {
  name: 'SplineViewer',
  props: {
    scene: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    containerStyle() {
      return {
        width: this.width,
        height: this.height,
        position: 'relative'
      };
    }
  },
  mounted() {
    this.loadSplineScene();
  },
  methods: {
    loadSplineScene() {
      const spline = new Application(this.$refs.splineContainer);
      spline.load(this.scene);
    }
  }
}
</script> 