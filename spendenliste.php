<html>
<head>
<title>Spendenliste</title>

<link href="./bootstrap/css/bootstrap.css"
          rel="stylesheet"
          type="text/css">
    <style type="text/css">
body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
    </style>
    <link href="./bootstrap/css/bootstrap-responsive.css"
          rel="stylesheet"
          type="text/css">
    <script type="text/JavaScript"
          src="./javascript/main_jme.js"
          charset="ISO-8859-1">
</script>


</head>
<body>

<div class="container-fluid">
        <div class="row-fluid">
            <div class="span2">
			
			&nbsp;
			</div>
			
			<div class="span10">
			
			<div class="row-fluid">
			<div class="span10 well">
			<h2>Spenden</h2>
			<p>Spenden sind immer herzlich willkommen und helfen uns sehr. Im Folgenden haben wir eine Liste mit möglichen Spenden erstellt, die Sie natürlich auch beliebig ergänzen können.</p>
			<h3>Spende</h3>
			<ul>
<?php
if(($tabelle=fopen("spendenliste.txt", "r")) != FALSE) {

while(!feof($tabelle)){
print "<tr valign='top'>";
$ausgabe=fgetcsv($tabelle, 2048, ";");
print "<li>".$ausgabe[0]."</li>";

}
}
fclose($tabelle);
?> 
			</ul>
</div>
</div>


			<div class="row-fluid">
			<div class="span10 well">
				<h3>Ja, ich will helfen ...</h3>

				<form method='post' action='spendeversenden.php'>
					<input type='hidden'
                            name='spendenid'
                            id='spendenid'
                            value='sonstiges'> 
					<div class="row-fluid">
					<div class="span5">
						Ihr Name:<br /><input type='text' name='name'>
					</div>
					<div class="span5">
						Ihre E-Mail-Adresse:<br /><input type='text' name='email'>
					</div>
					</div>	
					<div class="row-fluid">
					<div class="span5">
						Was spenden Sie genau:<br /><textarea name='spende'></textarea><br />

						<input type='submit' name='Button' value='Jetzt spenden.'>
					</div>
					</div>
				
				</form>

			</div>
			</div>

			
</div>
</div>
</div>
</body>
</html>