/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */

document.getElementById('about-box').addEventListener('click', function() {
    document.querySelector('a[href="#about"]').click();
});

document.getElementById('experience-box').addEventListener('click', function() {
    document.querySelector('a[href="#experience"]').click();
});

document.getElementById('resume-box').addEventListener('click', function() {
    window.open('downloads/Weitong_Du_Resume-.pdf', '_blank');
});

document.getElementById('project-box').addEventListener('click', function() {
    document.querySelector('a[href="#project"]').click();
});

document.getElementById('contact-box').addEventListener('click', function() {
    document.querySelector('a[href="#contact"]').click();
});


(function($) {
    'use strict';
    $(function() {
        // Code here executes When the DOM is loaded...
    });
    $(window).on('load', function() {
        // Code here executes When the page is loaded
    });
}(jQuery));