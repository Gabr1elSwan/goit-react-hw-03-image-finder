(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=a(9),s=a(4),l=a(5),u=a(7),h=a(6),p=(a(25),a(19)),d=a.n(p),b=a(1),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""}),e.props.clearSubmit()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"Searchbar",onSubmit:this.handleSubmit,children:Object(b.jsxs)("form",{className:"SearchForm",children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",value:this.state.query,onChange:this.handleChange,autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),g=a(20),j=a.n(g),f=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n;return j.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=20124121-6ece0bc9b039a6c992b9911c7&image_type=photo&orientation=horizontal&per_page=12"))},O=function(e){var t=e.pictures,a=e.onOpenModal;return t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:n,alt:c,className:"ImageGalleryItem-image","data-img":r,onClick:a})},t)}))},y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("ul",{className:"ImageGallery",children:Object(b.jsx)(O,{pictures:this.props.pictures,onOpenModal:this.props.onOpenModal})})}}]),a}(n.Component),v=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:"button",onClick:t,children:"Load more"})},S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:"Modal",children:this.props.children})})}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pictures:[],page:1,searchQuery:"",isLoading:!1,showModal:!1,largeImage:""},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onChangeQuery=function(t){e.setState({searchQuery:t})},e.clearSubmit=function(){e.setState({pictures:[],page:1})},e.onOpenModal=function(t){e.setState({largeImage:t.target.dataset.img}),e.toggleModal()},e.fetchArticles=function(){var t=e.state,a=t.page,n={searchQuery:t.searchQuery,page:a};e.setState({isLoading:!0}),f(n).then((function(t){e.setState((function(e){return{pictures:[].concat(Object(i.a)(e.pictures),Object(i.a)(t.data.hits)),page:e.page+1}}))})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchArticles(),t.page!==this.state.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.isLoading,n=e.largeImage,r=e.showModal;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{onSubmit:this.onChangeQuery,clearSubmit:this.clearSubmit}),a&&Object(b.jsx)(d.a,{type:"Oval",color:"#00BFFF",height:100,width:100}),Object(b.jsx)(y,{pictures:t,onOpenModal:this.onOpenModal}),t.length>0&&Object(b.jsx)(v,{onClick:this.fetchArticles}),r&&Object(b.jsx)(S,{onClose:this.toggleModal,children:Object(b.jsx)("img",{src:n,alt:""})})]})}}]),a}(n.Component);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f1a5e899.chunk.js.map