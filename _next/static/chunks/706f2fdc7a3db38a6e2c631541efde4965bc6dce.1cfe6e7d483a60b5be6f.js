(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6xyR":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),o=a("q1tI"),i=a.n(o),l=a("vUet"),u=a("YdCC"),d=function(e){return i.a.forwardRef((function(t,a){return i.a.createElement("div",Object(r.a)({},t,{ref:a,className:s()(t.className,e)}))}))},f=a("Wzyw"),m=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),m=Object(l.a)(a,"card-img");return i.a.createElement(d,Object(r.a)({ref:t,className:s()(o?m+"-"+o:m,c)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var p=m,b=d("h5"),v=d("h6"),h=Object(u.a)("card-body"),y=Object(u.a)("card-title",{Component:b}),O=Object(u.a)("card-subtitle",{Component:v}),N=Object(u.a)("card-link",{Component:"a"}),j=Object(u.a)("card-text",{Component:"p"}),x=Object(u.a)("card-header"),g=Object(u.a)("card-footer"),w=Object(u.a)("card-img-overlay"),I=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.bg,d=e.text,m=e.border,p=e.body,b=e.children,v=e.as,y=void 0===v?"div":v,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),N=Object(l.a)(a,"card"),j=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return i.a.createElement(f.a.Provider,{value:j},i.a.createElement(y,Object(r.a)({ref:t},O,{className:s()(c,N,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),p?i.a.createElement(h,null,b):b))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=p,I.Title=y,I.Subtitle=O,I.Body=h,I.Link=N,I.Text=j,I.Header=x,I.Footer=g,I.ImgOverlay=w;t.a=I},"90/0":function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a("1OyB"),n=a("vuIU"),c=a("Ji7U"),s=a("md7G"),o=a("foSv"),i=a("q1tI"),l=a.n(i),u=a("JI6e"),d=a("7vrA"),f=a("2mvg"),m=a("3Z9Z"),p=a("HMs9"),b=a.n(p),v=l.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(s.a)(this,a)}}var y=function(e){Object(c.a)(a,e);var t=h(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return v("section",{id:"features",className:"pt-12 pt-md-13"},v(d.a,null,v(m.a,{className:"align-items-center"},v(u.a,{xs:12,md:5,lg:6,className:"order-md-2"},v(b.a,{height:500,once:!0},v(f.a,{src:this.props.sectionFeatureOne.image,alt:this.props.sectionFeatureOne.imageAlt,fluid:!0,className:"mb-6 mb-md-0"}))),v(u.a,{xs:12,md:7,lg:6,className:"order-md-1"},v("h2",{className:"font-header"},this.props.sectionFeatureOne.headerText),v("p",{className:"font-size-lg text-muted mb-6"},this.props.sectionFeatureOne.bodyTextOne),v("p",{className:"font-size-lg text-muted"},this.props.sectionFeatureOne.bodyTextTwo)))))}}]),a}(i.Component)},CnBO:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a("1OyB"),n=a("vuIU"),c=a("Ji7U"),s=a("md7G"),o=a("foSv"),i=a("q1tI"),l=a.n(i),u=a("65eO"),d=a("JI6e"),f=a("7vrA"),m=a("2mvg"),p=a("3Z9Z"),b=a("HMs9"),v=a.n(b),h=l.a.createElement;function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(s.a)(this,a)}}var O=function(e){Object(c.a)(a,e);var t=y(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return h("section",{id:"overview",className:"py-8 py-md-11 bg-light"},h(f.a,null,h(p.a,{className:"justify-content-center"},h(d.a,{xs:12,md:10,lg:8,className:"text-center"},h("h2",{className:"font-header"},this.props.sectionOverview.headerText),h("p",{className:"font-size-lg text-muted mb-7 mb-md-9"},this.props.sectionOverview.bodyText))),h(p.a,{className:"no-gutters mb-7 mb-md-9"},this.props.sectionOverview.feature_list.map((function(e,t){return h(d.a,{key:t,xs:12,md:4,className:"text-center"},h(p.a,{className:"mb-5"},h(d.a,null),h(d.a,{xs:"auto"},h(u.a,{variant:e.icon_theme,className:"badge-lg badge-rounded-circle"},h("i",{className:"fe fe-".concat(e.icon)}))),h(d.a,null,h("hr",{className:"d-none d-md-block"}))),h("h3",{className:"font-header"},e.title),h("p",{className:"text-muted mb-6 mb-md-0"},e.body))}))),h(p.a,null,h(d.a,{xs:12,className:"pl-md-12 pr-md-12"},h(v.a,{height:500,once:!0},h(m.a,{src:this.props.sectionOverview.image,fluid:!0,className:"rounded shadow-lg",alt:this.props.sectionOverview.imageAlt}))))))}}]),a}(i.Component)},DZHF:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),o=a("q1tI"),i=a.n(o),l=a("JCAc"),u=a("vUet"),d=a("ILyh"),f=i.a.createContext(null);f.displayName="AccordionContext";var m=f;var p=i.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"button":a,s=e.children,l=e.eventKey,u=e.onClick,f=Object(n.a)(e,["as","children","eventKey","onClick"]),p=function(e,t){var a=Object(o.useContext)(m),r=Object(o.useContext)(d.a);return function(n){r&&r(e===a?null:e,n),t&&t(n)}}(l,u);return"button"===c&&(f.type="button"),i.a.createElement(c,Object(r.a)({ref:t,onClick:p},f),s)})),b=a("vYJ8"),v=i.a.forwardRef((function(e,t){var a=e.children,c=e.eventKey,s=Object(n.a)(e,["children","eventKey"]),l=Object(o.useContext)(m);return i.a.createElement(d.a.Provider,{value:null},i.a.createElement(b.a,Object(r.a)({ref:t,in:l===c},s),i.a.createElement("div",null,i.a.Children.only(a))))}));v.displayName="AccordionCollapse";var h=v,y=i.a.forwardRef((function(e,t){var a=Object(l.a)(e,{activeKey:"onSelect"}),c=a.as,o=void 0===c?"div":c,f=a.activeKey,p=a.bsPrefix,b=a.children,v=a.className,h=a.onSelect,y=Object(n.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),O=s()(v,Object(u.a)(p,"accordion"));return i.a.createElement(m.Provider,{value:f||null},i.a.createElement(d.a.Provider,{value:h||null},i.a.createElement(o,Object(r.a)({ref:t},y,{className:O}),b)))}));y.displayName="Accordion",y.Toggle=p,y.Collapse=h;t.a=y},MBJH:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),o=a("q1tI"),i=a.n(o),l=a("vUet"),u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.striped,u=e.bordered,d=e.borderless,f=e.hover,m=e.size,p=e.variant,b=e.responsive,v=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(l.a)(a,"table"),y=s()(c,h,p&&h+"-"+p,m&&h+"-"+m,o&&h+"-striped",u&&h+"-bordered",d&&h+"-borderless",f&&h+"-hover"),O=i.a.createElement("table",Object(r.a)({},v,{className:y,ref:t}));if(b){var N=h+"-responsive";return"string"===typeof b&&(N=N+"-"+b),i.a.createElement("div",{className:N},O)}return O}));t.a=u},VPQ9:function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var r=a("1OyB"),n=a("vuIU"),c=a("Ji7U"),s=a("md7G"),o=a("foSv"),i=a("q1tI"),l=a.n(i),u=a("YFqc"),d=a.n(u),f=a("cWnB"),m=a("7vrA"),p=a("+YzT"),b=a("6ctO"),v=l.a.createElement,h=function(e){var t=Object(i.useState)(!1),a=t[0],r=t[1];return Object(i.useEffect)((function(){a||window.shopifyUI.createComponent("product",{id:e.shopifyId,node:document.getElementById("product-component-".concat(e.shopifyId)),options:{product:{iframe:!1,classes:{button:"shopify-buy__btn lift ml-auto navbar-btn btn btn-primary btn-sm"},contents:{img:!1,title:!1,price:!1},text:{button:"Add to cart"},googleFonts:["Montserrat"]}}}).then((function(){r(!0)}))}),[a]),v(l.a.Fragment,null,v("div",{className:"ml-auto",id:"product-component-".concat(e.shopifyId),style:{display:a?void 0:"none"}}),v("button",{style:{display:a?"none":void 0},disabled:!0,className:"lift ml-auto navbar-btn btn btn-primary btn-sm"},"Add to cart"))},y=l.a.createElement;function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(s.a)(this,a)}}var N=function(e){Object(c.a)(a,e);var t=O(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return y("section",null,y(b.a,{bg:"white",size:"sm",style:{zIndex:0}},y(m.a,null,y(b.a.Brand,{href:"#top"},y("h4",{className:"text-dark mb-0 text-center"},y("span",{className:"font-weight-bold"},this.props.product.brand)," ",y("span",{className:"pr-1"},this.props.product.name," "),y("span",{className:"h6 text-gray-600 small font-size-sm"},this.props.product.series))),this.props.showPageNav?y(p.a,{className:"ml-auto"},y(d.a,{href:"#overview"},y(p.a.Link,{href:"#overview",className:"small d-sm-block d-none"},"Overview")),y(d.a,{href:"#features"},y(p.a.Link,{href:"#features",className:"small d-sm-block d-none"},"Features")),y(d.a,{href:"#tech-specs"},y(p.a.Link,{href:"#tech-specs",className:"small d-sm-block d-none"},"Tech Specs")),y(d.a,{href:"#resources"},y(p.a.Link,{href:"#resources",className:"small d-md-block d-none"},"Resources"))):null,this.props.product.shopifyId?y(h,{shopifyId:this.props.product.shopifyId}):y(d.a,{href:"/contact"},y(f.a,{size:"sm",variant:"primary",className:"lift ml-auto d-none d-lg-block"},"Enquire now")))))}}]),a}(i.Component)},Xurx:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a("1OyB"),n=a("vuIU"),c=a("Ji7U"),s=a("md7G"),o=a("foSv"),i=a("q1tI"),l=a.n(i),u=a("65eO"),d=a("6xyR"),f=a("JI6e"),m=a("7vrA"),p=a("sjrs"),b=a("3Z9Z"),v=l.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(o.a)(e);if(t){var n=Object(o.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(s.a)(this,a)}}var y=function(e){Object(c.a)(a,e);var t=h(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return this.props.sectionFeatureTwo?v("section",{className:"py-8 py-md-11"},v(m.a,null,v(b.a,{className:"align-items-center"},v(f.a,{xs:12,md:6,lg:6},v(d.a,{className:"card-border border-".concat(this.props.sectionFeatureTwo.featureTheme," shadow-lg mb-5")},v(d.a.Body,null,v(p.a,{variant:"flush"},this.props.sectionFeatureTwo.featureList.map((function(t,a){return v(p.a.Item,{key:a,className:"d-flex align-items-center"},v("div",{className:"mr-auto"},v("p",{className:"font-header mb-1"},t.title),t.body?v("p",{className:"font-size-sm text-muted mb-0"},t.body):null),v(u.a,{variant:"".concat(e.props.sectionFeatureTwo.featureTheme,"-soft"),className:"badge-rounded-circle ml-4"},v("i",{className:"fe fe-".concat(t.icon)})))})))))),v(f.a,{xs:12,md:6,lg:5,className:"offset-lg-1"},v("h2",{className:"font-header"},this.props.sectionFeatureTwo.headerText),v("p",{className:"font-size-lg text-muted"},this.props.sectionFeatureTwo.bodyText))))):null}}]),a}(i.Component)},sjrs:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),s=a.n(c),o=a("q1tI"),i=a.n(o),l=(a("2W6z"),a("JCAc")),u=a("vUet"),d=a("rQNl"),f=a("VWqr"),m=a("ILyh"),p={variant:void 0,active:!1,disabled:!1},b=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.active,l=e.disabled,d=e.className,p=e.variant,b=e.action,v=e.as,h=e.eventKey,y=e.onClick,O=Object(n.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(u.a)(a,"list-group-item");var N=Object(o.useCallback)((function(e){if(l)return e.preventDefault(),void e.stopPropagation();y&&y(e)}),[l,y]);return(i.a.createElement(f.a,Object(r.a)({ref:t},O,{eventKey:Object(m.b)(h,O.href),as:v||(b?O.href?"a":"button":"div"),onClick:N,className:s()(d,a,c&&"active",l&&"disabled",p&&a+"-"+p,b&&a+"-action")})))}));b.defaultProps=p,b.displayName="ListGroupItem";var v=b,h={variant:void 0,horizontal:void 0},y=i.a.forwardRef((function(e,t){var a,c=Object(l.a)(e,{activeKey:"onSelect"}),o=c.className,f=c.bsPrefix,m=c.variant,p=c.horizontal,b=c.as,v=void 0===b?"div":b,h=Object(n.a)(c,["className","bsPrefix","variant","horizontal","as"]),y=Object(u.a)(f,"list-group");return a=p?!0===p?"horizontal":"horizontal-"+p:null,i.a.createElement(d.a,Object(r.a)({ref:t},h,{as:v,className:s()(o,y,m&&y+"-"+m,a&&y+"-"+a)}))}));y.defaultProps=h,y.displayName="ListGroup",y.Item=v;t.a=y}}]);