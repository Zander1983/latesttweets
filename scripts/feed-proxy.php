<?php


    $context = $_GET['context'];
    $feed_domain = $_GET['feed_domain'];


    $feeds[""]  = '/GetLeagueStandingsBySeason?ApiKey=VGKCUTOQKOCOBJJPKNDNVKFCOJWKQNEBLTQJAHEMQEFZDJWAQQ&league=Scottish+Premier+League&seasonDateString=1314';
    $feeds["seasonstandings1314"]  = '/GetLeagueStandingsBySeason?ApiKey=VGKCUTOQKOCOBJJPKNDNVKFCOJWKQNEBLTQJAHEMQEFZDJWAQQ&league=Scottish+Premier+League&seasonDateString=1314';
    if(!$context) $context = "home";
    
    $xml = file_get_contents($feed_domain.$feeds[$context]);    
    
    /*
    file_put_contents('/var/www/my_logs/xml.log', $xml);
    file_put_contents('/var/www/my_logs/link.log', $feed_domain.$feeds[$context]);
    file_put_contents('/var/www/my_logs/context.log', $context);
    */
    
    echo $xml;
    
    
    

