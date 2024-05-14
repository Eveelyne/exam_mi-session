class Speaker {
    constructor(
    name,
    description,
    price,
    brand,
    hasFreeDelivery,
    isInStock,
    rating,
    colour
    ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.hasFreeDelivery = hasFreeDelivery;
    this.isInStock = isInStock;
    this.rating = rating;
    this.colour = colour;
    }

    toHtml() {
        const containerHtml = document.createElement('ul');
        containerHtml.classList.add('container-speakers');

        const entries = Object.entries(this);

        for(let entry of entries) {
            const li = document.createElement('li');
            li.textContent = entry[0] + entry[1];

            containerHtml.appendChild(li);
        }
        return containerHtml;
    }
}

    const speakers = [
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    new Speaker(
    "Echo Dot",
    "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    "47.99",
    "Amazon",
    true,
    true,
    4.5,
    "black"
    ),
    ];

speakers.forEach((speaker) => {
    document.body.appendChild(speaker.toHtml());
});