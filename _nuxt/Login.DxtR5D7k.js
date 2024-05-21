import g from"./Signup.CVScY1C3.js";import{g as h}from"./index.JHvMOnFO.js";import{a as f}from"./entry.BX3CV9hu.js";import{J as l,X as u,O as t,a5 as _,aa as m,ab as p,Y as S,a9 as d,L as b,a2 as w,_ as k,$ as v}from"./swiper-vue.CoqLb3VA.js";import{_ as T}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./Welcome.vue.DxcTFbtL.js";import"./index.CRGphr4c.js";import"./Wrapper.DlSCnsyd.js";import"./cart.ZlwPY64k.js";const y={middleware:"authroute",data(){return{isSignUpVisible:!1,username:"",password:"",isLoading:!1,errors:null}},methods:{async signin(){this.isLoading=!0;try{const{data:s}=await this.$apollo.mutate({mutation:h`
            mutation Login($input: LoginInput!) {
              login(input: $input) {
                authToken
                refreshToken
                user {
                  id
                  username
                  email
                }
              }
            }
          `,variables:{input:{provider:"PASSWORD",credentials:{username:this.username,password:this.password}}}}),e=f(),{authToken:n,refreshToken:i,user:o}=s.login;sessionStorage.setItem("authToken",n),sessionStorage.setItem("refreshToken",i),sessionStorage.setItem("user",o.username),e.setUser(o.username),e.setToken(n),e.setRToken(i),console.log("Auth Token:",n),console.log("Refresh Token:",i),console.log(o.username,"user"),await this.$router.push("/")}catch(s){console.error("Login failed:",s.message),this.errors=s.message}finally{this.isLoading=!1}},showSignUp(){this.isSignUpVisible=!0,this.$nextTick(()=>{const s=this.$refs.signupSection;s&&s.scrollIntoView({behavior:"smooth"})})}}},U=s=>(k("data-v-d349b423"),s=s(),v(),s),x={class:"login-container"},I={class:"form-group"},L={class:"form-group"},V={class:"grid gap-4"},A=["disabled"],B={key:0,class:"error-message"},C={class:"grid mt-4 gap-4"},D=U(()=>t("h1",{class:"text-center text-2xl"},"or",-1)),N={ref:"signupSection",class:"mx-auto mt-6"};function R(s,e,n,i,o,a){const c=g;return l(),u(w,null,[t("div",x,[t("form",{onSubmit:e[3]||(e[3]=_((...r)=>s.handleSubmit&&s.handleSubmit(...r),["prevent"])),class:"login-form"},[t("div",I,[m(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>o.username=r),placeholder:"Username or Email",autocomplete:"email",class:"form-control"},null,512),[[p,o.username]])]),t("div",L,[m(t("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=r=>o.password=r),autocomplete:"current-password",placeholder:"Password",class:"form-control"},null,512),[[p,o.password]])]),t("div",V,[t("button",{type:"submit",onClick:e[2]||(e[2]=(...r)=>a.signin&&a.signin(...r)),disabled:o.isLoading,class:"btn btn-primary"}," Sign in ",8,A),o.errors?(l(),u("div",B,S(o.errors),1)):d("",!0)])],32),t("div",C,[D,t("button",{onClick:e[4]||(e[4]=(...r)=>a.showSignUp&&a.showSignUp(...r)),class:"btn btn-secondary"},"New User")])]),t("div",N,[o.isSignUpVisible?(l(),b(c,{key:0})):d("",!0)],512)],64)}const Y=T(y,[["render",R],["__scopeId","data-v-d349b423"]]);export{Y as default};
