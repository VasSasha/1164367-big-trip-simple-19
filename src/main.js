import Filters from './view/filters-view';
import TripEvents from './view/trip-events-view';
import TripEventsSorting from './view/trip-events-sorting-view';

import { render } from './render.js';

// const siteMainElement = document.querySelector('.main');
// const siteHeaderElement = document.querySelector('.main__control');
const siteTripsBlock = document.querySelector('.trip-events');
const siteFiltersBlock = document.querySelector('.trip-controls__filters')

render(new Filters(), siteFiltersBlock);
render(new TripEventsSorting(), siteTripsBlock);
render(new TripEvents(), siteTripsBlock);
