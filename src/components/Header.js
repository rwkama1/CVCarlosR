
import { Component } from 'react';

class Header extends Component
{
  render()
  {
    return (
        <header className="d-print-none">
        <div className="container text-center text-lg-left">
          <div className="py-3 clearfix">
            <div className="site-nav">
              <nav role="navigation">
                <ul className="nav justify-content-center">
                  <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/carlos-andr%C3%A9s-rodr%C3%ADguez-p%C3%A9rez-6b3424191/" title="Linkedin"><i className="fab fa-linkedin-in" /><span className="menu-title sr-only">Linkedin</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://github.com/rwkama1" title="Github"><i className="fab fa-github" /><span className="menu-title sr-only">Github</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.npmjs.com/~rwkama28" title="NPM"><i className="fab fa-npm" /><span className="menu-title sr-only">Npm</span></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/carlosandres.rodriguezperez.3" title="Facebook"><i className="fab fa-facebook" /><span className="menu-title sr-only">Facebook</span></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      
    )
  }
}
export default Header;
