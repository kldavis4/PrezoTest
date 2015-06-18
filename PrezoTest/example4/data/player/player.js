//Version 1.0.9
function removeWhitespace(e){var t;for(t=0;t<e.childNodes.length;t++){var i=e.childNodes[t];1==i.nodeType&&removeWhitespace(i),/^\s+$/.test(i.nodeValue)&&3==i.nodeType&&e.removeChild(e.childNodes[t--])}return e}function loadXmlFromString(e){var t;if(window.ActiveXObject)t=new ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.loadXML(e);else if(window.DOMParser){var i=new DOMParser;t=i.parseFromString(e,"text/xml")}var n=removeWhitespace(t);return n.firstChild}function loadNewPres(){if(loading.LoadingStart(),isTouchDevice&&navigator.userAgent.match(/iPad/i)&&(window.orc=0,window.onorientationchange=function(){1==ipadKeyPadFlg&&(this.orc=1)},top===self)){window.scrollTo(0,1);var e=gei("statusCurrent");e.onfocus=function(){ipadKeyPadFlg=1},e.onblur=function(){ipadKeyPadFlg=0}}var t=gei("toolbar").style;t.backgroundColor="#ECECEC",t.borderTop="1px solid #DBDADA",document.getElementsByTagName("body")[0].style.backgroundColor=presSettings.BackColr;var i=gei("resizer");i.style.height=presSettings.Height+"px",i.style.width=presSettings.Width+"px",pcc.r(),window.onresize=pcc.r;var n=gei("time");n.innerHTML="";var r=document.createElement("span");r.setAttribute("style","font-weight: bold; color: #525151;"),r.id="times",n.appendChild(r);var a=Math.floor(presSettings.TotalTime/1e3%60),o=Math.floor(presSettings.TotalTime/1e3/60%60),s=Math.floor(presSettings.TotalTime/1e3/60/60%24);10>a&&(a="0"+a),10>o&&(o="0"+o),10>s&&(s="0"+s),n.innerHTML=0==s?n.innerHTML+":"+o+":"+a:n.innerHTML+":"+s+":"+o+":"+a,gei("buttonDiv").style.display="block",gei("progressContainer").style.display="block",gei("time").style.display="block",gei("status").style.display="block",presSettings.ShowNotes&&(gei("notesButton").style.display="block"),gei("statusTotal").value="/ "+presSettings.TotalSlides,gei("statusCurrent").onkeydown=EnterCurrent,gei("playN").onclick=Presentation.Next,gei("playP").onclick=Presentation.Prev;var l=gei("playB");l.onclick=Presentation.Play,l.onmouseover=function(){var e=this.style;e.backgroundPosition=isPlaying?"-148px 0px":"-50px 0px"},l.onmouseout=function(){var e=this.style;e.backgroundPosition=isPlaying?"-99px 0px":"-1px 0px"}}function EnterCurrent(e){var t=e.keyCode||e.which;if(13==t){var i=gei("statusCurrent").value;if(!isNaN(i)){var n=parseInt(i);Presentation.GotoSlide(n)}}}function currentText(e){var t=(""+presSettings.TotalSlides).length,i=(""+e).length;return i==t?e:i==t-1?"0"+e:i==t-2?"00"+e:e}function sHp(){var e=gei("panel");e.style.display="block"==e.style.display?"none":"block",pcc.r()}function CheckNodeValue(e){return void 0!=e?e:""}function ShowInfo(e){var t=gei("presInfo");"+"==e.innerHTML?(e.innerHTML="-",t.style.overflowY="auto",t.style.width="230px",t.scrollTop=100):(e.innerHTML="+",t.style.overflowY="hidden",t.style.width="220px",t.scrollTop=0)}function UpdatePresenter(e){try{var t=CheckNodeValue(e.getAttribute("name"));if(""==t)return void(gei("presInfo").style.display="none");var i=e.childNodes,n=CheckNodeValue(e.getAttribute("info")),r=CheckNodeValue(i[0].getAttribute("photo")),a=CheckNodeValue(i[0].getAttribute("companyLogo")),o=CheckNodeValue(e.getAttribute("email")),s=CheckNodeValue(e.getAttribute("website")),l=CheckNodeValue(e.getAttribute("companyWebsite"));""==r&&(r="pres.png"),gei("PrePicLoader").src="data/player/"+r,""!=a&&(gei("logo").innerHTML='<a target="_about:blank" href="'+l+'" > <img class="img1" src="data/player/'+a+'" style="top:6px;height:30px;width: auto;position:relative"></a>'),gei("profileName").innerHTML=t;var g=n;g+=""!=o?'<br>Email :  <a class="pagelink" href="mailto:'+o+'">'+o+"</a>":"",g+=""!=s?'<br>Website : <a class="pagelink" target="_about:blank" href="'+s+'">'+s+"</a><br>":"",gei("profiles").innerHTML=g,g="";var p="data/player",c=40;if(null!=i[1].getAttribute("faceBook")&&"True"==i[1].getAttribute("faceBookChecked")){var d=CheckNodeValue(i[1].getAttribute("faceBook"));g+='<br><a target="_about:blank" href="'+d+'"> <img class="img2" src="'+p+'/fb.png" alt="facebook" style="width:'+c+'px; top:1px;position:relative " ></a> '}if(null!=i[1].getAttribute("googlePlus")&&"True"==i[1].getAttribute("googlePlusChecked")){var d=CheckNodeValue(i[1].getAttribute("googlePlus"));g+='<a target="_about:blank" href="'+d+'" > <img class="img2" src="'+p+'/gPlus.png" alt="Google Plus" style=" width:'+c+'px;top:1px;position:relative"></a> '}if(null!=i[1].getAttribute("twitter")&&"True"==i[1].getAttribute("twitterChecked")){var d=CheckNodeValue(i[1].getAttribute("twitter"));g+='<a target="_about:blank" href="'+d+'" > <img class="img2" src="'+p+'/tweet.png" alt="Twitter" style=" width:'+c+'px;top:1px; position:relative"></a> '}if(null!=i[1].getAttribute("youTube")&&"True"==i[1].getAttribute("youTubeChecked")){var d=CheckNodeValue(i[1].getAttribute("youTube"));g+='<a target="_about:blank" href="'+d+'" > <img class="img2" src="'+p+'/yt.png"  alt="YouTube" style=" width:'+c+'px;top:1px;position:relative"></a> '}if(null!=i[1].getAttribute("blogger")&&"True"==i[1].getAttribute("bloggerChecked")){var d=CheckNodeValue(i[1].getAttribute("blogger"));g+='<a target="_about:blank" href="'+d+'" > <img class="img2" src="'+p+'/blog.png" alt="Blogger" style=" width:'+c+'px;top:1px; position:relative"></a> '}if(null!=i[1].getAttribute("rss")&&"True"==i[1].getAttribute("rssChecked")){var d=CheckNodeValue(i[1].getAttribute("rss"));g+='<a target="_about:blank" href="'+d+'" > <img class="img2" src="'+p+'/rss.png" alt="rss" style=" width:'+c+'px;top:1px; position:relative"></a> '}if(null!=i[1].getAttribute("linkedIn")&&"True"==i[1].getAttribute("linkedInChecked")){var d=CheckNodeValue(i[1].getAttribute("linkedIn"));g+='<a target="_about:blank" href="'+d+'" > <img class="img2" src="'+p+'/in.png" alt="LinkedIn" style=" width:'+c+'px;top:1px;position:relative"></a> '}if(null!=i[1].getAttribute("userLocation")&&"True"==i[1].getAttribute("userLocationChecked")){var d=CheckNodeValue(i[1].getAttribute("userLocation"));g+='<a target="_about:blank" href="'+d+'" > <img class="img2" src="'+p+'/map.png" alt="Location" style=" width:'+c+'px;top:1px; position:relative"></a>'}gei("socialLinks").innerHTML=g,bPresenter=!0,gei("presInfo").style.display="block",gei("slideNote").style.top="145px"}catch(u){}}var presSettings={},Presentation,isTouchDevice,ipadKeyPadFlg,isPlaying=!1,gei=function(e){return document.getElementById(e)};window.onload=function(){if(!document.createElement("canvas").getContext){gei("resizer").innerHTML="";var e=gei("toolbar");return e.innerHTML="",e.style.width="0px",void document.write("Oops! Your browser does not support HTML5. You need to upgrade your browser to view this content.")}var t={playAnimationsOnLoad:!0};Presentation=new DopPresentation(new eventsHandler,t),Presentation.SetRPath("data/");try{document.createEvent("TouchEvent"),isTouchDevice=!0}catch(i){isTouchDevice=!1}Presentation.LoadPres("pres",1),UpdatePresenter(loadXmlFromString(presenterNode))};var eventsHandler=function(){this.OnError=function(){},this.OnLoadingStart=function(){loading.LoadingStart()},this.OnLoadingEnd=function(){loading.LoadingEnd()},this.OnSlideChange=function(e){pcc.HandleSlideChange(e)},this.OnMovToNxtAnim=function(){},this.OnMovToPrvAnim=function(){},this.OnPlayingStart=function(){isPlaying=!0,pcc.HandlePlayAndPause(!0)},this.OnPlayingEnd=function(){isPlaying=!1,pcc.HandlePlayAndPause(!1)},this.OnProgressChange=function(e){pcc.HandleProgress(e)},this.InitaliseSettings=function(e){presSettings=e,loadNewPres()}},loading=function(){function e(){gei("loadingImg").style.display="block"}function t(){gei("loadingImg").style.display="none"}return{LoadingStart:e,LoadingEnd:t}}();Pcl=function(){function e(){function e(){document.body.removeChild(window.iabho)}isTouchDevice&&(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))&&(window.iabho=document.createElement("div"),document.body.appendChild(window.iabho),window.iabho.style.height="1000px",setTimeout(e(),100),window.scrollTo(0,1))}function t(e){var t=e.toString();return t.indexOf("e")>0?Math.floor(e):e}this.r=function(){e();var i=window.innerWidth,n=window.innerHeight;if(navigator.userAgent.match(/iPad/i))if(1==window.orc&&1==ipadKeyPadFlg)window.orc=0;else if(1==ipadKeyPadFlg)return;var r,a,o=gei("player"),s=50;presSettings.MaxScale>0?(r=n>presSettings.Height*presSettings.MaxScale?presSettings.Height*presSettings.MaxScale:n,a=i>presSettings.Width*presSettings.MaxScale?presSettings.Width*presSettings.MaxScale:i):(r=n,a=i);var l=0;"block"===gei("panel").style.display&&(l=250);var g;g=a-l<presSettings.Width||r-s<presSettings.Height?(presSettings.Width-(a-l))/presSettings.Width<(presSettings.Height-(r-s))/presSettings.Height?1-(presSettings.Height-(r-s))/presSettings.Height:1-(presSettings.Width-(a-l))/presSettings.Width:(a-l-presSettings.Width)/presSettings.Width>(r-s-presSettings.Height)/presSettings.Height?1+(r-s-presSettings.Height)/presSettings.Height:1+(a-l-presSettings.Width)/presSettings.Width,Presentation.SetScale(g),0==presSettings.MaxScale&&(a=l+presSettings.Width*g),o.style.height=t(r)+"px",o.style.width=t(a)+"px",o.style.top=t((n-r)/2)+"px",o.style.left=t((i-a)/2)+"px";var p=gei("resizer");p.style.top=0,p.style.left=0,p.style.webkitTransform="scale("+t(g)+")",p.style.MozTransform="scale("+t(g)+")",p.style.OTransform="scale("+t(g)+")",p.style.msTransform="scale("+t(g)+")";var c=gei("contentHolder");c.style.height=t(presSettings.Height*g)+"px",c.style.width=t(presSettings.Width*g)+"px";var d=t(l+(a-l-g*presSettings.Width)/2),u=t((r-s-g*presSettings.Height)/2);c.style.marginLeft=d+"px",c.style.marginTop=u+"px";var h=gei("loadingImg");h.style.height=t(presSettings.Height*g)+"px",h.style.width=t(presSettings.Width*g)+"px",h.style.marginTop=u+"px",h.style.marginLeft=d+"px";var y=gei("panel");y.style.height=t(r-s)+"px",gei("noteDisplay").style.height=t(r-s-40)+"px",gei("buttonDiv").style.left=t(a/2-25)+"px";var f=gei("progress"),b=(a/2-70-95)/200;b=b>.8?.8:b,b=.33>b?.33:b,f.style.webkitTransform="scale("+t(b)+",1)",f.style.MozTransform="scale("+t(b)+",1)",f.style.OTransform="scale("+t(b)+",1)",f.style.msTransform="scale("+t(b)+",1)",f.parentNode.style.width=t(200*b)+"px";var v=gei("notesButton").style,m=gei("status").style,w=gei("time").style,x=gei("logo").style;a>427?(w.opacity=1,m.opacity=1,x.display="block",f.style.opacity=1,null!=y&&(v.right="65px",v.opacity=1)):(w.opacity=0,x.display="none",f.style.opacity=0,m.opacity=1,null!=y&&(v.opacity=1),300>a&&(null!=y&&(v.opacity=0),isTouchDevice||(m.opacity=0)));var S=gei("play");if(null!==S){var k=S.style;k.height=t(g*presSettings.Height)+"px",k.width=t(g*presSettings.Width)+"px"}var T=gei("slideNote"),P=10;"block"==gei("presInfo").style.display&&(P=parseInt(T.style.top)),T.style.height=parseInt(y.style.height)-P+"px",gei("noteDisplay").style.height=parseInt(y.style.height)-P-55+"px"},this.HandleProgress=function(e){var t=Math.floor(e/1e3%60),i=Math.floor(e/1e3/60%60);10>t&&(t="0"+t),10>i&&(i="0"+i),gei("times").innerHTML=i+":"+t;var n=200/presSettings.TotalTime*e;n>200&&(n=200),gei("Bar").style.width=n+"px"},this.n=function(e){var t=Presentation.GetFormatedNotes(e),i=gei("noteDisplay");i.innerHTML="";for(var n=t.length,r=0;n>r;r++){var a=t[r],o=a.level,s=a.words,l=document.createElement("p");l.style.marginLeft=10*o+"px";for(var g=s.length,p=0;g>p;p++){var c=s[p],d=c.text,u=document.createElement("span");u.innerHTML=d,c.bold&&(u.style.fontWeight="bold"),c.italic&&(u.style.fontStyle="italic"),c.underline&&c.line_through?u.style.textDecoration="line-through underline":c.line_through?u.style.textDecoration="line-through":c.underline&&(u.style.textDecoration="underline"),l.appendChild(u)}i.appendChild(l)}},this.HandleSlideChange=function(e){switch(e){case-1:break;case 0:break;default:gei("statusCurrent").value=currentText(e),presSettings.CurrentSlide=e,pcc.n(e)}},this.HandlePlayAndPause=function(e){var t=gei("playB");switch(e){case!0:t.style.backgroundPosition="-99px 0px";break;case!1:t.style.backgroundPosition="-1px 0px"}}};var pcc=new Pcl;