<template>
  <div class="container">
    <div class="card">
        <h3 class="title">Title</h3>
        <p class="summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    </div>
    <button class="quizStartBtn" @click="$router.push('/quizpage1')">Start Quiz</button>
    <div class="otherContent" >
        <h2>title</h2>
        <p class="snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam vero laudantium eos cum! Consectetur eveniet ullam accusamus placeat. Molestias esse suscipit exercitationem libero dolor accusantium incidunt beatae earum nostrum officiis ad praesentium neque explicabo magni excepturi doloribus id temporibus cum ipsam, consequatur laboriosam, nobis maiores quae! Sint quo et culpa recusandae quia corrupti porro tenetur modi blanditiis harum laboriosam eveniet, dolorum eos facilis ipsam nesciunt nisi dolor fugit non! Dolor repudiandae ullam fuga tempora sapiente officia asperiores mollitia porro, incidunt natus repellendus cum veritatis eaque autem esse, ipsam nesciunt vel vero quasi explicabo quae qui? Deleniti animi incidunt nesciunt assumenda veniam sequi at. Ipsum facere ut suscipit numquam maxime alias eaque, asperiores nesciunt repudiandae sint illum, consequuntur iure itaque accusamus vitae saepe, odio aperiam sapiente? Blanditiis itaque unde maiores quo, ipsam beatae ad animi nemo omnis ab dolorem aspernatur!</p>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 100px;
        h2,h3{
            text-transform: capitalize;
        }

        .otherContent,
        .card{
            max-width: 800px;
            width: 100%;
            border-radius: 20px;
            background-color: #fff;
            padding: 15px 20px;
            margin-bottom: 20px;
      }
      .quizStartBtn{
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
        margin-bottom: 30px;
        cursor: pointer;
        transition: all .25s;
        &:active{
            transform: scale(0.93);
        }
      }

    }

</style>