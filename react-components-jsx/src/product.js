const Product = ({ imageUrl, title, price }) => {
    return (
        <div style={{ border: "2px solid red" }}>
            <img src={imageUrl} width="100px" />
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
    );
}

/**
 * 
 * <div style={{ border: "2px solid red" }}>
            <img src={imageUrl} width="100px" />
            <h2>{title}</h2>
            <p>{price}</p>
        </div>


    React.createElement(
        "div", 
        {style:{ border: "2px solid red" } }, 
        React.createElement("img", {src: imageUrl, width: "100px"} ),
        React.createElement("h2", null, title),
        React.createElement("p", null, price)
    )
 */

export default Product;