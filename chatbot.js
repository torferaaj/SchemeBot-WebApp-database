var message1 = 'Hi there !'
var message2 = 'I\'m your assistant.'
var message3 = 'What would you like explore today? <br><br> 1.State government schemes <br> 2.Central government schemes <br><br> >>> type either 1 or 2...'


$(document).ready(function() 
  { 
    setTimeout(function()
    {
        loader();
        setTimeout(function()
        {
          $('.containe .displa .lds-ellipsis').fadeOut(0);
          $('.containe .displa').append("<div class='reply'><p>"+message1+"</p></div>");
          
          $('.containe .displa .lds-ellipsis').fadeOut(0);
          $('.containe .displa').append("<div class='reply'><p>"+message2+"</p></div>");

          $('.containe .displa .lds-ellipsis').fadeOut(0);
          $('.containe .displa').append("<div class='reply'><p>"+message3+"</p></div>");
        }, 1600)
    },1000);
  })

var scrollctr = 200;
var i =0;

function scrollUpdate(){
    lastElementTop = $('.displa').position().top ;
    scrollAmount = lastElementTop + scrollctr ;
    scrollctr += 200; 
$('.displa').animate({scrollTop: scrollAmount},700);
}

function msngr(){

  var msg = $('.text input').val();
  $('.containe .displa').append("<div class='msg'><p>"+msg+"</p></div>");
  // $('.text input').val("");
}

function reply(){

  msg = $('.text input').val();
  if(msg == 'hi'){
    $('.containe .displa').append("<div class='reply'><p>"+'Alright! here\'s how I can help you to Explore the schemes <br><br> 1.State government schemes <br> 2.Central government schemes <br><br> >>> type either 1 or 2...'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg == '1'){
    $('.containe .displa').append("<div class='reply'><p>"+'Ok, let\'s get started <br> which sector would you like to continue <br><br> STATE GOVERNMENT <br><br>a.Education <br> b.Welfare <br> c.Agriculture <br> d.Sports <br><br> >>> type either a or b or c or d...'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg== '2'){
    $('.containe .displa').append("<div class='reply'><p>"+'Ok, let\'s get started <br> which sector would you like to continue <br><br> CENTRAL GOVERNMENT <br><br>i.Education <br> ii.Welfare <br> iii.Agriculture <br> iv.Sports <br><br> >>> type either i or ii or iii or iv...'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg=='a'){
    $('.containe .displa').append("<div class='reply'><p>"+'STATE GOVT <br><br> Education <br><br> <li><a href="https://www.tn.gov.in/scheme/department_wise/4">BC MBC & MINORITIES SCHEME</a></li>'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg=='b'){
    $('.containe .displa').append("<div class='reply'><p>"+'STATE GOVT <br><br> Welfare <br><br> <li><a href="https://www.cmchistn.com/">MEDICAL WELFARE SCHEME</a></li>'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg=='c'){
    $('.containe .displa').append("<div class='reply'><p>"+'STATE GOVT <br><br> Agricuture <br><br> <li><a href="https://www.tn.gov.in/scheme/department_wise/2">AGRICULTURE AND FARMER SCHEME</a></li>'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg=='d'){
    $('.containe .displa').append("<div class='reply'><p>"+'STATE GOVT <br><br> Sports <br><br> <li><a href="https://www.sdat.tn.gov.in/desc.php?id=29">PENSION SCHEME FOR SPORTSPERSONS </a></li>'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg=='i'){
    $('.containe .displa').append("<div class='reply'><p>"+'CENTRAL GOVT <br><br> Education <br><br> <li><a href="https://scholarships.gov.in/">STUDENTS DEVELOPMENT AND SCHOLARSHIP SCHEME</a></li>'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg=='ii'){
    $('.containe .displa').append("<div class='reply'><p>"+'CENTRAL GOVT <br><br> Welfare <br><br> <li><a href="https://www.india.gov.in/scheme-national-welfare-fund-sportspersons">NATIONAL WELFARE FUND</a></li>'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg=='iii'){
    $('.containe .displa').append("<div class='reply'><p>"+'CENTRAL GOVT <br><br> Agriculture <br><br> <li><a href="https://www.india.gov.in/natural-resource-management-schemes-department-agriculture-and-farmers-welfare">NATURAL RESOURCES MANAGEMENT SCHEME</a></li>'+"</p></div>");
    $('.text input').val("");
  }
  else if(msg=='iv'){
    $('.containe .displa').append("<div class='reply'><p>"+'CENTRAL GOVT <br><br> Sports <br><br> <li><a href="https://www.india.gov.in/guidelines-and-application-forms-scheme-sports-fund-pension-meritorious-sportspersons">SPORTS FUND FOR PENSION TO MERITORIOUS SPORTSPERSON</a></li>'+"</p></div>");
    $('.text input').val("");
  }
  
}

function loader(){
    $('.containe .displa').append("<div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div>");
}


$('.tra .fa-paper-plane').click(msngr);
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        e.preventDefault();
        msngr();
        scrollUpdate();
    }
});
  


$('.tra .fa-paper-plane').click(function(){
    setTimeout(function(){
        scrollUpdate();
        loader();
        setTimeout(function(){
        $('.containe .displa .lds-ellipsis').fadeOut(0);
        reply();
        scrollUpdate();
       }, 160) 
    },100);
});
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        e.preventDefault();
        setTimeout(function(){
        scrollUpdate();
        loader();
        setTimeout(function(){
        $('.containe .displa .lds-ellipsis').fadeOut(0);
        reply();
        scrollUpdate();
       }, 160) 
    },100);
}
});

