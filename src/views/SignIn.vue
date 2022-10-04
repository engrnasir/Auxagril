<template>
  <div class="container">
    <div class="quote">
        <h1>When men are pure, laws are useless; when men are corrupt, laws are broken.</h1>
        <h3>– Benjamin Disraeli</h3>
    </div>
    <div class="signin-wrapper">
        <img src="@/assets/contact.png" alt="" class="thumbnail">
        <h3 class="title">SignIn</h3>
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Password">
        <div class="rememberme" @click="rememberme=!rememberme">
            <span>Remember me</span>
            <div class="toggleBtn" :class="rememberme?'toggled':''"><span class="circle"></span></div>
        </div>
        <div class="buttons">
            <button class="signin">Sign in</button>
            <button class="signup">Sign up</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            rememberme : false
        }
    }

}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        display: flex;
        align-items: center;
        min-height: 95vh;
        padding-top: 80px;
        @media only screen and (max-width:780px){
            justify-content: center;        
        }
    }
    .quote{
        
        width: 40%;
        background: #03386de1;
        height: 100%;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #ffff;
        border-radius: 0 0 100px 0;
        @media only screen and (max-width:780px){
            display: none;
            padding: 50px 10px;
        }
    }
    .signin-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        padding: 40px 10px;
        @media only screen and (max-width:780px){
            width: 100%;
        }
        .thumbnail{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #03386d;
            border:  1px solid #03386d;
            margin-bottom: 20px;
        }
        .title{
            font-weight: 600;
            font-size: 30px;
            color: #03386D;
            margin-bottom: 20px;
        }
        input[type='text']{
            width: 320px;
            height: 46px;
            background: rgba(3, 56, 109, 0.9);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 6px;
            padding: 5px 20px;
            color: #ffff;
            border: none;
            outline-color: #0080ff;
            margin-bottom: 25px;

        }
        .rememberme{
            transform: translateX(-80px);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            cursor: pointer;
            caret-color: transparent;
            position: relative;
            z-index: -1;
            .toggleBtn{
                width: 28px;
                height: 16px;
                background: #0080ff;
                border-radius: 31px;
                margin-left: 10px;
                position: relative;
                transition: all .25s;
                .circle{
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #fff;
                    position: absolute;
                    right: 2px;
                    top: 2px;
                    transition: all .25s;
                }
            }
            .toggled{
                background: #03386D;
                .circle{
                    right: 14px;
                }
            }
        }
        .buttons{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        button{
            width: 100px;
            height: 35px;
            background: #03386D;
            border-radius: 10px;
            font-weight: 500;
            font-size: 16px;
            color: #FFFFFF;
            border: none;
            cursor: pointer;
            transition: all .25s;
            &:active{
                transform: scale(.94);
            }
        }
        .signin{
            margin-right: 15px;
        }
    }

</style>