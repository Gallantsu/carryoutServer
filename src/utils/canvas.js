
const loadingCanvas = {
	install(Vue){
		Vue.directive("canvas",{
			/*inserted(element,binding){
				start(element);//刚装载的时候元素大小为O
			},*/
			update(el,binding){
				if(binding.value != needAnimate){
					needAnimate = binding.value;
					if(!canvas){
						start(el);
					}
					draw();
				}
			}
		})
	}
}

let ctx;
let canvasWidth;
let canvasHeight;
let needAnimate = false;
let perRad = 0;
let canvas;

const init = (el) => {
	canvas = document.createElement('canvas');
	if(!canvas.getContext){
		return;
	}
	ctx = canvas.getContext('2d');
  canvas.style.backgroundColor= "rgba(0,0,0,0.3)";
	canvasWidth = el.offsetWidth/3;
	canvasHeight = el.offsetWidth/3;
	canvas.setAttribute('width', canvasWidth);
  canvas.setAttribute('height', canvasHeight);
  canvas.style.marginTop = "30%";
 	canvas.style.borderRadius = "5%";
 	canvas.style.boxShadow = "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)"
  el.appendChild(canvas);
}

//绘制以圆为中心的小圆
const draw = () => {
  ctx.translate(canvasWidth/2,canvasHeight/2);
  let bigRadius = 9;
  let smallRadius = 4;
  if(canvasWidth < 130){
			bigRadius = 6;
			smallRadius = 3;
  }
	const r = canvasHeight/4; //圆的半径定为高度的1/4;
  for(let i = 0; i < 12; i++){
  	let x = r*Math.sin(Math.PI/6*i - perRad);
  	let y = r*Math.cos(Math.PI/6*i - perRad);
		ctx.fillStyle = "#fff";
		ctx.beginPath();
		ctx.arc(x,y,bigRadius,0,2*Math.PI);
		ctx.fill();
 		ctx.closePath();
		if(bigRadius>smallRadius){
			bigRadius--;
		}
  }
  perRad += (Math.PI/6);
	if(perRad >= 2*Math.PI){
		perRad = 0;
	}
	setTimeout(()=>{
		ctx.translate(-canvasWidth/2,-canvasHeight/2);
	 	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	 	if(needAnimate){
			draw();
		}
  },50);
}

const start = el => { 
	init(el);
}

export default loadingCanvas