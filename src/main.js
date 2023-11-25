import '../styles/style.css';
import '../styles/modernize.css';
import '../styles/utility.css';

const checkLargeSize = window.matchMedia('(min-width: 640px)');
const checkLargeSize2 = window.matchMedia('(min-width: 768px)');
const checkLargeSize3 = window.matchMedia('(min-width: 1280px)');
const aboutContainer = document.querySelector('.about__container');
const contactContainer = document.querySelector('.cntct__sub-container');

function checkSize( e ) {
  if ( e.matches ) {
    aboutContainer.classList.add('size640');
    contactContainer.classList.add('size640');
  } else {
    aboutContainer.classList.remove('size640');
    contactContainer.classList.remove('size640');
  }
}

function sizeCheck( e ) {
  if ( e.matches ) {
    aboutContainer.classList.add('size1024');
    contactContainer.classList.add('size1024');
  } else {
    aboutContainer.classList.remove('size1024');
    contactContainer.classList.remove('size1024');
  }
}

function checkme( e ) {
  if ( e.matches ) {
    aboutContainer.classList.add('size1080');
    contactContainer.classList.add('size1080');
  } else {
    aboutContainer.classList.remove('size1080');
    contactContainer.classList.remove('size1080');
  }
}

checkLargeSize.addListener(checkSize);
checkSize(checkLargeSize);

checkLargeSize2.addListener(sizeCheck);
sizeCheck(checkLargeSize2);

checkLargeSize3.addListener(checkme);
checkme(checkLargeSize3);
