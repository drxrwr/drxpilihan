document.addEventListener('DOMContentLoaded', function() {
    // Password yang benar
    const correctPassword = 'passwordku123';
  
    // Prompt untuk meminta kata sandi dari pengguna
    const userPassword = prompt('Masukkan kata sandi untuk mengakses website:');
  
    // Cek apakah kata sandi benar
    if (userPassword === correctPassword) {
      // Jika kata sandi benar, izinkan akses
      alert('Sandi benar. Selamat datang!');
      document.body.style.display = 'block'; // Menampilkan konten halaman
    } else {
      // Jika kata sandi salah, tolak akses
      alert('Sandi salah. Anda tidak diperbolehkan mengakses halaman ini.');
      document.body.style.display = 'none'; // Sembunyikan konten halaman
    }
  });
  