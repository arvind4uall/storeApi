const SingleProduct = ({ item }) => {
  const { title, description, price, image } = item
  return (
    <article className="menu-item">
      <img src={image} alt={title} className="img" />
      <div className="item-info">
        <header>
          <span className="item-price">${price}</span>
          <h5>{title}</h5>
        </header>
        {/* <p className="item-text">{description}</p> */}
      </div>
    </article>
  )
}
export default SingleProduct
