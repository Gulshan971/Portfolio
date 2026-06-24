import './App.css';
import Mypic from '../src/assets/Mypic.jpg' ;
function App(){

  return(
    <>
    <div className = "header" width = "100" height = "50%">
      <div className = "images">
        <div className = "imageBackdrop" width = "100%" height = "30">
            <img src="https://img.freepik.com/premium-photo/polyglot-language-enthusiast-surrounded-by-books-languagelearning-mate_1021867-24526.jpg?w=996" alt="Header-Info"/>
        </div>
        <div className = "myPic" width = "255" height = "100" >
            <img src = {Mypic} alt = "myPic" className = "profile-pic"/>
        </div>
      </div>
      <div className = "hbox" >
        <div className = "introduction" >
          <h1 className = "name">
            Gulshan Rajdev
          </h1>
          <p>
            GATE CSE 2026 QUALIFIED & TECH ENTHUSIAST
          </p>
        </div>
        <div className = "major-achievements">
          <h2 className = "interns">
            Zidio Internship 
          </h2>
          <h2 className = "clg">
            BBAU Lucknow
          </h2>
        </div>
      </div>  
      <h1 id = "heading">Carrer Objective</h1>
      <div className = "about-me">
          <div className = "primaryObj">
          <p>
            <strong>1</strong>
            I am a keen Java Developer with Library Management System Project build 
            and deployed using spring framework. 
          </p>
          </div>
          <div className = "secondaryObj">
          <p>
            <strong>2 </strong>
            I have registered in SIH 2025 for making ERP Based system for Rajasthan 
            Universities with centralised system for attendances , managing student , 
            teachers and allocating hostels. This provides a uniform payroll application 
            for timely delivery of fees. It cover everything from admisssion till
            convocation . Therefore to win <strong>SIH 2026</strong> is my biggest desire .
          </p>
          </div>
      </div>  
      <div className = "education">
        <h1 id = "heading">Eductional Qualifications</h1>
        <div className = "edu clg">
          <h2>
            BTECH CSE BBAU LUCKNOW 2023-2027
          </h2>
          <p>
            Maintained the 9 CGPA Throughout all semesters
          </p>
        </div>
        <div className = "edu twelfth">
          <h2>
            12th From Shri Vinayak Academy International Senior Secondary School 2022-2023
          </h2>
          <p>
           Got 95% with PCM
          </p>
        </div>
        <div className = "edu tenth">
          <h2>
            10th from Gurukulam Public School 2020-2021
          </h2>
          <p>
            Got 94.8%
          </p>
        </div>
      </div>
       <h1 id = "heading">KNOWLEDGE DOMAIN</h1>
      <div className= "skill">
        <div className="javaBased">
          <p>
            Java , Spring Boot , JDBC , RestAPI , Microservice
          </p>
        </div>
        <div className="pyBased">
          <p>
            Python3 , Seaborn , Numpy , Pandas and Scipy
          </p>
        </div>
      </div>
      <h1 id="heading">Hobbies</h1>
      <div className = "hobbies">
        <div className = "studyRelated">
            <p>
              Drawing , Coding , Reading , Expression Evaluation and Treasury Finding
            </p>
        </div>
        <div className="outdoorBased">
             <p>
              Swimming , Planting , Cycking , Hiking and Badminton and Horse-Riding 
             </p>
        </div>
      </div>
      <h1 id= "heading">Exposure</h1>
      <div className = "internship">
        <h2>Data Analyst Internship</h2>
         <p>Zidio Pvt Ltd.</p>
         <p>Process and clean 10 year data of Paypal about it's stock open and closing and
          created findings that suggest during pandemic it's surge has been widespread
         </p>
      </div>
      <h1 id="heading">Contact-Information</h1>
      <div className="contact-me">
        <div className="email">
          <p>Email : <a>gulshanrajdev47595@gmail.com</a> </p>
        </div>
        <div className="phone-no">
          <p>Mobile Number : 7985476928
          </p>
          {/* <p>7985476928</p> */}
        </div>
        <div className="github">
          <p>
            Github : 
            <a>
            http://github.com/gulshan971
          </a>
          </p>
         
        </div>
      </div>
    </div>
    </>
  )
}
export default App ;
