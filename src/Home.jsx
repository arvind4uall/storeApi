import { useState } from 'react'
import customFetch from './utils'
import { toast } from 'react-toastify'

const Home = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !price || !description || !image || !category) {
      toast.error('Please enter value in all the field')
      return
    }
    toast.success('Product Added Successfully')
    setTitle('')
    setPrice('')
    setDescription('')
    setImage('')
    setCategory('')
  }
  return (
    <section className="home">
      <h4>Create Product</h4>
      <form className="create-product" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter product name"
        />
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="enter price"
        />
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="enter description"
        />
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="enter image url"
        />
        <input
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="enter category"
        />
        <button type="submit" className="btn">
          Create Product
        </button>
      </form>
    </section>
  )
}
export default Home
