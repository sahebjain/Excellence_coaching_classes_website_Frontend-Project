 <!-- For contact icons -->
   <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js">
</script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script>
    const slides = document.querySelectorAll(".slide");
    var counter = 0;
    slides.forEach(
        (slide, index) => {
            slide.style.left = `${index * 100}%`
        })
    /* for Click */
    const goPrev = () => {
        counter--;
        slideImage();
    }
    const goNext = () => {
        counter++;
        slideImage();
    }
    const slideImage = () =>{
        slides.forEach(
            (slide) => {
                slide.style.transform = `translateX(-${counter * 100}%)`
            }
            )}
</script>
<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
<script>
    var typed = new Typed(".auto-input", {         
        strings: ["Excellence India Coaching Classes"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    })
</script>
