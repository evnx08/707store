const daftarFoto = [
    "foto1.jpeg","foto2.jpeg","foto3.jpeg","foto4.jpeg","foto5.jpeg",
    "foto6.jpeg","foto7.jpeg","foto8.jpeg","foto9.jpeg","foto10.jpeg",
    "foto11.jpeg","foto12.jpeg","foto13.jpeg","foto14.jpeg","foto15.jpeg",
    "foto16.jpeg","foto17.jpeg","foto18.jpeg","foto19.jpeg","foto20.jpeg",
    "foto21.jpeg","foto22.jpeg","foto23.jpeg","foto24.jpeg","foto25.jpeg",
    "foto26.jpeg","foto27.jpeg","foto28.jpeg","foto29.jpeg"
];

const photos = document.getElementById("photos");
const posisi = [];

const ukuran = 150;

// Area kosong untuk video
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

const safeWidth = 620;
const safeHeight = 420;

daftarFoto.forEach((foto) => {

    const img = document.createElement("img");

    img.src = "image/" + foto;
    img.className = "photo";

    img.style.width = ukuran + "px";
    img.style.height = ukuran + "px";

    let x, y;
    let valid = false;
    let percobaan = 0;

    while (!valid && percobaan < 1000) {

        x = Math.random() * (window.innerWidth - ukuran);
        y = Math.random() * (window.innerHeight - ukuran);

        percobaan++;

        // Jangan masuk area video
        if (
            x > centerX - safeWidth / 2 &&
            x < centerX + safeWidth / 2 &&
            y > centerY - safeHeight / 2 &&
            y < centerY + safeHeight / 2
        ) {
            continue;
        }

        valid = true;

        // Jarak antar foto
        for (const p of posisi) {

            const dx = x - p.x;
            const dy = y - p.y;

            const jarak = Math.sqrt(dx * dx + dy * dy);

            if (jarak < 140) {
                valid = false;
                break;
            }
        }
    }

    posisi.push({ x, y });

    img.style.left = x + "px";
    img.style.top = y + "px";

    // Rotasi sedikit
    img.style.transform = `rotate(${Math.random() * 12 - 6}deg)`;

    photos.appendChild(img);

});
