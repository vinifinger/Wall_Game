function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas){
		ctx.drawImage(fundo, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

// fundo
var bg = new Sprite(0, 0, 600, 600),

// boneco

spriteChao = new Sprite(0, 600, 650, 54),
spriteBotao = new Sprite(0, 665, 124, 120),
spritePerdeu = new Sprite(0, 821, 309, 239),
spriteRecord = new Sprite(0, 1064, 372, 360),
spriteNovo = new Sprite(636, 0, 926, 68),
spriteGrama = new Sprite(600, 1106, 1200, 1200),
spriteGrama2 = new Sprite(600, 1003, 1200, 1097),
spriteBloco1 = new Sprite(900, 821, 50, 120),
spriteBloco2 = new Sprite(958, 821, 50, 120),
spriteBloco3 = new Sprite(1017, 821, 50, 120),
spriteBloco4 = new Sprite(1075, 821, 50, 120),
spriteBloco5 = new Sprite(1132, 821, 50, 120)
;
