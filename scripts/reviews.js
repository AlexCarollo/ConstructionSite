// Set up the default review.
var rev_num = 1;
let review_box = document.getElementById("cust_reviews");
updateText();

//Execute functions continuously.
interval = setInterval(cycleReviews, 15000)

//Calls helper functions, includes slight delays for improved visual clarity.
function cycleReviews(){
    fadeInOut();
    setTimeout(updateText, 400);
    setTimeout(fadeInOut, 400);
}

//Update the text in the text boxt based on rev_num
function updateText() {
    switch(rev_num){
        case 1:
            review_box.textContent="\"My roof got fixed and has no more leaks!\" \r\n\r\n - Customer #1, Denver";
            break;
        case 2:
            review_box.textContent="\"I needed heavy duty landscaping to save my garden, and Bowser Construction saved me!\" \r\n\r\n - Customer #2, Denver Suburb";
            break;
        case 3:
            review_box.textContent="\"Very efficient service!\" \r\n\r\n - Customer #3, Denver Suburb";
            break;
        case 4:
            review_box.textContent="\"The best construction services you can buy.\" \r\n\r\n - Customer #4, Boulder";  
            break;
    }
    
    if (rev_num == 4){
        rev_num = 0
    }
    rev_num = rev_num+1;
}

// Toggle CSS Fade class.
function fadeInOut(){
    review_box.classList.toggle('fade');
}
