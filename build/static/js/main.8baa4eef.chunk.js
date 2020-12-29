(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},27:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);n(27);var a=n(0),o=n.n(a),r=n(15),s=n.n(r),i=n(16),l=n(7),c=n(8),u=n(10),p=n(9),h=n(11),d=n(4),m=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Header"},o.a.createElement("h1",{className:"nav-header"},o.a.createElement(i.b,{to:"/"},"Petful")))}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Homepage"},o.a.createElement("div",{className:"page-container"},o.a.createElement("h2",{className:"welcome"},"Welcome to Petful!"),o.a.createElement("div",{className:"process-container"},o.a.createElement("p",null,'Petful is an animal shelter that treats all animals with fairness. We follow a strict "first-in-first-out" policy. The focus here is to get all our animals placed in their forever-home without spending too much time in the shelter.'),o.a.createElement("p",null,"We treat our animals with all the love we can spare, but no matter how well they're treated, it's stressful on animals to spend too much time in the shelter. That's why, when an animal comes to our shelter we make sure to find them a home as fast as possible, without neglecting any other animals."),o.a.createElement("p",null,"To adopt an animal, enter your name below. You'll be placed in a queue and when it's your turn, we'll show you the dog or cat available to you."),o.a.createElement("h3",null,"Can you provide a forever home to an animal in need?",o.a.createElement("br",null),o.a.createElement(i.b,{className:"adopt",to:"/adoption"},"Adopt Now!")))))}}]),t}(a.Component),g=n(24),E="http://localhost:8000",b={getCats:function(){return fetch("".concat(E,"/pets/cats/next")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getDogs:function(){return fetch("".concat(E,"/pets/dogs/next")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getPeople:function(){return fetch("".concat(E,"/people")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postPerson:function(e){return fetch("".concat(E,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getNextPerson:function(){return fetch("".concat(E,"/people/next")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},dequeueCats:function(){return fetch("".concat(E,"/pets/cats/next"),{method:"DELETE",headers:{"content-type":"application/json"}})},dequeueDogs:function(){return fetch("".concat(E,"/pets/dogs/next"),{method:"DELETE",headers:{"content-type":"application/json"}})}},j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={pet:{}},n.dequeueAndPeek=function(){n.props.dequeue().then(n.props.getNextPet).then((function(){b.getPeople().then((function(e){n.props.setLine(e)}))})).then((function(){n.props.handleShow(),n.props.toggleAdopt(),n.props.setInLine()}))},n.showButton=function(){return n.props.adopt&&o.a.createElement("button",{className:"btn",onClick:function(){return n.dequeueAndPeek()}},"Pick Me!")},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.pet,t=e.age,n=e.breed,a=e.description,r=e.gender,s=e.imageURL,i=e.name,l=e.story;return o.a.createElement("div",{className:"pet-container"},o.a.createElement("h1",null,this.props.title),o.a.createElement("img",{className:"pet-img",src:s,alt:"pet"}),o.a.createElement("div",{className:"pet-details-container"},o.a.createElement("ul",{className:"pet-details"},o.a.createElement("h2",null,i),o.a.createElement("li",null,"Breed: ",n," ")," ",o.a.createElement("li",null,"Gender: ",r)," ",o.a.createElement("li",null,"Age: ",t),o.a.createElement("li",null,"Story: ",l),o.a.createElement("li",null,"Description: ",a)),this.showButton()))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).renderError=function(){return o.a.createElement("h1",null,"No more pets!")},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"pet-list"},this.props.cat.message?o.a.createElement("div",{className:"error"},this.renderError()):o.a.createElement(j,{title:"Cat",key:"Cat",toggleAdopt:this.props.toggleAdopt,dequeue:b.dequeueCats,adopt:this.props.adopt,pet:this.props.cat,getNextPet:this.props.nextCat,handleShow:this.props.handleShow,setInLine:this.props.setInLine,setLine:this.props.setLine}),this.props.dog.message?o.a.createElement("div",{className:"error"},this.renderError()):o.a.createElement(j,{title:"Dog",key:"Dog",toggleAdopt:this.props.toggleAdopt,dequeue:b.dequeueDogs,adopt:this.props.adopt,pet:this.props.dog,getNextPet:this.props.nextDog,handleShow:this.props.handleShow,setInLine:this.props.setInLine,setLine:this.props.setLine}))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){e.preventDefault();var t=e.target.name;b.postPerson({person:t.value}).then(n.props.setLine(t.value)),n.props.setInLine(),n.props.setPerson(t.value),n.props.deleteCat()},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"add-form"},o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("input",{className:"name-input",name:"name",placeholder:"Your Name"}),o.a.createElement("button",{className:"btn",type:"submit"},"Get in Line")))}}]),t}(a.Component),L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).peopleQueue=function(){return n.props.line.map((function(e,t){return o.a.createElement("li",{key:btoa(e+t)},e)}))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"people-container"},o.a.createElement("h2",null,"Adoption line:"),o.a.createElement("ul",null,this.peopleQueue()," "),!this.props.inLine&&o.a.createElement(y,{setInLine:this.props.setInLine,setPerson:this.props.setPerson,setLine:this.props.setLine,deleteCat:this.props.deleteCat}))}}]),t}(a.Component),C=n(25),O=n(17),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).nextCat=function(){return b.getCats().then((function(e){n.setState({cat:e})}))},n.nextDog=function(){return b.getDogs().then((function(e){return n.setState({dog:e})}))},n.setAdopt=function(){n.state.nextInLine===n.state.person&&n.setState({adopt:!0})},n.toggleAdopt=function(){n.setState({adopt:!n.state.adopt})},n.setLine=function(e){n.setState({line:[].concat(Object(g.a)(n.state.line),[e])})},n.setInLine=function(){n.setState({inLine:!n.state.inLine})},n.getAndSetLine=function(e){n.setState({line:e})},n.deleteCat=function(){n.setState({dequeueCat:!n.state.dequeueCat})},n.deleteDog=function(){n.setState({dequeueDog:!n.state.dequeueDog})},n.setPerson=function(e){n.setState({person:e})},n.generatePetQueue=function(){!0===n.state.dequeueCat?b.dequeueCats().then((function(){b.getCats().then((function(e){n.setState({cat:e}),b.getNextPerson().then((function(e){return n.setState({nextInLine:e})})),n.deleteCat(),n.deleteDog()})).catch((function(e){n.setState({cat:e}),n.deleteCat(),n.deleteDog()}))})):!0===n.state.dequeueDog&&b.dequeueDogs().then((function(){b.getDogs().then((function(e){n.setState({dog:e}),b.getNextPerson().then((function(e){return n.setState({nextInLine:e})})),n.deleteCat(),n.deleteDog()})).catch((function(e){n.setState({dog:e}),n.deleteCat(),n.deleteDog()}))}))},n.generatePeopleQueue=function(e){b.postPerson({person:e}).then((function(){b.getPeople().then((function(e){return n.setState({line:e})}))}))},n.handleShow=function(){n.setState({show:!0})},n.handleClose=function(){n.setState({show:!1,dequeueCat:!1,dequeueDog:!1})},n.renderAdopt=function(){return o.a.createElement("div",null,!0===n.state.adopt&&o.a.createElement("h2",null,"It's your turn! Which pet is coming home?"))},n.state={cat:{},dog:{},line:[],inLine:!1,adopt:!1,person:"",nextInLine:null,dequeueCat:!1,dequeueDog:!1,show:!1,error:null},n.timer=null,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.nextCat(),this.nextDog(),b.getPeople().then((function(t){e.setState({line:t})})),b.getNextPerson().then((function(t){return e.setState({nextInLine:t})})).catch((function(t){return e.setState({error:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;this.state.line[0]!==this.state.person&&null===this.timer&&!0===this.state.inLine&&(this.timer=setInterval((function(){t.generatePetQueue(),t.generatePeopleQueue(t.state.nextInLine)}),6e3)),this.state.line[0]===this.state.person&&null!==this.timer&&(clearInterval(this.timer),this.timer=null,!0!==e.adopt&&this.toggleAdopt())}},{key:"render",value:function(){return o.a.createElement("div",{className:"adoption-container"},o.a.createElement(L,{line:this.state.line,inLine:this.state.inLine,setInLine:this.setInLine,setPerson:this.setPerson,deleteCat:this.deleteCat,setLine:this.setLine}),this.renderAdopt(),o.a.createElement(v,{toggleAdopt:this.toggleAdopt,nextCat:this.nextCat,nextDog:this.nextDog,adopt:this.state.adopt,cat:this.state.cat,dog:this.state.dog,setInLine:this.setInLine,handleShow:this.handleShow,setLine:this.getAndSetLine}),o.a.createElement("div",{className:"popup-container"},o.a.createElement(O.a,{className:"popup",show:this.state.show,onHide:this.handleClose},o.a.createElement(O.a.Header,null,o.a.createElement(O.a.Title,null,"Congratulations!")),o.a.createElement(O.a.Body,null,"You have a new best friend!"),o.a.createElement(O.a.Footer,null,o.a.createElement(C.a,{className:"btn",variant:"primary",onClick:this.handleClose},"Exit")))))}}]),t}(a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"root"},o.a.createElement("header",null,o.a.createElement(d.a,{path:"/",component:m})),o.a.createElement("main",null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:f}),o.a.createElement(d.a,{path:"/adoption",component:w}))))}}]),t}(a.Component);s.a.render(o.a.createElement(i.a,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8baa4eef.chunk.js.map