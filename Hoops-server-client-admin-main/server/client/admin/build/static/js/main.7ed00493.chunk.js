(this.webpackJsonpwhitelistminting=this.webpackJsonpwhitelistminting||[]).push([[0],{195:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(35),o=a.n(s);a(195),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(99),c=a(63),d=a(107),l=a(175),u=a.n(l),h=a(182),p=a(34),j=a(13),b=a(14),g=a(15),O=a(16),f=a(300),m=a(304),v=a(187),y=a(306),x=a(43),w=a(305),S=a(183),k=a(71),C=a(41),q=a.n(C),A=a(48),E=a.n(A);function R(e){return D.apply(this,arguments)}function D(){return(D=Object(k.a)(q.a.mark((function e(t){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/changePassword",{password:t}).then((function(e){return{type:"CHANGE_PASSWORD",payload:e.data}})).catch((function(){return{type:"CHANGE_PASSWORD",payload:"Something went Wrong!"}}));case 2:return a=e.sent,e.abrupt("return",{type:"CHANGE_PASSWORD",payload:a});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=a(308),U=a(9),T=f.a.Header,P=m.a.Title,F=function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,visible:!1,p1:"",p2:"",password:""},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(){e.setState({loading:!0}),setTimeout((function(){e.setState({loading:!1,visible:!1})}),3e3)},e.handleCancel=function(){e.setState({visible:!1})},e.onFinish=function(){e.state.p1.length<8?v.a.error({message:"Length Should be greater then or equal to 8",placement:"bottomRight"}):e.state.p1===e.state.p2?(e.props.dispatch(R(e.state.p1,e.state.password)),e.setState({password:e.state.p1})):v.a.error({message:"Password did not matched",placement:"bottomRight"})},e}return Object(b.a)(a,[{key:"logout",value:function(){this.props.dispatch({type:"USER_lOGOUT",payload:E.a.get("/logout",{}).then((function(e){return e.data})).catch(console.error())}),setTimeout((function(){window.location.replace("/admin/login")}),2e3)}},{key:"render",value:function(){var e=this,t=!1;this.props.login.user.login&&(t=this.props.login.user.login.isAuth),this.props.login.user.logout&&window.location.reload();var a=this.state,n=a.visible,r=a.loading,s=!1;return"login"===window.location.href.substring(window.location.href.lastIndexOf("/")+1)&&(s=!0),s?Object(U.jsx)(U.Fragment,{}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(T,{className:"header",children:[Object(U.jsx)(i.b,{to:"/admin"}),t&&Object(U.jsx)("div",{className:"right-top-corner",children:Object(U.jsxs)("span",{onClick:this.logout.bind(this),children:[Object(U.jsx)(L.a,{}),"Logout"]})})]}),Object(U.jsxs)(y.a,{visible:n,title:"Admin | Change Password",onOk:this.handleOk,onCancel:this.handleCancel,footer:[Object(U.jsx)(x.a,{onClick:this.handleCancel,children:"Cancel"},"back"),Object(U.jsx)(x.a,{type:"primary",loading:r,onClick:this.onFinish,children:"Submit"},"submit")],children:[Object(U.jsx)(P,{style:{textAlign:"center"},level:3,children:"Set a New Password"}),Object(U.jsxs)(w.a,{name:"basic",children:[Object(U.jsx)(w.a.Item,{children:Object(U.jsx)(S.a,{type:"text",onChange:function(t){return e.setState({p1:t.target.value})},placeholder:"Type new Password...",required:"required"})}),Object(U.jsx)(w.a.Item,{children:Object(U.jsx)(S.a,{type:"text",onChange:function(t){return e.setState({p2:t.target.value})},placeholder:"Type Password again...",required:"required"})})]})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a,n,r;if(e.changePassword&&(null!==(a=e.changePassword.user)&&void 0!==a&&null!==(n=a.changePassword)&&void 0!==n&&null!==(r=n.payload)&&void 0!==r&&r.success))return v.a.success({message:"Password Changed Successfully",placement:"bottomRight"}),setTimeout((function(){window.location.reload()}),2e3),{visible:!1};return null}}]),a}(r.a.Component);var _=Object(c.b)((function(e){return{login:e,logout:e,changePassword:e}}))(F),I=f.a.Footer,N=function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(_,{}),Object(U.jsx)(f.a,{children:Object(U.jsxs)(f.a,{children:[this.props.children,Object(U.jsx)(I,{style:{textAlign:"center"},children:"Copyright \u24b8 2020. All rights reserved by ADMIN."})]})})]})})}}]),a}(r.a.Component),V=N,M=a(3),H=function(e,t){var a=function(a){Object(g.a)(r,a);var n=Object(O.a)(r);function r(e){var t;return Object(j.a)(this,r),(t=n.call(this,e)).state={loading:!0},t.props.dispatch({type:"AUTH_CHECK",payload:E.a.get("/auth").then((function(e){return e.data})).catch(console.error())}),t}return Object(b.a)(r,[{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!1}),e.user.login.isAuth?!1===t&&this.props.history.push("/admin/dashboard"):t&&this.props.history.push("/admin")}},{key:"render",value:function(){return this.state.loading?Object(U.jsx)("div",{className:"loader",children:"Loading..."}):Object(U.jsx)(e,Object(M.a)(Object(M.a)({},this.props),{},{user:this.props.user}))}}]),r}(n.Component);return Object(c.b)((function(e){return{user:e.user}}))(a)},B=a(303),W=function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).onFinish=function(e){var t,a;n.props.dispatch((t=e.username,a=e.password,{type:"USER_LOGIN",payload:E.a.post("/login",{email:t,password:a}).then((function(e){return e.data.isAuth&&(document.cookie="auth=".concat(e.data.token)),e.data})).catch(console.error())}))},n.onFinishFailed=function(e){console.log("Failed:",e)},n}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(e,t){v.a.error({message:"Validation Error!",description:"Check Username or Password",placement:"bottomRight"})}},{key:"componentWillReceiveProps",value:function(e){var t=e.login.user.login;return t&&!0===t.error&&v.a.error({message:"Validation Error!",description:"Check Username or Password",placement:"bottomRight"}),1}},{key:"render",value:function(){return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(B.a,{style:{width:"30%",margin:"auto",boxShadow:"0px 10px 30px #0000001c"},children:[Object(U.jsx)("div",{className:"logo-area"}),Object(U.jsxs)(w.a,{name:"basic",initialValues:{remember:!0},onFinish:this.onFinish.bind(this),onFinishFailed:this.onFinishFailed.bind(this),children:[Object(U.jsx)(w.a.Item,{style:{fontWeight:600,wordBreak:"break-all"},label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(U.jsx)(S.a,{})}),Object(U.jsx)(w.a.Item,{label:"Password",name:"password",style:{fontWeight:600},rules:[{required:!0,message:"Please input your password!"}],children:Object(U.jsx)(S.a.Password,{})}),Object(U.jsx)(w.a.Item,{style:{textAlign:"center"},children:Object(U.jsx)(x.a,{type:"primary",htmlType:"submit",size:"large",children:"Submit"})})]})]})})}}]),a}(n.Component);var G=Object(c.b)((function(e){return{login:e}}))(W),Y=function(){return Object(U.jsx)("div",{style:{paddingTop:"8%",minHeight:"90vh"},children:Object(U.jsx)(G,{})})},K=a(301),z=a(307),Q=a(302),J=a(55),$=a.n(J),X="APPROVE_REQUEST",Z="LIST_REQUESTS",ee="ADD_USER",te="DELETE_REQUEST",ae="DISAPPROVE_REQUEST";a(4),a(293);var ne=a(96),re=a(180),se=a.n(re),oe=function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).getColumnSearchProps=function(e){return{filterDropdown:function(t){var a=t.setSelectedKeys,r=t.selectedKeys,s=t.confirm,o=t.clearFilters;return Object(U.jsxs)("div",{style:{padding:8},children:[Object(U.jsx)(S.a,{ref:function(e){n.searchInput=e},placeholder:"Search ".concat(e),value:r[0],onChange:function(e){return a(e.target.value?[e.target.value]:[])},onPressEnter:function(){return n.handleSearch(r,s,e)},style:{width:188,marginBottom:8,display:"block"}}),Object(U.jsx)(x.a,{type:"primary",onClick:function(){return n.handleSearch(r,s,e)},icon:Object(U.jsx)(ne.a,{}),size:"small",style:{width:90,marginRight:8},children:"Search"}),Object(U.jsx)(x.a,{onClick:function(){return n.handleReset(o)},size:"small",style:{width:90},children:"Reset"})]})},filterIcon:function(e){return Object(U.jsx)(ne.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,a){return a[e]&&a[e].toString().toLowerCase().includes(t.toLowerCase())},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return n.searchInput.select()}))},render:function(t){return n.state.searchedColumn===e?Object(U.jsx)(se.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[n.state.searchText],autoEscape:!0,textToHighlight:t&&t.toString()}):t}}},n.handleSearch=function(e,t,a){t(),n.setState({searchText:e[0],searchedColumn:a})},n.handleReset=function(e){e(),n.setState({searchText:""})},n.handleModalShow=function(){n.setState({isModalVisible:!0,address:""})},n.handleModalHide=function(){n.setState({isModalVisible:!1,errors:{address:""},address:""})},n.handleAdd=function(e){n.isValid()&&n.props.dispatch(function(e){var t=E.a.post("/add-user",{address:e}).then((function(e){return e.data})).catch(console.error());return console.log("req",t),{type:ee,payload:t}}(n.state.address))},n.isValid=function(){var e={};return""===n.state.address&&(e.address="Address is required"),n.setState({errors:e}),0===Object.keys(e).length},n.onAddressChange=function(e){n.setState({address:e.target.value})},n.handleRequestStatus=function(e){e.approve?n.props.dispatch(function(e){var t=E.a.patch("/disapprove-request",{address:e}).then((function(e){return e.data})).catch(console.error());return{type:ae,payload:t}}(e.address)):(n.setState({isAntdVisible:!0}),n.setState({address:e.address}))},n.handleBlockRequest=function(e){var t;e.isBlocked?(n.props.dispatch((t=e.address,{type:"UNBLOCK_REQUEST",payload:E.a.patch("/unblock-request",{address:t}).then((function(e){return e.data})).catch(console.error())})),window.location.reload()):(n.props.dispatch(function(e){return{type:"BLOCK_REQUEST",payload:E.a.patch("/block-request",{address:e}).then((function(e){return e.data})).catch(console.error())}}(e.address)),window.location.reload())},n.handleOk=function(e,t,a){console.log(n.state.address,n.state.unixDate),n.props.dispatch(function(e,t){var a=E.a.post("/request-approve",{address:e,date:t}).then((function(e){return e.data})).catch(console.error());return{type:X,payload:a}}(n.state.address,n.state.unixDate)),n.setState({isAntdVisible:!1})},n.handleCancel=function(){n.setState({isAntdVisible:!1,errors:{date:""},date:""})},n.onDateChange=function(e,t){var a=$()(e._d).format("YYYY.MM.DD"),r=parseInt((new Date(a).getTime()/1e3).toFixed(0));console.log("----unixTimestamp----",r),n.setState({unixDate:r})},n.disabledDate=function(e){var t=(new Date).toLocaleDateString();return e&&e<$()(t,"MM-DD-YYYY")},n.isDateValid=function(){var e={};return""===n.state.date&&(e.date="Date is required"),n.setState({errors:e}),0===Object.keys(e).length},n.props.dispatch(function(){var e=E.a.get("/all-requests").then((function(e){return e.data})).catch(console.error());return{type:Z,payload:e}}()),n.state={items:!1,visible:!1,data:null,searchText:"",searchedColumn:"",load:!1,translated:"",translatedFrom:"",loading:!1,isModalVisible:!1,isAntdVisible:!1,address:"",unixDate:0,errors:{address:""}},n}return Object(b.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props;this.props.requestList!==e.requestList&&a.requestList.requests&&(!0===a.requestList.requests.success&&window.location.reload(),!1===a.requestList.requests.success&&(alert("Not approved Something went wrong"),window.location.reload()),a.requestList.addUser&&(a.requestList.addUser.success?(window.location.reload(),this.handleModalHide()):this.setState({errors:{address:a.requestList.addUser.msg}})),a.requestList.deleteUser&&(a.requestList.deleteUser.success||alert(a.requestList.deleteUser.msg),window.location.reload()),a.requestList.disApproveRequest&&(a.requestList.disApproveRequest.success||alert(a.requestList.disApproveRequest.msg),window.location.reload()))}},{key:"render",value:function(){var e=this,t=this.props.requestList.requests,a=this.state.isModalVisible,n=this.state.isAntdVisible;if(!t)return Object(U.jsx)("div",{className:"loader",children:"Loader"});if(this.state.loading)return Object(U.jsx)("div",{className:"loader",children:"Loader"});var r=[{title:"Address",dataIndex:"address",key:"address",render:function(e){return Object(U.jsx)("span",{children:e})}},{title:"Approved",dataIndex:"approve",key:"approve",render:function(e){return Object(U.jsx)("span",{children:e?"Yes":"No"})}},{title:"Action",key:"action",render:function(t,a){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(x.a,{onClick:function(){return e.handleRequestStatus(a)},type:"Primary",children:a.approve?"Disapprove":"Allow"}),Object(U.jsx)(x.a,{style:{marginLeft:10},onClick:function(){return e.props.dispatch(function(e){var t=E.a.delete("/delete-request?address=".concat(e)).then((function(e){return e.data})).catch(console.error());return{type:te,payload:t}}(a.address))},type:"primary",danger:!0,children:"Delete"}),Object(U.jsx)(x.a,{style:{marginLeft:10},onClick:function(){return e.handleBlockRequest(a)},type:"primary",danger:!0,children:a.isBlocked?"Unblock":"Block"})]})}}];return Object(U.jsxs)("div",{className:"right-section",children:[Object(U.jsx)(x.a,{onClick:this.handleModalShow,style:{marginTop:10,marginBottom:10},children:"Add User"}),Object(U.jsx)(K.a,{columns:r,pagination:{pageSize:10},rowKey:"_id",dataSource:t.requests&&t.requests}),Object(U.jsxs)(y.a,{title:"Add User",visible:a,okText:"Add",onOk:this.handleAdd,onCancel:this.handleModalHide,children:[Object(U.jsx)(S.a,{placeholder:"Address",value:this.state.address,onChange:this.onAddressChange}),Object(U.jsx)("div",{style:{color:"red",fontSize:12,marginTop:10},children:this.state.errors.address})]}),Object(U.jsxs)(y.a,{title:"Mint-Date",visible:n,okText:"OK",onOk:this.handleOk,onCancel:this.handleCancel,children:[Object(U.jsx)(z.b,{direction:"vertical",style:{width:"100%"},children:Object(U.jsx)(Q.a,{onChange:this.onDateChange,disabledDate:this.disabledDate,style:{width:"80%",cursor:"pointer"}})}),Object(U.jsx)("div",{style:{color:"red",fontSize:12,marginTop:10},children:this.state.errors.date})]})]})}}]),a}(n.Component);var ie=Object(c.b)((function(e){return{requestList:e.request}}))(oe),ce=function(){return Object(U.jsx)("div",{children:Object(U.jsx)(ie,{})})},de=function(){return Object(U.jsx)("div",{children:"Page not found"})},le=function(){return Object(U.jsx)(V,{children:Object(U.jsxs)(p.c,{children:[Object(U.jsx)(p.a,{path:"/admin/",exact:!0,component:H(Y,!1)}),Object(U.jsx)(p.a,{path:"/admin/dashboard",exact:!0,component:H(ce,!0)}),Object(U.jsx)(p.a,{path:"*",component:de})]})})},ue=Object(d.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":case"AUTH_CHECK":case"USER_LOGIN_CLEAN":return Object(M.a)(Object(M.a)({},e),{},{login:t.payload});case"LIST_USERS":return Object(M.a)(Object(M.a)({},e),{},{users_list:t.payload});case"USER_lOGOUT":return Object(M.a)(Object(M.a)({},e),{},{logout:t.payload});case"CHANGE_PASSWORD":return Object(M.a)(Object(M.a)({},e),{},{changePassword:t.payload});case"DELETE_USER":return Object(M.a)(Object(M.a)({},e),{},{deleteUser:t.payload});default:return e}},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:case X:return Object(M.a)(Object(M.a)({},e),{},{requests:t.payload});case ee:return Object(M.a)(Object(M.a)({},e),{},{addUser:t.payload});case te:return Object(M.a)(Object(M.a)({},e),{},{deleteUser:t.payload});case ae:return Object(M.a)(Object(M.a)({},e),{},{disApproveRequest:t.payload});default:return e}}}),he=ue,pe=Object(d.a)(u.a,h.a)(d.c);o.a.render(Object(U.jsx)(c.a,{store:pe(he),children:Object(U.jsx)(i.a,{children:Object(U.jsx)(le,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[299,1,2]]]);
//# sourceMappingURL=main.7ed00493.chunk.js.map