<template>
    <div class="">
        <div class="">
            <div class="text-center">Increment Decrement Number</div>
        </div>
        <div class="text-center f-24">{{counter}}</div>
        <button type="button" class="btn btn-primary m-r-10" @click="increment" id="btn_increment">Increment</button>
        <button type="button" class="btn btn-danger" @click="decrement" id="btn_decrement">Decrement</button>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name:'IncrementDecrementNumber',
    data() {
        return {
            counter:0,
        }
    },
    methods: {
        increment() { 
            if(this.counter<50){
                this.counter++;
            }else{
                $('#btn_increment').prop('disabled',true)
            }
        
      },
      decrement() { 
          if(this.counter>0){
              this.counter--;
          }else{
              $('#btn_decrement').prop('disabled',true)
          }
        
      }
    },
}
</script>
<style scoped>

</style>