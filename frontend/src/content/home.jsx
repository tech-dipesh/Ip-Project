import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 flex flex-col items-center">
      <nav className="w-full fixed top-0 bg-gradient-to-r from-gray-800 to-gray-900 p-4 shadow-md flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold text-yellow-400 ml-6">Profil</h1>
        <div className="flex space-x-6">
          <a href="html.html" className="hover:text-yellow-400">Home</a>
          <a href="Feedback.html" className="hover:text-yellow-400">Feedback</a>
          <a href="terms.html" className="hover:text-yellow-400">Terms</a>
        </div>
        <Link to="/login" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 mr-6">Sign In</Link>
      </nav>

      <section className="container mx-auto mt-28 p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-yellow-400">Why Use Profil?</h2>
          <p className="mt-4">
            Profil helps users improve their resumes by providing expert analysis and feedback, optimizing them for job applications.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center"><span className="text-yellow-400">•</span> Get instant feedback on resume formatting and content.</li>
            <li className="flex items-center"><span className="text-yellow-400">•</span> Receive AI-powered suggestions for improvement.</li>
            <li className="flex items-center"><span className="text-yellow-400">•</span> Optimize resumes for ATS (Applicant Tracking Systems).</li>
            <li className="flex items-center"><span className="text-yellow-400">•</span> Increase job interview chances.</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="Untitled-1.png" alt="Profil Image" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
        </div>
      </section>

      {/* Upload Section */}
      <section className="container mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center">
          <h3 className="text-xl text-yellow-400">Upload your resume to get expert feedback.</h3>
        </div>
        <div className="flex-1 text-center">
          <h2 className="text-2xl text-yellow-400 mb-4">Upload Your Resume</h2>
          <input type="file" accept=".pdf,.doc,.docx" className="bg-gray-700 text-white p-2 rounded-md" />
          <br />
          <button className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500">Upload</button>
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-xl text-yellow-400">Ensure your resume is optimized for job applications.</h3>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-yellow-400">What Our Users Say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <p>"Profil transformed my resume! I got multiple interview calls after using their feedback."</p>
            <p className="text-yellow-400 font-bold mt-2">- Jane D.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <p>"The AI suggestions were spot on. I highly recommend Profil!"</p>
            <p className="text-yellow-400 font-bold mt-2">- John S.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
            <p>"The platform is easy to use, and the feedback is incredibly helpful. Thank you, Profil!"</p>
            <p className="text-yellow-400 font-bold mt-2">- Sarah L.</p>
          </div>
        </div>
      </section>

      <footer className="w-full mt-10 p-8 bg-gray-900 text-gray-300">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-yellow-400 text-xl font-bold">Profil</h2>
            <p>The best platform for resume analysis.</p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold">Contact</h3>
            <p>Email: support@profil.com</p>
            <p>Phone: +123 456 7890</p>
            <p>123 Street, City, Country</p>
            <a href="#" className="text-yellow-400 hover:text-yellow-500">See on Map →</a>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold">Want to improve your resume?</h3>
            <a href="html.html" className="text-yellow-400 hover:text-yellow-500">Sign Up for Our Newsletter →</a>
          </div>
          <div>
            <h3 className="text-yellow-400 font-bold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" className="w-6 hover:scale-110 transition-transform" /></a>
              <a href="#"><img src="instagram-icon.png" alt="Instagram" className="w-6 hover:scale-110 transition-transform" /></a>
              <a href="#"><img src="twitter-icon.png" alt="Twitter" className="w-6 hover:scale-110 transition-transform" /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
