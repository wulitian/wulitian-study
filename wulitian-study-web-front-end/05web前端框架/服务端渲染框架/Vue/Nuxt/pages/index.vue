<template>
  <div>
    <button @click="submit">提交</button>
    <div>{{data}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'IndexPage',
  async asyncData (context) {
    console.log(axios)
    const { data } = await axios ({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    console.log(context)
    return data
  },
  methods: {
    submit () {
      console.log(this.data)
      this.$router.push('/user')
    }
  }
}
</script>
