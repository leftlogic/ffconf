let year = new Date().getFullYear();
let secondFriday = getSecondFridayOfNovember(year);
let open = true;
let date = new Date();

if (date > secondFriday) {
  open = false;
  year++;
  secondFriday = getSecondFridayOfNovember(year);
}

/**
 * this is the data being returned
 */
module.exports = {
  date: secondFriday,
  open,
  // needs to be manually updated
  url: 'https://www.tickettailor.com/checkout/view-event/id/3260377/chk/8d7c/?modal_widget=true&widget=true',
  summary:
    'accessibility, AI, burnout, community, critical thinking for devs, web components, and more!',
};

function getSecondFridayOfNovember(year) {
  // November is the 11th month (0-based index, so 10)
  const month = 10;
  let date = new Date(year, month, 1);
  let dayOfWeek = date.getDay();

  // Calculate the first Friday of November
  let firstFriday = 1 + ((5 - dayOfWeek + 7) % 7);

  // Calculate the second Friday of November
  let secondFriday = firstFriday + 7;

  // Create the date object for the second Friday
  date = new Date(year, month, secondFriday);

  return date;
}
