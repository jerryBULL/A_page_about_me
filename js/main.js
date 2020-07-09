$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home','about','skill','personal_project','contact'],
        menu:'.header',
        navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
        scrollOverflow:true,
    });
})