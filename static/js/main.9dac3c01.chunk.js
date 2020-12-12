(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a(7),i=a.n(s),r=a(9),o=a(6),l=a.n(o),j=a(8),u=a(4),v=(a(16),function(e){var t=e.favouriteComponent;return Object(c.jsx)(n.Fragment,{children:e.movies.map((function(a,n){return Object(c.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(c.jsx)("img",{src:a.Poster,alt:a.Title}),Object(c.jsx)("div",{className:"overlay d-flex align-items-center justify-content-center",onClick:function(){return e.handleFavMoviesClick(a)},children:Object(c.jsx)(t,{})})]},n)}))})}),d=function(e){return Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("h1",{children:e.heading})})},m=function(e){return Object(c.jsx)("div",{className:"col col-sm-4",children:Object(c.jsx)("input",{className:"form-control",type:"text",placeholder:"Type to search ...",value:e.searchValue,onChange:function(t){return e.setSearchValue(t.target.value)}})})},h=function(){return Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Add to favourites List"}),Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},f=function(){return Object(c.jsxs)(n.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Delete "}),Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"yellow",className:"bi bi-trash-fill",viewBox:"0 0 16 16",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"})})]})},b=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),b=o[0],x=o[1],O=Object(n.useState)(""),p=Object(u.a)(O,2),g=p[0],w=p[1],N=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"s","d5fa7f35",a="http://www.omdbapi.com/?".concat("s","=").concat(t,"&apikey=").concat("d5fa7f35"),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:(n=e.sent).Search&&s(n.Search);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N(g)}),[g]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favMovie"));x(e)}),[]);var S=function(e){localStorage.setItem("react-movie-app-favMovie",JSON.stringify(e))};return Object(c.jsx)(n.Fragment,{children:Object(c.jsxs)("div",{className:"container-fluid movie-app",children:[Object(c.jsxs)("div",{className:"row d-flex align-items-center mt-3 mb-3",children:[Object(c.jsx)(d,{heading:"Movies"}),Object(c.jsx)(m,{searchValue:g,setSearchValue:w})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(v,{movies:a,favouriteComponent:h,handleFavMoviesClick:function(e){var t=[].concat(Object(r.a)(b),[e]);x(t),S(t)}})}),Object(c.jsx)("div",{className:"row d-flex align-items-center mt-3 mb-3",children:Object(c.jsx)(d,{heading:"Your Favourites"})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(v,{movies:b,favouriteComponent:f,handleFavMoviesClick:function(e){var t=b.filter((function(t){return t.imdbID!==e.imdbID}));x(t),S(t)}})})]})})};i.a.render(Object(c.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9dac3c01.chunk.js.map