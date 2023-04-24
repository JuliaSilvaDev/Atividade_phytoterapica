(function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
        return;
    }
    const disableSW = 'false' === 'true';
    const swPath = '/serviceWorkerMerged.js';
    if (disableSW) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            if (window.location) {
                registrations.forEach((registration) => {
                    const sameScope = (window.location.origin + window.location.pathname).includes(registration.scope);
                    const sameSW = registration.active &&
                        registration.active.scriptURL.includes(swPath);
                    if (sameScope && sameSW) {
                        registration.unregister();
                    }
                });
            }
        });
    }
    else {
        navigator.serviceWorker
            .register(swPath, {
            scope: '/',
        })
            .catch(function error(err) {
            // eslint-disable-next-line no-console
            console.log('ServiceWorker registration failed: ', err);
        });
    }
})()