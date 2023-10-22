import { Link, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { getBlogByIdFn } from "../../api/blogs";

import BlogDetail from "../Detail/BlogDetail";


const DetailView = () => {

  const {id} = useParams();

  const {
    data: blog, 
    isLoading, 
    isError
  } = useQuery({
    queryKey: ['blog-by-id'],
    queryFn: () => getBlogByIdFn(id),
  })

  if (isLoading){
    return (
    <>
    <h1 className="text-light text-center">Loading ...</h1>
    <hr />
    </>
    )
  }

  if(isError){
    return (
    <>
    <h1 className="text-light text-center">Error</h1>
    <hr className="text-light" />
    <div className="alert alert-danger">
    An error occurred loading this blog.
    </div>
    </>
    )
  }

  if(blog){
    return (
      <>
      <div className="text-light d-flex justify-content-between align-content-center">
      <h1 className="mb-0">{blog.title}</h1>
      <Link to='/' className="btn-back-home">Back to home</Link>
      </div>
      <hr className="text-light" />
      <BlogDetail blog={blog} />
      </>
    );
  }

  if(blog === null){
    return (
    <>
    <h1 className="text-light">Error</h1>
    <hr />
    <div className="alert alert-danger">
    The indicated blog was not found.
    </div>
    </>
    )
  }

return <></>;
}
export default DetailView;