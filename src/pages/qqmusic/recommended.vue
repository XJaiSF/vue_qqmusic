<template>
	<div class="recommended">
		<div class="player">
			<audio id="audio" :src="nowPlay"  controls preload="load">
				你的浏览器太low了，还不支持H5，赶紧换了吧。 
			</audio>
		</div>
	<!-- 搜索条，进入搜素页 -->
		<div class="recommended-search">
			<div class="recommended-search-left">
				<img src="../../assets/搜索.svg" alt="" />
			</div>
			<div class="recommended-search-center">
				<input type="text" :placeholder="searchPla"/>
			</div >
			<div class="recommended-search-right">
				<img src="../../assets/音乐盒.svg" alt="" />
			</div>
		</div>
	<!-- 我的音乐dna -->
		<div class="recommended-dna">
			<div class="recommended-dna-top">
				<div class="recommended-dna-top-left">
					<img  src="../../assets/用户头像.png" alt="" />
					<span>{{userData.name}}</span>
					<img src="../../assets/绿钻.svg"  alt="" />
					<span>{{userData.vip}}</span>
				</div>
				<div class="recommended-dna-top-right">
					<span>查看我的音乐DNA</span>>
				</div>
			</div>
			<div class="recommended-dna-center">
				<div id="youLike">
					<div>
						<span style="color:aqua;">{{youlike.hello}}</span> <br/><br/>
						<img v-show="!youlike.isPlay" @click="playMusic"  style="width: 50px;height:40px;" src="../../assets/播放off.svg" alt="" />
						<img v-show="youlike.isPlay" @click="playMusic"  style="width: 50px;height:40px;" src="../../assets/播放on.svg" alt="" />
						<p style="margin-top: 20px;color:aqua;">{{youlike.content}}</p>
					</div>
					<span style="font-size: 15px;">{{youlike.intro}}</span> <br />
					<span>{{youlike.title}}</span> 
				</div>
				<div v-for="dnaSong in dnaSongList" :key="dnaSong.name">
					<div :id="dnaSong.title">
						<img  :src="dnaSong.imgSrc" alt="" />
					</div>
					<span style="font-size: 15px;">{{dnaSong.intro}}</span><br />
					<span>{{dnaSong.title}}</span>
				</div>
			</div>
		</div>
	<!-- 大家都在听 -->
		<div class="listening">
			<div class="listening-top">
				<div>大家都在听</div>
				<div>...</div>
			</div>
			<div class="listening-content">
				<div v-for="recSong in recSongList" :key="recSong.Singer">
					<div class="songimg" @click="recPlay(recSong.id)">
						<img :src="recSong.imgSrc" alt="" />
					</div>
					<div class="songContent">
						<p>{{recSong.content}}</p>
						<p>{{recSong.Singer}}</p>
					</div>
					<div class="giveALike" @click="giveALike(recSong.id)">
						<img v-show="recSong.like==true" src="../../assets/爱心true.svg" alt="" />
						<img v-show="recSong.like==false" src="../../assets/爱心false.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
	<!-- 歌单补给站 -->
	<!-- 排行榜 -->
	<!-- 推荐今日精选直播 -->
	<!-- 新专辑推荐 -->
	</div>
</template>

