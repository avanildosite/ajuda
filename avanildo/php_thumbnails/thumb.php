<?php
// recebendo a url da imagem
$filename = $_GET['img'];

// Cabe�alho que ira definir a saida da pagina
header('Content-type: image/jpeg');

// pegando as dimensoes reais da imagem, largura e altura
list($width, $height) = getimagesize($filename);

if($width > $height)
{
	//setando a largura da miniatura
	$new_width = 80;
	//setando a altura da miniatura
	$new_height = 60;
	//gerando a a miniatura da imagem
	$image_p = imagecreatetruecolor($new_width, $new_height);
	$image = imagecreatefromjpeg($filename);
	imagecopyresampled($image_p, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
} 
else 
{
	//setando a largura da miniatura
	$new_width = 60;
	//setando a altura da miniatura
	$new_height = 80;
	//gerando a a miniatura da imagem
	$image_p = imagecreatetruecolor($new_width, $new_height);
	$image = imagecreatefromjpeg($filename);
	imagecopyresampled($image_p, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
}

//o 3� argumento � a qualidade da imagem de 0 a 100
imagejpeg($image_p, null, 80);
imagedestroy($image_p);
?>
