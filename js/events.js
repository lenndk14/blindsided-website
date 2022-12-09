const fetchEvent = () => {
    return fetch('https://lennartdekroon.nl/wp-json/wp/v2/events/')
        .then((response) => response.json())
};

fetchEvent().then((result) => {
    const buttonElements = document.querySelectorAll(".month");
    const handleButtonClick = (clickEvent) => {
        const table = document.getElementById("table__body");
        const monthItemsArray = []
        const monthBtn = clickEvent.target.dataset.month;

        table.innerHTML = "";

        result.forEach((item) => {
            const monthItem = item.acf.date.substring(4, 6);
            if (monthBtn === monthItem) {
                monthItemsArray.push(item.acf);
            }
        })

        monthItemsArray.sort((a, b) => a.date - b.date);
        monthItemsArray.forEach((monthData) => {
            const row = table.insertRow(-1);

            row.insertCell(0).innerHTML = monthData.date.substring(6, 8);
            row.insertCell(1).innerHTML = monthData.event_name;
            row.insertCell(2).innerHTML = monthData.location;
            row.insertCell(3).innerHTML = `<a href="${monthData.ticketlink}">Order here</a>`;
        })
    }

    buttonElements.forEach((buttonElement) =>
        buttonElement.addEventListener('click', handleButtonClick)
    )
});



