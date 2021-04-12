
import { Component } from 'react';


class Body extends Component
{
  render()
  {
    return (
        <div className="page-content">
        <div className="container">
          <div className="cover shadow-lg bg-white">
            <div className="cover-bg p-3 p-lg-4 text-white">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <div className="avatar hover-effect bg-white shadow-sm p-1"><img src="images/yopaintt.png" width={200} height={200} /></div>
                </div>
                <div className="col-lg-8 col-md-7 text-center text-md-start">
                  <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay={0}>Carlos Rodríguez</h2>
                  <p data-aos="fade-left" data-aos-delay={100}>Desarrollador Backend</p>
                </div>
              </div>
            </div>
            <div className="about-section pt-4 px-3 px-lg-4 mt-1">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="h3 mb-3">Acerca de mi</h2>
                  <p>Soy desarrollador backend con conocimientos en .NET , Java, Javascript y programación orientada a objetos.</p>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="row mt-2">
                    <div className="col-sm-4">
                      <div className="pb-1">Edad</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">27</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">Email</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">rwkamandriw@gmail.com</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">Teléfono</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">(+598)94234538</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">Localidad</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">Santa Lucía, Canelones, Uruguay</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="skills-section px-3 px-lg-4">
              <h2 className="h3 mb-3">Habilidades</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2"><span>C# (ASP.NET, Windows Forms, Xamarin, .NET Core)</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay={100} data-aos-anchor=".skills-section" style={{width: '65%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="mb-2"><span>Java</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay={200} data-aos-anchor=".skills-section" style={{width: '40%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="mb-2"><span>Javascript (NodeJS, Typescript, Express)</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay={300} data-aos-anchor=".skills-section" style={{width: '60%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2"><span>Visual Studio</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={400} data-aos-anchor=".skills-section" style={{width: '70%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="mb-2"><span>Base de Datos (SQL Server, MySQL, MongoDB)</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={500} data-aos-anchor=".skills-section" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="mb-2"><span>Git</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={600} data-aos-anchor=".skills-section" style={{width: '50%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="mb-2"><span>HTML</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={600} data-aos-anchor=".skills-section" style={{width: '60%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="mb-2"><span>CSS</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={600} data-aos-anchor=".skills-section" style={{width: '40%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div className="mb-2"><span>Inglés</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay={600} data-aos-anchor=".skills-section" style={{width: '50%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-section px-3 px-lg-4 pb-4">
              <h2 className="h3 mb-4">Educación</h2>
              <div className="timeline">
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">Analista de Sistemas <span className="text-muted h6">en Escuela de Sistemas y Tecnologías BIOS</span></div>
                    <div className="text-muted text-small mb-2">2014 - 2020</div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">Bachillerato <span className="text-muted h6">en Liceo Nº1 «Santos Rabaquino Pacini»</span></div>
                    <div className="text-muted text-small mb-2">2006 - 2012</div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
          </div>
        </div>
      </div>
      
      
    )
  }
}
export default Body;