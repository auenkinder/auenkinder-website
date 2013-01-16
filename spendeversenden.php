<html>
<head>
<title>Vielen Dank für die Spende.</title>

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
			<h2>Vielen Dank!</h2>
			<p>Eine E-Mail mit Ihrem Spendenangebot wurde versendet.</p>
			<p>Wir setzen uns baldmöglichst mit Ihnen in Verbindung.</p>
			<?php
			mail("spenden@auenkinder.de","Spendenangebot: $_POST[spendenid]","Das folgende Spendenangebot wurde unterbreitet:\n\nVon: $_POST[name]\nE-Mail: $_POST[email]\nSpendenangebot: $_POST[spende]", "From: $_POST[name] <$_POST[email]>");
			?>
			<p><a class="btn" href="index.html">Zurück zu den Auenkindern »</a></p>
</div>
</div>
</div>
</div>
</div>


</body>
</html>
