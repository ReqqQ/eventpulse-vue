<template>
  <NuxtLayout class="layout-login" :name="layout">
    <v-row>
      <v-col>t</v-col>
    </v-row>
  </NuxtLayout>
</template>
<script setup lang="ts">

const layout = "login"
const fingerStore = fingerPrintStore()
onMounted(() => {
  console.log('wut ' + fingerStore.getFingerPrint)
})
</script>
<style>
.layout-login {
  background: #0B1739 !important;
}
</style>