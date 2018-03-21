// OPTIONS DROP-DOWN MENU
const hotelChoices = document.getElementById('hotels-choices');
const activityChoices = document.getElementById('activities-choices');
const restaurantChoices = document.getElementById('restaurants-choices');

fetch('/api')
.then(response => response.json())
.then(data => {
  const hotels = data[0];
  const activities = data[1];
  const restaurants = data[2];

  hotels.forEach(item => {
    const itemEl = document.createElement('option');
    itemEl.innerText = item.name;
    itemEl.value = item.name;
    hotelChoices.appendChild(itemEl);
  });

  activities.forEach(item => {
    const itemEl = document.createElement('option');
    itemEl.innerText = item.name;
    itemEl.value = item.name;
    activityChoices.appendChild(itemEl);
  });

  restaurants.forEach(item => {
    const itemEl = document.createElement('option');
    itemEl.innerText = item.name;
    itemEl.value = item.name;
    restaurantChoices.appendChild(itemEl);
  });
})
.catch(err => {
  console.error(err);
});

// ADD BUTTON
document.getElementsByClassName('options-btn').addEventListener('click', () => {

})
