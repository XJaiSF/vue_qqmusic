//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import qqmusicHome from "@/pages/qqmusic/qqmusicHome";
import liveBroHome from "@/pages/livebro/liveBroHome";
import radarHome from "@/pages/radar/radarHome";
import comHome from "@/pages/community/comHome";
import myHome from "@/pages/my/myHome";
import recommended from "@/pages/qqmusic/recommended";
import listenBook from "@/pages/qqmusic/listenBook";
import rakukan from "@/pages/qqmusic/rakukan";
import performance from "@/pages/qqmusic/performance";
import member from "@/pages/qqmusic/member";
import helpSleep from "@/pages/qqmusic/helpSleep";
import folkSong from "@/pages/qqmusic/folkSong";
import classical from "@/pages/qqmusic/classical";

//创建并默认暴露一个路由器
export default new VueRouter({
   routes:[
	   {
		   path:'',
		   redirect: '/qqmusicHome'
	   },
       {
           path:'/qqmusicHome',
           component: qqmusicHome,
		   children:[
			   {
				   path:'',
				   component: recommended
			   },
			   {
				   path:'/recommended',
				   component: recommended
			   },
			   {
				   path:'/listenBook',
				   component: listenBook
			   },
			   {
				   path:'/rakukan',
				   component: rakukan
			   },
			   {
				   path:'/performance',
				   component: performance
			   },
			   {
				   path:'/member',
				   component: member
			   },
			   {
				   path:'/helpSleep',
				   component: helpSleep
			   },
			   {
				   path:'/folkSong',
				   component: folkSong
			   },
			   {
				   path:'/classical',
				   component: classical
			   }
		   ]
       },
	   {
	       path:'/liveBroHome',
	       component: liveBroHome
	   },
	   {
	       path:'/radarHome',
	       component: radarHome
	   },
	   {
	       path:'/comHome',
	       component: comHome
	   },
	   {
	       path:'/myHome',
	       component: myHome
	   },
	  
   ]
});

