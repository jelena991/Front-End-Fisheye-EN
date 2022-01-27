function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}









  /**
    * ON DIALOG OPEN, SET FOCUS:
    * 1. generate an array of all the focusable elements within the dialog (get them by querying tje doc for all these types of elements)
    * 2. get the first of these elements and use focus() to direct to it
    * 3. determine which elemnt opend it by checking the active element in de document (befor focus is redirected)
    * 4. when the dialog is closed set the focus back
    * 5. prevent mouse click outside the dialog (done in the css file)
    * 6. prevent tabbing outside the dialog
    */ 
/* 
function Dialog(dialogEl, overlayEl) {

    this.dialogEl = dialogEl;
    this.overlayEl = overlayEl;
    this.focusedElBeforeOpen;

    let focusableEls = this.dialogEl.querySelectorAll('input:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    this.focusableEls = Array.prototype.slice.call(focusableEls);

    this.firstFocusableEl = focusableEls[0];
    this.lastFocusableEl = this.focusableEls[this.focusableEls.length - 1];

    this.close(); //reset
};

Dialog.prototype.open = function(){

    let Dialog = this; 
    this.dialogEl.removeAttribute('aria-hidden');
    this.overlayEl.removeAttribute('aria-hidden');

    this.focusedElBeforeOpen = document.activeElement;

 
    
};

Dialog.prototype.close = function(){
    this.focusedElBeforeOpen.focus();

    this.dialogEl.setAttribute('aria-hidden', true);
	this.overlayEl.setAttribute('aria-hidden', true);

	if ( this.focusedElBeforeOpen ) {
		this.focusedElBeforeOpen.focus();
	}
}; */

