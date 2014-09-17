'use strict';

var controller;

$(document).ready(function($) {

	var controller = new ScrollMagic();

	// build tween
	var maltTween = new TimelineMax()

		.add(
			TweenMax.to('#in-malt', 1, {top: '+=400'})
		)
		.add(
			TweenMax.to('#in-malt', 1, {rotation: 1,
				onComplete: function () {$('#in-malt').addClass('mald');},
				onReverseComplete: function () {$('#in-malt').removeClass('mald');}
			})
		);

	var laktappTween = new TimelineMax()
		.add(
			TweenMax.to('#in-malt', 1, {height: 600})
		)
		.add(
			TweenMax.to('#in-malt', 1, {height: 0, top:'+=150'})
		);


	var vevTween = TweenMax.to('#it-kvarn #arm', 1, {rotation: 360});

	// build tween
	var humle1Tween = new TimelineMax()
		.add(
			TweenMax.to('#in-humle1', 1, {left: '50%'})
		)
		.add(
			TweenMax.to('#in-humle1', 1, {top: '+=400', rotation:27})
		)
		.add(
			TweenMax.to('#in-humle1', 1, {opacity:0})
		);

	// build tween
	var humle2Tween = new TimelineMax()
		.add(
			TweenMax.to('#in-humle2', 1, {left: '50%'})
		)
		.add(
			TweenMax.to('#in-humle2', 1, {top: '+=400', rotation:27})
		)
		.add(
			TweenMax.to('#in-humle2', 1, {opacity:0})
		);

	var jaeslockTween1 = TweenMax.fromTo('#it-jaeskarl .lock', 1, {rotation: -19, left:'-100%', top:-100}, {rotation: 0, left:0, top:-14});
	//var jaeslockTween2 = TweenMax.fromTo('#it-jaeskarl .lock', 1, {rotation: 0, left:0, top:-14},{rotation: -47, left:-200, top:-100});

	var flaskTween = TweenMax.staggerFromTo('.flaska', 1, {left: '100%'}, {left:0, ease: Back.easeOut}, 0.15);

	var flaskOelTween = TweenMax.staggerTo('.beer', 1, {height: 40,ease: Back.easeOut}, 0.15);

	var kvarn = new ScrollScene({triggerElement: '#trigger1', offset:200, duration: 200})
		//.setTween(tween)
		.setPin('#it-kvarn')
		.addTo(controller);

	var malt = new ScrollScene({triggerElement: '#trigger1', offset:-400, duration: 700})
		.setTween(maltTween)
		.addTo(controller);

	var vev = new ScrollScene({triggerElement: '#trigger3', offset:250, duration: 400})
		.setTween(vevTween)
		.addTo(controller);

	var maesk = new ScrollScene({triggerElement: '#trigger4', offset:100, duration:200})
		.setPin('#it-maeskkarl')
		.on('enter leave', function (e) {
			if(e.type === 'enter' && e.scrollDirection === 'FORWARD'){
				$('#in-malt').addClass('rinnig');
			}
			if(e.type === 'leave' && e.scrollDirection === 'REVERSE'){
				$('#in-malt').removeClass('rinnig');
			}
		})
		.addTo(controller);

	var laktapp = new ScrollScene({triggerElement: '#trigger5', offset:-230, duration: 300})
		.setTween(laktappTween)
		.addTo(controller);

	var kittel = new ScrollScene({triggerElement: '#trigger6', offset:100, duration:4500})
		.setPin('#it-kittel')
		.addTo(controller);

	var humle1 = new ScrollScene({triggerElement: '#trigger7', offset:-3300, duration:700})
		.setTween(humle1Tween)
		.addTo(controller);

	var humle2 = new ScrollScene({triggerElement: '#trigger8', offset:-1200, duration:700})
		.setTween(humle2Tween)
		.addTo(controller);

	var jaeskarl = new ScrollScene({triggerElement: '#trigger9', offset:100, duration:4500})
		.setPin('#it-jaeskarl')
		.addTo(controller);

	var jaeslock1 = new ScrollScene({triggerElement: '#trigger10', offset:100, duration:200})
		.setTween(jaeslockTween1)
		.addTo(controller);

	var flaskor = new ScrollScene({triggerElement: '#trigger11', offset:0, duration:500})
		.setPin('#it-flaskor')
		.setTween(flaskTween)
		.addTo(controller);

	var oel = new ScrollScene({triggerElement: '#trigger12', offset:350, duration:300})
		.setTween(flaskOelTween)
		.addTo(controller);

	/*var flaska = new ScrollScene({triggerElement: '#trigger12', offset:100, duration:200})
		.addTo(controller);*/

	// show indicators (requires debug extension)
	//kvarn.addIndicators();
	//malt.addIndicators();
	//maesk.addIndicators();
	//kittel.addIndicators();
	//eld.addIndicators();
	//laktapp.addIndicators();
	//humle1.addIndicators();
	//humle2.addIndicators();
	//jaeskarl.addIndicators();
	//jaeslock1.addIndicators();
	//flaska.addIndicators();
	//flaskor.addIndicators();
	//oel.addIndicators();
});
