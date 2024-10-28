import { defineStore } from 'pinia'

export const fingerPrintStore = defineStore('fingerprint', {
    state: () => ({
        fingerPrint: '',
    }),
    getters: {
        getFingerPrint: (state) => state.fingerPrint,
    },
    actions:{
        setFingerPrint(fingerprintHash){
            this.fingerPrint = fingerprintHash;
        }
    }
})