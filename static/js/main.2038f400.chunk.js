(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),d=t(3),s=t.n(d),r=(t(13),t(14),t(15),t(1));var a=function(e){return Object(r.jsxs)("div",{className:"single-day-container",children:[Object(r.jsx)("h2",{children:e.info.day}),Object(r.jsx)("h4",{children:e.info.degrees}),Object(r.jsx)("p",{children:e.info.description})]})};t(17);var o=function(e){return Object(r.jsx)("div",{className:"days-row-container",children:e.dayInfo.map((function(e,n){return Object(r.jsx)(a,{info:e},n)}))})};t(18);var y=function(e){return Object(r.jsx)("button",{className:"city-button",onClick:function(){return e.onClick(e.city)},children:e.city.name})},u=t(2);t(23);var l=function(e){var n=Object(u.b)();function t(e){n({type:"SET_CITY",citySymbol:e.symbol})}return Object(r.jsx)("div",{className:"city-buttons-row",children:e.cities.map((function(e){return Object(r.jsx)(y,{onClick:t,city:e},e.name)}))})};var j=function(){var e=Object(u.c)((function(e){return e.selectedCity})),n=Object(u.c)((function(e){return e.cities})),t=Object(u.c)((function(n){return n.weather[e]})),c=Object(u.c)((function(n){return n.cities.find((function(n){return n.symbol===e})).name}));return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{className:"page-title",children:[t.length,"-day Forcast"]}),Object(r.jsx)("h3",{className:"page-subtitle",children:c}),Object(r.jsx)(o,{dayInfo:t}),Object(r.jsx)(l,{cities:n})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,d=n.getLCP,s=n.getTTFB;t(e),c(e),i(e),d(e),s(e)}))},f=t(7),p=t(8);var h=Object(p.a)((function(e,n){return"SET_CITY"===n.type?Object(f.a)(Object(f.a)({},e),{},{selectedCity:n.citySymbol}):e}),{selectedCity:"HAF",cities:[{name:"Haifa",symbol:"HAF"},{name:"Tel-Aviv",symbol:"TLV"},{name:"Jerusalem",symbol:"JLM"}],weather:{HAF:[{day:"Sunday",degrees:"28",description:"Nice and sunny"},{day:"Monday",degrees:"24",description:"Nice and sunny"},{day:"Tuesday",degrees:"22",description:"Clear and cool"},{day:"Wednesday",degrees:"29",description:"Nice and sunny"},{day:"Thursday",degrees:"31",description:"Very hot"}],TLV:[{day:"Sunday",degrees:"31",description:"Very hot"},{day:"Monday",degrees:"28",description:"Nice and sunny"},{day:"Tuesday",degrees:"25",description:"Perfect day"},{day:"Wednesday",degrees:"27",description:"Nice and sunny"},{day:"Thursday",degrees:"34",description:"Satan's balls"}],JLM:[{day:"Sunday",degrees:"25",description:"Nice and sunny"},{day:"Monday",degrees:"23",description:"Nice and sunny"},{day:"Tuesday",degrees:"21",description:"Clear and cool"},{day:"Wednesday",degrees:"18",description:"A Bit Cold"},{day:"Thursday",degrees:"19",description:"A Bit Cold"}]}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u.a,{store:h,children:Object(r.jsx)(j,{})})}),document.getElementById("root")),b()}],[[24,1,2]]]);
//# sourceMappingURL=main.2038f400.chunk.js.map