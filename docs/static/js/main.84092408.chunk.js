(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{22:function(e,a,r){e.exports=r(44)},44:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),c=r(19),l=r.n(c),s=r(3),i=r(1),o=function(e){var a=e.history;return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Login"),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){a.replace("/")}},"Login"))},m=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],u=function(e){return n.a.createElement("div",{className:"card ms-3",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{className:"card-img",alt:e.superhero,src:"../heroes-app/assets/heroes/".concat(e.id,".jpg")})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},e.superhero),n.a.createElement("p",{className:"card-text"},e.alter_ego),e.alter_ego!==e.characters&&n.a.createElement("p",{className:"card-text"},e.characters),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",null,e.first_appearance)),n.a.createElement(s.b,{to:"./hero/".concat(e.id)},"More...")))))},p=function(e){var a=Object(t.useMemo)((function(){return function(e){var a=e.publisher;if(!["DC Comics","Marvel Comics"].includes(a))throw new Error("Publisher ".concat(a," no es correcto"));return m.filter((function(e){return e.publisher===a}))}(e)}),[e]);return n.a.createElement("div",{className:"card-columns animate__animated animate__fadeIn"},a.map((function(e){return n.a.createElement(u,Object.assign({key:e.id},e))})))},h=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Heroes DC"),n.a.createElement("hr",null),n.a.createElement(p,{publisher:"DC Comics"}))},d=function(e){var a=e.history,r=Object(i.h)().heroId,c=Object(t.useMemo)((function(){return e=r,m.find((function(a){return a.id===e}));var e}),[r]);if(!c)return n.a.createElement(i.a,{to:"/"});return n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{className:"img-thumbnail animate__animated animate__fadeInLeft",src:"../heroes-app/assets/heroes/".concat(r,".jpg"),alt:c.superhero})),n.a.createElement("div",{className:"col-8 animate__animated animate__fadeIn"},n.a.createElement("h3",null,c.superhero),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Alter ego: "),c.alter_ego),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Publisher: "),c.publisher),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"First Appearance: "),c.first_appearance)),n.a.createElement("h5",{className:"mt-3"},"Characters"),n.a.createElement("p",null,c.characters),n.a.createElement("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()}},"Return")))},v=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Heroes Marvel"),n.a.createElement("hr",null),n.a.createElement(p,{publisher:"Marvel Comics"}))},E=r(10),b=r(21),f=r.n(b),C=r(9),g=r(15),_=function(e){var a=e.history,r=Object(i.g)(),c=f.a.parse(r.search).q,l=void 0===c?"":c,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(E.a)(a,2),n=r[0],c=r[1],l=function(){c(e)},s=function(e){var a=e.target;c(Object(g.a)(Object(g.a)({},n),{},Object(C.a)({},a.name,a.value)))};return[n,s,l]}({searchField:l}),o=Object(E.a)(s,2),p=o[0],h=o[1],d=p.searchField,v=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),m.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(l)}),[l]);return n.a.createElement("div",null,n.a.createElement("h1",null,"Search"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h4",null,"Search Form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(d))}},n.a.createElement("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchField",value:d,onChange:h}),n.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block mt-1"},"Search"))),n.a.createElement("div",{className:"col-7"},n.a.createElement("h4",null,"Results"),n.a.createElement("hr",null),""===l&&n.a.createElement("div",{className:"alert alert-info"},"Search a Hero"),""!==l&&0===v.length&&n.a.createElement("div",{className:"alert alert-danger"},"No Hero found"),v.map((function(e){return n.a.createElement("div",{className:"animate__animated animate__fadeInUp"},n.a.createElement(u,Object.assign({key:e.id},e)))})))))},N=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Asociaciones"),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel"},"Marvel"),n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc"},"DC"),n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search"},"Search"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login"},"Logout"))))},y=function(){return n.a.createElement(t.Fragment,null,n.a.createElement(N,null),n.a.createElement("div",{className:"container mt-3"},n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/marvel",component:v}),n.a.createElement(i.b,{exact:!0,path:"/dc",component:h}),n.a.createElement(i.b,{exact:!0,path:"/hero/:heroId",component:d}),n.a.createElement(i.b,{exact:!0,path:"/search",component:_}),n.a.createElement(i.a,{to:"/marvel"}))))},M=function(){return n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/login",component:o}),n.a.createElement(i.b,{path:"/",component:y}))))},k=function(){return n.a.createElement(M,null)};l.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.84092408.chunk.js.map