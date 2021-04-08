import PropTypes from 'prop-types'
import React from 'react'
import pic03 from '../images/pic03.jpg'
import nr_logo from '../images/newrelic_logo.png'
import k3s_logo from '../images/k3s_logo.png'
import k3s_page from '../images/k3s_page.png'
import pathpoint_1 from '../images/pathpoint_img1.png'
import pathpoint_2 from '../images/pathpoint_img2.jpeg'
import pathpoint_3 from '../images/pathpoint_img3.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="major">Intro</h2>
          <p>
            I'd love to combine my passion as Infrastructure Engineer with my software development skills
            to continue building amazing technological solutions for people.
          </p>
          <p>
            <div style={{ display: 'flex' }}>
              <img src={nr_logo} style={{ background: '#cccccc', width: '15%', height: '15%' }} alt="" />
              <div style={{ paddingLeft: '10px' }}>
                <p>I am working as a development leader for "Pathpoint" a very interesting open-source project for New Relic® One Platform.<br></br>
                "Pathpoint" is an enterprise platform tracker that models system health in relation to actual user-impacting business stages.<br></br>
                  <a href='https://github.com/newrelic/nr1-pathpoint' target='_blank'>https://github.com/newrelic/nr1-pathpoint</a>
                </p>
              </div>
            </div>
          </p>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>


        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="major">Work</h2>
          <p>
            <div><strong>Observability Data Director at Wigilabs</strong></div>
            <ul>
              <li>Observability Projects Direction</li>
              <li>REACT Applications Development Direction</li>
              <li>Telemetry Data Integration Direction</li>
              <li>Custom Telemetry Integrations Development</li>
              <li>Newrelic One Platform Projects Lead</li>
            </ul>
          </p>
          <p>
            <div><strong>Senior Manager Infrastructure at FedEx CrossBorder</strong></div>
            <ul>
              <li>Design of the FedEx Cross Border infrastructure in Azure.</li>
              <li>Manage the migration process to the cloud - Zero Downtime</li>
              <li>Perimeter security network design in Azure </li>
              <li>Manage GNU/Linux (Red Hat, Ubuntu, CentOS) Hardening.</li>
              <li>Manage the improving processes of release engineering.</li>
              <li>Manage Penetration Testing</li>
              <li>Manage the Infrastructure as a Code Implementation.</li>
              <li>PCI Compliance</li>
              <li>Always implementing new technologies with new philosophies.</li>
            </ul>
          </p>
          <p>
            <div><strong>Senior Software Developer at Bongo International</strong></div>
            <ul><li>Development and implementation of applications for logistic control, integration
            with peripherals and order processing for corporate warehouses in Tampa FL,
              Carsen CA, Brussels BE, London UK.</li>
              <li>AWS cloud virtual network architecture design and implementation.</li>
              <li>MySQL Database Servers Administration.</li>
              <li>Application Servers Administration.</li>
              <li>Internal Logistics web application development.</li>
            </ul>
          </p>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>


        </article>

        <article
          id="demos"
          className={`${this.props.article === 'demos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="major">Demos</h2>
          <p>
            <strong>Pathpoint</strong>
            <ul>
              <li><a href="https://github.com/newrelic/nr1-pathpoint" target='_blank'>Pathpoint Open Source Project</a></li>
            </ul>
          </p>
          <p>
            <strong>PHP Laravel</strong>
            <ul>
              <li><a href="https://demos.rsamanez.com/questionnaire-survey/" target='_blank'>Questionnaire-Survey App</a></li>
              <li><a href="https://github.com/rsamanez/BookLibrary" target='_blank'>Laravel 6 Book Library Project</a></li>
              <li><a href="https://github.com/rsamanez/apiAuth" target='_blank'>PHP Laravel Passport Authentication REST API</a></li>
              <li><a href="http://enigmatic-island-95769.herokuapp.com" target='_blank'>freecodecamp clone project</a></li>
            </ul>
          </p>
          <p>
            <strong>AWS Serverless</strong>
            <ul>
              <li><a href="https://s32jqca7jl.execute-api.us-east-1.amazonaws.com/dev/" target='_blank'>PHP Laravel Demo</a></li>
              <ul>
                <li><a href="https://github.com/rsamanez/bref-laravel-dem" target='_blank'>Git Project</a></li>
              </ul>
            </ul>
          </p>


          <p>
            <strong>Arduino Apps</strong>
            <ul>
              <li><a href="https://github.com/rsamanez/arduino-nano/tree/master/3servoRoboticArm" target='_blank'>3 servo Robotic Arm</a></li>
              <li><a href="https://github.com/rsamanez/arduino-ESP8266/blob/master/ESP-01-MODULE.md" target='_blank'>ESP8266 Flashing Firmware</a></li>
            </ul>
          </p>
          <p>
            <strong>Custom Drivers for ODROID XU4 - Ubuntu Linux 18.04 LTS</strong>
            <ul>
              <li><a href="https://github.com/rsamanez/odroid-drivers" target='_blank'>MB1242 I2CXL-MaxSonar-EZ Driver</a></li>
            </ul>
          </p>
          <p>
            <strong>Assembler x64 Program</strong>
            <ul>
              <li><a href="https://github.com/rsamanez/BigFactorial" target='_blank'>Assembler x64 Calculate factorial up to 40000</a></li>
              <li><a href="https://github.com/rsamanez/QuickSort" target='_blank'>Assembler x64 Program to sort a random array with 1'000,000 elements</a></li>
              <li><a href="https://github.com/rsamanez/assemblerx64" target='_blank'>Assembler x64 Samples</a></li>
            </ul>
          </p>

          <span className="image main">
            <img src={pic03} alt="" />
          </span>


        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="major">About</h2>
          <p>
            <div>I am an Electronic Engineer with more than 20 years of experience.
            With extensive knowledge of software design and development.
            </div>
            <div>
              I have done many projects for the logistics industry and electronic commerce,
              I worked for FedEx Cross Border - Bongo International
              for more than 10 years. I have experience with PHP, doing many REST APIs. MS-Windows
              client-server desktop applications and interface with electronic devices.
            </div>
            <div>
              Experience as Mysql Database Administrator, enough experience as Linux operating
              system administrator.
            </div>
            <div>
              More than four years managing Cloud Infrastructure (IaaS).
            </div>
            <div>
              I am very good solving problems using the latest advances in technology.
            </div>
            <div>
              Technology advances day by day, that is why you have to be constantly learning.
            </div>
          </p>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>


        </article>

        <article
          id="articles"
          className={`${this.props.article === 'articles' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          {close}
          <h2 className="major">Articles</h2>

          <p>
            <div style={{ display: 'flex' }}>
              <img src={nr_logo} style={{ background: '#cccccc', width: '15%', height: '15%' }} alt="" />
              <div style={{ paddingLeft: '10px',width: '450px;' }}>
                <p><strong><a href='https://discuss.newrelic.com/t/workflow-monitoring-with-new-relic-one-pathpoint/141341' target='_blanck'>Workflow Monitoring with New Relic ONE Pathpoint</a></strong><br></br>
                Your Business is made up of various operational journeys. How well you capture and visualize each of them, will be the true measure of profit and loss.<br></br>Understanding the business journey is complex.
                <span className="image main">
                    <img src={pathpoint_1} alt="" />
                </span>
                Leveraging existing telemetry for what we call Omni Observability.
                <span className="image main">
                    <img src={pathpoint_2} alt="" />
                </span>
                Visualizing workflows in an easy-to-follow and understand the process flow.
                <span className="image main">
                    <img src={pathpoint_3} alt="" />
                </span>
                <strong>Requirements</strong><br></br>
                    The New Relic ONE Pathpoint application is in the New Relic ONE App catalog. Once installed, you will need to be all FULL stack observability user to leverage the Pathpoint application. Pathpoint leverages existing metrics and events to easily visualize your relevant business workflows.<br></br><br></br>
                <strong>IF APPLICABLE: CLONE THIS NERDPACK</strong><br></br>
                    The New Relic ONE Pathpoint application is open-source <a href='https://github.com/newrelic/nr1-pathpoint' target='_blanck'>https://github.com/newrelic/nr1-pathpoint</a> feel free to clone and run locally. New Relic will also host this application for you and is easily installed through the New Relic ONE Application Catalog.
                </p>
              </div>
            </div>
          </p>

          

          <p>
            <div style={{ display: 'flex' }}>
              <img src={k3s_logo} style={{ background: '#cccccc', width: '15%', height: '15%' }} alt="" />
              <div style={{ paddingLeft: '10px',width: '450px;' }}>
                <p><strong>K3s : Create your own kubernetes environment in 30 seconds</strong><br></br><a href='https://k3s.io/' target='_blank'>https://k3s.io/</a><br></br>
                K3s is a highly available, certified Kubernetes distribution designed for production workloads in unattended, resource-constrained, remote locations or inside IoT appliances.<br></br>
                Lightweight Kubernetes. Easy to install, half the memory, all in a binary of less than 100 MB.<br></br>
                Great for:<br></br>
                  <ul>
                    <ul>
                      <li>Edge</li>
                      <li>IoT</li>
                      <li>CI</li>
                      <li>Development</li>
                      <li>ARM</li>
                      <li>Embedding K8s</li>
                      <li>Situations where a PhD in K8s clusterology is infeasible</li>
                    </ul>
                  </ul>
                  Simple command Installation:<span className="message">10.0.0.51 have to be change with your IP</span><br></br>
                  <pre ><code>
                  curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--write-kubeconfig-mode 644 --tls-san 10.0.0.51" sh -
                  </code></pre>
                  
                  <span className="image main">
                    <img src={k3s_page} alt="" />
                  </span>
                </p>
              </div>
            </div>
          </p>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>


        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/me@rsamanez.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
