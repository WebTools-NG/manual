class CopyrightMain extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <div class="copyright_section">
          <div class="container">
             <p class="center"><span class="centa_1">WebTools-NG is an independent project and is NOT associated with Plex Inc.</span><br>
             <span class="centa_2"><span id="spanYear"></span> - All Rights Reserved - WebTools-NG</span></p>
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
             <p class="copyright_text"><span id="spanYear"></span> - All Rights Reserved - WebTools-NG</p>
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

customElements.define("wtng-copyright-main", CopyrightMain);
customElements.define("wtng-copyright", Copyright);
customElements.define("wtng-footer", Footer);
