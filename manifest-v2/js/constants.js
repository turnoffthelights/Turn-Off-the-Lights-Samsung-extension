/* eslint-disable no-unused-vars */
function $(id){ return document.getElementById(id); }
// Install on www.stefanvd.net
// Install on www.turnoffthelights.com
if(window.location.href.match(/^http(s)?:\/\/(www\.)?stefanvd.net/i) || window.location.href.match(/^http(s)?:\/\/(www\.)?turnoffthelights.com/i)){
	if($("turnoffthelights-samsung-install-button")){
		$("turnoffthelights-samsung-install-button").style.display = "none";
		$("turnoffthelights-samsung-thanks-button").style.display = "block";
	}
}
const totlscreenshotpage = "https://www.turnoffthelights.com/extension/capture-screenshot-of-video.html";
const developerwebsite = "https://www.turnoffthelights.com";
const totloptionspage = "https://www.turnoffthelights.com/extension/options.html";
const ambientaureaproduct = "https://chrome.google.com/webstore/detail/ambient-aurea/pkaglmndhfgdaiaccjglghcbnfinfffa";
const datetodayproduct = "https://chrome.google.com/webstore/detail/date-today/mhgknbehalhkedjgfhiaindklahhkccc";
const turnoffthelightsproduct = "https://chrome.google.com/webstore/detail/turn-off-the-lights/bfbmjmiodbnnpllbbbfblcplfjjepjdn";
const financetoolbarproduct = "https://chrome.google.com/webstore/detail/finance-toolbar/cichbngoomgnobmmjpagmbkimbamigie";
const propermenubarproduct = "https://chrome.google.com/webstore/detail/proper-menubar/egclcjdpndeoioimlbbbmdhcaopnedkp";
const fullscreenproduct = "https://chrome.google.com/webstore/detail/full-screen/gmimocjjppdelmhpcmpkhekmpoddgima";
const zoomproduct = "https://chrome.google.com/webstore/detail/zoom/lajondecmobodlejlcjllhojikagldgd";
const donatewebsite = "https://www.turnoffthelights.com/donate.html";
const writereview = "https://chrome.google.com/webstore/detail/turn-off-the-lights/bfbmjmiodbnnpllbbbfblcplfjjepjdn/reviews";
const linkchangelog = "https://www.turnoffthelights.com/extension/samsungchangelog.html";
const linktranslate = "https://www.turnoffthelights.com/extension/translate.html";
const linksupport = "https://www.turnoffthelights.com/support/";
const linkwelcomepage = "https://www.turnoffthelights.com/extension/samsungwelcome.html";
const linkuninstall = "https://www.turnoffthelights.com/extension/samsunguninstalled.html";
const linkguide = "https://www.turnoffthelights.com/extension/samsungguide.html";
const linkshare = "https://www.turnoffthelights.com/shareextension.html";
const linkthemedownload = "https://www.turnoffthelights.com/browser/theme.html";
const browsernewtab = "chrome://newtab/";
const browserstore = "https://chrome.google.com";
const linkyoutube = "https://www.youtube.com/c/turnoffthelights?sub_confirmation=1";
const linkauroraplayerapp = "https://www.stefanvd.net/project/aurora-player/";
const linktotlmobileapp = "https://www.turnoffthelights.com/mobile.html";
const devmode = true;