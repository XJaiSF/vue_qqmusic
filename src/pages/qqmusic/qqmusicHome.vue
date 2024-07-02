<template>
	<div class="qqmusicHome">
		<div class="qqmusicHome-nav">
			<div v-for="navData in navDataList" :key="navData.name" :id="navData.name" @click="changeClass(navData.name)">
			  <router-link :to="navData.to"  class="routerLink" >
				{{navData.name}}
			  </router-link>
			</div>
		</div>
		<div class="qqmusicHome-nav-center">
			 <router-view>
			 </router-view>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'App',
	  data(){
	  	return{
	  		navDataList:[
	  			{name:'推荐',to:'/recommended'},
	  			{name:'乐馆',to:'/rakukan'},
	  			{name:'听书',to:'/listenBook'},
				{name:'演出ing',to:'/performance'},
	  			{name:'会员',to:'/member'},
				{name:'助眠',to:'/helpSleep'},
				{name:'民谣',to:'/folkSong'},
				{name:'古典',to:'/classical'},
	  		],
			proRouter:null
	  	}
	  },
	  mounted(){
		  this.proRouter = document.getElementById('推荐')
		  this.proRouter.style.cssText = "border-bottom: 3px;border-color: greenyellow;border-style: solid;"
	  },
	  methods:{
		  changeClass(name){
			  let now = document.getElementById(name)
			  if(this.proRouter==null){
				  this.proRouter = now
			  }else{
				  this.proRouter.style.cssText = "border-width:0px"
				  this.proRouter = now
			  }
			  now.style.cssText = "border-bottom: 3px;border-color: greenyellow;border-style: solid;"
		  }
	  }
	}
</script>

<style scoped>
	.qqmusicHome{
		height: 100%;
		width: 100%;
	}
	
	.qqmusicHome-nav{
		height: 5%;
		width: 100%; /* 容器宽度 */
		font-size: 20px;
		white-space: nowrap;
		overflow-x: auto; /* 横向滚动条 */
		scrollbar-width: none;
	}
	
	.qqmusicHome-nav>div{
		display: inline;
		margin-left: 20px;
		border-width:0px ;
	}
	
	.qqmusicHome-nav-center{
		height: 95%;
		width: 100%;
	}
</style>