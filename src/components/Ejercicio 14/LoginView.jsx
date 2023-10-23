import LoginForm from "../Login/LoginForm";

const LoginView = () => {
  return (
    <section className="container mb-4 text-center">
    <h1 className="text-light mt-5 fw-bold">Welcome</h1>
    <hr className="text-light" />
    <div className='bg-light rounded p-4 '>
      <article className='row'>
        <div className='col-12 col-md-6 mb-2'>
        <LoginForm />
        </div>
        <div className='col-12 col-md-6'>
          <img
            src='https://i.postimg.cc/tgRz5YRm/la-cocinita-de-Eze.jpg'
            alt='La cocinita de Ezequielito'
            className='w-75 rounded'
          />
        </div>
      </article>
    </div>
  </section>
  )
}
export default LoginView;