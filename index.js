// Dapatkan elemen-elemen yang diperlukan
const lightboxContainer = document.getElementById("lightbox-container");
const lightboxSlider = document.getElementById("lightbox-slider");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll("#pictures-section [data-index]");
const totalImages = images.length;

let currentIndex = 0;

// Fungsi untuk membuka lightbox
function openLightbox(index) {
  currentIndex = index;
  lightboxContainer.style.display = "block";
  lightboxSlider.innerHTML = "";

  // Tambahkan gambar dan video ke slider lightbox
  images.forEach((image, index) => {
    const element =
      image.tagName === "IMG"
        ? `<img src="${image.src}" alt="Image ${index + 1}">`
        : `<video controls muted><source src="${image.src}" type="video/mp4"></video>`;

    const slide = document.createElement("div");
    slide.classList.add("lightbox-slide");
    slide.innerHTML = element;
    lightboxSlider.appendChild(slide);
  });

  showSlide(currentIndex);
}

// Fungsi untuk menutup lightbox
function closeLightbox() {
  lightboxContainer.style.display = "none";
}

// Fungsi untuk menampilkan slide tertentu
function showSlide(index) {
  const slides = document.querySelectorAll(".lightbox-slide");
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

// Tambahkan event listener untuk gambar dan video
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    openLightbox(index);
  });
});

// Tambahkan event listener untuk tombol close
closeBtn.addEventListener("click", closeLightbox);

// Tambahkan event listener untuk navigasi slider
document.addEventListener("keydown", function (event) {
  if (lightboxContainer.style.display === "block") {
    if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showSlide(currentIndex);
    } else if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % totalImages;
      showSlide(currentIndex);
    }
  }
});
