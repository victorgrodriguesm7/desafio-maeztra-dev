export interface Product {
    title: string;
    description: string;
    image: string;

    skus: Sku[];
    price: number;
}

export interface Sku {
    name: string;
    color: string;
}

const products: Product[] = [
    {
        title: "Faux Suede Mini Skirt",
        image: "/assets/home/shelf/Product-1.png",
        description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
        price: 500,
        skus: [
            {
                name: "Amarelo",
                color: "#DEAC71"
            },
            {
                name: "Vermelho",
                color: "#D37164"
            },
            {
                name: "Azul",
                color: "#6497D3"
            },
            {
                name: "Roxo",
                color: "#3C3B79"
            }
        ]
    },
    {
        title: "Ruched Rose Print Mini Skirt",
        image: "/assets/home/shelf/Product-2.png",
        description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
        price: 320,
        skus: [
            {
                name: "Preto",
                color: "#1C1A19"
            },
            {
                name: "Vermelho",
                color: "#D84E4B"
            },
            {
                name: "Bege",
                color: "#CFC9B0"
            },
            {
                name: "Cinza",
                color: "#EAE9E5"
            },
        ]
    },
    {
        title: "Faux Suede Mini Skirt",
        image: "/assets/home/shelf/Product-1.png",
        description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
        price: 500,
        skus: [
            {
                name: "Amarelo",
                color: "#DEAC71"
            },
            {
                name: "Vermelho",
                color: "#D37164"
            },
            {
                name: "Azul",
                color: "#6497D3"
            },
            {
                name: "Roxo",
                color: "#3C3B79"
            }
        ]
    },
    {
        title: "Ruched Rose Print Mini Skirt",
        image: "/assets/home/shelf/Product-2.png",
        description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
        price: 320,
        skus: [
            {
                name: "Preto",
                color: "#1C1A19"
            },
            {
                name: "Vermelho",
                color: "#D84E4B"
            },
            {
                name: "Bege",
                color: "#CFC9B0"
            },
            {
                name: "Cinza",
                color: "#EAE9E5"
            },
        ]
    }
]

export default products;