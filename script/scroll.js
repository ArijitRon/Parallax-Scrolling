$(document).ready( function(){
	$("#jump li").click(function(){
		var i=0;
		$(this).addClass('active');
		var select=$(this).attr('data-id');
		var multiple=parseInt(select);
		
		if(Number.isInteger(multiple)){
			$('html, body').animate({
		scrollTop: $('#'+select).offset().top +($('#'+select).offset().top*0.0977*multiple)+'px'
		}, 2000);
		}
		
		else{
			$('html, body').animate({
				scrollTop: $('#'+select).offset().top 
				}, 2000);
			}
		
	});
});
$(window).on('scroll', function() {
	$(".first img").css({'transform':'rotate('+($(window).scrollTop()*0.5)+'deg)'});
	if($(window).scrollTop()<$('.second').offset().top){
	$('#c1').css({'transform': 'translate3d(-' + ($(window).scrollTop()*0.35) + '%,'+($(window).scrollTop())+'px, 0)'});
	$('#c2').css({'transform':  'translate3d(' + ($(window).scrollTop()*0.35) + '%,'+($(window).scrollTop())+'px, 0)' });
	$('#details').css({'opacity':0});
	$('#price h1').text('');
	classSwitch()
	$("#jump li").eq(0).addClass('active');
	}
	else if($(window).scrollTop()>=($('.second').offset().top) && $(window).scrollTop()<($('.third').offset().top)){
	 $('#img2').css({'transform':  'translate3d('+($(window).scrollTop()-($('.second').offset().top))*2.5+'px,'+($(window).scrollTop()-($('.second').offset().top))*0.1+'px,0)' });
		 var head="Hydrabadi Biryani";
		 var para="It is a form of biryani, from Hyderabad, India. It is prepared in the form of kachay gosht ki biryani and dum ki biryani.";
		 var price=250;
		 opacityControl('.second',head,para,price);
		 backgroundMove('.second');
		 classSwitch()
		$("#jump li").eq(1).addClass('active');
	}
	else if($(window).scrollTop()>=($('.third').offset().top) && $(window).scrollTop()<($('.fourth').offset().top)){
	 $('#img3').css({'transform':  'translate3d('+($(window).scrollTop()-($('.third').offset().top))*2.5+'px,'+($(window).scrollTop()-($('.third').offset().top))*0.1+'px,0)' });
		 var head="Kolkata Biryani";
		 var para="The Calcutta biryani is much lighter on spices and sometimes contains meat. The marinate primarily uses nutmeg, cinnamon, mace along with cloves and cardamom in the yoghurt based marinade for the meat which is cooked separately from rice. This combination of spices gives it a distinct flavour as compared to other styles of biryani. The rice is flavoured with ketaki water or rose water along with saffron to give it flavour and light yellowish colour.";
		 var price=130;
		 opacityControl('.third',head,para,price);
		 backgroundMove('.third');
		 classSwitch();
		$("#jump li").eq(2).addClass('active');
	}
	else if($(window).scrollTop()>=($('.fourth').offset().top) && $(window).scrollTop()<($('.menu').offset().top)){
	 $('#img4').css({'transform':  'translate3d('+($(window).scrollTop()-($('.fourth').offset().top))*2.5+'px,'+($(window).scrollTop()-($('.fourth').offset().top))*0.1+'px,0)' });
		 var head=" Afgan Biryani";
		 var para="A different dish called 'Biryan' is popular in Afghanistan. Biryan traces its origins to the same source as Biryani, and is today sold in Afghanistan as well as in Bhopal, India. Biryan is prepared by cooking Gosht and rice together, but without the additional gravy (Yakhni) and other condiments that are used in Biryani";
		 var price=240;
		 opacityControl('.fourth',head,para,price);
		 backgroundMove('.fourth');
		 classSwitch();
		$("#jump li").eq(3).addClass('active');
	}
	else if($(window).scrollTop()>=($('.menu').offset().top) && $(window).scrollTop()<($('#AboutUs').offset().top)){
		 backgroundMove('.menu');
		 classSwitch();
		$("#jump li").eq(4).addClass('active');
		var c=$('.menu').eq(0).height()/2;
		var deg=($(window).scrollTop()-$('.menu').eq(0).height())/(c/180);
		var i=Math.sin(deg*(Math.PI/180));
		$('.items').eq(3).css({'transform':'translate3d('+i*100+'%,'+i*100+'%,0)'});
		$('.items').eq(2).css({'transform':'translate3d('+i*-100+'%,'+i*100+'%,0)'});
		$('.items').eq(1).css({'transform':'translate3d('+i*100+'%,'+i*-100+'%,0)'});
		$('.items').eq(0).css({'transform':'translate3d('+i*-100+'%,'+i*-100+'%,0)'});
	}
	else if($(window).scrollTop()>=($('#AboutUs').offset().top) && $(window).scrollTop()<($('#ContactUs').offset().top)){
		 classSwitch();
		$("#jump li").eq(5).addClass('active');
		$('.about').eq(0).css({'transform':'translateY('+($(window).scrollTop()-($('#AboutUs').offset().top))*-0.5+'px)'});
		$('.about2').eq(0).css({'transform':'translateY('+($(window).scrollTop()-($('#AboutUs').offset().top))*0.60+'px)'});
	}
	else if($(window).scrollTop()>=$('#ContactUs').offset().top){
		 classSwitch();
		$("#jump li").eq(6).addClass('active');
		$('.contact').eq(0).css({'transform':'translateY('+($(window).scrollTop()-($('#ContactUs').offset().top))*-0.5+'px)'});
	}
});

function opacityControl(dv,head,para,price){
	var c=$(dv).eq(0).height()/2;
		var deg=($(window).scrollTop()-$(dv).eq(0).height())/(c/180);
		var i=Math.sin(deg*(Math.PI/180));
		$('#details').css({'opacity':i});
		$('#price h1').css({'opacity':i}); 
		$('#price h1').css({'top':(100-(i*30))+'%'}); 
		$('#details h1').eq(0).text(head);
		$('#details h4').eq(0).text(para);
		$('#price h1').text('Rs '+price+'/-');
}
function backgroundMove(dv){
	var coords='left '+($(window).scrollTop()*1.5)+'px';
        $(dv).css('backgroundPosition',coords);
}
function classSwitch(){
	 for(i=0;i<$("#jump li").length;i++){
			if($("#jump li").eq(i).hasClass('active')){
				$("#jump li").eq(i).removeClass('active');
			}
		}
}