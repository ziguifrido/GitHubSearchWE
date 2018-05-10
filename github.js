urlProfile = (string) => 'https://github.com/' + string
urlPic = (string) => urlProfile(string) + '.png?size=200';
urlSearch = (string) => 'https://github.com/search?q=' + string
openProfile = (string) => window.open(urlProfile(string));
openSearch = (string) => window.open(urlSearch(string));

showPic = (string) => {
    deletePic();
    var img = document.createElement('img');
    img.width = 200;
    img.height = 200;
    img.class = 'card-img-top';
    img.src = urlPic(string);
    img.id = 'pic';

    document.getElementById('picParent').appendChild(img);
}

deletePic = () => {
    var element = document.getElementById('pic');
    if (element != null){
        element.parentNode.removeChild(element);
    }
}

window.addEventListener('load', (event) => {
    var str = document.getElementById('string');

    var btnOpenProfile = document.getElementById('btnOpenProfile');
    btnOpenProfile.addEventListener('click', () => openProfile(str.value));

    var btnShowPic = document.getElementById('btnShowPic');
    btnShowPic.addEventListener('click', () => showPic(str.value));

    var btnOpenSearch = document.getElementById('btnOpenSearch');
    btnOpenSearch.addEventListener('click', () => openSearch(str.value));

})