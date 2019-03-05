$("button").click(function(){
 var comment= $(".yourName").val();
 var apple= comment*56;
 $('.message').append("<p>" + comment + "<p>");
 
 
 
});


$("button").click(function(){
 var comment= $(".foodName").val();
 
 $('.message').append("<p>" + comment + "<p>");
 
 
 
});




$("button").click(function(){
 var comment= $(".amountEaten").val();
  var apple= comment*50;
 $('.apple').text("apple" + apple);
 
 
 
});