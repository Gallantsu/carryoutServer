import Mock from 'mockjs'

/* 模拟数据，菜单的详细信息*/

const foodLists = [
	{
		id:'000000001',
		src:"p.png",
		name:"香菇滑鸡",
		price:27,
		discount:5,
		discountMsg:"积分可抵扣5元",
	 	inventory:1000,
	 	sales:50,
	 	carriage:0,
	 	estimate:{
	 		hasPic:3,
	 		negative:0,
	 		medium:3,
	 		positive:20
	 	},
	 	description:"排毒排便－香蕉牛奶汁<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁",
	 	viewTimes:229,
	 	brieflyIntro:"五种果汁喝出美丽",
	 	introduce:"每个季节都有不同的时令水果，尤其是在夏季堪比水果盛宴。有的懒人懒得吃水果就会靠果汁来补充营养，你知道自己需要补充什么营养素吗？吐血推荐5款让你喝出健康的果汁。<br/>排毒排便－香蕉牛奶汁。<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁"
	},
	{
		id:'000000002',
		src:"p1.png",
		name:"情人杯",
		price:13,
		discount:5,
		discountMsg:"积分可抵扣5元",
	 	inventory:1000,
 		sales:46,
	 	carriage:0,
	 	estimate:{
	 		hasPic:3,
	 		negative:0,
	 		medium:3,
	 		positive:20
	 	},
	 	description:"排毒排便－香蕉牛奶汁<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁",
 		viewTimes:85,
	 	brieflyIntro:"五种果汁喝出美丽",
	 	introduce:"每个季节都有不同的时令水果，尤其是在夏季堪比水果盛宴。有的懒人懒得吃水果就会靠果汁来补充营养，你知道自己需要补充什么营养素吗？吐血推荐5款让你喝出健康的果汁。<br/>排毒排便－香蕉牛奶汁。<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁"
	},{
		id:'000000003',
		src:"p2.png",
		name:"卤香滑鸡",
		price:24,
		discount:5,
		discountMsg:"积分可抵扣5元",
	 	inventory:1000,
 		sales:20,
	 	carriage:0,
	 	estimate:{
	 		hasPic:3,
	 		negative:0,
	 		medium:3,
	 		positive:20
	 	},
	 	description:"排毒排便－香蕉牛奶汁<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁",
 		viewTimes:36,
	 	brieflyIntro:"五种果汁喝出美丽",
	 	introduce:"每个季节都有不同的时令水果，尤其是在夏季堪比水果盛宴。有的懒人懒得吃水果就会靠果汁来补充营养，你知道自己需要补充什么营养素吗？吐血推荐5款让你喝出健康的果汁。<br/>排毒排便－香蕉牛奶汁。<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁"
	},{
		id:'000000004',
		src:"p3.png",
		name:"酷炫绵绵球",
		price:10,
		discount:5,
		discountMsg:"积分可抵扣5元",
	 	inventory:1000,
 		sales:7,
	 	carriage:0,
	 	estimate:{
	 		hasPic:3,
	 		negative:0,
	 		medium:3,
	 		positive:20
	 	},
	 	description:"排毒排便－香蕉牛奶汁<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁",
 		viewTimes:527,
	 	brieflyIntro:"五种果汁喝出美丽",
	 	introduce:"每个季节都有不同的时令水果，尤其是在夏季堪比水果盛宴。有的懒人懒得吃水果就会靠果汁来补充营养，你知道自己需要补充什么营养素吗？吐血推荐5款让你喝出健康的果汁。<br/>排毒排便－香蕉牛奶汁。<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁"
	},{
		id:'000000005',
		src:"p4.png",
		name:"烤羊肉",
		price:70,
		discount:5,
		discountMsg:"积分可抵扣5元",
	 	inventory:1000,
 		sales:3,
	 	carriage:0,
	 	estimate:{
	 		hasPic:3,
	 		negative:0,
	 		medium:3,
	 		positive:20
	 	},
	 	description:"排毒排便－香蕉牛奶汁<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁",
 		viewTimes:365,
	 	brieflyIntro:"五种果汁喝出美丽",
	 	introduce:"每个季节都有不同的时令水果，尤其是在夏季堪比水果盛宴。有的懒人懒得吃水果就会靠果汁来补充营养，你知道自己需要补充什么营养素吗？吐血推荐5款让你喝出健康的果汁。<br/>排毒排便－香蕉牛奶汁。<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁"
	},{
		id:'000000006',
		src:"p5.png",
		name:"南方大餐",
		price:500,
		discount:5,
		discountMsg:"积分可抵扣5元",
	 	inventory:1000,
 		sales:5,
	 	carriage:0,
	 	estimate:{
	 		hasPic:3,
	 		negative:0,
	 		medium:3,
	 		positive:20
	 	},
	 	description:"排毒排便－香蕉牛奶汁<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁",
 		viewTimes:45,
	 	brieflyIntro:"五种果汁喝出美丽",
	 	introduce:"每个季节都有不同的时令水果，尤其是在夏季堪比水果盛宴。有的懒人懒得吃水果就会靠果汁来补充营养，你知道自己需要补充什么营养素吗？吐血推荐5款让你喝出健康的果汁。<br/>排毒排便－香蕉牛奶汁。<br/>适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！<br/>止咳防晕－芒果汁<br/>退火利尿－椰子汁<br/>不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！<br/>水果之王－奇异果汁"
	}
]

