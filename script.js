angular.module('meuApp', [])
.controller('meuCtrl', function($scope) {
    $scope.titulo = "Sítio Pinheiros";
    $scope.galeria = "Sítio Pinheiros";
    $scope.galeriaTitulo = "Galeria de Imagens";
    $scope.titulo1 = "Sítio";
    $scope.titulo2 = "Galeria";
   

    $scope.imagens = [
     {img: 'imagens/imagem1.jpg', alt: 'Imagem 01'},
     {img: 'imagens/imagem2.jpg', alt: 'Imagem 02'},
     {img: 'imagens/imagem3.jpg', alt: 'Imagem 03'},
     {img: 'imagens/imagem4.jpg', alt: 'Imagem 04'},
     {img: 'imagens/imagem5.jpg', alt: 'Imagem 05'},
     {img: 'imagens/imagem6.jpg', alt: 'Imagem 06'},
     {img: 'imagens/imagem7.jpg', alt: 'Imagem 07'},
     {img: 'imagens/imagem8.jpg', alt: 'Imagem 08'},
     {img: 'imagens/imagem9.jpg', alt: 'Imagem 09'},
     {img: 'imagens/imagem10.jpg', alt: 'Imagem 10'},
     {img: 'imagens/imagem11.jpg', alt: 'Imagem 11'},
     {img: 'imagens/imagem12.jpg', alt: 'Imagem 12'},
     {img: 'imagens/imagem13.jpg', alt: 'Imagem 13'},
     {img: 'imagens/imagem14.jpg', alt: 'Imagem 14'},
     {img: 'imagens/imagem15.jpg', alt: 'Imagem 15'},
     {img: 'imagens/imagem16.jpg', alt: 'Imagem 16'},
     {img: 'imagens/imagem17.jpg', alt: 'Imagem 17'},
     {img: 'imagens/imagem18.jpg', alt: 'Imagem 18'},
     {img: 'imagens/imagem19.jpg', alt: 'Imagem 19'},
     {img: 'imagens/imagem20.jpg', alt: 'Imagem 20'}
     
          
     ];
});