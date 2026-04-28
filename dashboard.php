<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<style> body { font-family: 'DM Sans', sans-serif; } </style>
</head>
<body class="min-h-screen flex items-center justify-center bg-[#e8e4da]">

<div class="bg-white rounded-2xl shadow-xl px-10 py-8 text-center max-w-sm w-full">
  <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#f0a500] to-[#d47e00] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-300/40">
    <span class="text-white text-2xl font-bold">
      <?= strtoupper(substr($_SESSION['full_name'], 0, 1)) ?>
    </span>
  </div>
  <h2 class="text-xl font-semibold text-[#1a1000] mb-1">
    Welcome, <?= htmlspecialchars($_SESSION['full_name']) ?>!
  </h2>
  <p class="text-xs text-gray-400 mb-6">You are logged in as <span class="font-medium text-[#d4a020]">@<?= htmlspecialchars($_SESSION['username']) ?></span></p>

  <a href="logout.php"
    class="inline-block px-6 py-2.5 rounded-lg bg-gradient-to-br from-[#f0a500] to-[#d47e00] text-white text-sm font-semibold shadow-md shadow-orange-300/30 hover:from-[#ffb520] hover:to-[#e08a00] transition-all">
    Logout
  </a>
</div>

</body>
</html>
