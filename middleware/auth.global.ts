export default defineNuxtRouteMiddleware(async (to, from) => {
    if (!import.meta.env.SSR) {
        console.log('no ssr');
        return;
    }

    const headers = useRequestHeaders(['cookie']);
    let isAuthenticated;

    console.log('Nuxt ssr');

    try {
        isAuthenticated = await $fetch('/api/user', {
            credentials: 'include',
            baseURL: useRuntimeConfig().apiBase,
            headers: { cookie: headers.cookie },
        });
        console.log('IS: ' + isAuthenticated);
    } catch (error) {
        console.log('IS: ' + error);
        isAuthenticated = false;
    }

    if (to.path === '/login' && isAuthenticated) {
        return navigateTo('/');
    }

    if (!isAuthenticated && to.path !== '/login') {
        return navigateTo('/login');
    }
});
