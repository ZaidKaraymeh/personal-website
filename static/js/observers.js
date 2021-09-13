const header = document.querySelector("nav");
const hero = document.querySelector(".hero");

const heroOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(function (
  entries,
  heroObserver
) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add("scroll-active");
        console.log(header);
        } else {
          header.classList.remove("scroll-active");
        }
    })
},
heroOptions);

heroObserver.observe(hero)

// window.addEventListener("scroll", function () {
//   console.log("hi")
//   let header = document.querySelector("nav");
//   let windowPosition = window.scrollY > 1000;
//   header.classList.toggle("scroll-active", windowPosition);
// });
