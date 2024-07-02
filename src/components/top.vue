<template>
	<div class="top">
		<div>
			{{nowTime}}
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs'
export default {
	 name:'top',
	  data() {
		return {
		  nowTime: ''
		}
	  },
	  mounted(){
		  this.nowTimes()
	  },
	  methods: {
		nowTimes(){
			this.nowTime=dayjs(this.time).format('HH:mm:ss')
			setInterval(this.nowTimes,1000);
			this.clear()
		},
		clear(){
		  clearInterval(this.nowTimes)
		  this.nowTimes = null;
		}
	  },
	  beforeDestroy(){
		this.clear()
	  }
};
</script>

<style scoped>
	.top>div{
		height: 100%;
		width: 100px;
		margin-left: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
