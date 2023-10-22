import { useQuery } from '@tanstack/react-query';

import { getBlogsFn } from '../../api/blogs';

import './Ejercicio14.css'
import BlogItem from '../Home/BlogItem';


// ---------------------------
// Ejercicio 14: Crea una aplicación web, que permita mostrar un blog de recetas de cocina en una
// página, desde otra pagina debo poder agregar, modificar o quitar las recetas y
// estas deben estar almacenadas en el localstorage o json-server.
// ---------------------------

const HomeView = () => {

  const 
  {data: blogs, 
    isLoading, 
    isError} 
    = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogsFn,
  })

  if (isLoading){
    return (
      <h3 className='mt-3 text-light text-center'>Loading ...</h3>
    )
  }

  if (isError){
    return (
      <div className='mt-3 alert alert-danger'>An error occurred loading the blogs.</div>
    )
  }

  if(blogs){
    return (
      <section className="row mt-3">
        {blogs.map((blog) => (
        <BlogItem key={blogs.id} blog={blog} />
        ))}
      </section>
    );
  }

  return <></>;
};

export default HomeView;