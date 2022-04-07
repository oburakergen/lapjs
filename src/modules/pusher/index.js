//const webPush = require('web-push');

self.addEventListener('push',(e) => {
    e.waitUntil(self.registration.showNotification('Yeni Makele Eklendi'))
})

class Function {
    constructor() {
        this.campaigns = [];
        this.vapidKeys = 'BNFgpqU1EMuSn4KbCE3Elp34pfo4WsKr6NgYthQCEhM92BzzbIQVgyFsAs327SGEaVjycU5DcLi8sy0Go8W6KUI';
    }

    async getWebPush() {
        const serviceWorker =  await window.navigator.serviceWorker.ready;
        const clientID = await serviceWorker.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: this.vapidKeys
        });

        console.log(serviceWorker, clientID);

        return clientID;
    }
}

export default new Function;
