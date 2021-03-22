class Product {
    constructor(product_id, category_id, product_name,price, product_description, 
        sizes,color, imgSrc, stock){
        this.product_id = product_id;
        this.category_id = category_id;
        this.product_name = product_name;
        this.price = price;
        this.product_description = product_description;
        this.sizes = sizes ;
        this.color = color;
        this.imgSrc = imgSrc;
        this.stock = stock;
    }
}