<template>
<div>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1>Vuex Demo</h1>

  <div class="ui grid">
    <div class="sixteen wide mobile eight wide tablet eight wide computer column">
      <h2>moduleA</h2>
      <p>目前點擊的次數:<a class="ui blue circular label">{{ $store.state.a.count }}</a>{{evenOrOdd}},{{evenOrOddreal}}</p>
      <div class="ui icon buttons">
        <button class="ui medium button" @click="$store.dispatch('a/increment')"><i class="align plus icon"></i></button>
        <button class="ui medium button" @click="$store.dispatch('a/decrement')"><i class="align minus icon"></i></button>
        <button class="ui red button" @click="$store.dispatch('a/reset')">歸零</button>
        <button class="ui button" @click="$store.dispatch('a/incrementIfOdd')">if是奇數+1</button>
        <button class="ui green button" @click="$store.dispatch('a/incrementAsync')">同步累加</button>
      </div>
      <h5 class="ui header">Global store</h5>
      <button class="ui orange button" @click="increment">+</button>
      <button class="ui orange button" @click="decrement">-</button>
      <button class="ui orange button" @click="reset">reset</button>

    </div>
    <div class="sixteen wide mobile eight wide tablet eight wide computer column">
      <h2>moduleB</h2>
      <p>目前點擊的次數:<a class="ui blue circular label">{{ $store.state.b.count }}</a></p>
      <div class="ui icon buttons">
        <button class="ui medium button" @click="$store.dispatch('b/increment')"><i class="align plus icon"></i></button>
        <button class="ui medium button" @click="$store.dispatch('b/decrement')"><i class="align minus icon"></i></button>
        <button class="ui red button" @click="$store.dispatch('b/reset')">歸零</button>
        <button class="ui green button" @click="$store.dispatch('b/incrementAsync')">同步累加</button>
      </div>
      <h5 class="ui header">Import store</h5>
      <button class="ui orange button" @click="incrementB">+</button>
      <button class="ui orange button" @click="decrementB">-</button>
      <button class="ui orange button" @click="resetB">reset</button>

    </div>
  </div>
</div>
</div>
</template>

<script>
import {
  mapGetters,
  mapActions,
  mapState
} from 'vuex'

export default {
  computed: {
    ...mapGetters("a", [
      "evenOrOdd", "evenOrOddreal"
    ]),
  },

  methods: {
    ...mapActions("a", [
      "increment", "decrement", "reset"
    ]),
    ...mapActions("b", {
      incrementB: "increment",
      decrementB: "decrement",
      resetB: "reset"
    })
  }
}
</script>
