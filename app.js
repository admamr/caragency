document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

const buttons = document.querySelectorAll(".bento-item button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Button clicked!");
  });
});

//Turned off
window.addEventListener("load", function () {
  // Show the loader for the duration of the video or 9 seconds (whichever is shorter)
  const video = document.getElementById("loadingVideo");
  const duration = Math.min(video.duration * 1000, 9000);

  setTimeout(function () {
    document.getElementById("loader").style.display = "none"; // Hide loader

    const content = document.getElementById("");
    content.style.display = "block"; // Make content visible
    setTimeout(() => {
      content.style.opacity = 1; // Fade in content
      content.style.transform = "scale(1)"; // Scale content to normal size
    }, 50); // Slight delay to trigger transition
  }, duration); // Duration based on video length or 9 seconds
});
//

//modal for slider hover
document.querySelectorAll(".slider .item img").forEach(function (img) {
  // Pause the animation on hover
  img.addEventListener("mouseover", function () {
    document.querySelector(".slider").style.animationPlayState = "paused";
  });

  // Resume the animation on mouse out
  img.addEventListener("mouseout", function () {
    document.querySelector(".slider").style.animationPlayState = "running";
  });

  // Click to open modal with the image
  img.addEventListener("click", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = this.src;
  });
});

// Close the modal when the 'x' button is clicked
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("imageModal").style.display = "none";
});
