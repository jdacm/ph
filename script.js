function Person(nama, energi) {
    this.nama = nama;
    this.energi = energi;
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Hallo ${this.nama},Selamat makan`)
    }
}

let alawi = new Person('alawi', 22);
let cuaks = new Person('cuaks', 10);

// typing text hero
const typed = new Typed(".typing-text", {
    strings: ["an IT Student", "a Basketball  Athlete", "a Gamer"],
    loop: true,
    typeSpeed: 55,
    backSpeed: 25,
    backDelay: 500,
  });
  const sides = document.querySelectorAll(".side");
  let currentSide = 0;
  
  function rotateRectangle() {
      sides[currentSide].style.transform = "rotateY(90deg)";
      currentSide = (currentSide + 1) % sides.length;
      sides[currentSide].style.transform = "rotateY(0deg)";
  }
  
  setInterval(rotateRectangle, 2000);
