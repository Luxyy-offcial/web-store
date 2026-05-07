const CONFIG = {
nama: "Luxyyofc", // Nama Store
profil: "https://cdn.nekohime.site/file/Q7sZQOGg.png", // Url Profil
banner: "https://cdn.nekohime.site/file/k626C1dt.jpg", // Url Banner 
tentang: "Luxyyofc adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2020. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Jl. Tokyo, jepang",
sosial_media: {
  email: "Luxyyofc_admin@gmail.com", // Email
  youtube: "@yusuf_store400", // YouTube Username 
  tiktok: "@luxyyofc1", // Tiktok Username 
  whatsapp: "6285881606052", // WhatsApp Number 
  telegram: "Luxyyofc1" // Telegram Username
},
payment: {
  dana: "085770138400", // Payment Dana
  gopay: "088709764809", // Payment Gopay 
  ovo: "088709764809", // Payment Ovo 
  qris: "https://cdn.nekohime.site/file/fwul-I26.jpeg" // Url Qris
},
telegram_api: {
  bot: "8430357819:AAGnU1i1fcCw8gsGzolWhwqVmPWR2xOxA5s", // Token bot father
  chatid: "7735918595" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "fas fa-server",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 1000 },
                  { "name": "2GB RAM", "price": 2000 },
                  { "name": "3GB RAM", "price": 3000 },
                  { "name": "4GB RAM", "price": 4000 },
                  { "name": "5GB RAM", "price": 5000 },
                  { "name": "6GB RAM", "price": 6000 },
                  { "name": "7GB RAM", "price": 7000 },
                  { "name": "8GB RAM", "price": 8000 },
                  { "name": "9GB RAM", "price": 9000 },
                  { "name": "10GB RAM", "price": 10000 },
                  { "name": "Unlimited RAM", "price": 13000 }
                ]
              },
              {
                "id": 2,
                "name": "Apk premium",
                "icon": "fas fa-user-circle",
                "description": "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
                "variants": [
                  { "name": "🎬 Am premium / 1 Bulan / Paket Sharing ", "price": 2500 },
                  { "name": "🎬 Am premium / 1 Tahun / Paket Sharing", "price": 4000 },
                  { "name": "🎬 Am premium / 1 Bulan / Paket Private", "price": 6000 },
                  { "name": "🎬 Am premium / 1 Tahun / Paket Private / Acc Buyer", "price": 10000},
                  { "name": "🎨 Canva pro / 1 Bulan", "price": 1500 },
                  { "name": "🎨 Canva pro / 2 Bulan", "price": 2500 },
                  { "name": "🎨 Canva pro / 3 Bulan", "price": 3500 },
                  { "name": "🎨 Canva pro / 4 Bulan", "price": 3000 },
                  { "name": "🎨 Canva pro / 5 Bulan", "price": 4000 },
                  { "name": "🎨 Canva pro / 6 Bulan (GARANSI 3 BULAN", "price": 5500 },
                  { "name": "🎨 Canva pro / 1 Tahun (GARANSI 6 BULAN", "price": 7000 },
                  { "name": "🎨 Canva pro / 1 Bulan (ADMIN BISA INVITE 50 MEMBER", "price": 10000 },
                  { "name": "📝 Capcut pro / 7 Hari", "price": 4000 },
                  { "name": "📝 Capcut pro / 1 Bulan", "price": 8000 },
                  { "name": "✨ Youtube premium / 1 Bulan", "price": 5000 },
                  { "name": "✨ Youtube premium / 1 Bulan (BISA ACC BUYER)", "price": 8000 },
                ]
              },
              {
                "id": 3,
                "name": "🚀 Suntik Sosmed Instagram",
                "icon": "fab fa-instagram",
                "description": "Tingkatkan popularitas akun Instagram kamu dengan layanan followers, likes, views, dan komentar berkualitas. Cocok untuk personal branding, bisnis, content creator, hingga online shop agar akun terlihat lebih aktif, terpercaya, dan menarik perhatian. Proses cepat, aman, dan harga terjangkau 🔥",
                "variants": [
                  { "name": "👥 100 foll ig + 150 like ig (INDONESIA)", "price": 7500 },
                  { "name": "👥 200 foll ig + 200 like ig (INDONESIA)", "price": 15000 },
                  { "name": "👥 300 foll ig + 250 like ig (INDONESIA)", "price": 22500},
                  { "name": "👥 400 foll ig + 350 like ig (INDONESIA)", "price": 28000},
                  { "name": "👥 500 foll ig + 400 like ig (INDONESIA)", "price": 35000},
                  { "name": "👥 600 foll ig + 450 like ig + 1000 views ig (INDONESIA)", "price": 38000},
                  { "name": "👥 100 foll ig + 120 like ig (LUAR NEGERI)", "price": 2000},
                  { "name": "👥 200 foll ig + 150 like ig (LUAR NEGERI)", "price": 3500},
                  { "name": "👥 300 foll ig + 200 like ig (LUAR NEGERI)", "price": 4500},
                  { "name": "👥 400 foll ig + 220 like ig (LUAR NEGERI)", "price": 6000},
                  { "name": "👥 500 foll ig + 250 like ig (LUAR NEGERI)", "price": 8000},
                  { "name": "👥 600 foll ig + 300 like ig + 2000 views ig (LUAR NEGERI)", "price": 10000},
                  { "name": "👍 1000 like ig + 500 views ig [MURAH MERIAH]", "price": 2000},
                  { "name": "👍 2000 like ig + 700 views ig [MURAH MERIAH]", "price": 4000},
                  { "name": "👍 3000 like ig + 800 views ig [MURAH MERIAH]", "price": 5000},
                  { "name": "👍 4000 like ig + 880 views ig [MURAH MERIAH]", "price": 6500},
                  { "name": "👍 5000 like ig + 900 views ig [MURAH MERIAH]", "price": 7500},
                  { "name": "👍 6000 like ig + 1000 views ig [MURAH MERIAH]", "price": 8500},
                  { "name": "👀 10000 views ig [MURAH BANGET]", "price": 1000},
                  { "name": "👀 20000 views ig [MURAH BANGET]", "price": 2000},
                  { "name": "👀 30000 views ig [MURAH BANGET]", "price": 2500},
                  { "name": "👀 40000 views ig [MURAH BANGET]", "price": 2800},
                  { "name": "👀 50000 views ig [MURAH BANGET]", "price": 3000},
                  { "name": "👀 60000 views ig [MURAH BANGET]", "price": 4500},
                ]
              },
              {
                "id": 4,
                "name": "🎵 Suntik sosmed Tiktok",
                "icon": "fab fa-tiktok",
                "description": "Boost performa akun TikTok kamu dengan layanan followers, likes, views, share, dan favorit berkualitas. Cocok untuk content creator, bisnis, maupun akun pribadi agar video lebih ramai, terlihat viral, dan meningkatkan engagement. Proses cepat, aman, dan harga bersahabat 🚀.",
                "variants": [
                  { "name": "100 foll tt + 120 like tt", "price": 1000},
                ]
              },
              {
                "id": 4,
                "name": "Nokos",
                "icon": "fas fa-sim-card",
                "description": "Nokos adalah nomor virtual yang bisa digunakan untuk verifikasi akun tanpa perlu kartu SIM fisik. Cocok untuk daftar WhatsApp, Telegram, Instagram, dan berbagai aplikasi lainnya. Praktis, cepat, dan aman digunakan.",
                "variants": [
                  { "name": "Nokos indonesia", "price": 7000},
                ]
              },
              {
                "id": 5,
                "name": "Top Up Game",
                "icon": "fas fa-gamepad",
                "description": "Top Up Game adalah buat game.",
                "variants": [
                  { "name": "lagi kosong ya kak", "price": 0},
               ]
             }
           ],
            "Desain": [
                {
                    id: 6,
                    name: "Desain Logo",
                    icon: "fas fa-pen-nib",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Logo Minimalis", price: 2000 },
                        { name: "Logo Typography", price: 2500 },
                        { name: "Logo Mascot", price: 3000 },
                        { name: "Logo Vintage", price: 4000 },
                        { name: "Logo Modern", price: 5000 },
                        { name: "Request Custom", price: "Harga sesuai request" }
                    ]
                },
                {
                    id: 7,
                    name: "Desain Banner",
                    icon: "fas fa-image",
                    description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
                    variants: [
                        { name: "Banner Sosmed", price: 15000 },
                        { name: "Banner Event", price: 25000 },
                        { name: "Banner Promosi", price: 30000 }
                    ]
                },
                {
                    id: 8,
                    name: "Desain Poster",
                    icon: "fas fa-scroll",
                    description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
                    variants: [
                        { name: "Poster A4", price: 20000 },
                        { name: "Poster A3", price: 35000 }
                    ]
                },
                {
                    id: 9,
                    name: "UI/UX Design",
                    icon: "fas fa-laptop-code",
                    description: "Jasa desain UI/UX untuk website atau aplikasi dengan tampilan modern dan user-friendly.",
                    variants: [
                        { name: "Landing Page", price: 75000 },
                        { name: "Full Website", price: 250000 },
                        { name: "Mobile App UI", price: 300000 }
                    ]
                },
                {
                    id: 10,
                    name: "Desain Kartu Nama",
                    icon: "fas fa-id-card",
                    description: "Jasa desain kartu nama profesional untuk bisnis atau personal branding.",
                    variants: [
                        { name: "Basic", price: 10000 },
                        { name: "Premium", price: 20000 }
                    ]
                }
            ],
            "Produk Digital": [
                {
                    id: 11,
                    name: "E-Book",
                    icon: "fas fa-book",
                    description: "Koleksi e-book digital dengan berbagai topik menarik, mulai dari bisnis, programming, hingga hobi.",
                    variants: [
                        { name: "E-Book Bisnis", price: 15000 },
                        { name: "E-Book Programming", price: 20000 },
                        { name: "E-Book Random Pack", price: 10000 }
                    ]
                },
                {
                    id: 12,
                    name: "Software & Tools",
                    icon: "fas fa-cogs",
                    description: "Software dan tools digital untuk menunjang pekerjaan maupun kebutuhan kreatif.",
                    variants: [
                        { name: "Software Editing", price: 30000 },
                        { name: "Software Utility", price: 25000 },
                        { name: "Tools Random Pack", price: 20000 }
                    ]
                },
                {
                    id: 13,
                    name: "Lisensi & Key",
                    icon: "fas fa-key",
                    description: "Produk lisensi resmi dan serial key untuk software pilihan.",
                    variants: [
                        { name: "Windows Key", price: 50000 },
                        { name: "Office Key", price: 60000 },
                        { name: "Antivirus Key", price: 40000 }
                    ]
                },
                {
                    id: 14,
                    name: "Template Digital",
                    icon: "fas fa-file-alt",
                    description: "Template digital untuk desain, presentasi, website, dan media sosial.",
                    variants: [
                        { name: "Template PowerPoint", price: 10000 },
                        { name: "Template Website", price: 30000 },
                        { name: "Template Sosmed", price: 15000 }    
                    ]
                }
            ]
        };
