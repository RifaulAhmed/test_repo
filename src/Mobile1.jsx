import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Slider from 'react-slick';
import CNavbar from './CNavbar'
import PopupForm from './PopupForm';
import {Helmet} from "react-helmet";
// import image9 from './assets/image9.png'
// import image10 from './assets/image10.png'
// import image11 from './assets/image11.png'
// import image12 from './assets/image12.png'
// import image13 from './assets/image13.png'
// import image14 from './assets/image14.png'
// import image15 from './assets/image15.png'
// import image16 from './assets/image16.png'
// import image17 from './assets/image17.png'
// import image18 from './assets/image18.png'
// import image19 from './assets/image20.png'
// import image20 from './assets/image21.png'
// import image21 from './assets/image22.png'
// import image22 from './assets/image23.png'
// import image23 from './assets/image24.png'
// import image24 from './assets/image25.png'
import Solutions from './Solutions';
import './Form1.css'
// import FaqPage from './FaqPage'
import Footer from './Footer'
import HomeTestimonials from './HomeTestimonials';
import HomeFaq from './HomeFaq';
import HomeSlider from './HomeSlider';
import MobileCard from './MobileCard';

const Mobile1 = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  }

  const cardsData = [
    { title: "Flutter App Development", description: "Flutter development involves using the Flutter framework, created by Google, to build cross-platform mobile applications with a single codebase. It enables developers to create high-performance apps with a rich set of customizable widgets and a reactive UI framework." },
    { title: "React Native App Development", description: "React Native app development involves utilizing the React Native framework, developed by Facebook, to build cross-platform mobile applications using JavaScript and React. It enables developers to create native-like experiences for both iOS and Android platforms with a single codebase." },
    { title: "iOS App Development", description: "iOS app development involves using Apple's Swift or Objective-C programming languages and the Xcode IDE to create native applications exclusively for Apple's iOS devices, such as iPhones and iPads. Developers leverage Apple's frameworks and design guidelines to craft user-friendly and high-performance apps tailored for the iOS ecosystem." },
    { title: "Android App Development", description: "Android app development involves using Java or Kotlin programming languages and the Android Studio IDE to create native applications for Android devices, catering to a wide range of screen sizes and hardware specifications. Developers leverage Android's robust SDK, libraries, and Material Design guidelines to build engaging and versatile apps for the Android platform." },
    { title: "Cross Plateform App Development", description: "Cross-platform app development involves using frameworks like React Native, Flutter, or Xamarin to build applications that can run on multiple platforms, such as iOS, Android, and sometimes even web, using a single codebase. It enables developers to reach a broader audience efficiently while minimizing development time and costs. " },

  ];

  const testimonials = [
    {
      id: 1,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png',
      name: 'Rifaul',
      text: 'Experience top-tier service with Mohit & his team! Reputed for their exceptional problem-solving skills, delivering excellence for 2 years!'
    },
    {
      id: 2,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg',
      name: 'Yachna',
      text: 'Experience exceptional software development and customer support with lightning-fast response times. Great overall experience!.'
    },
    {
      id: 3,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg',
      name: 'Sakshi',
      text: 'Appreciable efforts and customer support are very good, It is very valuable for the business to continue to improve!.'
    },
    {
      id: 4,
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png',
      name: 'Kuldeep',
      text: 'The team stood out because of their swift response time and patience. Bellway infotech provided one contact person!.'
    }
  ];

  const technologies = [
    { id: 1, image: 'https://api.otakoyi.software/uploads/content/2023/11/20/1280/best-laravel-based-cms-that-you-should-know-224x171.webp', name: 'Tech 1', title: 'Laravel' }, // Replace with actual URLs
    { id: 2, image: 'https://i.pinimg.com/236x/9c/65/bd/9c65bd67c0a9685a6e8121c0ad3694e3.jpg', name: 'Tech 2', title: 'Laravel' },
    { id: 3, image: 'https://w7.pngwing.com/pngs/414/85/png-transparent-nodejs-javascript-runtime-backend-node-js-logo-3d-icon.png', name: 'Tech 3', title: 'Laravel' },
    { id: 4, image: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png', name: 'Tech 4', title: 'Laravel' },
    { id: 5, image: 'https://static-00.iconduck.com/assets.00/applications-java-icon-2048x2026-4gh120pq.png', name: 'Tech 5', title: 'Laravel' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEy7NDZaJgOuppMzPYrA32_z6IHI777Tn9g&s', name: 'Tech 6', title: 'Laravel' },
    { id: 7, image: 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg', name: 'Tech 7', title: 'Laravel' },
    { id: 8, image: 'https://i.pinimg.com/736x/7f/63/64/7f63644d631600cb5c3fcec87332a5a4.jpg', name: 'Tech 8', title: 'Laravel' }
  ];

  // const images = [
  //   image9,
  //   image10,
  //   image11,
  //   image12,
  //   image13,
  //   image14,
  //   image15,
  //   image16,
  //   image17,
  //   image18,
  //   image19,
  //   image20,
  //   image21,
  //   image22,
  //   image23,
  //   image24,
  //   "https://www.appslure.com/wp-content/uploads/2021/10/04-300x120-1.webp",
  //   "https://www.appslure.com/wp-content/uploads/2021/10/03-min-300x120-1.webp",
  // ];

  return (
    <>
      <Helmet>
                <title>Mobile Application Development | Service - BELLWAY INFOTECH</title>
                <meta name="description" content="Discover Bellway Infotech's comprehensive mobile application development services. From concept to deployment our team delivers best solutions for your business." />
        
            </Helmet>
      <CNavbar />
      <div class="containerx mx-auto  bg-black p-8">
        <div class="flex flex-col md:flex-row items-center mt-28">
          <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
            <h1 class="sm:text-6xl font-bold mb-4 text-white">Mobile Application Development...</h1>
            <h3 class="sm:text-2xl text-white">
              <Link to="/" class="text-red-600 hover:underline">Home</Link> /Mobile Application Development
            </h3>
          </div>
          <div class="md:w-1/2 h-full mb-9 text-right">
            <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZHxlbnwwfHwwfHx8MA%3D%3D" alt="About Image" class="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="main-page">
        <button className="contact-button" onClick={togglePopup}>Contact <i class="fa-solid fa-phone-volume"></i></button>
        {isPopupVisible && <PopupForm onClose={togglePopup} />}
      </div>

      <MobileCard/>

      <div className='se'>
        <h1 className='tag4' >Mobile App Development Services</h1>
      </div>

      <div className="container899">
        {cardsData.map((card56, index) => (
          <div className="card56" key={index}>
            <h2>{card56.title}</h2>
            <p className='scroll'>{card56.description}</p>
          </div>
        ))}
      </div>

      <Solutions/>
      <HomeSlider/>


      {/* <div className='se' style={{ marginTop: "100px" }} >
        <h1 className='tag' >We Have Worked For</h1>
      </div> */}

      {/* <div class="container8" style={{ marginTop: "60px" }}>

        <div class="card"><img src={image9} alt="Image 1" /></div>
        <div class="card"><img src={image10} alt="Image 2" /></div>
        <div class="card"><img src={image15} alt="Image 3" /></div>
        <div class="card"><img src={image12} alt="Image 4" /></div>
        <div class="card"><img src={image13} alt="Image 5" /></div>
        <div class="card"><img src={image14} alt="Image 6" /></div>
        <div class="card"><img src={image11} alt="Image 7" /></div>
        <div class="card"><img src={image16} alt="Image 8" /></div>
        <div class="card"><img src={image17} alt="Image 8" /></div>
        <div class="card"><img src={image18} alt="Image 8" /></div>
        <div class="card"><img src={image19} alt="Image 8" /></div>
        <div class="card"><img src={image20} alt="Image 8" /></div>
        <div class="card"><img src={image21} alt="Image 8" /></div>
        <div class="card"><img src={image22} alt="Image 8" /></div>
      </div> */}

      <HomeTestimonials/>


      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-wrap">

          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Trusted Web & Mobile App Development Company</h2>
            <p className="mt-10">If you have any questions, feel free to reach out. We are here to help you with any queries you may have.</p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Our Office</h3>
              <p>1234 Street Name<br />City, State, ZIP Code</p>
            </div>
            <div className='mt-6'>
              <h3 className="text-xl font-semibold">Call Us Now at : </h3>
              <p>contact@company.com</p>
            </div>
          </div>


          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
            <form>
              <div className="mb-4 flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                  <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" required />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                  <input className="w-full px-3 py-2 border rounded" type="tel" id="phone" name="phone" required />
                </div>
              </div>
              <div className="mb-4 flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" required />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <label className="block text-sm font-medium mb-1" htmlFor="service">Service</label>
                  <select className="w-full px-3 py-2 border rounded" id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="consultation">Consultation</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows="4" required></textarea>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "-10px" }}>
        <HomeFaq/>
      </div>

      <Footer />
    </>
  )
}

export default Mobile1;