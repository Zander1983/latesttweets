define(function (require) {

    "use strict";

 
    var Feeds = {};

   
    Feeds.getFeed = function(date_str) {
    
         var feeds = {};
         
            feeds[""]  = '/GetLeagueStandingsBySeason?ApiKey=VGKCUTOQKOCOBJJPKNDNVKFCOJWKQNEBLTQJAHEMQEFZDJWAQQ&league=Scottish+Premier+League&seasonDateString=1314';
            feeds["seasonstandings1314"]  = '/GetLeagueStandingsBySeason?ApiKey=VGKCUTOQKOCOBJJPKNDNVKFCOJWKQNEBLTQJAHEMQEFZDJWAQQ&league=Scottish+Premier+League&seasonDateString=1314';
   
            return feeds[Backbone.history.fragment];

    };
   
    return Feeds;

    
});