// Import Firebase scripts pour gérer les notifications en arrière-plan
importScripts("https://www.gstatic.com/firebasejs/11.2.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging-compat.js");

// Configuration Firebase (REMPLACE avec tes propres valeurs)
const firebaseConfig = {
    apiKey: "AIzaSyASQVCg8yyA_oRBn_PnGQUYTg4WwHjqByI",
    authDomain: "pc-scraper-poc.firebaseapp.com",
    projectId: "pc-scraper-poc",
    storageBucket: "pc-scraper-poc.firebasestorage.app",
    messagingSenderId: "474435730603",
    appId: "1:474435730603:web:ddd69a9b3cbc88de24cbee"
};

// Initialise Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Gérer la réception des notifications en arrière-plan
messaging.onBackgroundMessage((payload) => {
    console.log("📩 Notification reçue en arrière-plan :", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/logo.png" // Optionnel : icône de la notification
    });
});
