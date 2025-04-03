import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBolt, FaBrain, FaCamera } from "react-icons/fa";
import pexel1 from "../assets/pexel 1.jpg";
import cover5 from "../assets/cover5.jpeg"
import uploadImg from "../assets/upload.png";
import analysisImg from "../assets/Analysis.png";
import resultImg from "../assets/Search.png";

const LandingPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
<div className="bg-gray-50 min-h-screen">

{/* Header Section */}
<header className="relative h-[550px] rounded-[2rem] overflow-hidden mx-auto max-w-[1420px] my-12 shadow-lg">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${cover5})` }}
  ></div>

  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end justify-start px-12 py-20">
    <div className="text-left text-white">
      <h1 className="text-5xl font-bold leading-tight mb-6">
        Identify Stampede Risk <span className="text-orange-600">Effortlessly</span>
      </h1>
      <p className="text-xl mb-8 text-gray-200">
      Monitor crowd density in real time and predict potential stampede risks with<br/> AI-powered insights. Stay ahead with smart alerts for safer event management.<br/>
      </p>
      <div className="flex space-x-6">
        <Link
          to="/upload"
          className="bg-orange-600 text-white px-14 py-3 rounded-full font-semibold shadow-md hover:bg-green-800 transition-colors"
        >
          Get Started
        </Link>
        <Link
          to="/about"
          className="border border-white text-white px-14 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</header>

{/* Features Section */}
<section id="why-our-system" className="py-20 px-8 text-center bg-white">
  <h2 className="text-4xl font-bold text-gray-800 mb-16">Why Use Our System?</h2>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
    {[
      { icon: FaBolt, title: "Robust & Accurate", text: "Get accurate stampede risk prediction in a jiffy!" },
      { icon: FaBrain, title: "Hrybrid-model Powered Analysis", text: "Advanced algorithms and models analyze the video sample and alerts about stampede risk." },
      { icon: FaCamera, title: "Easy to Use", text: "Upload the surveillance video, and our system handles the rest." }
    ].map((feature, index) => (
      <div key={index} className="bg-gray-50 rounded-3xl shadow-md p-12 flex flex-col items-center hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-orange-200 mb-10">
          <feature.icon className="text-orange-700 text-5xl" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">{feature.title}</h3>
        <p className="text-gray-700 leading-relaxed">{feature.text}</p>
      </div>
    ))}
  </div>
</section>

{/* How We Work Section (Card-Based Design) */}
<section className="bg-gray-100 py-24 px-8 text-center">
  <h2 className="text-4xl font-bold text-gray-800 mb-12">How We Work</h2>
  <p className="text-lg text-gray-600 mb-16">A quick and simple 3-step process to detect stampede risk.</p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      { step: "Upload", img: uploadImg, text: "Choose the best footage overlooking crowd/risk areas." },
      { step: "Analyze", img: analysisImg, text: "Our Hybrid DL model processes the video." },
      { step: "Results", img: resultImg, text: "Analysis of the video and Stampede Risk Assessment displayed." }
    ].map((item, index) => (
      <div key={index} className="bg-white rounded-xl shadow-md p-10 flex flex-col items-center hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-irange-100 mb-8">
          <span className="text-4xl font-bold text-orange-700">{`0${index + 1}`}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{item.step}</h3>
        <img src={item.img} alt={item.step} className="w-52 h-44 object-contain mb-8" />
        <p className="text-gray-700 leading-relaxed text-center">{item.text}</p>
      </div>
    ))}
  </div>
</section>

{/* Call-to-Action (CTA) Section */}
<section className="bg-orange-700 text-white py-12 text-center">
  <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
  <p className="text-xl max-w-2xl mx-auto mb-8">Experience the power of deep learning for stampede detection. Upload your sample and get instant results!</p>
  <div className="flex justify-center space-x-6">
    <Link to="/upload" className="bg-white text-orange-800 px-14 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors">
      Upload Now
    </Link>
  </div>
</section>

{/* FAQs Section */}
<section className="bg-white py-20 px-8">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">FAQs</h2>
  <div className="mt-10 max-w-2xl mx-auto">
    {[
        {
          question: "What is this system used for?",
          answer: "This system helps users to ascertain stampede and risk of stamepede using deep learning techniques. Simply upload the local video file, and the system will predict the risk of stampede.",
        },
        {
          question: "How do I use the stampede risk assessment system?",
          answer: "1. Click the \"Upload Image\" button.<br>2. Select a clear photo of the wood sample.<br>3. Click \"Predict\" to process the image.<br>4. The system will display the species name and confidence score.",
        },
        {
          question: "What video formats are supported?",
          answer: "The system supports MP4, and AVI formats. Ensure the video is clear and well-lit for better accuracy.",
        },
        {
          question: "How accurate is the prediction?",
          answer: "The system model accuracy is 90% and performs well even in dim-lit conditions. The team is working for even better accuracies.",
        },
        {
          question: "Can I use this system on my phone?",
          answer: "Yes! The system is mobile-friendly and works on both desktop and mobile devices.",
        },
        {
          question: "What should I do if the prediction is incorrect?",
          answer: "- Ensure the video is clear and well-focused.<br>- Try adjusting the camera to attain good lighting.<br>- Reposition the camera for a better angle of the crowd.",
        },
        {
          question: "Is my data stored after I upload my video?",
          answer: "No, the system does not store any of your videos. Uploaded files are only used for prediction and are deleted immediately after processing.",
        },
    ].map((faq, index) => (
      <div key={index} className="border-b py-5">
        <button onClick={() => toggleFAQ(index)} className="w-full text-left text-lg font-semibold flex justify-between">
          {faq.question}
          <span className="text-green-600">{openFAQ === index ? "−" : "+"}</span>
        </button>
        {openFAQ === index && (
  <p className="mt-3 text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }} />)}
      </div>
    ))}
  </div>
</section>
</div>
);
};

export default LandingPage;