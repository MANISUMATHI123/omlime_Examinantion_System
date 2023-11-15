function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        window.location.href = "exam.html";
    } else {
        document.getElementById("error-msg").innerHTML = "Invalid username or password.";
    }
}