Dependecies React

├── bootstrap-icons@1.10.3
├── bootstrap@5.2.3
├── react-bootstrap@2.7.2
├── react-dom@18.2.0
├── react-icons@4.8.0
├── react-magnifier@3.0.4
├── react-router-dom@6.8.2
├── react-scripts@5.0.1
├── react-tabs@6.0.0
├── react@18.2.0
└── web-vitals@2.1.4

request to backand

User Request Link
Get all user : http://localhost:8080/api/user
result:
[
    {
        "id": 1,
        "name": "Maria",
        "surname": "Rossi",
        "dob": "1996-04-12",
        "email": "mrossi@gmail.com",
        "username": "mrossi",
        "password": "pass123",
        "address": "Via Roma, 12",
        "telephone": "1234567890",
        "gender": "F"
    },
    {
        "id": 2,
        "name": "Giovanni",
        "surname": "Bianchi",
        "dob": "1995-10-05",
        "email": "gbianchi@gmail.com",
        "username": "gbianchi",
        "password": "pass123",
        "address": "Via Roma, 12",
        "telephone": "1234567890",
        "gender": "M"
    }
]

Get user by id : http://localhost:8080/api/user/{id}
result:
{
    "id": 1,
    "name": "Maria",
    "surname": "Rossi",
    "dob": "1996-04-12",
    "email": "mrossi@gmail.com",
    "username": "mrossi",
    "password": "pass123",
    "address": "Via Roma, 12",
    "telephone": "1234567890",
    "gender": "F"
}
Post new user : http://localhost:8080/api/user
result:
{
    "id": 1,
    "name": "Maria",
    "surname": "Rossi",
    "dob": "1996-04-12",
    "email": "mrossi@gmail.com",
    "username": "mrossi",
    "password": "pass123",
    "address": "Via Roma, 12",
    "telephone": "1234567890",
    "gender": "F"
}
Put user by id : http://localhost:8080/api/user/{id}
result: 
{
    "id": 1,
    "name": "Maria",
    "surname": "Rossi",
    "dob": "1996-04-12",
    "email": "mrossi@gmail.com",
    "username": "mrossi",
    "password": "pass123",
    "address": "Via Roma, 12",
    "telephone": "1234567890",
    "gender": "F"
}
Delete user by id : : http://localhost:8080/api/user/{id}
result: 
void

