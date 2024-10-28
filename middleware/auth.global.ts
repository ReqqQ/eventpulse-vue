export default defineNuxtRouteMiddleware(async (to, from) => {
    if (!process.server) {
        return;
    }

    const headers = useRequestHeaders(['cookie']);
    let isAuthenticated: boolean;
    try {
        isAuthenticated = await $fetch('/user', {
            credentials: 'include',
            headers: {cookie: headers.cookie,},
            baseURL: 'http://localhost:8080'
        });
    } catch (error) {
        isAuthenticated = false;
    }

    if (to.path === '/login' && isAuthenticated) {
        return navigateTo('/');
    }

    if (!isAuthenticated && to.path !== '/login') {
        return navigateTo('/login');
    }
});
