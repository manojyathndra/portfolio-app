<template>
  <div>
    <v-container>
        <video autoplay muted loop id="video-bg">
            <source src="@/assets/Charter.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </v-container>
  </div>
</template>

<style>
#video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: -1;
}
</style>
