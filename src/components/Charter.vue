<template>
   <div class="flex.container">
    <div class="flex-sixty">
      <div class="video-background">
        <v-container>
            <video autoplay muted loop id="video-bg">
                <source src="@/assets/Charter.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </v-container>
      </div>
    </div>
    <div class="flex-forty">
      <h1 class="text-h4 font-weight-thin mb-4">
        Vuetify
      </h1>
      <h4 class="subheading">
        Build your application today!
      </h4>
    </div>
  </div>
</template>

<style>
.flex-container {
  display: flex;
}

.flex-item-60 {
  flex: 60;
}

.flex-item-40 {
  flex: 40;
}
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

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
