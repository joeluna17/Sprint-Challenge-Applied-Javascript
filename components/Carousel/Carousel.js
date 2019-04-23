class Carousel {

    constructor(element){
        this.element = element;
        this.rButton = element.querySelector('.right-button');
        this.lButton = element.querySelector('.left-button');
        this.images = Array.from(element.querySelectorAll('img'));
        this.currentIndex = 0;

        this.images[this.currentIndex].style.display = 'flex';
        
        this.rButton.addEventListener('click', event => {
                    this.images.forEach(img => img.style.display = "none");
                    console.log(this.currentIndex)
                    if (this.currentIndex < this.images.length -1  ) {
                    this.images[++this.currentIndex].style.display = 'flex'; 
                    }  
                    else{
                        this.currentIndex = 0;
                        this.images[this.currentIndex].style.display = 'flex';
        }
        });

      this.lButton.addEventListener('click', event => {
                this.images.forEach(img => img.style.display = "none");
                console.log(this.currentIndex)
                    if (this.currentIndex > 0 ) {
                    this.images[--this.currentIndex].style.display = 'flex'; 
                            }  
                        else{
                         this.currentIndex = 0
                         this.images[this.currentIndex].style.display = 'flex';
                        }
      })
    
    }

   

}

let carousel = document.querySelector(".carousel");
console.log(carousel)
new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
