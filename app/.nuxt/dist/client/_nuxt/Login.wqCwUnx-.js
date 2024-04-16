import{g as p}from"./index.BXLA33K8.js";import{a as c}from"./entry.DJwux6Vw.js";import{J as l,X as u,O as o,aa as m,ab as d,Y as g,a1 as h,a6 as f}from"./swiper-vue.rgMx2r3g.js";import{_}from"./_plugin-vue_export-helper.DlAUqK2U.js";const b={data(){return{username:"",password:"",isLoading:!1,errors:null}},methods:{async handleSubmit(){this.isLoading=!0;try{const{data:t}=await this.$apollo.mutate({mutation:p`
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
          `,variables:{input:{provider:"PASSWORD",credentials:{username:this.username,password:this.password}}}}),s=c(),{authToken:n,refreshToken:a,user:e}=t.login;localStorage.setItem("authToken",n),localStorage.setItem("refreshToken",a),s.setUser(e.username),s.setToken(n),s.setRToken(a),console.log("Auth Token:",n),console.log("Refresh Token:",a),console.log(e.username,"user"),await this.$router.push("/cart")}catch(t){console.error("Login failed:",t.message),this.errors=t.message}finally{this.isLoading=!1}}}},k={class:"login-container"},S={class:"form-group"},w={class:"form-group"},y={class:"grid gap-4"},T=["disabled"],v=["disabled"],L={key:0,class:"error-message"};function x(t,s,n,a,e,i){return l(),u("div",k,[o("form",{onSubmit:s[2]||(s[2]=f((...r)=>i.handleSubmit&&i.handleSubmit(...r),["prevent"])),class:"login-form"},[o("div",S,[m(o("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=r=>e.username=r),placeholder:"Username or Email",autocomplete:"email",class:"form-control"},null,512),[[d,e.username]])]),o("div",w,[m(o("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=r=>e.password=r),autocomplete:"current-password",placeholder:"Password",class:"form-control"},null,512),[[d,e.password]])]),o("div",y,[o("button",{type:"submit",disabled:e.isLoading,class:"btn btn-primary"}," Sign in ",8,T),o("button",{type:"signup",disabled:e.isLoading,class:"btn btn-primary"}," Sign Up ",8,v),e.errors?(l(),u("div",L,g(e.errors),1)):h("",!0)])],32)])}const D=_(b,[["render",x]]);export{D as default};
