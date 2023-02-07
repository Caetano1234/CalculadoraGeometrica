setScreen("tela3_telaInicial");
onEvent("botão_Triangulo", "click", function( ) {
setScreen("tela1_triangulo");
triangulo();
});
onEvent("botão_Quadrado", "click", function( ) {
setScreen("tela2_quadrado");
quadrado();
});
onEvent("voltar1", "click", function( ) {
  setScreen("tela3_telaInicial");
});
onEvent("voltar2", "click", function( ) {
  setScreen("tela3_telaInicial");
});
function triangulo() {
penColor("white");
dot(1000);
penUp();
turnTo(0);
moveTo(60, 300);
penWidth(5);
penColor("red");
turnRight(90);
penDown();
moveForward(200);
turnLeft(120);
moveForward(200);
turnLeft(120);
moveForward(200);
hide();
}
function quadrado(){
penColor("white");
dot(1000);
penUp();
turnTo(0);
moveTo(60, 300);
penWidth(5);
penColor("red");
turnRight(90);
penDown();
moveForward(200);
turnLeft(90);
moveForward(200);
turnLeft(90);
moveForward(200);
turnLeft(90);
moveForward(200);
hide();
}
function AreaTriangulo() {
return (0.5 * (getNumber("caixa_texto2_alturaTriangulo") * getNumber("caixa_texto3_baseTriangulo")));
}
function QuadradoArea(){
return (getNumber("caixa_texto1_comprimentoQuadrado") * getNumber("caixa_texto1_comprimentoQuadrado"));
}
function QuadradoPerimetro(){
return (4 * getNumber("caixa_texto1_comprimentoQuadrado"));
}
onEvent("Calcular_Triangulo", "click", function( ) {
  if (getText("caixa_texto2_alturaTriangulo") == "" || getText("caixa_texto3_baseTriangulo") == "") {
    setText("caixa_texto4_AreaT", "Alguma informação está faltando! :/");
  } else {
    setText("caixa_texto4_AreaT", "A área do seu triângulo é " + AreaTriangulo());
  }
});
onEvent("Calcular_Quadrado", "click", function( ) {
  if (getText("caixa_texto1_comprimentoQuadrado") == "") {
    setText("caixa_texto4_areaQuadrado", "O comprimento não está preenchido!");
    setText("caixa_texto5_perimetroQuadrado", "Por favor, preencha!");
  } else {
    setText("caixa_texto4_areaQuadrado", "A área do seu quadrado é " + QuadradoArea());
    setText("caixa_texto5_perimetroQuadrado", "O perímetro do seu quadrado é " + QuadradoPerimetro());
  }
});


