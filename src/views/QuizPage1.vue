<template>
  <div class="container">
    <div class="question">
        <h2>Question#01</h2>
        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.?</h3>
    </div>
    <div class="options">
        <p>A. {{options[0]}}</p>
        <p>B. {{options[1]}}</p>
        <p>C. {{options[2]}}</p>
        <p>D. {{options[3]}}</p>
    </div>
    <div class="buttons">
        <button class="nextBtn" @click="$router.push('/quizpage2')">Next</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            options:['option1', 'option2', 'option3', 'option4']
        }
    }

}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        padding-top: 100px;
        .question{
            text-align: center;
            max-width: 800px;
            width: 100%;
            background: rgb(255, 255, 255);
            border-radius: 20px;
            padding: 30px 20px;
            margin-bottom: 20px;
            h2{
                font-weight: 800;
                font-size: 30px;
                color: #03386D;
                margin-bottom: 15px;
            }
            h3{
                font-weight: 400;
                font-size: 22px;
                color: #03386D;
            }
        }
        .options{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 20px;
            margin-bottom: 20px;
            @media only screen and (max-width:580px){
                grid-template-columns: repeat(1,1fr);
            }
            p{
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 250px;
                height: 45px;
                background: rgba(3, 56, 109, 0.8);
                border-radius: 15px;
                font-weight: 600;
                font-size: 20px;
                color: #FFFFFF;
                cursor: pointer;
                transition: all .25s;
                &:active{
                    transform: scale(0.93);
                }

            }
        }
        .nextBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 45px;
            background: rgba(3, 56, 109, 0.8);
            border-radius: 15px;
            font-weight: 600;
            font-size: 20px;
            color: #FFFFFF;
            border: none;
            cursor: pointer;
            transition: all .25s;
            &:active{
                transform: scale(0.93);
            }

        }
    }
</style>