"use strict";var controller;$(document).ready(function(a){{var b=new ScrollMagic,c=(new TimelineMax).add(TweenMax.to("#in-malt",1,{top:"+=400"})).add(TweenMax.to("#in-malt",1,{rotation:1,onComplete:function(){a("#in-malt").addClass("mald")},onReverseComplete:function(){a("#in-malt").removeClass("mald")}})),d=(new TimelineMax).add(TweenMax.to("#in-malt",1,{height:600})).add(TweenMax.to("#in-malt",1,{height:0,top:"+=150"})),e=TweenMax.to("#it-kvarn #arm",1,{rotation:360}),f=(new TimelineMax).add(TweenMax.to("#in-humle1",1,{left:"50%"})).add(TweenMax.to("#in-humle1",1,{top:"+=400",rotation:27})).add(TweenMax.to("#in-humle1",1,{opacity:0})),g=(new TimelineMax).add(TweenMax.to("#in-humle2",1,{left:"50%"})).add(TweenMax.to("#in-humle2",1,{top:"+=400",rotation:27})).add(TweenMax.to("#in-humle2",1,{opacity:0})),h=TweenMax.fromTo("#it-jaeskarl .lock",1,{rotation:-19,left:"-100%",top:-100},{rotation:0,left:0,top:-14}),i=TweenMax.staggerFromTo(".flaska",1,{left:"100%"},{left:0,ease:Back.easeOut},.15),j=TweenMax.staggerTo(".beer",1,{height:40,ease:Back.easeOut},.15);new ScrollScene({triggerElement:"#trigger1",offset:200,duration:200}).setPin("#it-kvarn").addTo(b),new ScrollScene({triggerElement:"#trigger2",offset:-400,duration:700}).setTween(c).addTo(b),new ScrollScene({triggerElement:"#trigger3",offset:250,duration:400}).setTween(e).addTo(b),new ScrollScene({triggerElement:"#trigger4",offset:100,duration:200}).setPin("#it-maeskkarl").on("enter leave",function(b){"enter"===b.type&&"FORWARD"===b.scrollDirection&&a("#in-malt").addClass("rinnig"),"leave"===b.type&&"REVERSE"===b.scrollDirection&&a("#in-malt").removeClass("rinnig")}).addTo(b),new ScrollScene({triggerElement:"#trigger5",offset:-230,duration:300}).setTween(d).addTo(b),new ScrollScene({triggerElement:"#trigger6",offset:100,duration:4500}).setPin("#it-kittel").addTo(b),new ScrollScene({triggerElement:"#trigger7",offset:-3300,duration:700}).setTween(f).addTo(b),new ScrollScene({triggerElement:"#trigger8",offset:-1200,duration:700}).setTween(g).addTo(b),new ScrollScene({triggerElement:"#trigger9",offset:100,duration:4500}).setPin("#it-jaeskarl").addTo(b),new ScrollScene({triggerElement:"#trigger10",offset:100,duration:200}).setTween(h).addTo(b),new ScrollScene({triggerElement:"#trigger11",offset:0,duration:500}).setPin("#it-flaskor").setTween(i).addTo(b),new ScrollScene({triggerElement:"#trigger12",offset:350,duration:300}).setTween(j).addTo(b)}});