(function() {
	var spr=PP.spr,rm=PP.rm,obj=PP.obj,snd=PP.snd,al=PP.al,global=PP.global,Alarm=PP.Alarm,collision=PP.collision,draw=PP.draw,init=PP.init,key=PP.key,load=PP.load,loop=PP.loop,mouse=PP.mouse,physics=PP.physics,Sound=PP.Sound,SoundEffect=PP.SoundEffect,Sprite=PP.Sprite,view=PP.view,walkDown=PP.walkDown;

	init("testgame", 640, 480);
	loop.rate = 30;

	load(function() {
		obj.score = {
			initialize: function(t) {

			},

			tick: function(t) {
				if (mouse.left.down) {
					global.score += 1;
					if (global.score == 50) {
						loop.room = rm.gameOver;
					}
				}
			},
			
			draw: function(t) {
				draw.textHalign = "left";
				draw.textValign = "bottom";
				draw.color = "black";
				draw.font = "normal normal normal 20px Georgia";
				draw.text(0, 480, "Score: " + global.score);
			}
		};

		obj.gameOver = {
			tick: function(t) {
				if (key.enter.up) {
					loop.room = rm.play;
				}
			},

			draw: function(t) {
				draw.textHalign = "center";
				draw.textvAlign = "middle";
				draw.color = "black";
				draw.font = "normal normal normal 50px Georgia";
				draw.text(320, 240, "Press enter to start a new game");
			}
		};

		rm.play = function() {
			loop.register(obj.score, 0, 0);

			global.score = 0;
		};

		rm.gameOver = function() {
			loop.register(obj.gameOver);
		};

		loop.active = true;
		loop.room = rm.gameOver;
	});
}());
