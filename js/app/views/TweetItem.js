define(function (require) {

    "use strict";

    var _                   = require('underscore'),
        Backbone            = require('backbone'),
        Twitter             = require('twitter-text'),
        UsefulFuncs         = require('app/utils/useful_func'),
        tpl                 = require('text!tpl/TweetItem.html'),
        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function (options) {

            this.render();     

        },

        render: function () {
            this.$el.html(template({model:this.model.attributes}));
            return this;
        },
                
         

    });

});