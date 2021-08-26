var models = [
    {
        name : 'Porche 911',
        image : 'img/porche.jpeg',
        link : 'https://www.porsche.com/usa/'
    },
    {
        name : 'Porche 718',
        image : 'img/porsche-normal.webp',
        link : 'https://www.porsche.com/usa/'
    },
    {
        name : 'Porche Panamera',
        image : 'img/porsche-model.png',
        link : 'https://www.porsche.com/usa/'
    },
    {
        name : 'Porche Taycan',
        image : 'img/porsche-taycan-base-2.jpeg',
        link : 'https://www.porsche.com/usa/'
    }
]

var index = 0 ;
var slaytCount = models.length;

showSlide(index);

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    index++ ;
    showSlide(index);

});
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
index-- ;
showSlide(index);
});

function showSlide(i){
    
    index = i ;
    if(i<0){
        index = slaytCount -1 ;
    }

    if(i>=slaytCount){
        index = 0 ;
    }
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-title').textContent = models[index].name;
document.querySelector('.card-link').setAttribute('href',models[index].link);


}


