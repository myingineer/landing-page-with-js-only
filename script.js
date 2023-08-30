const body = document.body;
//************ CREATING ELEMENTS IN HEADER ********************** */
const header = document.createElement('header');
const leftLogoContainer = document.createElement('div');
const h4 = document.createElement('h4');
const logoText = document.createElement('p');
const nav = document.createElement('nav');
const rightButtonContainer = document.createElement('div');
const signInButton = document.createElement('button');
const signUpButton = document.createElement('button');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const firstLink = document.createElement('a');
const li2 = document.createElement('li');
const secondLink = document.createElement('a');
const li3 = document.createElement('li');
const thirdLink = document.createElement('a');
const li4 = document.createElement('li');
const fourthLink = document.createElement('a');

/* **************************************************8 */

// CREATING ELEMENTS FOR THE MAIN CONTENT
const main = document.createElement('main');
const leftMain = document.createElement('div');
const rightMain = document.createElement('div');
const h21 = document.createElement('h2');
const h22 = document.createElement('h3');
const p1 = document.createElement('p');
const firstH4 = document.createElement('h4');
const internalDiv = document.createElement('div');
const secondH4 = document.createElement('h4');
const span = document.createElement('span');
const imgArrow = document.createElement('img');
const p2 = document.createElement('p');
const buyNowBtn = document.createElement('button');
const imgMonkey = document.createElement('img');


// ****************************************************

// CREATING ELEMENTS FOR THE FOOTER
const footer = document.createElement('footer');
const firstFooter = document.createElement('div');
const secondFooter = document.createElement('div');
const thirdFooter = document.createElement('div');
const top1 = document.createElement('h4');
const top2 = document.createElement('h4');
const top3 = document.createElement('h4');
const bottom1 = document.createElement('h3');
const bottom2 = document.createElement('h3');
const bottom3 = document.createElement('h3');




/* ***************ADDING TEXT CONTENTS************** */
firstLink.textContent = 'GitHub';
firstLink.href = 'www.github.com/myingineer';
secondLink.textContent = 'LinkedIn';
secondLink.href = 'www.linkedin.com/myingineer';
thirdLink.textContent = 'Portfolio';
thirdLink.href = 'www.google.com';
fourthLink.textContent = 'About';
fourthLink.href = 'www.twitter.com/myingineer';
signInButton.textContent = 'Sign IN';
signUpButton.textContent = 'Sign UP';
h4.textContent = 'NFT';
logoText.textContent = '.market';
h21.textContent = 'Be one of the first 3 people to buy this';
h22.textContent = 'NFT';
p1.textContent = 'and get a 10$ bonus along with the purchase';
firstH4.textContent = 'the price of';
secondH4.textContent = 'this NFT: ';
span.textContent = '23 $';
imgArrow.src = 'Arrow 1.svg';
imgArrow.alt = 'arrow-icon';
p2.textContent = '18 $';
buyNowBtn.textContent = 'Buy Now';
imgMonkey.src = 'image 1.png';
imgMonkey.alt = 'moneky-img';
top1.textContent = 'Collections';
top2.textContent = 'Artist';
top3.textContent = 'Community';
bottom1.textContent = '450k+';
bottom2.textContent = '320k+';
bottom3.textContent = '15k+';


/* ************************************************************ */


body.appendChild(header);
/* ****************TO APPEND THE HEADER ELEMENTS *****************************/
header.appendChild(leftLogoContainer);
leftLogoContainer.appendChild(h4);
leftLogoContainer.appendChild(logoText);
header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li1);
li1.appendChild(firstLink);
li2.appendChild(secondLink);
li3.appendChild(thirdLink);
li4.appendChild(fourthLink);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
header.appendChild(rightButtonContainer);
rightButtonContainer.appendChild(signInButton);
rightButtonContainer.appendChild(signUpButton);
/* *********************************************************** */

