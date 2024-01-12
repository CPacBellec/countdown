<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
  <title>Countdown Timer</title>
</head>
<body class="bg-gray-200 p-8">

    <div id="countdown" class="text-3xl font-bold mb-4"></div>

    <button id="modifyCountdownBtn" class="bg-blue-500 text-white px-4 py-2 mr-2">Modifier le compte à rebours</button>
    <button id="restartCountdownBtn" class="bg-green-500 text-white px-4 py-2" disabled>Relancer le compte à rebours</button>

    <div class="my-5 flex">
        <a href="countdown_page.php">Lien vers le sondage</a>
    </div>


  <script src="app.js"></script>
</body>
</html>
