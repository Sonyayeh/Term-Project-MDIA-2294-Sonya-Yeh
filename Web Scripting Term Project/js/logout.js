document.addEventListener("DOMContentLoaded", function() {
    const logoutLogo = document.getElementById("logout-logo");

    if (logoutLogo) {
        logoutLogo.addEventListener("click", function() {
            logout();
        });
    } else {
        console.error("Logout logo image not found");
    }
});
