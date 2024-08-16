import "../style css/Resume.css"
export function Resume() {
    return (
      <> 
        <div className="container">
          <div className="titleResume">
            <h1>My Resume</h1>
          </div>       
          <div className="education">
            <div>
              <div> 
                  <h2>UCF</h2>
                  <p>University Of Central Florida</p>
              </div>
              <div>
                  <h2>PUC</h2>
                  <p>Pontifícia Uni. Católica do Brazil</p>
              </div>
              <div>
                  <h2>Udemy</h2>
                  <p>Self-pace Online School</p>
              </div>        
              <h1>Education</h1>
            </div>        
          </div>
          <div className="experience">
          <div>
              <div> 
                  <h2>Web Developer</h2>
                  <p>Front and back end websites</p>
              </div>
              <div>
                <h2>Instructor</h2>
                <p>math, engineering, & languages</p>
              </div>
              <div>
                  <h2>Engineer</h2>
                  <p>Airfield & Water waste treatment</p>
              </div>        
                <h1>Experience</h1>
              </div>        
          </div>
        <div className="leadership">
          <div>
              <div> 
                  <h2>Owner</h2>
                  <p>Konesans Pou Lakay</p>
              </div>
              <div>
                  <h2>Owner</h2>
                  <p>Tradisyon Lakay</p>
              </div>
              <div>
                  <h2>Board Member</h2>
                  <p>Ouvè Je w Inc</p>
              </div>
              <div>
                  <h2>Former - Dist. Leader</h2>
                  <p>SALT Inc</p>
              </div>                    
              <h1>Leadership</h1>
          </div>        
        </div>
        <div className="web">
          <div> 
              <h2>React</h2>
              <h2>Javascript</h2>
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>Python</h2>                   
              <h1>Website Skills</h1>
          </div>
        </div>
        <div className="language">
          <div> 
              <h2>Ayisyen</h2>
              <h2>English</h2>
              <h2>Português</h2>
              <h2>Español</h2>
              <h2>Français</h2>
              <h2>Русский</h2>        
              <h1>Linguistic Skills</h1>
          </div>
        </div>
        <div className="engineering">
          <div> 
              <h2>Circuit Design</h2>
              <h2>Cad</h2>                    
              <h1> Engineering Skills</h1>
          </div>
        </div>
      </div>      
    </>
  ) 
}