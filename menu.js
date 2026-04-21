
window.onload = function() {

  // Canvas del juego 1
  const ctx1 = document.getElementById("canvas1").getContext("2d");
  ctx1.fillStyle = "#0a0a0f";
  ctx1.fillRect(0, 0, 200, 50);
  ctx1.fillStyle = "#00ff88";
  ctx1.font = "bold 14px monospace";
  ctx1.textAlign = "center";
  ctx1.fillText("JUEGO LIMONES", 100, 31);

  // Canvas del juego 2
  const ctx2 = document.getElementById("canvas2").getContext("2d");
  ctx2.fillStyle = "#0a0a0f";
  ctx2.fillRect(0, 0, 200, 50);
  ctx2.fillStyle = "#00ff88";
  ctx2.font = "bold 14px monospace";
  ctx2.textAlign = "center";
  ctx2.fillText("JUEGO CAZANDO", 100, 31);

   const ctx3 = document.getElementById("canvas3").getContext("2d");
  ctx3.fillStyle = "#0a0a0f";
  ctx3.fillRect(0, 0, 200, 50);
  ctx3.fillStyle = "#00ff88";
  ctx3.font = "bold 14px monospace";
  ctx3.textAlign = "center";
  ctx3.fillText("DIEGOCREDIT", 100, 31);

};