import './style.css'

const BlogDetail = (props) => {
    const {blog} = props;

  return (
    <section className='text-light'>
      <img src={blog['image-url']} alt={blog.title} className="content-image"/>
      <p className="mb-0">{blog.content}</p>
      </section>
  )
}
export default BlogDetail