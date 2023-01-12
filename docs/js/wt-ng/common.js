class CopyrightMain extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <div class="copyright_section">
          <div class="container">
             <p class="center"><span class="centa_1">WebTools-NG is an independent project and is NOT associated with Plex Inc.</span><br>
             <span class="centa_2">2023 - All Rights Reserved - WebTools-NG</span></p>
          </div>
       </div>
    `;
  }
}

class Copyright extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <div class="copyright_section">
          <div class="container">
             <p class="copyright_text">2023 - All Rights Reserved - WebTools-NG</p>
          </div>
       </div>
     `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <div class="footer_section layout_padding">
          <div class="container">
             <p class="center">WebTools-NG is an independent project and is NOT associated with Plex Inc.<br>
             Use of this program is at your own risk, no responsibility is taken by WebTools-NG.<br>
             Please consider supporting this project&nbsp;&nbsp;<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=H75NPVQRFB3GL"><img alt="Donate" src="images/donate.png" width="55"></a></p>
          </div>
       </div>
      `;
  }
}

class CommonHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="footer_section layout_padding">
           <div class="container">
              <p class="center">WebTools-NG is an independent project and is NOT associated with Plex Inc.<br>
              Use of this program is at your own risk, no responsibility is taken by WebTools-NG.<br>
              Please consider supporting this project&nbsp;&nbsp;<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=H75NPVQRFB3GL"><img alt="Donate" src="images/donate.png" width="55"></a></p>
           </div>
        </div>
       `;
  }
}

class Menu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="header_section">
         <div class="header_main">
            <div class="mobile_menu">
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="logo_mobile">
                     <a href="index.html"><img alt="Logo" src="images/logo.png"></a>
                  </div>
               <div class="navbar-toggler" role="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <div class="navbar-toggler-icon"></div>
            </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about-webtools-ng.html">About WT-NG</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="menu.html">Main Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="help.html">Help</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container-fluid">
        <div class="logo">
          <a href="index.html"><img alt="Logo" src="images/logo.png"></a>
        </div>
        <div class="menu_main">
          <ul>
            <li class="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about-webtools-ng.html">About</a>
            </li>
            <li>
              <a href="menu.html">Main Menu</a>
            </li>
            <li>
              <a href="help.html">Help</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
        `;
  }
}

customElements.define("wtng-copyright-main", CopyrightMain);
customElements.define("wtng-copyright", Copyright);
customElements.define("wtng-footer", Footer);
customElements.define("wtng-common-header", CommonHeader);
customElements.define("wtng-menu", Menu);
