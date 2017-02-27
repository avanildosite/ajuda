<?php

if($_POST) 
{
$nome=$_POST['nome'];  
$email=$_POST['email'];
$fone=$_POST['fone'];  
$mensagem=$_POST['mensagem'];  
$arq="bd/".str_replace(' ', '_', $nome).".form"; 
salvar($nome,$email,$fone,$mensagem,$arq);
echo " <script> alert ('dados gravados')</script>";
}
else{  header("Location: ../index.php");}

function salvar($nome,$email,$fone,$mensagem,$arq) // funcao para salvar arquivo
{
$sep="#"; //separadores para o campo 
$deli="%"; // delimitadores para o arquivo
$linha=$nome.$deli.$email.$deli.$fone.$deli.$mensagem.$deli.$sep; //linha contendo dados do registro vindo do formulario

$arquivo=fopen($arq,'a'); // abri o arquivo no disco
     // verificando se o arquivo foi aberto sem problemas
if (!$arquivo)
{
   fclose($arquivo);
   return(0);
};
// grava os dados em um arquivo
    fwrite ($arquivo,$linha);
    fclose($arquivo); //fecha o arquivo
 return(1);
 };



header("Location: ../index.php");
?>


 
