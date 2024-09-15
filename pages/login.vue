<template>
  <NuxtLayout :name="layout">
    <v-row class="h-100 d-flex justify-space-evenly">
      <v-col cols="2" class="d-flex justify-center align-center">
        <NuxtImg :src="getLogoImage()" class="h-50"/>
      </v-col>
      <v-col cols="3" class="pa-5 d-flex align-center ">
        <v-sheet
            border="md"
            class="pa-3 text-white mx-auto h-50"
            color="#141518"
            max-width="400"
        >
          <v-row class="flex-column h-100">
            <v-col class="d-flex justify-center align-center">
              <h1 class="title">Event Pulse</h1>
            </v-col>
            <v-col class="d-flex align-end">
              <v-btn color="primary" class="google-btn" block>
                Login with <v-icon left>mdi-google</v-icon>oogle
              </v-btn>
            </v-col>
            <v-divider></v-divider>
            <v-col class="flex-grow-0">
              <div class="text-center">Or login with:</div>
            </v-col>
            <v-col >
              <v-row class="d-flex justify-center">
                <v-col cols="2" class="text-center">
                  <v-avatar size="40">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/TikTok_Logo.svg" alt="TikTok">
                  </v-avatar>
                </v-col>
                <v-col cols="2" class="text-center">
                  <v-avatar size="40">
                    <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter">
                  </v-avatar>
                </v-col>
                <v-col cols="2" class="text-center">
                  <v-avatar size="40">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
                  </v-avatar>
                </v-col>
                <v-col cols="2" class="text-center">
                  <v-avatar size="40">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
                  </v-avatar>
                </v-col>
                <v-col cols="2" class="text-center">
                  <v-avatar size="40">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Discord_logo.svg" alt="Discord">
                  </v-avatar>
                </v-col>
                <v-col cols="2" class="text-center">
                  <v-avatar size="40">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Twitch_logo_2019.svg" alt="Twitch">
                  </v-avatar>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-sheet>

      </v-col>
    </v-row>
  </NuxtLayout>
</template>
<script setup lang="ts">
const row = 4
const layout = "login";
</script>
<style scoped>
.login-box {
  background-color: #2c2c2c; /* Tło boxa */
  border-radius: 12px; /* Zaokrąglone rogi */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Cień */
  padding: 16px;
}

</style>