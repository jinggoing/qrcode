!function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(2)},function(t,e){t.exports=function(t){for(var e,o=Array.prototype.slice.call(arguments,1),r=0;e=o[r];r++)if(e)for(var i in e)t[i]=e[i];return t}},function(t,e,o){"use strict";t.exports=o(3)},function(t,e,o){"use strict";var r=o(1),i=o(4),n=[],s=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},u=function(t){"string"==typeof t&&(t={text:t}),this.options=r({},{text:"",render:"",width:256,height:256,correctLevel:3,background:"#ffffff",foreground:"#000000",image:"",imageWidth:30,imageHeight:30},t);for(var e=null,o=0,s=n.length;s>o;o++)if(n[o].text==this.options.text&&n[o].text.correctLevel==this.options.correctLevel){e=n[o].obj;break}if(o==s&&(e=new i(this.options.text,this.options.correctLevel),n.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:e})),this.options.render)switch(this.options.render){case"canvas":return this.createCanvas(e);case"table":return this.createTable(e);case"svg":return this.createSVG(e);default:return this.createDefault(e)}return this.createDefault(e)};r(u.prototype,{createDefault:function(t){var e=document.createElement("canvas");return e.getContext?this.createCanvas(t):(SVG_NS="http://www.w3.org/2000/svg",document.createElementNS&&document.createElementNS(SVG_NS,"svg").createSVGRect?this.createSVG(t):this.createTable(t))},createCanvas:function(t){var e=this,o=document.createElement("canvas");o.width=e.options.width,o.height=e.options.height;for(var r=o.getContext("2d"),i=t.getModuleCount(),n=function(t,e){var o=new Image;o.src=t,o.onload=function(){e(this),o.onload=null}},u=(e.options.width/i).toPrecision(4),h=(e.options.height/i).toPrecision(4),a=0;i>a;a++)for(var l=0;i>l;l++){var g=Math.ceil((l+1)*u)-Math.floor(l*u),d=Math.ceil((a+1)*u)-Math.floor(a*u),c=s({row:a,col:l,count:i,options:e.options});r.fillStyle=t.modules[a][l]?c:e.options.background,r.fillRect(Math.round(l*u),Math.round(a*h),g,d)}return e.options.image&&n(e.options.image,function(t){var o=((e.options.width-e.options.imageWidth)/2).toFixed(2),i=((e.options.height-e.options.imageHeight)/2).toFixed(2);r.drawImage(t,o,i,e.options.imageWidth,e.options.imageHeight)}),o},createTable:function(t){var e=t.getModuleCount(),o=Math.floor(this.options.width/e),r=Math.floor(this.options.height/e);0>=o&&(o=80>e?2:1),0>=r&&(r=80>e?2:1);var i=[];i.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color: '+this.options.background+';">');for(var n='<td style="border:0px; margin:0px; padding:0px; width:'+o+"px; background-color: "+this.options.background+'"></td>',u=0;e>u;u++){i.push('<tr style="border:0px; margin:0px; padding:0px; height: '+r+'px">');for(var h=0;e>h;h++){var a=s({row:u,col:h,count:e,options:this.options});i.push(t.modules[u][h]?'<td style="border:0px; margin:0px; padding:0px; width:'+o+"px; background-color: "+a+'"></td>':n)}i.push("</tr>")}if(i.push("</table>"),this.options.image){var l=o*e,g=r*e,d=((l-this.options.imageWidth)/2).toFixed(2),c=((g-this.options.imageHeight)/2).toFixed(2);i.unshift('<div style="position: relative;width:'+l+"px; height: "+g+'px;">'),i.push('<img src="'+this.options.image+'" width="'+this.options.imageWidth+'" height="'+this.options.imageHeight+'" style="position:absolute;left:'+d+"px; top:"+c+'px;">'),i.push("</div>")}var f=document.createElement("span");return f.innerHTML=i.join(""),f.firstChild},createSVG:function(t){var e=t.getModuleCount(),o=this.options.height/this.options.width,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width",this.options.width),r.setAttribute("height",this.options.height),r.setAttribute("viewbox","0 0 "+10*e+" "+10*e*o);for(var i=0;e>i;i++)for(var n=0;e>n;n++){var u=10*n,h=10*i*o,a=10*(n+1),l=10*(i+1)*o,g=s({row:i,col:n,count:e,options:this.options}),d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d","M "+u+","+h+" L "+a+","+h+" L "+a+","+l+" L "+u+","+l+" Z"),d.setAttribute("stroke-width","0.5"),t.modules[i][n]?(d.setAttribute("fill",g),d.setAttribute("stroke",g)):(d.setAttribute("fill",this.options.background),d.setAttribute("stroke",this.options.background)),r.appendChild(d)}if(this.options.image){var c=document.createElementNS("http://www.w3.org/2000/svg","image");c.setAttributeNS("http://www.w3.org/1999/xlink","href",this.options.image),c.setAttribute("x",((this.options.width-this.options.imageWidth)/2).toFixed(2)),c.setAttribute("y",((this.options.height-this.options.imageHeight)/2).toFixed(2)),c.setAttribute("width",this.options.imageWidth),c.setAttribute("height",this.options.imageHeight),r.appendChild(c)}return r}}),t.exports=u},function(t,e){"use strict";function o(t){return 128>t?[t]:2048>t?(c0=192+(t>>6),c1=128+(63&t),[c0,c1]):(c0=224+(t>>12),c1=128+(t>>6&63),c2=128+(63&t),[c0,c1,c2])}function r(t){for(var e=[],r=0;r<t.length;r++)for(var i=t.charCodeAt(r),n=o(i),s=0;s<n.length;s++)e.push(n[s]);return e}function i(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=r(t),this.make()}function n(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var o=0;o<t.length&&0==t[o];)o++;this.num=new Array(t.length-o+e);for(var r=0;r<t.length-o;r++)this.num[r]=t[r+o]}function s(){this.buffer=new Array,this.length=0}i.prototype={constructor:i,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var o=-1;7>=o;o++)if(!(-1>=t+o||this.moduleCount<=t+o))for(var r=-1;7>=r;r++)-1>=e+r||this.moduleCount<=e+r||(o>=0&&6>=o&&(0==r||6==r)||r>=0&&6>=r&&(0==o||6==o)||o>=2&&4>=o&&r>=2&&4>=r?this.modules[t+o][e+r]=!0:this.modules[t+o][e+r]=!1)},createQrcode:function(){for(var t=0,e=0,o=null,r=0;8>r;r++){this.makeImpl(r);var i=a.getLostPoint(this);(0==r||t>i)&&(t=i,e=r,o=this.modules)}this.modules=o,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var r=t[e],i=t[o];if(null==this.modules[r][i])for(var n=-2;2>=n;n++)for(var s=-2;2>=s;s++)-2==n||2==n||-2==s||2==s||0==n&&0==s?this.modules[r+n][i+s]=!0:this.modules[r+n][i+s]=!1}},setupTypeNumber:function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),o=0;18>o;o++){var r=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=r,this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=r}},setupTypeInfo:function(t,e){for(var o=u[this.errorCorrectLevel]<<3|e,r=a.getBCHTypeInfo(o),i=0;15>i;i++){var n=!t&&1==(r>>i&1);6>i?this.modules[i][8]=n:8>i?this.modules[i+1][8]=n:this.modules[this.moduleCount-15+i][8]=n;var n=!t&&1==(r>>i&1);8>i?this.modules[8][this.moduleCount-i-1]=n:9>i?this.modules[8][15-i-1+1]=n:this.modules[8][15-i-1]=n}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new s,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var o=0,r=this.utf8bytes.length;r>o;o++)t.put(this.utf8bytes[o],8);for(t.length+4<=8*this.totalDataCount&&t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;;){if(t.length>=8*this.totalDataCount)break;if(t.put(i.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(i.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,o=0,r=0,i=this.rsBlock.length/3,s=new Array,u=0;i>u;u++)for(var h=this.rsBlock[3*u+0],l=this.rsBlock[3*u+1],g=this.rsBlock[3*u+2],d=0;h>d;d++)s.push([g,l]);for(var c=new Array(s.length),f=new Array(s.length),p=0;p<s.length;p++){var m=s[p][0],v=s[p][1]-m;o=Math.max(o,m),r=Math.max(r,v),c[p]=new Array(m);for(var u=0;u<c[p].length;u++)c[p][u]=255&t.buffer[u+e];e+=m;var w=a.getErrorCorrectPolynomial(v),b=new n(c[p],w.getLength()-1),A=b.mod(w);f[p]=new Array(w.getLength()-1);for(var u=0;u<f[p].length;u++){var T=u+A.getLength()-f[p].length;f[p][u]=T>=0?A.get(T):0}}for(var y=new Array(this.totalDataCount),C=0,u=0;o>u;u++)for(var p=0;p<s.length;p++)u<c[p].length&&(y[C++]=c[p][u]);for(var u=0;r>u;u++)for(var p=0;p<s.length;p++)u<f[p].length&&(y[C++]=f[p][u]);return y},mapData:function(t,e){for(var o=-1,r=this.moduleCount-1,i=7,n=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var u=0;2>u;u++)if(null==this.modules[r][s-u]){var h=!1;n<t.length&&(h=1==(t[n]>>>i&1));var l=a.getMask(e,r,s-u);l&&(h=!h),this.modules[r][s-u]=h,i--,-1==i&&(n++,i=7)}if(r+=o,0>r||this.moduleCount<=r){r-=o,o=-o;break}}}},i.PAD0=236,i.PAD1=17;for(var u=[1,0,3,2],h={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;a.getBCHDigit(e)-a.getBCHDigit(a.G15)>=0;)e^=a.G15<<a.getBCHDigit(e)-a.getBCHDigit(a.G15);return(t<<10|e)^a.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;a.getBCHDigit(e)-a.getBCHDigit(a.G18)>=0;)e^=a.G18<<a.getBCHDigit(e)-a.getBCHDigit(a.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return a.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case h.PATTERN000:return(e+o)%2==0;case h.PATTERN001:return e%2==0;case h.PATTERN010:return o%3==0;case h.PATTERN011:return(e+o)%3==0;case h.PATTERN100:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case h.PATTERN101:return e*o%2+e*o%3==0;case h.PATTERN110:return(e*o%2+e*o%3)%2==0;case h.PATTERN111:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new n([1],0),o=0;t>o;o++)e=e.multiply(new n([1,l.gexp(o)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,r=0,i=0;e>i;i++)for(var n=0,s=t.modules[i][0],u=0;e>u;u++){var h=t.modules[i][u];if(e-6>u&&h&&!t.modules[i][u+1]&&t.modules[i][u+2]&&t.modules[i][u+3]&&t.modules[i][u+4]&&!t.modules[i][u+5]&&t.modules[i][u+6]&&(e-10>u?t.modules[i][u+7]&&t.modules[i][u+8]&&t.modules[i][u+9]&&t.modules[i][u+10]&&(o+=40):u>3&&t.modules[i][u-1]&&t.modules[i][u-2]&&t.modules[i][u-3]&&t.modules[i][u-4]&&(o+=40)),e-1>i&&e-1>u){var a=0;h&&a++,t.modules[i+1][u]&&a++,t.modules[i][u+1]&&a++,t.modules[i+1][u+1]&&a++,(0==a||4==a)&&(o+=3)}s^h?n++:(s=h,n>=5&&(o+=3+n-5),n=1),h&&r++}for(var u=0;e>u;u++)for(var n=0,s=t.modules[0][u],i=0;e>i;i++){var h=t.modules[i][u];e-6>i&&h&&!t.modules[i+1][u]&&t.modules[i+2][u]&&t.modules[i+3][u]&&t.modules[i+4][u]&&!t.modules[i+5][u]&&t.modules[i+6][u]&&(e-10>i?t.modules[i+7][u]&&t.modules[i+8][u]&&t.modules[i+9][u]&&t.modules[i+10][u]&&(o+=40):i>3&&t.modules[i-1][u]&&t.modules[i-2][u]&&t.modules[i-3][u]&&t.modules[i-4][u]&&(o+=40)),s^h?n++:(s=h,n>=5&&(o+=3+n-5),n=1)}var l=Math.abs(100*r/e/e-50)/5;return o+=10*l}},l={glog:function(t){if(1>t)throw new Error("glog("+t+")");return l.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return l.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;8>g;g++)l.EXP_TABLE[g]=1<<g;for(var g=8;256>g;g++)l.EXP_TABLE[g]=l.EXP_TABLE[g-4]^l.EXP_TABLE[g-5]^l.EXP_TABLE[g-6]^l.EXP_TABLE[g-8];for(var g=0;255>g;g++)l.LOG_TABLE[l.EXP_TABLE[g]]=g;n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var r=0;r<t.getLength();r++)e[o+r]^=l.gexp(l.glog(this.get(o))+l.glog(t.get(r)));return new n(e,0)},mod:function(t){var e=this.getLength(),o=t.getLength();if(0>e-o)return this;for(var r=new Array(e),i=0;e>i;i++)r[i]=this.get(i);for(;r.length>=o;){for(var s=l.glog(r[0])-l.glog(t.get(0)),i=0;i<t.getLength();i++)r[i]^=l.gexp(l.glog(t.get(i))+s);for(;0==r[0];)r.shift()}return new n(r,0)}};var d=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];i.prototype.getRightType=function(){for(var t=1;41>t;t++){var e=d[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var o=e.length/3,r=0,i=0;o>i;i++){var n=e[3*i+0],s=e[3*i+2];r+=s*n}var u=t>9?2:1;if(this.utf8bytes.length+u<r||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=r;break}}},s.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var o=0;e>o;o++)this.putBit(t>>>e-o-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=i}]);