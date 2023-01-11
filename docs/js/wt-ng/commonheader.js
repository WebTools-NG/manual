//#region Scripts to include

// WT-NG Common
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "./js/wt-ng/common.js";
document.getElementsByTagName("head")[0].appendChild(script);

// jquery.min
var script = document.createElement("script");
script.src = "js/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

// popper.min
var script = document.createElement("script");
script.src = "js/popper.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

// bootstrap.bundle.min
var script = document.createElement("script");
script.src = "js/bootstrap.bundle.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

// jquery-3.0.0.min
var script = document.createElement("script");
script.src = "js/jquery-3.0.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

// plugin ( sidebar ) ?????
var script = document.createElement("script");
script.src = "js/plugin.js";
document.getElementsByTagName("head")[0].appendChild(script);

// mCustomScrollbar.concat.min ?????
var script = document.createElement("script");
script.src = "js/jquery.mCustomScrollbar.concat.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

// custom ?????
var script = document.createElement("script");
script.src = "js/custom.js";
document.getElementsByTagName("head")[0].appendChild(script);

// owl.carousel ?????
var script = document.createElement("script");
script.src = "js/owl.carousel.js";
document.getElementsByTagName("head")[0].appendChild(script);

// jquery.fancybox.min
var script = document.createElement("script");
script.src =
  "https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

//#endregion

var link = document.createElement("link");
link.href = "images/favicon.ico";
link.rel = "icon";
link.type = "image/x-icon";
document.getElementsByTagName("head")[0].appendChild(link);

// Fav icon
var link = document.createElement("link");
link.href = "images/favicon.ico";
link.rel = "icon";
link.type = "image/x-icon";
document.getElementsByTagName("head")[0].appendChild(link);

link = document.createElement("link");
link.href = "images/apple-touch-icon.png";
link.rel = "apple-touch-icon";
link.sizes = "180x180";
document.getElementsByTagName("head")[0].appendChild(link);

link = document.createElement("link");
link.href = "images/favicon-32x32.png";
link.rel = "icon";
link.sizes = "32x32";
link.type = "image/png";
document.getElementsByTagName("head")[0].appendChild(link);

link = document.createElement("link");
link.href = "images/favicon-16x16.png";
link.rel = "icon";
link.sizes = "16x16";
link.type = "image/png";
document.getElementsByTagName("head")[0].appendChild(link);

// Common CSS <bootstrap.min>
link = document.createElement("link");
link.href = "css/bootstrap.min.css";
link.rel = "stylesheet";
link.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(link);

// Common CSS <Responsive style>
link = document.createElement("link");
link.href = "css/style.css";
link.rel = "stylesheet";
link.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(link);

// Common CSS <Responsive favicon>
link = document.createElement("link");
link.href = "css/responsive.css";
link.rel = "stylesheet";
link.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(link);

// Common CSS <Scrollbar Custom CSS>
link = document.createElement("link");
link.href = "images/site.webmanifest";
link.rel = "manifest";
document.getElementsByTagName("head")[0].appendChild(link);

// Common CSS <Tweaks for older IEs>
link = document.createElement("link");
link.href = "css/jquery.mCustomScrollbar.min.css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

// Common CSS <fonts>
link = document.createElement("link");
link.href =
  "https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

// Common CSS <owl stylesheets>
link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css?family=Poppins:400,700|Righteous&amp;display=swap";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

link = document.createElement("link");
link.href = "css/owl.carousel.min.css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

link = document.createElement("link");
link.href = "css/owl.theme.default.min.css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

link = document.createElement("link");
link.href =
  "https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css";
link.media = "screen";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);

// Set codepage
var meta = document.createElement("meta");
meta.setAttribute("charset", "utf-8");
document.getElementsByTagName("head")[0].appendChild(meta);

meta = document.createElement("meta");
meta.setAttribute(
  "content",
  "width=device-width, initial-scale=1, maximum-scale=1"
);
meta.setAttribute("name", "viewport");
document.getElementsByTagName("head")[0].appendChild(meta);

meta = document.createElement("meta");
meta.setAttribute("content", "WebTools-NG for Plex Media Server");
meta.setAttribute("name", "description");
document.getElementsByTagName("head")[0].appendChild(meta);

meta = document.createElement("meta");
meta.setAttribute(
  "content",
  "Video,Movies,TV,Audio,Photos,Maintenance,Report,Information,Data,Download"
);
meta.setAttribute("name", "keywords");
document.getElementsByTagName("head")[0].appendChild(meta);

meta = document.createElement("meta");
meta.setAttribute("content", "trumpy81");
meta.setAttribute("name", "author");
document.getElementsByTagName("head")[0].appendChild(meta);

/* 
// Meta data to header


// Title to header
//const pagetitle = document.createElement("title");
//const pagetitle = document.title;
///const pagetitle = document.createAttribute("title");
const pagetitle = document.createAttributeNS("title");

pagetitle.title = "WebTools-NG for Plex";
document.getElementsByTagName("head")[0].appendChild(pagetitle); */

/* 
  
  
  <meta content="trumpy81" name="author"></meta> */
