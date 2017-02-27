<?php

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
if(($usuario != "") && ($senha != "")) {
if(file_exists("bd/" . $usuario . "_" . $senha . ".txt")) {
   $fp = fopen("bd/" . $usuario . "_" . $senha . ".txt", "r");
$nome = fgets($fp);

   $dataExpiracao = time()+60*60*24*30;   

// gravacao dos dados em m cookier    
     setcookie("avanildo[senha]",$senha, $dataExpiracao);
     setcookie("avanildo[usuario]",$usuario, $dataExpiracao);  
     setcookie("avanildo[nome]",$nome, $dataExpiracao);  
     
  


echo "<script>window.history.back();</script>  ";
}
else {
echo "Erro, usuario ou senha incorretos. <script>window.history.back();</script> ";
}
}
else {
echo "Erro, todos os campos devem ser digitados  <script>window.history.back();</script> ";
}
?>