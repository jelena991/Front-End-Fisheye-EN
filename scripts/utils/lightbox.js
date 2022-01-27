function openLightbox() {
    const modal = document.getElementById("lightbox-modal");
	modal.style.display = "block";
}

function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    modal.style.display = "none";
}



function nodeIndex(event){

    let child = document.getElementById(event.srcElement.id);
    let parent = child.parentNode;
    // The equivalent of 
    let index = parent.children.indexOf(child);

    return index;
}

function currentSlide(event) {
    let index = nodeIndex(event);
    console.log(index)

    //showSlides(slideIndex = index);
  }
  


