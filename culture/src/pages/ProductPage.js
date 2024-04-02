import ProductCard from "../components/ProductCard";

const ProductPage = () => {
    return (
        <div className="product-page">
            <h1 id="products">Products</h1>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}

export default ProductPage;