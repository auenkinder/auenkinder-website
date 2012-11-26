<html>
<head>
<title>Vielen Dank für die Spende.</title>
</head>
<body>
<h1>Vielen Dank!</h1>
<p>Eine E-Mail mit Ihrem Spendenangebot wurde versendet. Wir setzen uns baldmöglichst mit Ihnen in Verbindung.</p>
<?php
mail("spenden@auenkinder.de","Spendenangebot: $_POST[spendenid]","Das folgende Spendenangebot wurde unterbreitet:\n\nVon: $_POST[name]\nE-Mail: $_POST[email]\nSpendenangebot: $_POST[spende]", "From: $_POST[name] <$_POST[email]>");
?>
</body>
</html>