<script>
	import dayjs from 'dayjs'
	export default {
	  name: 'recommended',
	  data(){
	  	return{
			isPlay:false,
			nowPlay:require('../../assets/music/大城小爱yyqx.mp3'),
			userData:{
				name:'zr',
				vip:'Lv999'
			},
			searchPla:'',
	  		searchRecList:[
	  			'如果爱忘了 连续45天在榜',
				'日不落 蔡依林',
				'中国好声音',
				'The Truth That You Leave'
	  		],
			proRouter:null,
			dnaSongList:[
				{title:'每日30首',intro:'  ',imgSrc:require('../../assets/一路向北.png'),content:'daily 30'},
				{title:'快听',intro:'GOOD-BYE My Tears',imgSrc:require('../../assets/催眠.png'),content:'High Lights'},
				{title:'百万收藏',intro:'  ',imgSrc:require('../../assets/梦.png'),content:'Million Fav'},
				{title:'排行榜',intro:'  ',imgSrc:require('../../assets/恋人.png'),content:'TOP List'},
			],
			youlike:{title:'猜你喜欢',intro:'大城小爱 —— 易 ',hello:'',content:'翻开12月的回忆',isPlay:false,songSrc:require('../../assets/music/大城小爱yyqx.mp3')},
			recSongList:[
				{id:0,Singer:'姚晓棠',content:'双梦《度华年》电视剧情感插曲',imgSrc:require('../../assets/song1.png'),like:false,songSrc:require('../../assets/music/双梦.mp3')},
				{id:1,Singer:'黄绮珊',content:'理想之地《你比星光美丽》电视剧主题曲',imgSrc:require('../../assets/song4.png'),like:false,songSrc:require('../../assets/music/双梦.mp3')},
				{id:2,Singer:'YOASOBI(ヨアソビ)',content:'UNDEAD',imgSrc:require('../../assets/song2.png'),like:false,songSrc:require('../../assets/music/双梦.mp3')},
				{id:3,Singer:'李大奔BENZO',content:'LAKE BOY (Explicit)',imgSrc:require('../../assets/song3.png'),like:false,songSrc:require('../../assets/music/双梦.mp3')},
			]
	  	}
	  },
	  mounted(){
		  this.nowSearchPla(0)
		  let nowTimeH = parseInt(dayjs(this.time).format('HH'))
		  if(nowTimeH>=5 && nowTimeH<10){
			  this.youlike.hello='早上好 '+this.userData['name']
		  }else if(nowTimeH>=10 && nowTimeH<13){
			  this.youlike.hello='中午好 '+this.userData['name']
		  }else if(nowTimeH>=13 && nowTimeH<18){
			  this.youlike.hello='下午好 '+this.userData['name']
		  }else{
			  this.youlike.hello='晚上好 '+this.userData['name']
		  }
	  },
	  methods:{
		nowSearchPla(namber){
			const vm = this;
			console.log(vm.searchRecList.length)
		  	vm.searchPla = vm.searchRecList[namber%vm.searchRecList.length]
		  	let intervalIndex = setInterval(function(){
				console.log('定时器正在执行',intervalIndex)
				vm.searchPla = vm.searchRecList[(namber++)%vm.searchRecList.length]
			},3000);
		},
		giveALike(id){
			this.recSongList[id].like = !this.recSongList[id].like
		},
		playMusic(){
			this.youlike.isPlay = ! this.youlike.isPlay
			if(this.nowPlay!= require('../../assets/music/大城小爱yyqx.mp3')){
				console.log('切换到大城小爱')
				this.nowPlay = require('../../assets/music/大城小爱yyqx.mp3')
				
			}
			if(this.youlike.isPlay){
				console.log('正在播放，大城小爱')
				
				this.$nextTick(() => {
				      // 在nextTick回调函数中执行渲染完毕后的函数
				      document.getElementById("audio").play()
				});
				
				 this.isPlay = true
			}else{
				console.log('已关闭，大城小爱')
				document.getElementById("audio").pause()	
				this.isPlay = false
			}
		},
		recPlay(id){
			if(this.nowPlay!= require('../../assets/music/双梦.mp3')){
				this.youlike.isPlay = false
				console.log('切换到双梦')
				
				this.nowPlay = require('../../assets/music/双梦.mp3')
			}
			console.log('正在播放，双梦',id)
			
			 this.$nextTick(() => {
			       // 在nextTick回调函数中执行渲染完毕后的函数
			       document.getElementById("audio").play()
			 });
			 
			 this.isPlay = true
		}
	  },
	  beforeDestroy(){
	  	 clearInterval(this.intervalIndex)
	  }
	}
</script>

<style scoped>
	.recommended{
		height: 100%;
		width: 100%;
		overflow: auto;
	}
	
	.recommended-search{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.recommended-search-left{
		background-color: white;
		border-top-left-radius:15px;
		border-bottom-left-radius:15px;
	}
	
	.recommended-search-left>img{
		height: 40px;
		width: 40px;
		vertical-align: middle;
	}
	
	.recommended-search-center{
		width: 65%;
	}
	
	.recommended-search-center>input{
		background-color: white;
		height: 40px;
		width: 100%;
		border-width: 0px;
		padding: 0px;
		border-top-right-radius:15px;
		border-bottom-right-radius:15px;
	}
	
	.recommended-search-center>input:focus{
		outline: none;
	}
	
	.recommended-search-right{
		margin-left: 20px;
	}
	
	.recommended-search-right>img{
		height: 40px;
		width: 40px;
		vertical-align: middle;
	}
	
	.recommended-dna-top{
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 15px;
		margin-top:30px;
	}
	
	.recommended-dna-top-left>img:first-of-type {
		height: 40px;
		width: 40px;
		vertical-align: middle;
		border-radius: 30px;
	}
	
	.recommended-dna-top-left>img:last-of-type {
		margin-left: 15px;
		height: 35px;
		width: 35px;
		vertical-align: middle;
	}
	
	.recommended-top-left>span:first-of-type {
		font-size:20px;
	}
	
	.recommended-dna-center{
		height: 200px;
		width: 100%; /* 容器宽度 */
		white-space: nowrap;
		overflow-x: auto; /* 横向滚动条 */
		overflow-y: hidden;
		scrollbar-width: none;
		margin-top: 15px;
	}
	
	.recommended-dna-center>div{
		display: inline-block;
		margin-left: 15px;
		height: 210px;
		width: 150px;
	}
	
	.recommended-dna-center>div:first-child {
		width: 200px;
	}
	
	.recommended-dna-center>div>div{
		height: 150px;
		width: 150px;
	}
	
	#youLike>div{
		width: 100%;
		background-image: url('../../assets/baobao.jpg');
		background-size: cover;
		background-position: center;
		border-radius: 10px;
	}
	
	.recommended-dna-center>div>div>img{
		height: 150px;
		width: 150px;
		border-radius: 10px;
	}
	
	.listening{
		margin-top:20px;
		height: 300px;
		width: 100%;
	}
	
	.listening-top{
		height: 25px;
		margin-left: 15%;
		margin-right: 15%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.listening-content>div{
		width: 100%;
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.songimg{
		margin-top: 10px;
	}
	
	.songimg>img{
		height: 70px;
		width: 70px;
	}
	
	.songContent{
		height: 90px;
		width: 250px;
		overflow: hidden;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		
		text-align: left;
		 
	}
	
	.songContent>p{
		margin: 0px;
	}
	
	.songContent>p:first-child{
		margin-top: 13px;
	}
	
	.songContent>p:last-child{
		font-size: 18px;
		color:rgb(119, 119, 119);
	}
	
	.giveALike>img{
		width: 30px;
		height: 30px;
	}
	
	.player{
		position: fixed;
		bottom: 10%;
	}
</style>