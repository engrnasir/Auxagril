<template>
  <nav>
    <div class="top-bar">
        <img src="@/assets/menu.png" alt="" class="menu-icon" @click="hideMenu=false" v-if="hideMenu">
        <img src="@/assets/menu-close.png" alt="" class="menu-icon" @click="hideMenu=true" v-else>
        <label for="search">
            <input type="text" id="search" v-model="value" @input="updateSearchKey(value)" placeholder="Search by Title">
            <img src="@/assets/search.png" class="search-icon" alt="" >
        </label>
        <img src="@/assets/contact.png" class="contact" alt="" @click="$router.push('/signin')">
    </div>
    <div class="side-menu" :class="hideMenu? 'hide-menu':''">
        <ul class="items">
            <li class="item"><router-link to="/" @click="hideMenu=true">Home</router-link></li>
            <li class="item"><router-link to="/personalPage" @click="hideMenu=true">My Personal</router-link></li>
            <li class="item"><router-link to="" @click="hideMenu=true">Contact</router-link></li>
            <li class="item"><router-link to="" @click="hideMenu=true">About</router-link></li> 
        </ul>
    </div>
    <div class="overlay" v-show="!hideMenu" @click="hideMenu=true"></div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data(){
        return {
            hideMenu : true,
            value:''
        }
    },
    methods:{
        ...mapMutations([
            'updateSearchKey'
        ])
    }

}
</script>

<style lang="scss" scoped>
    nav{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        .top-bar{
            width: 100%;
            height: 80px;
            background: #03386D;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 60px;
            border-bottom: .5px solid rgb(0, 0, 0);
            position: relative;
            z-index: 999;
            @media only screen and (max-width:780px){
                padding: 0 10px;
            }
            .menu-icon{
                width: 40px;
                transition: all .25s;
                cursor: pointer;
                &:active{
                    transform: scale(.93);
                }
                @media only screen and (max-width:780px){
                    width: 30px;
                }
            }
            .contact{
                width: 50px;
                cursor: pointer;
                @media only screen and (max-width:780px){
                    width: 30px;
                }
            }
            label{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                max-width: 516px;
                input[type='text']{
                    width: 100%;
                    margin: 5px 15px;
                    height: 35px;
                    background: #DBDBDB;
                    border-radius: 50px;
                    border: none;
                    padding: 0 40px;
                    font-size: 15px;
                    &:focus{
                        outline-color: #03386D;
                    }
                    @media only screen and (max-width:780px){
                        height: 20px;
                    }
                }
                .search-icon{
                    width: 25px;
                    transform: translateX(-50px);
                    cursor: pointer;
                    @media only screen and (max-width:780px){
                        width: 16px;
                        transform: translateX(-35px);
                    }
                }
            }

        }
        .side-menu{
            width: 280px;
            height: 100vh;
            background: #03386D;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 998;
            padding-top: 100px;
            transition: all .4s;
            box-shadow: 6px 4px 11px 5px rgba(0, 0, 0, 0.25);

            .items{
                .item{
                    padding: 10px 20px;
                    border-bottom: .5px solid rgba(0, 0, 0, 0.15);
                    cursor: pointer;
                    &:hover{
                        background: #ffffff25;
                    }
                }
                .item a{
                    display: block;
                    text-decoration: none;
                    color: #fff;
                    font-size: 24px;
                    width: 100%;
                }
            }
        }
        .overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            min-height: 100vh;
            background-color: #2c2c2c1e;
            backdrop-filter: blur(5px);
        }
        .hide-menu{
            transform: translateX(-110%);
        }
    }

</style>