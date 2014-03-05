define(function (require) {

    "use strict";

    var Backbone            = require('backbone'),

        Tweet = Backbone.Model.extend(),

        TweetCollection = Backbone.Collection.extend({
            
            model: Tweet,
            
            initialize: function (options) {
                this.name = options.name;
            },
           
            url: function(options){
            
                        return "/twitter-proxy.php?screen_name="+this.name;
             
            },
                    
        });

    return {
        Tweet: Tweet,
        TweetCollection: TweetCollection
    };

});