Gallery Request Link
Get all gallery : http://localhost:8080/api/galleries
result: 
[
    {
        "id": 1,
        "name": "Galleria Primo",
        "email": "primo@galleria.it",
        "username": "primo_galleria",
        "password": "password1",
        "pIva": "12345678910",
        "address": "Via Roma, Milano",
        "telephone": "0212345678",
        "firstImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-in-italia-studio-trisorio.jpg",
        "secondImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/gallerie-arte-contemporanea-in-italia-napoli-umberto.jpg",
        "thirdImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-italia-magazzeno.jpg",
        "artworksList": [
            {
                "id": 1,
                "artist": "Michele Zaza",
                "title": "Cielo abitato",
                "year": "1985-01-01",
                "size": " 60cm x 60cm cad",
                "material": "9 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "Fotografia",
                        "color": "#8397ad"
                    }
                ]
            },
            {
                "id": 2,
                "artist": "Michele Zaza",
                "title": "Io sono il paesaggio",
                "year": "2006-01-01",
                "size": " 69cm x 77.5cm cad",
                "material": "6 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Io_sono_il_paesaggio_2006-6-foto-80x70-cm-ciascuna-copia.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "Fotografia",
                        "color": "#8397ad"
                    }
                ]
            },
            {
                "id": 3,
                "artist": "Michele Zaza",
                "title": "Simulazione d’incendio",
                "year": "1970-01-01",
                "size": " 29.5cm x 29.5cm cad",
                "material": "3 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/2_Zaza_Simulazione_di_incendio_1970-copia.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "Fotografia",
                        "color": "#8397ad"
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Galleria Secondo",
        "email": "secondo@galleria.it",
        "username": "secondo_galleria",
        "password": "password2",
        "pIva": "87654321234",
        "address": "Via Torino, Napoli",
        "telephone": "0812345678",
        "firstImgUrl": "https://www.travelonart.com/wp-content/uploads/2021/01/t293-roma-gallerie-italia.jpg",
        "secondImgUrl": "https://www.travelonart.com/wp-content/uploads/2021/01/wunderkammern-roma-gallerie-italia.jpg",
        "thirdImgUrl": "https://www.collater.al/wp-content/uploads/2018/03/Aakash-Nihalani-in-mostra-con-Tilt-alla-Wunderkammern-di-Milano-Collater.al-10.jpg",
        "artworksList": [
            {
                "id": 4,
                "artist": "Pietro Pizzi Cannella",
                "title": "Cattedrale",
                "year": "2018-01-01",
                "size": " 205cm x 312cm",
                "material": "olio su tela",
                "description": "",
                "price": 0,
                "imgUrl": "https://mucciaccia.com/wp-content/uploads/2022/05/PieroPizzi-Cannella_Cattedrale-2018Oil-on-canvas205-x-312.jpg",
                "tagList": [
                    {
                        "id": 3,
                        "name": "Piuttura",
                        "color": "#8397ad"
                    }
                ]
            },
            {
                "id": 5,
                "artist": "Pietro Pizzi Cannella",
                "title": "Nottambulo",
                "year": "2019-01-01",
                "size": " 155cm x 200cm",
                "material": "tecnica mista su tela",
                "description": "",
                "price": 0,
                "imgUrl": "https://mucciaccia.com/wp-content/uploads/2020/09/ppc-nottambulo-2019.jpg",
                "tagList": [
                    {
                        "id": 3,
                        "name": "Piuttura",
                        "color": "#8397ad"
                    }
                ]
            },
            {
                "id": 6,
                "artist": "Pietro Pizzi Cannella",
                "title": "Ombra Cinese",
                "year": "2021-01-01",
                "size": " 90cm x 130cm",
                "material": "olio su tela",
                "description": "",
                "price": 0,
                "imgUrl": "https://mucciaccia.com/wp-content/uploads/2021/12/ombra-cinese-2021-jpg.jpg",
                "tagList": [
                    {
                        "id": 3,
                        "name": "Piuttura",
                        "color": "#8397ad"
                    }
                ]
            }
        ]
    },
]
Get gallery by id : http://localhost:8080/api/galleries/{id}
result: 
{
        "id": 1,
        "name": "Galleria Primo",
        "email": "primo@galleria.it",
        "username": "primo_galleria",
        "password": "password1",
        "pIva": "12345678910",
        "address": "Via Roma, Milano",
        "telephone": "0212345678",
        "firstImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-in-italia-studio-trisorio.jpg",
        "secondImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/gallerie-arte-contemporanea-in-italia-napoli-umberto.jpg",
        "thirdImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-italia-magazzeno.jpg",
        "artworksList": [
            {
                "id": 1,
                "artist": "Michele Zaza",
                "title": "Cielo abitato",
                "year": "1985-01-01",
                "size": " 60cm x 60cm cad",
                "material": "9 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "Fotografia",
                        "color": "#8397ad"
                    }
                ]
            },
            {
                "id": 2,
                "artist": "Michele Zaza",
                "title": "Io sono il paesaggio",
                "year": "2006-01-01",
                "size": " 69cm x 77.5cm cad",
                "material": "6 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Io_sono_il_paesaggio_2006-6-foto-80x70-cm-ciascuna-copia.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "Fotografia",
                        "color": "#8397ad"
                    }
                ]
            },
            {
                "id": 3,
                "artist": "Michele Zaza",
                "title": "Simulazione d’incendio",
                "year": "1970-01-01",
                "size": " 29.5cm x 29.5cm cad",
                "material": "3 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/2_Zaza_Simulazione_di_incendio_1970-copia.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "Fotografia",
                        "color": "#8397ad"
                    }
                ]
            }
        ]
    }
