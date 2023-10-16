// Inisialisasi index slide yang ditampilkan saat ini
var slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk menampilkan slide berdasarkan indeks
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Fungsi untuk menampilkan slide berikutnya atau sebelumnya
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  // Memastikan index slide berada dalam rentang yang valid
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Menyembunyikan semua slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Menghilangkan status active dari semua thumbnail
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Menampilkan slide yang sesuai dan menandai thumbnail yang sesuai
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Fungsi untuk membuka modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
