function findRoute(origin, destination, routes){
    const routeObject = routes.find(route => route.origem === origin && route.destino === destination);
    
    return routeObject;
}

export default findRoute