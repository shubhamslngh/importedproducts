import{a as u,J as p,X as d,O as o,aa as t,ab as a,Y as c,a1 as f,a6 as g}from"./swiper-vue.rgMx2r3g.js";import{D as h}from"./entry.DJwux6Vw.js";import{s as _}from"./cart.bAX8Gn0e.js";import{_ as N}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./index.BXLA33K8.js";const v={data(){return{firstName:"",lastName:"",username:"",email:"",password:"",isLoading:!1,errors:null}},methods:{async handleSignup(){let l=u([]),{mutate:s,loading:i}=h(_);try{i=!0,l=await s({username:this.username,lastName:this.lastName,firstName:this.firstName,email:this.eamil,password:this.password})}catch(n){console.error("Error Signing Up User :",n),i=!1}console.log("Sign up form submitted"),this.firstName="",this.lastName="",this.username="",this.email="",this.password=""}}},w={class:"login-container"},y={class:"form-group"},b={class:"form-group"},S={class:"form-group"},U={class:"form-group"},x={class:"form-group"},V={class:"grid gap-4"},k=["disabled"],B={key:0,class:"error-message"};function D(l,s,i,n,e,m){return p(),d("div",w,[o("form",{onSubmit:s[5]||(s[5]=g((...r)=>m.handleSignup&&m.handleSignup(...r),["prevent"])),class:"login-form"},[o("div",y,[t(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=r=>e.firstName=r),placeholder:"First Name",class:"form-control"},null,512),[[a,e.firstName]])]),o("div",b,[t(o("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=r=>e.lastName=r),placeholder:"Last Name",class:"form-control"},null,512),[[a,e.lastName]])]),o("div",S,[t(o("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=r=>e.username=r),placeholder:"Username",class:"form-control"},null,512),[[a,e.username]])]),o("div",U,[t(o("input",{type:"email","onUpdate:modelValue":s[3]||(s[3]=r=>e.email=r),placeholder:"Email",class:"form-control"},null,512),[[a,e.email]])]),o("div",x,[t(o("input",{type:"password","onUpdate:modelValue":s[4]||(s[4]=r=>e.password=r),placeholder:"Password",class:"form-control"},null,512),[[a,e.password]])]),o("div",V,[o("button",{type:"submit",disabled:e.isLoading,class:"btn btn-primary"}," Sign Up ",8,k),e.errors?(p(),d("div",B,c(e.errors),1)):f("",!0)])],32)])}const I=N(v,[["render",D],["__scopeId","data-v-a2a5022e"]]);export{I as default};