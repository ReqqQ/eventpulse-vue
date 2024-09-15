<template>
  <v-layout class="rounded rounded-md">

    <v-main class="flex-grow-1">
      <v-container class="d-flex fill-height">
        <slot/>
      </v-container>

    </v-main>
    <v-footer color="blue" app absolute>Footer Absolute</v-footer>
  </v-layout>
</template>
<script setup lang="ts">
</script>