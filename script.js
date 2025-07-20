document.querySelector('.header_btn button:nth-child(1)').onclick = function() {
    document.body.classList.remove('dark-mode');
};

document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.add('dark-mode');
};

document.querySelectorAll('.sidebar-cont a').forEach(function(link) {
    link.onclick = function() {
        document.querySelector('.sidebar-cont').style.display = 'none';
        document.body.style.overflow = '';
    };
});

document.querySelector('.svg2').onclick = function(link) {
    document.querySelector('.sidebar-cont').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}