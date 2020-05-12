/*Ch 7: ex 7-1 p.219*/

"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
    for ( i = 0; i < links.length; i++ ) {
        link = links[i];
        image = new Image();
        image.src = link.href;
    };

    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() {
        image1.src = "../assets/img/ling-ttt2-art.jpg";
    };
    image1.onmouseout = function() {
        image1.src = "../assets/img/lingdr.jpg";
    };
    
    image2.onmouseover = function() {
        image2.src = "../assets/img/xiaoyu-t7fr.jpg";
    };
    image2.onmouseout = function() {
        image2.src = "../assets/img/ling-6.jpeg";
    };
};

