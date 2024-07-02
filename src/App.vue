<template>
  <div id="app">
	  <div class="top">
		  <top></top>
	  </div>
	  <div class="center">
		 <router-view>
		 </router-view>
	  </div>
	  <div class="nav">
		<div v-for="navData in navDataList" :key="navData.name" @click="changeClass(navData.name)" >
		  <router-link :to="navData.to" class="routerLink" :id="navData.name">
			 <img  class="navImg" :src="navData.imgSrc" alt="" />
			 <br />
			 {{navData.name}}
		  </router-link>
		</div>
	  </div>
  </div>
</template>
<script>
	import top from './components/top.vue'
	export default {
	  name: 'App',
	  components: {
	    top
	  },
	  data(){
	  	return{
	  		navDataList:[
	  			{name:'首页',imgSrc:require('./assets/主页.svg'),to:'/qqmusicHome'},
	  			{name:'直播',imgSrc:require('./assets/直播.svg'),to:'/liveBroHome'},
	  			{name:'雷达',imgSrc:require('./assets/雷达.svg'),to:'/radarHome'},
	  			{name:'社区',imgSrc:require('./assets/社区.svg'),to:'/comHome'},
	  			{name:'我的',imgSrc:require('./assets/我的.svg'),to:'/myHome'},
	  		],
			proRouter:null
	  	}
	  },
	  mounted(){
		  this.proRouter = document.getElementById('首页')
		  this.proRouter.style.cssText = "color:rgba(82, 168, 236, 0.8);font-size:25px"
	  },
	  methods:{
		  changeClass(name){
			  let now = document.getElementById(name)
			  if(this.proRouter==null){
				  this.proRouter = now
			  }else{
				  this.proRouter.style.cssText = "color:#2c3e50;font-size:15px"
				  this.proRouter = now
			  }
			  now.style.cssText = "color:rgba(82, 168, 236, 0.8);font-size:25px"
		  }
	  }
	}

</script>

<style>
	body,html {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	
	@font-face {
		font-family:'souJinTi';
		src: url('./assets/fonts/瘦金体.tff') format('truetype');
	}
	
	#app {
	  height: 100%;
	  width: 100%;
	  font-family: 'souJinTi';
	  font-weight: 700;
	  font-size: 20px;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	}

	.top{
		height:5%;
		width: 100%;
		background-color: rgb(250,250,250);
	}
	
	.nav{
		height: 10%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 15px;
	}
	
	.navImg{
		height: 30px;
		width: 30px;
	}
	
	.center{
		height:85%;
		width: 100%;
		background-color: rgb(250,250,250);
	}
	
	.routerLink{
		text-decoration: none;
		color: #2c3e50;
	}
</style>
