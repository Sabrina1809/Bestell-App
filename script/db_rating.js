const reviews = [
  {
    date: "2024-09-10",
    name: "Anna Müller",
    stars: 5,
    text: "Das Essen war hervorragend! Die internationale Auswahl ist beeindruckend. Besonders das thailändische Curry war ein Highlight. Die Atmosphäre war entspannend, und der Service war schnell und freundlich. Gerne wieder!"
  },
  {
    date: "2024-08-25",
    name: "Markus Fischer",
    stars: 4.5,
    text: "Die Vielfalt der Speisen ist beeindruckend. Die Qualität der Gerichte war sehr hoch, aber es war etwas lauter im Restaurant, was den Genuss etwas getrübt hat. Das brasilianische Steak war fantastisch!"
  },
  {
    date: "2024-08-10",
    name: "Laura Wagner",
    stars: 4,
    text: "Die Gerichte waren schmackhaft, aber mein Burger war etwas trocken. Der Rest des Menüs, insbesondere die mexikanischen Tacos, war absolut köstlich. Der Service war freundlich, aber etwas langsam."
  },
  {
    date: "2024-07-30",
    name: "David Schulz",
    stars: 5,
    text: "Eines der besten Restaurants, das ich in letzter Zeit besucht habe! Die internationalen Gerichte waren perfekt gewürzt, besonders das indische Curry war ein Genuss. Ich komme definitiv wieder!"
  },
  {
    date: "2024-07-15",
    name: "Sophie Hoffmann",
    stars: 4.5,
    text: "Sehr leckeres Essen aus allen Ecken der Welt. Der Service war aufmerksam und freundlich. Besonders gut hat mir das Sushi gefallen, das frisch und authentisch schmeckte. Das Ambiente war ebenfalls schön."
  },
  {
    date: "2024-07-01",
    name: "Daniel Weber",
    stars: 5,
    text: "Fantastische internationale Gerichte! Ich war besonders von der Vielfalt der Speisen beeindruckt. Die orientalische Mezze war unglaublich lecker, und das Dessert war himmlisch. Ein Muss für Feinschmecker!"
  },
  {
    date: "2024-06-18",
    name: "Marie Jung",
    stars: 4.5,
    text: "Eine wunderbare Auswahl an Gerichten aus verschiedenen Ländern. Besonders das französische Dessert war ein Highlight. Der Service war freundlich, aber es gab leichte Verzögerungen. Insgesamt ein sehr gutes Erlebnis."
  },
  {
    date: "2024-06-01",
    name: "Lukas Meier",
    stars: 5,
    text: "Hervorragendes Essen und tolle Atmosphäre. Das brasilianische Grillgericht war hervorragend, und das italienische Tiramisu zum Dessert hat den Abend perfekt abgerundet. Gerne wieder!"
  },
  {
    date: "2024-05-20",
    name: "Emilia Schuster",
    stars: 4,
    text: "Die Qualität des Essens war gut, aber der Service war etwas langsam. Die mediterranen Gerichte waren köstlich, insbesondere das griechische Moussaka. Leider war das Restaurant etwas überfüllt."
  },
  {
    date: "2024-05-05",
    name: "Sebastian Krüger",
    stars: 4.5,
    text: "Tolles Essen aus aller Welt, besonders das libanesische Hummus war fantastisch! Die Atmosphäre war angenehm, aber es könnte mehr Platz zwischen den Tischen geben. Der Service war gut."
  },
  {
    date: "2024-04-22",
    name: "Nina Klein",
    stars: 5,
    text: "Der perfekte Ort, um internationale Küche zu erleben. Das griechische Essen war authentisch und hervorragend zubereitet. Der Service war aufmerksam und freundlich. Das Restaurant ist auf jeden Fall einen Besuch wert."
  },
  {
    date: "2024-04-05",
    name: "Jan Fischer",
    stars: 4,
    text: "Gutes Essen, aber mein Steak war etwas überkocht. Der Rest der Gerichte, insbesondere das asiatische Gemüse, war jedoch sehr gut. Das Restaurant war sauber und gut organisiert, aber der Service hätte schneller sein können."
  },
  {
    date: "2024-03-20",
    name: "Clara Winkler",
    stars: 4.5,
    text: "Ein schönes Restaurant mit einer breiten Auswahl an internationalen Gerichten. Besonders gut haben mir die afrikanischen Spezialitäten gefallen. Der Service war freundlich, aber die Wartezeit war etwas lang."
  },
  {
    date: "2024-03-05",
    name: "Paul Schneider",
    stars: 5,
    text: "Die lateinamerikanischen Gerichte waren fantastisch! Besonders die Empanadas haben mir sehr gut gefallen. Die Atmosphäre war entspannt, und der Service war exzellent. Ich kann dieses Restaurant nur empfehlen."
  },
  {
    date: "2024-02-18",
    name: "Lisa Bauer",
    stars: 5,
    text: "Eine wunderbare Erfahrung! Die marokkanischen Tajine-Gerichte waren hervorragend. Der Service war aufmerksam, und die Atmosphäre im Restaurant war angenehm. Ich werde definitiv wiederkommen!"
  },
  {
    date: "2024-02-05",
    name: "Max Wagner",
    stars: 4.5,
    text: "Die thailändischen Gerichte haben mich überzeugt! Sehr gut gewürzt und frisch. Der Service war freundlich und aufmerksam, auch wenn es etwas voller war. Insgesamt ein tolles kulinarisches Erlebnis."
  },
  {
    date: "2024-01-25",
    name: "Sophia Hoffmann",
    stars: 5,
    text: "Ein fantastisches Restaurant! Jedes Gericht war ein Genuss, besonders die spanische Paella. Der Service war schnell und professionell. Ich werde dieses Restaurant auf jeden Fall weiterempfehlen."
  },
  {
    date: "2024-01-10",
    name: "Leon Becker",
    stars: 4,
    text: "Das mexikanische Essen war sehr gut, aber das Restaurant war etwas zu laut. Der Service war gut, aber es gab leichte Verzögerungen. Insgesamt ein gutes Erlebnis mit einigen kleinen Verbesserungsmöglichkeiten."
  },
  {
    date: "2023-12-22",
    name: "Julia Krause",
    stars: 5,
    text: "Das beste Restaurant für internationale Küche, das ich bisher besucht habe! Die Auswahl ist riesig, und jedes Gericht ist mit viel Liebe zubereitet. Besonders die indischen Currys sind ein Highlight."
  },
  {
    date: "2023-12-05",
    name: "Patrick Klein",
    stars: 4.5,
    text: "Die türkischen Gerichte waren besonders gut! Der Service war freundlich, aber es gab kleinere Verzögerungen. Die Atmosphäre war angenehm, und das Essen war hervorragend. Ich komme gerne wieder."
  },
  {
    date: "2023-11-18",
    name: "Katharina Koch",
    stars: 5,
    text: "Fantastische internationale Küche! Das vietnamesische Pho war unglaublich lecker, und der Service war erstklassig. Das Ambiente des Restaurants hat das kulinarische Erlebnis perfekt ergänzt."
  },
  {
    date: "2023-11-05",
    name: "Lena Schulz",
    stars: 4.5,
    text: "Eine breite Auswahl an internationalen Gerichten. Besonders das italienische Risotto war hervorragend. Der Service war freundlich und schnell, und das Restaurant hatte eine angenehme Atmosphäre."
  },
  {
    date: "2023-10-20",
    name: "Tom Hoffmann",
    stars: 4,
    text: "Das Essen war insgesamt gut, besonders das mexikanische Gericht war lecker. Der Service war freundlich, aber es dauerte etwas, bis das Essen kam. Die Atmosphäre war entspannt, aber das Restaurant war etwas voll."
  }
];
