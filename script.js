// Database isi cerita
    const stories = {
      "Stasiun": `
      <p>Tanpa aba-aba, laju kereta melambat, membawaku ke sebuah peron tak bernama yang tak ada dalam peta manapun. Seketika, waktu membeku. Perlahan, pintu kereta terbuka, mempersilakanku masuk ke dalam keheningan yang begitu pekat, hingga aku bisa mendengar detak jantungku sendiri.</p>
        <p>Di tengah kehampaan itu, mataku menangkap satu sosok: seorang perempuan yang duduk sendirian di ruang tunggu. Didorong oleh rasa penasaran, aku menghampirinya. Kami berbincang, dan suaranya menjadi satu-satunya melodi di stasiun yang bisu itu.</p>
        <p>Aku mengajaknya menjelajahi lorong waktu yang beku ini. Dalam sekejap yang terasa abadi, kami berbagi tawa yang tak pernah pudar dan duka yang terasa ringan saat dibagi. Kami berlari di atas peron yang tak berujung.</p>
        <p>Tiba-tiba, dunia kembali berputar. Suara kereta yang mulai berjalan merenggut kami dari dunia mimpi. Aku panik, menarik tangannya untuk mengejar mesin besi itu. Namun tepat di depan pintu, ia melepas genggamanku, bukan dengan ragu, tapi dengan kepastian yang tenang. Ia tersenyum, seraya berbisik, "Aku sudah lama menunggumu." Lalu dengan lembut, ia mendorongku masuk, dan pintu kereta pun tertutup, meninggalkannya sebagai siluet di stasiun yang kembali sunyi.
        <p>Miliaran kali setelahnya, aku menaiki kereta yang sama, memburu sebuah keajaiban. Berharap takdir mau membawaku kembali ke stasiun rahasia itu. Namun miliaran kali pula aku gagal.</p>
        <p>Hingga suatu hari, aku pasrah. Aku duduk seorang diri di sebuah ruang tunggu, menatap jam dinding yang jarumnya enggan bergerak. Tiba-tiba, dua tangan halus menyentuh pundakku. Sebuah suara, gema dari masa lalu yang kurindu, bertanya, "Halo kak, bagaimana kabar kakak sekarang?"</p>
        <p>Aku terpaku, tak sanggup menjawab. Ia tersenyum, lalu berlari menuju keretanya sendiri. Sebelum pintu tertutup, lambaian tangannya menjadi salam perpisahan yang sesungguhnya. Aku membalasnya dengan senyuman. Hatiku lapang, bahagia bisa mendengar suaranya lagi.</p>
        <p>Saat itu, mataku tertuju pada papan di ruang tunggu. Sebuah tulisan cahaya terukir di sana: "Di sini kalian bertemu, di sini pula kalian berpisah." Seketika, jarum jam dinding kembali berdetak, dan tulisan itu memudar, menjadi rahasia abadi di antara kami.</p>
        `,
      "Peron": "Isi cerita Peron...",
      "Ruang Tunggu": "Isi cerita Ruang Tunggu...",
      "First Stop": "Isi cerita First Stop...",
      "Birth": "Isi cerita Birth...",
      "Middle Stop": "Isi cerita Middle Stop...",
      "Life": "Isi cerita Life...",
      "Eternity": "Isi cerita Eternity...",
      "Last Stop": "Isi cerita Last Stop...",
      "Kitab Aisyah": "Isi cerita Kitab Aisyah...",
      "Kitab Laila": "Isi cerita Kitab Laila...",
      "Kitab Fathia": "Isi cerita Kitab Fathia...",
      "Amira": "Isi cerita Amira...",
      "Fatina": "Isi cerita Fatina...",
      "Mazaya": "Isi cerita Mazaya...",
      "Hanum": "Isi cerita Hanum...",
      "Azizah": "Isi cerita Azizah...",
      "Karim": "Isi cerita Karim...",
      "Hilya": "Isi cerita Hilya...",
      "Salman": "Isi cerita Salman...",
      "Shafira": "Isi cerita Shafira...",
      "Neil": "Isi cerita Neil...",
      "Laras": "Isi cerita Laras...",
      "Raven": "Isi cerita Raven...",
      "Kartika": "Isi cerita Kartika...",
      "Danitha": "Isi cerita Danitha...", // Ganti 'Sausan' menjadi 'Danitha' jika perlu
      "Marta": "Isi cerita Marta...",
      "Bu Desi": "Isi cerita Desi...", // Ganti 'Desi' menjadi 'Bu Desi'
      "Stranger": "Isi cerita Stranger...",
      "Sungai": "Isi cerita Sungai...",
      "Vas Bunga": "Isi cerita Vas Bunga...",
      "Malam": "Isi cerita Malam...",
      "Terima": "Isi cerita Terima...",
      "Jam Kehidupan": "Isi cerita Jam Kehidupan...",
      "Satu Nafas Terakhir": "Isi cerita Satu Nafas Terakhir...",
      "Unik atau Ironi?": "Isi cerita Unik atau Ironi?...",
      "Hormati Dirimu": "Isi cerita Hormati Dirimu...",
      "Laut": "Isi cerita Laut...",
      "Cinta": "Isi cerita Cinta...",
      "Tuhan": "Isi cerita Tuhan...",
      "Dengarkan Mereka!": "Isi cerita Dengarkan Mereka!...",
      "Terus Berjalan": "Isi cerita Terus Berjalan...",
      "Ruang Evaluasi": "Isi cerita Ruang Evaluasi...",
      "Luka": "Isi cerita Luka...",
      "Sehari": "Isi cerita Sehari...",
      "Tamu": "Isi cerita Tamu...",
      "Kepergian": "Isi cerita Kepergian...",
      "Lanjutkan Kehidupanmu": "Isi cerita Lanjutkan Kehidupanmu...",
      "Mengalah, Sabar, dan Ikhlas": "Isi cerita Mengalah, Sabar, dan Ikhlas...",
      "Anda": "Isi cerita Anda...",
      "Aku: Ciptaan Tuhan Terindah": "Isi cerita Aku: Ciptaan Tuhan Terindah...",
      "Maafkan Aku": "Isi cerita Maafkan Aku...",
      "Diromantisasikan Saja": "Isi cerita Diromantisasikan Saja...", // Ganti 'Diromantisasikan Saja' jika perlu
      "The Fallen Angel": "Isi cerita The Fallen Angel...",
      "The Guardian of Azazil": "Isi cerita The Guardian of Azazil...",
      "Kapten Jibril": "Isi cerita Kapten Jibril...",
      "Pelayaran Abadi": "Isi cerita Pelayaran Abadi...",
      "Hari Akhir": "Isi cerita Hari Akhir...",
      "Pelabuhan Akhir": "Isi cerita Pelabuhan Akhir..."
    };

    function toggleSub(id) {
      const list = document.getElementById(id);
      list.style.display = (list.style.display === "block") ? "none" : "block";
    }

    function openModal(title) {
      document.getElementById("modal").style.display = "flex";
      document.getElementById("modal-title").textContent = title;
      document.getElementById("modal-body").innerHTML = stories[title] || "Belum ada cerita untuk judul ini.";
    }

    function closeModal() {
      document.getElementById("modal").style.display = "none";
    }
    
    // === KODE JAVASCRIPT BARU UNTUK MUSIK LATAR ===
    const audio = document.getElementById('background-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    let isPlaying = false;

    playPauseBtn.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶️';
      } else {
        audio.play();
        playPauseBtn.textContent = '⏸️';
      }
      isPlaying = !isPlaying;
