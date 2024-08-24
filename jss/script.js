/*====== JQ =====*/
$(document).ready(function(){

	// alert('Hello');

	// e2
	$('#btn1').click(function(){
		alert("Hello");
	});

	// e3
	$('#btn2').on('click',function(){
		alert("Hellooo");
	});

	// e4
	$('#btn3').on('click',function(){
		alert("Double helllo");
	});

	// e5
	$('#btn4').on('mouseover',function(){
		alert("Hover helllo");
	});

	// e6
	$('#btn5').on('click',function(){
		$('#lorem1').hide();

	});
	$('#btn6').on('click',function(){
		$('#lorem1').show();

	});

	// e7
	$('#btn7').on('click',function(){
		$('#lorem2').toggle();
	});
	// e8
	$('p').on('click',function(){
		$(this).hide();
	});

	// e8
	$('h1').on('click',function(){
		$(this).hide();
	});

	// e9
	$('#btn8').on('click',function(){
		$('#lorem3').fadeOut();
	});

	// e10
	$('#btn9').on('click',function(){
		$('#lorem4').fadeOut();
	});
	$('#btn10').on('click',function(){
		$('#lorem4').fadeIn();
	});

	// e11
	$('#btn11').on('click',function(){
		$('#lorem5').fadeToggle();
	});

	// e12
	$('#btn12').on('click',function(){
		$('#lorem6').fadeOut(3000);
	});
	$('#btn13').on('click',function(){
		$('#lorem6').fadeIn(3000);
	});

	// e13
	$('#btn14').on('click',function(){
		$('#lorem7').fadeToggle(3000);
	});

	// e14
	$( "#target" ).on( "click", function() {
  		alert( "Handler for `click` called." );
	} );
	$( "#other" ).on( "click", function() {
  		$( "#target" ).trigger( "click" );
	} );

	// e15
	$( "#h22" ).on( "click", function() {
 		 $( this ).slideUp();
	} );

	// e16
	$( "#btn15" ).on( "click", function() {
      $( "#h33" ).show( "slow" );
    });

    // e17
    $( "#showr" ).on( "click", function() {
 		 $( "#di" ).first().show( "fast", function showNext() {
           $( this ).next( "div" ).show( "fast", showNext );
  	 });
	});
 
	$( "#hidr" ).on( "click", function() {
  		$( "#di" ).hide( 1000 );
	});


	// e18
	function doIt() {
    $( ".sp,.no" ).show( "slow" );
   }
   $( "#btn16" ).on( "click", doIt );
 
   $( "form" ).on( "submit", function( event ) {
     if ( $( "input" ).val() === "yes" ) {
       $( "p" ).show( 4000, function() {
        $( this ).text( "Ok, DONE! (now showing)" );
      } );
    }
    $( ".sp,.no" ).hide( "fast" ); 
    event.preventDefault();
    } );

   // e19
   $( "#go" ).on( "click", function() {
    $( "#block" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
    }, 1500 );
  });

   // e20
   $( "#go1" ).on( "click", function() {
  $( "#block1" )
    .animate({
      width: "90%"
    }, {
      queue: false,
      duration: 3000
    })
    .animate({ fontSize: "24px" }, 1500 )
    .animate({ borderRightWidth: "15px" }, 1500 );
});
 
$( "#go2" ).on( "click", function() {
  $( "#block2" )
    .animate({ width: "90%" }, 1000 )
    .animate({ fontSize: "24px" }, 1000 )
    .animate({ borderLeftWidth: "15px" }, 1000 );
});
 
$( "#go3" ).on( "click", function() {
  $( "#go1" ).add( "#go2" ).trigger( "click" );
});
 
$( "#go4" ).on( "click", function() {
  $( "div" ).css({
    width: "",
    fontSize: "",
    borderWidth: ""
  });
});

 // e21
 $( "#right" ).on( "click", function() {
  $( ".block4" ).animate({ "left": "+=50px" }, "slow" );
 });
 
 $( "#left" ).on( "click", function(){
  $( ".block4" ).animate({ "left": "-=50px" }, "slow" );
 });

 //  e22
$('#appe').on('click',function(){
  $('#app').append(' [Nepal, India]')
 });

// e23
$('#pre').on('click',function(){
  $('#pree').prepend(' [Nepal, India] ')
  });
  

// e24
$('#befo').on('click',function(){
  $('#befor').before(myPara)
  });
var myPara=$('<p></p>').text('Bangladesh is a small Country .');

//  e25
$("#jsprep").on('click',function(){
  $('#cofee').animate({
    opacity:0.20,
    left:"+50px",
    height:"toggle"
  },2000,function(){
    alert("complet");
  })
})

// e26
  $('#ani1').on("click", function(){
  		$('#div4').animate({
  			left: "250px"
  		});
  });

  // e27
  $('#ani2').on("click", function(){
  	$('#div5').animate({
  			left: '250px',
  			opacity: '0.5',
  			width: '250px',
  			height: '250px'
  		});
  	});

  	// e28
  	  $("#ani3").on("click", function(){
	    var div = $("#div6");
	    div.animate({height: '300px', opacity: '0.4'}, "slow");
	    div.animate({width: '300px', opacity: '0.8'}, "slow");
	    div.animate({height: '100px', opacity: '0.4'}, "slow");
	    div.animate({width: '100px', opacity: '0.8'}, "slow");
	  });

	  // e29
	  $("#ani4").click(function(){
	    var div = $("#div7");  
	    div.animate({left: '100px'}, "slow");
	    div.animate({fontSize: '3em'}, "slow");
	  });

	   // e30
    $('#btnon').on('click',function(){
        $('#bulb').attr("src","images/bulbon.gif")
    });
    $('#btnoff').on('click',function(){
        $('#bulb').attr("src","images/bulboff.gif")
    });






})