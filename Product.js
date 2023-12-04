import React from "react";

const ProductsData = [
    {id: 1, name: 'Vino tinto dulce Santa Eloisa 750mL', image: 'https://www.cavasolera.com/wp-content/uploads/2016/03/Vino-tinto-Santa-Eloisa-72.png', description: 'El vino tinto dulce, con una composición que destaca por un 100% de uvas Isabela, es una deliciosa expresión de la excelencia vinícola proveniente del viñedo Cava Solera, ubicado en la pintoresca región de Cerrito, Valle del Cauca. Este vino se presenta con un perfil dulce que seduce los sentidos y evoca una experiencia de degustación única. Con un contenido alcohólico del 5%, equilibrado y moderado, este vino tinto dulce se convierte en una opción accesible y placentera para quienes buscan disfrutar de la riqueza de los vinos dulces. La conexión entre la tierra y la botella se refleja en cada sorbo, transportando a los amantes del vino a los viñedos de la región. Este vino encarna la esencia de la tradición vinícola local, capturando la dulzura natural de las uvas Isabela y convirtiéndose en un deleite para los paladares más exigentes. Un brindis con este vino tinto dulce es una celebración de la artesanía vinícola y una invitación a disfrutar de momentos dulces y memorables.', price: 42000},
    {id: 2, name: 'Vino tinto semiseco Santa Eloisa 750mL', image: 'https://www.cavasolera.com/wp-content/uploads/2016/03/Vino-tinto-semiseco-72.png', description: 'El vino tinto semiseco, elaborado con un 100% de uvas Isabela, se presenta como una joya enológica con un color rojo rubí que invita a explorar sus ricos matices. Su sabor suave y frutal, caracterizado por la presencia distintiva de las uvas Isabela, cautiva el paladar con una armoniosa combinación de sabores que reflejan la calidad de la tierra de la que provienen. Este vino revela un bouquet aromático encantador, donde las notas de vainilla se entrelazan con elementos florales y frutales, creando una experiencia sensorial única. Con su versatilidad destacada, este tinto semiseco se erige como un compañero ideal tanto como aperitivo, despertando el apetito con su elegancia, como acompañante perfecto para carnes, realzando los sabores de cada bocado. Este vino celebra la excelencia enológica y ofrece una experiencia de degustación que deleitará a los amantes de los tintos suaves y equilibrados. Un tributo a la tradición vinícola, este vino tinto semiseco se posiciona como una elección distinguida para aquellos que buscan una experiencia enológica única y placentera.', price: 43000},
    {id: 3, name: 'Vino rosado Santa Eloisa 750mL', image: 'https://www.cavasolera.com/wp-content/uploads/2016/03/Vino-rosado-Santa-Eloisa-72.png', description: 'El vino rosado elaborado con 100% uvas Isabella es una exquisita obra maestra que deleita los sentidos con su suavidad, frescura y dulzura inigualables. Su complejo perfil sensorial revela aromas finamente balanceados, donde las notas florales se entrelazan armoniosamente con toques de vainilla y dulces, creando una experiencia olfativa única. Originario de la pintoresca región de Cerrito, en el Valle del Cauca, este vino rosado captura la esencia del terroir local, reflejando la riqueza del suelo y el clima que lo vio nacer. Perfectamente versátil, este vino es un acompañante ideal para postres, realzando cada bocado con su sutil dulzura, o como aperitivo para iniciar cualquier ocasión con elegancia. Se recomienda disfrutarlo a una temperatura refrescante de 6 grados centígrados, potenciando así todas sus cualidades y garantizando una experiencia sensorial plena. Un deleite para los amantes del buen vino, este rosado destaca por su calidad y autenticidad, consolidándose como una elección distinguida en el mundo de los placeres vinícolas.', price: 45000},
    {id: 4, name: 'Vino tinto seco Santa Eloisa 750mL', image: 'https://www.cavasolera.com/wp-content/uploads/2016/03/Vino-tinto-seco-morado-72.png', description: 'El vino tinto seco, elaborado con un 100% de uvas Isabel, se presenta como una joya vinícola que cautiva desde el primer sorbo. Con su característico color rojo rubí, este vino destaca por un sabor equilibrado y sofisticado, donde la presencia de las uvas Isabel aporta una mezcla armoniosa de notas frutales y cítricas. Este perfil de sabor se traduce en una experiencia sensorial única que estimula el paladar con cada degustación. Los aromas envolventes de frutas y cítricos que emanan de la copa añaden otra capa de complejidad a este vino, anticipando el placer que está por venir. Originario de la región de Cerrito, en el Valle del Cauca, este vino tinto seco lleva consigo la esencia del terroir local y la artesanía vinícola de la zona. Su versatilidad lo convierte en un acompañante ideal, ya sea como aperitivo, resaltando la elegancia de cualquier ocasión, o como compañero perfecto para carnes y quesos madurados, realzando los sabores de cada bocado. Este vino es una celebración de la calidad y la tradición vinícola, invitando a los amantes del buen vino a disfrutar de una experiencia única y memorable.', price: 44000}
];

const Products = ({ addToCart}) => {
    return (
        <div className="products-container">
            {ProductsData.map(product => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <h2>{new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(product.price)}</h2>
                    <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                </div>
            ))}
        </div>
    );
};

export default Products




 