<template>
    <div class="container">
      <div class="question">
          <h2>Question#02</h2>
          <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.?</h3>
      </div>
      <div class="options">
          <input type="text" placeholder="Answer">
      </div>
      <div class="buttons">
          <button class="nextBtn" @click="$router.push('/personalPage')">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{

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
            width: 100%;
            max-width: 800px;
            input[type='text']{
                width: 100%;
                height: 60px;
                font-size: 16px;
                border-radius: 10px;
                border: none;
                margin-bottom: 30px;
                background: rgba(255, 255, 255, 0.795);
                padding: 15px;
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