Get all artwork by gallery id  : http://localhost:8080/api/galleries/{id}/artworks
result: 
[
    {
        "id": 4,
        "artist": "Pietro Pizzi Cannella",
        "title": "Cattedrale",
        "year": "2018-01-01",
        "size": " 205cm x 312cm",
        "material": "olio su tela",
        "description": "",
        "price": 0,
        "imgUrl": "https://mucciaccia.com/wp-content/uploads/2022/05/PieroPizzi-Cannella_Cattedrale-2018Oil-on-canvas205-x-312.jpg",
        "tagList": [
            {
                "id": 3,
                "name": "Piuttura",
                "color": "#8397ad"
            }
        ]
    },
    {
        "id": 5,
        "artist": "Pietro Pizzi Cannella",
        "title": "Nottambulo",
        "year": "2019-01-01",
        "size": " 155cm x 200cm",
        "material": "tecnica mista su tela",
        "description": "",
        "price": 0,
        "imgUrl": "https://mucciaccia.com/wp-content/uploads/2020/09/ppc-nottambulo-2019.jpg",
        "tagList": [
            {
                "id": 3,
                "name": "Piuttura",
                "color": "#8397ad"
            }
        ]
    },
    {
        "id": 6,
        "artist": "Pietro Pizzi Cannella",
        "title": "Ombra Cinese",
        "year": "2021-01-01",
        "size": " 90cm x 130cm",
        "material": "olio su tela",
        "description": "",
        "price": 0,
        "imgUrl": "https://mucciaccia.com/wp-content/uploads/2021/12/ombra-cinese-2021-jpg.jpg",
        "tagList": [
            {
                "id": 3,
                "name": "Piuttura",
                "color": "#8397ad"
            }
        ]
    }
]
Post new gallery : http://localhost:8080/api/galleries
result:
{
    "id": 6,
    "name": "PROVA",
    "email": "example@mail.com",
    "username": "username",
    "password": "password",
    "pIva": "12345678901",
    "address": "Address",
    "telephone": "1234567890",
    "firstImgUrl": "firstImgUrl",
    "secondImgUrl": "secondImgUrl",
    "thirdImgUrl": "thirdImgUrl",
    "artworksList": []
}
Post new artwork by gallery id  : http://localhost:8080/api/galleries/{id}
result: 
{
    "id": 21,
    "artist": "QUADRO PROVA 2",
    "title": "Untitled23",
    "year": "2020-02-01",
    "size": "30x40cm",
    "material": "canvas",
    "description": "Abstract painting",
    "price": 200,
    "imgUrl": "www.example.com/image.jpg",
    "tagList": [
        {
            "id": 1,
            "name": "name",
            "color": "color"
        },
        {
            "id": 2,
            "name": "name",
            "color": "color"
        }
    ]
}
Put gallery by id  : http://localhost:8080/api/galleries/{id}
result: 
{
        "id": 1,
        "name": "Galleria Primo",
        "email": "primo@galleria.it",
        "username": "primo_galleria",
        "password": "password1",
        "pIva": "12345678910",
        "address": "Via Roma, Milano",
        "telephone": "0212345678",
        "firstImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-in-italia-studio-trisorio.jpg",
        "secondImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/gallerie-arte-contemporanea-in-italia-napoli-umberto.jpg",
        "thirdImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-italia-magazzeno.jpg",
        "artworksList": [
            {
                "id": 1,
                "artist": "Michele Zaza",
                "title": "Cielo abitato",
                "year": "1985-01-01",
                "size": " 60cm x 60cm cad",
                "material": "9 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "Fotografia",
                        "color": "#8397ad"
                    }
                ]
            },
            {
                "id": 2,
                "artist": "Michele Zaza",
                "title": "Io sono il paesaggio",
                "year": "2006-01-01",
                "size": " 69cm x 77.5cm cad",
                "material": "6 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Io_sono_il_paesaggio_2006-6-foto-80x70-cm-ciascuna-copia.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "Fotografia",
                        "color": "#8397ad"
                    }
                ]
            },
            {
                "id": 3,
                "artist": "Michele Zaza",
                "title": "Simulazione d’incendio",
                "year": "1970-01-01",
                "size": " 29.5cm x 29.5cm cad",
                "material": "3 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/2_Zaza_Simulazione_di_incendio_1970-copia.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "Fotografia",
                        "color": "#8397ad"
                    }
                ]
            }
        ]
    }

