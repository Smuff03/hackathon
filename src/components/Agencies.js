import React, { useContext } from 'react'
import {
  Link
} from "react-router-dom";
import Datacontext from '../context/datacontext';
const Agiencies = () => {
  var context = useContext(Datacontext);
  var { agency } = context
  console.log(agency)
  return (
    <section className="text-gray-600 body-font">
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" class="object-cover object-center h-full w-full" src="caragency.jpg"></img>
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Rent a car</h2>
          <p class="leading-relaxed text-base">We have provided you these facility for you to rent a car whenever you require without wasting your time in surfing.You can rent any car you see fit by talking to the owner from the information provided to you by these website.Car rental services are usually provided by companies that own or lease a fleet of vehicles, which are made available to customers for hire. This can be a convenient option for people who need a vehicle for a short period of time, whether it be for business or leisure purposes. Car rental companies typically have a range of vehicles available to suit different needs and budgets, and may offer additional services such as insurance and roadside assistance</p>

        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Lend your car</h2>
          <p class="leading-relaxed text-base">Lending a car involves temporarily giving someone else permission to use your vehicle.When lending a car, it's important to ensure that the borrower has a valid driver's license and is insured to drive the vehicle. It's also a good idea to make sure they are familiar with the car's features and any specific driving instructions or guidelines.It's important to note that when you lend your car to someone else, you are also lending your car insurance coverage. If the borrower gets into an accident while driving your car, it could affect your insurance rates and coverage in the future. Therefore, it's important to trust the borrower and to have clear communication about the expectations and responsibilities involved in lending your car.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
     
    </div>
  </div>
</section>
      <div className="container px-5 py-15 mx-auto">
        <h1 className='text-2xl font-bold text-slate-500 mb-5'>Cafe Agencies near your current location :-</h1>
        <div className="flex flex-wrap -m-4">

          {agency && ((agency.map((note) => {

            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to="/agencies/agencies">
                  <a href='/' className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="./caragency.jpg" />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{note.name}</h2>
                    <p className="mt-1">
                      <span className="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-gray-600 ml-3">4 Reviews</span>
                      </span>
                    </p>
                  </div></Link>
              </div>
            );
          }
          )))}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to="/agencies/agencies">
                  <a href='/' className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="./caragency.jpg" />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                    <p className="mt-1">
                      <span className="flex items-center">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-gray-600 ml-3">4 Reviews</span>
                      </span>
                    </p>
                  </div></Link>
              </div>
          
        </div>
      </div>
    </section>
  )
}

export default Agiencies




