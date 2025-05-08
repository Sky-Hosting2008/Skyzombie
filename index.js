```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kenny Hosting</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <h1>Kenny Hosting</h1>
    <p>Solusi Hosting Murah dan Cepat</p>
  </header>

  <nav>
    <a href="#beranda">Beranda</a>
    <a href="#layanan">Layanan</a>
    <a href="#kontak">Kontak</a>
  </nav>

  <section class="hero">
    <h2>Hosting Berkualitas, Harga Terjangkau</h2>
    <p>Dapatkan layanan terbaik untuk kebutuhan website Anda</p>
  </section>

  <section class="content">
    <h3>Paket Hosting Kami</h3>
    <p>Pilih paket sesuai kebutuhan Anda. Mulai dari personal hingga bisnis.</p>
  </section>

  <footer>
    <p>&copy; 2025 Kenny Hosting. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f0f0f0;
}

header {
  background: #1e1e1e;
  color: white;
  padding: 20px;
  text-align: center;
}

nav {
  background: #333;
  display: flex;
  justify-content: center;
  padding: 10px;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

.hero {
  background: url('assets/images/hero.jpg') no-repeat center center/cover;
  color: white;
  padding: 100px 20px;
  text-align: center;
}

.content {
  padding: 40px;
  text-align: center;
}

footer {
  background: #222;
  color: white;
  text-align: center;
  padding: 20px;
}