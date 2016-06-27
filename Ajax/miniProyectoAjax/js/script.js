
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var articles;

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    var streetStr = $('#street').val();
    console.log( streetStr );
    var cityStr = $ ('#city').val();
    console.log(cityStr);
    var address = streetStr+cityStr;
    var imgUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '&key=AIzaSyAeNBN2b4bVxoPTjr7lJ4v2rL7VFSCBF1I';

    $body.append('<img class="bgimg" src="'+imgUrl+'">');

    

    $greeting.text('So, you want to live at ' + address + '?');

    https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&key=AIzaSyDsau3bIMvAWn3iKSFrIraz8q6G_qTkieA

    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=ead8636237494aeaa409f7f48cb7076c';

    $.getJSON(nytimesUrl,function(data){
        
        articles = data.response.docs;

        for (var i=0; i <articles.length; i++){
            var article = articles[i];
            $nytElem.append('<li class="article">'+
               '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
               '<p>' + article.snippet + '</p>'+'">'+
           '</li>');

        }

        console.log(data);
    });
   

    return false;
};

$('#form-container').submit(loadData);



