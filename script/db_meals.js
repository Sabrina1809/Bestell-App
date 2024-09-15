  const menu = [
    {
        name: "Europa",
        starter: [
            { title: "Bruschetta", ingredients: ["Tomaten", "Knoblauch", "Basilikum"], country: "Italien", price: 5.00, quantity: 0, id: "menu0starter0" },
            { title: "Spanische Tortilla", ingredients: ["Kartoffeln", "Eier", "Zwiebeln"], country: "Spanien", price: 6.00, quantity: 0, id: "menu0starter1" },
            { title: "Kürbiscremesuppe", ingredients: ["Kürbis", "Zwiebeln", "Sahne"], country: "Österreich", price: 6.00, quantity: 0, id: "menu0starter2" }
          ],
        main: [
            { title: "Coq au Vin", ingredients: ["Hähnchen", "Rotwein", "Pilze"], country: "Frankreich", price: 15.00, quantity: 0, id: "menu0main0" },
            { title: "Pasta Carbonara", ingredients: ["Pasta", "Speck", "Eier"], country: "Italien", price: 12.00, quantity: 0, id: "menu0main1" },
            { title: "Paella", ingredients: ["Reis", "Meeresfrüchte", "Safran"], country: "Spanien", price: 18.00, quantity: 0, id: "menu0main2" },
            { title: "Goulasch", ingredients: ["Rindfleisch", "Paprika", "Zwiebeln"], country: "Ungarn", price: 14.00, quantity: 0, id: "menu0main3" },
            { title: "Sauerbraten", ingredients: ["Rindfleisch", "Essig", "Gewürze"], country: "Deutschland", price: 16.00, quantity: 0, id: "menu0main4" }
        ],
        dessert: [
            { title: "Tiramisu", ingredients: ["Mascarpone", "Kaffee", "Löffelbiskuits"], country: "Italien", price: 6.00, quantity: 0, id: "menu0dessert0" },
            { title: "Crêpes Suzette", ingredients: ["Crêpes", "Orangensauce", "Likör"], country: "Frankreich", price: 7.00, quantity: 0, id: "menu0dessert1" },
            { title: "Sachertorte", ingredients: ["Schokolade", "Marillenmarmelade", "Kuchen"], country: "Österreich", price: 8.00, quantity: 0, id: "menu0dessert2" }
        ],
        drinks: [
            { title: "Chianti", ingredients: ["Trauben"], country: "Italien", price: 12.00, quantity: 0, id: "menu0drinks0" },
            { title: "Kölsch", ingredients: ["Gerste"], country: "Deutschland", price: 4.00, quantity: 0, id: "menu0drinks1" }
        ]
    },
    {
        name: "Asien",
        starter: [
            { title: "Edamame", ingredients: ["Sojabohnen"], country: "Japan", price: 4.00, quantity: 0, id: "menu1starter0" },
            { title: "Frühlingsrollen", ingredients: ["Gemüse", "Reispapier"], country: "Vietnam", price: 5.00, quantity: 0, id: "menu1starter1" },
            { title: "Kimchi", ingredients: ["Kohl", "Chili", "Knoblauch"], country: "Korea", price: 6.00, quantity: 0, id: "menu1starter2" }
        ],
        main: [
            { title: "Ramen", ingredients: ["Nudeln", "Brühe", "Fleisch"], country: "Japan", price: 10.00, quantity: 0, id: "menu1main0" },
            { title: "Pho", ingredients: ["Reisnudeln", "Rindfleisch", "Kräuter"], country: "Vietnam", price: 11.00, quantity: 0, id: "menu1main1" },
            { title: "Bulgogi", ingredients: ["Rindfleisch", "Sojasauce", "Zwiebeln"], country: "Korea", price: 13.00, quantity: 0, id: "menu1main2" },
            { title: "Pad Thai", ingredients: ["Reisnudeln", "Eier", "Erdnüsse"], country: "Thailand", price: 12.00, quantity: 0, id: "menu1main3" },
            { title: "Sichuan Hot Pot", ingredients: ["Fleisch", "Gemüse", "Chili"], country: "China", price: 14.00, quantity: 0, id: "menu1main4" }
        ],
        dessert: [
            { title: "Mango Sticky Rice", ingredients: ["Mango", "Klebreis", "Kokosmilch"], country: "Thailand", price: 5.00, quantity: 0, id: "menu1dessert0" },
            { title: "Red Bean Paste Bun", ingredients: ["Bohnenpaste", "Teig"], country: "China", price: 4.00, quantity: 0, id: "menu1dessert1" },
            { title: "Dorayaki", ingredients: ["Bohnenpaste", "Pfannkuchen"], country: "Japan", price: 5.00, quantity: 0, id: "menu1dessert2" }
        ],
        drinks: [
            { title: "Sake", ingredients: ["Reis"], country: "Japan", price: 10.00, quantity: 0, id: "menu1drinks0" },
            { title: "Bubble Tea", ingredients: ["Tee", "Tapioka", "Milch"], country: "Taiwan", price: 6.00, quantity: 0, id: "menu1drinks1" }
        ]
    },
    {
        name: "Afrika",
        starter: [
            { title: "Bunny Chow", ingredients: ["Brot", "Curry"], country: "Südafrika", price: 7.00, quantity: 0, id: "menu2starter0" },
            { title: "Samosa", ingredients: ["Teig", "Gemüse"], country: "Kenya", price: 5.00, quantity: 0, id: "menu2starter1" },
            { title: "Yassa", ingredients: ["Hähnchen", "Zwiebeln", "Zitronen"], country: "Senegal", price: 6.00, quantity: 0, id: "menu2starter2" }
        ],
        main: [
            { title: "Tagine", ingredients: ["Fleisch", "Trockenfrüchte", "Gewürze"], country: "Marokko", price: 14.00, quantity: 0, id: "menu2main0" },
            { title: "Jollof Rice", ingredients: ["Reis", "Tomaten", "Gewürze"], country: "Nigeria", price: 12.00, quantity: 0, id: "menu2main1" },
            { title: "Bunny Chow", ingredients: ["Brot", "Curry"], country: "Südafrika", price: 13.00, quantity: 0, id: "menu2main2" },
            { title: "Koshari", ingredients: ["Reis", "Linsen", "Pasta"], country: "Ägypten", price: 11.00, quantity: 0, id: "menu2main3" },
            { title: "Injera with Doro Wat", ingredients: ["Injera", "Hähnchen", "Gewürze"], country: "Äthiopien", price: 15.00, quantity: 0, id: "menu2main4" }
        ],
        dessert: [
            { title: "Malva Pudding", ingredients: ["Zucker", "Eier", "Karamell"], country: "Südafrika", price: 6.00, quantity: 0, id: "menu2dessert0" },
            { title: "Koeksisters", ingredients: ["Teig", "Sirup"], country: "Südafrika", price: 5.00, quantity: 0, id: "menu2dessert1" },
            { title: "Mango Sorbet", ingredients: ["Mango", "Zucker"], country: "Nigeria", price: 5.00, quantity: 0, id: "menu2dessert2" }
        ],
        drinks: [
            { title: "Rooibos Tea", ingredients: ["Rooibos"], country: "Südafrika", price: 4.00, quantity: 0, id: "menu2drinks0" },
            { title: "Palm Wine", ingredients: ["Palmensaft"], country: "Nigeria", price: 8.00, quantity: 0, id: "menu2drinks1" }
        ]
    },
    {
        name: "Nordamerika",
        starter: [
            { title: "Buffalo Wings", ingredients: ["Hähnchenflügel", "Buffalo Sauce"], country: "USA", price: 8.00, quantity: 0, id: "menu3starter0" },
            { title: "Poutine", ingredients: ["Pommes", "Käse", "Bratensauce"], country: "Kanada", price: 7.00, quantity: 0, id: "menu3starter1" },
            { title: "Guacamole", ingredients: ["Avocado", "Tomaten", "Zwiebeln"], country: "Mexiko", price: 6.00, quantity: 0, id: "menu3starter2" }
        ],
        main: [
            { title: "Cheeseburger", ingredients: ["Rindfleisch", "Käse", "Brötchen"], country: "USA", price: 12.00, quantity: 0, id: "menu3main0" },
            { title: "Tacos", ingredients: ["Tortillas", "Fleisch", "Käse"], country: "Mexiko", price: 10.00, quantity: 0, id: "menu3main1" },
            { title: "Poutine", ingredients: ["Pommes", "Käse", "Bratensauce"], country: "Kanada", price: 11.00, quantity: 0, id: "menu3main2" },
            { title: "Clam Chowder", ingredients: ["Muscheln", "Sahne", "Kartoffeln"], country: "USA", price: 13.00, quantity: 0, id: "menu3main3" },
            { title: "BBQ Ribs", ingredients: ["Rippchen", "BBQ Sauce"], country: "USA", price: 15.00, quantity: 0, id: "menu3main4" }
        ],
        dessert: [
            { title: "Cheesecake", ingredients: ["Frischkäse", "Kekse", "Zucker"], country: "USA", price: 7.00, quantity: 0, id: "menu3dessert0" },
            { title: "Churros", ingredients: ["Teig", "Zucker"], country: "Mexiko", price: 5.00, quantity: 0, id: "menu3dessert1" },
            { title: "Maple Pie", ingredients: ["Ahornsirup", "Teig"], country: "Kanada", price: 6.00, quantity: 0, id: "menu3dessert2" }
        ],
        drinks: [
            { title: "Margarita", ingredients: ["Tequila", "Limettensaft"], country: "Mexiko", price: 8.00, quantity: 0, id: "menu3drinks0" },
            { title: "Root Beer", ingredients: ["Kräuter", "Zucker"], country: "USA", price: 3.00, quantity: 0, id: "menu3drinks1" }
        ]
    },
    {
        name: "Südamerika",
        starter: [
            { title: "Ceviche", ingredients: ["Fisch", "Limettensaft", "Zwiebeln"], country: "Peru", price: 9.00, quantity: 0, id: "menu4starter0" },
            { title: "Empanadas", ingredients: ["Teig", "Fleisch", "Gewürze"], country: "Argentinien", price: 7.00, quantity: 0, id: "menu4starter1" },
            { title: "Arepas", ingredients: ["Maismehl", "Käse"], country: "Kolumbien", price: 6.00, quantity: 0, id: "menu4starter2" }
        ],
        main: [
            { title: "Feijoada", ingredients: ["Schweinefleisch", "Bohnen"], country: "Brasilien", price: 14.00, quantity: 0, id: "menu4main0" },
            { title: "Asado", ingredients: ["Rindfleisch", "Gewürze"], country: "Argentinien", price: 16.00, quantity: 0, id: "menu4main1" },
            { title: "Peruanisches Lomo Saltado", ingredients: ["Rindfleisch", "Tomaten", "Zwiebeln"], country: "Peru", price: 12.00, quantity: 0, id: "menu4main2" },
            { title: "Pabellón Criollo", ingredients: ["Rindfleisch", "Schwarze Bohnen", "Reis"], country: "Venezuela", price: 13.00, quantity: 0, id: "menu4main3" },
            { title: "Chivito", ingredients: ["Rindfleisch", "Käse", "Speck"], country: "Uruguay", price: 14.00, quantity: 0, id: "menu4main4" }
        ],
        dessert: [
            { title: "Dulce de Leche Flan", ingredients: ["Milch", "Zucker"], country: "Argentinien", price: 5.00, quantity: 0, id: "menu4dessert0" },
            { title: "Brigadeiro", ingredients: ["Kondensmilch", "Kakaopulver"], country: "Brasilien", price: 4.00, quantity: 0, id: "menu4dessert1" },
            { title: "Churros", ingredients: ["Teig", "Zucker"], country: "Kolumbien", price: 5.00, quantity: 0, id: "menu4dessert2" }
        ],
        drinks: [
            { title: "Caipirinha", ingredients: ["Cachaça", "Limettensaft", "Zucker"], country: "Brasilien", price: 8.00, quantity: 0, id: "menu4drinks0" },
            { title: "Chicha Morada", ingredients: ["Lila Mais", "Ananas", "Zimt"], country: "Peru", price: 5.00, quantity: 0, id: "menu4drinks1" }
          ]
    },
    {
        name: "Ozeanien",
        starter: [
            { title: "Pavlova", ingredients: ["Eier", "Zucker", "Früchte"], country: "Neuseeland", price: 6.00, quantity: 0, id: "menu5starter0" },
            { title: "Meat Pie", ingredients: ["Fleisch", "Teig"], country: "Australien", price: 7.00, quantity: 0, id: "menu5starter1" },
            { title: "Kangaroo Skewers", ingredients: ["Kängurufleisch", "Gewürze"], country: "Australien", price: 8.00, quantity: 0, id: "menu5starter2" }
        ],
        main: [
            { title: "Barbecued Kangaroo", ingredients: ["Kängurufleisch", "Barbecuesauce"], country: "Australien", price: 16.00, quantity: 0, id: "menu5main0" },
            { title: "Lamb Roast", ingredients: ["Lammfleisch", "Kräuter"], country: "Neuseeland", price: 18.00, quantity: 0, id: "menu5main1" },
            { title: "Fish and Chips", ingredients: ["Fisch", "Pommes"], country: "Australien", price: 14.00, quantity: 0, id: "menu5main2" },
            { title: "Damper", ingredients: ["Mehl", "Wasser"], country: "Australien", price: 11.00, quantity: 0, id: "menu5main3" },
            { title: "Seafood Chowder", ingredients: ["Meeresfrüchte", "Sahne"], country: "Neuseeland", price: 15.00, quantity: 0, id: "menu5main4" }
        ],
        dessert: [
            { title: "Anzac Biscuits", ingredients: ["Haferflocken", "Kokos"], country: "Australien", price: 5.00, quantity: 0, id: "menu5dessert0" },
            { title: "Kiwifruit Sorbet", ingredients: ["Kiwifrüchte", "Zucker"], country: "Neuseeland", price: 4.00, quantity: 0, id: "menu5dessert1" },
            { title: "Lamingtons", ingredients: ["Kuchen", "Kokos", "Schokolade"], country: "Australien", price: 6.00, quantity: 0, id: "menu5dessert2" }
        ],
        drinks: [
            { title: "Flat White", ingredients: ["Espresso", "Milch"], country: "Neuseeland", price: 4.00, quantity: 0, id: "menu5drinks0" },
            { title: "Bundaberg Ginger Beer", ingredients: ["Ingwer", "Zucker"], country: "Australien", price: 3.50, quantity: 0, id: "menu5drinks1" }
        ]
    }
  ];


console.log(menu)
console.table(menu)