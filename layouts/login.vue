<template>
  <v-layout class="rounded rounded-md">
    <v-main class="flex-grow-1">
      <div class="layout-login"></div> <!-- Tło będzie za resztą treści w `v-main` -->
      <v-container class="d-flex fill-height">
        <slot/>
      </v-container>
    </v-main>
    <v-footer color="blue" app absolute>Footer Absolute</v-footer>
  </v-layout>
</template>

<style scoped>
.layout-login {
  background-color: #03070c;
  position: absolute; /* Ustawia pozycję absolutną */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; /* Umieszcza tło za innymi elementami */
  overflow: hidden;
}

.layout-login::before,
.layout-login::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../public/stars.png'), url('../public/stars.png'), url('../public/stars.png'), url('../public/stars.png');
  background-size: 200px, 250px, 180px, 220px;
  background-repeat: repeat;
  background-position:
      0 0,
      50px 50px,
      100px 100px,
      -50px -50px;
  transform: rotate(5deg);
  opacity: 0.8;
}

.layout-login::before {
  animation: twinkle1 3s infinite alternate;
}

.layout-login::after {
  animation: twinkle2 4s infinite alternate;
}

/* Definicje animacji */
@keyframes twinkle1 {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 0.2; }
}

@keyframes twinkle2 {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.3; }
}
</style>
