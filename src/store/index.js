import { createStore } from 'vuex'

export default createStore({
  state: {
    searchKey:'',
    cards:[
      {
        title:'Title1',
        summary:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magnam aliquam, explicabo sapiente beatae vero laborum saepe voluptatem voluptatum sed enim ipsam voluptatibus asperiores blanditiis delectus necessitatibus quae, aliquid hic.'
      },
      {
        title:'Title2',
        summary:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magnam aliquam, explicabo sapiente beatae vero laborum saepe voluptatem voluptatum sed enim ipsam voluptatibus asperiores blanditiis delectus necessitatibus quae, aliquid hic.'
      },
      {
        title:'Title3',
        summary:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magnam aliquam, explicabo sapiente beatae vero laborum saepe voluptatem voluptatum sed enim ipsam voluptatibus asperiores blanditiis delectus necessitatibus quae, aliquid hic.'
      },
      {
        title:'Title4',
        summary:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam magnam aliquam, explicabo sapiente beatae vero laborum saepe voluptatem voluptatum sed enim ipsam voluptatibus asperiores blanditiis delectus necessitatibus quae, aliquid hic.'
      },
    ]
  },
  getters: {
    cards:(state)=>{
      return state.cards.filter((el)=>{
        
        return el.title.toLocaleLowerCase().includes(state.searchKey.toLocaleLowerCase())
      })
    }
  },
  mutations: {
    updateSearchKey:(state, key)=>{
      state.searchKey = key
    }
  },
  actions: {
  },
  modules: {
  }
})
