document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('greeting').innerHTML = 'Привет, Кирилл!';

    function updateTime() {
        const now = new Date();
        document.getElementById('time').innerHTML = 'Текущее время: ' + now.toLocaleTimeString();
    }

    setInterval(updateTime, 1000);
    updateTime();
});
