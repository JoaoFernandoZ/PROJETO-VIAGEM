import findRoute from './findRoute.js';
import { routes }  from './routeData.js';

function formatTime(timeFloat) {
    const hours = Math.floor(timeFloat);
    const minutes = Math.round((timeFloat - hours) * 60);

    return `${hours}h ${minutes}m`;
}

function calculateCosts(origin, destination, gasConsume=0, gasPrice=0, averageSpeed=0){
    const route = findRoute(origin, destination, routes);
    if (!route) return;

    const liters = route.distancia / gasConsume;
    const gasCosts = liters * gasPrice;
    const travelTime = route.distancia / averageSpeed;
    const foodCosts = route.custoMedioRefeicao;

    return {
        liters: liters.toFixed(2),
        gasCosts: gasCosts.toFixed(2),
        travelTime: formatTime(travelTime),
        foodCosts: foodCosts.toFixed(2),
        tollCosts: route.valorPedagios.toFixed(2),
        totalCosts: (gasCosts + foodCosts + route.valorPedagios).toFixed(2)
    };
};

export default calculateCosts;