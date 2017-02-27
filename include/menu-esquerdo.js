
var lin;
lin=' <html> <!-- alterado 29-05-2015 --> <head>';
lin+='<!-- Inclua esta tag na seção head ou logo antes da tag de fechamento da seção body -->';
lin+='<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>'; 
lin+='<script src="http://connect.facebook.net/pt_BR/all.js#xfbml=1"></script>'; 
lin+='</head>'; 
lin+='<body>';
lin+='<script>(';
lin+='function(d, s, id)'; 
lin+='{ var js, fjs = d.getElementsByTagName(s)[0]'; 
lin+='if (d.getElementById(id)) return; js = d.createElement(s)';
lin+='js.id = id; js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1"'; 
lin+='fjs.parentNode.insertBefore(js, fjs);}(document, "script","facebook-jssdk"))'; 
lin+='</script> <div id="titolo" > Login  </div>  <div id="quadro">';
lin+='<form action="include/login.html" method="post"> <p> 	Usuario:&nbsp; <input name="usuario" type="text" size="18"/>';
lin+='</p> <p>	Senha:&nbsp;<input name="senha" type="password" size="18" /></p>';
lin+=' <p> <input type="submit" value="Login" /></p> </form> </div> <hr>'; 
lin+='<div style="text-align: center">';
lin+='Você pode pagar mão de obra em até 12X, usando <strong>Paypal</strong> pagamentos online.</div>';
lin+=' <br> <hr> <marquee behavior="alternate"  scrolldelay="400">';
lin+='  <a href="simulacao.html" >Faça uma simulação aqui</a> </marquee> <br> <br> <hr>';  
lin+='<a href="https://www.paypal.com/br/webapps/mpp/paypal-safety-and-security" target="blank">'; 
lin+='Informações sobre Paypal </a> <hr> Curta a gente <hr> <g:plusone size="medium"href=" http://www.avanildo.com.br">';
lin+='</g:plusone> <hr> <div class="fb-like" data-href="https://www.facebook.com/pages/Avanildo-construções/740769606031967"'; 
lin+='data-width="190" data-layout="box_count" data-action="like" data-show-faces="true" data-share="true"></div> </html>';
document.write(lin);
//document.write(' <html> <!-- alterado 29-05-2015 --> <head> <script >  <!-- Inclua esta tag na seção head ou logo antes da tag de fechamento da seção body --> <script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script> <!-- Inclua esta tag onde desejar que o botão +1 seja exibido --> <script src="http://connect.facebook.net/pt_BR/all.js#xfbml=1"></script> </head> <body> <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, "script","facebook-jssdk")); </script> <div id="titolo" > Login  </div>  <div id="quadro"> <form action="include/login.html" method="post"> <p> 	Usuario:&nbsp; <input name="usuario" type="text" size="18"/></p> <p>	Senha:&nbsp;<input name="senha" type="password" size="18" /></p> <p> <input type="submit" value="Login" /></p> </form> </div> <hr> <div style="text-align: center">Você pode pagar mão de obra em até 12X, usando <strong>Paypal</strong> pagamentos online.</div> <br> <hr> <marquee behavior="alternate"  scrolldelay="400">  <a href="simulacao.html" >Faça uma simulação aqui</a> </marquee> <br> <br> <hr>  <a href="https://www.paypal.com/br/webapps/mpp/paypal-safety-and-security" target="blank"> Informações sobre Paypal </a> <hr> Curta a gente <hr> <g:plusone size="medium"href=" http://www.avanildo.com.br"></g:plusone> <hr> <div class="fb-like" data-href="https://www.facebook.com/pages/Avanildo-construções/740769606031967" data-width="190" data-layout="box_count" data-action="like" data-show-faces="true" data-share="true"></div> </html>');

