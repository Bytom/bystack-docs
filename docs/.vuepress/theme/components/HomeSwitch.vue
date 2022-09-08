<template>
  <div class="switch">
    <a :class="['option', { actived: !this.isBmc }]" href="https://developer.bytom.io/">Bytom</a>
    <a :class="['option', { actived: this.isBmc }]" href="https://bmcdev.bytom.io/">BMC</a>
  </div>
</template>
<script>
export default {
  name: "HomeSwitch",
  data(){
    return {
      isBmc: false
    }
  },
  mounted(){
    if(window.location.host === "bmcdev.bytom.io"){
      this.isBmc = true
    }else{
      this.isBmc = false
    }
  }
};
</script>

<style lang="stylus" scoped>
.switch {
  width: 270px;
  margin-top: 32px;
  box-sizing: border-box;
  display: flex;
  padding: 5px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  .option {
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.88);
    &.actived{
      background: #fff;
      border-radius: 4px;
    }
  }
}
@media(max-width: 640px){
  .switch{
    width: calc(100% - 32px);
    margin: auto;
  }
}
</style>
