const stepSize = 0.06;

const slidersData = [
  {
    title: 'How can I help Ukraine?',
    link: '',
    description: 'Thank you for your compassion for Ukraine\'s pain. <br/> On this page, you will find different foundations that need financial help.<br> These include the Ukrainian army, humanitarian funds, and people who are now hosting refugees.<br/>Also at the end of this page, you can find the Instagram page to follow the situation in real-time.',
    backgroundImagePosition: 0,
  },
  {
    title: 'Help for the army through The National Bank of Ukraine account',
    link: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    description: 'The National Bank of Ukraine has decided to open a special fundraising account to support the Armed Forces of Ukraine.',
    backgroundImagePosition: 1 * stepSize,
  },
  {
    title: 'Helping the Ukrainian Army through the "Come Back Alive" Foundation',
    link: 'https://www.comebackalive.in.ua/',
    description: 'Launched in 2014, "Come Back Alive" became the biggest organization providing support to the Armed Forces of Ukraine. ',
    backgroundImagePosition: 2 * stepSize,
  },
  {
    title: 'Help for the humanitarian needs through The National Bank of Ukraine account',
    link: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-rahunok-dlya-gumanitarnoyi-dopomogi-ukrayintsyam-postrajdalim-vid-rosiyskoyi-agresiyi',
    description: 'NBU Opens Fundraising Account for Humanitarian Assistance to Ukrainians Affected by Russia’s Aggression',
    backgroundImagePosition: 3 * stepSize,
  },
  {
    title: 'Help for the humanitarian needs through "Razom for Ukraine" Foundation',
    link: 'https://razomforukraine.org/donate/',
    description: 'Razom is a diverse community of volunteers and collaborators across the US and Ukraine. In response to war conflict, they raise funds to provide medical supplies and other humanitarian aid.',
    backgroundImagePosition: 4 * stepSize,
  },
  {
    title: 'Help for humanitarian needs through Charitable Fundation "East-SOS"',
    link: 'https://vostok-sos.org/en/about/mission/',
    description: 'Comprehensive assistance to conflict-affected persons and IDPs, promoting democratic transformation and human rights values in Ukraine.',
    backgroundImagePosition: 5 * stepSize,
  },
  {
    title: 'Global Effort to help Ukraine Deal With Military Invasion',
    link: 'https://www.ukrainenow.org/',
    description: 'You can find various ways to help, such as volunteering, as well as financial assistance on the "Ukraine Now" page',
    backgroundImagePosition: 6 * stepSize,
  },
  {
    title: 'Help Mark & Rhonda Blessing ministry in Lviv',
    link: 'https://www.modernday.org/field-workers/markrhondablessing/?fbclid=IwAR1XG_AiT01sWulZSxui7lKSjJvN0R5AaOIZYzCshKMJrzQzb14TlidQ5hM',
    description: 'Missionaries from the U.S. help and host refugees from all over Ukraine in their home in Lviv. Either as refugees wait it out or try to cross the border into Poland, Hungary, etc.',
    backgroundImagePosition: 7 * stepSize,
  },
  {
    title: 'Help the "Pilgrim Foundation" in Mariupol',
    link: 'https://republicpilgrim.org/en/donate',
    description: 'Pastor Gennadiy Mokhnenko and his team are constantly in the east of Ukraine, right on the border of hostilities. Every day they take people out from under the shells, provide them with food and clothing, and then send them to the western part of the country.',
    backgroundImagePosition: 8 * stepSize,
  },
  {
    title: 'Stand With Ukraine 🇺🇦 Instagram page',
    link: 'https://www.instagram.com/withukraine/?utm_medium=copy_link',
    description: 'Follow the latest and actual news from Ukraine on Instagram',
    backgroundImagePosition: 9 * stepSize,
  }
];

// Background image ratio calculation.
const originalBackgroundImageWidth = 12722;
const originalBackgroundImageHeight = 3143; 
const ratio = originalBackgroundImageWidth / originalBackgroundImageHeight;
const windowHeight = window.innerHeight;
const actualBackgroundImageWidth = windowHeight * ratio;

let currentSlide = 0;

// DOM elements for change sliders (left - right).
const sliderPreviousButtonElement = $('#slide-navigation-left');
const sliderNextButtonElement = $('#slide-navigation-right');

// DOM elements to write title / description text according to slide data.
const slideTitleElement = $('#slide-title');
const slideDescriptionLinkElement = $('#description-link');
const descriptionElement = $('#slider-description');
const backgroundImagePositionElement = $('#slide-container');

function renderSlide(slideNumber) {
  slideTitleElement.html(slidersData[slideNumber].title);
  slideDescriptionLinkElement.html(slidersData[slideNumber].description);
  slideDescriptionLinkElement.attr('href', slidersData[slideNumber].link);
  descriptionElement.html(slidersData[slideNumber].description);

  if (slideNumber === 0) {
    slideDescriptionLinkElement.css('text-decoration', 'none');
  } else {
    slideDescriptionLinkElement.css('text-decoration', 'underline');
  }

  if (slideNumber === 0) {
    sliderPreviousButtonElement.css('visibility', 'hidden');
  } else {
    sliderPreviousButtonElement.css('visibility', 'visible');
  }

  if (slideNumber === (slidersData.length - 1)) {
    sliderNextButtonElement.css('visibility', 'hidden');
  } else {
    sliderNextButtonElement.css('visibility', 'visible');
  }

  // Change background color to white in 'step counter' when selected slider.
  const pagerNumbersElements = $('.pager-counter-number');

  for (let i = 0; i < pagerNumbersElements.length; i++) {
    if (slideNumber === i) {
      $(pagerNumbersElements[i]).css('background-color', 'white');
    } else {
      $(pagerNumbersElements[i]).css('background-color', 'transparent');
    }
  }
}

// Moving background image according to the slider by sequence.
function moveBackgroundPosition(slideNumber) {
  let x = actualBackgroundImageWidth * slidersData[slideNumber].backgroundImagePosition;
  let y = 0;
  backgroundImagePositionElement.css('background-position', `${-x}px ${y}px`);
}

moveBackgroundPosition(currentSlide);

// Function to move back and forward sliders.
function onClickPreviousSlide() {
  if (currentSlide > 0) {
    currentSlide -= 1;
    renderSlide(currentSlide);
    moveBackgroundPosition(currentSlide);
  } 
}

function onClickNextSlide() {
  if (currentSlide < (slidersData.length - 1)) {
    currentSlide += 1;
    renderSlide(currentSlide);
    moveBackgroundPosition(currentSlide);
  } else {
    currentSlide = 0;
    renderSlide(currentSlide);
    moveBackgroundPosition(currentSlide);
  }
}

sliderPreviousButtonElement.click(onClickPreviousSlide);
sliderNextButtonElement.click(onClickNextSlide);
renderSlide(0);