Put artwork by gallery id and artwork id  : http://localhost:8080/api/galleries/{id}/artworks/{artworkId}
result: 
{
    "id": 21,
    "artist": "QUADRO PROVA 2",
    "title": "Untitled23",
    "year": "2020-02-01",
    "size": "30x40cm",
    "material": "canvas",
    "description": "Abstract painting",
    "price": 200,
    "imgUrl": "www.example.com/image.jpg",
    "tagList": [
        {
            "id": 1,
            "name": "name",
            "color": "color"
        },
        {
            "id": 2,
            "name": "name",
            "color": "color"
        }
    ]
}
Delete gallery by id  : http://localhost:8080/api/galleries/{id}
result:
void

Artwork Request Link
Get all artwork : http://localhost:8080/api/artworks/galleries
result:
[
    {
        "id": 1,
        "artist": "Michele Zaza",
        "title": "Cielo abitato",
        "year": "1985-01-01",
        "size": " 60cm x 60cm cad",
        "material": "9 fotografie a colori",
        "description": "",
        "price": 0,
        "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
        "tagList": [
            {
                "id": 2,
                "name": "name",
                "color": "color"
            }
        ]
    },
    {
        "id": 2,
        "artist": "Michele Zaza",
        "title": "Io sono il paesaggio",
        "year": "2006-01-01",
        "size": " 69cm x 77.5cm cad",
        "material": "6 fotografie a colori",
        "description": "",
        "price": 0,
        "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Io_sono_il_paesaggio_2006-6-foto-80x70-cm-ciascuna-copia.jpg",
        "tagList": [
            {
                "id": 2,
                "name": "name",
                "color": "color"
            }
        ]
    }
]
Get all artwork with gallery : http://localhost:8080/api/artworks
result: 
[
    {
        "artwork": {
            "id": 1,
            "artist": "Michele Zaza",
            "title": "Cielo abitato",
            "year": "1985-01-01",
            "size": " 60cm x 60cm cad",
            "material": "9 fotografie a colori",
            "description": "",
            "price": 0,
            "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
            "tagList": [
                {
                    "id": 2,
                    "name": "name",
                    "color": "color"
                }
            ]
        },
        "gallery": {
            "id": 1,
            "name": "Galleria Primo",
            "email": "primo@galleria.it",
            "username": "primo_galleria",
            "password": "password1",
            "pIva": "12345678910",
            "address": "Via Roma, Milano",
            "telephone": "0212345678",
            "firstImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-in-italia-studio-trisorio.jpg",
            "secondImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/gallerie-arte-contemporanea-in-italia-napoli-umberto.jpg",
            "thirdImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-italia-magazzeno.jpg",
            "artworksList": [
                {
                    "id": 1,
                    "artist": "Michele Zaza",
                    "title": "Cielo abitato",
                    "year": "1985-01-01",
                    "size": " 60cm x 60cm cad",
                    "material": "9 fotografie a colori",
                    "description": "",
                    "price": 0,
                    "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
                    "tagList": [
                        {
                            "id": 2,
                            "name": "name",
                            "color": "color"
                        }
                    ]
                },
                {
                    "id": 2,
                    "artist": "Michele Zaza",
                    "title": "Io sono il paesaggio",
                    "year": "2006-01-01",
                    "size": " 69cm x 77.5cm cad",
                    "material": "6 fotografie a colori",
                    "description": "",
                    "price": 0,
                    "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Io_sono_il_paesaggio_2006-6-foto-80x70-cm-ciascuna-copia.jpg",
                    "tagList": [
                        {
                            "id": 2,
                            "name": "name",
                            "color": "color"
                        }
                    ]
                },
                {
                    "id": 3,
                    "artist": "Michele Zaza",
                    "title": "Simulazione d’incendio",
                    "year": "1970-01-01",
                    "size": " 29.5cm x 29.5cm cad",
                    "material": "3 fotografie a colori",
                    "description": "",
                    "price": 0,
                    "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/2_Zaza_Simulazione_di_incendio_1970-copia.jpg",
                    "tagList": [
                        {
                            "id": 2,
                            "name": "name",
                            "color": "color"
                        }
                    ]
                }
            ]
        }
    },
    {
        "artwork": {
            "id": 2,
            "artist": "Michele Zaza",
            "title": "Io sono il paesaggio",
            "year": "2006-01-01",
            "size": " 69cm x 77.5cm cad",
            "material": "6 fotografie a colori",
            "description": "",
            "price": 0,
            "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Io_sono_il_paesaggio_2006-6-foto-80x70-cm-ciascuna-copia.jpg",
            "tagList": [
                {
                    "id": 2,
                    "name": "name",
                    "color": "color"
                }
            ]
        },
        "gallery": {
            "id": 1,
            "name": "Galleria Primo",
            "email": "primo@galleria.it",
            "username": "primo_galleria",
            "password": "password1",
            "pIva": "12345678910",
            "address": "Via Roma, Milano",
            "telephone": "0212345678",
            "firstImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-in-italia-studio-trisorio.jpg",
            "secondImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/gallerie-arte-contemporanea-in-italia-napoli-umberto.jpg",
            "thirdImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-italia-magazzeno.jpg",
            "artworksList": [
                {
                    "id": 1,
                    "artist": "Michele Zaza",
                    "title": "Cielo abitato",
                    "year": "1985-01-01",
                    "size": " 60cm x 60cm cad",
                    "material": "9 fotografie a colori",
                    "description": "",
                    "price": 0,
                    "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
                    "tagList": [
                        {
                            "id": 2,
                            "name": "name",
                            "color": "color"
                        }
                    ]
                },
                {
                    "id": 2,
                    "artist": "Michele Zaza",
                    "title": "Io sono il paesaggio",
                    "year": "2006-01-01",
                    "size": " 69cm x 77.5cm cad",
                    "material": "6 fotografie a colori",
                    "description": "",
                    "price": 0,
                    "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Io_sono_il_paesaggio_2006-6-foto-80x70-cm-ciascuna-copia.jpg",
                    "tagList": [
                        {
                            "id": 2,
                            "name": "name",
                            "color": "color"
                        }
                    ]
                },
                {
                    "id": 3,
                    "artist": "Michele Zaza",
                    "title": "Simulazione d’incendio",
                    "year": "1970-01-01",
                    "size": " 29.5cm x 29.5cm cad",
                    "material": "3 fotografie a colori",
                    "description": "",
                    "price": 0,
                    "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/2_Zaza_Simulazione_di_incendio_1970-copia.jpg",
                    "tagList": [
                        {
                            "id": 2,
                            "name": "name",
                            "color": "color"
                        }
                    ]
                }
            ]
        }
    }
]
Get artwork by id : http://localhost:8080/api/artworks/{id}
result:
{
    "id": 1,
    "artist": "Michele Zaza",
    "title": "Cielo abitato",
    "year": "1985-01-01",
    "size": " 60cm x 60cm cad",
    "material": "9 fotografie a colori",
    "description": "",
    "price": 0,
    "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
    "tagList": [
        {
            "id": 2,
            "name": "name",
            "color": "color"
        }
    ]
}
Get artwork by id with gallery : http://localhost:8080/api/artworks/{id}/galleries
result: 
{
    "artwork": {
        "id": 3,
        "artist": "Michele Zaza",
        "title": "Simulazione d’incendio",
        "year": "1970-01-01",
        "size": " 29.5cm x 29.5cm cad",
        "material": "3 fotografie a colori",
        "description": "",
        "price": 0,
        "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/2_Zaza_Simulazione_di_incendio_1970-copia.jpg",
        "tagList": [
            {
                "id": 2,
                "name": "name",
                "color": "color"
            }
        ]
    },
    "gallery": {
        "id": 1,
        "name": "Galleria Primo",
        "email": "primo@galleria.it",
        "username": "primo_galleria",
        "password": "password1",
        "pIva": "12345678910",
        "address": "Via Roma, Milano",
        "telephone": "0212345678",
        "firstImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-in-italia-studio-trisorio.jpg",
        "secondImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/gallerie-arte-contemporanea-in-italia-napoli-umberto.jpg",
        "thirdImgUrl": "https://www.travelonart.com/wp-content/uploads/2020/01/galleria-arte-contemporanea-italia-magazzeno.jpg",
        "artworksList": [
            {
                "id": 1,
                "artist": "Michele Zaza",
                "title": "Cielo abitato",
                "year": "1985-01-01",
                "size": " 60cm x 60cm cad",
                "material": "9 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "name",
                        "color": "color"
                    }
                ]
            },
            {
                "id": 2,
                "artist": "Michele Zaza",
                "title": "Io sono il paesaggio",
                "year": "2006-01-01",
                "size": " 69cm x 77.5cm cad",
                "material": "6 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Io_sono_il_paesaggio_2006-6-foto-80x70-cm-ciascuna-copia.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "name",
                        "color": "color"
                    }
                ]
            },
            {
                "id": 3,
                "artist": "Michele Zaza",
                "title": "Simulazione d’incendio",
                "year": "1970-01-01",
                "size": " 29.5cm x 29.5cm cad",
                "material": "3 fotografie a colori",
                "description": "",
                "price": 0,
                "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/2_Zaza_Simulazione_di_incendio_1970-copia.jpg",
                "tagList": [
                    {
                        "id": 2,
                        "name": "name",
                        "color": "color"
                    }
                ]
            }
        ]
    }
}
Post new artwork : http://localhost:8080/api/artworks
result:
{
    "id": 1,
    "artist": "Michele Zaza",
    "title": "Cielo abitato",
    "year": "1985-01-01",
    "size": " 60cm x 60cm cad",
    "material": "9 fotografie a colori",
    "description": "",
    "price": 0,
    "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
    "tagList": [
        {
            "id": 2,
            "name": "name",
            "color": "color"
        }
    ]
}
Put artwork by id : http://localhost:8080/api/artworks/{id}
result:
{
    "id": 1,
    "artist": "Michele Zaza",
    "title": "Cielo abitato",
    "year": "1985-01-01",
    "size": " 60cm x 60cm cad",
    "material": "9 fotografie a colori",
    "description": "",
    "price": 0,
    "imgUrl": "https://atpdiary.com/wp-content/uploads/2016/12/6_Zaza_Cielo_abitato_1985-640x640.jpg",
    "tagList": [
        {
            "id": 2,
            "name": "name",
            "color": "color"
        }
    ]
}
Delete artwork by id : http://localhost:8080/api/artworks/{id}
result: 
void

