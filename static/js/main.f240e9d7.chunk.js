(this["webpackJsonpreact-highcharts-portal-demo"]=this["webpackJsonpreact-highcharts-portal-demo"]||[]).push([[0],{378:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);n(176),n(186);var r=n(13),c=n.n(r),o=n(65),a=n(51),l=n(171),i=n(172),s=n(175),u=n(174),b=n(12),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={HasError:!1,ErrorText:""},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){console.warn(e,t)}},{key:"render",value:function(){return this.state.HasError?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Error"}),Object(b.jsx)(b.Fragment,{children:this.state.ErrorText})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{HasError:!0,ErrorText:e.toString()}}}]),n}(r.Component),j=n(173),h=n.n(j),p=n(109),m=function(){var e=Object(r.useState)({title:{text:"Solar Employment Growth by Sector, 2010-2016"},subtitle:{text:"Source: thesolarfoundation.com"},yAxis:{title:{text:"Number of Employees"}},xAxis:{accessibility:{rangeDescription:"Range: 2010 to 2017"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:[{name:"Installation",type:"line",data:[43934,52503,57177,69658,97031,119931,137133,154175]},{name:"Manufacturing",type:"line",data:[24916,24064,29742,29851,32490,30282,38121,40434]},{name:"Sales & Distribution",type:"line",data:[11744,17722,16005,19771,20185,24377,32147,39387]},{name:"Project Development",type:"line",data:[null,null,7988,12169,15112,22452,34400,34227]},{name:"Other",type:"line",data:[12908,5948,8105,11248,8989,11816,18274,18111]}]}),t=Object(a.a)(e,1)[0];return Object(b.jsx)(h.a,{highcharts:p,options:t})},O=function(e){var t=e.handleWindowClose,n=Object(r.useRef)(null),c=Object(r.useState)(!1),l=Object(a.a)(c,2),i=l[0],s=l[1];return Object(r.useEffect)((function(){return n.current=window.open("","","location=1,status=1,scrollbars=1,resizable=0,height=450,width=600"),n.current&&(s(!0),n.current.onbeforeunload=function(){t(),s(!1)}),function(){n.current&&(Object(o.unmountComponentAtNode)(n.current.document.body),n.current.close())}}),[t]),i&&null!==n.current?Object(o.createPortal)(Object(b.jsx)(m,{}),n.current.document.body):null},f=(n(378),function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useCallback)((function(){c(!1)}),[]);return Object(b.jsx)(d,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){return c(!n)},children:"toggle portal"})}),n?Object(b.jsx)(O,{handleWindowClose:o}):null]})})});Object(o.render)(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))}},[[379,1,2]]]);
//# sourceMappingURL=main.f240e9d7.chunk.js.map