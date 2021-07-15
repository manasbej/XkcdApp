// Code Sample  
$(document).ready(function() {  
    var url = 'https://xkcd.com/rss.xml'; // 'http://www.recruiter.com/feed/career.xml'; //Data in XML format  
    
    var password="abcd123";
    
    $.ajax({  
        type: 'GET',  
        url: "https://api.rss2json.com/v1/api.json?rss_url=" + url, //For converting default format to JSON format  
        dataType: 'jsonp', //for making cross domain call  
        success: function(data) {  
            //alert('Success');  
            //$("#rss-default").append(data.feed);  
            //console.log(data.feed.description);  
            console.log(data.feed);  
        }  
    });  
});  
