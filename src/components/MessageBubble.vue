<script>
export default {
  methods: {
    currentDateTime() {
      const current = new Date();
      let hours = current.getHours();
      let minutes = current.getMinutes();
      let am_pm = "AM";
      if (hours > 12) {
        hours = hours - 12;
        am_pm = "PM";
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      const time = hours + ":" + minutes + " " + am_pm;

      return time;
    }
  }
};
</script>

<template>
<p id="textMessage"> Hi stranger 🤓 welcome to my<br> servers landing page! </p>
<svg width="12" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.783 18.2906C11.4878 20.3442 2.88798 14.4399 0 11.231L0.320887 1.60444C3.4228 2.24621 10.14 2.82381 12.1937 0C11.8728 11.5519 20.5368 17.3279 22.783 18.2906Z" fill="#468CF7"/>
</svg>
<div id="textReadContainer">
    <p class="textRead">{{ currentDateTime() }} </p>
    <p class="textRead" id="thick">Read &nbsp;</p>
</div>
</template>

<style scoped>
#textMessage {
    background-color: #468CF7;
    border-radius: 15px;
    padding: 5px;
    padding-left: 10px;
    min-width: 200px;
    line-height: 20px;
    color: white;
}

.textRead {
    font-size: 10px;
    display: inline;
    float: right;
}

#thick {
    font-weight: 600;
}

#textReadContainer {
    margin-top: 8px;
    right: -8px;
}

svg {
    position: relative;
    float: right;
    bottom: 10px;
}
</style>