Tag Request Link
Get all tags : http://localhost:8080/api/tags
result:
[
    {
        "id": 1,
        "name": "name",
        "color": "color"
    },
    {
        "id": 2,
        "name": "name",
        "color": "color"
    }
]
Get tag by id : http://localhost:8080/api/tags/{id}
result:
{
    "id": 1,
    "name": "name",
    "color": "color"
}
Get tag by id with artwork : http://localhost:8080/api/tags/{id}/artworks
result:
{
    "tag": {
        "id": 1,
        "name": "Design",
        "color": "#8397ad"
    },
    "artworkPlusGallery": [
        {
            "artwork": {
                "id": 7,
                "artist": "Roberto Tornetta",
                "title": "Lampadario circolare Tornetta",
                "year": "2000-01-01",
                "size": " 150cm x 180cm",
                "material": "Ferro e metallo lucidato",
                "description": "Produttore Alkimya,  lampadario circolare a 24 luci, pezzo unico",
                "price": 0,
                "imgUrl": "https://www.alkimya.it/upload/770_435/A02D94F8-77A6-40CB-99C0-A391A57313A6.jpeg",
                "tagList": [
                    {
                        "id": 1,
                        "name": "Design",
                        "color": "#8397ad"
                    }
                ]
            },
            "gallery": {
                "id": 3,
                "name": "Galleria Terzo",
                "email": "terzo@galleria.it",
                "username": "terzo_galleria",
                "password": "password3",
                "pIva": "56789123123",
                "address": "Via Firenze, Roma",
                "telephone": "0612345678",
                "firstImgUrl": "https://zero-media.s3.amazonaws.com/uploads/2015/05/Galleria-Carla-Sozzani-Milano-zero-960x520.jpg",
                "secondImgUrl": "http://www.drosteeffectmag.com/wp-content/uploads/2014/01/rsz_img_20140115_162946.jpg",
                "thirdImgUrl": "https://i.pinimg.com/originals/fc/58/21/fc58217e4b4e4e73bfcbfd5d792b4b2a.jpg",
                "artworksList": [
                    {
                        "id": 7,
                        "artist": "Roberto Tornetta",
                        "title": "Lampadario circolare Tornetta",
                        "year": "2000-01-01",
                        "size": " 150cm x 180cm",
                        "material": "Ferro e metallo lucidato",
                        "description": "Produttore Alkimya,  lampadario circolare a 24 luci, pezzo unico",
                        "price": 0,
                        "imgUrl": "https://www.alkimya.it/upload/770_435/A02D94F8-77A6-40CB-99C0-A391A57313A6.jpeg",
                        "tagList": [
                            {
                                "id": 1,
                                "name": "Design",
                                "color": "#8397ad"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "artist": "Ettore Sottsass",
                        "title": "I tre fiumi",
                        "year": "1983-01-01",
                        "size": " 19cm x 19cm cad.",
                        "material": "Ceramica Smaltata",
                        "description": "Produttore Memphis,  Set di tre vasi scultura in ceramica smaltata di colori e forme differenti della serie, ogni vaso è stato firmato dall artista singolarmente.",
                        "price": 0,
                        "imgUrl": "https://www.alkimya.it/upload/770_435/4436300IMG_20211104_115239.jpg",
                        "tagList": [
                            {
                                "id": 1,
                                "name": "Design",
                                "color": "#8397ad"
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "artist": "Angelo Lelli",
                        "title": "Lampade da tavolo design Angelo Lelli",
                        "year": "1968-01-01",
                        "size": "12cm x 25cm cad.",
                        "material": "Metallo laccato e vetro murrina",
                        "description": "Produttore Arredoluce-Monza,  lampade da tavolo , in metallo laccato bianco con diffusore interno in vetro bianco satinato",
                        "price": 0,
                        "imgUrl": "https://www.alkimya.it/upload/770_435/58828ADD-0C00-4E47-BEB7-07B902EC642E.jpeg",
                        "tagList": [
                            {
                                "id": 1,
                                "name": "Design",
                                "color": "#8397ad"
                            }
                        ]
                    }
                ]
            }
        }
]

Post new tag : http://localhost:8080/api/tags
result:
{
    "id": 1,
    "name": "name",
    "color": "color"
}
Put tag by id : http://localhost:8080/api/tags/{id}
result:
{
    "id": 1,
    "name": "name",
    "color": "color"
}
Delete tag by id : http://localhost:8080/api/tags/{id}
result:
void

