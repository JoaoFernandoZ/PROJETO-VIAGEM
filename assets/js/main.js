import { routes } from './modules/routeData.js';
import { fillSelectWithOrigins, fillSelectByOrigin } from './modules/tripDataHandler.js';

const tripDataForm = document.querySelector('.trip-data__form');
const vehicleDataForm = document.querySelector('.vehicle-data__form');

function onOriginChanged(event){
    const originSelect = event.target;
    const destinationSelect = tripDataForm.destination;
    
    destination.querySelectorAll('option').forEach(element => {
        element.remove();
    });

    fillSelectByOrigin(destinationSelect, originSelect.value, routes);
}

function init(){
    const originSelect = tripDataForm.origin;

    originSelect.onchange = onOriginChanged;
    fillSelectWithOrigins(originSelect, routes);
};

init();