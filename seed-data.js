function addCustomers(){
	customers.forEach(
		function(c){
			db.crm.save(c);
		}
	);
}


function addOrderHistory(){
	for (i=0;i<17;i++){
		var p = getRandomProduct();
		var c = customers[ Math.floor(Math.random()*customers.length)];
		if(!c.oh) {c.oh=[];}
		c.oh.push(p);
		db.crm.save(c);
	}
}

function getRandomProduct(){
	var idx = Math.floor(Math.random() * prodProto.length);
	return decorateProduct(prodProto[idx])
}

function decorateProduct(proto){
	proto.q = Math.floor(Math.random()*6) + 1;
	proto.pd =  Math.floor(proto.q * proto.p * 100)/100.0;
	proto.dt = new Date(2012,Math.floor((Math.random() * 12) + 1),Math.floor((Math.random() * 29) + 1));
	return proto;
}

function addScores(){
	db.scores.save({_id:"silver", score:17, house:'A'});
	db.scores.save({_id:"bronze", score:22, house:'B'});
	db.scores.save({_id:"jade",   score:14, house:'A'});
	db.scores.save({_id:"teal",   score:27, house:'A'});
	db.scores.save({_id:"green",  score:10, house:'B'});
	db.scores.save({_id:"black",  score:29, house:'B'});
}

var customers = [
	{_id:1, n:"Lucy", g:"female", ch:["phone","email"]},
	{_id:2, n:"Bob",  g:"male",   ch:["web","email"]},
	{_id:3, n:"Dee",  g:"female", ch:["phone"]},
	{_id:4, n:"Sid",  g:"male",   ch:["fax","web"]}];

var prodProto= [
	 {d:"tent",sku:"k2",c:["camping"],p:179.0},
	 {d:"bike",sku:"b4",c:["cycling"],p:643.0},
	 {d:"helmet",sku:"t12",c:["cycling"], p:27.5},
	 {d:"stove",sku:"f89",c:["camping"], p: 65.75},
	 {d:"knife",sku:"k40",c:["hiking","camping"], p:17.0},
	 {d:"rope",sku:"r32",c:["camping","climbing"],p:118.0},
	 {d:"hydration pack",sku:"c00",c:["camping","climbing","cycling"],p:35.25}];


