

document.querySelector('.icon-menu').addEventListener('click', function(){
    document.querySelector('#menu').style.display = 'block';
    document.querySelector('.icon-menu').style.display = 'none';
    document.querySelector('.icon-close').style.display = 'block';
});

document.querySelector('.icon-close').addEventListener('click', function(){
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('.icon-menu').style.display = 'block';
    document.querySelector('.icon-close').style.display = 'none';
});

document.querySelector('.links').addEventListener('click', function(){
    document.querySelector('#menu').style.display = 'none';
    document.querySelector('.icon-menu').style.display = 'block';
    document.querySelector('.icon-close').style.display = 'none';
});