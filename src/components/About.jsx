import React from 'react'
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className="container py-5 my-6">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className="lead mb-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, cum quam minus rerum natus doloribus labore animi optio, laboriosam nulla sit alias reiciendis aut esse libero delectus amet? Minima dolorem nihil fugiat temporibus porro nulla labore fugit quibusdam provident. Vel quidem, perspiciatis ipsum mollitia perferendis hic? Hic nihil dolore repudiandae non eum omnis voluptas officiis modi vel et culpa sequi tempora inventore iure, voluptates suscipit fugit. Velit amet officiis qui quae voluptate maxime labore ipsam id sequi possimus commodi aspernatur ducimus nostrum distinctio, dicta nihil vero tempora. Explicabo illum delectus facere ab nihil quod eligendi asperiores, suscipit perspiciatis modi placeat.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3"> Contact Us</NavLink>
          </div>
          <div className="col-md-6  d-flex justify-content-center py-5">
            <img src="/image/tem2.jpg" alt="temwork" height="300px" width="500px" />
          </div> 
        </div>
      </div>
    </>
  )
}

export default About;