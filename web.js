// ===== DATA TEMPAT =====
const places = [
    {
        name: "Brain Coffee",
        location: "Jl. Wonokromo Tangkis No. 52, Surabaya",
        image: "images/brain c.jpeg",
        description: "Cafe dengan atmosfer hangat dan cozy, cocok untuk nugas dan nongkrong.",
        facilities: ["Indoor & Outdoor", "Photo Spot", "Toilet", "Area Parkir", "Protokol Kesehatan"],
        hours: "07.00 - 22.00 WIB",
        maps: "https://maps.app.goo.gl/mYiVRFHaDHjXrX466",
        fullDescription: "Brain Coffee Surabaya mempunyai ciri khas dengan hal-hal yang sangat menarik. Cafe ini menonjolkan sisi yang begitu menghangatkan dengan atmosfer yang cozy."
    },
    {
        name: "Dee Aksara",
        location: "Jl. Ketintang Sel. No.47, Karah, Kec. Jambangan, Surabaya",
        image: "images/aksara.jpeg",
        description: "Spot produktif dengan WiFi cepat, ideal untuk mengerjakan tugas.",
        facilities: ["WiFi Cepat", "Mushola", "Toilet", "Colokan"],
        hours: "07.00 - 22.00 WIB",
        maps: "https://www.google.com/maps/place/Dee+Aksara/@-7.3172662,112.7212648,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fb7d1fc09b5f:0xb663ce34e52ea245!8m2!3d-7.3172662!4d112.7238397!16s%2Fg%2F11wt__8sjp?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D://www.google.com/maps/place/Dee+Aksara",
        fullDescription: "Kafe yang menawarkan tempat untuk bekerja atau berkumpul (spot produktif) dengan berbagai menu makanan ringan dan minuman. Cocok untuk mengerjakan tugas kuliah."
    },
    {
        name: "Oi Kafe",
        location: "Jl. Ketintang Madya No.187, Karah, Kec. Jambangan, Surabaya",
        image: "images/oi kafe.jpeg",
        description: "Kafe nyaman dengan fasilitas lengkap untuk belajar dan santai.",
        facilities: ["Toilet", "Mushola", "Indoor AC"],
        hours: "Senin-Jumat: 10.00-22.00 | Sabtu-Minggu: 11.00-23.00 WIB",
        maps: "https://www.google.com/maps/place/oi+kafe/data=!4m2!3m1!1s0x2dd7fb6474ae3f53:0x18ae9c63c927c8b6?sa=X&ved=1t:242&ictx=111://www.google.com/maps/place/oi+kafe",
        fullDescription: "Kafe nyaman untuk nongkrong dan bersantai bersama teman. Menu variatif dengan harga terjangkau untuk mahasiswa."
    },
    {
        name: "Kopi Nuku",
        location: "Jl. Ketintang Baru IV No.14, Ketintang, Kec. Gayungan, Surabaya",
        image: "images/nuku.jpeg",
        description: "Tempat ngopi santai dengan harga ramah mahasiswa.",
        facilities: ["WiFi", "Colokan", "Area Santai"],
        hours: "14.00 - 22.00 WIB",
        maps: "https://www.google.com/maps/place/KOPINUKU/data=!4m2!3m1!1s0x0:0x248ddd05b737e9d1?sa=X&ved=1t:2428&ictx=111://www.google.com/maps/place/KOPINUKU",
        fullDescription: "Tempat ngopi santai dengan suasana yang nyaman. Harga ramah di kantong mahasiswa dengan berbagai pilihan kopi lokal."
    },
    {
        name: "AADK",
        location: "Jl. Raya Menganti Karangan No.85, Babatan, Kec. Wiyung, Surabaya",
        image: "images/aadk.jpeg",
        description: "Cafe dua lantai dengan berbagai zona tematik untuk aktivitas produktif.",
        facilities: ["Indoor & Outdoor", "WiFi Cepat", "Colokan di Setiap Sudut", "Toilet", "Musala", "Parkir Luas"],
        hours: "Setiap Hari 07.00 - 02.00",
        maps: "https://www.google.com/maps/place/ADA+APA+DENGAN+KOPI+-+AADK+WIYUNG/data=!4m2!3m1!1s0x0:0x9f52c3ac62cb83b6?sa=X&ved=1t:2428&ictx=111://www.google.com/maps/place/ADA+APA+DENGAN+KOPI",
        fullDescription: "Kafe dua lantai dengan berbagai zona tematik seperti Zona Nyaman, Zona Sepoi, Zona Inspirasi, Zona Kreatif, dan Pojok Cerita. Perfect untuk produktivitas!"
    },
    {
        name: "Bagi Kopi Margorejo",
        location: "Jl. Margorejo Indah No.511, Margorejo, Wonocolo, Surabaya",
        image: "images/bagi.jpeg",
        description: "Area outdoor yang nyaman untuk nugas sambil menikmati udara segar.",
        facilities: ["Area Outdoor", "WiFi", "Toilet", "Parkir"],
        hours: "Setiap Hari 09.00 - 02.00",
        maps: "https://www.google.com/maps/place/bagi+kopi+margorejo/data=!4m2!3m1!1s0x2dd7fb71af35eea5:0x3b713db3961afaa3?sa=X&ved=1t:242&ictx=111://www.google.com/maps/place/bagi+kopi+margorejo",
        fullDescription: "Tempat ngopi outdoor yang nyaman dan santai. Cocok untuk yang suka suasana outdoor sambil mengerjakan tugas."
    },
    {
        name: "D'Coffee Cup",
        location: "Jl. Raya Menganti No.748, Lidah Wetan, Kec. Lakarsantri",
        image: "images/d coffe.jpeg",
        description: "Cafe 24 jam, perfect untuk begadang nugas deadline!",
        facilities: ["Indoor AC", "Outdoor", "Mushola", "Toilet", "Colokan", "WiFi Gratis", "Parkir Luas", "24 Jam"],
        hours: "Buka 24 Jam",
        maps: "https://www.google.com/maps/place/D'Coffee+Cup+Wiyung/@-7.308505,112.6707767,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fd000f3ba6fb:0x78b048fb8d20050c!8m2!3d-7.308505!4d112.6733516!16s%2Fg%2F11x2d_l1lk?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D",
        fullDescription: "D'Coffee Cup Wiyung adalah kafe 24 jam yang menawarkan suasana nyaman untuk berbagai kegiatan. Cocok untuk begadang nugas deadline!"
    },
    {
        name: "Djoes Kode Babatan",
        location: "Jl. Raya Menganti No. 13 Babatan, Wiyung, Surabaya",
        image: "images/djoes kode.jpeg",
        description: "Kedai dengan rooftop aesthetic, jus segar dan tempat instagramable.",
        facilities: ["Rooftop Area", "Colokan", "Toilet", "3 Lantai", "Aesthetic"],
        hours: "Senin-Kamis: 07.00-22.00 | Jumat-Minggu: 07.00-23.00 WIB",
        maps: "https://www.google.com/maps/place/Jus+Kode+Surabaya+Wiyung/data=!4m2!3m1!1s0x0:0x21a980499d36a3d3?sa=X&ved=1t:2428&ictx=111://www.google.com/maps/place/Jus+Kode+Surabaya+Wiyung",
        fullDescription: "Kedai jus viral di Surabaya dengan buah asli dan segar. Tempat nyaman dan aesthetic dengan tiga lantai dan rooftop instagramable."
    },
    {
        name: "Batatua",
        location: "Jl. Ketintang Madya No.82, Ketintang, Kec. Gayungan, Surabaya",
        image: "images/bata.jpeg",
        description: "Spot nongkrong dengan board games dan sofa santai.",
        facilities: ["Banyak Sofa & Kursi Santai", "Board Games", "WiFi Gratis", "Colokan", "Mushola"],
        hours: "Setiap Hari 09.00 - 00.00 WIB",
        maps: "https://maps.app.goo.gl/eyoeYKuQAZPEjFwo7",
        fullDescription: "Spot nongkrong enak buat nyore dengan harga mahasiswa banget. Banyak sofa yang bikin nyaman dan ada board games untuk main bareng teman."
    },
    {
        name: "Kammari Ketintang",
        location: "Jl. Ketintang Baru II No. KAV 7 Ketintang, Surabaya",
        image: "images/kammari.jpeg",
        description: "Ruang luas untuk kerja kelompok dan kegiatan kreatif mahasiswa.",
        facilities: ["Sofa & Kursi Santai", "Board Games", "WiFi Gratis", "Colokan", "Area Luas"],
        hours: "Setiap Hari 09.00 - 23.00 WIB",
        maps: "https://www.google.com/maps/place/KAMMARI/@-7.3143105,112.7279143,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fb86f14b5ec5:0x9dcbd855b8270d16!8m2!3d-7.3143105!4d112.7304892!16s%2Fg%2F11x64t0gpw?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D",
        fullDescription: "Tempat nongkrong untuk segala kalangan terutama mahasiswa. Area luas yang menunjang kegiatan produktif baik untuk bekerja, mengerjakan tugas, dan berkegiatan kreatif."
    },
    {
        name: "Kafe Titik Koma",
        location: "Jl. Ketintang Brt. No.13, Karah, Kec. Jambangan, Surabaya",
        image: "images/koma.jpeg",
        description: "Kafe aesthetic dengan suasana tenang, cocok untuk nugas atau sekadar santai.",
        facilities: ["WiFi Cepat", "Colokan", "Indoor AC", "Area Parkir"],
        hours: "09.00 - 23.00 WIB",
        maps: "https://www.google.com/maps/place/Kopi+Titik+Koma+Riverside+Ketintang/@-7.3086944,112.7193638,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fb74f0cf5bf7:0x6442ae1ee87ed8d!8m2!3d-7.3086944!4d112.7219387!16s%2Fg%2F11lkcwbdvw?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D",
        fullDescription: "Kafe Titik Koma mengusung konsep minimalis dan tenang, sangat cocok bagi mahasiswa yang ingin mengerjakan tugas atau menikmati waktu santai dengan teman. Menu kopi dan snack-nya juga ramah di kantong."
    },
    {
        name: "Perpustakaan BI",
        location: "Jl. Taman Mayangkara No.6, Darmo, Kec. Wonokromo, Surabaya",
        image: "images/perpus.jpeg",
        description: "Perpustakaan yang menawarkan suasana belajar yang nyaman dan inspiratif.",
        facilities: ["Wifi", "Ruang komputer", "Ruang Baca", "Musholla", "Toilet"],
        hours: "Senin - Sabtu: 08.00 - 16.30 WIB | Minggu: Tutup",
        maps: "https://www.google.com/maps/place/Perpustakaan+Bank+Indonesia/@-7.2942525,112.7387455,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fbbd83e7a20f:0x5de6a9c354f08d6d!8m2!3d-7.2942525!4d112.7387455!16s%2Fg%2F12lppsyjv?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D",
        fullDescription: "Perpustakaan Bank Indonesia Surabaya merupakan salah satu perpustakaan umum yang menawarkan suasana belajar yang nyaman dan inspiratif. Interiornya yang tertata rapi serta spot-spot estetik menjadikannya tidak hanya tempat membaca, tetapi juga ruang produktif bagi pengunjung."
    }
];

