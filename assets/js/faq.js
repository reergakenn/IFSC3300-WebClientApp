 //ch 6 slides: slide 23-24
 
 "use strict";
 var $ = function(id) { return document.getElementById(id); };

 // the event handler for the click event of each h2 element 
 var toggle = function() {
     var h2 = this;                  // clicked h2 tags
     var div = h2.nextElementSibling; // h2's sibling div

     // toggle + and - image in h2 elements
     if (h2.hasAttribute ("class")) {
         h2.removeAttribute ("class");
     } else {
         h2.setAttribute("class", "minus");
     }

     // toggle div visibility
     if (div.hasAttribute("class")) {
         div.removeAttribute("class");
     } else {
         div.setAttribute("class", "open");
     }
 };

 window.onload = function () {
     // get the h2 tags
     var faqs = $("faqs");
     var h2Elements = faqs.getElementsByTagName("h2");

     // attach event handler for each h2 tag
     for (var i = 0; i <h2Elements.length; i++) {
         h2Elements [i].onclick = toggle;
     }
     h2Elements[0].firstChild.focus();
 }