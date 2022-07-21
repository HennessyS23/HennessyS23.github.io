var factList = [
  "Only about 14 to 20 percent of all engineers are women",
  "On average, women earned $15,000 USD less than men annually in STEM fields",
  "Gender stereotypes have negatively portrayed women as incapable for centuries, underestimating their abilities",
  "Engineering has a male-dominated culture that excludes women, making it an undesirable career for them",
  "Research shows there is no cognitive biological differences between men and women in math",
  "Young girls and women are systematically tracked away from pursuing engineering throughout their education",
  "Gender and racial diveristy have been proven to improve the financial preformance of companies",
  "Julia Morgan became the first woman to earn a bachelor's degree in engineering in 1876",
  "About 25% of women claim they earn less than men for doing the same job",
  "About 42% of women in the U.S have faced gender discrimination at work",
  "Parents from high-income family are more likely to fortify the belief that boys are more capable in math and science than girls",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);
function displayFact(){
  fact.innerHTML = factList[count];
  count = count + 1;
  if (count == factList.length){
    count = 0;
  }
}

// gallery
const buttons = document.querySelectorAll("[data-gallery-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.galleryButton === "next" ? 1 : -1
    const slides = button.closest("[data-gallery]").querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
