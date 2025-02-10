import { createStore } from 'vuex'
/* eslint-disable */
export default createStore({
  state: {
    payroll:null,

  },
  getters: {
  },
  mutations: {
    setPayroll(state, payload){
      state.payroll = payload;
    }
  },
  actions: {
    async getPayroll({commit} ,payload){
      // let modern_tech = await fetch('http://localhost:3000/positions')
      // let info = await modern_tech.json()
      let {payroll} =await (await fetch('http://localhost:3000/payroll')).json()
      commit('setPayroll',payroll)
        },
        async deletePayroll({commit},payroll_id){
          await fetch('http://localhost:3000/payroll/'+payroll_id,{method:"DELETE"})
          console.log(payroll_id)
          location.reload()
        }
      }  

  },
)
