import { useQuery } from '@tanstack/react-query'
import customFetch from './utils'
import SingleProduct from './SingleProduct'

const Products = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await customFetch.get('/')
      return data
    },
  })
  if (isLoading) {
    return <h2>Loading...</h2>
  } else if (isError) {
    return <h2>There was an error....</h2>
  }
  console.log(data)
  return (
    <div className="section-center">
      {data.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  )
}
export default Products
