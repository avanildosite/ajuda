<?php
/*
 global $cadastro,$nome,$ca;  // tronando a dados externos assesivel dentro da funcao 
   $sep="#"; //separadores para o arquivo
   $deli="%"; // delimitadores para o arquivo
sta funcao salva uma linha devidamente formatada para

*/

function salvar($nome,$linha) // funcao para salvar arquivo
{
   
   $a=fopen($nome,'a');// abri o arquivo no disco
// verificando se o arquivo foi aberto sem problemas
    if (!$a)
    {  
      echo "<script> alert('O arquivo nao pode ser aberto ')   </script>";
      fclose($a);
      return;
     };
      // grava os dados em um arquivo
 
    fwrite ($a,$deli.$linha.$deli.$sep."\n");
   
     close($a);
return;
};
?>