var temperatureInputs = ['celcius', 'farenheit', 'kelvin', 'rankine'];
temperatureInputs.forEach(function (inputId) {
    document.getElementById(inputId).addEventListener('input', function () {
        var currentValue = parseFloat(this.value);
        if (!isNaN(currentValue)) {
            switch (inputId) {
                case 'celcius':
                    document.getElementById('farenheit').value = (currentValue * 9 / 5) + 32;
                    document.getElementById('kelvin').value = currentValue + 273.15;
                    document.getElementById('rankine').value = (currentValue + 273.15) * 9 / 5;
                    break;
                case 'farenheit':
                    document.getElementById('celcius').value = (currentValue - 32) * 5 / 9;
                    document.getElementById('kelvin').value = (currentValue - 32) * 5 / 9 + 273.15;
                    document.getElementById('rankine').value = currentValue + 459.67;
                    break;
                case 'kelvin':
                    document.getElementById('celcius').value = currentValue - 273.15;
                    document.getElementById('farenheit').value = (currentValue - 273.15) * 9 / 5 + 32;
                    document.getElementById('rankine').value = currentValue * 5 / 9 * 9 / 5;
                    break;
                case 'rankine':
                    document.getElementById('celcius').value = (currentValue - 491.67) * 5 / 9;
                    document.getElementById('farenheit').value = currentValue - 459.67;
                    document.getElementById('kelvin').value = currentValue * 5 / 9;
                    break;
                default:
                    break;
            }
        }
        else {
            temperatureInputs.forEach(function (inputId) {
                document.getElementById(inputId).value = "";
            })
        }
    });
});