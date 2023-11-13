const status_Btn = document.getElementById('status-btn');
const info_Btn = document.getElementById('info-btn');
const halt_Btn = document.getElementById('halt-btn');
const response_element = document.getElementById('response-element');

status_Btn.addEventListener('click', () => {

    console.log("status button hit")
    fetch("http://127.0.0.1/:5000/status", {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        response_element.innerHTML = `<p>Status: ${data.uptime}</p>`;
    })
    .catch(error => {
        console.error('Error fetching status:', error);
    });
});

info_Btn.addEventListener('click', () => {
    fetch("http://127.0.0.1/:5000/status", {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        response_element.innerHTML = `<p>Info: ${data.metadata}</p>`;
    })
    .catch(error => {
        console.error('Error fetching info:', error);
    });
});

halt_Btn.addEventListener('click', () => {
    fetch("http://127.0.0.1/:5000/status", {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        response_element.innerHTML = `<p>Status: ${data.status}</p>`;
    })
    .catch(error => {
        console.error('Error halting server:', error);
    });
});