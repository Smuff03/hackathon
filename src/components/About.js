import React from 'react'

const About = () => {
  return (
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
  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What do we do</h1>
      <p class="mb-8 leading-relaxed">
      We provide a wide range of charging solutions for electric vehicles. From residential and commercial charging stations to public charging networks, we have the solution for you. We also offer a variety of services, such as installation and maintenance, to ensure your charging station is working optimally.
      We are committed to providing the best customer experience. We strive to provide the most reliable and efficient charging solutions, while also offering a friendly and knowledgeable customer service team. We are passionate about helping our customers reduce their environmental impact.</p>
      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/aboutus.png"></img>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Know more about us</h1>
        
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="/product.png"></img>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Our Products</h2>
        <p class="text-base leading-relaxed mt-2">We offer a wide range of charging solutions for electric vehicles. From residential and commercial charging stations to public charging networks, we have the solution for you. We also offer a variety of services, such as installation and maintenance, to ensure your charging station is working optimally.
        Our products are designed to be energy efficient and reliable. We strive to provide innovative solutions that help reduce the environmental impact of electric vehicles. We are committed to providing the best customer experience and are passionate about helping our customers reduce their environmental impact.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="/ourservice.jpg"></img>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Our Services</h2>
          <p class="text-base leading-relaxed mt-2">We offer a variety of services to ensure your charging station is working optimally. We provide installation and maintenance services, as well as technical support and troubleshooting. We also offer educational resources to help our customer.We are committed to providing the best customer experience. We strive to provide the most reliable and efficient charging solutions, while also offering a friendly and knowledgeable customer service team. We are passionate about helping our customers reduce their environmental impact.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="mission.png"></img>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Our Mission</h2>
        <p class="text-base leading-relaxed mt-2">Our mission is to provide the most reliable and efficient charging solutions for electric vehicles. We strive to make the world a better place by providing clean and renewable energy to our customers. We are committed to offering the best customer experience by providing quality services.
        We are passionate about our work and strive to provide innovative solutions that help reduce the environmental impact of electric vehicles. We are dedicated to providing the best customer experience and are committed to making the world a better place by providing clean and renewable energy to our customers.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
</section>


  )
}

export default About