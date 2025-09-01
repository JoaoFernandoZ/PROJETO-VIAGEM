import findRoute from './findRoute.js';
import route from './routeData.js';

export function calculateCosts(origin, destination, gasConsume=0, gasPrice=0, averageSpeed=0){
    const route = findRoute(origin, destination);
    if (!route) return;

    const liters = route.distancia / gasConsume;
    const gasCosts = liters * gasPrice;
    const travelTime = route.distancia / averageSpeed;
    const foodCosts = route.custoMedioRefeicao;

    return {
        liters: liters,
        gasCosts: gasCosts,
        travelTime: travelTime,
        foodCosts: foodCosts,
        totalCosts: gasCosts + foodCosts + route.valorPedagios
    };
};