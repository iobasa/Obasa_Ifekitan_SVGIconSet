(() => {

    console.log('my JS is workin!');


    let allImages = document.querySelectorAll("#image-container img");


    function logMyId() {
      console.log(this.id);

    this.style.opacity = 0.5; //changes opacity
  }

  allImages.forEach(item => {
    item.addEventListener("click", logMyId);
  });

})();
