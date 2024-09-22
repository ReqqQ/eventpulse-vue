<template>
  <NuxtLayout :name="layout">
    <v-row class="h-100 d-flex justify-space-evenly">
      <v-col cols="6" class="d-flex justify-center align-center">
        <NuxtImg :src="getLogoImage()" class="h-75"/>
      </v-col>
      <v-col cols="6" class="pa-5 d-flex align-center ">
        <v-sheet
            border="md"
            class="px-10 text-white card mx-auto h-75"
            rounded="xl" width="450px" max-width="500px"
        >
          <v-row class="flex-column h-100">
            <v-col class="d-flex justify-center align-center flex-grow-0">
              <h1 class="title py-10">Event Pulse</h1>
            </v-col>
            <v-col class="d-flex align-end flex-grow-0">
              <v-btn size="x-large" rounded="xl" class="btn-login text-none" block>
                Login with
                <v-icon left>mdi-google</v-icon>
                oogle
              </v-btn>
            </v-col>
            <v-divider></v-divider>
            <v-col class="flex-grow-0">
              <div class="text-center">Or login with:</div>
            </v-col>
            <v-col>
              <v-row class="d-flex justify-center">
                <v-col cols="2" class="d-flex justify-center">
                  <v-btn @click="stateFetch()" variant="plain" :ripple="false" class="d-inline">
                    <NuxtImg src="/fb-icon.svg" class="social-img"/>
                  </v-btn>
                </v-col>
                <v-col cols="2" class="d-flex justify-center">
                  <v-btn @click="stateFetch()" variant="plain" :ripple="false" class="d-inline">
                    <NuxtImg src="/ig.png" class="social-img"/>
                  </v-btn>
                </v-col>
                <v-col cols="2" class="d-flex justify-center">
                  <v-btn @click="stateFetch()" variant="plain" :ripple="false" class="d-inline">
                    <NuxtImg src="/tiktok.png" class="social-img"/>
                  </v-btn>
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
const router = useRouter()
const getStatus = () => {
  FB.getLoginStatus(function(response) {
    console.log(response)
    if (response.status === 'connected') {
     router.push('/')
    } else if (response.status === 'not_authorized') {
     fbLogin()
    } else {
     fbLogin()
    }
  });
}

const fbLogin = () => {
  // Uruchamianie logowania za pomocą Facebook SDK
  FB.login(function(response) {
    if (response.authResponse) {
      FB.api('/me', function(response) {
        console.log(response);
      })
      stateFetch()

      router.push('/')
    } else {
      console.log('User cancelled login or did not authorize.')
    }
  })
}

const stateFetch = async function fetchData() {
  try {
    const data = await fetch('https://eventpulse.local/api/session')
    const jsonData = await data.json();
    console.log(jsonData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  try {
    const data = await fetch('https://eventpulse.local/api/session',{
      method: 'POST',
      body: {}
    })
    const jsonData = await data.json();
    console.log('POST =>');
    console.log(jsonData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onMounted(() => {
  window.fbAsyncInit = function() {
    FB.init({
      appId: '1065139998519797', // Wstaw tutaj swój App ID z Facebooka
      cookie: true, // Pozwala na wykorzystanie ciasteczek w sesjach
      xfbml: true, // Parsowanie znaczników social pluginów
      version: 'v20.0' // Aktualna wersja Graph API
    })
  }

  // Asynchroniczne ładowanie SDK Facebooka
  const loadFacebookSDK = () => {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = 'https://connect.facebook.net/en_US/sdk.js'
    script.crossOrigin = 'anonymous'
    document.body.appendChild(script)
  }

  loadFacebookSDK()
})
  const fbLink = 'https://www.facebook.com/v20.0/dialog/oauth?client_id=1065139998519797&redirect_uri=http://localhost:3000/&state=tes&display=popup&response_type=code&scope=public_profile'
  const token = 'https://graph.facebook.com/v20.0/oauth/access_token?\n' +
      'client_id=1065139998519797\n' +
      '&redirect_uri=http://localhost:3000/\n' +
      '&client_secret=a8b8c274c31b00e015680a7f5902ff4e\n' +
      '&code=AQBJb8Q-GVIR4WVv8_jkDqvfsmTsnzlPEefMJ3gHM_x1qQiBld5U-xF6hYxMdkJ4zjZ_uHPKw4DL4QEe2duLYmUxTA86YBgi9N1UTn4bIuc0v0sPpzyiX3vIXasRQVpzl0mvsu9uUBGx7zyR3EtqwhKnfBgBgBcbwQTCzw1rH7ZC8odwO6H7Id1B28TV8A3HWTiGtA3gz6g0M2dEuFEn-hu23kemcWNsXwe2qjuY-vGvAABenICx-pl_NV6Z5i0fqD6Fkk9IDLg6kRGXxuR_0qphaBI8IabolgYJZkq5ryuLFLJ8UWKcm2iuoteT31XoucodTpjcD6vCnGRgvcZTi2NCdVyIw449jAcrz3XrCua0KxF7I-AQr2aoYPyxpdGWre4NwYYvFb6f69qVSUnOYZ41PMmR0kC0JSjwy_43AEC1bQ'
  const layout = "login"
</script>
<style scoped>
.social-img {
  display: inline-block;
  position: relative;
  border-radius: 50%; /* Make the container circular */
  overflow: hidden; /* Hide anything outside the circular boundary */
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
}

.social-img img {
  display: block;
  border-radius: 50%; /* Make the image circular to match the container */
  background-color: transparent; /* Ensure no background */
}

.social-img:hover {
  transform: scale(1.3);
  box-shadow: 0 0 5px 3px rgb(9 125 235 / 35%);
}


.btn-login {
  background: #4285F4;
}

.card {
  backdrop-filter: blur(15px) saturate(150%);
  background-color: rgba(85, 84, 82, 0.13); /* Zwiększamy przezroczystość */
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); /* Mocniejszy cień dla większej głębi */
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 30px;
  width: 350px;
  text-align: center;
}
</style>