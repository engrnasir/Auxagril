<template>
  <div class="container">
    <div class="wrapper">
        <h2 class="title">Personal Page</h2>
        <div class="document" v-for="i in 5" :key="i">
            <img src="@/assets/pdf-ion.png" class="icon" alt="">
            <h3 class="doc-title">Document1</h3>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 100px;
        .wrapper{
            max-width: 800px;
            width: 100%;
            border-radius: 20px;
            background-color: #fff;
            padding: 15px 20px;
            margin-bottom: 20px;
            .title{
                margin-bottom: 30px;
            }
            .document{
                width: 100%;
                padding: 15px 20px;
                border-radius: 10px;
                background: rgba(185, 185, 185, 0.219);
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                .icon{
                    width: 40px;
                    margin-right: 20px;
                }
                .doc-title{

                }
            }
        }
    }

</style>