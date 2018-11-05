    function Spritesheet(ctx, imagem, linhas, colunas) {
	   this.ctx = ctx;
	   this.imagem = imagem;
	   this.numLinhas = linhas;
	   this.numColunas = colunas;
	   this.intervalo = 0;
	   this.linha = 0;
	   this.coluna = 0;
	}
		  Spritesheet.prototype = {
		  proximoQuadro: function() {
		  var agora = new Date().getTime();

		  // Se ainda não tem último tempo medido
		  if (! this.ultimoTempo) this.ultimoTempo = agora;

		  // Já é hora de mudar de coluna?
		  if (agora - this.ultimoTempo < this.intervalo) return;

		  if (this.coluna < this.numColunas - 1)
			 this.coluna++;
		  else
			 this.coluna = 0;

		  // Guardar hora da última mudança
		  this.ultimoTempo = agora;
	   },
	   desenhar: function(x, y) {
		  var largura = 608/ this.numColunas;
		  var altura = 232/ this.numLinhas;

		  ctx.drawImage(
			 this.imagem,
			 largura * this.coluna,
			 altura * this.linha,
			 largura,
			 altura,
			 x,
			 y,
			 largura,
			 altura
		  );
	   }
	}




	  var imgCorrendo = new Image();
      imgCorrendo.src = 'imagens/sprite2.png';
