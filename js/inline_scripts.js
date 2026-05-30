
    var nilaiRandom = Math.floor(Math.random() * 11);
    if (nilaiRandom >= 0) {
        //window.location.replace("https://www.feeldream.id/2025/06/script-html-lebaran.html");
    } else {
        window.location.replace("https://htmlku.com/mausate/play");
    }
  

/* ===== INLINE JAVASCRIPT ===== */


    // Permulaan
    const stiker1 = document.getElementById('stiker1');
	const stiker1a = document.getElementById('stiker1a');
	const stiker1b = document.getElementById('stiker1b');

    document.querySelector("#hal1").style="transform:scale(0)";
    document.querySelector(".circ").style="display:none";
    setTimeout(()=>{document.querySelector("#hal1").style="transform:scale(1)";document.querySelector(".circ").style="";stiker1.style = "transform:scale(1)";}, 1000);

    // Elemen Background
    const backgroundOverlay = document.querySelector('.background-overlay');
    const bgImageUrl = backgroundOverlay.getAttribute('data-src');
    backgroundOverlay.style.background = `url('${bgImageUrl}') no-repeat center center fixed`;
    backgroundOverlay.style.backgroundSize = 'cover';

    // Data Kartu
    const kartu = [
      { id: 3, icon: '💖', pesan: 'harta yang…' },
      { id: 5, icon: '💐', pesan: 'di hatiku…' },
      { id: 1, icon: '🩷', pesan: 'Setiap momen…' },
      { id: 6, icon: '🎉', pesan: 'selamanya.' },
      { id: 2, icon: '🌹', pesan: 'bersamamu adalah…' },
      { id: 4, icon: '❤️', pesan: 'tak ternilai…' },
      { id: 1, icon: '🩷', pesan: 'Setiap momen…' },
      { id: 3, icon: '💖', pesan: 'harta yang…' },
      { id: 5, icon: '💐', pesan: 'di hatiku…' },
      { id: 2, icon: '🌹', pesan: 'bersamamu adalah…' },
      { id: 4, icon: '❤️', pesan: 'tak ternilai…' },
      { id: 6, icon: '🎉', pesan: 'selamanya.' }
    ];

    // Animasi Kelopak Bunga
	let animationFrameId; // Variabel global untuk menyimpan ID requestAnimationFrame
	function mulaiKelopak(canvasId) {
	  const canvas = document.getElementById(canvasId);
	  if (!canvas) return; // Cek apakah canvas ada
	  const ctx = canvas.getContext('2d');
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	
	  const kelopak = Array.from({ length: 20 }, () => ({
	    x: Math.random() * canvas.width,
	    y: Math.random() * canvas.height,
	    radius: Math.random() * 5 + 2,
	    speed: Math.random() * 2 + 1
	  }));
	
	  function gambarKelopak() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    kelopak.forEach(petal => {
	      ctx.beginPath();
	      ctx.arc(petal.x, petal.y, petal.radius, 0, Math.PI * 2);
	      ctx.fillStyle = '#f87171';
	      ctx.fill();
	      petal.y += petal.speed;
	      if (petal.y > canvas.height) petal.y = -petal.radius;
	      petal.x += Math.sin(petal.y / 50) * 2;
	    });
	    animationFrameId = requestAnimationFrame(gambarKelopak); // Simpan ID animasi
	  }
	  gambarKelopak();
	}

    // Animasi Hati Jatuh
    let intervalHati;
    function hatiJatuh() {
      const hati = document.createElement('div');
      hati.className = 'hati';
      hati.innerHTML = `<svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>`;
      hati.style.left = Math.random() * 100 + 'vw';
      hati.addEventListener('animationend', () => hati.remove());
      document.body.appendChild(hati);
    }

    // Input Range Handler
    const tahunLahirInput = document.getElementById('tahunLahir');
    const tahunLahirOutput = document.getElementById('tahunLahirOutput');
    tahunLahirInput.addEventListener('input', () => {
      tahunLahirOutput.textContent = tahunLahirInput.value;
    });

    // Buka Envelope
    function bukaEnvelope() {
      const envelope = document.getElementById('envelope');
      envelope.classList.remove('close');
      envelope.classList.add('open');
      document.querySelector(".reset").style="transform:scale(0);opacity:0;transition:all .7s ease";
      setTimeout(() => {
        document.querySelector("#envelope").style="transform:scale(0);opacity:0;transition:all .7s ease";
        setTimeout(() => {
          pindahHal(3);
          envelope.classList.remove('open');
          envelope.classList.add('close');
        }, 700);
      }, 1200);
    }

    // Halaman 3: Memory Game
    let kartuDibuka = [];
    let pasanganCocok = 0;
    let gameJalan = false;

    function acakKartu(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // Halaman 3: Memory Game
	function mulaiHal4() {
	  kartuDibuka = [];
	  pasanganCocok = 0;
	  gameJalan = true;
	  document.getElementById('kotakPesan').innerHTML = '';
	  document.getElementById('statusGame').innerText = '';
	  document.getElementById('lanjut').classList.add('sembunyi');
	  document.getElementById('ulang').classList.add('sembunyi');
	
	  const papanGame = document.getElementById('papanGame');
	  papanGame.innerHTML = '';
	  kartu.forEach((card, index) => {
	    const elemenKartu = document.createElement('div');
	    elemenKartu.className = 'kartu';
	    elemenKartu.dataset.id = card.id;
	    elemenKartu.innerHTML = `
	      <div class="dalemKartu">
	        <div class="depanKartu"></div>
	        <div class="belakangKartu">${card.icon}</div>
	      </div>
	    `;
	    elemenKartu.addEventListener('click', () => balikKartu(elemenKartu, card, index));
	    papanGame.appendChild(elemenKartu);
	  });
	
	  mulaiKelopak('game-canvas');
	  /*setTimeout(() => {
	    if (pasanganCocok < 6 && gameJalan) selesaiGame(false);
	  }, 60000);*/
	}

    function balikKartu(elemenKartu, card, index) {
      if (!gameJalan || kartuDibuka.length >= 2 || elemenKartu.classList.contains('balik')) return;
      elemenKartu.classList.add('balik');
      kartuDibuka.push({ elemen: elemenKartu, card, index });

      if (kartuDibuka.length === 2) {
        const [kartu1, kartu2] = kartuDibuka;
        if (kartu1.card.id === kartu2.card.id) {
          pasanganCocok++;
          kartuDibuka = [];
          if (pasanganCocok === 6) selesaiGame(true);
        } else {
          setTimeout(() => {
            kartu1.elemen.classList.remove('balik');
            kartu2.elemen.classList.remove('balik');
            kartuDibuka = [];
          }, 1000);
        }
      }
    }

    function selesaiGame(sukses) {
	  gameJalan = false;
	  const status = document.getElementById('statusGame');
	  if (sukses) {
	    // Hentikan animasi kelopak
	    if (animationFrameId) {
	      cancelAnimationFrame(animationFrameId);
	      animationFrameId = null; // Reset ID
	    }
	    // Hapus canvas
	    const canvas = document.getElementById('game-canvas');
	    if (canvas) {
	      canvas.remove();
	    }
	    setTimeout(() => { pindahHal(5); }, 800);
	  } else {
	    status.innerText = 'Momen kita terlalu indah untuk dilewatkan, coba lagi ya! 🌌';
	    document.getElementById('ulang').classList.remove('sembunyi');
	  }
	}

    // Animasi Kembang Api
	function mulaiKembangApi(canvasId) {
	  const canvas = document.getElementById(canvasId);
	  const ctx = canvas.getContext('2d');
	  
	  const fireworks = [];
	  const colors = ['#ff6f91', '#ffd1dc', '#ffffff', '#f87171']; // Warna tema romantis
	
	  function createFirework() {
	    const x = Math.random() * canvas.width;
	    const y = Math.random() * canvas.height * 0.5;
	    const color = colors[Math.floor(Math.random() * colors.length)];
	    const particles = [];
	
	    for (let i = 0; i < 22; i++) { // Tetap 30 partikel untuk performa
	      const angle = Math.random() * Math.PI * 2;
	      const speed = Math.random() * 5 + 2; // Kecepatan maksimum naik ke 4 dari 3
	      particles.push({
	        x: x,
	        y: y,
	        vx: Math.cos(angle) * speed,
	        vy: Math.sin(angle) * speed,
	        radius: Math.random() * 3 + 1,
	        color: color,
	        life: 100,
	        alpha: 1
	      });
	    }
	    fireworks.push({ particles });
	  }
	
	  let lastFrameTime = 0;
	  const frameInterval = 1000 / 60; // Tetap target 30 FPS
	
	  function drawFireworks(timestamp) {
	    if (timestamp - lastFrameTime < frameInterval) {
	      requestAnimationFrame(drawFireworks);
	      return;
	    }
	    lastFrameTime = timestamp;
	
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    fireworks.forEach((firework, index) => {
	      firework.particles.forEach((particle) => {
	        ctx.beginPath();
	        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
	        ctx.fillStyle = `rgba(${parseInt(particle.color.slice(1, 3), 16)}, ${parseInt(particle.color.slice(3, 5), 16)}, ${parseInt(particle.color.slice(5, 7), 16)}, ${particle.alpha})`;
	        ctx.fill();
	
	        particle.x += particle.vx;
	        particle.y += particle.vy;
	        particle.vy += 0.05; // Gravitasi naik dari 0.03 ke 0.04
	        particle.alpha -= 0.01; // Pemudaran naik dari 0.008 ke 0.009
	        particle.life--;
	
	        if (particle.life <= 0) {
	          particle.alpha = 0;
	        }
	      });
	
	      firework.particles = firework.particles.filter(p => p.life > 0);
	      if (firework.particles.length === 0) {
	        fireworks.splice(index, 1);
	      }
	    });
	
	    if (Math.random() < 0.065) createFirework(); // Frekuensi naik dari 0.05 ke 0.07
	    requestAnimationFrame(drawFireworks);
	  }
	
	  //createFirework();
	  requestAnimationFrame(drawFireworks);
	}
	
	// Halaman 4: Pesan Akhir
	function mulaiHal5() {
	  const stiker3 = document.getElementById('stiker3');
	  const stiker3a = document.getElementById('stiker3a');
	  const stiker3b = document.getElementById('stiker3b');
	  stiker3.style = "transform:scale(1)";
	  const usiaKamu = new Date().getFullYear() - parseInt(tahunLahirInput.value);
	
	  const txtDoa = `Selamat Ulang Tahun ke-<b>${usiaKamu}</b>! 🎉🎂`;
	  const txtPesanAkhir = "<b>Happy Birthday, yaa! 🥳</b> Ciyee.. Ada yang bertambah usianya nih 😆🤏<br><br>Semoga di usia baru ini, kamu selalu dikelilingi kebahagiaan, kesehatan, dan semoga segala doa serta cita-cita kamu bisa terwujud 🫶";
	  const txtLucu = "Dan semoga hari ini menjadi awal dari tahun yang penuh keberkahan dan kebahagiaan untukmu yaa 💐<br><br><b><i>Wish you all the best!</i> 🎉🥳</b>";
	  const speedText = 24;
	
	  const canvas = document.getElementById('fireworks-canvas');
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	
	  new TypeIt("#teksCinta", {
	    strings: txtDoa,
	    speed: speedText,
	    startDelay: 100,
	    afterComplete: function () {
	      document.querySelector("#teksCinta .ti-cursor").style.display = "none";
	      new TypeIt("#pesanAkhir", {
	        strings: txtPesanAkhir,
	        speed: speedText,
	        waitUntilVisible: true,
	        afterComplete: function () {
	          document.querySelector("#pesanAkhir .ti-cursor").style.display = "none";
	          new TypeIt("#teksLucu", {
	            strings: txtLucu,
	            speed: speedText,
	            waitUntilVisible: true,
	            afterComplete: function () {
	              document.querySelector("#teksLucu .ti-cursor").style.display = "none";
	              intervalHati = setInterval(hatiJatuh, 200);
	              document.querySelector(".tombol").style="transform:scale(1);opacity:1;";
	              setTimeout(()=>{
	                  stiker3.style = "transform:scale(0)";
		              setTimeout(() => {
		                stiker3a.src = stiker3b.src;
		                stiker3.style = "transform:scale(1)";
                        clearInterval(scrollInterval);
		              }, 300);
                  }, 50);
	              setTimeout(()=>{mulaiKembangApi('fireworks-canvas')}, 50);
	            }
	          }).go();
	        }
	      }).go();
	    }
	  }).go();
	}

    // Navigasi Halaman
    function pindahHal(hal) {
	  for (let i = 1; i <= 5; i++) {
	    if (hal < 5 && i !== 1) document.getElementById(`hal${i}`).classList.add('sembunyi');	  
      }
	  if (hal < 5) document.getElementById(`hal${hal}`).classList.remove('sembunyi');
	
	  setTimeout(()=>{
	    if (hal === 2){
          document.getElementById(`hal${hal - 1}`).style = "transform:scale(0)";
	      setTimeout(()=>{
	        document.getElementById(`hal${hal - 1}`).classList.add('sembunyi');
	        document.getElementById(`hal${hal}`).classList.remove('sembunyi');
	        setTimeout(()=>{document.getElementById(`hal${hal}`).style="transform:scale(1);transition:all .7s ease";}, 100);
	      }, 700);
        } else if (hal === 3) {
	      document.getElementById(`hal${hal}`).style="transform:scale(1);transition:all .7s ease";
	      document.querySelector("#hal3 .tombol").style="transform:scale(1);opacity:1;transition:all .7s ease";
	      const stiker2 = document.getElementById('stiker2');
	      const stiker2a = document.getElementById('stiker2a');
	      const stiker2b = document.getElementById('stiker2b');
	      stiker2.style="transform:scale(1)";
	    } else if (hal === 4) {
	      mulaiHal4();
	      document.getElementById(`hal${hal}`).style="transform:scale(1);transition:all .7s ease";
	    } else if (hal === 5) {
	      document.getElementById(`hal${hal - 1}`).style = "transform:scale(0);transition:all .7s ease";
	      setTimeout(()=>{
	        document.getElementById(`hal${hal - 1}`).classList.add('sembunyi');
	        document.getElementById(`hal${hal}`).classList.remove('sembunyi');
	        setTimeout(()=>{document.getElementById(`hal${hal}`).style="transform:scale(1);transition:all .7s ease";}, 100);
	        setTimeout(()=>{mulaiHal5();}, 150);
	      }, 700);
	    } else {
	      document.getElementById(`hal${hal - 1}`).style = "transform:scale(0);transition:all .7s ease";
	      setTimeout(()=>{
	        document.getElementById(`hal${hal - 1}`).classList.add('sembunyi');
	        document.getElementById(`hal${hal}`).classList.remove('sembunyi');
	        setTimeout(()=>{document.getElementById(`hal${hal}`).style="transform:scale(1);transition:all .7s ease";}, 100);
	      }, 700);
	    }
	  }, 50);
	}

    const container = document.querySelector(".textOverlay");
    function autoScroll() {container.scrollTop += 10;} 
    const scrollInterval = setInterval(autoScroll, 50); 
	
    // Share ke WhatsApp
    function balasWa() {
      const url = window.location.href;
      const text = "Taqabbalallahu minna wa minkum, minal 'aidin wal faizin!";
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
  