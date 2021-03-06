function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var articles;
    var articleStr;

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    var streetStr = $("#street").val();
    var cityStr = $("#city").val();
    var address = streetStr + cityStr;
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '&key=AIzaSyAeNBN2b4bVxoPTjr7lJ4v2rL7VFSCBF1I';
    $body.append('<img class="bgimg" src="'+ streetviewUrl + '">')// para insertar html en la página
    console.log(streetviewUrl);
    $greeting.text('So, you want to live at ' + address + '?');

    var nytimesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=d6c19a94f24a45aeb1986b59361dfcca'
    console.log(nytimesUrl);

    $.getJSON(nytimesUrl, function(data){
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++) {
            var article  = articles[i];

            $nytElem.append('<li class="article">'+
               '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
               '<p>' + article.snippet + '</p>'+
            '</li>');
        }
        //console.log(data);
    });

    //https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&key=YOUR_API_KEY
   
    





    var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + cityStr + '&format=json&callback=wikiCallback';
    $.ajax( {
        url: wikiUrl,
        dataType: "jsonp",
        jsonp:"callback",
        success: function(response) {
            console.log(response);
            var articleList = response[1];


        for (var i = 0; i < articleList.length; i++) {
               articleStr = articleList[i];
               var url = 'http://en.wikipedia.org/wiki/' + articleStr;
               $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
           };
    }
} );







    return false;
};


$('#form-container').submit(loadData);





