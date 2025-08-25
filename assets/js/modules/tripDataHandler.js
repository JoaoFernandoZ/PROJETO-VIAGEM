export function fillSelectWithOrigins(selectElement, routes){
    routes.map(object => {
        const { origem } = object;
        const isThereAnOptionAlready = selectElement.querySelector(`option[value="${origem}"]`) != undefined;
        if (isThereAnOptionAlready) return;

        selectElement.appendChild(new Option(origem, origem));
    });
};

export function fillSelectByOrigin(selectElement, origin, routes){
    routes.map(object => {
        const { origem, destino } = object;
        const isThereAnOptionAlready = selectElement.querySelector(`option[value="${destino}"]`) != undefined;
        if (origem !== origin | isThereAnOptionAlready) return;

        selectElement.appendChild(new Option(destino, destino));
    });
}