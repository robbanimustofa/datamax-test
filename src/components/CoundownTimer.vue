<template>
  <div>
    <div class="text-center">Countdown Timer Component</div>
    <div class="text-center">
      <div id="" class="d-flex justify-content-center">
        <div id="menit"></div>
        <div>:</div>
        <div id="detik"></div>
      </div>
    </div>
    <button @click="startTimer">Start</button>
    <button @click="stopTimer">Stop</button>
    <button @click="resetTimer">Restart</button>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "CountdownTimer",
  data() {
    return {
      menit: 11,
      detik: 10,
      start: false,
      interval: null,
    };
  },
  mounted() {
    $("#menit").text(this.menit);
    $("#detik").text(this.detik);
    this.interval = setInterval(this.intervalCallback, 1000);
  },
  methods: {
    startTimer() {
      if (this.start === false) {
        this.start = true;
        this.intervalCallback();
      }
    },
    toggleTimer() {
      if (this.start) {
        this.start = false;
      } else {
        if (!this.menit && !this.detik) {
          this.resetTimer();
          this.start = true;
        }
      }
    },

    stopTimer() {
      clearInterval(this.menit && this.detik);
    },

    resetTimer() {
      this.menit = 35;
      this.detik = 0;
    },
    intervalCallback() {
      if (!this.start) return false;
      if (this.detik === 0) {
        if (this.menit == 0) {
          this.timerComplete();
          return null;
        }
        this.detik = 59;
        this.menit--;
      } else {
        this.detik--;
      }
      if (this.detik < 10) {
        $("#detik").text("0" + this.detik);
      } else {
        $("#detik").text(this.detik);
      }
      if (this.menit < 10) {
        $("#menit").text("0" + this.menit);
      } else {
        $("#menit").text(this.menit);
      }
    },
    timerComplete() {
      this.start = false;
      alert("Good work! Now take a 5 minute break.");
    },
  },
};
</script>
<style>
</style>