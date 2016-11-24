(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 450,
	fps: 18,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg1.jpg?1479868699141", id:"bg1"},
		{src:"images/car1.png?1479868699141", id:"car1"},
		{src:"images/car2.png?1479868699141", id:"car2"},
		{src:"images/car3.png?1479868699141", id:"car3"},
		{src:"images/logo.jpg?1479868699141", id:"logo"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,72);


(lib.car2 = function() {
	this.initialize(img.car2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,70);


(lib.car3 = function() {
	this.initialize(img.car3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,47);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.bgLightMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer 13
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],23,-90.4,0,23,-90.4,204.4).s().p("AnPbQMANdg5KIBRAPUgAFAAAgO4A7mQAUisgFABg");
	this.shape.setTransform(52.3,-191.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],14.6,-52.6,0,14.6,-52.6,193.8).s().p("AnJa+MANSg48IBSARUgAEAAAgOxA7sQAXjCgGABg");
	this.shape_1.setTransform(51.6,-192);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],6.8,-16.8,0,6.8,-16.8,183.8).s().p("AnDatMANHg4wIBUATUgAEAAAgOrA70QAajYgGABg");
	this.shape_2.setTransform(51.1,-192.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-0.6,16.9,0,-0.6,16.9,174.5).s().p("Am9adMAM9g4jIBVAUUgAEAAAgOlA75QAdjrgGABg");
	this.shape_3.setTransform(50.5,-193.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-7.6,48.6,0,-7.6,48.6,165.6).s().p("Am3aOMAMyg4YIBXAVUgAEAAAgOfA8AQAfj+gFABg");
	this.shape_4.setTransform(50,-193.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-14.1,78.3,0,-14.1,78.3,157.4).s().p("AmyaAMAMpg4NIBYAXUgAEAAAgOZA8EQAhkPgFABg");
	this.shape_5.setTransform(49.5,-194.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-20.2,105.9,0,-20.2,105.9,149.7).s().p("AmtZzMAMhg4DIBZAYUgAFAAAgOUA8JQAkkfgFABg");
	this.shape_6.setTransform(49,-195);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-25.9,131.4,0,-25.9,131.4,142.6).s().p("AmpZmMAMZg35IBaAZUgAEAAAgOPA8OQAlkvgFABg");
	this.shape_7.setTransform(48.6,-195.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-31,154.9,0,-31,154.9,136).s().p("AmlZbMAMSg3xIBbAaUgAEAAAgOLA8TQAok9gGABg");
	this.shape_8.setTransform(48.2,-195.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-35.7,176.4,0,-35.7,176.4,130).s().p("AmhZRMAMLg3pIBcAbUgAEAAAgOHA8WQAplJgFABg");
	this.shape_9.setTransform(47.9,-196.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-40,195.9,0,-40,195.9,124.7).s().p("AmeZIMAMFg3iIBeAcUgAFAAAgOEA8ZQArlUgFABg");
	this.shape_10.setTransform(47.6,-196.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-43.8,213.2,0,-43.8,213.2,119.8).s().p("AmbY/MAMAg3cIBeAdUgAEAAAgOBA8dQAtlfgGABg");
	this.shape_11.setTransform(47.3,-196.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-47.2,228.6,0,-47.2,228.6,115.5).s().p("AmYY4MAL7g3WIBfAeUgAFAAAgN+A8fQAulngFAAg");
	this.shape_12.setTransform(47,-197.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-50.2,241.9,0,-50.2,241.9,111.8).s().p("AmWYyMAL3g3RIBgAeUgAFgABgN8A8jQAwlwgGABg");
	this.shape_13.setTransform(46.8,-197.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-52.6,253.1,0,-52.6,253.1,108.7).s().p("AmUYsMAL0g3NIBfAfUgAEAAAgN5A8kQAwl2gGAAg");
	this.shape_14.setTransform(46.6,-197.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-54.7,262.3,0,-54.7,262.3,106.1).s().p("AmSYoMALxg3KIBgAfUgAFAAAgN4A8mQAxl7gFAAg");
	this.shape_15.setTransform(46.5,-197.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-56.2,269.5,0,-56.2,269.5,104.2).s().p("AmRYlMALvg3IIBgAgUgAEAAAgN3A8nQAymAgGABg");
	this.shape_16.setTransform(46.4,-198);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-57.4,274.6,0,-57.4,274.6,102.7).s().p("AmQYiMALtg3GIBgAgUgAEAAAgN1A8oQAxmCgFAAg");
	this.shape_17.setTransform(46.3,-198.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-58,277.7,0,-58,277.7,101.8).s().p("AmQYhMALtg3EIBgAfUgAEAAAgN1A8pQAymFgGABg");
	this.shape_18.setTransform(46.2,-198.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-58.3,278.7,0,-58.3,278.7,101.6).s().p("AmPYgMALrg3EIBhAgUgAEAAAgN1A8pQAymFgFAAg");
	this.shape_19.setTransform(46.2,-198.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},42).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(29));

	// line1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],7.9,205.9,0,7.9,205.9,121.3).s().p("ACMeVUAAEAAAgFvg28IgLl+MAHVA9Lg");
	this.shape_20.setTransform(25.9,202.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],4.9,157.3,0,4.9,157.3,121.5).s().p("ACieZMgFyg29IgSl/UADzAhqADSAbdg");
	this.shape_21.setTransform(24.8,202.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],2,111.3,0,2,111.3,121.8).s().p("AC2eeUgAogFhgFRgxeIgZmBUAD9AklAC8AYgg");
	this.shape_22.setTransform(23.6,202.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-0.6,67.9,0,-0.6,67.9,122).s().p("Ai34fIgemBUAEGAnUAClAVtIgNABUgA8gIDgFEgu+g");
	this.shape_23.setTransform(22.6,202.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-5.1,12.4,0,-5.1,12.4,122.3).s().p("AC8cNQgfkCgelEQAxGFAYDGgAi/6wIgIhhIAVDJIgNhog");
	this.shape_24.setTransform(23.6,216.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-8.7,-25.9,0,-8.7,-25.9,122.5).s().p("ACrcJUgB4gPwgD+goqIALBgUAErAqcABhAMng");
	this.shape_25.setTransform(23.8,216.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-10.5,-47.1,0,-10.5,-47.1,122.7).s().p("ACpeWUgBsgOUgEcgumIAuGFUAEfAoYABzAOsg");
	this.shape_26.setTransform(22.6,202.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-13.5,-80.2,0,-13.5,-80.2,122.9).s().p("ACbeTUgBcgMNgEjgwrIAyGFUAEVAmgACCAQlg");
	this.shape_27.setTransform(22.7,202.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-16.2,-110.6,0,-16.2,-110.6,123).s().p("ACNeQUgBMgKQgEqgylIA3GFUAEMAkwACQASWg");
	this.shape_28.setTransform(22.9,202.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-18.8,-138.4,0,-18.8,-138.4,123.2).s().p("ACBeOUgA+gIfgEwg0VIA7GGUAEDAjJACdAT+g");
	this.shape_29.setTransform(23,202.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-21.1,-163.5,0,-21.1,-163.5,123.3).s().p("AB2eLUgAygG3gE1g17IA/GHUAD6AhtACpAVbg");
	this.shape_30.setTransform(23.2,202.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-23.1,-186,0,-23.1,-186,123.4).s().p("ABseKUgAngFcgE5g3VIBCGHUADzAgbAC0AWtg");
	this.shape_31.setTransform(23.3,202.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-24.9,-205.9,0,-24.9,-205.9,123.6).s().p("ABkeHUgAdgEKgE9g4lIBEGIQDufSC7X3g");
	this.shape_32.setTransform(23.4,202.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-26.5,-223,0,-26.5,-223,123.7).s().p("ABceGUgAUgDEgFBg5qIBHGIQDoeTDEY3g");
	this.shape_33.setTransform(23.5,202.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-27.8,-237.6,0,-27.8,-237.6,123.7).s().p("ABVeFMgFQg8uIBJGJQDjdeDLZsg");
	this.shape_34.setTransform(23.5,202.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-28.9,-249.5,0,-28.9,-249.5,123.8).s().p("ABQeEMgFNg8tIBKGJQDgcyDRaYg");
	this.shape_35.setTransform(23.6,202.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-29.7,-258.7,0,-29.7,-258.7,123.9).s().p("ABMeDUgACgAygFIg76IBMGJMAGxA3Kg");
	this.shape_36.setTransform(23.6,202.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-30.3,-265.3,0,-30.3,-265.3,123.9).s().p("ABJeCUAABgAWgFJg8WIBNGKMAGyA3Lg");
	this.shape_37.setTransform(23.7,202.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-30.7,-269.3,0,-30.7,-269.3,123.9).s().p("ABHeCUAAEgAGgFLg8mIBOGKMAGzA3Lg");
	this.shape_38.setTransform(23.7,202.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-30.8,-270.6,0,-30.8,-270.6,123.9).s().p("ABGeCUAAFgABgFLg8rIBNGKMAG0A3Lg");
	this.shape_39.setTransform(23.7,202.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(71));

	// Layer 3
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-55,194.3,0,-55,194.3,121.2).s().p("AqTbEUAAGAABAUhg23Ig6DnMgSBAz+g");
	this.shape_40.setTransform(-69,190.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-41.2,149.2,0,-41.2,149.2,119.7).s().p("AqRbEUAAGAABAUdg23Ig8DzMgR/Azyg");
	this.shape_41.setTransform(-68.9,190.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-28.1,106.5,0,-28.1,106.5,118.3).s().p("AqQbEUAAGAABAUbg23Ig/D9MgR8Azog");
	this.shape_42.setTransform(-68.7,190.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-15.8,66.3,0,-15.8,66.3,116.9).s().p("AqPbEUAAGAACAUZg24IhBEIMgR6Azdg");
	this.shape_43.setTransform(-68.6,190.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-4.2,28.5,0,-4.2,28.5,115.7).s().p("AqObEUAAGAACAUXg24IhDESMgR4AzTg");
	this.shape_44.setTransform(-68.5,190.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],6.6,-6.9,0,6.6,-6.9,114.5).s().p("AqNbEUAAGAACAUVg24IhGEbMgR1AzKg");
	this.shape_45.setTransform(-68.4,190.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],16.7,-39.8,0,16.7,-39.8,113.3).s().p("AqMbEUAAGAACAUTg24IhIEjMgRzAzCg");
	this.shape_46.setTransform(-68.3,190.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],26,-70.3,0,26,-70.3,112.3).s().p("AqLbEUAAGAACAURg24IhJErMgRyAy6g");
	this.shape_47.setTransform(-68.3,190.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],34.6,-98.3,0,34.6,-98.3,111.4).s().p("AqKbEUAAGAACAUPg24IhLEzMgRwAyyg");
	this.shape_48.setTransform(-68.2,190.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],42.4,-123.9,0,42.4,-123.9,110.5).s().p("AqKbEUAAGAACAUPg24IhNE5MgRuAysg");
	this.shape_49.setTransform(-68.1,190.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],49.6,-147.1,0,49.6,-147.1,109.7).s().p("AqJbFUAAGAABAUNg24IhNE/MgRuAymg");
	this.shape_50.setTransform(-68,190.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],55.9,-167.8,0,55.9,-167.8,109).s().p("AqJbFUAAHAABAUMg24IhPFFMgRsAygg");
	this.shape_51.setTransform(-68,190.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],61.5,-186.1,0,61.5,-186.1,108.4).s().p("AqIbFUAAGAABAULg24IhQFJMgRrAycg");
	this.shape_52.setTransform(-67.9,190.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],66.4,-201.9,0,66.4,-201.9,107.9).s().p("AqIbFUAAHAABAUKg24IhRFNMgRqAyYg");
	this.shape_53.setTransform(-67.9,190.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],70.5,-215.4,0,70.5,-215.4,107.4).s().p("AqHbFUAAGAABAUJg24IhSFQMgRpAyVg");
	this.shape_54.setTransform(-67.8,190.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],73.8,-226.3,0,73.8,-226.3,107.1).s().p("AqHbFUAAGAABAUJg24IhTFUMgRoAyRg");
	this.shape_55.setTransform(-67.8,190.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],76.4,-234.9,0,76.4,-234.9,106.8).s().p("AqGbFUAAFAABAUJg24IhUFWMgRnAyPg");
	this.shape_56.setTransform(-67.8,190.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],78.3,-240.9,0,78.3,-240.9,106.6).s().p("AqGbFUAAFAABAUJg24IhUFXMgRnAyOg");
	this.shape_57.setTransform(-67.8,190.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],79.4,-244.6,0,79.4,-244.6,106.4).s().p("AqGbFUAAGAABAUHg24IhTFYMgRoAyNg");
	this.shape_58.setTransform(-67.8,190.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],79.8,-245.8,0,79.8,-245.8,106.4).s().p("AqGbFUAAGAABAUHg24IhTFYMgRoAyNg");
	this.shape_59.setTransform(-67.8,190.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},12).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(59));

	// Layer 4
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-267.6,163,0,-267.6,163,281.8).s().p("Egl2AQpUAAEAAIBLpgi1IkiCsMhGeAhdg");
	this.shape_60.setTransform(-244.1,116.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-204.4,130.1,0,-204.4,130.1,267.2).s().p("EglfARIIgNgbQArgQTupEMA3AgZYIh3BJIiLBSMhGnAhkg");
	this.shape_61.setTransform(-244.7,116.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-144.7,99.1,0,-144.7,99.1,253.3).s().p("EglWARMIgMgcQBSgiS7owUAUEgJTAi0gQEIhYA4IiNBRMhGuAhrg");
	this.shape_62.setTransform(-245.3,116.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-88.4,69.8,0,-88.4,69.8,240.3).s().p("EglOARQIgLgcQB2g1SNobUAUmgJmAiJgPyIg7ApIiNBQIk7CbMhB6AfVg");
	this.shape_63.setTransform(-245.8,117);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-35.5,42.2,0,-35.5,42.2,228.1).s().p("EglGARUIgKgcIT4pOUAVIgJ5AhhgPhIghAbIiOBQIk6CcMhCBAfag");
	this.shape_64.setTransform(-246.4,117.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],13.9,16.5,0,13.9,16.5,216.6).s().p("Egk/ARYIgJgcITvpOUAVmgKJAg8gPRIgIAPIiOBPIk7CcMhCGAfeg");
	this.shape_65.setTransform(-246.9,117.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],59.2,-7.5,0,59.2,-7.5,205.9).s().p("EglAARbIgIgcITlpLUAWDgKaAgZgPBIAQABIiPBPIk6CeMhCNAfhg");
	this.shape_66.setTransform(-246.5,117.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],100.8,-29.2,0,100.8,-29.2,196).s().p("EglEARjIgIgcQDwhzPtnXQWeqpf4uyIAmgKIiQBOIk6CfMhCRAflg");
	this.shape_67.setTransform(-245.8,117.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],139.1,-49.1,0,139.1,-49.1,186.9).s().p("EglIARrIgIgdQELh+PLnKQW2q2fbumIA5gUIiQBOIk6CgMhCXAfng");
	this.shape_68.setTransform(-245.2,116.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],174,-67.5,0,174,-67.5,178.6).s().p("EglSARTQEgiKOum9QXMrCe/uaIBMgfInKDvMhCbAfqIg6AGg");
	this.shape_69.setTransform(-244.7,116.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],205.6,-84.2,0,205.6,-84.2,171.1).s().p("EglWARXQE3iVOSmxQXgrOemuOIBdgoInLDwMhCfAftIg7AKg");
	this.shape_70.setTransform(-244.2,116.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],233.9,-99.1,0,233.9,-99.1,164.4).s().p("EglYARaQFJieN6mnQXyrXeRuGIBrgvInLDwMhCjAfvIg9AQg");
	this.shape_71.setTransform(-243.7,116.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],258.8,-112.3,0,258.8,-112.3,158.4).s().p("EglaARdQFYilNmmfQYCrgd9t9IB4g2InLDwMhClAfxIhAAUg");
	this.shape_72.setTransform(-243.3,116.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],280.4,-123.7,0,280.4,-123.7,153.3).s().p("EglcARgIS5pEQYQrndtt2ICDg8InMDwMhCoAf0IhAAXg");
	this.shape_73.setTransform(-243,116.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],298.7,-133.4,0,298.7,-133.4,148.9).s().p("EgleARiIS2pDQYcrtdetwICNhBInMDwMhCqAf1IhCAag");
	this.shape_74.setTransform(-242.7,116.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],313.6,-141.3,0,313.6,-141.3,145.4).s().p("EglgARkIS0pCQYlr0dStqICWhFInNDwMhCsAf3IhDAcg");
	this.shape_75.setTransform(-242.5,116.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],325.3,-147.4,0,325.3,-147.4,142.6).s().p("EglgARmISwpCQYur4dItmICchJInMDxMhDyAgWg");
	this.shape_76.setTransform(-242.3,116.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],333.6,-151.8,0,333.6,-151.8,140.7).s().p("EgliARnQGLi/MlmDQYyr6dDtkICfhLInMDxMhDzAgYg");
	this.shape_77.setTransform(-242.1,116.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],338.6,-154.5,0,338.6,-154.5,139.5).s().p("EgliARoISupCQY2r8c+tiICjhMInNDwMhDzAgag");
	this.shape_78.setTransform(-242.1,116.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],340.3,-155.4,0,340.3,-155.4,139.1).s().p("EgliARoISupCQZ8seebuMInMDwMhD1AgZg");
	this.shape_79.setTransform(-242,116.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60}]},26).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).wait(45));

	// Layer 6
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-108.3,-31.7,0,-108.3,-31.7,260.9).s().p("Egn4gGdIAehOUgABAACBMJAOZIDLA8g");
	this.shape_80.setTransform(-263.8,-50.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-59.8,-21.7,0,-59.8,-21.7,245.7).s().p("EgnxgGaIAfhOQACgGCcAYMAjbAGzIYAElIHGBZIG4BVIDMA7g");
	this.shape_81.setTransform(-264.5,-50.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-13.9,-12.1,0,-13.9,-12.1,231.3).s().p("EgnqgGXIAfhOQAEgLCPAPMAjiAG5IX/EpIHGBaIGvBWIDMA6g");
	this.shape_82.setTransform(-265.2,-50.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],29.4,-3,0,29.4,-3,217.7).s().p("EAmqAHlMhONgN3IAehPQAIgPCAAGQFQBBeZF+IX/EtIHGBbIGmBWIDNA5g");
	this.shape_83.setTransform(-265.8,-51.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],70,5.8,0,70,5.8,204.9).s().p("EAm8AHuMhOZgN5IAfhPQAIgUB0gBQEoA5fHGLIYAEwIHFBcIGeBWIDOA5g");
	this.shape_84.setTransform(-266.4,-52);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],108,14,0,108,14,193).s().p("EgnXgGFIAfhPQALgZBngIQECAzfzGWQMKCaL1CZIHGBeIGWBWIDOA4IgLADg");
	this.shape_85.setTransform(-267,-52.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],142.9,21.6,0,142.9,21.6,181.9).s().p("EgnXgGBIAfhPQANgdBdgOMAj5AHNQMcCeLkCYIHFBfIGPBXIDPA3IAKAHg");
	this.shape_86.setTransform(-267,-53.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],174.7,28.6,0,174.7,28.6,171.5).s().p("EgncgF9IAghPQAOghBTgUMAj+AHRQMsCjLUCWIHEBhIGJBWIDPA3IAeALg");
	this.shape_87.setTransform(-266.6,-53.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],203.9,35,0,203.9,35,162).s().p("EgnggF5IAghPQAPgkBJgaMAkEAHVQM6CmLFCVIHEBhIGDBXID/BFg");
	this.shape_88.setTransform(-266.1,-53.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],230.6,40.9,0,230.6,40.9,153.4).s().p("EgnkgF1IAghPQARgoBAgfMAkIAHYQNHCqK4CUIHEBiIF9BXIEQBIg");
	this.shape_89.setTransform(-265.7,-54.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],254.8,46.3,0,254.8,46.3,145.6).s().p("EgnogFyIAghPQASgrA5gkMAkMAHcQNTCtKsCTIHEBjIF3BWIEgBMg");
	this.shape_90.setTransform(-265.3,-54.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],276.4,51,0,276.4,51,138.6).s().p("EgnrgFvIAghPQATguAygoUABUAASAi7AHNQNeCwKhCRQErBBCZAjIFzBXIEtBOg");
	this.shape_91.setTransform(-265,-54.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],295.5,55.2,0,295.5,55.2,132.4).s().p("EgnugFtIAghPQAVgwArgrMAkSAHhQNoCzKXCQQEvBCCVAiIFvBXIE5BQg");
	this.shape_92.setTransform(-264.7,-55.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],312,58.9,0,312,58.9,127.1).s().p("EgnxgFrIAhhPQAVgyAmguUAAvAALAjmAHYQNwC1KPCPQEyBECRAiIFsBWIFEBTg");
	this.shape_93.setTransform(-264.5,-55.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],326,61.9,0,326,61.9,122.5).s().p("EgnzgFpIAhhPQAWg0AigxUAAgAAIAj2AHdQN3C3KICOQE2BFCNAhIFpBYIFNBTg");
	this.shape_94.setTransform(-264.2,-55.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],337.5,64.4,0,337.5,64.4,118.8).s().p("Egn1gFnIAhhQQAXg1AegzUAAUAAGAkEAHhQN9C4KCCOQE4BFCLAhIFmBXIFVBVg");
	this.shape_95.setTransform(-264.1,-55.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],346.4,66.4,0,346.4,66.4,116).s().p("Egn2gFmIAhhPQAXg3Abg1UAALAAFAkPAHjQOBC5J+COQE6BGCJAgIFkBYIFaBWg");
	this.shape_96.setTransform(-263.9,-55.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],352.8,67.8,0,352.8,67.8,113.9).s().p("Egn3gFlIAhhPQAXg3Aag3UAAEAADAkWAHmQOEC6J7COQE7BGCIAgIFjBYIFeBWg");
	this.shape_97.setTransform(-263.8,-55.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],356.6,68.6,0,356.6,68.6,112.6).s().p("Egn4gFlIAihPIAvhvUAABAADAkaAHmQOHC7J4CNQE8BHCHAgIFiBYIFhBXg");
	this.shape_98.setTransform(-263.8,-55.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],357.8,68.9,0,357.8,68.9,112.2).s().p("Egn4gFlIBQi+UAAAAADAkcAHmQOHC8J4CMQE8BHCHAgILDCvg");
	this.shape_99.setTransform(-263.8,-55.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_80}]},9).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(62));

	// Layer 14
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],17,-16.9,0,17,-16.9,170.6).s().p("AN003IBMAWUgAHAAFgaDAkyIj1Eig");
	this.shape_100.setTransform(98,-126.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],0.4,3.5,0,0.4,3.5,164.2).s().p("ALcxgICfi9IAOgVIA+AcQgwA3rtQZQmSImm/J2IgpA4IhoB9IiOCog");
	this.shape_101.setTransform(98.6,-126.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-15.2,22.7,0,-15.2,22.7,158.1).s().p("ALnx2ICrinIALgQIAxAfQhYBrrKPeQnKJlmPIxIgoA3IhqB9QhUBmg6BDg");
	this.shape_102.setTransform(99.1,-126.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-29.9,40.8,0,-29.9,40.8,152.4).s().p("ALyyJIC2iUIAHgLIAmAjQh/CZqpOqQn9KflkHyIgmAzIhrB/QhbBtg0A7g");
	this.shape_103.setTransform(99.6,-126.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-43.8,57.8,0,-43.8,57.8,147).s().p("AL7ybIDCiDIADgGIAbAnQijDGqJN2QowLXk5G1IgmAxIhsCAQhgB0guA1g");
	this.shape_104.setTransform(100,-127);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-56.7,73.8,0,-56.7,73.8,142).s().p("AMEysIDNhyIAAgCIAQArQjFDvpsNHQpdMLkTF8IgkAvIhtCBQhmB7gpAug");
	this.shape_105.setTransform(100.5,-127.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-68.8,88.7,0,-68.8,88.7,137.3).s().p("AMMy7IDXhiIgDABIAGAvQjjEWpRMbQqJM6juFIIgkAtIhtCCQhrCBgkAog");
	this.shape_106.setTransform(100.8,-127.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-80.3,102.6,0,-80.3,102.6,132.9).s().p("AMQzIIDfhUIgFAGIgCAxQkBE6o4LyQqwNnjNEXIgjArIhuCDQhwCHgfAjg");
	this.shape_107.setTransform(101.6,-127.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-91.2,115.5,0,-91.2,115.5,128.9).s().p("AMSzUIDnhGIgHAJIgLA0QkcFaogLNQrUOQivDrIghApQgqAvhGBVQh0CNgcAcg");
	this.shape_108.setTransform(102.5,-128.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-101,127.1,0,-101,127.1,125.3).s().p("AMTzfIDvg6IgKAMIgSA3QkzF5oMKqQr2O1iSDCQgIAIgZAfQgpAuhHBXQh4CSgYAYg");
	this.shape_109.setTransform(103.3,-128.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-110,137.7,0,-110,137.7,122).s().p("AMUzpID3gvIgMAPIgZA5QlKGUn5KLQsUPXh4CdIghAmIhwCGQh8CWgUATg");
	this.shape_110.setTransform(104,-128.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-118,147.2,0,-118,147.2,119).s().p("AMVzxID9glIgOARIgfA7QleGsnnJwQsvP1hhB8QgHAFgZAfQgnAshLBbQh+CagRAPg");
	this.shape_111.setTransform(104.6,-128.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-125,155.5,0,-125,155.5,116.4).s().p("AMXz5IECgcIgQATIgkA9QlvHCnYJXIuVRuQgFAFgaAeQgmAshMBbQiBCegPAMg");
	this.shape_112.setTransform(105.2,-129.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-131.1,162.8,0,-131.1,162.8,114.2).s().p("AMX0AIEHgUIgRAUIgpA/Ql+HVnLJBQtbQng8BGQgFADgaAeQgmArhMBdQiEChgMAJg");
	this.shape_113.setTransform(105.7,-129.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-136.3,168.9,0,-136.3,168.9,112.3).s().p("AMY0FIELgPIgSAXIgtBAQmLHknAIwQttQ6gtAxQgFACgZAeQgmAqhOBeQiFCkgKAGg");
	this.shape_114.setTransform(106.1,-129.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-140.6,173.9,0,-140.6,173.9,110.7).s().p("AMZ0KIEOgJIgTAYIgxBBQmVHxm2IhQt7RKgiAfQgEACgbAeQgkAqhOBfQiHClgJAFg");
	this.shape_115.setTransform(106.5,-129.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-143.8,177.8,0,-143.8,177.8,109.5).s().p("AMa0OIEQgFIgUAZIgzBCItNQRQuGRXgYARQgEABgaAfQgkAphPBgQiJCngHADg");
	this.shape_116.setTransform(106.7,-129.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-146.1,180.6,0,-146.1,180.6,108.6).s().p("AMa0RIESgBIgUAZIg1BCItOQQQuORggRAIQgDAAgbAfQgkAphPBgQiKCogGACg");
	this.shape_117.setTransform(106.9,-129.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-147.6,182.3,0,-147.6,182.3,108.1).s().p("AMa0SIEUAAIgVAaIg2BDItOQPQuTRlgOACQgDAAgaAfQgkAphQBgQiKCpgGABg");
	this.shape_118.setTransform(107,-129.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-148.1,182.8,0,-148.1,182.8,107.9).s().p("AMa0SIEUAAIuaRsQuURngMAAQgGAAiLCoQiLCpgFABg");
	this.shape_119.setTransform(107.1,-129.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_100}]},51).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(20));

	// Layer 7
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-9.2,0,0,-9.2,0,260).s().p("A/R22IBkhDUgAGAAHA7uAuOIBXBeg");
	this.shape_120.setTransform(-204.8,-152.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],22,20.9,0,22,20.9,247).s().p("A/c2rIBnhIUgAFAAIA7TAtiICEB9g");
	this.shape_121.setTransform(-205.9,-152.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],51.5,40.6,0,51.5,40.6,234.7).s().p("A/m2hIBphMUgAFAAIA67As4ICuCbg");
	this.shape_122.setTransform(-206.9,-151.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],79.3,59.2,0,79.3,59.2,223.2).s().p("A/v2XIBshQUgAGAAHA6kAsRIDVC3g");
	this.shape_123.setTransform(-207.8,-150.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],105.4,76.7,0,105.4,76.7,212.3).s().p("A/42OIBuhUUgAGAAIA6OArrID7DSg");
	this.shape_124.setTransform(-208.7,-150.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],129.9,93,0,129.9,93,202.1).s().p("EggBgWFIBxhYUgAGAAIA55ArIIEfDrg");
	this.shape_125.setTransform(-209.6,-149.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],152.7,108.3,0,152.7,108.3,192.7).s().p("EggJgV9IBzhbUgAFAAHA5lAqpIE/EBg");
	this.shape_126.setTransform(-210.3,-149.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],173.8,122.4,0,173.8,122.4,183.9).s().p("EggPgV2IBzheUgAFAAIA5VAqKIFcEXg");
	this.shape_127.setTransform(-211,-149);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],193.2,135.3,0,193.2,135.3,175.9).s().p("EggWgVvIB2hhUgAGAAHA5EApvIF5Erg");
	this.shape_128.setTransform(-211.7,-148.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],210.9,147.1,0,210.9,147.1,168.5).s().p("EggcgVoIB3hkUgAFAAHA41ApWIGSE8g");
	this.shape_129.setTransform(-212.3,-148.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],226.9,157.9,0,226.9,157.9,161.8).s().p("EggigVjIB5hmUgAFAAIA4oAo+IGpFNg");
	this.shape_130.setTransform(-212.9,-147.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],241.3,167.5,0,241.3,167.5,155.9).s().p("EggngVdIB6hpUgAFAAHA4cAorIG9Fbg");
	this.shape_131.setTransform(-213.3,-147.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],253.9,175.9,0,253.9,175.9,150.6).s().p("EggrgVZIB8hrUgAGAAIA4RAoZIHQFog");
	this.shape_132.setTransform(-213.8,-147.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],264.9,183.3,0,264.9,183.3,146).s().p("EggvgVVIB9htUgAGAAIA4IAoKIHgFzg");
	this.shape_133.setTransform(-214.2,-147.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],274.2,189.5,0,274.2,189.5,142.2).s().p("EggygVSIB9htUgAFAAHA4AAn9IHtF8g");
	this.shape_134.setTransform(-214.5,-146.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],281.8,194.5,0,281.8,194.5,139).s().p("Egg1gVPIB+hvUgAFAAHA36AnyIH3GEg");
	this.shape_135.setTransform(-214.7,-146.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],287.7,198.4,0,287.7,198.4,136.6).s().p("Egg2gVNIB+hwUgAFAAIA31AnpIH/GKg");
	this.shape_136.setTransform(-214.9,-146.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],291.9,201.3,0,291.9,201.3,134.8).s().p("Egg4gVMIB/hwUgAGAAIA3yAnjIIGGOg");
	this.shape_137.setTransform(-215.1,-146.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],294.4,203,0,294.4,203,133.8).s().p("Egg5gVLIB/hxUgAFAAIA3vAngIIKGRg");
	this.shape_138.setTransform(-215.2,-146.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],295.3,203.5,0,295.3,203.5,133.4).s().p("Egg5gVKIB/hxUgAFAAHA3uAnfIILGRg");
	this.shape_139.setTransform(-215.2,-146.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_120}]},4).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).wait(67));

	// Layer 5
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-182.9,20.9,0,-182.9,20.9,269.2).s().p("EgnWAD9UAABAAJBLrgJSIDBgEMhOjAKgg");
	this.shape_140.setTransform(-260.2,37.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-127.5,14.7,0,-127.5,14.7,248.3).s().p("EgnWAD8UAABAAJBK0gJIID4gJMhOjAKZg");
	this.shape_141.setTransform(-260.2,36.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-75.1,8.8,0,-75.1,8.8,228.5).s().p("EgnWAD7UAABAAJBKAgI/IEsgOMhOjAKTg");
	this.shape_142.setTransform(-260.2,36.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-25.7,3.2,0,-25.7,3.2,209.9).s().p("EgnXAD7UAACAAJBJPgI3IFdgTMhOiAKNg");
	this.shape_143.setTransform(-260.2,36.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],20.7,-2,0,20.7,-2,192.5).s().p("EgnXAD6UAABAAIBIigIuIGMgXMhOjAKHg");
	this.shape_144.setTransform(-260.3,35.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],64.1,-6.8,0,64.1,-6.8,176.1).s().p("EgnXAD5UAABAAJBH2gInIG4gbMhOjAKBg");
	this.shape_145.setTransform(-260.3,35.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],104.5,-11.4,0,104.5,-11.4,160.8).s().p("EgnXAD4UAABAAJBHPgIgIHfgfMhOjAJ9g");
	this.shape_146.setTransform(-260.3,35.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],142,-15.6,0,142,-15.6,146.8).s().p("EgnYAD4UAABAAJBGrgIaIIEgjMhOiAJ5g");
	this.shape_147.setTransform(-260.3,35.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],176.4,-19.5,0,176.4,-19.5,133.8).s().p("EgnYAD3UAABAAJBGIgITIIognMhOjAJ0g");
	this.shape_148.setTransform(-260.4,35);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],207.8,-23,0,207.8,-23,121.9).s().p("EgnYAD3UAABAAIBFpgINIJHgqMhOjAJxg");
	this.shape_149.setTransform(-260.4,34.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],236.3,-26.2,0,236.3,-26.2,111.2).s().p("EgnYAD2UAABAAJBFNgIJIJjgsMhOjAJtg");
	this.shape_150.setTransform(-260.4,34.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],261.7,-29,0,261.7,-29,101.6).s().p("EgnYAD2UAABAAJBEzgIFIJ9guMhOjAJpg");
	this.shape_151.setTransform(-260.4,34.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],284.2,-31.5,0,284.2,-31.5,93.2).s().p("EgnYAD1UAABAAJBEdgIAIKTgxMhOjAJng");
	this.shape_152.setTransform(-260.4,34.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],303.7,-33.7,0,303.7,-33.7,85.8).s().p("EgnYAD1UAAAAAJBELgH9IKmgzMhOiAJlg");
	this.shape_153.setTransform(-260.4,34.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],320.1,-35.6,0,320.1,-35.6,79.5).s().p("EgnYAD1UAAAAAJBD6gH7IK3g0MhOiAJig");
	this.shape_154.setTransform(-260.4,34.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],333.6,-37.1,0,333.6,-37.1,74.5).s().p("EgnYAD1UAAAAAJBDtgH5ILEg1MhOiAJhg");
	this.shape_155.setTransform(-260.4,34);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],344.1,-38.3,0,344.1,-38.3,70.6).s().p("EgnZAD1UAAEAAIBDggH2ILPg2MhOjAJfgEgnZAD1IAAAAIAAAAg");
	this.shape_156.setTransform(-260.5,33.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],351.5,-39.1,0,351.5,-39.1,67.8).s().p("EgnZAD1UAAEAAIBDYgH1ILXg3MhOjAJfgEgnZAD0IAAABIAAgBg");
	this.shape_157.setTransform(-260.5,33.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],356,-39.6,0,356,-39.6,66.1).s().p("EgnZAD0UAAEAAJBDUgH0ILbg3MhOjAJdgEgnZAD0IAAAAIAAAAg");
	this.shape_158.setTransform(-260.5,33.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],357.5,-39.8,0,357.5,-39.8,65.4).s().p("EgnZAD0UAAEAAJBDSgH0ILdg3MhOjAJdgEgnZAD0IAAAAIAAAAg");
	this.shape_159.setTransform(-260.5,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_140}]},39).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).wait(32));

	// Layer 10
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],166.3,97.9,0,166.3,97.9,151.3).s().p("EggDgUwIFHCyMA7AAlfIhDBQUAACgAFg/Ggpcg");
	this.shape_160.setTransform(217.8,143.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],120.9,69,0,120.9,69,145.9).s().p("A//0rIFaDGUAgGAUhAafAQ1IgtA7UgDUgCIg7+gnPg");
	this.shape_161.setTransform(217.6,143.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],78,41.6,0,78,41.6,140.8).s().p("A/60mIFrDaUAiiAWLAXoAPBIgYAnUgGdgEDg5AglKg");
	this.shape_162.setTransform(217.4,142.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],37.5,15.8,0,37.5,15.8,136).s().p("A/30hIF9DrUAk2AXwAU7ANVIgDATUgJegF4g2NgjLg");
	this.shape_163.setTransform(217.2,142.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-16.1,-17.9,0,-16.1,-17.9,131.5).s().p("AdYS9QiQhbijhrIFCDIgA9ly+IBkA+IC6B6Ikei4g");
	this.shape_164.setTransform(232.5,151.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-55.7,-43.5,0,-55.7,-43.5,127.3).s().p("A8YyKIgzgiUAsXAcgAOAAIpIggAQUgQBgKOgpDgapg");
	this.shape_165.setTransform(236.4,154.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-82.3,-60.7,0,-82.3,-60.7,123.4).s().p("A7FxQIjUiPUAsIAcOAQrAKRIgwAgUgNzgI1gq8gb7g");
	this.shape_166.setTransform(229.7,149.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-103,-74,0,-103,-74,119.7).s().p("A5SwAIm3kpUAsvAciATkAMDIhAAtUgLwgHigssgdHg");
	this.shape_167.setTransform(219.6,143.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-131.9,-92.6,0,-131.9,-92.6,116.4).s().p("A5Kv3InDk1UAqyAbKAVpANUIhOA7UgJ3gGWguTgeOg");
	this.shape_168.setTransform(220.1,143.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-158.3,-109.6,0,-158.3,-109.6,113.3).s().p("A5DvvInOlAUApAAZ5AXjAOeIhbBIUgIJgFQgvxgfPg");
	this.shape_169.setTransform(220.6,143.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-182.2,-125,0,-182.2,-125,110.5).s().p("A48vnInYlLUAnaAYxAZPAPhIhlBTUgGngESgxFggIg");
	this.shape_170.setTransform(221.1,144.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-203.5,-138.8,0,-203.5,-138.8,108.1).s().p("A43vhInglTUAl9AXwAayAQdIhwBcUgFNgDZgySgg9g");
	this.shape_171.setTransform(221.5,144.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-222.4,-151,0,-222.4,-151,105.9).s().p("A4yvbInolbUAksAW3AcJARRIh5BmMg3UgkTg");
	this.shape_172.setTransform(221.8,144.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-238.7,-161.5,0,-238.7,-161.5,104).s().p("A4uvWInuliUAjlAWFAdUASAIiBBsUgC6gB8g0QgiTg");
	this.shape_173.setTransform(222.1,144.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-252.5,-170.4,0,-252.5,-170.4,102.4).s().p("A4qvRIn0lpUAiqAVbAeTASnIiHBzUgCBgBYg1Bgi0g");
	this.shape_174.setTransform(222.4,145);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-263.8,-177.7,0,-263.8,-177.7,101.1).s().p("A4nvOIn5ltUAh5AU7AfIATEIiNB5UgBSgA7g1pgjQg");
	this.shape_175.setTransform(222.6,145.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-272.6,-183.4,0,-272.6,-183.4,100).s().p("A4lvLIn8lyUAhTAUhAfwATdIiRB9UgAtgAkg2Jgjlg");
	this.shape_176.setTransform(222.8,145.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-278.9,-187.5,0,-278.9,-187.5,99.3).s().p("A4jvJIn/l0MBBFAn8IiUB/UgATgASg2fgj1g");
	this.shape_177.setTransform(222.9,145.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-282.7,-189.9,0,-282.7,-189.9,98.9).s().p("A4ivIIoAl2MBBGAn8IiXCBUgACgAJg2tgj+g");
	this.shape_178.setTransform(223,145.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.455],-283.9,-190.7,0,-283.9,-190.7,98.8).s().p("A4ivHIoBl3MBBHAn7IiXCCUAACgAFg2xgkBg");
	this.shape_179.setTransform(223,145.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_160}]},70).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.4,-276.1,995.8,674.9);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AA/ARIAAgNIgCACIgCgEQAEgCADgGIADACQAAADgCABIAAARgAAgANQAEgGAAgJIAAgMIAQAAIAAAZIABABQABgBAAgHIAAAAIAEAAIAAABIgBAIQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIgCAAQgEAAAAgEIAAgIIgCABIgEgHIAAABQAAAMgFAGgAAvABIAAgMIgGAAIAAAHIACgBIAEAGgAgjAMQgDgFgCgHIgEAAIgBgDIAFgBIgBgLIAEAAIACALIAMgCIAAAFIgMABIADAHQACAEABAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAgFIAFADQgBAJgFAAQgEAAgDgFgAgzARIAAgRIgDADIgDgDIAGgHQACgEABgFIAFACIgDAIIAAAXgABPAQQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBIgBgDIAAgFIAEAAIAAAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIADAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAFABIgCAEIgCABgAhIAQQgEAAAAgEIAAgHIAEAAIAAAGIABABIACAAIABAAIABgDIAEABIgCAFQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAgAAXANQAEgFADgHIAEACQgCAHgFAGgAheAPIACgJIADABIAAAAIgBAJgABDAOQACgEABgFIAEABIgCAJgAgJAPIAAgDIAJAAIAAgDIgGAAIAAgEIAGAAIAAgCIgHAAIAAgRIASAAIAAARIgIAAIAAACIAHAAIAAAEIgHAAIAAADIAKAAIAAADgAADAAIAEAAIAAgEIgEAAgAgCAAIACAAIAAgEIgCAAgAADgHIAEAAIAAgEIgEAAgAgCgHIACAAIAAgEIgCAAgABXAHIAEgCIAEAIIgEACIgEgIgAhTANIABgCIgCABIgBgGIACgBIACAFIAAgFIAEABQAAAEgCAFgAhAAGIAEgBIACAIIgEABIgCgIgAhYAGIACAAIABAIIgDAAgAgUAIIAEgBIAAgHIgDAAIAAgDIADAAIAAgHIgEAAIAAgDIAMAAIAAADIgDAAIAAAHIADAAIAAADIgDAAIAAAGIAEgBIAAAEIgMADgABPAGIABgCIgLAAIAAgDIAZAAIAAADIgLAAIADACIgDAEIgEgEgAhIAFIACgBIgLAAIAAgMQgCAGgFADIADAAIAAgBIADAAIABAFIgDAAIAAgBIgJABIAAgDIABAAIAEgFIgFABIAAgDIAAAAQADgFACgFIAEABQgCAFgCADIACAAIACgFIADACIAAgFIAIAAIABgCIAEABIgBABIAJAAIAAASIgJAAIAEACIgDADIgEgEgAhJAAIAJAAIAAgBIgBABIgDgBQgBABgEAAgAhMAAIACAAIgCgBIAFgBIgDgCIgBABIgBgCgAhGgJIAFAAIAAADIgBACIACACIAAgIIgGAAgAhIgFIADABIABgCIgEAAgAhMgFIADgFIgDAAgAhIAFgABGAAIAAgJIAJAAIAAgCIgKAAIAAgCIAAgBIAKAAIAAgCIAEAAIAAACIALAAIAAADIgLAAIAAACIAKAAIAAAJgABWgCIADAAIAAgDIgDAAgABQgCIADAAIAAgDIgDAAgABKgCIACAAIAAgDIgCAAgAAXgEIADgDIAHAEIgDADIgHgEgAA7gIQAFgDACgEIADACIgDAFIgEAEgAgjgNIAEgCIAFAGIgEADIgFgHgAAagMIACgDIAHAEIgDAEIgGgFg");
	this.shape.setTransform(13.9,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABgASIAAgFIABAAIABAAIABAAIABAAIAAgJIgGAAQgEACgEAAIAAgFIAEAAIADAAIAEgBIAEgDIgFAAIgJACIAAgEIADAAIACAAIACgDIADgCIgFAAIgGAAIgBgDIARAAIAOgDIABAEIgHABIgKAAIgBADIgDADIAEAAIAFAAIACgDQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAIAEACIgIAGIgHADIAHAAIAIAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIgCgBIAEgCIADAEIADADIgDAEIgCgFIgFAAIgFAAIAAAKIgBAEIgEABgAA9ASIAAgGIgPAAIAAgCIAPAAIAAgDIgMAAIAAgNIAMAAIAAgDIgPAAIAAgEIAPAAIAAgDIAEAAIAAADIAPAAIAAAEIgPAAIAAADIAMAAIAAANIgMAAIAAADIAPAAIAAACIgPAAIAAAGgABBADIAKAAIAAgDIgKAAgAA0ADIAJAAIAAgDIgJAAgABBgBIAKAAIAAgCIgKAAgAA0gBIAJAAIAAgCIgJAAgAAIASIAAgFIAPAAIAAgGIgLAAIAAgEIALAAIAAgDIgLAAIAAgDIgBACIgCABIgCgFIAFgBIADgDIADgCIADgCIgIAAIAAgDIANAAIAGAGQAEADAHACIgCAFIgCgCIgBgBIAAADIgMAAIAAADIAKAAIAAAEIgKAAIAAAGIAPAAIAAAFgAAXgKIgCACIgDADIgEACIAVAAIgCgCIgCgBIgEgDIgDgEIgBADgABxAMIgGgEIACgCIAFAEIAFADIgDAEIgDgFgABVANIAFgDIAEgEIACACIgEAEQgCADgEACgAgTARIgGgXIgFAXIgIAAIgIggIAIAAIAEAWIAGgWIAIAAIAFAWIAFgWIAIAAIgIAggAg4ARIAAgXIgIAXIgGAAIgIgXIAAAXIgGAAIAAggIAKAAIAHAXIAJgXIAJAAIAAAggAh2ARIAAggIAQAAQAFgBADADQADACAAAEQAAAGgEABQAGABgBAFQAAALgNAAgAhuAKIAHAAIAFAAIABgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgBIgHAAgAhugCIAHAAIAEgBIABgDQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgDAAIgHAAg");
	this.shape_1.setTransform(16.5,7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AA5ALQgDgCAAgFQAAgEACgCQADgDAFAAQAFAAADADQACACAAAEQAAADgCADQgDAEgFAAQgEgBgDgCgAA9AAQgBAAAAAAQAAAAAAABQgBAAAAABQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIADgBQACgCAAgDQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBAAAAAAIgDgBQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAgAAkALQgDgCAAgFQAAgEACgBQADgEAFAAQAFAAACADQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAIgFAAIgCAAIgCgBQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgBAEIABADQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABgBIABgBIAFABQgCAGgHABQgFgBgCgCgAg3AKIAAADIgFAAIAAgZIAFAAIAAAKQACgDAEAAQAEAAACADQACACAAADQAAAFgCACQgCAEgEAAQgEAAgCgEgAg2AAIgBAEIABADQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgEgCAAIgDgBQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAgACXANIgDgNIgDANIgGAAIgGgRIAGAAIADAMIADgMIAGAAIADAMIADgMIAGAAIgGARgAB8AMQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIAAgHIgCAAIAAgEIACAAIAAgFIAGAAIAAAFIAEAAIAAAEIgEAAIAAAHIABABIABABIACgBIAAAFIgEAAIgEgBgABvANIAAgGIAGAAIAAAGgABlANIAAgMQAAgBAAAAQgBAAAAAAQAAAAgBAAQgBAAAAgBQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAADIAAAKIgGAAIAAgMQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAAKIgFAAIAAgRIAFAAIAAADQACgEAEAAQAEAAABAEQACgEAEAAQAGAAAAAFIAAANgAAXANIAAgGIAGAAIAAAGgAAJANIgDgNIgDANIgEAAIgGgRIAGAAIABAMIAEgMIAFAAIADAMIADgMIAGAAIgGARgAgOANIAAgMQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgBADIAAAKIgGAAIAAgMQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBADIAAAKIgFAAIAAgRIAFAAIAAADQACgEAEAAQAEAAABAEQACgEAEAAQAGAAAAAFIAAANgAhHANIAAgGIAGAAIAAAGgAhVANIgDgNIgDANIgGAAIgGgRIAGAAIADAMIADgMIAGAAIADAMIADgMIAGAAIgGARgAhyANIgDgNIgDANIgHAAIgFgRIAFAAIAEAMIADgMIAFAAIAEAMIADgMIAFAAIgFARgAiQANIgDgNIgDANIgGAAIgGgRIAGAAIADAMIAEgMIAFAAIADAMIADgMIAGAAIgGARg");
	this.shape_2.setTransform(20.8,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// flash0.ai
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A0A0A").s().p("AgeAfIgCgBIgCgBIgBAAIAFgCIABABIACABIACAAIACgBIAAgCIAAgEIgBABIgBABIgDAAIgDAAIgCgBIgCgDIAAgDIAAgEIABgCIADgDIADAAIADAAIACABIAAACIAAgDIAGAAIAAAQIgBAEIgCACIgDABIgEAAgAgdAMIgBAFIABADQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAIADgBIAAgDIAAgFIgDgBIgDABgAB7AaIgDgBIgDgCIgDgDIAAgHIADgCIADgDIADAAIAEAAIACACQADACAAAFIAAABIgMAAIABADIACABIACAAIACgBIAAgBIAEACIgBABIgFADgAB6ALIgBABIgBABIAAACIAHAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAgBIgBgBIgCAAgABUAYIgBgCIAAgCIAAgMIAEAAIAAAMIACACIABAAIACgBIABgCIABgCIAAgJIAEAAIAAARIgEAAIgBgCIgCABIgDACQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAgAA/AUIAEAAIAAAAIABACIADAAIACAAIABgCIgBAAIgBgBIgEgBIgDgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIgBgDIABgBIABgCIAGgBIAEAAIACACIABABIgEACIgBgBIgBgBIgBAAIgDAAIgBABIABABIACABIAHADIABABIAAACIAAACIgCACIgCABIgDABQgHgBgBgFgAAxAaIgCgBIgCgBIgBgCIgBgCQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIACgCIAIgCIAAgBIgBgCIgCAAIgCAAIgCACIgDgBIAAgBIABgBIABgBIADgBIACAAIAEAAIADADIAAACIAAAKIABACIgEAAIAAgCIgDABIgCACgAAzASIgDABIAAACIACABIABAAIACAAIABgCIABgBIAAgBgAAhAaIgEgBIgDgCIgCgDIAAgDIAAgEIACgCIADgDIADAAIAFAAIACACQACACAAAFIAAABIgMAAIABADIADABIABAAIACgBIABgBIADACIgBABIAAABIgEACgAAeAMIgBADIAIAAIgBgDIgCgBIgCAAgABmAZIAAgRIAGAAIAAADIAAgBIABgBIABgBIADAAIAAAEIgCAAIgBAAIgBABIgBAEIAAAIgAAPAZIAAgYIAFAAIAAAYgAgGAZIAAgYIAJAAIAEAAIADACIABACIAAAEIAAADIgFAFIgHAAIAAAIgAgBAMIAFAAIABgBIABgBIAAgBIgBgDIgDgBIgDAAgAgsAZIAAgMIgBgBIgCgBIgCAAIgBABIAAAFIAAAIIgFAAIAAgRIAFAAIAAADIABgCIAEgBQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAIABACIABACIAAAMgAhBAZIAAgRIAFAAIAAARgAhPAZIgGgRIAFAAIAEAMIADgMIAFAAIgGARgAhdAZIAAgRIAGAAIAAARgAhqAZIAAgRIAFAAIAAADIAAgBIABgBIACgBIADAAIAAAEIgCAAIgCAAIgBABIgBAEIAAAIgAiDAZIAAgYIAJAAIAFABIAEACIACAEIABAEIgBAGIgCAEIgEACIgFABgAh+AUIAEAAIADAAIACgBIABgCIABgFIgBgEIgDgCIgDgBIgEAAgAhBAFIAAgEIAFAAIAAAEgAhdAFIAAgEIAGAAIAAAEgAAYgFIgEgBIgCgBIgBgDIgCgEIACgEIABgDIACgCIAEAAIAEAAQAAABABAAQAAAAAAAAQABAAAAAAQAAABAAAAQADADAAAEIAAABIgNAAIAAACIACABQAAABAAAAQABAAAAAAQAAAAABAAQAAABABAAIABAAIADgDIADACIgBACIgCABIgCABgAAWgTIgCACIAAACIAIAAIAAgEIgCgBIgEAAgAAEgFIgDgBIgBgBIgCgDIAAgEIAAgEIACgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBIADAAIAEAAIADACQADADgBAEIAAABIgLAAIAAACIAAABIACACIACAAIADgDIAEACIgCACIgCABIgCABgAACgTIAAACIAAACIAGAAIAAgEIgCgBIgDAAgAgogFIgDgBIgDgCIgBgFIAGgBIAAACIABACIABABIAEAAIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAIgDgBIgDgBIgDgBIgCgBIgDgCIAAgDIAAgDIADgDIADgBIAEgBIADABIAEABIABABIADAFIgFAAIgCgCIgCgBIgCAAIgCAAIgCAAIgBADIAAAAIACACIAKACIAEAEIAAACIgBAEIgCACIgDABIgEABgAAlgGIAAgRIAEAAIAAADIABgCIAEgBIABAAIAAAEIgEAAIgBACIgBABIAAACIAAAIgAgLgGIAAgMIgBgBIAAAAIgBgBIgBABIgCABIAAABIgBADIAAAIIgFAAIAAgYIAFAAIAAAKIACgCIABgBIACAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAIABACIABADIAAALg");
	this.shape_3.setTransform(66.8,36.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 2
	this.instance = new lib.logo();
	this.instance.setTransform(53,4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// box
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAADcIAAm3IHCAAIAAG3gAnBDcIAAm3IG5AAIAAG3g");
	this.shape_4.setTransform(45,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-22,300,450);


(lib.copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHLAYQgJA7gVAkIgNgVQgBAUgSgBIgMAAIgDgOIAJABQAGgBAAgFIAAgPIgKAAQgRAAgDgEQgDgDAAgHIAAgHIgIAAQgCARgRAHIAvAAIAAAMIgQAAIAAATIgOAAIAAgTIgSAAIAAgMIgLgKQAPgGABgIIgQAAIAAAOIAAAsIgSAAIAAhJIBtAAIAAAzQAZgwAHhIIghAAIAAgWIAhAAIAAhKIAVAAIAABKIAnAAIAAAWIgnAAQAIBNAfArIgQAWQgVgigMg+gAF7BBQAAAFAKAAIAIAAIAAgJIgSAAgAlrACIgbAAIAABSIAsgPIAAAaQgdAMg3AMIgFgaQAIgBAOgDIAAjHIB/AAIAABwIg3AAQACARAJAUQAWgPANgRIATARQgTAUgXAPQARAYAdARIgPAUQhCgsgKhKgAmGgTIBRAAIAAgZIhRAAgAmGhBIBRAAIAAgXIhRAAgAn7B4IAAjlIBTAAIAAASQgIAlgMAZQAWAmgBATQAAAkglgBIgIgBIgGgXIAOABQAOAAAAgNQAAgTgWgkQALgYAKgiIgkAAIAADOgAEMBiQAOglAAhcIAAg0IAqAAIAAgkIAXAAIAAAJIBBAAIAAAQIhBAAIAAALIBNAAQgDAQgGAWIgUgGQAFgLAAgEIgxAAIAAAIIAkgBIABAOIglABIAAAFQAAAEAHAAIAxAAIAAANIg1AAQgWAAAAgRIAAgFIgdAAIAAAcQAABOgQA1gAEvg4IAdgBIAAgJIgdAAgAheBzIgGgXIAgABQAIAAAAgJIAAg4IhkAAIAAgYIBiAAIAAgYIhiAAIAAgYIA9AAIAAgbIg3AAIAAgXIA3AAIAAgZIAWAAIAAAZIA6AAIAAAXIg6AAIAAAbIBCAAIAAAYIgaAAIAAAYIAaAAIAAAYIgaAAIAAA6QAAATgFAFQgHAGgRgBgAAHBxIAAgWIBsAAIAAgfIhbAAIAAgWIBbAAIAAgaIhWADIgGgXIAZAAQBmAABIgJIAKATQguAHgvACIAAAbIBbAAIAAAWIhbAAIAAAfIBsAAIAAAWgAjzBvIAAjZIBKAAIAADTIgYAAIAAgSIgbAAIAAAYgAjcA+IAbAAIAAg+IgbAAgAjcgUIAbAAIAAg+IgbAAgAiRAwIAVgPIAhAnIgVAQQgPgVgSgTgAE7AnIAAgjIBhAAIAAAjgAFNAZIA9AAIAAgJIg9AAgAE3gCIAAgNIBrAAIAAANgAAfggIAAhOIDAAAIAABOgAA3g2ICPAAIAAgiIiPAAgAHdhcIAQgGIAOAhIgTAHQgFgYgGgKg");
	this.shape.setTransform(49.7,11.8,0.979,0.979);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.5,23.5);


(lib.copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(130.4,12,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,0,265.4,24);


(lib.copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjxBfQA/gGAmgTQg9gXgPgEIAjgrIhFAAIAAgWIBWAAIAVgpIAaAHIgTAiIB+AAIAAAWIgmAAQgNAkgeAdQAeALAvAWIgSAVIhOgmQgwAfhIAIgAiwAhIA8AVQAbgTAMgjIhKAAgAHOB3IAAhFIhVAMIAAgXIBVgNIAAiRIAYAAIAACOIAYgDIAAAVIgYAGIAABIgAE+APQgIAXgaAhIgPgVQAfgkARgqIguAAIAAgVIAvAAIAAghQgLADgdACIgDgVQA4gDApgQIAIAWIgmAKIAAAkIAmAAIAAAVIgmAAIAAACQAaAZAQAQIgOAVIgOgTIgOgRIAAB3IgYAAgAnzB3IAAiWIBoAAIAAB1QAAASgFAHQgFAFgOAAIgXAAIgEgXIAUACQAIAAAAgJIAAgPIg6AAIAAAwgAncA1IA6AAIAAgXIg6AAgAncALIA6AAIAAgTIg6AAgAo/B3IAAgLIiIAAIAAALIgZAAIAAhvQgJAGgKACIgOgSQAqgMAMgYIgzAAIAAgVIA4AAQAEgJAAgOIgWAAQgFAGgPAMIgRgQQAXgMAPgbIAWAEIgHAMIBEAAIAAAVIgnAAIgCAXIAtAAIAAAVIgzAAQAdAPAXAPIgQAOQgNgIgOgJIgQgLQgRAVgVAJIC6AAIAABvgArHBXICIAAIAAgTIiIAAgArHAwICIAAIAAgSIiIAAgAK1BQQgoAegkAJIgPgXQAogKAigYQgUgUgTgiIAWgIQARAgASASQAZgWAMgeIhmAAIAAgYIA0AAIAAghIg3AAIAAAQIgfAAIAAArIAfgJIAAAXIgfALIAAA+QABAUgGAEQgGAIgTAAIgTAAIgHgbIAYABQAHAAAAgJIAAg0IgiAJIgGgbQAYgDAQgFIAAgxIglAAIAAgWIAlAAIAAg2IAZAAIAAA2IAfAAIAAgSIA3AAIAAgkIAYAAIAAAkIA9AAIAAAYIg9AAIAAAhIAzAAIAAAWQgEALgMAXQgNAVgQAOQAbAVAgAJIgOAYQgggMgfgbgAlZBxQgRAAgGgGQgGgGAAgRIAAhWIAXAAIAAAjQAkgFAhgVIAMAXQgmAUgrAJIAAAYQAAAIAKABIAbAAQANAAAEgDQAFgDAAgYIAAgBIAWAHQgBAhgJAHQgHAFgaAAgAARBvIAAgYIBjAAIAAgrIhFAAIAAgVIBFAAIAAglIhIAAIAAgRIgVANIgOgZQA7gVAfgeIguAAIAAgWIBYAAQAtAwA/AYIgMAYQgPgFgHgGIAAARIhJAAIAAAlIBGAAIAAAVIhGAAIAAArIBkAAIAAAYgAA8gmICPAAQgrgYgfgeQgfAmgmAQgAGCgWIAQgQQAVAMAZASIgQATQgbgWgTgLgAp4gHIAAhdIBeAAIAABdgApigcIAyAAIAAg0IgyAAgAlZgLQgRAAgGgGQgGgGAAgRIAAhMIAXAAIAAAkQApgJAcgPIALAVQgiARguAKIAAANQAAALAKAAIAbAAQAMAAADgDQAEgDAAgUIAAgGIAXAIQgBAggIAHQgGAGgaAAgAgogmIAAgiIiwAAIAAAiIgZAAIAAg5IBjAAQgEgMgFgIIAbgEQAFAJAEAPIBjAAIAAA5gAmUgyQgmAGg/AAIgEgXIAUAAQARgbAGgZIAZAGQgHAYgOAWQAcAAAPgFIgOgRIAQgMQAUAVATAbIgSANgAGIhTIAPgQQAPAIAfAYIgQASQgbgWgSgMg");
	this.shape.setTransform(75.4,11.8,0.979,0.979);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.9,23.5);


(lib.copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(122.4,11.7,0.959,0.959);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.8,23.5);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdBVIAhgaQAYAPAQAPQAWgVARggIhsAAIAAgsIBSAAQgTgdgTgXIAjgXQAaAbAWAdIgdATIBCAAIAAAjQgTA0goApQATAPAPARIgoAlQgtg2g6gygAEsB2IAqgMQAZAdAXAkIgxAQQgTgogWgdgAC5CgQAlgYAQgdIAtAMQgTAsggAYgAhhC7IAAjDIglAAIAAADQAAB6guBFIgrgmQAog5AAh+IAAh3QBSgBA/gZIAWAzQg/AOg3ACIAAA8IBzAAIAAAtIgfAAIAADDgAk2C7IAAhaQgdApgiAXIgRg1QAwgYAdgqIhKAAIAAgqIBNAAIAAgbIhIAAIAAgqIAoAAQgGgSgNgVIArgKQAMAUAJAdIAWAAQAKgWAHgcIh3AAIAAgqIA9AAQgCgIgJgNIAygHQALAPADANIA/AAIAAAqIg6AAIAuALQgLAbgGAMIAjAAIAAAqIhFAAIAAAbIBIAAIAAAqIhIAAQAfATAdAaIgdApQgSgYgNgOIAABhgApkC7IAAgOIhKAAIAAAOIgtAAIAAhWQgHAsgUAnIgogqQAgg5AAhZIAAhAIgOAMIgSg1QA/gZAsg0IAmAAQApAWBAAuIgaAnIAACDIiTAAIgBAQICdAAIAAB3gAquCFIBKAAIAAgbIhKAAgArPANIBjAAIAAgOIhjAAgArPgiIBjAAIAAgQIhjAAgAp5hZIAoAAQgUgRgcgUQgbgVgCABQgaAiglAXIAxAAQgHgMgIgJIAqgQQANAQALAVgAJOCgQgHARgbABIgoAAIgIgyIAYAAIAFAAQAJAAAAgMIAAgjIgeAUQgGgOgTgcIAAABQAAAbgKArQgIArgJANIgpgmQAWguAAhBIAAgQIgVAAIAAgoIAXAAIAAh6IAkAAQAIgTAEgaIA2AGIgLAlIA3AAIAAELQAdggAAhdIAAg5IB6AAIAAC0QAAAGAFAAIADAAQAGAAAAgUIABgtIAAgLIAoAKQAAA3gGAeQgEAegeABIgYAAQgngBAAgqIAAiQIgZAAQAACOg5A1gAIiBBIAAgrIg2AAIAAAOIgBALIAagOIAdAggAHugTIA0AAIAAgbIgeATQgMgWgKgOgAIig8IAAgoIg0AAIAAAXIAXgNQAMAJARAVgAoRC2IgKg4IAqAEQANAAAAgOIAAkuIAxAAIAAE5QAAAigLAKQgKALgcAAgADRBpIAAirIgaAmQgyhAgSgxQgdBOgpAqIgggrQAxgwAWhKIA5AAQAYA7AsAsIAAgbIA1AAIAJgXIhKAAIAAgqIC+AAIAAAqIhDAAIgKAXIBAAAIAADXgAEBBEIBGAAIAAgcIhGAAgAEBAFIBGAAIAAgWIhGAAgAEBgzIBGAAIAAgVIhGAAgAokBfIAAjVIAAgqIAtAAIAAD/gAJahWIAAgwIA9AAQgJgVgRgYIA1gHQAOAUAPAgIBEAAIAAAwg");
	this.shape.setTransform(71.5,17,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,34);


(lib.copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al5C9IAAjhICIAAIgGgYQgrAGhbAGIgMgzIAWAAQAbgqALgwIA1ARQgSAtgTAcIA4gBIgRgkIArgPQAUAkAYA0IgpAbIAZAAIAACyQAAArgkAAIgmAAIgJg3IAdABQAFAAABgKIAAgJIhJAAIAABNgAlIBMIBJAAIAAgUIhJAAgAlIAWIBJAAIAAgSIhJAAgAn+C9IAAgQIjAAAIAAAQIg0AAIAAioIgaAMIgagsQA0gMATgcIhCAAIAAgoIAcAAIgegaQAogdASgrIAsAIQgEAJgGAKIBkAAIAAAoIg4AAIgCAfIBDAAIAAAoIhHAAQAgALAlAVIgdAgICuAAIAACwgAq+CFIDAAAIAAgZIjAAAgAq+BMIDAAAIAAgYIjAAAgArlANIBmAAQgKgJgYgOIgYgRQgTAbgZANgAr7hbIAtAAQACgIAAgIQACgIABgHIgZAAQgHAOgSARgAJPC7IAAiMQgvBMhUAtIgggvQAcgMAmgdQAmgdAQgUQgRgVgWgSQgPAfgaAXIgkgnQAzgmAQg/IAvAKQgFAQgNAbQAXARAZAXIAPgWIAAhNIidAAIAAgzICdAAIAAgmIA0AAIAAAmICdAAIAAAzIidAAIAABQIAOATQAggfAOg+IAwALQgGAXgKAXQAlAZAZAVIgbApQgWgbgggZQgOAYgOAPQAAAGAmAeQAoAfApARIgdAxQgogVgmglQgogngQgaIAACMgACyC7IAAibQgOAdgoAmQgoAngmAXIgfg1QAegNAoggQAngfARgZIhuAAIAAgwICVAAIAAgxIiAAAIAAgzICAAAIAAgwIA1AAIAAAwIB9AAIAAAzIh9AAIgBAxICTAAIAAAyIhvAAQAVAaAnAgQAnAeAcALIgcA4QgcgQgtgqQgrgsgTgeIAACbgAisCnQgRgNAAgbIAAiEIAwAAIAAArQAsgLAagbIAnAmQgyAmg7AMIAAAeQAAAMAhAAQAbAAAGgJQAGgJABgnIAzATQgEA1gRAQQgSASgyAAQgxABgRgNgApRgFIAAibICdAAIAACbgAohgtIA8AAIAAhKIg8AAgAixgXQgMgMAAgeIAAh3IAwAAIAAAoQAmgJAdgWIAlAnQgmAchCAOIAAAWQABAPAfAAQAVgBAIgFQAKgGABgjIAyARQgEAxgTANQgQAOg2ABQg1gBgMgMg");
	this.shape.setTransform(72.2,17,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.5,34);


(lib.car3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,47);


(lib.car2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,70);


(lib.car1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,72);


(lib.bk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAjKMAAAhGTMAu2AAAMAAABGTg");
	this.shape.setTransform(150,225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,450);


(lib.cfa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIBIQAkgXAWgkQAWglAFgaIgBgIIg0AAIAAgUIBGgBQABAoAVAoQATAoAlAcIgMATQgCAAgWgWQgVgXgMgVQgKgUgHgUQgUBDg8AogAkUBZIAAisIBGAAIAACCQAAANgEAEQgFAFgMAAIgSAAIgGgTIAVAAQAGAAAAgGIAAhtIgiAAIAACagAi5BHQAYgIAdgZQAcgYANgUIAPAHQgNAVgRASIAfAaIgMAQQgcgegEAAQgWAVgfAPgAg6BWIgFgVIAaABQAGAAAAgFIAAiWIASAAIAACZQAAANgFAFQgEAEgNAAgADOBSIAAgSIBPAAIAAgtIg/AAIAAgSIA/AAIAAgiIhHAAIAAgSIBLAAQgHgKgWgSIAQgKQAQALASASIgLAJIBLAAIAAASIhGAAIAAAiIA9AAIAAASIg9AAIAAAtIBNAAIAAASgAl8A9IAMgCIAAiOIBMAAIAABeIg6AAIAAAtQAJgBAbgIIgKgZIASgGQAOAfAHAbIgUAGIgCgIQgBgJgBABQggAJgkAIgAlegDIApAAIAAgZIgpAAgAlegtIApAAIAAgUIgpAAgAhFAuIAAh5IATAAIAAB5gAi5AcQAYgKARgNQARgLAAgCIgaACIgaABIgBgSIASAAQAKgLAJgSIgmAAIAAgRIAlAAIgIgRIASgCQAFAJAEAKIAvAAIAAARIgvgBQgHATgLALIAbAAQAHgHAGgMIAOAHQgbA0g4AYg");
	this.shape.setTransform(87.3,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3292CF","#2374A6"],[0,1],-25.4,-17.8,-25.4,9).s().p("AuCCsIC5lXIZMAAIgeFXg");
	this.shape_1.setTransform(85,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,180,34.5);


(lib.car3MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car3_1();
	this.instance.setTransform(-37.5,-6,1,1,0,0,0,66.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-29,138,47);


(lib.car2MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car2_1();
	this.instance.setTransform(-46,-70.5,1,1,0,0,0,-1,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-52,96,70);


(lib.car1MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car1_1();
	this.instance.setTransform(-173,-77,1,1,0,0,0,-13,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-42,174,72);


(lib.bgMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lightMC
	this.lightMC = new lib.bgLightMC();
	this.lightMC.setTransform(226,289);
	this.lightMC.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.lightMC).wait(3));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+SRMMAAAgiqIfQjIIFxAAIXlC9MAAAAmPg");
	mask.setTransform(183,429);

	// Layer 3
	this.instance = new lib.bg1_1();
	this.instance.setTransform(153,130,1.05,1.05,0,0,0,149.9,125);
	this.instance.alpha = 0.102;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:149.8,scaleX:1,scaleY:1,x:149.8,y:125,alpha:0},2).wait(1));

	// bg
	this.instance_1 = new lib.bg1_1();
	this.instance_1.setTransform(149.8,125,1,1,0,0,0,149.8,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,0,315,687.8);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:176});

	// timeline functions:
	this.frame_0 = function() {
		//this.gotoAndPlay(140);
		this.bgMC.lightMC.gotoAndPlay(1);
	}
	this.frame_175 = function() {
		this.stop();
		var self =this;
		var bg = this.bgMC;
		setTimeout(function(){
			/*bg.stop();
			bg.lightMC.stop();
			setTimeout = null;*/
			self.gotoAndPlay("loop"); 
		}, 5000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(175).call(this.frame_175).wait(10));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(237.3,58.5,1.362,1.363,0,0,0,43.5,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},184).wait(1));

	// cfa
	this.instance_1 = new lib.cfa();
	this.instance_1.setTransform(300.5,428.1,1,1,0,0,0,45,11.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(168).to({_off:false},0).to({x:180.5,y:427.5},7,cjs.Ease.get(1)).wait(1).to({x:300.5,y:428.1},7,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// copy6
	this.instance_2 = new lib.copy6();
	this.instance_2.setTransform(63.8,207,1,1,0,0,0,44.3,10.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({_off:false},0).to({y:187,alpha:1},14,cjs.Ease.get(1)).wait(3).to({regX:44.1,regY:10.6,scaleX:3,scaleY:3,x:70.4,y:206.7},7,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// copy5
	this.instance_3 = new lib.copy5();
	this.instance_3.setTransform(104.5,175.7,1,1,0,0,0,82,10.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({y:155.7,alpha:1},14,cjs.Ease.get(1)).wait(8).to({scaleX:3,scaleY:3,x:79.5,y:129.2},7,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// copy4
	this.instance_4 = new lib.copy4();
	this.instance_4.setTransform(118.5,227.9,1,1,0,0,0,88,30.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(86).to({_off:false},0).to({y:207.9,alpha:1},17,cjs.Ease.get(1)).wait(37).to({y:227.9,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(33));

	// copy3
	this.instance_5 = new lib.copy3();
	this.instance_5.setTransform(106.7,172.3,1,1,0,0,0,77.2,7.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(83).to({_off:false},0).to({y:152.3,alpha:1},17,cjs.Ease.get(1)).wait(42).to({y:173.3,alpha:0},11,cjs.Ease.get(-1)).to({_off:true},1).wait(31));

	// copy2
	this.instance_6 = new lib.copy2();
	this.instance_6.setTransform(162.4,188.1,1,1,0,0,0,75.4,10.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({x:202.4,alpha:1},17,cjs.Ease.get(1)).wait(45).to({x:88.4,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(105));

	// copy1
	this.instance_7 = new lib.copy1();
	this.instance_7.setTransform(139.1,151.2,1,1,0,0,0,76.1,10.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({x:109.1,alpha:1},17,cjs.Ease.get(1)).wait(46).to({x:199.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(107));

	// car2
	this.instance_8 = new lib.car2MC();
	this.instance_8.setTransform(231,298.5,0.2,0.2,0,0,0,-0.8,-18.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(73).to({_off:false},0).to({alpha:0.5},4,cjs.Ease.get(-1)).to({regX:-1,regY:-18.5,scaleX:1,scaleY:1,x:249,y:306.5,alpha:1},17,cjs.Ease.get(1)).wait(82).to({regX:-0.9,regY:-18.4,scaleX:2.08,scaleY:2.08,x:281.2,y:329.7,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// car1
	this.instance_9 = new lib.car1MC();
	this.instance_9.setTransform(215.6,308,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:194,y:320},18,cjs.Ease.get(1)).wait(148).to({regY:0.1,scaleX:1.54,scaleY:1.54,x:180.7,y:337.4,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// car3
	this.instance_10 = new lib.car3MC();
	this.instance_10.setTransform(179.5,302,0.2,0.2,0,0,0,-38.3,-12.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(77).to({_off:false},0).to({alpha:0.398},4,cjs.Ease.get(-1)).to({regX:-38.5,regY:-13,scaleX:1,scaleY:1,x:55.5,y:296,alpha:1},17,cjs.Ease.get(1)).wait(78).to({scaleX:1.95,scaleY:1.95,x:-29.3,y:299.9,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// bg1
	this.bgMC = new lib.bgMC();
	this.bgMC.setTransform(147.1,113.1,1.3,1.3,0,0,0,150,125);
	this.bgMC.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bgMC).to({regX:149.8,scaleX:1,scaleY:1,x:149.8,y:125,alpha:1},11,cjs.Ease.get(1)).wait(165).to({regX:150,scaleX:1.3,scaleY:1.3,x:147.1,y:113.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// bk copy
	this.instance_11 = new lib.bk();
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},184).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-51,505.7,895.6);


// stage content:



(lib._300x450 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.mainMC();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87.1,174,505.7,895.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;