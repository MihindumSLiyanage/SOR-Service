const reservations =
    [
        {
            "vehicleType": "Car",
            "vehicleNo": "147852369",
            "vehicleModel": "Mazda",
            "userName": "Amal",
            "contactNo": "15493587",
            "email": "mihindum564@gmail.com",
            "serviceType": "Full service",
            "serviceDate": "2021-08-31",
            "serviceTime": "9.00 am - 10.00 am",
            "slot": 1,
            "isApproved": "true",
            "status": "Pending",
            "subTotal": 533,
            "total": 484.2,
            "paymentMethod": "Card",
            "user": "61531a4f1c38473378ab0828",
            "products": [
                {
                  "price": 9,
                  "discount": 10,
                  "tag": ["Audio", "Matrix Processor"],
                  "title": "AudioControl DM-810 8 Input 10 Output DSP Matrix Processor",
                  "slug": "matrix-processor",
                  "parent": "Audio",
                  "children": "Audio",
                  "image": "https://res.cloudinary.com/dfa6tp3ps/image/upload/v1670345110/sor%20service/audio/equalizers-processors_ic_5_lezva8.jpg",
                  "originalPrice": 10,
                  "unit": "1/5kg",
                  "quantity": 1,
                  "type": "Audio",
                  "description": "PRV AUDIO DSP 2.4X 4 Channel Digital Signal Processor with Sequencer Car Audio Crossover and Integrated Equalizer · 4.6 out of 5 stars 55",
                  "id": "6127965254781e22f8ae5930",
                  "itemTotal": 9
                }
              ]
        },
        {
            "vehicleType": "Lorry",
            "vehicleNo": "987456321",
            "vehicleModel": "Hilux",
            "userName": "Kamal",
            "contactNo": "15493587",
            "email": "mihindum564@gmail.com",
            "serviceType": "Wheel balancing",
            "serviceDate": "2023-05-25",
            "serviceTime": "15.00 pm - 16.00 pm",
            "slot": 5,
            "isApproved": "false",
            "status": "Pending",
            "subTotal": 6221,
            "total": 7000,
            "paymentMethod": "Cash",
            "user": "61531a4f1c38473378ab0826"
        },
    ]

module.exports = reservations;
