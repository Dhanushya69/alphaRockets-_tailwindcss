document.getElementById('hamburgericon').addEventListener('click', function () {
    document.getElementById('popup').classList.toggle('hidden');
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('toggleBtnContainer').classList.remove('hidden');
}