 <?php
function ler($nome) 
 // funcao para ler um arquivo inteiro
{   
   $lines = file($nome);
   $linha=0;
foreach($lines as $line)
     {
	    $t[$linha]=base64_decode($line);
       $linha++;     
     } 
 
  };
  ?>