// ===== NAVIGASI KE DETAIL TEMPAT =====
function goToPlaceDetail(placeName) {
    // Simpan nama tempat yang dipilih ke localStorage
    localStorage.setItem('selectedPlace', placeName);
    // Redirect ke halaman detail
    window.location.href = 'detail.html';
}

// ===== DARK MODE =====
function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.querySelector(".dark-mode-toggle");

    body.classList.toggle("dark-mode");

    // Simpan preferensi ke localStorage
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDark);

    // Ubah teks tombol sesuai mode
    toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌗 Dark Mode";
}

// ===== LOAD DARK MODE STATE SAAT AWAL =====
function loadDarkMode() {
    const body = document.body;
    const toggleBtn = document.querySelector(".dark-mode-toggle");

    const savedMode = localStorage.getItem("dark-mode") === "true";
    if (savedMode) {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        body.classList.remove("dark-mode");
        toggleBtn.textContent = "🌗 Dark Mode";
    }
}

// ===== SEARCH FUNCTIONALITY =====
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResultsInfo = document.getElementById('searchResultsInfo');
    const placesGrid = document.getElementById('placesGrid');
    const detailsGrid = document.getElementById('detailsGrid');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                if (placesGrid) renderPlaces();
                if (detailsGrid) renderDetails();
                if (searchResultsInfo) {
                    searchResultsInfo.textContent = '';
                }
                return;
            }
            
            const filteredPlaces = places.filter(place => 
                place.name.toLowerCase().includes(searchTerm) ||
                place.location.toLowerCase().includes(searchTerm) ||
                place.description.toLowerCase().includes(searchTerm) ||
                place.fullDescription.toLowerCase().includes(searchTerm) ||
                place.facilities.some(facility => 
                    facility.toLowerCase().includes(searchTerm)
                )
            );
            
            if (placesGrid) renderFilteredPlaces(filteredPlaces);
            if (detailsGrid) renderFilteredDetails(filteredPlaces);
            
            if (searchResultsInfo) {
                if (filteredPlaces.length === 0) {
                    searchResultsInfo.innerHTML = `<span style="color: var(--accent);">😔 Tidak ditemukan tempat yang cocok dengan "${searchTerm}"</span>`;
                } else {
                    searchResultsInfo.textContent = `Ditemukan ${filteredPlaces.length} tempat yang cocok dengan "${searchTerm}"`;
                }
            }
        });
    }
}

