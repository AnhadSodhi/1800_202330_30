function redirectUserIfNotLoggedIn() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.href = "./login.html";
        }
    });
}
redirectUserIfNotLoggedIn();