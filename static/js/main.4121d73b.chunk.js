(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{49:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(27),a=c.n(r),i=c(29),o=c(25),l=c(17),j=(c(49),c(73)),d=c(74),m=c(43),u=c(2),b=function(){return Object(u.jsxs)(j.a,{variant:"dark",expand:"md",children:[Object(u.jsx)(d.a.Link,{className:"navbar-brand pt-0",href:"",children:Object(u.jsx)(m.a,{})}),Object(u.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(d.a,{className:"mr-auto",children:[Object(u.jsx)(i.b,{to:"/music-player-web-app",exact:!0,activeClassName:"active",className:"nav-link",children:"All songs"}),Object(u.jsx)(i.b,{to:"/fav",className:"nav-link",children:"Favorite songs"})]})})]})},x=c(20),g=c.n(x),O=c(28),v=c(77),f=c(8),h=c(76),p=c.p+"static/media/Hope.833ba834.jpg",N=c.p+"static/media/Hope.55385ce8.mp3",S=c.p+"static/media/Sunset.d8d7b1bb.jpg",_=c.p+"static/media/Sunset.a5612ae9.mp3",w=c.p+"static/media/Saeng_You.40471fc9.jpg",C=c.p+"static/media/Saeng_You.28ecd857.mp3",y=c.p+"static/media/You.213ddc5f.jpg",k=c.p+"static/media/You.f13ca7b6.mp3",z=c.p+"static/media/Ocean_Blue.537e50f0.jpg",T=c.p+"static/media/Ocean_Blue.95edbca8.mp3",F=c.p+"static/media/Distraction.6dae191f.jpg",L=c.p+"static/media/Distraction.4d359759.mp3",I=c.p+"static/media/Secret_to_Happiness.7bbe26fb.jpg",M=c.p+"static/media/Secret_to_Happiness.dc1aa566.mp3",H=c.p+"static/media/Hey.f46f3060.jpg",B=c.p+"static/media/Hey.b6972ff7.mp3";var E=Object(n.createContext)({currentSong:"",setCurrentSong:"",songsList:"",setSongsList:"",songHandler:"",setSongHandler:"",currentTime:"",setCurrentTime:"",fullTime:"",setFullTime:"",favList:"",setFavList:"",currentSongFav:"",setCurrentSongFav:"",songHandlerFav:"",setSongHandlerFav:""}),R=function(e){var t=e.children,c=Object(n.useState)([{name:"Hope",singer:"Mark Eliyahu",id:Object(h.a)(),cover:p,address:N,favorite:!1},{name:"Sunset",singer:"Waimis",id:Object(h.a)(),cover:S,address:_,favorite:!1},{name:"Saeng You",singer:"DayFox",id:Object(h.a)(),cover:w,address:C,favorite:!1},{name:"You",singer:"Approaching Nirvana",id:Object(h.a)(),cover:y,address:k,favorite:!1},{name:"Ocean Blue",singer:"InRp",id:Object(h.a)(),cover:z,address:T,favorite:!1},{name:"Distraction",singer:"Hossein Khezri",id:Object(h.a)(),cover:F,address:L,favorite:!1},{name:"Secret to Happiness",singer:"Jayjen",id:Object(h.a)(),cover:I,address:M,favorite:!1},{name:"Hey",singer:"Various Artists",id:Object(h.a)(),cover:H,address:B,favorite:!1}]),s=Object(l.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)([{name:r[0].name,singer:r[0].singer,id:r[0].id,cover:r[0].cover,address:r[0].address,favorite:r[0].favorite}]),o=Object(l.a)(i,2),j=o[0],d=o[1],m=Object(n.useState)(!1),b=Object(l.a)(m,2),x=b[0],g=b[1],O=Object(n.useState)(),v=Object(l.a)(O,2),f=v[0],R=v[1],Y=Object(n.useState)(),D=Object(l.a)(Y,2),P=D[0],A=D[1],J=Object(n.useState)([]),V=Object(l.a)(J,2),W=V[0],K=V[1],q=Object(n.useState)([]),G=Object(l.a)(q,2),Q=G[0],U=G[1],X=Object(n.useState)(!1),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1];return Object(u.jsx)(E.Provider,{value:{currentSong:j,setCurrentSong:d,songsList:r,setSongsList:a,songHandler:x,setSongHandler:g,currentTime:f,setCurrentTime:R,fullTime:P,setFullTime:A,favList:W,setFavList:K,currentSongFav:Q,setCurrentSongFav:U,songHandlerFav:$,setSongHandlerFav:ee},children:t})},Y=c(5),D=function(e){var t=e.name,c=e.cover,s=e.singer,r=e.id,a=Object(n.useContext)(E),i=a.setCurrentSong,o=a.songsList,l=a.setCurrentSongFav,j=a.favList;return Object(u.jsxs)(Y.c,{children:[Object(u.jsx)(Y.a,{path:"/",exact:!0,children:Object(u.jsx)("div",{className:"songItem mx-3 mb-1",onClick:function(){var e=o.filter((function(e){return e.id===r}));i(e)},children:Object(u.jsxs)(v.a,{className:"songItem_box",children:[Object(u.jsx)(v.a.Img,{className:"songItem_box-img w-auto m-2",src:c}),Object(u.jsxs)(v.a.Body,{className:"p-1 text-center",children:[Object(u.jsx)(v.a.Title,{className:"mb-0",children:t}),Object(u.jsx)(v.a.Text,{children:s})]})]})})}),Object(u.jsx)(Y.a,{path:"/fav",children:Object(u.jsx)("div",{className:"songItem mx-3 mb-1",onClick:function(){var e=j.filter((function(e){return e.id===r}));l(e)},children:Object(u.jsxs)(v.a,{className:"songItem_box",children:[Object(u.jsx)(v.a.Img,{className:"songItem_box-img w-auto m-2",src:c}),Object(u.jsxs)(v.a.Body,{className:"p-1 text-center",children:[Object(u.jsx)(v.a.Title,{className:"mb-0",children:t}),Object(u.jsx)(v.a.Text,{children:s})]})]})})})]})},P=c(71),A=c(75),J=(c(63),c(64),c(65),c(72)),V=c(69),W=c(70);J.a.use([V.a,W.a]);var K=function(e){var t=e.children,c=e.width;return Object(u.jsx)(u.Fragment,{children:c>=576?Object(u.jsx)(A.a,{slidesPerView:1.5,spaceBetween:30,freeMode:!0,grabCursor:!0,navigation:!0,scrollbar:{hide:!0},className:"mySwiper",children:t}):Object(u.jsx)(A.a,{slidesPerView:2.5,spaceBetween:10,freeMode:!0,navigation:!0,scrollbar:{hide:!0},className:"mySwiper",children:t})})},q=Object(Y.f)((function(e){var t=e.time,c=e.setToFav,s=e.width,r=e.audioRef,a=e.goNext,i=Object(n.useContext)(E),o=i.currentSong,l=i.setCurrentSong,j=i.songHandler,d=i.setSongHandler,m=i.currentTime,b=i.setCurrentTime,x=i.fullTime,h=i.setFullTime,p=i.songsList;Object(n.useEffect)((function(){(function(){var e=Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=5;break}return e.next=3,r.current.play();case 3:e.next=7;break;case 5:return e.next=7,r.current.pause();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var e=setInterval(Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(r.current.currentTime);case 2:return e.next=4,h(r.current.duration);case 4:case"end":return e.stop()}}),e)}))),1e3);return function(){clearInterval(e)}}),[j,o]);var N=p.findIndex((function(e){return e.id===o[0].id}));function S(){l(0===N?[p[p.length-1]]:[p[N-1]])}var _=Object(n.useRef)(),w=Object(n.useRef)();return Object(u.jsx)(u.Fragment,{children:s>778?Object(u.jsx)("div",{className:"currentSong",style:{backgroundImage:"linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url("+o[0].cover+")"},children:Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-5 col-xl-3 p-0 d-flex justify-content-end",children:Object(u.jsxs)(v.a,{className:"currentSong_box",children:[Object(u.jsx)(v.a.Img,{className:"currentSong_box-img mx-auto",src:o[0].cover}),j?Object(u.jsx)(f.b,{onClick:function(){return d(!j)},size:"4rem",className:"currentSong_box-icon"}):Object(u.jsx)(f.c,{onClick:function(){return d(!j)},size:"4rem",className:"currentSong_box-icon"}),Object(u.jsxs)(v.a.Body,{children:[Object(u.jsx)(v.a.Title,{children:o[0].name}),Object(u.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(u.jsx)(v.a.Text,{children:o[0].singer}),Object(u.jsxs)("div",{className:"visualizer d-flex align-items-baseline",children:[Object(u.jsx)("div",{className:"visualizer_icon"}),Object(u.jsx)("div",{className:"visualizer_icon2"}),Object(u.jsx)("div",{className:"visualizer_icon3"})]})]})]})]})}),Object(u.jsx)("div",{className:"col-7 col-xl-9",children:Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("div",{className:"currentSong_caption",children:Object(u.jsxs)("div",{className:"row justify-content-between w-100 align-items-center",children:[Object(u.jsxs)("div",{className:"col-6 ml-3",children:[Object(u.jsx)("h2",{className:"font-weight-bold",children:o[0].name}),Object(u.jsx)("h4",{children:o[0].singer})]}),Object(u.jsxs)("div",{className:"col-5 d-flex flex-column align-items-end mr-xl-auto",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(f.f,{onClick:S,size:"2rem",className:"m-2 currentSong_caption-icon"}),j?Object(u.jsx)(f.b,{onClick:function(){return d(!j)},size:"2.5rem",className:"m-2 currentSong_caption-icon"}):Object(u.jsx)(f.c,{onClick:function(){return d(!j)},size:"2.5rem",className:"m-2 currentSong_caption-icon"}),Object(u.jsx)(f.g,{onClick:a,size:"2rem",className:"ml-2 currentSong_caption-icon"})]}),o[0].favorite?Object(u.jsx)(f.a,{onClick:c,size:"2rem",className:"currentSong_caption-icon"}):Object(u.jsx)(f.d,{onClick:c,size:"2rem",className:"currentSong_caption-icon"})]})]})})}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsxs)("div",{className:"currentSong_time d-flex justify-content-between",children:[Object(u.jsx)("span",{className:"ml-2",children:t(m)}),Object(u.jsx)("span",{className:"mr-2",children:t(x)})]}),Object(u.jsx)("div",{className:"currentSong_range",children:Object(u.jsxs)("div",{className:"currentSong_range-slider",children:[Object(u.jsx)("div",{className:"progress",style:{width:m/x*100+"%"}}),Object(u.jsx)("input",{type:"range",onChange:function(e){return r.current.currentTime=e.target.value},min:"0",max:x,value:m})]})})]})]})})]})}):Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"currentSongMobile",style:{backgroundImage:"linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url(".concat(o[0].cover,")")},children:Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-11 col-sm-6 p-0 d-flex justify-content-center ml-1",children:Object(u.jsxs)(v.a,{className:"currentSongMobile_box",children:[Object(u.jsxs)("div",{className:"currentSongMobile_box-img mx-auto mt-3",ref:w,onLoad:function(){var e=_.current.width;w.current.height=e,console.log(w.current.height),console.log(_.current.height)},children:[Object(u.jsx)(v.a.Img,{className:"currentSongMobile_box-img-shadow mx-auto",src:o[0].cover,ref:_}),Object(u.jsxs)("div",{className:"currentSongMobile_box-img-icon",children:[Object(u.jsx)(f.f,{onClick:S,size:s<=580?"2rem":"3rem",className:"m-2 currentSong_caption-icon"}),j?Object(u.jsx)(f.b,{onClick:function(){return d(!j)},size:s<=600?"2.5rem":"3.5rem",className:"m-2 currentSong_caption-icon"}):Object(u.jsx)(f.c,{onClick:function(){return d(!j)},size:s<=580?"2.5rem":"3.5rem",className:"m-2 currentSong_caption-icon"}),Object(u.jsx)(f.g,{onClick:a,size:s<=580?"2rem":"3rem",className:"m-2 currentSong_caption-icon"})]})]}),Object(u.jsxs)(v.a.Body,{className:"",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)(v.a.Title,{className:"font-weight-bold",children:o[0].name}),o[0].favorite?Object(u.jsx)(f.a,{onClick:c,size:"2rem",className:"currentSong_caption-icon"}):Object(u.jsx)(f.d,{onClick:c,size:"2rem",className:"currentSong_caption-icon"})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(u.jsx)(v.a.Text,{children:o[0].singer}),Object(u.jsxs)("div",{className:"visualizer d-flex align-items-baseline",children:[Object(u.jsx)("div",{className:"visualizer_icon"}),Object(u.jsx)("div",{className:"visualizer_icon2"}),Object(u.jsx)("div",{className:"visualizer_icon3"})]})]}),Object(u.jsxs)("div",{className:"currentSongMobile_time d-flex justify-content-between font-weight-bold",children:[Object(u.jsx)("span",{children:t(m)}),Object(u.jsx)("span",{children:t(x)})]}),Object(u.jsx)("div",{className:"currentSongMobile_range",children:Object(u.jsxs)("div",{className:"currentSongMobile_range-slider",children:[Object(u.jsx)("div",{className:"progress",style:{width:m/x*100+1+"%"}}),Object(u.jsx)("input",{type:"range",onChange:function(e){return r.current.currentTime=e.target.value},min:"0",max:x,value:m})]})})]})]})}),Object(u.jsx)("div",{className:"songListMobile col-sm-5 col-11 mx-auto",children:Object(u.jsx)(K,{width:s,children:p.map((function(e){return Object(u.jsx)(P.a,{children:Object(u.jsx)(D,{name:e.name,singer:e.singer,cover:e.cover,id:e.id},e.id)})}))})})]})})})})})),G=function(){var e=Object(n.useContext)(E),t=e.songsList,c=e.favList;return Object(u.jsx)("div",{className:"row no-gutters",children:Object(u.jsx)("div",{className:"col-7 col-xl-9 offset-5 offset-xl-3",children:Object(u.jsx)("div",{className:"songList mt-2 ml-2 d-flex",children:Object(u.jsxs)(Y.c,{children:[Object(u.jsx)(Y.a,{path:"/",exact:!0,children:t.map((function(e){return Object(u.jsx)(D,{name:e.name,singer:e.singer,cover:e.cover,id:e.id},e.id)}))}),Object(u.jsx)(Y.a,{path:"/fav",children:c.map((function(e){return Object(u.jsx)(D,{name:e.name,singer:e.singer,cover:e.cover,id:e.id},e.id)}))})]})})})})},Q=Object(Y.f)((function(e){var t=e.time,c=e.width,s=e.removeFromFav,r=Object(n.useContext)(E),a=r.currentSongFav,i=r.setCurrentSongFav,o=r.currentTime,l=r.setCurrentTime,j=r.fullTime,d=r.setFullTime,m=r.favList,b=r.songHandlerFav,x=r.setSongHandlerFav,h=Object(n.useRef)(),p=m.findIndex((function(e){return e.id===a[0].id}));function N(){p===m.length-1?i([m[0]]):i([m[p+1]])}function S(){i(0===p?[m[m.length-1]]:[m[p-1]])}Object(n.useEffect)((function(){(function(){var e=Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=5;break}return e.next=3,h.current.play();case 3:e.next=7;break;case 5:return e.next=7,h.current.pause();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var e=setInterval(Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(h.current.currentTime);case 2:return e.next=4,d(h.current.duration);case 4:case"end":return e.stop()}}),e)}))),1e3);return function(){clearInterval(e)}}),[b,a]);var _=Object(n.useRef)(),w=Object(n.useRef)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("audio",{src:a[0].address,ref:h,onEnded:N}),c>778?Object(u.jsx)("div",{className:"currentSong",style:{backgroundImage:"linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url("+a[0].cover+")"},children:Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-5 col-xl-3 p-0 d-flex justify-content-end",children:Object(u.jsxs)(v.a,{className:"currentSong_box",children:[Object(u.jsx)(v.a.Img,{className:"currentSong_box-img mx-auto",src:a[0].cover}),b?Object(u.jsx)(f.b,{onClick:function(){return x(!b)},size:"4rem",className:"currentSong_box-icon"}):Object(u.jsx)(f.c,{onClick:function(){return x(!b)},size:"4rem",className:"currentSong_box-icon"}),Object(u.jsxs)(v.a.Body,{children:[Object(u.jsx)(v.a.Title,{children:a[0].name}),Object(u.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(u.jsx)(v.a.Text,{children:a[0].singer}),Object(u.jsxs)("div",{className:"visualizer d-flex align-items-baseline",children:[Object(u.jsx)("div",{className:"visualizer_icon"}),Object(u.jsx)("div",{className:"visualizer_icon2"}),Object(u.jsx)("div",{className:"visualizer_icon3"})]})]})]})]})}),Object(u.jsx)("div",{className:"col-7 col-xl-9",children:Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("div",{className:"currentSong_caption",children:Object(u.jsxs)("div",{className:"row justify-content-between w-100 align-items-center",children:[Object(u.jsxs)("div",{className:"col-6 ml-3",children:[Object(u.jsx)("h2",{className:"font-weight-bold",children:a[0].name}),Object(u.jsx)("h4",{children:a[0].singer})]}),Object(u.jsxs)("div",{className:"col-5 d-flex flex-column align-items-end mr-xl-auto",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(f.f,{onClick:S,size:"2rem",className:"m-2 currentSong_caption-icon"}),b?Object(u.jsx)(f.b,{onClick:function(){return x(!b)},size:"2.5rem",className:"m-2 currentSong_caption-icon"}):Object(u.jsx)(f.c,{onClick:function(){return x(!b)},size:"2.5rem",className:"m-2 currentSong_caption-icon"}),Object(u.jsx)(f.g,{onClick:N,size:"2rem",className:"ml-2 currentSong_caption-icon"})]}),Object(u.jsx)(f.a,{onClick:s,size:"2rem",className:"currentSong_caption-icon"})]})]})})}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsxs)("div",{className:"currentSong_time d-flex justify-content-between",children:[Object(u.jsx)("span",{className:"ml-2",children:t(o)}),Object(u.jsx)("span",{className:"mr-2",children:t(j)})]}),Object(u.jsx)("div",{className:"currentSong_range",children:Object(u.jsxs)("div",{className:"currentSong_range-slider",children:[Object(u.jsx)("div",{className:"progress",style:{width:o/j*100+"%"}}),Object(u.jsx)("input",{type:"range",onChange:function(e){return h.current.currentTime=e.target.value},min:"0",max:j,value:o})]})})]})]})})]})}):Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"currentSongMobile",style:{backgroundImage:"linear-gradient(0deg,rgba(35,53,74,0.7),rgba(35,53,74,0.85)), url("+a[0].cover+")"},children:Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-11 col-sm-6 p-0 d-flex justify-content-end",children:Object(u.jsxs)(v.a,{className:"currentSongMobile_box",children:[Object(u.jsxs)("div",{className:"currentSongMobile_box-img mx-auto mt-3",ref:w,onLoad:function(){var e=_.current.width;w.current.height=e,console.log(w.current.height),console.log(_.current.height)},children:[Object(u.jsx)(v.a.Img,{className:"currentSongMobile_box-img-shadow mx-auto",src:a[0].cover,ref:_}),Object(u.jsxs)("div",{className:"currentSongMobile_box-img-icon mx-auto",children:[Object(u.jsx)(f.f,{onClick:S,size:c<=580?"2rem":"3rem",className:"m-2 currentSong_caption-icon"}),b?Object(u.jsx)(f.b,{onClick:function(){return x(!b)},size:c<=600?"2.5rem":"3.5rem",className:"m-2 currentSong_caption-icon"}):Object(u.jsx)(f.c,{onClick:function(){return x(!b)},size:c<=580?"2.5rem":"3.5rem",className:"m-2 currentSong_caption-icon"}),Object(u.jsx)(f.g,{onClick:N,size:c<=580?"2rem":"3rem",className:"m-2 currentSong_caption-icon"})]})]}),Object(u.jsxs)(v.a.Body,{className:"",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)(v.a.Title,{className:"font-weight-bold",children:a[0].name}),Object(u.jsx)(f.a,{onClick:s,size:"2rem",className:"currentSong_caption-icon"})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(u.jsx)(v.a.Text,{children:a[0].singer}),Object(u.jsxs)("div",{className:"visualizer d-flex align-items-baseline",children:[Object(u.jsx)("div",{className:"visualizer_icon"}),Object(u.jsx)("div",{className:"visualizer_icon2"}),Object(u.jsx)("div",{className:"visualizer_icon3"})]})]}),Object(u.jsxs)("div",{className:"currentSongMobile_time d-flex justify-content-between font-weight-bold",children:[Object(u.jsx)("span",{children:t(o)}),Object(u.jsx)("span",{children:t(j)})]}),Object(u.jsx)("div",{className:"currentSongMobile_range",children:Object(u.jsxs)("div",{className:"currentSongMobile_range-slider",children:[Object(u.jsx)("div",{className:"progress",style:{width:o/j*100+"%"}}),Object(u.jsx)("input",{type:"range",onChange:function(e){return h.current.currentTime=e.target.value},min:"0",max:j,value:o})]})})]})]})}),Object(u.jsx)("div",{className:"songListMobile col-11 col-sm-5 ml-3",children:Object(u.jsx)(K,{width:c,children:m.map((function(e){return Object(u.jsx)(P.a,{children:Object(u.jsx)(D,{name:e.name,singer:e.singer,cover:e.cover,id:e.id},e.id)})}))})})]})})})]})})),U=c.p+"static/media/404.c748044f.png";var X=Object(Y.f)((function(){var e=function(){var e=Object(n.useState)([0]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useLayoutEffect)((function(){function e(){s([window.innerWidth])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c}(),t=Object(l.a)(e,1)[0],c=Object(n.useContext)(E),s=c.currentSong,r=c.setCurrentSong,a=c.currentSongFav,i=c.songsList,j=c.setSongsList,d=c.favList,m=c.setFavList,x=c.setCurrentSongFav;function g(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)}Object(n.useEffect)((function(){var e=i.filter((function(e){return!0===e.favorite}));m(e)}),[i]),Object(n.useEffect)((function(){void 0!==d[0]?x([{name:d[0].name,singer:d[0].singer,id:d[0].id,cover:d[0].cover,address:d[0].address,favorite:d[0].favorite}]):x([])}),[d]);var O=Object(n.useRef)();function v(){var e=i.findIndex((function(e){return e.id===s[0].id}));e===i.length-1?r([i[0]]):r([i[e+1]])}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(Y.c,{children:[Object(u.jsxs)(Y.a,{path:"/music-player-web-app",exact:!0,children:[Object(u.jsx)("audio",{src:s[0].address,ref:O,onEnded:v}),Object(u.jsx)(q,{time:g,setToFav:function(){var e=i.map((function(e){return e.id===s[0].id?Object(o.a)(Object(o.a)({},e),{},{favorite:!e.favorite}):Object(o.a)({},e)}));j(e),s[0].favorite=!s[0].favorite},width:t,audioRef:O,goNext:v})]}),Object(u.jsx)(Y.a,{path:"/fav",exact:!0,children:void 0!==a[0]?Object(u.jsx)(Q,{time:g,width:t,removeFromFav:function(){var e=i.map((function(e){return e.id===a[0].id?Object(o.a)(Object(o.a)({},e),{},{favorite:!e.favorite}):Object(o.a)({},e)}));j(e),r([{name:i[0].name,singer:i[0].singer,id:i[0].id,cover:i[0].cover,address:i[0].address,favorite:i[0].favorite}])}}):Object(u.jsxs)("h1",{className:"fav_message text-center mt-3",children:["There is no favorite song",Object(u.jsx)(f.e,{size:"2rem",className:"emoji"})]})}),Object(u.jsx)(Y.a,{children:Object(u.jsx)("div",{className:"text-center mt-3",children:Object(u.jsx)("img",{src:U,alt:"page not found",className:"img-fluid"})})})]}),t<=778?null:Object(u.jsx)(G,{})]})})),Z=function(){return Object(u.jsx)(R,{children:Object(u.jsx)(X,{})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[66,1,2]]]);
//# sourceMappingURL=main.4121d73b.chunk.js.map