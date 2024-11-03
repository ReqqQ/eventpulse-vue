<template>
  <NuxtLayout :name="layout">
    <v-row>
      <v-col cols="4">
        <v-card
            class="mx-auto pa-12 pb-8"
            elevation="8"
            max-width="448"
            rounded="lg"
        >
          <v-card
              class="mb-12"
              color="surface-variant"
              variant="tonal"
          >
            <v-card-text class="text-medium-emphasis text-caption">
              Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
            </v-card-text>
          </v-card>
          <v-btn
              :loading="loading"
              class="flex-grow-1"
              height="48"
              variant="tonal"
              @click="load"
          >
            Login via Facebook
          </v-btn>

        </v-card>

      </v-col>
      <v-col cols="8">
        <NuxtImg src="/circle.png"></NuxtImg>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>

<script setup lang="ts">
const layout = "login";
const fingerStore = fingerPrintStore();
const config = useRuntimeConfig()

onMounted(() => {
  console.log('wut ' + fingerStore.getFingerPrint);
});
let loading = ref(false);
const load = async () => {
  try {
    const data = await $fetch('/user/dialog', {
      baseURL: config.public.apiBase,
      credentials: 'include'
    })
    window.open(data, '_blank')
    console.log(data)
  } catch (error) {
    console.error('Błąd podczas pobierania danych:', error)
  }
}

</script>