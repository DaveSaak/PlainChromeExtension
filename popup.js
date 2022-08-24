document.getElementById('loginButton').onclick = function () {

    const responseInfo = document.getElementById('responseInfo');
    responseInfo.innerHTML = '';

    const headers = { 'Content-Type': 'application/json' }
    const payload = {
        grantType: "password",
        clientId: "12345",
        email: "my-email@host.com",
        password: "my-password"
    };

    fetch('https://api2.myhours.com/api/tokens/login', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
    })
        .then(response => {
            responseInfo.innerHTML = response.statusText;
        })
        .catch((error) => {
            console.log(error);
            responseInfo.innerHTML = error;
        });

}