body.appendChild(main);
//******** TO APPEND THE MAIN ELEMENTS */
main.appendChild(leftMain);
main.appendChild(rightMain);
leftMain.appendChild(h21);
leftMain.appendChild(h22);
leftMain.appendChild(p1);
leftMain.appendChild(firstH4);
leftMain.appendChild(internalDiv);
internalDiv.appendChild(secondH4);
internalDiv.appendChild(span);
internalDiv.appendChild(imgArrow);
internalDiv.appendChild(p2);
internalDiv.appendChild(buyNowBtn);
rightMain.appendChild(imgMonkey);


// ***********************************************

// To append footer elements
body.appendChild(footer);
footer.appendChild(firstFooter);
footer.appendChild(secondFooter);
footer.appendChild(thirdFooter);
firstFooter.appendChild(top1);
firstFooter.appendChild(bottom1);
secondFooter.appendChild(top2);
secondFooter.appendChild(bottom2);
thirdFooter.appendChild(top3);
thirdFooter.appendChild(bottom3);
// ***********************************************************8
body.style.padding = '25px';
body.style.backgroundColor = 'black';


/* FOR STYLING HEADER */
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';
header.style.padding = '20px';
leftLogoContainer.style.display = 'flex';
ul.style.display = 'flex';
ul.style.listStyleType = 'none';
ul.style.gap = '20px';
ul.style.color = 'white';
rightButtonContainer.style.display = 'flex';
rightButtonContainer.style.gap = '10px';
leftLogoContainer.style.color = 'white';

// ************************************************ //

/* FOR STYLING MAIN */
main.style.display = 'flex';
main.style.marginTop = '30px';
main.style.color = 'white';
leftMain.style.width = '50%';
rightMain.style.width = '50%';
leftMain.style.height = '60vh';
leftMain.style.display = 'flex';
leftMain.style.flexDirection = 'column'
leftMain.style.justifyContent = 'center';
leftMain.style.padding = '18px';
h21.style.width = '100%';
h21.style.fontSize = '67px';
h22.style.fontSize = '55px';
h22.style.color = '#BFC200';
p1.style.color = 'rgba(230, 175, 46, 0.39)';
p1.style.fontSize = '19px';
firstH4.style.fontSize = '30px';
span.style.fontWeight = 'bold';
span.style.textDecoration = 'line-through dashed #BFC200';
span.style.fontStyle = 'italic';
internalDiv.style.fontSize = '30px';
internalDiv.style.display = 'flex';
internalDiv.style.gap = '13px';
internalDiv.style.width = 'fit-content';
internalDiv.style.justifyContent = 'space-between';
imgMonkey.style.height = '500px'
imgMonkey.style.width = '550px'

// ************************************
// To style the footer
footer.style.color = 'white';
footer.style.display = 'flex';
footer.style.width = 'fit-content';
footer.style.gap = '20px';
footer.style.fontSize = '25px';
footer.style.padding = '20px';
footer.style.borderRadius = '30px';
footer.style.backgroundColor = 'rgba(45, 45, 45, 0.51)';
firstFooter.style.textAlign = 'center'
secondFooter.style.textAlign = 'center'
thirdFooter.style.textAlign = 'center'

//************************************** */

function buttonStyle(button, color) {
    button.style.height = '35px';
    button.style.fontSize = '12px';
    button.style.width = '100px';
    button.style.border = 'none';
    button.style.borderRadius = '10px';
    button.style.color = color;
    button.style.backgroundColor = 'darkred'
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';

    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.97)';
    });

    button.addEventListener('mouseup', () => {
        button.style.transform = '';
    });
};

buttonStyle(signInButton, '#BFC200');
buttonStyle(signUpButton, 'white');
buttonStyle(buyNowBtn, '#BFC200');


function linkStyle(linkName) {
    linkName.style.textDecoration = 'none';
    linkName.style.color = 'red';
    linkName.style.fontWeight = 'bold';
};

linkStyle(firstLink);
linkStyle(secondLink);
linkStyle(thirdLink);
linkStyle(fourthLink);