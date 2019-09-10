const css = require('./app.scss');
require('./scripts/fontawesome');
require('bootstrap');
window.AOS = require('aos');
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-out-sine',
    delay: 100,
});
