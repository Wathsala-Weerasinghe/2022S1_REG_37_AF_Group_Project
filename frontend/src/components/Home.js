import React from "react";

import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    if (this.first) return;
    this.first = true;
  }

  render() {
    return (
      <div>
        <br />
        <div className='pricing-header p-3 pb-md-4 mx-auto text-center'>
          <h3 className='display-6 fw-normal fst-italic'>
            Welcome to Research Project Management System!!!
          </h3>
          <p className='fs-5 text-muted fst-italic'>
            This is the system that your Research project team is looking for.
            RPMS has the capability of managing the Research project and
            automating the associated tasks.
          </p>
        </div>
        <br />
        <div
          id='carouselExampleSlidesOnly'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleSlidesOnly'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleSlidesOnly'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleSlidesOnly'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={slide1} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={slide2} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={slide3} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleSlidesOnly'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleSlidesOnly'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
        <br />
        <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
          <div className='col'>
            <div className='card mb-4 rounded-3 shadow-sm'>
              <div className='card-header py-3 bg-success'>
                <h4 className='my-0 fw-normal text-white'>Already a member?</h4>
              </div>
              <div className='card-body'>
                <h5 className='text-muted fw-dark'>
                  Login to perform following
                </h5>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>- Manage users/submition types/panels as Admins -</li>
                  <li>- Register topics as Students -</li>
                  <li>- Approve and Evaluate topics as Staff -</li>
                </ul>
                <a
                  type='button'
                  href='/login'
                  className='w-100 btn btn-lg btn-outline-success'
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card mb-4 rounded-3 shadow-sm'>
              <div className='card-header py-3 bg-warning'>
                <h4 className='my-0 fw-normal text-white'>
                  Are you a student?
                </h4>
              </div>
              <div className='card-body'>
                <h5 className='text-muted fw-dark'>
                  Register to perform following
                </h5>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>- Create student groups -</li>
                  <li>- Register research topics -</li>
                  <li>- Request Supervisor/Co-Supervisor -</li>
                </ul>
                <a
                  type='button'
                  href='/register/student'
                  className='w-100 btn btn-lg btn-outline-warning'
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card mb-4 rounded-3 shadow-sm'>
              <div className='card-header py-3 bg-primary'>
                <h4 className='my-0 fw-normal text-white'>
                  Are you a staff member?
                </h4>
              </div>
              <div className='card-body'>
                <h5 className='text-muted fw-dark'>
                  Register to perform following
                </h5>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>- Accept topics -</li>
                  <li>- Evaluate topics -</li>
                  <li>- Evaluate documents & presentations-</li>
                </ul>
                <a
                  type='button'
                  href='/register/staff'
                  className='w-100 btn btn-lg btn-outline-primary'
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
