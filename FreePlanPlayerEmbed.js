function cstrBindEvent(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)};var cstrLoadFreePlayer=function(){var e=document.getElementById("cstrFreePlayerBL1"),t=document.getElementById("cstrFreePlayerBL2")
e&&"undefined"!=e&&"null"!=e&&void 0!=e&&null!=e&&t&&"undefined"!=t&&"null"!=t&&void 0!=t&&null!=t||alert("Please do not remove the Caster.fm link. \n IT IS GOING TO BE HIDDEN ANYWAY.")
var n=e.firstChild.nodeValue,a=e.href,r=t.firstChild.nodeValue,d=t.href
console.log(a);if("Free Shoutcast Hosting"!=n||["http://www.caster.fm/","https://www.caster.fm/"].indexOf(a)==-1||"Radio Stream Hosting"!=r||["http://www.caster.fm/","https://www.caster.fm/"].indexOf(d)==-1)alert("Please do not remove the Caster.fm link.\n  IT IS GOING TO BE HIDDEN ANYWAY.")

var s="//widgets.caster.fm/em_player.php?jsinit=true&uid="+cstrFreePlayerUid+"&t="+cstrFreePlayerTheme+"&c="+cstrFreePlayerColor+additionalParameter,i=document.createElement("iframe")
i.frameBorder=0,i.width="100%",i.height="120px",i.id="cstrFreePlayerFrame",i.scrolling="no",i.allowtransparency="true",i.setAttribute("src",s),i.setAttribute("allowtransparency","true"),document.getElementById("cstrFreePlayerDiv").appendChild(i)}};cstrBindEvent(window,"load",cstrLoadFreePlayer);
