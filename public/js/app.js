if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => console.log("serviceWorker registredd", reg))
    .catch(err => console.log("serviceWorker not registred", err));
}