const userInfos = [
	{
		aliasName:"低调的大侠",
		phone:15882459747,
		password:"12345678",
		receivedAddr:[
			{
				name:"王东",
				phoneNum:"15882459747",
				address:"河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号"
			},
			{
				name:"王东",
				phoneNum:"15882459747",
				address:"河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号"
			},
			{
				name:"王东",
				phoneNum:"15882459747",
				address:"河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号"
			},
			{
				name:"王东",
				phoneNum:"15882459747",
				address:"河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号"
			}
		],
		orders:[
			{
				serialNum:"150916517682", 
				id:"000000006",
				num:2,
				state:1
			},
			{
				serialNum:"150916717689", 
				id:"000000005",
				num:1,
				state:0
			}
		]
	},
	{
		aliasName:"翰懂得分",
		phone:15881176974,
		password:"12345678",
		receivedAddr:[
			{
				name:"王东",
				phoneNum:"15882459747",
				address:"河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号"
			},
			{
				name:"王东",
				phoneNum:"15882459747",
				address:"河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号"
			},
			{
				name:"王东",
				phoneNum:"15882459747",
				address:"河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号"
			},
			{
				name:"王东",
				phoneNum:"15882459747",
				address:"河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号"
			}
		],
		orders:[
			{
				serialNum:"150916517682", 
				id:"000000006",
				num:2,
				state:1
			},
			{
				serialNum:"150916717689", 
				id:"000000005",
				num:1,
				state:0
			}
		]
	}
]

//home页面的简单概要
const productionObj = () => {
	let lists = [];
	for(let i = 0; i < foodLists.length; i++){
		lists.push({
			id:foodLists[i].id,
			src:foodLists[i].src,
			name:foodLists[i].name,
			price:foodLists[i].price
		})
	}
	return lists;
}

Mock.mock('/getHomeLists', 'post', productionObj)

//搜索数据模拟
const getSearchLists = (options) => {
	let data = JSON.parse(options.body);
	let keyWord = data.searchTxt;
	let keyWordAry = keyWord.split("");
	let lists = []
	for(let i = 0; i < foodLists.length; i++){
		for(let j = 0; j < keyWordAry.length; j++){
			if(foodLists[i].name.indexOf(keyWord[j])!=-1){
				lists.push({
					id:foodLists[i].id,
					src:foodLists[i].src,
					name:foodLists[i].name,
					price:foodLists[i].price,
					sales:foodLists[i].sales
				});
				break;
			}
		}
	}

	return lists;
}

Mock.mock('/getSearchLists', 'post', getSearchLists);

//单个数据接口
const getListById = (options) => {
	let data = JSON.parse(options.body);
	let obj = {};
	for(let [key,value] of foodLists.entries()){
		if(value.id == data.id){
			obj = value;
		}
	}
	return obj;
}

Mock.mock('/getListById', 'post', getListById);

//获取各种食品的评价
const getSpeakIntros = (options) => {
	let intros = [];
	for(let [key,value] of foodLists.entries()){
		intros.push({
			id:value.id,
			src:value.src,
			name:value.name,
			viewTimes:value.viewTimes,
			introduce:value.introduce,
		})
	}
	return intros;
}

Mock.mock('/getSpeakIntros', 'post', getSpeakIntros);

//通过id获取功效的详细信息

const getIntroDetail = (options) => {
	let data = JSON.parse(options.body);
	let obj = {};
	for(let [key,value] of foodLists.entries()){
		if(value.id == data.id){
			obj = value;
		}
	}
	return obj;
}

Mock.mock('/getIntroDetail', 'post', getIntroDetail);

let taken = 0;
//根据电话和taken验证用户
const checkLogin = (options)=>{
	let data = JSON.parse(options.body);	
	let users = userInfos;
	for(let i = 0; i < users.length; i++){
		if(users[i].phone == data.phone&&taken == data.taken){
			return {msg:true};
		}
	}
	return {msg:false};
}

Mock.mock('/checkLogin', 'post', checkLogin);

//登录
const login = (options)=>{
	let data = JSON.parse(options.body);	
	let users = userInfos;
	for(let i = 0; i < users.length; i++){
		if(users[i].phone == data.phoneNum && users[i].password == data.password){
			taken = Mock.Random.natural(1000000,9999999);
			return {msg:"success",data:{
				user:users[i].aliasName,
				phone:users[i].phone,
				taken:taken
			}};
		}
	}
	return {msg:"fail"};
}

Mock.mock('/login', 'post', login);