export function fillSelectWithOrigins(selectElement, routes){
    routes.map(object => {
        const { origem } = object;
        const isThereAnOptionAlready = selectElement.querySelector(`option[value="${origem}"]`) != undefined;
        if (isThereAnOptionAlready) return;

        selectElement.appendChild(new Option(origem, origem));
    });
};

export function fillSelectByOrigin(selectElement, origin, routes){
    const routesFromOrigin = routes.filter(object => object.origem === origin)
    routesFromOrigin.map(object => {
        const { destino } = object;
        const isThereAnOptionAlready = selectElement.querySelector(`option[value="${destino}"]`) != undefined;
        if (isThereAnOptionAlready) return;

        selectElement.appendChild(new Option(destino, destino));
    });
};

export function fillRouteData(containerElement, route){
    for (const key in route) {
        const liElement = containerElement.querySelector(`[data-type="${key}"]`);
        const spanElement = liElement!=undefined && liElement.querySelector('span');
        if (!liElement | !spanElement) continue;

        spanElement.textContent = route[key];
    };
};