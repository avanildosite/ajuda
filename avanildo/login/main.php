<?php
if(IsSet($_COOKIE["logado"])){}
else{
echo '<meta http-equiv="refresh" content="0;url=login.html">';
exit; 

}
?>
<html>
<head>
<title>Sistema de usu�rios</title>
</head>
<body>
<font face="Verdana" size="2">
<br><br> <a href="logout.php">Sair/Logout</a>
<br />
<br />
<br />
<br /> 
<h1 align="center">Esta � uma p�gina restrita!</h1>
</font>
</body>
</html>