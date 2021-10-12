(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1C-z-"}},13:function(e,t,a){e.exports={App:"App_App__16ZpL"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},16:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},21:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),o=a.n(c),s=(a(21),a(3)),i=a(4),m=a(6),u=a(5),l=a(9),h=(a(22),a(13)),b=a.n(h),g=a(7),j=a.n(g),p=a(1),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.reset()):l.b.error("Enter image name.")},e.reset=function(){e.setState({imageName:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:j.a.Searchbar,children:Object(p.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:j.a["SearchForm-button"],children:Object(p.jsx)("span",{className:j.a["SearchForm-button-label"],children:"Search"})}),Object(p.jsx)("input",{className:j.a["SearchForm-input"],type:"text",name:"imageName",value:this.state.imageName,placeholder:"Search images and photos",onChange:this.handleNameChange})]})})}}]),a}(n.a.Component),f=d,S=a(12),O=(a(24),a(14)),v=a.n(O),_=a(15),x=a.n(_),y=a(11),N=a.n(y);var I=function(e){var t=e.webformatURL;return Object(p.jsx)("li",{className:N.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:t,alt:"",className:N.a["ImageGalleryItem-image"]})})},F=a(16),w=a.n(F);var G=function(e){var t=e.onLoadMore;return Object(p.jsx)("button",{type:"button",className:w.a.Button,onClick:function(){return t()},children:"Load more"})};var C=function(e,t){return fetch("https://pixabay.com/api/?key=22969928-aad90fecb00099c81964f1030&per_page=12&page=".concat(t,"&q=").concat(e,"&image_type=photo")).then((function(e){return console.log(e),e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a "))})).then((function(e){return e.hits}))},L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],page:1,status:"idle",error:null},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=e.imageName,n=this.props.imageName;r!==n&&(this.setState({status:"pending",page:1}),C(n,this.state.page).then((function(e){return a.setState({images:e,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),t.page!==this.state.page&&(this.setState({status:"pending"}),C(n,this.state.page).then((function(e){return a.setState((function(t){return{images:[].concat(Object(S.a)(t.images),Object(S.a)(e)),status:"resolved"}}))})).then((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,r=e.status;return"idle"===r?Object(p.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"}):"pending"===r?Object(p.jsxs)("div",{children:[Object(p.jsx)(v.a,{type:"Rings",color:"#00BFFF",height:100,width:100,timeout:3e3}),"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."]}):"rejected"===r?Object(p.jsx)("h1",{children:a.message}):"resolved"===r?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){return Object(p.jsx)(I,{webformatURL:e.webformatURL},e.id)}))}),a&&Object(p.jsx)("h1",{children:a.message}),0!==this.state.images.length&&Object(p.jsx)(G,{onLoadMore:this.onLoadMore})]}):void 0}}]),a}(n.a.Component),k=L,A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imageName:""},e.formSubmitHandler=function(t){e.setState({imageName:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:b.a.App,children:[Object(p.jsx)(f,{onSubmit:this.formSubmitHandler}),Object(p.jsx)(k,{imageName:this.state.imageName}),Object(p.jsx)(l.a,{autoClose:3e3,theme:"colored"})]})}}]),a}(n.a.Component),B=A;o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l","SearchForm-button":"Searchbar_SearchForm-button__3u-rY","SearchForm-button-label":"Searchbar_SearchForm-button-label__2bzU3","SearchForm-input":"Searchbar_SearchForm-input__j6qzO"}}},[[45,1,2]]]);
//# sourceMappingURL=main.20c935fe.chunk.js.map