function renderFilteredPlaces(filteredPlaces) {
    const grid = document.getElementById('placesGrid');
    if (grid) {
        if (filteredPlaces.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <span class="icon">☕</span>
                    <p>Tidak ada tempat yang cocok dengan pencarian Anda</p>
                    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Coba gunakan kata kunci yang berbeda</p>
                </div>
            `;
        } else {
            grid.innerHTML = filteredPlaces.map(place => `
                <div class="place-card">
                    <div class="place-image">
                        <img src="${place.image}" alt="${place.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjN2I1YjRhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4kTmFtZTwvdGV4dD48L3N2Zz4='">
                    </div>
                    <div class="place-content">
                        <h3>${place.name}</h3>
                        <p>📍 ${place.location}</p>
                        <p>${place.description}</p>
                        <button onclick="goToPlaceDetail('${place.name}')" class="place-btn">Informasi Selengkapnya →</button>
                    </div>
                </div>
            `).join('');
        }
    }
}

function renderFilteredDetails(filteredPlaces) {
    const grid = document.getElementById('detailsGrid');
    if (grid) {
        if (filteredPlaces.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <span class="icon">☕</span>
                    <p>Tidak ada tempat yang cocok dengan pencarian Anda</p>
                    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Coba gunakan kata kunci yang berbeda</p>
                </div>
            `;
        } else {
            grid.innerHTML = filteredPlaces.map((place, index) => `
                <div class="detail-card" style="animation-delay: ${index * 0.1}s">
                    <div class="detail-content">
                        <div class="detail-image">
                            <img src="${place.image}" alt="${place.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjN2I1YjRhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4kTmFtZTwvdGV4dD48L3N2Zz4='">
                        </div>
                        <div class="detail-info">
                            <h2>${place.name}</h2>
                            <p>${place.fullDescription}</p>
                            
                            <div class="info-item">
                                <strong>📍 Lokasi:</strong>
                                <span>${place.location}</span>
                            </div>
                            
                            <div class="info-item">
                                <strong>⏰ Jam Buka:</strong>
                                <span class="hours-badge">${place.hours}</span>
                            </div>
                            
                            <div class="info-item">
                                <strong>✨ Fasilitas:</strong>
                                <div class="facilities">
                                    ${place.facilities.map(f => `<span class="facility-tag">${f}</span>`).join('')}
                                </div>
                            </div>
                            
                            ${place.maps ? `<a href="${place.maps}" target="_blank" class="map-button">📍 Buka di Google Maps</a>` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

// ===== BERANDA - REKOMENDASI ACAK =====
function showRandomRecommendation() {
    const randomIndex = Math.floor(Math.random() * places.length);
    const place = places[randomIndex];
    
    const card = document.getElementById('recommendationCard');
    if (card) {
        card.innerHTML = `
            <div class="place-image">
                <img src="${place.image}" alt="${place.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjN2I1YjRhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4kTmFtZTwvdGV4dD48L3N2Zz4='">
            </div>
            <div class="recommendation-info">
                <h3>${place.name}</h3>
                <p>📍 ${place.location}</p>
                <p>${place.description}</p>
                <button onclick="goToPlaceDetail('${place.name}')" class="place-btn">Lihat Detail Lengkap</button>
            </div>
        `;
    }
}

// ===== BERANDA - RENDER DAFTAR TEMPAT =====
function renderPlaces() {
    const grid = document.getElementById('placesGrid');
    if (grid) {
        grid.innerHTML = places.map(place => `
            <div class="place-card">
                <div class="place-image">
                    <img src="${place.image}" alt="${place.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjN2I1YjRhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9rPSJtaWRkbGUiIGR5PSIuM2VtIj4kTmFtZTwvdGV4dD48L3N2Zz4='">
                </div>
                <div class="place-content">
                    <h3>${place.name}</h3>
                    <p>📍 ${place.location}</p>
                    <p>${place.description}</p>
                    <button onclick="goToPlaceDetail('${place.name}')" class="place-btn">Informasi Selengkapnya →</button>
                </div>
            </div>
        `).join('');
    }
}

// ===== DETAIL - RENDER DETAIL CARDS =====
function renderDetails() {
    const grid = document.getElementById('detailsGrid');
    if (grid) {
        // Cek apakah ada tempat yang dipilih dari beranda
        const selectedPlaceName = localStorage.getItem('selectedPlace');
        
        if (selectedPlaceName) {
            // Tampilkan hanya tempat yang dipilih
            const selectedPlace = places.find(place => place.name === selectedPlaceName);
            if (selectedPlace) {
                grid.innerHTML = `
                    <div class="detail-card">
                        <div class="detail-content">
                            <div class="detail-image">
                                <img src="${selectedPlace.image}" alt="${selectedPlace.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjN2I1YjRhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4kTmFtZTwvdGV4dD48L3N2Zz4='">
                            </div>
                            <div class="detail-info">
                                <h2>${selectedPlace.name}</h2>
                                <p>${selectedPlace.fullDescription}</p>
                                
                                <div class="info-item">
                                    <strong>📍 Lokasi:</strong>
                                    <span>${selectedPlace.location}</span>
                                </div>
                                
                                <div class="info-item">
                                    <strong>⏰ Jam Buka:</strong>
                                    <span class="hours-badge">${selectedPlace.hours}</span>
                                </div>
                                
                                <div class="info-item">
                                    <strong>✨ Fasilitas:</strong>
                                    <div class="facilities">
                                        ${selectedPlace.facilities.map(f => `<span class="facility-tag">${f}</span>`).join('')}
                                    </div>
                                </div>
                                
                                ${selectedPlace.maps ? `<a href="${selectedPlace.maps}" target="_blank" class="map-button">Buka di Google Maps</a>` : ''}
                            </div>
                        </div>
                    </div>
                `;
                
                // Hapus data yang dipilih setelah ditampilkan
                localStorage.removeItem('selectedPlace');
                return;
            }
        }
        
        // Jika tidak ada tempat yang dipilih, tampilkan semua tempat
        grid.innerHTML = places.map((place, index) => `
            <div class="detail-card" style="animation-delay: ${index * 0.1}s">
                <div class="detail-content">
                    <div class="detail-image">
                        <img src="${place.image}" alt="${place.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjN2I1YjRhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4kTmFtZTwvdGV4dD48L3N2Zz4='">
                    </div>
                    <div class="detail-info">
                        <h2>${place.name}</h2>
                        <p>${place.fullDescription}</p>
                        
                        <div class="info-item">
                            <strong>📍 Lokasi:</strong>
                            <span>${place.location}</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>⏰ Jam Buka:</strong>
                            <span class="hours-badge">${place.hours}</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>✨ Fasilitas:</strong>
                            <div class="facilities">
                                ${place.facilities.map(f => `<span class="facility-tag">${f}</span>`).join('')}
                            </div>
                        </div>
                        
                        ${place.maps ? `<a href="${place.maps}" target="_blank" class="map-button">Buka di Google Maps</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ===== FORM SARAN - VALIDASI =====
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const placeType = document.getElementById('placeType').value;
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
    });
    
    // Validate name
    if (name === '') {
        document.getElementById('nameError').classList.add('show');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').classList.add('show');
        isValid = false;
    }
    
    // Validate place type
    if (placeType === '') {
        document.getElementById('placeTypeError').classList.add('show');
        isValid = false;
    }
    
    // Validate message
    if (message === '') {
        document.getElementById('messageError').classList.add('show');
        isValid = false;
    }
    
    return isValid;
}

// ===== FORM SARAN - SUBMIT HANDLER =====
function handleFormSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.add('show');
        
        // Reset form
        document.getElementById('saranForm').reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

// ===== INISIALISASI =====
document.addEventListener('DOMContentLoaded', function() {
    loadDarkMode();
    showRandomRecommendation();
    renderPlaces();
    renderDetails();
    initializeSearch();
    
    const form = document.getElementById('saranForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});