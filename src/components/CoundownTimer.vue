<template>
  <div class="bg-gradient-1" id="Countdown">
    <div class="text-center font-countdown p-t-250">
      <div class="text-center">Countdown Timer Component</div>
      <div id="" class="d-flex justify-content-center">
        <div id="menit" class="countdown m-r-10"></div>
        <div class="countdown f-24 m-r-10">:</div>
        <div class="countdown m-r-10" id="detik"></div>
      </div>
    </div>
    <div class="text-center m-t-10">
      <span class="badge badge-pill badge-info f-16">Menit</span>
      <span class="badge badge-pill badge-info badge-style f-16">Detik</span>
    </div>
    <div class="m-t-10">
      <button type="button" class="btn btn-primary m-r-10" @click="startTimer">
        Start
      </button>
      <button
        type="button"
        class="btn btn-secondary m-r-10"
        @click="resetTimer"
      >
        Reset
      </button>
      <button type="button" class="btn btn-danger m-r-10" @click="stopTimer">
        Stop
      </button>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "CountdownTimer",
  data() {
    return {
      menit: 25,
      detik: 0,
      start: false,
      interval: null,
    };
  },
  mounted() {
    this.resetTimer();
    this.interval = setInterval(this.intervalCallback, 1000);
  },
  methods: {
    startTimer() {
      if (this.start === false) {
        this.start = true;
        this.intervalCallback();
      }
    },
    stopTimer() {
      this.start = false;
      this.intervalCallback();
    },

    resetTimer() {
      this.menit = 25;
      this.detik = 0;
      $("#menit").text(this.menit);
      if (this.detik < 10) {
        $("#detik").text("0" + this.detik);
      } else {
        $("#detik").text(this.detik);
      }
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