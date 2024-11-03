import FingerprintJS from '@fingerprintjs/fingerprintjs';
import Bowser from "bowser"
import CryptoJS from "crypto-js";
import {fingerPrintStore} from "~/stores/fingerprint";


export default defineNuxtPlugin(async (nuxtApp) => {
    const fingerStore = fingerPrintStore()
    const browser = Bowser.getParser(window.navigator.userAgent);
    const fingerPrintAgent = await FingerprintJS.load();
    const visitorInstance = await fingerPrintAgent.get();

    const dataString = [
        visitorInstance.visitorId,
        browser.getBrowserName(),
        browser.getBrowserVersion(),
        browser.getOSName(),
        browser.getOSVersion(),
        browser.getPlatformType(),
        Intl.DateTimeFormat().resolvedOptions().timeZone,
        navigator.language || navigator.userLanguage,
        window.screen.colorDepth
    ].join('|');

    fingerStore.setFingerPrint(CryptoJS.SHA256(dataString))
})