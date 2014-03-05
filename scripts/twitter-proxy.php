<?php


require_once('TwitterAPIExchange.php');



$screen_name = $_GET['screen_name'];

if(!isset($screen_name) || $screen_name=="undefined"){
    $screen_name = "Arsenal";
}

file_put_contents('/var/www/my_logs/screen.log', $screen_name);

function getTweets($screen_name) {


   require_once('TwitterAPIExchange.php');

    /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
    $settings = array(
        'oauth_access_token' => "273421764-ghXHWFtedn8yXw2dyh8lLb4q7uPzOqulk6xJN1hy",
        'oauth_access_token_secret' => "H6SQnaitvaDYyxmJdjXvytMDxcdXwZ1xBNKdpyus5X1id",
        'consumer_key' => "YWd28LVVW2yfnkx5uoK93Q",
        'consumer_secret' => "5L0OUZAWKdhp3MM1TyI73xFRU6idrvYXPdoCaJAg"
    );

    $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
    $getfield = '?screen_name='.$screen_name.'&count=15';
    $requestMethod = 'GET';
    $twitter = new TwitterAPIExchange($settings);
 
    $tweets = $twitter->setGetfield($getfield)
                 ->buildOauth($url, $requestMethod)
                 ->performRequest();

    echo $tweets;
    
    file_put_contents('/var/www/my_logs/tweets.log', $tweets);
    
}

getTweets($screen_name);