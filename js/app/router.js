define(function (require) {

    "use strict";

    var Backbone    = require('backbone'),
        PageSlider  = require('app/utils/pageslider'),
        Useful      = require('app/utils/useful_func'),
        slider      = new PageSlider($('body')),
        tweets,
        that;

    return Backbone.Router.extend({

        routes: {
            /****All generic routes from joomla feeds****/
            "": "getTweets",
            "tweets/:name": "getTweets",
            "tweets-item/:id": "getTweetsItem",
          
        },
        
        initialize: function() {   
            
            that = this;
            that.body = $('body');
            this.setupShell();
            

            $.ajaxPrefilter( function( options, originalOptions, jqXHR ) { 
                
               
                    //this is when testing in a browser
                    if(server=="local"){
                    options.url = 'http://localhost/projects/scottishleague/www/scripts' + options.url                           
                    }
                    else{
                    options.url = 'http://www.test.webintelligence.ie/scripts' + options.url                           
                    }

              
   
  
           });


            
        },
          
                
         /******************STANDARD HELPER FUNCTIONS*******************/       
        setupShell: function(){
    
            require(["app/views/SetupShell"], function (SetupShell) {

                new SetupShell({body:that.body});

            });
            
    
        },
                
        
                
        routeChange: function(){
    
            $('html,body').scrollTop(0);
    
        },
                
                
      
        /******************ENDING STANDARD HELPER FUNCTIONS*******************/
        
        /*******************ROUTES START HERE***************************/
     
       
        
  getTweets: function (name) {

            require(["app/models/tweet", "app/views/TweetList"], function (models, TweetList) {
     
                    if(typeof(tweets)!=='undefined' && tweets!==null){
                        tweets.reset();
                    }
                   
                    tweets = new models.TweetCollection({name:name}); 
          
                    tweets.fetch({
                        success: function (collection) {
                           
                            Useful.correctView(that.body);
                            
                            if(collection.length<3){
                                require(["app/views/Unknown"], function (Unknown) {
                                    slider.slidePage(new Unknown().$el); 
                                });   
                            }
                            else{
                                slider.slidePage(new TweetList({collection: collection}).$el);                      
                            }
                        }, 
                        error: function(){
                                Useful.correctView(that.body);
                                
                                require(["app/views/Unknown"], function (Unknown) {
                                    slider.slidePage(new Unknown().$el); 
                                });    
                                
                        }
                    }); 
                    
                    
                
      
                                 
            });
           
        },
        
        getTweetsItem: function (id) {
            
            require(["app/views/TweetItem"], function (TweetItem) {

                Useful.correctView(that.body);
                 slider.slidePage(new TweetItem({model: tweets.get(id)}).$el);
                                 
            });
        },
                
                
    
    
    });

});