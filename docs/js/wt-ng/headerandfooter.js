class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
   <div class="header_section">
            <div class="header_main">
               <div class="mobile_menu">
                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                     <div class="logo_mobile"><a href="index.html"><img src="images/logo.png"></a></div>
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                           <li class="nav-item">
                              <a class="nav-link" href="index.html">Home</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="install.html">Install</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link " href="configure.html">Configure</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="modules.html">Modules</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link " href="help.html">Help</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link " href="info.html">Info</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link " href="about.html">About Us</a>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
               <div class="container-fluid">
                  <div class="logo"><a href="index.html"><img src="images/logo.png"></a></div>
                  <div class="menu_main">
                     <ul>
                        <li class="active"><a href="index.html">Home</a></li>
                        <li><a href="install.html">Install</a></li>
                        <li><a href="configure.html">Configure</a></li>
                        <li><a href="modules.html">Modules</a></li>
                        <li><a href="help.html">Help</a></li>
                        <li><a href="info.html">Info</a></li>
                        <li><a href="about.html">About Us</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <!-- banner section start -->
            <div class="banner_section layout_padding">
               <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="container">
                           <h1 class="banner_taital">Discover</h1>
                           <p class="banner_text">Discover the wonders of your media with Plex Media Server and WebTools-NG</p>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="container">
                           <h1 class="banner_taital">Experience</h1>
                           <p class="banner_text">Experience the best that Plex Media Server has to offer with the help of WebTools-NG</p>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="container">
                           <h1 class="banner_taital">Enjoy</h1>
                           <p class="banner_text">Enjoy your media the way you want with a healthy Plex Media Server</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- banner section end -->
         </div>
         <!-- header section end -->
            `;
  }
}

customElements.define("wtng-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <footer>
           <p class="copyright_text" style="color:black;">2022 All Rights Reserved. WebTools-NG</a></p>
         </footer>
      `;
  }
}

customElements.define("wtng-footer", MyFooter);
