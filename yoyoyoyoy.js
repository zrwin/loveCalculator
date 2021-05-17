db.products.insert(
    {
        name: "Pen",
        price: 150,
        stock: 32
    },
    {
        name: "Pencil",
        price: 200,
        stock: 30,
        reviews: [
            {
                authorName: "zr",
                rating: 5,
                review: "Awesome Pencil"
            },
            {
                authorName: "Popo",
                rating: 5, 
                review: "NOt bad!"
            }
        ]
    }
)