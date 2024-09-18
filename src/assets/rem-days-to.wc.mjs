class RemDaysTo extends HTMLElement {
  constructor() {
    super();

    this.updateSlotContent(
      calculateWorkingDays(new Date(this.getAttribute('date')))
    );
  }

  updateSlotContent(newContent) {
    const slot = this.querySelector('slot');
    if (slot) {
      slot.textContent = newContent;
    }
  }
}

customElements.define('rem-days-to', RemDaysTo);

function calculateWorkingDays(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Start from midnight today

  // Set end date to midnight on 7th November
  date.setHours(0, 0, 0, 0);

  let days = 0;

  while (today < date) {
    const day = today.getDay();
    if (day !== 0 && day !== 6) {
      days++;
    }
    today.setDate(today.getDate() + 1); // Move to the next day
  }

  return days;
}
