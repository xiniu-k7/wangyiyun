<template>
    <div class="login">
        <div class="loginTop">欢迎登陆</div>
        <div class="loginContent">
            <input type="text" name="phone" v-model="phone" class="phone" placeholder="请输入手机号码">
            <input type="password" name="password" v-model="password" class="password" placeholder="亲输入密码">
        </div>
        <button class="btn" @click="login">登陆</button>
    </div>
</template>
<script>
    import { getLogin} from '@/request/api/home'
    export default{
        data(){
            return{
                phone:'',
                password:''
            }
        },
        methods:{
            async login(){
                console.log(this.phone)
                console.log(this.password)
                await getLogin({phone:this.phone,password:this.password})

            }
        }
    }
</script>
<style lang="less" scoped>
.login{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(235, 119, 119);
    .loginTop{
        font-size: .7rem;
        color: aliceblue;
        font-weight: 700;
        margin-top: 15vh;
    }
    .loginContent{
        width: 100%;
        height: 30vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        input{
            width: 50%;
            height: 5vh;
        }
    }
    button{
        width: 20%;
        height: 5vh;
        margin-top: 2vh;
    }
    
}
</style>