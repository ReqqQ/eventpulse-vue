<template>
  <NuxtLayout :name="layout">
    <v-row>
      <v-col>
        T1
      </v-col>
      <v-col>
        <NuxtImg src="/circle.png"></NuxtImg>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "login";
const fingerStore = fingerPrintStore();

onMounted(() => {
  console.log('wut ' + fingerStore.getFingerPrint);
});
</script>