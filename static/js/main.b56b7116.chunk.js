(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},126:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(18),s=n(59),c=n(8),r=n(1),i=n.n(r),o=n(9),l=n(0),d=Object(r.createContext)(),j=function(e){var t=e.children,n=Object(r.useState)("light"),a=Object(c.a)(n,2),s=a[0],i=a[1];Object(r.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");i(e.matches?"dark":"light"),e.addEventListener("change",(function(e){i(e.matches?"dark":"light")}))}),[]);return Object(l.jsx)(d.Provider,{value:[{themeName:s,toggleTheme:function(){var e="dark"===s?"light":"dark";localStorage.setItem("themeName",e),i(e)}}],children:t})},u="https://tmb5cg.github.io",b="Tucker Bendix",h="Tucker Bendix",g="lol",m="Welcome to my page.",p="https://example.com",O={linkedin:"https://linkedin.com/in/tucker-bendix/",github:"https://github.com/tmb5cg"},x={title:"Autocropper",description:"This tool automatically extracts individual cropped photos from your uploaded photo.",subhead:"",social:{linkedin:"https://linkedin.com/in/tucker-bendix/",github:"https://github.com/tmb5cg"}},f={title:"FIFA 22 Autobidder",description:"The only open-source, free FIFA trading bot in existence. Available since 2020.",subhead:"",social:{linkedin:"https://linkedin.com/in/tucker-bendix/",github:"https://github.com/tmb5cg"}},v={title:"Free Time Finder",description:"This tool automatically finds and lists free times via Google Calendar API.",subhead:"",social:{linkedin:"https://linkedin.com/in/tucker-bendix/",github:"https://github.com/tmb5cg"}},S=[{name:"Autocropper.io",description:"The only web tool that will auto crop scanned photos in one pass - multiple photos in a single scan. The best way to scan a lot of photos.",stack:["React","Python","OpenCV","Heroku"],sourceCode:"https://github.com/tmb5cg",livePreview:"/autocropper"},{name:"FIFA 22 Trading Bot",description:"Selenium bot that autobids and autobuys players on FIFA 22 Ultimate Team's transfer market. User configurable settings, advanced logging and performance monitoring, robust error reporting. Open source, free.",stack:["Python","Javascript"],sourceCode:"https://github.com/tmb5cg/Fifa22-Autobidder",livePreview:"/fifa-autobidder"},{name:"FreeTimeFinder",description:"Finds free meeting times by date and shared calendars via Google OAuth + GCal API",stack:["React","Google OAuth","Google Calendar API"],sourceCode:"https://github.com",livePreview:"/free-time-finder"},{name:"InstaBot",description:"Instagram bot that scrapes memes from r/programmerhumor and posts to @dankcsmemes daily",stack:["Python"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Monkeypox Vaccine Appointment Finder",description:"Scrapes NYS vaccine appointment portal and alerts updates via SMS",stack:["Python"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"ConEd API",description:"Logs energy usage by listening to ConEd user portal",stack:["Python"],sourceCode:"https://github.com",livePreview:"https://github.com"}],w=["Python","PostgreSQL, SQL","HTML","CSS","JavaScript","React","Git","CI/CD","Visual Studio Code"],D="tuckerbendix@icloud.com",N=n(75),k=n.n(N),y=n(73),_=n.n(y),T=n(77),C=n.n(T),E=n(76),L=n.n(E),F=(n(92),function(){var e=Object(r.useContext)(d),t=Object(c.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,s=Object(r.useState)(!1),i=Object(c.a)(s,2),o=i[0],j=i[1],u=function(){return j(!o)};return Object(l.jsxs)("nav",{className:"center nav",children:[Object(l.jsxs)("ul",{style:{display:o?"flex":null},className:"nav__list",children:[S.length?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,w.length?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,D?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(l.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(l.jsx)(_.a,{}):Object(l.jsx)(k.a,{})}),Object(l.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:o?Object(l.jsx)(L.a,{}):Object(l.jsx)(C.a,{})})]})}),U=(n(96),function(){var e=u,t=b;return Object(l.jsxs)("header",{className:"header center",children:[Object(l.jsx)("h3",{children:e?Object(l.jsx)("a",{href:e,className:"link",children:t}):t}),Object(l.jsx)(F,{})]})}),I=n(24),P=n.n(I),Z=n(34),A=n.n(Z),H=(n(97),function(){var e=h,t=g,n=m,a=p,s=O;return Object(l.jsxs)("div",{className:"about center",children:[e&&Object(l.jsxs)("h1",{children:["Hi, I am ",Object(l.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(l.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(l.jsx)("p",{className:"about__desc",children:n&&n}),Object(l.jsxs)("div",{className:"about__contact center",children:[a&&Object(l.jsx)("a",{href:a,children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(l.jsxs)(l.Fragment,{children:[s.github&&Object(l.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(l.jsx)(P.a,{})}),s.linkedin&&Object(l.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(l.jsx)(A.a,{})})]})]})]})}),M=n(29),R=n.n(M),Y=n(78),G=n.n(Y),B=(n(98),function(e){var t=e.project;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(l.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(l.jsx)("li",{className:"project__stack-item",children:e},R()())}))}),t.sourceCode&&Object(l.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(l.jsx)(P.a,{})}),t.livePreview&&Object(l.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(l.jsx)(G.a,{})})]})}),J=(n(99),function(){return S.length?Object(l.jsxs)("section",{id:"projects",className:"section projects",children:[Object(l.jsx)("h2",{className:"section__title",children:"Projects"}),Object(l.jsx)("div",{className:"projects__grid",children:S.map((function(e){return Object(l.jsx)(B,{project:e},R()())}))})]}):null}),Q=(n(100),function(){return w.length?Object(l.jsxs)("section",{className:"section skills",id:"skills",children:[Object(l.jsx)("h2",{className:"section__title",children:"Skills"}),Object(l.jsx)("ul",{className:"skills__list",children:w.map((function(e){return Object(l.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},R()())}))})]}):null}),V=n(79),W=n.n(V),z=(n(101),function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(l.jsx)("div",{className:"scroll-top",children:Object(l.jsx)("a",{href:"#top",children:Object(l.jsx)(W.a,{fontSize:"large"})})}):null}),q=(n(102),function(){return D?Object(l.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(l.jsx)("h2",{className:"section__title",children:"Contact"}),Object(l.jsx)("a",{href:"mailto:".concat(D),children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(n(103),function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("a",{href:"https://github.com/tmb5cg",className:"link footer__link",children:"Created By Tucker Bendix"})})}),X=n(27),$=n.n(X),ee=(n(126),n(80)),te=n.n(ee);var ne=function(e){var t=i.a.useState(!1),n=Object(c.a)(t,2),a=n[0],s=n[1],r=i.a.useRef(null),o=function(e){e.preventDefault(),e.stopPropagation(),"dragenter"===e.type||"dragover"===e.type?s(!0):"dragleave"===e.type&&s(!1)},d=function(t){e.setImageProcessing(!0);for(var n=t,a=[],s=function(t){var s,c;console.log("hi"),s="User",c="upload_photo",te.a.event({category:s,action:c,label:"labelName",value:10,nonInteraction:!1}),(r=new FormData).append("image",n[t]),$()({method:"POST",url:"https://scanned-photo-split.herokuapp.com/getscans",data:r,headers:{"Content-Type":"multipart/form-data"}}).then((function(s){a.push(s.data.images),t==n.length-1&&(e.setProcessedImages(a),e.setImageProcessing(!1),console.log(a))})).catch((function(t){e.setImageProcessing(!1),e.setImageFailed(!0),console.log("error")}))},c=0;c<n.length;c++){var r;s(c)}};return Object(l.jsxs)("form",{className:"upload-container",onDragEnter:o,onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsx)("input",{ref:r,type:"file",id:"input-file-upload",multiple:!0,onChange:function(e){e.preventDefault(),e.target.files&&e.target.files[0]&&d(e.target.files)}}),Object(l.jsx)("label",{id:"label-file-upload",htmlFor:"input-file-upload",className:a?"drag-active":"",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{class:"fa fa-download","aria-hidden":"true"}),Object(l.jsx)("p",{children:"Select a file or drag here"}),Object(l.jsx)("div",{className:"upload-btn-wrapper",children:Object(l.jsx)("button",{className:"btn-upload",onClick:function(){r.current.click()},children:"Upload scan"})})]})}),a&&Object(l.jsx)("div",{id:"drag-file-element",onDragEnter:o,onDragLeave:o,onDragOver:o,onDrop:function(e){e.preventDefault(),e.stopPropagation(),s(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&d(e.dataTransfer.files[0])}})]})};var ae=function(){var e=x.title,t=x.description,n=x.subhead,a=Object(r.useState)(!1),s=Object(c.a)(a,2),i=s[0],o=s[1],d=Object(r.useState)(!1),j=Object(c.a)(d,2),u=j[0],b=j[1],h=Object(r.useState)(null),g=Object(c.a)(h,2),m=g[0],p=g[1];return i||u||m?i?Object(l.jsxs)("div",{className:"about center",children:[Object(l.jsxs)("h1",{children:[" ",e," "]}),Object(l.jsxs)("h2",{className:"about__role",children:[n," "]}),Object(l.jsx)("p",{className:"about__desc",children:t&&t}),Object(l.jsx)("div",{className:"upload-container",children:Object(l.jsxs)("div",{id:"label-file-upload",children:[Object(l.jsx)("i",{class:"fa fa-download","aria-hidden":"true"}),Object(l.jsx)("div",{className:"upload-btn-wrapper",children:Object(l.jsx)("div",{align:"center",className:"output-container-detail-loading",children:Object(l.jsxs)("div",{class:"lds-ring",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})})})]})})]}):u?Object(l.jsxs)("div",{className:"about center",children:[Object(l.jsxs)("h1",{children:[" ",e," "]}),Object(l.jsx)("h2",{className:"about__role",children:"upload failed... insert try again button "})]}):m?Object(l.jsxs)("div",{className:"about center",children:[Object(l.jsxs)("h1",{children:[" ",e," "]}),Object(l.jsxs)("h2",{className:"about__role",children:[n," "]}),Object(l.jsx)("p",{className:"about__desc",children:t&&t}),Object(l.jsx)(ne,{setImageProcessing:o,setProcessedImages:p,setImageFailed:b}),Object(l.jsxs)("h2",{className:"about__role",children:[" ",m.length," images found "]}),Object(l.jsx)("div",{children:m.map((function(e){return console.log("yoyoyoyo"),Object(l.jsx)("section",{className:"output-container",children:Object(l.jsx)("div",{className:"output-container-detail",children:Object(l.jsx)("div",{className:"row",children:e.map((function(e){return Object(l.jsxs)("div",{className:"method-col",children:[Object(l.jsx)("img",{src:e,alt:""}),Object(l.jsx)("a",{className:"download-image-button",href:"".concat(e),download:"output.jpg",children:Object(l.jsx)("button",{children:"Download"})})]})}))})})})}))})]}):void 0:Object(l.jsxs)("div",{className:"about center",children:[Object(l.jsxs)("h1",{children:[" ",e," "]}),Object(l.jsxs)("h2",{className:"about__role",children:[n," "]}),Object(l.jsx)("p",{className:"about__desc",children:t&&t}),Object(l.jsx)(ne,{setImageProcessing:o,setProcessedImages:p,setImageFailed:b})]})},se=(n(130),function(){var e=f.title,t=f.description,n=f.subhead,a=Object(r.useState)(!1),s=Object(c.a)(a,2),i=(s[0],s[1],Object(r.useState)(!1)),o=Object(c.a)(i,2),d=(o[0],o[1],Object(r.useState)(null)),j=Object(c.a)(d,2);j[0],j[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"about center",children:[Object(l.jsxs)("h1",{children:[" ",e," "]}),Object(l.jsxs)("h2",{className:"about__role",children:[n," "]}),Object(l.jsx)("p",{className:"about__desc",children:t&&t}),Object(l.jsx)("a",{href:"https://github.com/tmb5cg/Fifa22-Autobidder",children:"Click here for repository"})]}),Object(l.jsxs)("div",{className:"about center",children:[Object(l.jsx)("h2",{children:"Tmb5cg's FIFA 22 Autobidder Instructions"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:'A completed "cycle" takes around 20 minutes and consists of 4 steps:'}),Object(l.jsx)("br",{}),Object(l.jsxs)("ol",{children:[Object(l.jsx)("li",{children:"parsing Futbin for player prices"}),Object(l.jsx)("li",{children:"bidding on the Transfer Market,"}),Object(l.jsx)("li",{children:"handling the Transfer List (clearing sold, relisting expired),"}),Object(l.jsx)("li",{children:"handling the Watch List (clearing expired auctions, listing won players)"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["The number of cycles is determined by ",Object(l.jsx)("strong",{children:"num cycles"}),", with a ",Object(l.jsx)("strong",{children:"sleep time"})," in minutes between each full cycle (completing steps 1 through 4) as a precaution to avoid a softban"]}),Object(l.jsx)("br",{}),Object(l.jsx)("ol",{children:Object(l.jsxs)("li",{children:["Parsing Futbin for player prices",Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Bot searches using input Futbin URL on line 111 in autobidder.py which can be updated while existing bot thread is closed (thread is closed if GUI is grey, and not green - no need to re-login to change your setup)"}),Object(l.jsx)("li",{children:"Player data and cards are stored to player_list.txt "})]})]})})]})]})}),ce=(n(131),n(61)),re=n(48),ie=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],s=n[1],i=function(){var t=e.calendar.id,n=e.selectedCalendars,s=n.includes(t);if(a){console.log(s);var c=n.filter((function(e){return e!==t}));e.setSelectedCalendars(c)}else{var r=n.map((function(e){return e}));r.push(t),e.setSelectedCalendars(r)}};return Object(l.jsx)("div",{className:"calendarFilter",children:Object(l.jsxs)("label",{className:"toggle",children:[Object(l.jsx)("input",{className:"toggle-checkbox",type:"checkbox",id:e.calendar.id,name:e.calendar.id,value:e.title,checked:a,onChange:function(){s(!a),i()}}),Object(l.jsx)("div",{className:"toggle-switch"}),Object(l.jsxs)("span",{className:"toggle-label",children:[" ",e.title]})]})})},oe=function(e){return Object(l.jsxs)("div",{className:"todo-container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("ul",{className:"todo-list",children:e.calendars.map((function(t){return Object(l.jsx)(ie,{calendar:t,calendars:e.calendars,title:t.summary,setCalendars:e.setCalendars,selectedCalendars:e.selectedCalendars,setSelectedCalendars:e.setSelectedCalendars},t.id)}))})]})},le=function(e){var t=Object(r.useState)(),n=Object(c.a)(t,2),a=n[0],s=n[1],i=[],o=[],d=[],j=function(){i.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),o.sort((function(e,t){return new Date(e.date)-new Date(t.date)}));for(var e=i,t=o,n=[],a=0;a<e.length;a++){var c=e[a].date,r=t[a].date,l=new Date(c),d=new Date(r),j=(l.toLocaleString("en-US",{timeZone:"EST"}),d.toLocaleString("en-US",{timeZone:"EST"}),[l,d]);n.push(j)}for(var u=0;u<n.length;u++){var h=n[u],g=h[0],m=h[1],p=new Date(g).toLocaleString("en-US",{timeZone:"EST"}),O=new Date(m).toLocaleString("en-US",{timeZone:"EST"});console.log(u+" Start: "+p+" || End: "+O)}for(var x=[],f=0;f<n.length;f++){for(var v=(V=n[f])[0].getTime(),S=W=V[1].getTime(),w=0;w<n.length;w++){var D=(q=n[w])[0].getTime(),N=q[1].getTime();v==D&&S<N&&(S=N)}for(var k=[v,S],y=!0,_=0;_<x.length;_++){var T=x[_],C=T[0],E=T[1];C==v&&E==S&&(y=!1)}y&&x.push(k)}for(var L=0;L<x.length;L++){var F=x[L],U=F[0],I=F[1];D=new Date(U).toLocaleString("en-US",{timeZone:"EST"}),N=new Date(I).toLocaleString("en-US",{timeZone:"EST"})}for(var P=[],Z=0;Z<x.length;Z++){v=(V=x[Z])[0],S=W=V[1];for(var A=!0,H=0;H<x.length;H++){D=(q=x[H])[0],N=q[1];D<v&&N>W&&(A=!1)}var M=[v,W];A&&P.push(M)}for(var R=0;R<P.length;R++){var Y=(V=P[R])[0],G=V[1];new Date(Y).toLocaleString("en-US",{timeZone:"EST"}),new Date(G).toLocaleString("en-US",{timeZone:"EST"})}for(var B=[],J=[],Q=0;Q<P.length;Q++){v=(V=P[Q])[0];for(var V,W=V[1],z=0;z<P.length;z++){var q;D=(q=P[z])[0],N=q[1];if(W>D&&W<N){var K=[v,N];B.push(K),J.push([v,W]),J.push([D,N])}}}for(var X=0;X<B.length;X++){var $=(V=B[X])[0],ee=V[1];new Date($).toLocaleString("en-US",{timeZone:"EST"}),new Date(ee).toLocaleString("en-US",{timeZone:"EST"})}for(var te=0;te<J.length;te++){var ne=(V=J[te])[0],ae=V[1];new Date(ne).toLocaleString("en-US",{timeZone:"EST"}),new Date(ae).toLocaleString("en-US",{timeZone:"EST"})}for(var se=[],ce=0;ce<P.length;ce++){for(var re=(V=P[ce])[0],ie=V[1],oe=(y=!0,0);oe<J.length;oe++){var le=J[oe],de=le[0],je=le[1];de==re&&je==ie&&(y=!1)}1==y&&se.push(V)}for(var ue=0;ue<se.length;ue++){var be=(V=se[ue])[0],he=V[1];new Date(be).toLocaleString("en-US",{timeZone:"EST"}),new Date(he).toLocaleString("en-US",{timeZone:"EST"})}for(var ge=0;ge<B.length;ge++){var me=B[ge];se.push(me)}for(var pe=0;pe<se.length;pe++){var Oe=(V=se[pe])[0],xe=V[1];new Date(Oe).toLocaleString("en-US",{timeZone:"EST"}),new Date(xe).toLocaleString("en-US",{timeZone:"EST"})}for(var fe=[],ve=[],Se=0;Se<se.length;Se++){var we=(V=se[Se])[0],De=V[1];fe.push(we),ve.push(De)}fe.sort((function(e,t){return e-t})),ve.sort((function(e,t){return e-t}));for(var Ne=[],ke=0;ke<fe.length;ke++){var ye=fe[ke],_e=ve[ke],Te=new Date(ye),Ce=new Date(_e),Ee=(Te.toLocaleString("en-US",{timeZone:"EST"}),Ce.toLocaleString("en-US",{timeZone:"EST"}),[Te,Ce]);Ne.push(Ee)}!function(e,t,n){for(var a=[],c="",r="",i="",o="",l="",d="",j="",u="",h="",g=0;g<n.length-1;g++){var m=(W=n[g])[0],p=W[1],O=(W=n[g+1])[0],x=W[1];if(0==g){var f=new Date(m);f.setHours(8),f.setMinutes(0),f.setSeconds(0),f=f.getTime();var v=m-(f=new Date(f));if(v>0&&v<36e6){var S=f,w=(f=f.getTime())+v,D=new Date(S),N=new Date(w),k=D.toLocaleString("en-US",{timeZone:"EST"}),y=N.toLocaleString("en-US",{timeZone:"EST"}),_=k.split(" "),T=y.split(" ");_[1],T[1];a.push([D,N])}if((v=O-p)>0&&v<36e6){var C=O+v,E=new Date(p),L=new Date(C),F=E.toLocaleString("en-US",{timeZone:"EST"}),U=L.toLocaleString("en-US",{timeZone:"EST"}),I=F.split(" "),P=U.split(" ");I[1],P[1];a.push([E,L])}}else if(g==n.length-2){if((c=O-p)>0&&c<36e6){var Z=O+c,A=new Date(p),H=new Date(Z),M=A.toLocaleString("en-US",{timeZone:"EST"}),R=H.toLocaleString("en-US",{timeZone:"EST"}),Y=M.split(" "),G=R.split(" ");Y[1],G[1];a.push([A,H])}var B=new Date(p);B.setHours(20),B.setMinutes(0),B.setSeconds(0),(c=B-(x=x.getTime()))>0&&c<36e6&&(r=x,i=x+c,o=new Date(r),l=new Date(i),d=o.toLocaleString("en-US",{timeZone:"EST"}),j=l.toLocaleString("en-US",{timeZone:"EST"}),u=d.split(" "),h=j.split(" "),u[1],h[1],a.push([o,l]))}else{var J=O-p;J>0&&J<36e6&&(r=p,i=O+J,o=new Date(r),l=new Date(i),d=o.toLocaleString("en-US",{timeZone:"EST"}),j=l.toLocaleString("en-US",{timeZone:"EST"}),u=d.split(" "),h=j.split(" "),u[1],h[1],a.push([o,l]))}}console.log("awesome array"),console.log(a);for(var Q=[],V=0;V<a.length;V++){var W;m=(W=a[V])[0];m=new Date(m.setHours(m.getHours()+1));p=W[1];var z=[m,p=new Date(p.setHours(p.getHours()+1))];Q.push(z);var q=String(m),K=(String(p),m.toLocaleString("en-US",{timeZone:"EST",timeStyle:"short",dateStyle:"short"})),X=p.toLocaleString("en-US",{timeZone:"EST",timeStyle:"short",dateStyle:"short"}),$=q.split(" ")[0],ee=m.getMonth()+1,te=m.getDate(),ne=K.split(" "),ae=ne[1]+" "+ne[2],se=X.split(" "),ce=$+" "+ee+"/"+te+": "+ae+" to "+(se[1]+" "+se[2]);console.log("prettty"+ce)}console.log(Q),s(Q),b(Q)}(0,0,Ne)};var u=[],b=function(t){t.map((function(e,t,n){var a=g(e[0]);if(!1!==u.includes(String(a)))return"ignore";u.push(String(a))}));for(var n=[],a=0;a<u.length;a++){for(var c=u[a],r=new Date(c).toLocaleDateString(),i=[],o=0;o<t.length;o++){var l=t[o],d=l[0],j=(l[1],h(d));if(String(j)===String(c)){var b=[],m=String(l[0].toLocaleString()).split(" ");b.start=String(m[1]+" "+m[2]);var p=String(l[1].toLocaleString()).split(" ");b.end=String(p[1]+" "+p[2]),i.push(b)}}var O=[r,i];n.push(O)}console.log("hard yeet"),console.log(n),s(n),e.setOutputReady(!0)};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return new Date(e.toDateString())}var g=function(e){return h(new Date(e))};return Object(l.jsxs)("div",{className:"todo-container",children:[e.outputReady?Object(l.jsx)("div",{children:a.map((function(e){console.log("yoyoyoyo");var t=e[0],n=e[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{children:[t,":"]}),Object(l.jsx)("ul",{children:n.map((function(e){return console.log("item here"),console.log(e),Object(l.jsx)("div",{children:Object(l.jsxs)("li",{children:[e.start," to ",e.end]})})}))})]})})}))}):Object(l.jsx)("button",{className:"btn-upload",onClick:function(){var t=new Date(e.startDate);t.setHours(8),t.setMinutes(0),t.setSeconds(0),t=t.toISOString();var n="";if(null===e.endDate){n=new Date(e.startDate);var a=new Date(e.startDate);e.setEndDate(a),n=new Date(a)}else n=new Date(e.endDate);n.setHours(20),n.setMinutes(0),n.setSeconds(0),n=n.toISOString(),console.log(t),console.log(n);var s={};s.timeMin=t,s.timeMax=n,s.timeZone="America/New_York";for(var c=[],r=0;r<e.selectedCalendars.length;r++){var l={};l.id=e.selectedCalendars[r],c.push(l)}s.items=c;if(null===e.endDate){console.log("we here");e.startDate.getDate(),e.startDate.getDate()}else e.endDate.getDate(),e.startDate.getDate();for(var u=0;u<"";u++){var b=e.startDate.getDate()+u,h=e.startDate,g=new Date;g.setDate(b),g.setHours(8),g.setMinutes(0),g.setSeconds(0),g.setFullYear(h.getFullYear());var m=new Date;m.setDate(b),m.setHours(8),m.setMinutes(30),m.setSeconds(0),m.setFullYear(h.getFullYear());var p=new Date;p.setDate(b),p.setHours(20),p.setMinutes(0),p.setSeconds(0),p.setFullYear(h.getFullYear());var O=new Date;O.setDate(b),O.setHours(20),O.setMinutes(30),O.setSeconds(0),O.setFullYear(h.getFullYear());var x={date:g},f={date:m},v={date:p},S={date:O};i.push(x),o.push(f),i.push(v),o.push(S);var w=[g,m];d.push(w)}return gapi.client.calendar.freebusy.query(s).then((function(t){for(var n=0;n<e.selectedCalendars.length;n++)for(var a=e.selectedCalendars[n],s=t.result.calendars[a].busy,c=0;c<s.length;c++){var r=s[c];console.log("Busy block for "+a,r);var l={date:r.start},d={date:r.end};i.push(l),o.push(d)}j()}),(function(e){console.error("Execute error",e)}))},children:" Fetch free times "}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})},de=n(81),je=n.n(de),ue=(n(132),function(){var e=v.title,t=v.description,n=v.subhead,a=Object(r.useState)(null),s=Object(c.a)(a,2),i=s[0],o=s[1],d=Object(r.useState)([]),j=Object(c.a)(d,2),u=j[0],b=j[1],h=Object(r.useState)([]),g=Object(c.a)(h,2),m=g[0],p=g[1],O=Object(r.useState)(new Date),x=Object(c.a)(O,2),f=x[0],S=x[1],w=Object(r.useState)(null),D=Object(c.a)(w,2),N=D[0],k=D[1],y=Object(r.useState)(!1),_=Object(c.a)(y,2),T=_[0],C=_[1],E="501334517326-6umils6sm37ai65fgh1v2r83s9ggefkg.apps.googleusercontent.com",L=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];Object(r.useEffect)((function(){re.a.load("client:auth2",(function(){re.a.client.init({clientId:E,apiKey:"AIzaSyARUa77-dQ96I7e2tRCHCQexJcmUOEW9ZI",discoveryDocs:L,scope:"https://www.googleapis.com/auth/calendar.readonly"})}))}));var F=function(){return re.a.client.calendar.calendarList.list({}).then((function(e){localStorage.clear(),console.log("Response",e),console.log("YEEEET",e.result.items[0].id);var t=e.result.items;b(t)}),(function(e){console.error("Execute error",e)}))};return Object(l.jsxs)("div",{className:"about center",children:[Object(l.jsxs)("h1",{children:[" ",e," "]}),Object(l.jsxs)("h2",{className:"about__role",children:[n," "]}),Object(l.jsx)("p",{className:"about__desc",children:t&&t}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),i?Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"User Logged in"}),Object(l.jsxs)("p",{children:["Name: ",i.name]}),Object(l.jsxs)("p",{children:["Email Address: ",i.email]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("ul",{id:"checkboxes",children:" Your calendars: "}),Object(l.jsx)(oe,{calendars:u,setCalendars:b,selectedCalendars:m,setSelectedCalendars:p}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(je.a,{selected:f,onChange:function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];S(n),k(a),C(!1)},startDate:f,endDate:N,selectsRange:!0,inline:!0}),Object(l.jsx)("br",{}),Object(l.jsx)(le,{selectedCalendars:m,startDate:f,endDate:N,outputReady:T,setOutputReady:C,setEndDate:k}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(ce.GoogleLogout,{clientId:E,buttonText:"Log out",onLogoutSuccess:function(){o(null)}})]}):Object(l.jsx)(ce.GoogleLogin,{clientId:E,buttonText:"Sign in with Google",onSuccess:function(e){o(e.profileObj),F()},onFailure:function(e){console.log("failed",e)},cookiePolicy:"single_host_origin",isSignedIn:!0})]})});n(177);var be=function(){var e=Object(r.useContext)(d),t=Object(c.a)(e,1)[0].themeName;return Object(l.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(l.jsx)(U,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",element:Object(l.jsx)(he,{})}),Object(l.jsx)(o.a,{path:"autocropper",element:Object(l.jsx)(ae,{})}),Object(l.jsx)(o.a,{path:"fifa-autobidder",element:Object(l.jsx)(se,{})}),Object(l.jsx)(o.a,{path:"free-time-finder-v2",element:Object(l.jsx)(ue,{})})]}),Object(l.jsx)(z,{}),Object(l.jsx)(K,{})]})};function he(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("main",{children:[Object(l.jsx)(H,{}),Object(l.jsx)(J,{}),Object(l.jsx)(Q,{}),Object(l.jsx)(q,{})]})})}n(178);Object(a.render)(Object(l.jsx)(j,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(be,{})})}),document.getElementById("root"))},92:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[182,1,2]]]);
//# sourceMappingURL=main.b56b7116.chunk.js.map