<template>
  <div class="">
    <div class="">
      <div class="text-center p-t-250">Increment Decrement Number</div>
    </div>
    <div class="d-flex f-24 justify-content-center m-t-10">
      <div class="countdown">{{ counter }}</div>
    </div>
    <div class="m-t-10">
      <button
        type="button"
        class="btn btn-primary m-r-10"
        @click="increment"
        id="btn_increment"
      >
        Increment
      </button>
      <button
        type="button"
        class="btn btn-danger"
        @click="decrement"
        id="btn_decrement"
        disabled
      >
        Decrement
      </button>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "IncrementDecrementNumber",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      //   this.checkButton();
      if (this.counter < 50) {
        this.counter++;
        $("#btn_decrement").prop("disabled", false);
        if (this.counter === 50) {
          $("#btn_increment").prop("disabled", true);
        }
      }
    },
    decrement() {
      if (this.counter > 0) {
        $("#btn_increment").prop("disabled", false);
        this.counter--;
        if (this.counter === 0) {
          $("#btn_decrement").prop("disabled", true);
        }
      }
    },
  },
};
</script>
<style scoped>
</style>