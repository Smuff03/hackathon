import React from 'react'
import {
  Link
} from "react-router-dom";
const Mechanic = () => {
  
  return (
    
    <section className="text-gray-600 body-font">
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="/about_us.jpg"></img>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who are we
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed">We are a team of electric station enthusiasts. Our mission is to provide the most reliable and efficient charging solutions for electric vehicles. We strive to make the world a better place by providing clean and renewable energy to our customers.
      We are committed to offering the best customer experience by providing quality products and services. We are passionate about our work and strive to provide innovative solutions that help reduce the environmental impact of electric vehicles.</p>
      
    </div>
  </div>
  </section>
  <div className="container px-5 py-24 mx-auto">
  <h1 className='text-2xl font-bold text-slate-500 mb-5'>Vehicle repair near your current location :-</h1>
    
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div>
      </Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div></Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div></Link>
        </div> 
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div></Link>
        </div>
         <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div></Link>
        </div>
    </div>
  </div>
</section>
  )
}

export default Mechanic