import { routes } from './modules/routeData.js';
import { fillSelectWithOrigins, fillSelectByOrigin, fillRouteData } from './modules/uiUpdater.js';
import findRoute from './modules/findRoute.js'

const tripDataForm = document.querySelector('.trip-data__form');
const vehicleDataForm = document.querySelector('.vehicle-data__form');

function onOriginChanged(event){
    const originSelect = event.target;
    const destinationSelect = tripDataForm.destination;
    
    destination.querySelectorAll('option').forEach(element => {
        element.remove();
    });

    fillSelectByOrigin(destinationSelect, originSelect.value, routes);
};

function onRouteChanged(event){
    const originValue = tripDataForm.origin.value;
    const destinationValue = tripDataForm.destination.value;
    if (originValue==null | destinationValue==null) return;

    const routeObject = findRoute(originValue, destinationValue, routes);
    const routeDataElement = tripDataForm.querySelector('.form__route-data')
    if (!routeObject) return;

    fillRouteData(routeDataElement, routeObject);
};

function init(){
    const originSelect = tripDataForm.origin;
    const destinationSelect = tripDataForm.destination;

    originSelect.addEventListener('change', onOriginChanged);
    originSelect.addEventListener('change', onRouteChanged);
    destinationSelect.addEventListener('change', onRouteChanged);
    fillSelectWithOrigins(originSelect, routes);
};

init();