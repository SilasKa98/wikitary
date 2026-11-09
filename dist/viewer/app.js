/*!
Wikitary, MIT License. This file includes the following software:

========================================================================
three.js 0.187.0 (MIT)
========================================================================

The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

========================================================================
marked 18.1.3 (MIT)
========================================================================

# License information

## Contribution License Agreement

If you contribute code to this project, you are implicitly allowing your code
to be distributed under the MIT license. You are also implicitly verifying that
all code is your original work. `</legalese>`

## Marked

Copyright (c) 2018+, MarkedJS (https://github.com/markedjs/)
Copyright (c) 2011-2018, Christopher Jeffrey (https://github.com/chjj/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Markdown

Copyright © 2004, John Gruber
http://daringfireball.net/
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name “Markdown” nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

This software is provided by the copyright holders and contributors “as is” and any express or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall the copyright owner or contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.

*/
var Y0=Object.defineProperty;var Qu=n=>{throw TypeError(n)};var Z0=(n,e,t)=>e in n?Y0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var at=(n,e,t)=>Z0(n,typeof e!="symbol"?e+"":e,t),K0=(n,e,t)=>e.has(n)||Qu("Cannot "+t);var ed=(n,e,t)=>e.has(n)?Qu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var ro=(n,e,t)=>(K0(n,e,"access private method"),t);var Dd=0,wh=1,Nd=2;var ms=1,Fd=2,pr=3,Yn=0,Tt=1,It=2,_n=0,fr=1,jt=2,Sh=3,Mh=4,wn=5;var ni=100,Od=101,Ud=102,Bd=103,zd=104,Hd=200,zi=201,Vd=202,Gd=203,Th=204,gs=205,Wd=206,$d=207,qd=208,Xd=209,Yd=210,Zd=211,Kd=212,Jd=213,jd=214,Do=0,No=1,Fo=2,er=3,Oo=4,Uo=5,Bo=6,zo=7,Eh=0,Qd=1,ep=2,Ri=0,va=1,ya=2,ba=3,xs=4,_a=5,wa=6,Sa=7;var Ah=300,vs=301,mr=302,dl=303,pl=304,tr=1e3,Xi=1001,Ho=1002,wt=1003,tp=1004;var Ma=1005;var St=1006,fl=1007;var Sn=1008;var si=1009,Rh=1010,Ch=1011,gr=1012,ml=1013,Hi=1014,Ci=1015,yt=1016,gl=1017,xl=1018,ys=1020,Ph=35902,kh=35899,Ih=1021,Lh=1022,ri=1023,mn=1026,Mn=1027,xr=1028,vl=1029,Zn=1030,yl=1031;var bl=1033,Ta=33776,Ea=33777,Aa=33778,Ra=33779,_l=35840,wl=35841,Sl=35842,Ml=35843,Tl=36196,El=37492,Al=37496,Rl=37488,Cl=37489,Ca=37490,Pl=37491,kl=37808,Il=37809,Ll=37810,Dl=37811,Nl=37812,Fl=37813,Ol=37814,Ul=37815,Bl=37816,zl=37817,Hl=37818,Vl=37819,Gl=37820,Wl=37821,$l=36492,ql=36494,Xl=36495,Yl=36283,Zl=36284,Pa=36285,Kl=36286;var Zr=2300,Vo=2301,Io=2302,dh=2303,ph=2400,fh=2401,mh=2402;var ip=3200;var Jl=0,np=1,Tn="",pi="srgb",Kr="srgb-linear",Jr="linear",tt="srgb";var Lo=7680;var sp=519,rp=512,ap=513,op=514,Dh=515,lp=516,cp=517,Nh=518,Fh=519,hp=35044,vr=35048;var Oh="300 es",Ti=2e3,ir=2001;function J0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function j0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function up(){let n=jr("canvas");return n.style.display="block",n}var td={},nr=null;function Uh(...n){let e="THREE."+n.shift();nr?nr("log",e,...n):console.log(e,...n)}function dp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ce(...n){n=dp(n);let e="THREE."+n.shift();if(nr)nr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Le(...n){n=dp(n);let e="THREE."+n.shift();if(nr)nr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Yr(...n){let e=n.join(" ");e in td||(td[e]=!0,Ce(...n))}function pp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var fp={[Do]:Do,[Fo]:Bo,[Oo]:Oo,[er]:Uo,[No]:No,[Bo]:Fo,[zo]:zo,[Uo]:er},Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Gc=Math.PI/180,Go=180/Math.PI;function ka(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Q0(n,e){return(n%e+e)%e}function Wc(n,e,t){return(1-t)*n+t*e}function mp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function em(n,e){if(e.constructor===Float32Array)return n;let t=Bh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function tm(n,e){if(e.constructor===Float32Array)return n;let t=Bh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Wh=class Wh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wh.prototype.isVector2=!0;var Me=Wh,Zi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(p!==x||l!==u||c!==d||h!==m){let f=l*u+c*d+h*m+p*x;f<0&&(u=-u,d=-d,m=-m,x=-x,f=-f);let g=1-o;if(f<.9995){let v=Math.acos(f),w=Math.sin(v);g=Math.sin(g*v)/w,o=Math.sin(o*v)/w,l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,p=p*g+x*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+m*o,p=p*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=v,c*=v,h*=v,p*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*p+l*d-c*u,e[t+1]=l*m+h*u+c*p-o*d,e[t+2]=c*m+h*d+o*u-l*p,e[t+3]=h*m-o*p-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(r/2),u=l(i/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"YXZ":this._x=u*h*p+c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"ZXY":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p-u*d*m;break;case"ZYX":this._x=u*h*p-c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p+u*d*m;break;case"YZX":this._x=u*h*p+c*d*m,this._y=c*d*p+u*h*m,this._z=c*h*m-u*d*p,this._w=c*h*p-u*d*m;break;case"XZY":this._x=u*h*p-c*d*m,this._y=c*d*p-u*h*m,this._z=c*h*m+u*d*p,this._w=c*h*p+u*d*m;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$h=class $h{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(id.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),p=2*(r*i-a*t);return this.x=t+l*c+a*p-o*h,this.y=i+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$h.prototype.isVector3=!0;var k=$h,$c=new k,id=new Zi,qh=class qh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],m=i[8],x=s[0],f=s[3],g=s[6],v=s[1],w=s[4],_=s[7],M=s[2],S=s[5],y=s[8];return r[0]=a*x+o*v+l*M,r[3]=a*f+o*w+l*S,r[6]=a*g+o*_+l*y,r[1]=c*x+h*v+p*M,r[4]=c*f+h*w+p*S,r[7]=c*g+h*_+p*y,r[2]=u*x+d*v+m*M,r[5]=u*f+d*w+m*S,r[8]=u*g+d*_+m*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*p+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=p*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qc.makeScale(e,t)),this}rotate(e){return Yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qc.makeRotation(-e)),this}translate(e,t){return Yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qh.prototype.isMatrix3=!0;var Ne=qh,qc=new Ne,nd=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function im(){let n={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=fn(s.r),s.g=fn(s.g),s.b=fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Kr]:{primaries:e,whitePoint:i,transfer:Jr,toXYZ:nd,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:nd,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}var qe=im();function fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bs,Wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bs===void 0&&(Bs=jr("canvas")),Bs.width=e.width,Bs.height=e.height;let s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fn(t[i]/255)*255):t[i]=fn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nm=0,sr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xc(s[a].image)):r.push(Xc(s[a]))}else r=Xc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var sm=0,Yc=new k,ii=class n extends Yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Xi,s=Xi,r=St,a=Sn,o=ri,l=si,c=n.DEFAULT_ANISOTROPY,h=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=ka(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Ah;ii.DEFAULT_ANISOTROPY=1;var Xh=class Xh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],m=l[9],x=l[2],f=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-x)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+x)<.1&&Math.abs(m+f)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,_=(d+1)/2,M=(g+1)/2,S=(h+u)/4,y=(p+x)/4,b=(m+f)/4;return w>_&&w>M?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=y/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=b/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=y/r,s=b/r),this.set(i,s,r,t),this}let v=Math.sqrt((f-m)*(f-m)+(p-x)*(p-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(f-m)/v,this.y=(p-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;var gt=Xh,$o=class extends Yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ii({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new sr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mt=class extends $o{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qr=class extends ii{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rr=class extends ii{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ul=class ul{constructor(e,t,i,s,r,a,o,l,c,h,p,u,d,m,x,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,p,u,d,m,x,f)}set(e,t,i,s,r,a,o,l,c,h,p,u,d,m,x,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=p,g[14]=u,g[3]=d,g[7]=m,g[11]=x,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ul().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*p,m=o*h,x=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=d+m*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*p,m=c*h,x=c*p;t[0]=u+x*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*p,m=c*h,x=c*p;t[0]=u-x*o,t[4]=-a*p,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*p,m=o*h,x=o*p;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+x,t[1]=l*p,t[5]=x*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-u*p,t[8]=m*p+d,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*p+m,t[10]=u-x*p}else if(e.order==="XZY"){let u=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+x,t[5]=a*h,t[9]=d*p-m,t[2]=m*p-d,t[6]=o*h,t[10]=x*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rm,e,am)}lookAt(e,t,i){let s=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Fn.crossVectors(i,ui),Fn.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Fn.crossVectors(i,ui)),Fn.normalize(),ao.crossVectors(ui,Fn),s[0]=Fn.x,s[4]=ao.x,s[8]=ui.x,s[1]=Fn.y,s[5]=ao.y,s[9]=ui.y,s[2]=Fn.z,s[6]=ao.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],m=i[2],x=i[6],f=i[10],g=i[14],v=i[3],w=i[7],_=i[11],M=i[15],S=s[0],y=s[4],b=s[8],C=s[12],R=s[1],L=s[5],D=s[9],B=s[13],P=s[2],O=s[6],U=s[10],H=s[14],te=s[3],$=s[7],Z=s[11],ee=s[15];return r[0]=a*S+o*R+l*P+c*te,r[4]=a*y+o*L+l*O+c*$,r[8]=a*b+o*D+l*U+c*Z,r[12]=a*C+o*B+l*H+c*ee,r[1]=h*S+p*R+u*P+d*te,r[5]=h*y+p*L+u*O+d*$,r[9]=h*b+p*D+u*U+d*Z,r[13]=h*C+p*B+u*H+d*ee,r[2]=m*S+x*R+f*P+g*te,r[6]=m*y+x*L+f*O+g*$,r[10]=m*b+x*D+f*U+g*Z,r[14]=m*C+x*B+f*H+g*ee,r[3]=v*S+w*R+_*P+M*te,r[7]=v*y+w*L+_*O+M*$,r[11]=v*b+w*D+_*U+M*Z,r[15]=v*C+w*B+_*H+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],d=e[14],m=e[3],x=e[7],f=e[11],g=e[15],v=l*d-c*u,w=o*d-c*p,_=o*u-l*p,M=a*d-c*h,S=a*u-l*h,y=a*p-o*h;return t*(x*v-f*w+g*_)-i*(m*v-f*M+g*S)+s*(m*w-x*M+g*y)-r*(m*_-x*S+f*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],d=e[11],m=e[12],x=e[13],f=e[14],g=e[15],v=t*o-i*a,w=t*l-s*a,_=t*c-r*a,M=i*l-s*o,S=i*c-r*o,y=s*c-r*l,b=h*x-p*m,C=h*f-u*m,R=h*g-d*m,L=p*f-u*x,D=p*g-d*x,B=u*g-d*f,P=v*B-w*D+_*L+M*R-S*C+y*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return e[0]=(o*B-l*D+c*L)*O,e[1]=(s*D-i*B-r*L)*O,e[2]=(x*y-f*S+g*M)*O,e[3]=(u*S-p*y-d*M)*O,e[4]=(l*R-a*B-c*C)*O,e[5]=(t*B-s*R+r*C)*O,e[6]=(f*_-m*y-g*w)*O,e[7]=(h*y-u*_+d*w)*O,e[8]=(a*D-o*R+c*b)*O,e[9]=(i*R-t*D-r*b)*O,e[10]=(m*S-x*_+g*v)*O,e[11]=(p*_-h*S-d*v)*O,e[12]=(o*C-a*L-l*b)*O,e[13]=(t*L-i*C+s*b)*O,e[14]=(x*w-m*M-f*v)*O,e[15]=(h*M-p*w+u*v)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,p=o+o,u=r*c,d=r*h,m=r*p,x=a*h,f=a*p,g=o*p,v=l*c,w=l*h,_=l*p,M=i.x,S=i.y,y=i.z;return s[0]=(1-(x+g))*M,s[1]=(d+_)*M,s[2]=(m-w)*M,s[3]=0,s[4]=(d-_)*S,s[5]=(1-(u+g))*S,s[6]=(f+v)*S,s[7]=0,s[8]=(m+w)*y,s[9]=(f-v)*y,s[10]=(1-(u+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fi.copy(this);let c=1/a,h=1/o,p=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=p,Fi.elements[9]*=p,Fi.elements[10]*=p,t.setFromRotationMatrix(Fi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Ti,l=!1){let c=this.elements,h=2*r/(t-e),p=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Ti)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ir)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ti,l=!1){let c=this.elements,h=2/(t-e),p=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Ti)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ir)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ul.prototype.isMatrix4=!0;var Oe=ul,zs=new k,Fi=new Oe,rm=new k(0,0,0),am=new k(1,1,1),Fn=new k,ao=new k,ui=new k,rd=new Oe,ad=new Zi,gn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ad.setFromEuler(this),this.setFromQuaternion(ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},om=0,od=new k,Hs=new Zi,ln=new Oe,oo=new k,Hr=new k,lm=new k,cm=new Zi,ld=new k(1,0,0),cd=new k(0,1,0),hd=new k(0,0,1),ud={type:"added"},hm={type:"removed"},Vs={type:"childadded",child:null},Zc={type:"childremoved",child:null},Ct=class n extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new gn,i=new Zi,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ne}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oo.copy(e):oo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Hr,oo,this.up):ln.lookAt(oo,Hr,this.up),this.quaternion.setFromRotationMatrix(ln),s&&(ln.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(ln),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hm),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.DEFAULT_UP=new k(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bt=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},um={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,i),g=this._getHandJoint(c,x);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(um)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Kc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=qe.workingColorSpace){if(e=Q0(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Kc(a,r,e+1/3),this.g=Kc(a,r,e),this.b=Kc(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=pi){function i(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){let i=gp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return qe.workingToColorSpace(Xt.copy(this),e),Math.round(je(Xt.r*255,0,255))*65536+Math.round(je(Xt.g*255,0,255))*256+Math.round(je(Xt.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Xt.copy(this),t);let i=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=pi){qe.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,s=Xt.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(lo);let i=Wc(On.h,lo.h,t),s=Wc(On.s,lo.s,t),r=Wc(On.l,lo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new se;se.NAMES=gp;var xn=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Oi=new k,cn=new k,Jc=new k,hn=new k,Gs=new k,Ws=new k,dd=new k,jc=new k,Qc=new k,eh=new k,th=new gt,ih=new gt,nh=new gt,Hn=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Oi.subVectors(e,t),s.cross(Oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Oi.subVectors(s,t),cn.subVectors(i,t),Jc.subVectors(e,t);let a=Oi.dot(Oi),o=Oi.dot(cn),l=Oi.dot(Jc),c=cn.dot(cn),h=cn.dot(Jc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return th.setScalar(0),ih.setScalar(0),nh.setScalar(0),th.fromBufferAttribute(e,t),ih.fromBufferAttribute(e,i),nh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(th,r.x),a.addScaledVector(ih,r.y),a.addScaledVector(nh,r.z),a}static isFrontFacing(e,t,i,s){return Oi.subVectors(i,t),cn.subVectors(e,t),Oi.cross(cn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Oi.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Gs.subVectors(s,i),Ws.subVectors(r,i),jc.subVectors(e,i);let l=Gs.dot(jc),c=Ws.dot(jc);if(l<=0&&c<=0)return t.copy(i);Qc.subVectors(e,s);let h=Gs.dot(Qc),p=Ws.dot(Qc);if(h>=0&&p<=h)return t.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Gs,a);eh.subVectors(e,r);let d=Gs.dot(eh),m=Ws.dot(eh);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Ws,o);let f=h*m-d*p;if(f<=0&&p-h>=0&&d-m>=0)return dd.subVectors(r,s),o=(p-h)/(p-h+(d-m)),t.copy(s).addScaledVector(dd,o);let g=1/(f+x+u);return a=x*g,o=u*g,t.copy(i).addScaledVector(Gs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ki=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ui):Ui.fromBufferAttribute(r,a),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),ho.subVectors(this.max,Vr),$s.subVectors(e.a,Vr),qs.subVectors(e.b,Vr),Xs.subVectors(e.c,Vr),Un.subVectors(qs,$s),Bn.subVectors(Xs,qs),os.subVectors($s,Xs);let t=[0,-Un.z,Un.y,0,-Bn.z,Bn.y,0,-os.z,os.y,Un.z,0,-Un.x,Bn.z,0,-Bn.x,os.z,0,-os.x,-Un.y,Un.x,0,-Bn.y,Bn.x,0,-os.y,os.x,0];return!sh(t,$s,qs,Xs,ho)||(t=[1,0,0,0,1,0,0,0,1],!sh(t,$s,qs,Xs,ho))?!1:(uo.crossVectors(Un,Bn),t=[uo.x,uo.y,uo.z],sh(t,$s,qs,Xs,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},un=[new k,new k,new k,new k,new k,new k,new k,new k],Ui=new k,co=new Ki,$s=new k,qs=new k,Xs=new k,Un=new k,Bn=new k,os=new k,Vr=new k,ho=new k,uo=new k,ls=new k;function sh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ls.fromArray(n,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=i.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pn=dm();function dm(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function pm(n){Math.abs(n)>65504&&Ce("DataUtils.toHalfFloat(): Value out of range."),n=je(n,-65504,65504),pn.floatView[0]=n;let e=pn.uint32View[0],t=e>>23&511;return pn.baseTable[t]+((e&8388607)>>pn.shiftTable[t])}function fm(n){let e=n>>10;return pn.uint32View[0]=pn.mantissaTable[pn.offsetTable[e]+(n&1023)]+pn.exponentTable[e],pn.floatView[0]}var ea=class{static toHalfFloat(e){return pm(e)}static fromHalfFloat(e){return fm(e)}},Rt=new k,po=new Me,mm=0,De=class extends Yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hp,this.updateRanges=[],this.gpuType=Ci,this.version=0,this._normalizationScale=e!==void 0?Bh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):em(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):tm(e,this.array)}};var ta=class extends De{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ia=class extends De{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ot=class extends De{constructor(e,t,i){super(new Float32Array(e),t,i)}},gm=new Ki,Gr=new k,rh=new k,Ei=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):gm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(rh)),this.expandByPoint(Gr.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xm=0,Mi=new Oe,ah=new Ct,Ys=new k,di=new Ki,Wr=new Ki,zt=new k,nt=class n extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J0(e)?ia:ta)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,i){return Mi.makeTranslation(e,t,i),this.applyMatrix4(Mi),this}scale(e,t,i){return Mi.makeScale(e,t,i),this.applyMatrix4(Mi),this}lookAt(e){return ah.lookAt(e),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];di.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(di.min,Wr.min),di.expandByPoint(zt),zt.addVectors(di.max,Wr.max),di.expandByPoint(zt)):(di.expandByPoint(Wr.min),di.expandByPoint(Wr.max))}di.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),zt.add(Ys)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new De(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let C=0;C<i.count;C++)o[C]=new k,l[C]=new k;let h=new k,p=new k,u=new k,d=new Me,m=new Me,x=new Me,f=new k,g=new k;function v(C,R,L){c[C]=c[R]=c[L]=1,h.fromBufferAttribute(i,C),p.fromBufferAttribute(i,R),u.fromBufferAttribute(i,L),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,L),p.sub(h),u.sub(h),m.sub(d),x.sub(d);let D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(f.copy(p).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(D),g.copy(u).multiplyScalar(m.x).addScaledVector(p,-x.x).multiplyScalar(D),o[C].add(f),o[R].add(f),o[L].add(f),l[C].add(g),l[R].add(g),l[L].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,R=w.length;C<R;++C){let L=w[C],D=L.start,B=L.count;for(let P=D,O=D+B;P<O;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let _=new k,M=new k,S=new k,y=new k;function b(C){S.fromBufferAttribute(s,C),y.copy(S);let R=o[C];_.copy(R),_.sub(S.multiplyScalar(S.dot(R))).normalize(),M.crossVectors(y,R);let D=M.dot(l[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,D)}for(let C=0,R=i.count;C<R;++C)c[C]&&b(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new De(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,p=new k;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),x=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,f),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new De(u,h,p)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oh=new k,vm=new k,ym=new Ne,Bi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=oh.subVectors(i,t).cross(vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(oh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ym.getNormalMatrix(e),s=this.coplanarPoint(oh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bm=0,Ji=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=fr,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=gs,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Bi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Me().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var dn=new k,lh=new k,fo=new k,mo=new k,us=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){lh.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),mo.copy(this.origin).sub(lh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(fo),o=mo.dot(this.direction),l=-mo.dot(fo),c=mo.lengthSq(),h=Math.abs(1-a*a),p,u,d,m;if(h>0)if(p=a*l-o,u=a*o-l,m=r*h,p>=0)if(u>=-m)if(u<=m){let x=1/h;p*=x,u*=x,d=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-m?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=m?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(lh).addScaledVector(fo,u),d}intersectSphere(e,t){if(e.radius<0)return null;dn.subVectors(e.center,this.origin);let i=dn.dot(this.direction),s=dn.dot(dn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,x=t.y-a.y,f=t.z-a.z,g=i.x-a.x,v=i.y-a.y,w=i.z-a.z,_=Math.abs(l),M=Math.abs(c),S=Math.abs(h),y,b,C,R,L,D,B,P,O,U,H,te;if(_>=M&&_>=S?(C=l,D=p,O=m,te=g,l>=0?(y=c,b=h,R=u,L=d,B=x,P=f,U=v,H=w):(y=h,b=c,R=d,L=u,B=f,P=x,U=w,H=v)):M>=S?(C=c,D=u,O=x,te=v,c>=0?(y=h,b=l,R=d,L=p,B=f,P=m,U=w,H=g):(y=l,b=h,R=p,L=d,B=m,P=f,U=g,H=w)):(C=h,D=d,O=f,te=w,h>=0?(y=l,b=c,R=p,L=u,B=m,P=x,U=g,H=v):(y=c,b=l,R=u,L=p,B=x,P=m,U=v,H=g)),C===0)return null;let $=y/C,Z=b/C,ee=1/C,ye=R-$*D,Ue=L-Z*D,J=B-$*O,ge=P-Z*O,_e=U-$*te,Pe=H-Z*te,xe=_e*ge-Pe*J,ze=ye*Pe-Ue*_e,Et=J*Ue-ge*ye;if(s){if(xe<0||ze<0||Et<0)return null}else if((xe<0||ze<0||Et<0)&&(xe>0||ze>0||Et>0))return null;let Ie=xe+ze+Et;if(Ie===0)return null;let st=ee*(xe*D+ze*O+Et*te);return(Ie>0?st<0:st>0)?null:this.at(st/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pd=new Oe,cs=new us,go=new Ei,fd=new k,xo=new k,vo=new k,yo=new k,ch=new k,bo=new k,md=new k,_o=new k,$e=class extends Ct{constructor(e=new nt,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(ch.fromBufferAttribute(p,e),a?bo.addScaledVector(ch,h):bo.addScaledVector(ch.sub(t),h))}t.add(bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(go.containsPoint(cs.origin)===!1&&(cs.intersectSphere(go,fd)===null||cs.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(pd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(pd),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let f=u[m],g=a[f.materialIndex],v=Math.max(f.start,d.start),w=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let _=v,M=w;_<M;_+=3){let S=o.getX(_),y=o.getX(_+1),b=o.getX(_+2);s=wo(this,g,e,i,c,h,p,S,y,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let f=m,g=x;f<g;f+=3){let v=o.getX(f),w=o.getX(f+1),_=o.getX(f+2);s=wo(this,a,e,i,c,h,p,v,w,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let f=u[m],g=a[f.materialIndex],v=Math.max(f.start,d.start),w=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let _=v,M=w;_<M;_+=3){let S=_,y=_+1,b=_+2;s=wo(this,g,e,i,c,h,p,S,y,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let f=m,g=x;f<g;f+=3){let v=f,w=f+1,_=f+2;s=wo(this,a,e,i,c,h,p,v,w,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function _m(n,e,t,i,s,r,a,o){let l;if(e.side===Tt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Yn,o),l===null)return null;_o.copy(o),_o.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(_o);return c<t.near||c>t.far?null:{distance:c,point:_o.clone(),object:n}}function wo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,xo),n.getVertexPosition(l,vo),n.getVertexPosition(c,yo);let h=_m(n,e,t,i,xo,vo,yo,md);if(h){let p=new k;Hn.getBarycoord(md,xo,vo,yo,p),s&&(h.uv=Hn.getInterpolatedAttribute(s,o,l,c,p,new Me)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,o,l,c,p,new Me)),a&&(h.normal=Hn.getInterpolatedAttribute(a,o,l,c,p,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new k,materialIndex:0};Hn.getNormal(xo,vo,yo,u.normal),h.face=u,h.barycoord=p}return h}var Vn=class extends ii{constructor(e=null,t=1,i=1,s,r,a,o,l,c=wt,h=wt,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var na=class extends De{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new Oe,gd=new Oe,So=[],xd=new Ki,wm=new Oe,$r=new $e,qr=new Ei,yn=class extends $e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),xd.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),qr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),gd.multiplyMatrices(i,Zs),$r.matrixWorld=gd,$r.raycast(e,So);for(let a=0,o=So.length;a<o;a++){let l=So[a];l.instanceId=r,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vn(new Float32Array(s*this.count),s,this.count,xr,Ci));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new Ei,Sm=new Me(.5,.5),Mo=new k,Gn=class{constructor(e=new Bi,t=new Bi,i=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],d=r[7],m=r[8],x=r[9],f=r[10],g=r[11],v=r[12],w=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-a,d-h,g-m,M-v).normalize(),s[1].setComponents(c+a,d+h,g+m,M+v).normalize(),s[2].setComponents(c+o,d+p,g+x,M+w).normalize(),s[3].setComponents(c-o,d-p,g-x,M-w).normalize(),i)s[4].setComponents(l,u,f,_).normalize(),s[5].setComponents(c-l,d-u,g-f,M-_).normalize();else if(s[4].setComponents(c-l,d-u,g-f,M-_).normalize(),t===Ti)s[5].setComponents(c+l,d+u,g+f,M+_).normalize();else if(t===ir)s[5].setComponents(l,u,f,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);let t=Sm.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Mo.x=s.normal.x>0?e.max.x:e.min.x,Mo.y=s.normal.y>0?e.max.y:e.min.y,Mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vd=new Oe,qo=class n{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];vd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Gn),i[s].setFromProjectionMatrix(vd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Gn),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Xo=class extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yo=new k,Zo=new k,yd=new Oe,Xr=new us,To=new Ei,hh=new k,bd=new k,lr=class extends Ct{constructor(e=new nt,t=new Xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Yo.fromBufferAttribute(t,s-1),Zo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Yo.distanceTo(Zo);e.setAttribute("lineDistance",new ot(i,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;yd.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(yd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=d,f=m-1;x<f;x+=c){let g=h.getX(x),v=h.getX(x+1),w=Eo(this,e,Xr,l,g,v,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(m-1),f=h.getX(d),g=Eo(this,e,Xr,l,x,f,m-1);g&&t.push(g)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,f=m-1;x<f;x+=c){let g=Eo(this,e,Xr,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Eo(this,e,Xr,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Eo(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Yo.fromBufferAttribute(o,s),Zo.fromBufferAttribute(o,r),t.distanceSqToSegment(Yo,Zo,hh,bd)>i)return;hh.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(hh);if(!(c<e.near||c>e.far))return{distance:c,point:bd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var _d=new k,wd=new k,sa=class extends lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)_d.fromBufferAttribute(t,s),wd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_d.distanceTo(wd);e.setAttribute("lineDistance",new ot(i,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ko=class extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sd=new Oe,gh=new us,Ao=new Ei,Ro=new k,ds=class extends Ct{constructor(e=new nt,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Sd.copy(s).invert(),gh.copy(e.ray).applyMatrix4(Sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=u,x=d;m<x;m++){let f=c.getX(m);Ro.fromBufferAttribute(p,f),Md(Ro,f,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(p.count,a.start+a.count);for(let m=u,x=d;m<x;m++)Ro.fromBufferAttribute(p,m),Md(Ro,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Md(n,e,t,i,s,r,a){let o=gh.distanceSqToPoint(n);if(o<t){let l=new k;gh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ra=class extends ii{constructor(e=[],t=vs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var bn=class extends ii{constructor(e,t,i=Hi,s,r,a,o=wt,l=wt,c,h=mn,p=1){if(h!==mn&&h!==Mn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},aa=class extends bn{constructor(e,t=Hi,i=vs,s,r,a=wt,o=wt,l,c=mn){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oa=class extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},cr=class n extends nt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(p,2));function m(x,f,g,v,w,_,M,S,y,b,C){let R=_/y,L=M/b,D=_/2,B=M/2,P=S/2,O=y+1,U=b+1,H=0,te=0,$=new k;for(let Z=0;Z<U;Z++){let ee=Z*L-B;for(let ye=0;ye<O;ye++){let Ue=ye*R-D;$[x]=Ue*v,$[f]=ee*w,$[g]=P,c.push($.x,$.y,$.z),$[x]=0,$[f]=0,$[g]=S>0?1:-1,h.push($.x,$.y,$.z),p.push(ye/y),p.push(1-Z/b),H+=1}}for(let Z=0;Z<b;Z++)for(let ee=0;ee<y;ee++){let ye=u+ee+O*Z,Ue=u+ee+O*(Z+1),J=u+(ee+1)+O*(Z+1),ge=u+(ee+1)+O*Z;l.push(ye,Ue,ge),l.push(Ue,J,ge),te+=6}o.addGroup(d,te,C),d+=te,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var la=class n extends nt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],d=[],m=0,x=[],f=i/2,g=0;v(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ot(p,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(d,2));function v(){let _=new k,M=new k,S=0,y=(t-e)/i;for(let b=0;b<=r;b++){let C=[],R=b/r,L=R*(t-e)+e;for(let D=0;D<=s;D++){let B=D/s,P=B*l+o,O=Math.sin(P),U=Math.cos(P);M.x=L*O,M.y=-R*i+f,M.z=L*U,p.push(M.x,M.y,M.z),_.set(O,y,U).normalize(),u.push(_.x,_.y,_.z),d.push(B,1-R),C.push(m++)}x.push(C)}for(let b=0;b<s;b++)for(let C=0;C<r;C++){let R=x[C][b],L=x[C+1][b],D=x[C+1][b+1],B=x[C][b+1];(e>0||C!==0)&&(h.push(R,L,B),S+=3),(t>0||C!==r-1)&&(h.push(L,D,B),S+=3)}c.addGroup(g,S,0),g+=S}function w(_){let M=m,S=new Me,y=new k,b=0,C=_===!0?e:t,R=_===!0?1:-1;for(let D=1;D<=s;D++)p.push(0,f*R,0),u.push(0,R,0),d.push(.5,.5),m++;let L=m;for(let D=0;D<=s;D++){let P=D/s*l+o,O=Math.cos(P),U=Math.sin(P);y.x=C*U,y.y=f*R,y.z=C*O,p.push(y.x,y.y,y.z),u.push(0,R,0),S.x=O*.5+.5,S.y=U*.5*R+.5,d.push(S.x,S.y),m++}for(let D=0;D<s;D++){let B=M+D,P=L+D;_===!0?h.push(P,P+1,B):h.push(P+1,P,B),b+=3}c.addGroup(g,b,_===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Jo=class n extends nt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new k,_=new k,M=new k;for(let S=0;S<t.length;S+=3)d(t[S+0],w),d(t[S+1],_),d(t[S+2],M),l(w,_,M,v)}function l(v,w,_,M){let S=M+1,y=[];for(let b=0;b<=S;b++){y[b]=[];let C=v.clone().lerp(_,b/S),R=w.clone().lerp(_,b/S),L=S-b;for(let D=0;D<=L;D++)D===0&&b===S?y[b][D]=C:y[b][D]=C.clone().lerp(R,D/L)}for(let b=0;b<S;b++)for(let C=0;C<2*(S-b)-1;C++){let R=Math.floor(C/2);C%2===0?(u(y[b][R+1]),u(y[b+1][R]),u(y[b][R])):(u(y[b][R+1]),u(y[b+1][R+1]),u(y[b+1][R]))}}function c(v){let w=new k;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(v),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let v=new k;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let _=f(v)/2/Math.PI+.5,M=g(v)/Math.PI+.5;a.push(_,1-M)}m(),p()}function p(){for(let v=0;v<a.length;v+=6){let w=a[v+0],_=a[v+2],M=a[v+4],S=Math.max(w,_,M),y=Math.min(w,_,M);S>.9&&y<.1&&(w<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,w){let _=v*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function m(){let v=new k,w=new k,_=new k,M=new k,S=new Me,y=new Me,b=new Me;for(let C=0,R=0;C<r.length;C+=9,R+=6){v.set(r[C+0],r[C+1],r[C+2]),w.set(r[C+3],r[C+4],r[C+5]),_.set(r[C+6],r[C+7],r[C+8]),S.set(a[R+0],a[R+1]),y.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),M.copy(v).add(w).add(_).divideScalar(3);let L=f(M);x(S,R+0,v,L),x(y,R+2,w,L),x(b,R+4,_,L)}}function x(v,w,_,M){M<0&&v.x===1&&(a[w]=v.x-1),_.x===0&&_.z===0&&(a[w]=M/2/Math.PI+.5)}function f(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var hr=class n extends Jo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ps=class n extends nt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=e/o,u=t/l,d=[],m=[],x=[],f=[];for(let g=0;g<h;g++){let v=g*u-a;for(let w=0;w<c;w++){let _=w*p-r;m.push(_,-v,0),x.push(0,0,1),f.push(w/o),f.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let w=v+c*g,_=v+c*(g+1),M=v+1+c*(g+1),S=v+1+c*g;d.push(w,_,S),d.push(_,M,S)}this.setIndex(d),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ca=class n extends nt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],p=e,u=(t-e)/s,d=new k,m=new Me;for(let x=0;x<=s;x++){for(let f=0;f<=i;f++){let g=r+f/i*a;d.x=p*Math.cos(g),d.y=p*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}p+=u}for(let x=0;x<s;x++){let f=x*(i+1);for(let g=0;g<i;g++){let v=g+f,w=v,_=v+i+1,M=v+i+2,S=v+1;o.push(w,_,S),o.push(_,M,S)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Jt=class n extends nt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new k,u=new k,d=[],m=[],x=[],f=[];for(let g=0;g<=i;g++){let v=[],w=g/i,_=a+w*o,M=e*Math.cos(_),S=Math.sqrt(e*e-M*M),y=0;g===0&&a===0?y=.5/t:g===i&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){let C=b/t,R=s+C*r;p.x=-S*Math.cos(R),p.y=M,p.z=S*Math.sin(R),m.push(p.x,p.y,p.z),u.copy(p).normalize(),x.push(u.x,u.y,u.z),f.push(C+y,1-w),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<t;v++){let w=h[g][v+1],_=h[g][v],M=h[g+1][v],S=h[g+1][v+1];(g!==0||a>0)&&d.push(w,_,S),(g!==i-1||l<Math.PI)&&d.push(_,M,S)}this.setIndex(d),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Td(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Td(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=bs(n[t]);for(let s in i)e[s]=i[s]}return e}function Td(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Mm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var En={clone:bs,merge:Yt},Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[i].value=new k().fromArray(s.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Oe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ur=class extends Xe{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ai=class extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var jo=class extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qo=class extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ks(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Co(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Wn=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},el=class extends Wn{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fh:r=e,o=2*t-i;break;case mh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:a=e,l=2*i-t;break;case mh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),x=m*m,f=x*m,g=-u*f+2*u*x-u*m,v=(1+u)*f+(-1.5-2*u)*x+(-.5+u)*m+1,w=(-1-d)*f+(1.5+d)*x+.5*m,_=d*f-d*x;for(let M=0;M!==o;++M)r[M]=g*a[h+M]+v*a[c+M]+w*a[l+M]+_*a[p+M];return r}},tl=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},il=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nl=class extends Wn{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let m=(i-t)/(s-t),x=1-m;for(let f=0;f!==o;++f)r[f]=a[c+f]*x+a[l+f]*m;return r}let u=o*2,d=e-1;for(let m=0;m!==o;++m){let x=a[c+m],f=a[l+m],g=d*u+m*2,v=p[g],w=p[g+1],_=e*u+m*2,M=h[_],S=h[_+1],y=Rm(i,t,v,M,s);r[m]=xp(y,x,w,S,f)}return r}};function xp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Am(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Rm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=xp(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Am(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var fi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Co(e.settings)&&(i.settings={inTangents:Ks(e.settings.inTangents,Array),outTangents:Ks(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Vo:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break;case dh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ce("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Co(this.settings)&&(Ed(this.settings.inTangents,e),Ed(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Co(this.settings)&&(Ad(this.settings.inTangents,e),Ad(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&j0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Io,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let m=0;m!==i;++m){let x=t[p+m];if(x!==t[u+m]||x!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let p=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[p+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Co(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ed(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Ad(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Vo;var $n=class extends fi{constructor(e,t,i){super(e,t,i)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Zr;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends fi{constructor(e,t,i,s){super(e,t,i,s)}};sl.prototype.ValueTypeName="color";var rl=class extends fi{constructor(e,t,i,s){super(e,t,i,s)}};rl.prototype.ValueTypeName="number";var al=class extends Wn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zi.slerpFlat(r,0,a,c-o,a,c,l);return r}},ha=class extends fi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}};ha.prototype.ValueTypeName="quaternion";ha.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends fi{constructor(e,t,i){super(e,t,i)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Zr;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends fi{constructor(e,t,i,s){super(e,t,i,s)}};ol.prototype.ValueTypeName="vector";var ll=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],m=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vp=new ll,cl=class{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends Ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ua=class extends dr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uh=new Oe,Rd=new k,Cd=new k,da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gn,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rd),Cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){uh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(uh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ir||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Po=new k,ko=new Zi,qi=new k,pa=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Po,ko,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,ko,qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Po,ko,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,ko,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zn=new k,Pd=new Me,kd=new Me,Gt=class extends pa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Pd,kd),t.subVectors(kd,Pd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var xh=class extends da{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}},fa=class extends dr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fs=class extends pa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vh=class extends da{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ma=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new vh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Js=-90,js=1,Xn=class extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Js,js,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Js,js,e,t);r.layers=this.layers,this.add(r);let a=new Gt(Js,js,e,t);a.layers=this.layers,this.add(a);let o=new Gt(Js,js,e,t);o.layers=this.layers,this.add(o);let l=new Gt(Js,js,e,t);l.layers=this.layers,this.add(l);let c=new Gt(Js,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},hl=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ga=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Cm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Cm(){this._document.hidden===!1&&this.reset()}var Hh="\\[\\]\\.:\\/",Pm=new RegExp("["+Hh+"]","g"),Vh="[^"+Hh+"]",km="[^"+Hh.replace("\\.","")+"]",Im=/((?:WC+[\/:])*)/.source.replace("WC",Vh),Lm=/(WCOD+)?/.source.replace("WCOD",km),Dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),Nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),Fm=new RegExp("^"+Im+Lm+Dm+Nm+"$"),Om=["material","materials","bones","map"],yh=class{constructor(e,t,i){let s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pm,"")}static parseTrackName(e){let t=Fm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Om.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=yh;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fw=new Float32Array(1);var Id=new Oe,xa=class{constructor(e,t,i=0,s=1/0){this.ray=new us(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Id),this}intersectObject(e,t=!0,i=[]){return bh(e,this,i,t),i.sort(Ld),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)bh(e[s],this,i,t);return i.sort(Ld),i}};function Ld(n,e){return n.distance-e.distance}function bh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)bh(r[a],e,t,!0)}}var Yh=class Yh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Yh.prototype.isMatrix2=!0;var _h=Yh;function Gh(n,e,t,i){let s=Um(i);switch(t){case Ih:return n*e;case xr:return n*e/s.components*s.byteLength;case vl:return n*e/s.components*s.byteLength;case Zn:return n*e*2/s.components*s.byteLength;case yl:return n*e*2/s.components*s.byteLength;case Lh:return n*e*3/s.components*s.byteLength;case ri:return n*e*4/s.components*s.byteLength;case bl:return n*e*4/s.components*s.byteLength;case Ta:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wl:case Ml:return Math.max(n,16)*Math.max(e,8)/4;case _l:case Sl:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case El:case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Al:case Ca:case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $l:case ql:case Xl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yl:case Zl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pa:case Kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Um(n){switch(n){case si:case Rh:return{byteLength:1,components:1};case gr:case Ch:case yt:return{byteLength:2,components:1};case gl:case xl:return{byteLength:2,components:4};case Hi:case ml:case Ci:return{byteLength:4,components:1};case Ph:case kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function zp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zm(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<p.length;d++){let m=p[u],x=p[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,p[u]=x)}p.length=u+1;for(let d=0,m=p.length;d<m;d++){let x=p[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ug=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Hm,alphahash_pars_fragment:Vm,alphamap_fragment:Gm,alphamap_pars_fragment:Wm,alphatest_fragment:$m,alphatest_pars_fragment:qm,aomap_fragment:Xm,aomap_pars_fragment:Ym,batching_pars_vertex:Zm,batching_vertex:Km,begin_vertex:Jm,beginnormal_vertex:jm,bsdfs:Qm,iridescence_fragment:eg,bumpmap_pars_fragment:tg,clipping_planes_fragment:ig,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:sg,clipping_planes_vertex:rg,color_fragment:ag,color_pars_fragment:og,color_pars_vertex:lg,color_vertex:cg,common:hg,defaultnormal_vertex:ug,displacementmap_pars_vertex:dg,displacementmap_vertex:pg,emissivemap_fragment:fg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:xg,envmap_fragment:vg,envmap_common_pars_fragment:yg,envmap_pars_fragment:bg,envmap_pars_vertex:_g,envmap_physical_pars_fragment:Ig,envmap_vertex:wg,fog_vertex:Sg,fog_pars_vertex:Mg,fog_fragment:Tg,fog_pars_fragment:Eg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Rg,lights_lambert_fragment:Cg,lights_lambert_pars_fragment:Pg,lights_pars_begin:kg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ng,lights_phong_pars_fragment:Fg,lights_physical_fragment:Og,lights_physical_pars_fragment:Ug,lights_fragment_begin:Bg,lights_fragment_maps:zg,lights_fragment_end:Hg,lightprobes_pars_fragment:Vg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:qg,map_fragment:Xg,map_pars_fragment:Yg,map_particle_fragment:Zg,map_particle_pars_fragment:Kg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:jg,morphinstance_vertex:Qg,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:ix,morphtarget_vertex:nx,normal_fragment_begin:sx,normal_fragment_maps:rx,normal_pars_fragment:ax,normal_pars_vertex:ox,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:dx,iridescence_pars_fragment:px,opaque_fragment:fx,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:xx,dithering_fragment:vx,dithering_pars_fragment:yx,roughnessmap_fragment:bx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:Sx,shadowmap_vertex:Mx,shadowmask_pars_fragment:Tx,skinbase_vertex:Ex,skinning_pars_vertex:Ax,skinning_vertex:Rx,skinnormal_vertex:Cx,specularmap_fragment:Px,specularmap_pars_fragment:kx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Nx,uv_pars_fragment:Fx,uv_pars_vertex:Ox,uv_vertex:Ux,worldpos_vertex:Bx,background_vert:zx,background_frag:Hx,backgroundCube_vert:Vx,backgroundCube_frag:Gx,cube_vert:Wx,cube_frag:$x,depth_vert:qx,depth_frag:Xx,distance_vert:Yx,distance_frag:Zx,equirect_vert:Kx,equirect_frag:Jx,linedashed_vert:jx,linedashed_frag:Qx,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:iv,meshlambert_frag:nv,meshmatcap_vert:sv,meshmatcap_frag:rv,meshnormal_vert:av,meshnormal_frag:ov,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:hv,meshphysical_frag:uv,meshtoon_vert:dv,meshtoon_frag:pv,points_vert:fv,points_frag:mv,shadow_vert:gv,shadow_frag:xv,sprite_vert:vv,sprite_frag:yv},me={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Qi={basic:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Yt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Yt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new se(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Yt([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Yt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Yt([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Yt([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Yt([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Yt([me.lights,me.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Qi.physical={uniforms:Yt([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var jl={r:0,b:0,g:0},bv=new Oe,Hp=new Ne;Hp.set(-1,0,0,0,1,0,0,0,1);function _v(n,e,t,i,s,r){let a=new se(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let _=v.backgroundBlurriness>0;w=e.get(w,_)}return w}function m(v){let w=!1,_=d(v);_===null?f(a,o):_&&_.isColor&&(f(_,1),w=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,w){let _=d(w);_&&_.isCubeTexture?(c===void 0&&(c=new $e(new cr(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:bs(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bv.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hp),c.material.toneMapped=qe.getTransfer(_.colorSpace)!==tt,(h!==_||p!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,p=_.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new $e(new ps(2,2),new Xe({name:"BackgroundMaterial",uniforms:bs(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=qe.getTransfer(_.colorSpace)!==tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||p!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,p=_.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,w){v.getRGB(jl,zh(n)),t.buffers.color.setClear(jl.r,jl.g,jl.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,f(a,o)},render:m,addToRenderList:x,dispose:g}}function wv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,D,B,P,O){let U=!1,H=p(L,P,B,D);r!==H&&(r=H,c(r.object)),U=d(L,P,B,O),U&&m(L,P,B,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(L,D,B,P),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function p(L,D,B,P){let O=P.wireframe===!0,U=i[D.id];U===void 0&&(U={},i[D.id]=U);let H=L.isInstancedMesh===!0?L.id:0,te=U[H];te===void 0&&(te={},U[H]=te);let $=te[B.id];$===void 0&&($={},te[B.id]=$);let Z=$[O];return Z===void 0&&(Z=u(l()),$[O]=Z),Z}function u(L){let D=[],B=[],P=[];for(let O=0;O<t;O++)D[O]=0,B[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:P,object:L,attributes:{},index:null}}function d(L,D,B,P){let O=r.attributes,U=D.attributes,H=0,te=B.getAttributes();for(let $ in te)if(te[$].location>=0){let ee=O[$],ye=U[$];if(ye===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ye=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ye=L.instanceColor)),ee===void 0||ee.attribute!==ye||ye&&ee.data!==ye.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function m(L,D,B,P){let O={},U=D.attributes,H=0,te=B.getAttributes();for(let $ in te)if(te[$].location>=0){let ee=U[$];ee===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));let ye={};ye.attribute=ee,ee&&ee.data&&(ye.data=ee.data),O[$]=ye,H++}r.attributes=O,r.attributesNum=H,r.index=P}function x(){let L=r.newAttributes;for(let D=0,B=L.length;D<B;D++)L[D]=0}function f(L){g(L,0)}function g(L,D){let B=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;B[L]=1,P[L]===0&&(n.enableVertexAttribArray(L),P[L]=1),O[L]!==D&&(n.vertexAttribDivisor(L,D),O[L]=D)}function v(){let L=r.newAttributes,D=r.enabledAttributes;for(let B=0,P=D.length;B<P;B++)D[B]!==L[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function w(L,D,B,P,O,U,H){H===!0?n.vertexAttribIPointer(L,D,B,O,U):n.vertexAttribPointer(L,D,B,P,O,U)}function _(L,D,B,P){x();let O=P.attributes,U=B.getAttributes(),H=D.defaultAttributeValues;for(let te in U){let $=U[te];if($.location>=0){let Z=O[te];if(Z===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){let ee=Z.normalized,ye=Z.itemSize,Ue=e.get(Z);if(Ue===void 0)continue;let J=Ue.buffer,ge=Ue.type,_e=Ue.bytesPerElement,Pe=ge===n.INT||ge===n.UNSIGNED_INT||Z.gpuType===ml;if(Z.isInterleavedBufferAttribute){let xe=Z.data,ze=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Et=Z.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let Ie=0;Ie<$.locationSize;Ie++)g($.location+Ie,xe.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ie=0;Ie<$.locationSize;Ie++)f($.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ie=0;Ie<$.locationSize;Ie++)w($.location+Ie,ye/$.locationSize,ge,ee,ze*_e,(Et+ye/$.locationSize*Ie)*_e,Pe)}else{if(Z.isInstancedBufferAttribute){for(let xe=0;xe<$.locationSize;xe++)g($.location+xe,Z.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xe=0;xe<$.locationSize;xe++)f($.location+xe);n.bindBuffer(n.ARRAY_BUFFER,J);for(let xe=0;xe<$.locationSize;xe++)w($.location+xe,ye/$.locationSize,ge,ee,ye*_e,ye/$.locationSize*xe*_e,Pe)}}else if(H!==void 0){let ee=H[te];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv($.location,ee);break;case 3:n.vertexAttrib3fv($.location,ee);break;case 4:n.vertexAttrib4fv($.location,ee);break;default:n.vertexAttrib1fv($.location,ee)}}}}v()}function M(){C();for(let L in i){let D=i[L];for(let B in D){let P=D[B];for(let O in P){let U=P[O];for(let H in U)h(U[H].object),delete U[H];delete P[O]}}delete i[L]}}function S(L){if(i[L.id]===void 0)return;let D=i[L.id];for(let B in D){let P=D[B];for(let O in P){let U=P[O];for(let H in U)h(U[H].object),delete U[H];delete P[O]}}delete i[L.id]}function y(L){for(let D in i){let B=i[D];for(let P in B){let O=B[P];if(O[L.id]===void 0)continue;let U=O[L.id];for(let H in U)h(U[H].object),delete U[H];delete O[L.id]}}}function b(L){for(let D in i){let B=i[D],P=L.isInstancedMesh===!0?L.id:0,O=B[P];if(O!==void 0){for(let U in O){let H=O[U];for(let te in H)h(H[te].object),delete H[te];delete O[U]}delete B[P],Object.keys(B).length===0&&delete i[D]}}}function C(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:f,disableUnusedAttributes:v}}function Sv(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Mv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==ri&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let b=y===yt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==si&&y!==Ci&&!b&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Ce("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:_,maxSamples:M,samples:S}}function Tv(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Bi,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){let m=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,g=n.get(p);if(!s||m===null||m.length===0||r&&!f)r?h(null):c();else{let v=r?0:i,w=v*4,_=g.clippingState||null;l.value=_,_=h(m,u,w,d);for(let M=0;M!==w;++M)_[M]=t[M];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,d,m){let x=p!==null?p.length:0,f=null;if(x!==0){if(f=l.value,m!==!0||f===null){let g=d+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<g)&&(f=new Float32Array(g));for(let w=0,_=d;w!==x;++w,_+=4)a.copy(p[w]).applyMatrix4(v,o),a.normal.toArray(f,_),f[_+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}var _s=class extends Mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cr(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:_n});r.uniforms.tEquirect.value=t;let a=new $e(s,r),o=t.minFilter;return t.minFilter===Sn&&(t.minFilter=St),new Xn(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},yp=256,Ev=3,Av=20,Vp=256,Gp=16,Rv=3,Cv=new k,Pv=new se,br=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xn(1,10,null),this._boxMesh=new $e(new cr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Cv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Pv));let f=new Xn(i,s,h);return f.position.copy(o),f.update(l,e),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(yp,mp(e))}_fromTexture(e,t){e.mapping===vs||e.mapping===mr?this._setSize(e.image.length===0?yp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=bp(e,!1,!1),i=Math.log2(e)-Ev;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=bp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vs||e.mapping===mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_p()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=kv(),this._integrationMaterial=Iv());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gp);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Rv)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Vp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lv());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function bp(n,e,t){return new _s(n,{minFilter:Sn,generateMipmaps:e,type:yt,colorSpace:Kr,depthBuffer:t})}function Da(n,e,t){return new Xe({name:n,uniforms:e,vertexShader:We.cube_vert,fragmentShader:t,side:Tt,blending:_n,depthTest:!1,depthWrite:!1})}function kv(){return Da("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Iv(){return Da("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Lv(){return Da("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Av}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _p(){return Da("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function wp(){return Da("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===dl||d===pl)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new _s(m.height);return x.fromEquirectangularTexture(n,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===dl||d===pl,x=d===vs||d===mr;if(m||x){let f=t.get(u),g=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new br(n)),f=m?i.fromEquirectangular(u,f):i.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{let v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new br(n)),f=m?i.fromEquirectangular(u):i.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,d){return d===dl?u.mapping=vs:d===pl&&(u.mapping=mr),u}function l(u){let d=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function Nv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Yr("WebGLRenderer: "+i+" extension not supported."),s}}}function Fv(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let f in m.attributes)e.remove(m.attributes[f]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let f in x)e.update(x[f],n.ARRAY_BUFFER)}function p(m){let x=m.index,f=m.attributes.position,g=0;if(f===void 0)return;let v=x!==null?x.array.length:f.array.length/3-1,w=f.count>=65535?ia:ta,_=new w(Math.ceil(v/3)*6,1),M=_.array;if(x!==null){let y=x.array;g=x.version;for(let b=0,C=0;b<v;b+=3){let R=y[b+0],L=y[b+1],D=y[b+2];M[C++]=R,M[C++]=L,M[C++]=L,M[C++]=D,M[C++]=D,M[C++]=R}}else{g=f.version;for(let y=0,b=0;y<v;y+=3){let C=y+0,R=y+1,L=y+2;M[b++]=C,M[b++]=R,M[b++]=R,M[b++]=L,M[b++]=L,M[b++]=C}}_.version=g;let S=r.get(m);S&&e.remove(S),r.set(m,_)}function u(m){let x=r.get(m);if(x){let f=m.index;f!==null&&x.version<f.version&&p(m)}else p(m);return r.get(m)}function d(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Ov(n,e,t){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){n.drawElements(i,u,r,p*a),t.update(u,i,1)}function c(p,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,p*a,d),t.update(u,i,d))}function h(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,d);let x=0;for(let f=0;f<d;f++)x+=u[f];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Uv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Bv(n,e,t){let i=new WeakMap,s=new gt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let C=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;d===!0&&(w=1),m===!0&&(w=2),x===!0&&(w=3);let _=o.attributes.position.count*w,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*M*4*p),y=new Qr(S,_,M,p);y.type=Ci,y.needsUpdate=!0;let b=w*4;for(let R=0;R<p;R++){let L=f[R],D=g[R],B=v[R],P=_*M*4*R;for(let O=0;O<L.count;O++){let U=O*b;d===!0&&(s.fromBufferAttribute(L,O),S[P+U+0]=s.x,S[P+U+1]=s.y,S[P+U+2]=s.z,S[P+U+3]=0),m===!0&&(s.fromBufferAttribute(D,O),S[P+U+4]=s.x,S[P+U+5]=s.y,S[P+U+6]=s.z,S[P+U+7]=0),x===!0&&(s.fromBufferAttribute(B,O),S[P+U+8]=s.x,S[P+U+9]=s.y,S[P+U+10]=s.z,S[P+U+11]=B.itemSize===4?s.w:1)}}u={count:p,texture:y,size:new Me(_,M)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function zv(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=e.get(c,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Hv={[va]:"LINEAR_TONE_MAPPING",[ya]:"REINHARD_TONE_MAPPING",[ba]:"CINEON_TONE_MAPPING",[xs]:"ACES_FILMIC_TONE_MAPPING",[wa]:"AGX_TONE_MAPPING",[Sa]:"NEUTRAL_TONE_MAPPING",[_a]:"CUSTOM_TONE_MAPPING"};function Vv(n,e,t,i,s,r){let a=new Mt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new nt;h.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ot([0,2,0,0,2,0],2));let p=new ur({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $e(h,p),d=new fs(-1,1,1,-1,0,1),m=null,x=null,f=!1,g,v=null,w=[],_=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let y=0;y<w.length;y++){let b=w[y];b.setSize&&b.setSize(M,S)}},this.setEffects=function(M){w=M,_=w.length>0&&w[0].isRenderPass===!0;let S=a.width,y=a.height;w.length>0&&o===null&&(o=new Mt(S,y,{type:yt,depthBuffer:!1,stencilBuffer:!1}),l=new Mt(S,y,{type:yt,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(C=>C.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new bn(S,y),r===!0&&(c.format=Mn,c.type=ys)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let C=0;C<w.length;C++){let R=w[C];R.setSize&&R.setSize(S,y),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(M,S){if(f||M.toneMapping===Ri&&w.length===0)return!1;if(v=S,S!==null){let y=S.width,b=S.height;(a.width!==y||a.height!==b)&&this.setSize(y,b)}return _===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=Ri,!0},this.hasRenderPass=function(){return _},this.end=function(M,S){M.toneMapping=g,f=!0;let y=a,b=o;for(let C=0;C<w.length;C++){let R=w[C];R.enabled!==!1&&(R.render(M,b,y,S),R.needsSwap!==!1&&(y=b,b=b===o?l:o))}if(m!==M.outputColorSpace||x!==M.toneMapping){m=M.outputColorSpace,x=M.toneMapping,p.defines={},qe.getTransfer(m)===tt&&(p.defines.SRGB_TRANSFER="");let C=Hv[x];C&&(p.defines[C]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(v),M.render(u,d),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var Wp=new ii,$p=new bn(1,1),qp=new aa(1),Xp=new Qr,Yp=new rr,Zp=new ra,Sp=[],Mp=[],Tp=new Float32Array(16),Ep=new Float32Array(9),Ap=new Float32Array(4);function _r(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Sp[s];if(r===void 0&&(r=new Float32Array(s),Sp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tc(n,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function $v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Xv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Ap.set(i),n.uniformMatrix2fv(this.addr,!1,Ap),Dt(t,i)}}function Yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Ep.set(i),n.uniformMatrix3fv(this.addr,!1,Ep),Dt(t,i)}}function Zv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Tp.set(i),n.uniformMatrix4fv(this.addr,!1,Tp),Dt(t,i)}}function Kv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function ic(n){return n.version===0&&(n.compareFunction=Fh,n.needsUpdate=!0),n}function sy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ic($p):r=Wp,t.setTexture2D(e||r,s)}function ry(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yp,s)}function ay(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ic(qp):r=Zp,t.setTextureCube(e||r,s)}function oy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xp,s)}function ly(n){switch(n){case 5126:return Gv;case 35664:return Wv;case 35665:return $v;case 35666:return qv;case 35674:return Xv;case 35675:return Yv;case 35676:return Zv;case 5124:case 35670:return Kv;case 35667:case 35671:return Jv;case 35668:case 35672:return jv;case 35669:case 35673:return Qv;case 5125:return ey;case 36294:return ty;case 36295:return iy;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}function cy(n,e){n.uniform1fv(this.addr,e)}function hy(n,e){let t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function uy(n,e){let t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function dy(n,e){let t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function py(n,e){let t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fy(n,e){let t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function my(n,e){let t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gy(n,e){n.uniform1iv(this.addr,e)}function xy(n,e){n.uniform2iv(this.addr,e)}function vy(n,e){n.uniform3iv(this.addr,e)}function yy(n,e){n.uniform4iv(this.addr,e)}function by(n,e){n.uniform1uiv(this.addr,e)}function _y(n,e){n.uniform2uiv(this.addr,e)}function wy(n,e){n.uniform3uiv(this.addr,e)}function Sy(n,e){n.uniform4uiv(this.addr,e)}function My(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ic($p):a=Wp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ty(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yp,r[a])}function Ey(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ic(qp):a=Zp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Ay(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xp,r[a])}function Ry(n){switch(n){case 5126:return cy;case 35664:return hy;case 35665:return uy;case 35666:return dy;case 35674:return py;case 35675:return fy;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return xy;case 35668:case 35672:return vy;case 35669:case 35673:return yy;case 5125:return by;case 36294:return _y;case 36295:return wy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ay}}var Jh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ly(t.type)}},jh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ry(t.type)}},Qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Zh=/(\w+)(\])?(\[|\.)?/g;function Rp(n,e){n.seq.push(e),n.map[e.id]=e}function Cy(n,e,t){let i=n.name,s=i.length;for(Zh.lastIndex=0;;){let r=Zh.exec(i),a=Zh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rp(t,c===void 0?new Jh(o,n,e):new jh(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new Qh(o),Rp(t,p)),t=p}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Cy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Cp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Py=37297,ky=0;function Iy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Pp=new Ne;function Ly(n){qe._getMatrix(Pp,qe.workingColorSpace,n);let e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(n)){case Jr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Iy(n.getShaderSource(e),o)}else return r}function Dy(n,e){let t=Ly(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ny={[va]:"Linear",[ya]:"Reinhard",[ba]:"Cineon",[xs]:"ACESFilmic",[wa]:"AgX",[Sa]:"Neutral",[_a]:"Custom"};function Fy(n,e){let t=Ny[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ql=new k;function Oy(){qe.getLuminanceCoefficients(Ql);let n=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function By(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function La(n){return n!==""}function Ip(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Lp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(n){return n.replace(Hy,Vy)}function Vy(n,e){let t=We[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return eu(t)}var Gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(n){return n.replace(Gy,Wy)}function Wy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Np(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var $y={[ms]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function qy(n){return $y[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xy={[mr]:"ENVMAP_MODE_REFRACTION"};function Yy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Xy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zy={[Eh]:"ENVMAP_BLENDING_MULTIPLY",[Qd]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};function Ky(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Zy[n.combine]||"ENVMAP_BLENDING_NONE"}function Jy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=qy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Yy(t),p=Ky(t),u=Uy(t),d=By(r),m=s.createProgram(),x,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(La).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(La).join(`
`),f.length>0&&(f+=`
`)):(x=[Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),f=[Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?We.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Dy("linearToOutputTexel",t.outputColorSpace),Oy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),a=eu(a),a=Ip(a,t),a=Lp(a,t),o=eu(o),o=Ip(o,t),o=Lp(o,t),a=Dp(a),o=Dp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=g+x+a,w=g+f+o,_=Cp(s,s.VERTEX_SHADER,v),M=Cp(s,s.FRAGMENT_SHADER,w);s.attachShader(m,_),s.attachShader(m,M),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function S(R){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(_)||"",B=s.getShaderInfoLog(M)||"",P=L.trim(),O=D.trim(),U=B.trim(),H=!0,te=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,_,M);else{let $=kp(s,_,"vertex"),Z=kp(s,M,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+$+`
`+Z)}else P!==""?Ce("WebGLProgram: Program Info Log:",P):(O===""||U==="")&&(te=!1);te&&(R.diagnostics={runnable:H,programLog:P,vertexShader:{log:O,prefix:x},fragmentShader:{log:U,prefix:f}})}s.deleteShader(_),s.deleteShader(M),y=new yr(s,m),b=zy(s,m)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,Py)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ky++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=M,this}var jy=0,tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new iu(e),t.set(e,i)),i}},iu=class{constructor(e){this.id=jy++,this.code=e,this.usedTimes=0}};function Qy(n){return n===Zn||n===Ca||n===Pa}function e1(n,e,t,i,s,r){let a=new ar,o=new tu,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,b,C,R,L,D){let B=R.fog,P=L.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=e.get(y.envMap||O,U),te=u[y.type],$=i.precision;y.precision!==null&&($=i.getMaxPrecision(y.precision),$!==y.precision&&Ce("WebGLProgram.getParameters:",y.precision,"not supported, using",$,"instead."));let Z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=Z!==void 0?Z.length:0,ye=0;P.morphAttributes.position!==void 0&&(ye=1),P.morphAttributes.normal!==void 0&&(ye=2),P.morphAttributes.color!==void 0&&(ye=3);let Ue,J,ge,_e;if(te){let fe=Qi[te];Ue=fe.vertexShader,J=fe.fragmentShader}else{Ue=y.vertexShader,J=y.fragmentShader;let fe=o.getVertexShaderStage(y),rt=o.getFragmentShaderStage(y);o.update(y,fe,rt),ge=fe.id,_e=rt.id}let Pe=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,Et=L.isBatchedMesh===!0,Ie=!!y.map,st=!!y.matcap,lt=!!H,Ze=lt&&H.isPMREMTexture===!0,Ht=!!y.aoMap,Pt=!!y.lightMap,ti=!!y.bumpMap&&y.wireframe===!1,xt=!!y.normalMap,$i=!!y.displacementMap,Ot=!!y.emissiveMap,bi=!!y.metalnessMap,_i=!!y.roughnessMap,wi=y.anisotropy>0,z=y.clearcoat>0,Si=y.diffuseRoughness>0,ft=y.dispersion>0,mt=y.retroreflectivity>0,pe=y.iridescence>0,kt=y.sheen>0,ke=y.transmission>0,Fe=wi&&!!y.anisotropyMap,I=z&&!!y.clearcoatMap,E=z&&!!y.clearcoatNormalMap,G=z&&!!y.clearcoatRoughnessMap,ie=Si&&!!y.diffuseRoughnessMap,Q=pe&&!!y.iridescenceMap,ae=pe&&!!y.iridescenceThicknessMap,ue=kt&&!!y.sheenColorMap,Y=kt&&!!y.sheenRoughnessMap,K=!!y.specularMap,le=!!y.specularColorMap,N=!!y.specularIntensityMap,j=ke&&!!y.transmissionMap,X=ke&&!!y.thicknessMap,ce=!!y.gradientMap,re=!!y.alphaMap,oe=y.alphaTest>0,Ee=!!y.alphaHash,Ge=!!y.extensions,ne=Ri;y.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ne=n.toneMapping);let Re=Ze?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ve={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:J,defines:y.defines,customVertexShaderID:ge,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:$,batching:Et,batchingColor:Et&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:st,envMap:lt,envMapMode:lt&&H.mapping,envMapPMREM:Ze,envMapMaxLod:Ze?Re.length-1:null,envMapSize:Ze?Re[0].width:null,aoMap:Ht,lightMap:Pt,bumpMap:ti,normalMap:xt,displacementMap:$i,emissiveMap:Ot,normalMapObjectSpace:xt&&y.normalMapType===np,normalMapTangentSpace:xt&&y.normalMapType===Jl,packedNormalMap:xt&&y.normalMapType===Jl&&Qy(y.normalMap.format),metalnessMap:bi,roughnessMap:_i,anisotropy:wi,anisotropyMap:Fe,clearcoat:z,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:G,diffuseRoughness:Si,diffuseRoughnessMap:ie,dispersion:ft,retroreflection:mt,iridescence:pe,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:kt,sheenColorMap:ue,sheenRoughnessMap:Y,specularMap:K,specularColorMap:le,specularIntensityMap:N,transmission:ke,transmissionMap:j,thicknessMap:X,gradientMap:ce,opaque:y.transparent===!1&&y.blending===fr&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:oe,alphaHash:Ee,combine:y.combine,mapUv:Ie&&d(y.map.channel),aoMapUv:Ht&&d(y.aoMap.channel),lightMapUv:Pt&&d(y.lightMap.channel),bumpMapUv:ti&&d(y.bumpMap.channel),normalMapUv:xt&&d(y.normalMap.channel),displacementMapUv:$i&&d(y.displacementMap.channel),emissiveMapUv:Ot&&d(y.emissiveMap.channel),metalnessMapUv:bi&&d(y.metalnessMap.channel),roughnessMapUv:_i&&d(y.roughnessMap.channel),anisotropyMapUv:Fe&&d(y.anisotropyMap.channel),clearcoatMapUv:I&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:E&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(y.sheenRoughnessMap.channel),specularMapUv:K&&d(y.specularMap.channel),specularColorMapUv:le&&d(y.specularColorMap.channel),specularIntensityMapUv:N&&d(y.specularIntensityMap.channel),transmissionMapUv:j&&d(y.transmissionMap.channel),thicknessMapUv:X&&d(y.thicknessMap.channel),alphaMapUv:re&&d(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xt||wi),vertexNormals:!!P.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(Ie||re),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||P.attributes.normal===void 0&&xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===tt,decodeVideoTextureEmissive:Ot&&y.emissiveMap.isVideoTexture===!0&&qe.getTransfer(y.emissiveMap.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===It,flipSided:y.side===Tt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ge&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&y.extensions.multiDraw===!0||Et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(f(b,y),g(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function f(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function g(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function v(y){let b=u[y.type],C;if(b){let R=Qi[b];C=En.clone(R.uniforms)}else C=y.uniforms;return C}function w(y,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new Jy(n,b,y,s),c.push(C),h.set(b,C)),C}function _(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function S(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:_,releaseShaderCache:M,programs:c,dispose:S}}function t1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function i1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Fp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Op(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,x,f,g){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:f,group:g},n[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=f,v.group=g),e++,v}function l(u,d,m,x,f,g,v){v.reversedDepth===!0&&(f=-f);let w=o(u,d,m,x,f,g);m.transmission>0?i.push(w):m.transparent===!0?s.push(w):t.push(w)}function c(u,d,m,x,f,g){let v=o(u,d,m,x,f,g);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,d){t.length>1&&t.sort(u||i1),i.length>1&&i.sort(d||Fp),s.length>1&&s.sort(d||Fp)}function p(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function n1(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Op,n.set(i,[a])):s>=r.length?(a=new Op,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function s1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new se};break;case"SpotLight":t={position:new k,direction:new k,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function r1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var a1=0;function o1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function l1(n){let e=new s1,t=r1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new Oe,a=new Oe;function o(c){let h=0,p=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,m=0,x=0,f=0,g=0,v=0,w=0,_=0,M=0,S=0,y=0,b=0,C=0,R=0;c.sort(o1);for(let D=0,B=c.length;D<B;D++){let P=c[D],O=P.color,U=P.intensity,H=P.distance,te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zn?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*U,p+=O.g*U,u+=O.b*U;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],U);R++}else if(P.isSunLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,ee=t.get(P);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[m]=ee,i.sunShadowMap[m]=te;let ye=Z.getViewportCount();for(let Ue=0;Ue<ye;Ue++)i.sunShadowMatrix[x+Ue]=Z.getMatrix(Ue),i.sunShadowCascade[x+Ue]=Z._cascadeData[Ue];x+=ye,m++}i.sun[d]=$,d++}else if(P.isDirectionalLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,ee=t.get(P);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.directionalShadow[f]=ee,i.directionalShadowMap[f]=te,i.directionalShadowMatrix[f]=P.shadow.matrix,M++}i.directional[f]=$,f++}else if(P.isSpotLight){let $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(O).multiplyScalar(U),$.distance=H,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[v]=$;let Z=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Z.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[v]=Z.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=te,y++}v++}else if(P.isRectAreaLight){let $=e.get(P);$.color.copy(O).multiplyScalar(U),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[w]=$,w++}else if(P.isPointLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let Z=P.shadow,ee=t.get(P);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,i.pointShadow[g]=ee,i.pointShadowMap[g]=te,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=$,g++}else if(P.isHemisphereLight){let $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(U),$.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[_]=$,_++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==w||L.hemiLength!==_||L.numSunShadows!==m||L.numDirectionalShadows!==M||L.numPointShadows!==S||L.numSpotShadows!==y||L.numSpotMaps!==b||L.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=f,i.spot.length=v,i.rectArea.length=w,i.point.length=g,i.hemi.length=_,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,L.sunLength=d,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=w,L.hemiLength=_,L.numSunShadows=m,L.numDirectionalShadows=M,L.numPointShadows=S,L.numSpotShadows=y,L.numSpotMaps=b,L.numLightProbes=R,i.version=a1++)}function l(c,h){let p=0,u=0,d=0,m=0,x=0,f=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let _=c[v];if(_.isSunLight){let M=i.sun[p];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),p++}else if(_.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),u++}else if(_.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),m++}else if(_.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let M=i.hemi[f];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),f++}}}return{setup:o,setupView:l,state:i}}function Up(n){let e=new l1(n),t=[],i=[],s=[];function r(p){h.camera=p,t.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){i.push(p)}function l(){e.setup(t),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){e.setupView(t,p)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function c1(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Up(n),e.set(s,[o])):r>=a.length?(o=new Up(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,d1=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],p1=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Bp=new Oe,Ia=new k,Kh=new k;function f1(n,e,t){let i=new Gn,s=new Me,r=new Me,a=new gt,o=new jo,l=new Qo,c={},h=t.maxTextureSize,p={[Yn]:Tt,[Tt]:Yn,[It]:It},u=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:h1,fragmentShader:u1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new nt;m.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $e(m,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let g=this.type;this.render=function(S,y,b){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;this.type===Fd&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let C=n.getRenderTarget(),R=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(_n),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=g!==this.type;B&&y.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=S.length;P<O;P++){let U=S[P],H=U.shadow;if(H===void 0){Ce("WebGLShadowMap:",U,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let te=H.getFrameExtents();s.multiply(te),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,H.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=$,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===pr){if(U.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Mt(s.x,s.y,{format:Zn,type:yt,minFilter:St,magFilter:St,generateMipmaps:!1}),H.map.texture.name=U.name+".shadowMap",H.map.depthTexture=new bn(s.x,s.y,Ci),H.map.depthTexture.name=U.name+".shadowMapDepth",H.map.depthTexture.format=mn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wt,H.map.depthTexture.magFilter=wt}else U.isPointLight?(H.map=new _s(s.x),H.map.depthTexture=new aa(s.x,Hi)):(H.map=new Mt(s.x,s.y),H.map.depthTexture=new bn(s.x,s.y,Hi)),H.map.depthTexture.name=U.name+".shadowMap",H.map.depthTexture.format=mn,this.type===ms?(H.map.depthTexture.compareFunction=$?Nh:Dh,H.map.depthTexture.minFilter=St,H.map.depthTexture.magFilter=St):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=wt,H.map.depthTexture.magFilter=wt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();U.isPointLight!==!0&&H.updateMatrices(U,b);let ee=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let ye=0;ye<Z;ye++){let Ue=H.getCamera(ye);if(U.isPointLight){let J=H.camera,ge=H.matrix,_e=U.distance||J.far;_e!==J.far&&(J.far=_e,J.updateProjectionMatrix()),Ia.setFromMatrixPosition(U.matrixWorld),J.position.copy(Ia),Kh.copy(J.position),Kh.add(d1[ye]),J.up.copy(p1[ye]),J.lookAt(Kh),J.updateMatrixWorld(),ge.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Bp.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Bp,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ye),n.clear();else{ye===0&&(n.setRenderTarget(H.map),n.clear());let J=H.getViewport(ye);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),D.viewport(a)}i=H.getFrustum(ye),_(y,b,Ue,U,ee,this.type)}H.isPointLightShadow!==!0&&this.type===pr&&v(H,b),H.needsUpdate=!1}g=this.type,f.needsUpdate=!1,n.setRenderTarget(C,R,L)};function v(S,y){let b=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Mt(s.x,s.y,{format:Zn,type:yt}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(y,null,b,u,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(y,null,b,d,x,null)}function w(S,y,b,C){let R=null,L=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)R=L;else if(R=b.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let D=R.uuid,B=y.uuid,P=c[D];P===void 0&&(P={},c[D]=P);let O=P[B];O===void 0&&(O=R.clone(),P[B]=O,y.addEventListener("dispose",M)),R=O}if(R.visible=y.visible,R.wireframe=y.wireframe,C===pr?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:p[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=n.properties.get(R);D.light=b}return R}function _(S,y,b,C,R,L){if(S.visible===!1)return;if(S.layers.test(R)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===pr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let P=e.update(S),O=S.material;if(Array.isArray(O)){let U=P.groups;for(let H=0,te=U.length;H<te;H++){let $=U[H],Z=O[$.materialIndex];if(Z&&Z.visible){let ee=w(S,Z,C,L);S.onBeforeShadow(n,S,y,b,P,ee,$),n.renderBufferDirect(b,null,P,ee,S,$),S.onAfterShadow(n,S,y,b,P,ee,$)}}}else if(O.visible){let U=w(S,O,C,L);S.onBeforeShadow(n,S,y,b,P,U,null),n.renderBufferDirect(b,null,P,U,S,null),S.onAfterShadow(n,S,y,b,P,U,null)}}let B=S.children;for(let P=0,O=B.length;P<O;P++)_(B[P],y,b,C,R,L)}function M(S){S.target.removeEventListener("dispose",M);for(let b in c){let C=c[b],R=S.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function m1(n,e){function t(){let N=!1,j=new gt,X=null,ce=new gt(0,0,0,0);return{setMask:function(re){X!==re&&!N&&(n.colorMask(re,re,re,re),X=re)},setLocked:function(re){N=re},setClear:function(re,oe,Ee,Ge,ne){ne===!0&&(re*=Ge,oe*=Ge,Ee*=Ge),j.set(re,oe,Ee,Ge),ce.equals(j)===!1&&(n.clearColor(re,oe,Ee,Ge),ce.copy(j))},reset:function(){N=!1,X=null,ce.set(-1,0,0,0)}}}function i(){let N=!1,j=!1,X=null,ce=null,re=null;return{setReversed:function(oe){if(j!==oe){let Ee=e.get("EXT_clip_control");oe?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),j=oe;let Ge=re;re=null,this.setClear(Ge)}},getReversed:function(){return j},setTest:function(oe){oe?xe(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(oe){X!==oe&&!N&&(n.depthMask(oe),X=oe)},setFunc:function(oe){if(j&&(oe=fp[oe]),ce!==oe){switch(oe){case Do:n.depthFunc(n.NEVER);break;case No:n.depthFunc(n.ALWAYS);break;case Fo:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Oo:n.depthFunc(n.EQUAL);break;case Uo:n.depthFunc(n.GEQUAL);break;case Bo:n.depthFunc(n.GREATER);break;case zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=oe}},setLocked:function(oe){N=oe},setClear:function(oe){re!==oe&&(re=oe,j&&(oe=1-oe),n.clearDepth(oe))},reset:function(){N=!1,X=null,ce=null,re=null,j=!1}}}function s(){let N=!1,j=null,X=null,ce=null,re=null,oe=null,Ee=null,Ge=null,ne=null;return{setTest:function(Re){N||(Re?xe(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(Re){j!==Re&&!N&&(n.stencilMask(Re),j=Re)},setFunc:function(Re,Ve,fe){(X!==Re||ce!==Ve||re!==fe)&&(n.stencilFunc(Re,Ve,fe),X=Re,ce=Ve,re=fe)},setOp:function(Re,Ve,fe){(oe!==Re||Ee!==Ve||Ge!==fe)&&(n.stencilOp(Re,Ve,fe),oe=Re,Ee=Ve,Ge=fe)},setLocked:function(Re){N=Re},setClear:function(Re){ne!==Re&&(n.clearStencil(Re),ne=Re)},reset:function(){N=!1,j=null,X=null,ce=null,re=null,oe=null,Ee=null,Ge=null,ne=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},p={},u={},d=new WeakMap,m=[],x=null,f=!1,g=null,v=null,w=null,_=null,M=null,S=null,y=null,b=new se(0,0,0),C=0,R=!1,L=null,D=null,B=null,P=null,O=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec($)[1]),H=te>=1):$.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=te>=2);let Z=null,ee={},ye=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),J=new gt().fromArray(ye),ge=new gt().fromArray(Ue);function _e(N,j,X,ce){let re=new Uint8Array(4),oe=n.createTexture();n.bindTexture(N,oe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<X;Ee++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(j+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return oe}let Pe={};Pe[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(n.DEPTH_TEST),a.setFunc(er),ti(!1),xt(wh),xe(n.CULL_FACE),Ht(_n);function xe(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ze(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Et(N,j){return u[N]!==j?(n.bindFramebuffer(N,j),u[N]=j,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=j),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Ie(N,j){let X=m,ce=!1;if(N){X=d.get(j),X===void 0&&(X=[],d.set(j,X));let re=N.textures;if(X.length!==re.length||X[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Ee=re.length;oe<Ee;oe++)X[oe]=n.COLOR_ATTACHMENT0+oe;X.length=re.length,ce=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ce=!0);ce&&n.drawBuffers(X)}function st(N){return x!==N?(n.useProgram(N),x=N,!0):!1}let lt={[ni]:n.FUNC_ADD,[Od]:n.FUNC_SUBTRACT,[Ud]:n.FUNC_REVERSE_SUBTRACT};lt[Bd]=n.MIN,lt[zd]=n.MAX;let Ze={[Hd]:n.ZERO,[zi]:n.ONE,[Vd]:n.SRC_COLOR,[Th]:n.SRC_ALPHA,[Yd]:n.SRC_ALPHA_SATURATE,[qd]:n.DST_COLOR,[Wd]:n.DST_ALPHA,[Gd]:n.ONE_MINUS_SRC_COLOR,[gs]:n.ONE_MINUS_SRC_ALPHA,[Xd]:n.ONE_MINUS_DST_COLOR,[$d]:n.ONE_MINUS_DST_ALPHA,[Zd]:n.CONSTANT_COLOR,[Kd]:n.ONE_MINUS_CONSTANT_COLOR,[Jd]:n.CONSTANT_ALPHA,[jd]:n.ONE_MINUS_CONSTANT_ALPHA};function Ht(N,j,X,ce,re,oe,Ee,Ge,ne,Re){if(N===_n){f===!0&&(ze(n.BLEND),f=!1);return}if(f===!1&&(xe(n.BLEND),f=!0),N!==wn){if(N!==g||Re!==R){if((v!==ni||M!==ni)&&(n.blendEquation(n.FUNC_ADD),v=ni,M=ni),Re)switch(N){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFunc(n.ONE,n.ONE);break;case Sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Le("WebGLState: Invalid blending: ",N);break}else switch(N){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sh:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",N);break}w=null,_=null,S=null,y=null,b.set(0,0,0),C=0,g=N,R=Re}return}re=re||j,oe=oe||X,Ee=Ee||ce,(j!==v||re!==M)&&(n.blendEquationSeparate(lt[j],lt[re]),v=j,M=re),(X!==w||ce!==_||oe!==S||Ee!==y)&&(n.blendFuncSeparate(Ze[X],Ze[ce],Ze[oe],Ze[Ee]),w=X,_=ce,S=oe,y=Ee),(Ge.equals(b)===!1||ne!==C)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ne),b.copy(Ge),C=ne),g=N,R=!1}function Pt(N,j){N.side===It?ze(n.CULL_FACE):xe(n.CULL_FACE);let X=N.side===Tt;j&&(X=!X),ti(X),N.blending===fr&&N.transparent===!1?Ht(_n):Ht(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ce=N.stencilWrite;o.setTest(ce),ce&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function ti(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function xt(N){N!==Dd?(xe(n.CULL_FACE),N!==D&&(N===wh?n.cullFace(n.BACK):N===Nd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),D=N}function $i(N){N!==B&&(H&&n.lineWidth(N),B=N)}function Ot(N,j,X){N?(xe(n.POLYGON_OFFSET_FILL),(P!==j||O!==X)&&(P=j,O=X,a.getReversed()&&(j=-j,X=-X),n.polygonOffset(j,X))):ze(n.POLYGON_OFFSET_FILL)}function bi(N){N?xe(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function _i(N){N===void 0&&(N=n.TEXTURE0+U-1),Z!==N&&(n.activeTexture(N),Z=N)}function wi(N,j,X){X===void 0&&(Z===null?X=n.TEXTURE0+U-1:X=Z);let ce=ee[X];ce===void 0&&(ce={type:void 0,texture:void 0},ee[X]=ce),(ce.type!==N||ce.texture!==j)&&(Z!==X&&(n.activeTexture(X),Z=X),n.bindTexture(N,j||Pe[N]),ce.type=N,ce.texture=j)}function z(){let N=ee[Z];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Si(){try{n.compressedTexImage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function ft(){try{n.compressedTexImage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function mt(){try{n.texSubImage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function pe(){try{n.texSubImage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function kt(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function Fe(){try{n.texStorage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function I(){try{n.texStorage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function E(){try{n.texImage2D(...arguments)}catch(N){Le("WebGLState:",N)}}function G(){try{n.texImage3D(...arguments)}catch(N){Le("WebGLState:",N)}}function ie(N){return p[N]!==void 0?p[N]:n.getParameter(N)}function Q(N,j){p[N]!==j&&(n.pixelStorei(N,j),p[N]=j)}function ae(N){J.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),J.copy(N))}function ue(N){ge.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}function Y(N,j){let X=c.get(j);X===void 0&&(X=new WeakMap,c.set(j,X));let ce=X.get(N);ce===void 0&&(ce=n.getUniformBlockIndex(j,N.name),n.uniformBlockBinding(j,ce,ce),X.set(N,ce))}function K(N,j,X){let re=c.get(j).get(N);l[re]!==X&&(n.bindBufferBase(n.UNIFORM_BUFFER,re,X),l[re]=X)}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},Z=null,ee={},u={},l={},d=new WeakMap,m=[],x=null,f=!1,g=null,v=null,w=null,_=null,M=null,S=null,y=null,b=new se(0,0,0),C=0,R=!1,L=null,D=null,B=null,P=null,O=null,J.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:ze,bindFramebuffer:Et,drawBuffers:Ie,useProgram:st,setBlending:Ht,setMaterial:Pt,setFlipSided:ti,setCullFace:xt,setLineWidth:$i,setPolygonOffset:Ot,setScissorTest:bi,activeTexture:_i,bindTexture:wi,unbindTexture:z,compressedTexImage2D:Si,compressedTexImage3D:ft,texImage2D:E,texImage3D:G,pixelStorei:Q,getParameter:ie,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Fe,texStorage3D:I,texSubImage2D:mt,texSubImage3D:pe,compressedTexSubImage2D:kt,compressedTexSubImage3D:ke,scissor:ae,viewport:ue,reset:le}}function g1(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,p=new Set,u,d=new WeakMap,m=new Set,x=new FinalizationRegistry(I=>m.delete(I)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return f?new OffscreenCanvas(I,E):jr("canvas")}function v(I,E,G){let ie=1,Q=Fe(I);if((Q.width>G||Q.height>G)&&(ie=G/Math.max(Q.width,Q.height)),ie<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ae=Math.floor(ie*Q.width),ue=Math.floor(ie*Q.height);u===void 0&&(u=g(ae,ue));let Y=E?g(ae,ue):u;return Y.width=ae,Y.height=ue,Y.getContext("2d").drawImage(I,0,0,ae,ue),Ce("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+ue+")."),Y}else return"data"in I&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function w(I){return I.generateMipmaps}function _(I){n.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(I,E,G,ie,Q,ae=!1){if(I!==null){if(n[I]!==void 0)return n[I];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue;ie&&(ue=e.get("EXT_texture_norm16"),ue||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=E;if(E===n.RED&&(G===n.FLOAT&&(Y=n.R32F),G===n.HALF_FLOAT&&(Y=n.R16F),G===n.UNSIGNED_BYTE&&(Y=n.R8),G===n.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),G===n.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.R8UI),G===n.UNSIGNED_SHORT&&(Y=n.R16UI),G===n.UNSIGNED_INT&&(Y=n.R32UI),G===n.BYTE&&(Y=n.R8I),G===n.SHORT&&(Y=n.R16I),G===n.INT&&(Y=n.R32I)),E===n.RG&&(G===n.FLOAT&&(Y=n.RG32F),G===n.HALF_FLOAT&&(Y=n.RG16F),G===n.UNSIGNED_BYTE&&(Y=n.RG8),G===n.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),G===n.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RG8UI),G===n.UNSIGNED_SHORT&&(Y=n.RG16UI),G===n.UNSIGNED_INT&&(Y=n.RG32UI),G===n.BYTE&&(Y=n.RG8I),G===n.SHORT&&(Y=n.RG16I),G===n.INT&&(Y=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),G===n.UNSIGNED_INT&&(Y=n.RGB32UI),G===n.BYTE&&(Y=n.RGB8I),G===n.SHORT&&(Y=n.RGB16I),G===n.INT&&(Y=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),G===n.UNSIGNED_INT&&(Y=n.RGBA32UI),G===n.BYTE&&(Y=n.RGBA8I),G===n.SHORT&&(Y=n.RGBA16I),G===n.INT&&(Y=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),G===n.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),E===n.RGBA){let K=ae?Jr:qe.getTransfer(Q);G===n.FLOAT&&(Y=n.RGBA32F),G===n.HALF_FLOAT&&(Y=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Y=K===tt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),G===n.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(I,E){let G;return I?E===null||E===Hi||E===ys?G=n.DEPTH24_STENCIL8:E===Ci?G=n.DEPTH32F_STENCIL8:E===gr&&(G=n.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===ys?G=n.DEPTH_COMPONENT24:E===Ci?G=n.DEPTH_COMPONENT32F:E===gr&&(G=n.DEPTH_COMPONENT16),G}function b(I,E){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==wt&&I.minFilter!==St?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function C(I){let E=new WeakRef(I);i.get(I).__ref=E,m.add(E),x.register(I,E,E)}function R(I){let E=i.get(I).__ref;E!==void 0&&(m.delete(E),x.unregister(E))}function L(I){B(I.target)}function D(I){P(I.target)}function B(I){I.removeEventListener("dispose",L),R(I),U(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&p.delete(I)}function P(I){I.removeEventListener("dispose",D),R(I),te(I)}function O(){for(let I of m){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?P(E):B(E))}m.clear(),p.clear()}function U(I){let E=i.get(I);if(E.__webglInit===void 0)return;let G=I.source,ie=d.get(G);if(ie){let Q=ie[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&H(I),Object.keys(ie).length===0&&d.delete(G)}i.remove(I)}function H(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let G=I.source,ie=d.get(G);delete ie[E.__cacheKey],a.memory.textures--}function te(I){let E=i.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let G=I.depthTexture;if(G&&G.renderTarget===I&&B(G),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ae=0;ae<E.__webglFramebuffer[Q].length;ae++)n.deleteFramebuffer(E.__webglFramebuffer[Q][ae]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ie=I.textures;for(let Q=0,ae=ie.length;Q<ae;Q++){let ue=i.get(ie[Q]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(ie[Q])}i.remove(I)}let $=0;function Z(){$=0}function ee(){return $}function ye(I){$=I}function Ue(){let I=$;return I>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,I}function J(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ge(I,E){let G=i.get(I);if(I.isVideoTexture&&kt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let ie=I.image;if(ie===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(G,I,E);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function _e(I,E){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Pt(G,I,E);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function Pe(I,E){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Pt(G,I,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function xe(I,E){let G=i.get(I);if(I.version>0&&G.__version!==I.version){ti(G,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}let ze={[tr]:n.REPEAT,[Xi]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},Et={[wt]:n.NEAREST,[tp]:n.NEAREST_MIPMAP_NEAREST,[Ma]:n.NEAREST_MIPMAP_LINEAR,[St]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[Sn]:n.LINEAR_MIPMAP_LINEAR},Ie={[rp]:n.NEVER,[Fh]:n.ALWAYS,[ap]:n.LESS,[Dh]:n.LEQUAL,[op]:n.EQUAL,[Nh]:n.GEQUAL,[lp]:n.GREATER,[cp]:n.NOTEQUAL};function st(I,E){if(E.type===Ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===St||E.magFilter===fl||E.magFilter===Ma||E.magFilter===Sn||E.minFilter===St||E.minFilter===fl||E.minFilter===Ma||E.minFilter===Sn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ze[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ze[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ze[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Et[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wt||E.minFilter!==Ma&&E.minFilter!==Sn||E.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function lt(I,E){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",L),C(E));let ie=E.source,Q=d.get(ie);Q===void 0&&(Q={},d.set(ie,Q));let ae=J(E);if(ae!==I.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[ae].usedTimes++;let ue=Q[I.__cacheKey];ue!==void 0&&(Q[I.__cacheKey].usedTimes--,ue.usedTimes===0&&H(E)),I.__cacheKey=ae,I.__webglTexture=Q[ae].texture}return G}function Ze(I,E,G){return Math.floor(Math.floor(I/G)/E)}function Ht(I,E,G,ie){let ae=I.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,ie,E.data);else{ae.sort((N,j)=>N.start-j.start);let ue=0;for(let N=1;N<ae.length;N++){let j=ae[ue],X=ae[N],ce=j.start+j.count,re=Ze(X.start,E.width,4),oe=Ze(j.start,E.width,4);X.start<=ce+1&&re===oe&&Ze(X.start+X.count-1,E.width,4)===re?j.count=Math.max(j.count,X.start+X.count-j.start):(++ue,ae[ue]=X)}ae.length=ue+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let N=0,j=ae.length;N<j;N++){let X=ae[N],ce=Math.floor(X.start/4),re=Math.ceil(X.count/4),oe=ce%E.width,Ee=Math.floor(ce/E.width),Ge=re,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ee),t.texSubImage2D(n.TEXTURE_2D,0,oe,Ee,Ge,ne,G,ie,E.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Pt(I,E,G){let ie=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=n.TEXTURE_3D);let Q=lt(I,E),ae=E.source;t.bindTexture(ie,I.__webglTexture,n.TEXTURE0+G);let ue=i.get(ae);if(ae.version!==ue.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ne=qe.getPrimaries(qe.workingColorSpace),Re=E.colorSpace===Tn?null:qe.getPrimaries(E.colorSpace),Ve=E.colorSpace===Tn||ne===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let K=v(E.image,!1,s.maxTextureSize);K=ke(E,K);let le=r.convert(E.format,E.colorSpace),N=r.convert(E.type),j=S(E.internalFormat,le,N,E.normalized,E.colorSpace,E.isVideoTexture);st(ie,E);let X,ce=E.mipmaps,re=E.isVideoTexture!==!0,oe=ue.__version===void 0||Q===!0,Ee=ae.dataReady,Ge=b(E,K);if(E.isDepthTexture)j=y(E.format===Mn,E.type),oe&&(re?t.texStorage2D(n.TEXTURE_2D,1,j,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,j,K.width,K.height,0,le,N,null));else if(E.isDataTexture)if(ce.length>0){re&&oe&&t.texStorage2D(n.TEXTURE_2D,Ge,j,ce[0].width,ce[0].height);for(let ne=0,Re=ce.length;ne<Re;ne++)X=ce[ne],re?Ee&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,X.width,X.height,le,N,X.data):t.texImage2D(n.TEXTURE_2D,ne,j,X.width,X.height,0,le,N,X.data);E.generateMipmaps=!1}else re?(oe&&t.texStorage2D(n.TEXTURE_2D,Ge,j,K.width,K.height),Ee&&Ht(E,K,le,N)):t.texImage2D(n.TEXTURE_2D,0,j,K.width,K.height,0,le,N,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){re&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,j,ce[0].width,ce[0].height,K.depth);for(let ne=0,Re=ce.length;ne<Re;ne++)if(X=ce[ne],E.format!==ri)if(le!==null)if(re){if(Ee)if(E.layerUpdates.size>0){let Ve=Gh(X.width,X.height,E.format,E.type);for(let fe of E.layerUpdates){let rt=X.data.subarray(fe*Ve/X.data.BYTES_PER_ELEMENT,(fe+1)*Ve/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,fe,X.width,X.height,1,le,rt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,le,X.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,j,X.width,X.height,K.depth,0,X.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,X.width,X.height,K.depth,le,N,X.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,j,X.width,X.height,K.depth,0,le,N,X.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{re&&oe&&t.texStorage2D(n.TEXTURE_2D,Ge,j,ce[0].width,ce[0].height);for(let ne=0,Re=ce.length;ne<Re;ne++)X=ce[ne],E.format!==ri?le!==null?re?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,X.width,X.height,le,X.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,j,X.width,X.height,0,X.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Ee&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,X.width,X.height,le,N,X.data):t.texImage2D(n.TEXTURE_2D,ne,j,X.width,X.height,0,le,N,X.data)}else if(E.isDataArrayTexture)if(re){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,j,K.width,K.height,K.depth),Ee)if(E.layerUpdates.size>0){let ne=Gh(K.width,K.height,E.format,E.type);for(let Re of E.layerUpdates){let Ve=K.data.subarray(Re*ne/K.data.BYTES_PER_ELEMENT,(Re+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,K.width,K.height,1,le,N,Ve)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,le,N,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,K.width,K.height,K.depth,0,le,N,K.data);else if(E.isData3DTexture)re?(oe&&t.texStorage3D(n.TEXTURE_3D,Ge,j,K.width,K.height,K.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,le,N,K.data)):t.texImage3D(n.TEXTURE_3D,0,j,K.width,K.height,K.depth,0,le,N,K.data);else if(E.isFramebufferTexture){if(oe)if(re)t.texStorage2D(n.TEXTURE_2D,Ge,j,K.width,K.height);else{let ne=K.width,Re=K.height;for(let Ve=0;Ve<Ge;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,j,ne,Re,0,le,N,null),ne>>=1,Re>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),p.add(E),ne.onpaint=Re=>{let Ve=Re.changedElements;for(let fe of p)Ve.includes(fe.image)&&(fe.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let Ve=n.RGBA,fe=n.RGBA,rt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ve,fe,rt,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&oe){let ne=Fe(ce[0]);t.texStorage2D(n.TEXTURE_2D,Ge,j,ne.width,ne.height)}for(let ne=0,Re=ce.length;ne<Re;ne++)X=ce[ne],re?Ee&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,le,N,X):t.texImage2D(n.TEXTURE_2D,ne,j,le,N,X);E.generateMipmaps=!1}else if(re){if(oe){let ne=Fe(K);t.texStorage2D(n.TEXTURE_2D,Ge,j,ne.width,ne.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,N,K)}else t.texImage2D(n.TEXTURE_2D,0,j,le,N,K);w(E)&&E.mipmapsAutoUpdate===!0&&_(ie),ue.__version=ae.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ti(I,E,G){if(E.image.length!==6)return;let ie=lt(I,E),Q=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+G);let ae=i.get(Q);if(Q.version!==ae.__version||ie===!0){t.activeTexture(n.TEXTURE0+G);let ue=qe.getPrimaries(qe.workingColorSpace),Y=E.colorSpace===Tn?null:qe.getPrimaries(E.colorSpace),K=E.colorSpace===Tn||ue===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let le=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,j=[];for(let fe=0;fe<6;fe++)!le&&!N?j[fe]=v(E.image[fe],!0,s.maxCubemapSize):j[fe]=N?E.image[fe].image:E.image[fe],j[fe]=ke(E,j[fe]);let X=j[0],ce=r.convert(E.format,E.colorSpace),re=r.convert(E.type),oe=S(E.internalFormat,ce,re,E.normalized,E.colorSpace),Ee=E.isVideoTexture!==!0,Ge=ae.__version===void 0||ie===!0,ne=Q.dataReady,Re=b(E,X);st(n.TEXTURE_CUBE_MAP,E);let Ve;if(E.isDepthTexture){if(oe=y(E.format===Mn,E.type),Ge)if(Ee)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,oe,X.width,X.height);else for(let fe=0;fe<6;fe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,oe,X.width,X.height,0,ce,re,null)}else if(le){Ee&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,oe,X.width,X.height);for(let fe=0;fe<6;fe++){Ve=j[fe].mipmaps;for(let rt=0;rt<Ve.length;rt++){let Ut=Ve[rt];E.format!==ri?ce!==null?Ee?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,rt,0,0,Ut.width,Ut.height,ce,Ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,rt,oe,Ut.width,Ut.height,0,Ut.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,rt,0,0,Ut.width,Ut.height,ce,re,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,rt,oe,Ut.width,Ut.height,0,ce,re,Ut.data)}}}else{if(Ve=E.mipmaps,Ee&&Ge){Ve.length>0&&Re++;let fe=Fe(j[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,oe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(N){Ee?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,j[fe].width,j[fe].height,ce,re,j[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,oe,j[fe].width,j[fe].height,0,ce,re,j[fe].data);for(let rt=0;rt<Ve.length;rt++){let Dn=Ve[rt].image[fe].image;Ee?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,rt+1,0,0,Dn.width,Dn.height,ce,re,Dn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,rt+1,oe,Dn.width,Dn.height,0,ce,re,Dn.data)}}else{Ee?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ce,re,j[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,oe,ce,re,j[fe]);for(let rt=0;rt<Ve.length;rt++){let Ut=Ve[rt];Ee?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,rt+1,0,0,ce,re,Ut.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,rt+1,oe,ce,re,Ut.image[fe])}}}w(E)&&E.mipmapsAutoUpdate===!0&&_(n.TEXTURE_CUBE_MAP),ae.__version=Q.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function xt(I,E,G,ie,Q,ae){let ue=r.convert(G.format,G.colorSpace),Y=r.convert(G.type),K=S(G.internalFormat,ue,Y,G.normalized,G.colorSpace),le=i.get(E),N=i.get(G);if(N.__renderTarget=E,!le.__hasExternalTextures){let j=Math.max(1,E.width>>ae),X=Math.max(1,E.height>>ae);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ae,K,j,X,E.depth,0,ue,Y,null):t.texImage2D(Q,ae,K,j,X,0,ue,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),pe(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,Q,N.__webglTexture,0,mt(E)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,Q,N.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $i(I,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let ie=E.depthTexture,Q=ie&&ie.isDepthTexture?ie.type:null,ae=y(E.stencilBuffer,Q),ue=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(E),ae,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(E),ae,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,I)}else{let ie=E.textures;for(let Q=0;Q<ie.length;Q++){let ae=ie[Q],ue=r.convert(ae.format,ae.colorSpace),Y=r.convert(ae.type),K=S(ae.internalFormat,ue,Y,ae.normalized,ae.colorSpace);pe(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(E),K,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(E),K,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,K,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(I,E,G){let ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(E.depthTexture);Q.__renderTarget=E;let ae=ie?E.depthTexture.image[0]:E.depthTexture.image;(!Q.__webglTexture||ae.width!==E.width||ae.height!==E.height)&&(ae.width=E.width,ae.height=E.height,E.depthTexture.needsUpdate=!0),ie?xe(E.depthTexture,0):ge(E.depthTexture,0);let ue=Q.__webglTexture,Y=mt(E),K=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,le=E.depthTexture.format===Mn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===mn)pe(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,K,ue,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,le,K,ue,0);else if(E.depthTexture.format===Mn)pe(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,K,ue,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,le,K,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bi(I){let E=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let ie=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){let Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",Q)};ie.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=ie}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ie=0;ie<6;ie++)Ot(E.__webglFramebuffer[ie],I,ie);else I.texture.mipmaps.length>0?Ot(E.__webglFramebuffer[0],I,0):Ot(E.__webglFramebuffer,I,0);else if(G){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=n.createRenderbuffer(),$i(E.__webglDepthbuffer[ie],I,!1);else{let Q=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ae)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),$i(E.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _i(I,E,G){let ie=i.get(I);E!==void 0&&xt(ie.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&bi(I)}function wi(I){let E=I.texture,G=i.get(I),ie=i.get(E);I.addEventListener("dispose",D),C(I);let Q=I.textures,ae=I.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=E.version,a.memory.textures++),ae){G.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(E.mipmaps.length>0){G.__webglFramebuffer[Y]=[];for(let K=0;K<E.mipmaps.length;K++)G.__webglFramebuffer[Y][K]=n.createFramebuffer()}else G.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Y=0;Y<E.mipmaps.length;Y++)G.__webglFramebuffer[Y]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ue)for(let Y=0,K=Q.length;Y<K;Y++){let le=i.get(Q[Y]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&pe(I)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){let K=Q[Y];G.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Y]);let le=r.convert(K.format,K.colorSpace),N=r.convert(K.type),j=S(K.internalFormat,le,N,K.normalized,K.colorSpace,I.isXRRenderTarget===!0),X=mt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,X,j,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,G.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),$i(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),st(n.TEXTURE_CUBE_MAP,E);for(let Y=0;Y<6;Y++)if(E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)xt(G.__webglFramebuffer[Y][K],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else xt(G.__webglFramebuffer[Y],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);w(E)?_(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Y=0,K=Q.length;Y<K;Y++){let le=Q[Y],N=i.get(le),j=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(j=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,N.__webglTexture),st(j,le),xt(G.__webglFramebuffer,I,le,n.COLOR_ATTACHMENT0+Y,j,0),w(le)&&_(j)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Y=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,ie.__webglTexture),st(Y,E),E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)xt(G.__webglFramebuffer[K],I,E,n.COLOR_ATTACHMENT0,Y,K);else xt(G.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Y,0);w(E)?_(Y):E.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&bi(I)}function z(I){let E=I.textures;for(let G=0,ie=E.length;G<ie;G++){let Q=E[G];if(w(Q)&&Q.mipmapsAutoUpdate===!0){let ae=M(I),ue=i.get(Q).__webglTexture;t.bindTexture(ae,ue),_(ae),t.unbindTexture()}}}let Si=[];function ft(I){if(I.samples>0){if(pe(I)===!1){let E=I.textures,G=I.width,ie=I.height,Q=n.COLOR_BUFFER_BIT,ae=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(I),Y=E.length>1;if(Y)for(let le=0;le<E.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<E.length;le++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let N=i.get(E[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,G,ie,0,0,G,ie,Q,n.NEAREST),l===!0&&(Si.length=0,Si.push(n.COLOR_ATTACHMENT0+le),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Si.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Si))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<E.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let N=i.get(E[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function mt(I){return Math.min(s.maxSamples,I.samples)}function pe(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(I){let E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function ke(I,E){let G=I.colorSpace,ie=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Kr&&G!==Tn&&(qe.getTransfer(G)===tt?(ie!==ri||Q!==si)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",G)),E}function Fe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=Z,this.getTextureUnits=ee,this.setTextureUnits=ye,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=Pe,this.setTextureCube=xe,this.rebindTextures=_i,this.setupRenderTarget=wi,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=bi,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pe,this.dispose=O}function x1(n,e){function t(i,s=Tn){let r,a=qe.getTransfer(s);if(i===si)return n.UNSIGNED_BYTE;if(i===gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rh)return n.BYTE;if(i===Ch)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===ml)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===yt)return n.HALF_FLOAT;if(i===Ih)return n.ALPHA;if(i===Lh)return n.RGB;if(i===ri)return n.RGBA;if(i===mn)return n.DEPTH_COMPONENT;if(i===Mn)return n.DEPTH_STENCIL;if(i===xr)return n.RED;if(i===vl)return n.RED_INTEGER;if(i===Zn)return n.RG;if(i===yl)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===Ta||i===Ea||i===Aa||i===Ra)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===wl||i===Sl||i===Ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===El||i===Al||i===Rl||i===Cl||i===Ca||i===Pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===El)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Al)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rl)return r.COMPRESSED_R11_EAC;if(i===Cl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ca)return r.COMPRESSED_RG11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kl||i===Il||i===Ll||i===Dl||i===Nl||i===Fl||i===Ol||i===Ul||i===Bl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===kl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ll)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ol)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ul)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$l||i===ql||i===Xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$l)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yl||i===Zl||i===Pa||i===Kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Xe({vertexShader:v1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends Yi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,m=null,x=typeof XRWebGLBinding<"u",f=new nu,g={},v=t.getContextAttributes(),w=null,_=null,M=[],S=[],y=new Me,b=null,C=null,R=new Gt;R.viewport=new gt;let L=new Gt;L.viewport=new gt;let D=[R,L],B=new hl,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=M[J];return ge===void 0&&(ge=new or,M[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=M[J];return ge===void 0&&(ge=new or,M[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=M[J];return ge===void 0&&(ge=new or,M[J]=ge),ge.getHandSpace()};function U(J){let ge=S.indexOf(J.inputSource);if(ge===-1)return;let _e=M[ge];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||a),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",te);for(let J=0;J<M.length;J++){let ge=S[J];ge!==null&&(S[J]=null,M[J].disconnect(ge))}P=null,O=null,f.reset();for(let J in g)delete g[J];if(e.setRenderTarget(w),d=null,u=null,p=null,s=null,_=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),C!==null){let J=C.camera;J.fov=C.fov,J.zoom=C.zoom,J.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?Mn:mn,Pe=v.stencil?ys:Hi);let ze={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(ze),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Mt(u.textureWidth,u.textureHeight,{format:ri,type:si,depthTexture:new bn(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Mt(d.framebufferWidth,d.framebufferHeight,{format:ri,type:si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function te(J){for(let ge=0;ge<J.removed.length;ge++){let _e=J.removed[ge],Pe=S.indexOf(_e);Pe>=0&&(S[Pe]=null,M[Pe].disconnect(_e))}for(let ge=0;ge<J.added.length;ge++){let _e=J.added[ge],Pe=S.indexOf(_e);if(Pe===-1){for(let ze=0;ze<M.length;ze++)if(ze>=S.length){S.push(_e),Pe=ze;break}else if(S[ze]===null){S[ze]=_e,Pe=ze;break}if(Pe===-1)break}let xe=M[Pe];xe&&xe.connect(_e)}}function $(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ge=J.near,_e=J.far;f.texture!==null&&(f.depthNear>0&&(ge=f.depthNear),f.depthFar>0&&(_e=f.depthFar)),B.near=L.near=R.near=ge,B.far=L.far=R.far=_e,(P!==B.near||O!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,O=B.far),B.layers.mask=J.layers.mask|6,R.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;let Pe=J.parent,xe=B.cameras;$(B,Pe);for(let ze=0;ze<xe.length;ze++)$(xe[ze],Pe);B.projectionMatrix.copy(R.projectionMatrix),B.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&J.isPerspectiveCamera&&(C={camera:J,fov:J.fov,zoom:J.zoom}),Z(J,B,Pe)};function Z(J,ge,_e){_e===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Go*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(B)},this.getCameraTexture=function(J){return g[J]};let ee=null;function ye(J,ge){if(h=ge.getViewerPose(c||a),m=ge,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Pe=!1;_e.length!==B.cameras.length&&(B.cameras.length=0,Pe=!0);for(let Ie=0;Ie<_e.length;Ie++){let st=_e[Ie],lt=null;if(d!==null)lt=d.getViewport(st);else{let Ht=p.getViewSubImage(u,st);lt=Ht.viewport,Ie===0&&(e.setRenderTargetTextures(_,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(_))}let Ze=D[Ie];Ze===void 0&&(Ze=new Gt,Ze.layers.enable(Ie),Ze.viewport=new gt,D[Ie]=Ze),Ze.matrix.fromArray(st.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(st.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(lt.x,lt.y,lt.width,lt.height),Ie===0&&(B.matrix.copy(Ze.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pe===!0&&B.cameras.push(Ze)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=i.getBinding();let Ie=p.getDepthInformation(_e[0]);Ie&&Ie.isValid&&Ie.texture&&f.init(Ie,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),p=i.getBinding();for(let Ie=0;Ie<_e.length;Ie++){let st=_e[Ie].camera;if(st){let lt=g[st];lt||(lt=new oa,g[st]=lt);let Ze=p.getCameraImage(st);lt.sourceTexture=Ze}}}}for(let _e=0;_e<M.length;_e++){let Pe=S[_e],xe=M[_e];Pe!==null&&xe!==void 0&&xe.update(Pe,ge,c||a)}ee&&ee(J,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),m=null}let Ue=new zp;Ue.setAnimationLoop(ye),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}},b1=new Oe,Kp=new Ne;Kp.set(-1,0,0,0,1,0,0,0,1);function _1(n,e){function t(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function i(f,g){g.color.getRGB(f.fogColor.value,zh(n)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,v,w,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(f,g):g.isMeshLambertMaterial?(r(f,g),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(f,g),p(f,g)):g.isMeshPhongMaterial?(r(f,g),h(f,g),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(f,g),u(f,g),g.isMeshPhysicalMaterial&&d(f,g,_)):g.isMeshMatcapMaterial?(r(f,g),m(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),x(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(a(f,g),g.isLineDashedMaterial&&o(f,g)):g.isPointsMaterial?l(f,g,v,w):g.isSpriteMaterial?c(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,t(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Tt&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,t(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Tt&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,t(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,t(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);let v=e.get(g),w=v.envMap,_=v.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Kp),f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,f.aoMapTransform))}function a(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform))}function o(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function l(f,g,v,w){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*v,f.scale.value=w*.5,g.map&&(f.map.value=g.map,t(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function c(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,t(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,t(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function h(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function p(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function u(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function d(f,g,v){f.ior.value=g.ior,g.diffuseRoughness>0&&(f.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Tt&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.retroreflectivity>0&&(f.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,g){g.matcap&&(f.matcap.value=g.matcap)}function x(f,g){let v=e.get(g).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function w1(n,e,t,i){let s={},r={};function a(v,w){let _=w.program;i.uniformBlockBinding(v,_,s[v.id])}function o(v,w){let _=s[v.id];_===void 0&&(m(v),_=l(v),s[v.id]=_,v.addEventListener("dispose",f));let M=w.program;i.updateUBOMapping(v,M);let S=e.render.frame;r[v.id]!==S&&(c(v),r[v.id]=S)}function l(v){let w=n.createBuffer(),_=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,_,M),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],_=v.uniforms,M=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,y=_.length;S<y;S++){let b=_[S];if(Array.isArray(b))for(let C=0,R=b.length;C<R;C++)h(b[C],S,C,M);else h(b,S,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,w,_,M){if(u(v,w,_,M)===!0){let S=v.__offset,y=v.value;if(Array.isArray(y)){let b=0;for(let C=0;C<y.length;C++){let R=y[C],L=x(R,!0);p(R,v.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else p(y,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,v.__data)}}function p(v,w,_){typeof v=="number"||typeof v=="boolean"?w[_]=v:v.isMatrix3?(w[_]=v.elements[0],w[_+1]=v.elements[1],w[_+2]=v.elements[2],w[_+3]=0,w[_+4]=v.elements[3],w[_+5]=v.elements[4],w[_+6]=v.elements[5],w[_+7]=0,w[_+8]=v.elements[6],w[_+9]=v.elements[7],w[_+10]=v.elements[8],w[_+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-_),_):v.toArray(w,_)}function u(v,w,_,M){let S=v.value,y=w+"_"+_;if(Array.isArray(S)){M[y]===void 0&&(M[y]=[]);let b=M[y],C=!1;for(let R=0;R<S.length;R++)d(S[R],b,R)===!0&&(C=!0);return C}return d(S,M,y)}function d(v,w,_){if(w[_]===void 0)return typeof v=="number"||typeof v=="boolean"?w[_]=v:ArrayBuffer.isView(v)?w[_]=v.slice():w[_]=v.clone(),!0;{let M=w[_];if(typeof v=="number"||typeof v=="boolean"){if(M!==v)return w[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(M.equals(v)===!1)return M.copy(v),!0}}return!1}function m(v){let w=v.uniforms,_=0,M=16;for(let y=0,b=w.length;y<b;y++){let C=Array.isArray(w[y])?w[y]:[w[y]];for(let R=0,L=C.length;R<L;R++){let D=C[R],B=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(w[y])||Array.isArray(D.value),O=_;for(let H=0,te=B.length;H<te;H++){let $=B[H],Z=x($,P),ee=_%M,ye=ee%Z.boundary,Ue=ee+ye;_+=ye,Ue!==0&&M-Ue<Z.storage&&(_+=M-Ue),H===0&&(O=_),_+=Z.storage}let U=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new U((_-O)/Float32Array.BYTES_PER_ELEMENT),D.__offset=O}}let S=_%M;return S>0&&(_+=M-S),v.__size=_,v.__cache={},this}function x(v,w){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function f(v){let w=v.target;w.removeEventListener("dispose",f),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:g}}var S1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function M1(){return ji===null&&(ji=new Vn(S1,16,16,Zn,yt),ji.name="DFG_LUT",ji.minFilter=St,ji.magFilter=St,ji.wrapS=Xi,ji.wrapT=Xi,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var ec=class{constructor(e={}){let{canvas:t=up(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=si}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let x=d,f=new Set([bl,yl,vl]),g=new Set([si,Hi,gr,ys,gl,xl]),v=new Uint32Array(4),w=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},M=null,S=null,y=[],b=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,D=null,B=null,P=null,O=null;this._outputColorSpace=pi;let U=0,H=0,te=null,$=-1,Z=null,ee=new gt,ye=new gt,Ue=null,J=new se(0),ge=0,_e=t.width,Pe=t.height,xe=1,ze=null,Et=null,Ie=new gt(0,0,_e,Pe),st=new gt(0,0,_e,Pe),lt=!1,Ze=new Gn,Ht=new qo,Pt=!1,ti=!1,xt=new Oe,$i=new k,Ot=new gt,bi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_i=!1;function wi(){return te===null?xe:1}let z=i;function Si(A,F){return t.getContext(A,F)}let ft,mt,pe,kt,ke,Fe,I,E,G,ie,Q,ae,ue,Y,K,le,N,j,X,ce,re,oe,Ee;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",fe,!1),z===null){let F="webgl2";if(z=Si(F,A),z===null)throw Si(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(A){throw t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Le("WebGLRenderer: "+A.message),A}function Ge(){ft=new Nv(z),ft.init(),re=new x1(z,ft),mt=new Mv(z,ft,e,re),pe=new m1(z,ft),mt.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),B=z.createFramebuffer(),P=z.createFramebuffer(),O=z.createFramebuffer(),kt=new Uv(z),ke=new t1,Fe=new g1(z,ft,pe,ke,mt,re,kt),I=new Dv(R),E=new zm(z),oe=new wv(z,E),G=new Fv(z,E,kt,oe),ie=new zv(z,G,E,oe,kt),j=new Bv(z,mt,Fe),K=new Tv(ke),Q=new e1(R,I,ft,mt,oe,K),ae=new _1(R,ke),ue=new n1,Y=new c1(ft),N=new _v(R,I,pe,ie,m,l),le=new f1(R,ie,mt),Ee=new w1(z,kt,mt,pe),X=new Sv(z,ft,kt),ce=new Ov(z,ft,kt),kt.programs=Q.programs,R.capabilities=mt,R.extensions=ft,R.properties=ke,R.renderLists=ue,R.shadowMap=le,R.state=pe,R.info=kt}x!==si&&(C=new Vv(x,t.width,t.height,o,s,r));let ne=new su(R,z);this.xr=ne,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(A){A!==void 0&&(xe=A,this.setSize(_e,Pe,!1))},this.getSize=function(A){return A.set(_e,Pe)},this.setSize=function(A,F,q=!0){if(ne.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=A,Pe=F,t.width=Math.floor(A*xe),t.height=Math.floor(F*xe),q===!0&&(t.style.width=A+"px",t.style.height=F+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(_e*xe,Pe*xe).floor()},this.setDrawingBufferSize=function(A,F,q){_e=A,Pe=F,xe=q,t.width=Math.floor(A*q),t.height=Math.floor(F*q),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(x===si){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(Ie)},this.setViewport=function(A,F,q,V){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,F,q,V),pe.viewport(ee.copy(Ie).multiplyScalar(wi()).round())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,F,q,V){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,F,q,V),pe.scissor(ye.copy(st).multiplyScalar(wi()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){pe.setScissorTest(lt=A)},this.setOpaqueSort=function(A){ze=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,q=!0){let V=0;if(A){let W=!1;if(te!==null){let de=te.texture.format;W=f.has(de)}if(W){let de=te.texture.type,be=g.has(de),he=N.getClearColor(),ve=N.getClearAlpha(),Te=he.r,Be=he.g,Ke=he.b;be?(v[0]=Te,v[1]=Be,v[2]=Ke,v[3]=ve,z.clearBufferuiv(z.COLOR,0,v)):(w[0]=Te,w[1]=Be,w[2]=Ke,w[3]=ve,z.clearBufferiv(z.COLOR,0,w))}else V|=z.COLOR_BUFFER_BIT}F&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),N.dispose(),ue.dispose(),Y.dispose(),Fe.dispose(),ke.dispose(),I.dispose(),ie.dispose(),G.dispose(),oe.dispose(),Ee.dispose(),Q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Gu),ne.removeEventListener("sessionend",Wu),ss.stop()};function Re(A){A.preventDefault(),Uh("WebGLRenderer: Context Lost."),L=!0}function Ve(){Uh("WebGLRenderer: Context Restored."),L=!1;let A=kt.autoReset,F=le.enabled,q=le.autoUpdate,V=le.needsUpdate,W=le.type;Ge(),kt.autoReset=A,le.enabled=F,le.autoUpdate=q,le.needsUpdate=V,le.type=W}function fe(A){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){let F=A.target;F.removeEventListener("dispose",rt),Ut(F)}function Ut(A){Dn(A),ke.remove(A)}function Dn(A){let F=ke.get(A).programs;F!==void 0&&(F.forEach(function(q){Q.releaseProgram(q)}),A.isShaderMaterial&&Q.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,q,V,W,de){F===null&&(F=bi);let be=W.isMesh&&W.matrixWorld.determinantAffine()<0,he=$0(A,F,q,V,W);pe.setMaterial(V,be);let ve=q.index,Te=1;if(V.wireframe===!0){if(ve=G.getWireframeAttribute(q),ve===void 0)return;Te=2}let Be=q.drawRange,Ke=q.attributes.position,we=Be.start*Te,Je=(Be.start+Be.count)*Te;de!==null&&(we=Math.max(we,de.start*Te),Je=Math.min(Je,(de.start+de.count)*Te)),ve!==null?(we=Math.max(we,0),Je=Math.min(Je,ve.count)):Ke!=null&&(we=Math.max(we,0),Je=Math.min(Je,Ke.count));let At=Je-we;if(At<0||At===1/0)return;oe.setup(W,V,he,q,ve);let ut,ct=X;if(ve!==null&&(ut=E.get(ve),ct=ce,ct.setIndex(ut)),W.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*wi()),ct.setMode(z.LINES)):ct.setMode(z.TRIANGLES);else if(W.isLine){let Wt=V.linewidth;Wt===void 0&&(Wt=1),pe.setLineWidth(Wt*wi()),W.isLineSegments?ct.setMode(z.LINES):W.isLineLoop?ct.setMode(z.LINE_LOOP):ct.setMode(z.LINE_STRIP)}else W.isPoints?ct.setMode(z.POINTS):W.isSprite&&ct.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Wt=W._multiDrawStarts,Se=W._multiDrawCounts,Kt=W._multiDrawCount,it=ve?E.get(ve).bytesPerElement:1,rs=ke.get(V).currentProgram.getUniforms();for(let $t=0;$t<Kt;$t++)rs.setValue(z,"_gl_DrawID",$t),ct.render(Wt[$t]/it,Se[$t])}else if(W.isInstancedMesh)ct.renderInstances(we,At,W.count);else if(q.isInstancedBufferGeometry){let Wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Se=Math.min(q.instanceCount,Wt);ct.renderInstances(we,At,Se)}else ct.render(we,At)};function Vu(A,F,q,V){D!==null&&A.isNodeMaterial&&D.setObject(V,A),Pt===!0&&K.setState(A,q,!1),A.transparent===!0&&A.side===It&&A.forceSinglePass===!1?(A.side=Tt,A.needsUpdate=!0,zr(A,F,V),A.side=Yn,A.needsUpdate=!0,zr(A,F,V),A.side=It):zr(A,F,V)}this.compile=function(A,F,q=null){q===null&&(q=A),D!==null&&D.renderStart(A,F,q),S=Y.get(q),S.init(F),b.push(S),q.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),A!==q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),ti=this.localClippingEnabled,Pt=K.init(this.clippingPlanes,ti),Pt===!0&&K.setGlobalState(this.clippingPlanes,F),D!==null&&le.render(S.state.shadowsArray,q,F);let V=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let de=W.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){let he=de[be];Vu(he,q,F,W),V.add(he)}else Vu(de,q,F,W),V.add(de)}),S=b.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(A,F,q=null){let V=this.compile(A,F,q);return new Promise(W=>{function de(){if(V.forEach(function(be){let ve=ke.get(be).currentProgram;(ve===void 0||ve.isReady())&&V.delete(be)}),V.size===0){W(A);return}setTimeout(de,10)}ft.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Hc=null;function G0(A){Hc&&Hc(A)}function Gu(){ss.stop()}function Wu(){ss.start()}let ss=new zp;ss.setAnimationLoop(G0),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(A){Hc=A,ne.setAnimationLoop(A),A===null?ss.stop():ss.start()},ne.addEventListener("sessionstart",Gu),ne.addEventListener("sessionend",Wu),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(A,F);let q=ne.enabled===!0&&ne.isPresenting===!0,V=C!==null&&(te===null||q)&&C.begin(R,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,F,te),S=Y.get(A,b.length),S.init(F),S.state.textureUnits=Fe.getTextureUnits(),b.push(S),xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Ht.setFromArrayCamera(F):Ze.setFromProjectionMatrix(xt,Ti,F.reversedDepth),ti=this.localClippingEnabled,Pt=K.init(this.clippingPlanes,ti),M=ue.get(A,y.length),M.init(),y.push(M),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let be=R.xr.getDepthSensingMesh();be!==null&&Vc(be,F,-1/0,R.sortObjects)}Vc(A,F,0,R.sortObjects),M.finish(),D!==null&&D.updateLights(S.state.lightsArray),R.sortObjects===!0&&M.sort(ze,Et),_i=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,_i&&N.addToRenderList(M,A),this.info.autoReset===!0&&this.info.reset(),Pt===!0&&K.beginShadows();let W=S.state.shadowsArray;if(le.render(W,A,F),Pt===!0&&K.endShadows(),(V&&C.hasRenderPass())===!1){let be=M.opaque,he=M.transmissive;if(S.setupLights(),F.isArrayCamera){let ve=F.cameras;if(he.length>0)for(let Te=0,Be=ve.length;Te<Be;Te++){let Ke=ve[Te];qu(be,he,A,Ke)}_i&&N.render(A);for(let Te=0,Be=ve.length;Te<Be;Te++){let Ke=ve[Te];$u(M,A,Ke,Ke.viewport)}}else he.length>0&&qu(be,he,A,F),_i&&N.render(A),$u(M,A,F)}te!==null&&H===0&&(Fe.updateMultisampleRenderTarget(te),Fe.updateRenderTargetMipmap(te)),V&&C.end(R),A.isScene===!0&&A.onAfterRender(R,A,F),oe.resetDefaultState(),$=-1,Z=null,b.pop(),b.length>0?(S=b[b.length-1],Fe.setTextureUnits(S.state.textureUnits),Pt===!0&&K.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,y.pop(),y.length>0?M=y[y.length-1]:M=null,D!==null&&D.renderEnd()};function Vc(A,F,q,V){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let be=F.isArrayCamera?Ht:Ze;if(!A.frustumCulled||A.intersectsFrustum(be)){V&&Ot.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);let he=ie.update(A),ve=A.material;ve.visible&&M.push(A,he,ve,q,Ot.z,null,F)}}else if(A.isMesh||A.isLine||A.isPoints){let be=F.isArrayCamera?Ht:Ze;if(!A.frustumCulled||A.intersectsFrustum(be)){let he=ie.update(A),ve=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ot.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ot.copy(he.boundingSphere.center)),Ot.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(ve)){let Te=he.groups;for(let Be=0,Ke=Te.length;Be<Ke;Be++){let we=Te[Be],Je=ve[we.materialIndex];Je&&Je.visible&&M.push(A,he,Je,q,Ot.z,we,F)}}else ve.visible&&M.push(A,he,ve,q,Ot.z,null,F)}}}let de=A.children;for(let be=0,he=de.length;be<he;be++)Vc(de[be],F,q,V)}function $u(A,F,q,V){let{opaque:W,transmissive:de,transparent:be}=A;S.setupLightsView(q),Pt===!0&&K.setGlobalState(R.clippingPlanes,q),V&&pe.viewport(ee.copy(V)),W.length>0&&no(W,F,q),de.length>0&&no(de,F,q),be.length>0&&no(be,F,q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function qu(A,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let we=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new Mt(1,1,{generateMipmaps:!0,type:we?yt:si,minFilter:Sn,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let de=S.state.transmissionRenderTarget[V.id],be=V.viewport||ee;de.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);let he=R.getRenderTarget(),ve=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(J),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),_i&&N.render(q);let Be=R.toneMapping;R.toneMapping=Ri;let Ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),Pt===!0&&K.setGlobalState(R.clippingPlanes,V),no(A,q,V),Fe.updateMultisampleRenderTarget(de),Fe.updateRenderTargetMipmap(de),ft.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Je=0,At=F.length;Je<At;Je++){let ut=F[Je],{object:ct,geometry:Wt,material:Se,group:Kt}=ut;if(Se.side===It&&ct.layers.test(V.layers)){let it=Se.side;Se.side=Tt,Se.needsUpdate=!0,Xu(ct,q,V,Wt,Se,Kt),Se.side=it,Se.needsUpdate=!0,we=!0}}we===!0&&(Fe.updateMultisampleRenderTarget(de),Fe.updateRenderTargetMipmap(de))}R.setRenderTarget(he,ve,Te),R.setClearColor(J,ge),Ke!==void 0&&(V.viewport=Ke),R.toneMapping=Be}function no(A,F,q){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,de=A.length;W<de;W++){let be=A[W],{object:he,geometry:ve,group:Te}=be,Be=be.material;Be.allowOverride===!0&&V!==null&&(Be=V),he.layers.test(q.layers)&&Xu(he,F,q,ve,Be,Te)}}function Xu(A,F,q,V,W,de){D!==null&&W.isNodeMaterial&&D.setObject(A,W),A.onBeforeRender(R,F,q,V,W,de),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,F,q,V,A,de),W.transparent===!0&&W.side===It&&W.forceSinglePass===!1?(W.side=Tt,W.needsUpdate=!0,R.renderBufferDirect(q,F,V,W,A,de),W.side=Yn,W.needsUpdate=!0,R.renderBufferDirect(q,F,V,W,A,de),W.side=It):R.renderBufferDirect(q,F,V,W,A,de),A.onAfterRender(R,F,q,V,W,de)}function Yu(A){let F=0;for(let q of A)q.texture!==null&&F++;return F}function zr(A,F,q){F.isScene!==!0&&(F=bi);let V=ke.get(A),W=S.state.lights,de=S.state.shadowsArray,be=W.state.version,he=Q.getParameters(A,W.state,de,F,q,S.state.lightProbeGridArray),ve=Q.getProgramCacheKey(he),Te=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Be=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=I.get(A.envMap||V.environment,Be),V.envMapRotation=V.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Te===void 0&&(A.addEventListener("dispose",rt),Te=new Map,V.programs=Te,V.programVariants=new Map);let Ke=Te.get(ve);if(Ke!==void 0){if(V.currentProgram===Ke&&V.lightsStateVersion===be)return Ku(A,he),Ke}else he.uniforms=Q.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,q,he),A.onBeforeCompile(he,R),Ke=Q.acquireProgram(he,ve),Te.set(ve,Ke),V.uniforms=he.uniforms;let we=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(we.clippingPlanes=K.uniform),Ku(A,he),V.needsLights=X0(A),V.lightsStateVersion=be,V.needsLights&&(we.ambientLightColor.value=W.state.ambient,we.lightProbe.value=W.state.probe,we.sunLights.value=W.state.sun,we.sunLightShadows.value=W.state.sunShadow,we.directionalLights.value=W.state.directional,we.directionalLightShadows.value=W.state.directionalShadow,we.spotLights.value=W.state.spot,we.spotLightShadows.value=W.state.spotShadow,we.rectAreaLights.value=W.state.rectArea,we.ltc_1.value=W.state.rectAreaLTC1,we.ltc_2.value=W.state.rectAreaLTC2,we.pointLights.value=W.state.point,we.pointLightShadows.value=W.state.pointShadow,we.hemisphereLights.value=W.state.hemi,we.sunShadowMatrix.value=W.state.sunShadowMatrix,we.sunShadowCascade.value=W.state.sunShadowCascade,we.directionalShadowMatrix.value=W.state.directionalShadowMatrix,we.spotLightMatrix.value=W.state.spotLightMatrix,we.spotLightMap.value=W.state.spotLightMap,we.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=Yu(S.state.lightProbeGridArray),V.currentProgram=Ke,V.uniformsList=null,Ke}function W0(A,F,q,V,W){let de=ke.get(A),be=de.currentProgram.id+","+V+","+W,he=de.programVariants.get(be);return he===void 0?(he=zr(A,F,q),de.programVariants.set(be,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=V,de.toneMapping=W),he}function Zu(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=yr.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Ku(A,F){let q=ke.get(A);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function $0(A,F,q,V,W){F.isScene!==!0&&(F=bi),Fe.resetTextureUnits();let de=F.fog,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,he=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qe.workingColorSpace,ve=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Te=I.get(V.envMap||be,ve),Be=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,At=!!q.morphAttributes.color,ut=Ri;V.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ut=R.toneMapping);let ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=ct!==void 0?ct.length:0,Se=ke.get(V),Kt=S.state.lights;if(Pt===!0&&(ti===!0||A!==Z)){let vt=A===Z&&V.id===$;K.setState(V,A,vt)}let it=!1,rs=!1;V.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Kt.state.version||W.isBatchedMesh&&Se.batching===!1||!W.isBatchedMesh&&Se.batching===!0||W.isBatchedMesh&&Se.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Se.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Se.instancing===!1||!W.isInstancedMesh&&Se.instancing===!0||W.isSkinnedMesh&&Se.skinning===!1||!W.isSkinnedMesh&&Se.skinning===!0||W.isInstancedMesh&&Se.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Se.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Se.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Se.instancingMorph===!1&&W.morphTexture!==null||Se.envMap!==Te||V.fog===!0&&Se.fog!==de||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==K.numPlanes||Se.numIntersection!==K.numIntersection)||Se.vertexAlphas!==Be||Se.vertexTangents!==Ke||Se.morphTargets!==we||Se.morphNormals!==Je||Se.morphColors!==At||Se.morphTargetsCount!==Wt||Se.numLightProbeGrids!==Yu(S.state.lightProbeGridArray)?it=!0:(Se.outputColorSpace!==he||Se.toneMapping!==ut)&&(rs=!0):(it=!0,Se.__version=V.version);let $t=Se.currentProgram;(it===!0||rs===!0)&&($t=rs===!0?W0(V,F,W,he,ut):zr(V,F,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,$t,Se));let so=!1,Nn=!1,as=!1,et=$t.getUniforms(),Vt=Se.uniforms;if(pe.useProgram($t.program)&&(so=!0,Nn=!0,as=!0),V.id!==$&&($=V.id,Nn=!0),so||Z!==A){pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),et.setValue(z,"projectionMatrix",A.projectionMatrix),et.setValue(z,"viewMatrix",A.matrixWorldInverse);let Bt=et.map.cameraPosition;Bt!==void 0&&Bt.setValue(z,$i.setFromMatrixPosition(A.matrixWorld)),mt.logarithmicDepthBuffer&&et.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&et.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Nn=!0,as=!0)}if(Se.needsLights&&(Kt.state.sunShadowMap.length>0&&et.setValue(z,"sunShadowMap",Kt.state.sunShadowMap,Fe),Kt.state.directionalShadowMap.length>0&&et.setValue(z,"directionalShadowMap",Kt.state.directionalShadowMap,Fe),Kt.state.spotShadowMap.length>0&&et.setValue(z,"spotShadowMap",Kt.state.spotShadowMap,Fe),Kt.state.pointShadowMap.length>0&&et.setValue(z,"pointShadowMap",Kt.state.pointShadowMap,Fe)),W.isSkinnedMesh){et.setOptional(z,W,"bindMatrix"),et.setOptional(z,W,"bindMatrixInverse");let vt=W.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),et.setValue(z,"boneTexture",vt.boneTexture,Fe))}W.isBatchedMesh&&(et.setOptional(z,W,"batchingTexture"),et.setValue(z,"batchingTexture",W._matricesTexture,Fe),et.setOptional(z,W,"batchingIdTexture"),et.setValue(z,"batchingIdTexture",W._indirectTexture,Fe),et.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&et.setValue(z,"batchingColorTexture",W._colorsTexture,Fe));let Ni=q.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&j.update(W,q,$t),(Nn||Se.receiveShadow!==W.receiveShadow)&&(Se.receiveShadow=W.receiveShadow,et.setValue(z,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Vt.envMapIntensity.value=F.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=M1()),Nn){if(et.setValue(z,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&q0(Vt,as),de&&V.fog===!0&&ae.refreshFogUniforms(Vt,de),ae.refreshMaterialUniforms(Vt,V,xe,Pe,S.state.transmissionRenderTarget[A.id]),Se.needsLights&&Se.numLightProbeGrids>0){let vt=_,Bt=0;for(let on of S.state.lightProbeGridArray)on.texture!==null&&(vt.textures[Bt]=on.texture,vt.min[Bt]=on.boundingBox.min,vt.max[Bt]=on.boundingBox.max,vt.resolution[Bt]=on.resolution,Bt++);for(let on in vt)vt[on].length=Bt;Vt.probesSH.value=vt.textures,Vt.probesMin.value=vt.min,Vt.probesMax.value=vt.max,Vt.probesResolution.value=vt.resolution}yr.upload(z,Zu(Se),Vt,Fe)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(yr.upload(z,Zu(Se),Vt,Fe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&et.setValue(z,"center",W.center),et.setValue(z,"modelViewMatrix",W.modelViewMatrix),et.setValue(z,"normalMatrix",W.normalMatrix),et.setValue(z,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let vt=V.uniformsGroups;for(let Bt=0,on=vt.length;Bt<on;Bt++){let ju=vt[Bt];Ee.update(ju,$t),Ee.bind(ju,$t)}}return $t}function q0(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function X0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,F,q){let V=ke.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ke.get(A.texture).__webglTexture=F,ke.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){let q=ke.get(A);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,q=0){te=A,U=F,H=q;let V=null,W=!1,de=!1;if(A){let he=ke.get(A);if(he.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(z.FRAMEBUFFER,he.__webglFramebuffer),ee.copy(A.viewport),ye.copy(A.scissor),Ue=A.scissorTest,pe.viewport(ee),pe.scissor(ye),pe.setScissorTest(Ue),$=-1;return}else if(he.__webglFramebuffer===void 0)Fe.setupRenderTarget(A);else if(he.__hasExternalTextures)Fe.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Be=A.depthTexture;if(he.__boundDepthTexture!==Be){if(Be!==null&&ke.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(A)}}let ve=A.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);let Te=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?V=Te[F][q]:V=Te[F],W=!0):A.samples>0&&Fe.useMultisampledRTT(A)===!1?V=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(Te)?V=Te[q]:V=Te,ee.copy(A.viewport),ye.copy(A.scissor),Ue=A.scissorTest}else ee.copy(Ie).multiplyScalar(xe).floor(),ye.copy(st).multiplyScalar(xe).floor(),Ue=lt;if(q!==0&&(V=B),pe.bindFramebuffer(z.FRAMEBUFFER,V)&&pe.drawBuffers(A,V),pe.viewport(ee),pe.scissor(ye),pe.setScissorTest(Ue),W){let he=ke.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,he.__webglTexture,q)}else if(de){let he=F;for(let ve=0;ve<A.textures.length;ve++){let Te=ke.get(A.textures[ve]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+ve,Te.__webglTexture,q,he)}}else if(A!==null&&q!==0){let he=ke.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,he.__webglTexture,q)}$=-1};function Ju(A){let F=ke.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=mt.textureFormatReadable(A.format),F.__typeReadable=mt.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,q,V,W,de,be,he=0){if(!(A&&A.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be],Array.isArray(ve)&&(ve=ve[0])),ve){pe.bindFramebuffer(z.FRAMEBUFFER,ve);try{let Te=A.textures[he],Be=Te.format,Ke=Te.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+he);let we=Ju(Te);if(we.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-V&&q>=0&&q<=A.height-W&&z.readPixels(F,q,V,W,re.convert(Be),re.convert(Ke),de)}finally{let Te=te!==null?ke.get(te).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(A,F,q,V,W,de,be,he=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(ve=ve[be],Array.isArray(ve)&&(ve=ve[0])),ve)if(F>=0&&F<=A.width-V&&q>=0&&q<=A.height-W){pe.bindFramebuffer(z.FRAMEBUFFER,ve);let Te=A.textures[he],Be=Te.format,Ke=Te.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+he);let we=Ju(Te);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Je),z.bufferData(z.PIXEL_PACK_BUFFER,de.byteLength,z.STREAM_READ),z.readPixels(F,q,V,W,re.convert(Be),re.convert(Ke),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let At=te!==null?ke.get(te).__webglFramebuffer:null;pe.bindFramebuffer(z.FRAMEBUFFER,At);let ut=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await pp(z,ut,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Je),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,de),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Je),z.deleteSync(ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,q=0){let V=Math.pow(2,-q),W=Math.floor(A.image.width*V),de=Math.floor(A.image.height*V),be=F!==null?F.x:0,he=F!==null?F.y:0;Fe.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,be,he,W,de),pe.unbindTexture()},this.copyTextureToTexture=function(A,F,q=null,V=null,W=0,de=0){let be,he,ve,Te,Be,Ke,we,Je,At,ut=A.isCompressedTexture?A.mipmaps[de]:A.image;if(q!==null)be=q.max.x-q.min.x,he=q.max.y-q.min.y,ve=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,Be=q.min.y,Ke=q.isBox3?q.min.z:0;else{let et=Math.pow(2,-W);be=Math.floor(ut.width*et),he=Math.floor(ut.height*et),A.isDataArrayTexture?ve=ut.depth:A.isData3DTexture?ve=Math.floor(ut.depth*et):ve=1,Te=0,Be=0,Ke=0}V!==null?(we=V.x,Je=V.y,At=V.z):(we=0,Je=0,At=0);let ct=re.convert(F.format),Wt=re.convert(F.type),Se;F.isData3DTexture?(Fe.setTexture3D(F,0),Se=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Fe.setTexture2DArray(F,0),Se=z.TEXTURE_2D_ARRAY):(Fe.setTexture2D(F,0),Se=z.TEXTURE_2D),pe.activeTexture(z.TEXTURE0),pe.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let Kt=pe.getParameter(z.UNPACK_ROW_LENGTH),it=pe.getParameter(z.UNPACK_IMAGE_HEIGHT),rs=pe.getParameter(z.UNPACK_SKIP_PIXELS),$t=pe.getParameter(z.UNPACK_SKIP_ROWS),so=pe.getParameter(z.UNPACK_SKIP_IMAGES);pe.pixelStorei(z.UNPACK_ROW_LENGTH,ut.width),pe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut.height),pe.pixelStorei(z.UNPACK_SKIP_PIXELS,Te),pe.pixelStorei(z.UNPACK_SKIP_ROWS,Be),pe.pixelStorei(z.UNPACK_SKIP_IMAGES,Ke);let Nn=A.isDataArrayTexture||A.isData3DTexture,as=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){let et=ke.get(A),Vt=ke.get(F),Ni=ke.get(et.__renderTarget),vt=ke.get(Vt.__renderTarget);pe.bindFramebuffer(z.READ_FRAMEBUFFER,Ni.__webglFramebuffer),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Bt=0;Bt<ve;Bt++)Nn&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(A).__webglTexture,W,Ke+Bt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.get(F).__webglTexture,de,At+Bt)),z.blitFramebuffer(Te,Be,Te+be,Be+he,we,Je,we+be,Je+he,z.DEPTH_BUFFER_BIT,z.NEAREST);pe.bindFramebuffer(z.READ_FRAMEBUFFER,null),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||ke.has(A)){let et=ke.get(A),Vt=ke.get(F);pe.bindFramebuffer(z.READ_FRAMEBUFFER,P),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let Ni=0;Ni<ve;Ni++)Nn?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,et.__webglTexture,W,Ke+Ni):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,et.__webglTexture,W),as?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Vt.__webglTexture,de,At+Ni):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Vt.__webglTexture,de),W!==0?z.blitFramebuffer(Te,Be,Te+be,Be+he,we,Je,we+be,Je+he,z.COLOR_BUFFER_BIT,z.NEAREST):as?z.copyTexSubImage3D(Se,de,we,Je,At+Ni,Te,Be,be,he):z.copyTexSubImage2D(Se,de,we,Je,Te,Be,be,he);pe.bindFramebuffer(z.READ_FRAMEBUFFER,null),pe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else as?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Se,de,we,Je,At,be,he,ve,ct,Wt,ut.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Se,de,we,Je,At,be,he,ve,ct,ut.data):z.texSubImage3D(Se,de,we,Je,At,be,he,ve,ct,Wt,ut):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,de,we,Je,be,he,ct,Wt,ut.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,de,we,Je,ut.width,ut.height,ct,ut.data):z.texSubImage2D(z.TEXTURE_2D,de,we,Je,be,he,ct,Wt,ut);pe.pixelStorei(z.UNPACK_ROW_LENGTH,Kt),pe.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it),pe.pixelStorei(z.UNPACK_SKIP_PIXELS,rs),pe.pixelStorei(z.UNPACK_SKIP_ROWS,$t),pe.pixelStorei(z.UNPACK_SKIP_IMAGES,so),de===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(Se),pe.unbindTexture()},this.initRenderTarget=function(A){ke.get(A).__webglFramebuffer===void 0&&Fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Fe.setTextureCube(A,0):A.isData3DTexture?Fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Fe.setTexture2DArray(A,0):Fe.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){U=0,H=0,te=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};function An(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}var _t=class n{constructor(e=1){this.s=(typeof e=="string"?An(e):e)>>>0}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}chance(e){return this.next()<e}fork(e=0){return new n((this.s^An(String(e)))>>>0)}},T1=1/3,en=1/6,Pi=new Int8Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),wr=class{constructor(e=1){let t=new _t(e),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t.next()*(s+1)),a=i[s];i[s]=i[r],i[r]=a}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}simplex(e,t,i){let s=this.perm,r=(e+t+i)*T1,a=Math.floor(e+r),o=Math.floor(t+r),l=Math.floor(i+r),c=(a+o+l)*en,h=e-a+c,p=t-o+c,u=i-l+c,d,m,x,f,g,v;h>=p?p>=u?(d=1,m=0,x=0,f=1,g=1,v=0):h>=u?(d=1,m=0,x=0,f=1,g=0,v=1):(d=0,m=0,x=1,f=1,g=0,v=1):p<u?(d=0,m=0,x=1,f=0,g=1,v=1):h<u?(d=0,m=1,x=0,f=0,g=1,v=1):(d=0,m=1,x=0,f=1,g=1,v=0);let w=h-d+en,_=p-m+en,M=u-x+en,S=h-f+2*en,y=p-g+2*en,b=u-v+2*en,C=h-1+3*en,R=p-1+3*en,L=u-1+3*en,D=a&255,B=o&255,P=l&255,O=0,U=.6-h*h-p*p-u*u;if(U>0){let H=s[D+s[B+s[P]]]%12*3;U*=U,O+=U*U*(Pi[H]*h+Pi[H+1]*p+Pi[H+2]*u)}if(U=.6-w*w-_*_-M*M,U>0){let H=s[D+d+s[B+m+s[P+x]]]%12*3;U*=U,O+=U*U*(Pi[H]*w+Pi[H+1]*_+Pi[H+2]*M)}if(U=.6-S*S-y*y-b*b,U>0){let H=s[D+f+s[B+g+s[P+v]]]%12*3;U*=U,O+=U*U*(Pi[H]*S+Pi[H+1]*y+Pi[H+2]*b)}if(U=.6-C*C-R*R-L*L,U>0){let H=s[D+1+s[B+1+s[P+1]]]%12*3;U*=U,O+=U*U*(Pi[H]*C+Pi[H+1]*R+Pi[H+2]*L)}return 32*O}fbm(e,t,i,s=5,r=2.03,a=.5){let o=1,l=0,c=0;for(let h=0;h<s;h++)l+=o*this.simplex(e,t,i),c+=o,o*=a,e*=r,t*=r,i*=r;return l/c}ridged(e,t,i,s=5,r=2.1,a=.5){let o=.5,l=0,c=1;for(let h=0;h<s;h++){let p=1-Math.abs(this.simplex(e,t,i)),u=p*p;l+=u*o*c,c=Math.min(1,u*2),o*=a,e*=r,t*=r,i*=r}return l}};function Jp(n=64,e=16){let t=new _t(4242),i=new Float32Array(e**3),s=new Float32Array(e**3),r=new Float32Array(e**3);for(let u=0;u<i.length;u++){let d=t.next()*Math.PI*2,m=t.next()*2-1,x=Math.sqrt(1-m*m);i[u]=x*Math.cos(d),s[u]=x*Math.sin(d),r[u]=m}let a=new Uint16Array(n**3),o=u=>u*u*u*(u*(u*6-15)+10),l=(u,d,m)=>(u+e)%e+(d+e)%e*e+(m+e)%e*e*e,c=e/n,h=0;for(let u=0;u<n;u++){let d=u*c,m=Math.floor(d),x=d-m,f=o(x);for(let g=0;g<n;g++){let v=g*c,w=Math.floor(v),_=v-w,M=o(_);for(let S=0;S<n;S++){let y=S*c,b=Math.floor(y),C=y-b,R=o(C),L=0;for(let D=0;D<8;D++){let B=D&1,P=D>>1&1,O=D>>2&1,U=l(b+B,w+P,m+O),H=i[U]*(C-B)+s[U]*(_-P)+r[U]*(x-O);L+=H*(B?R:1-R)*(P?M:1-M)*(O?f:1-f)}a[h++]=ea.toHalfFloat(Math.max(0,Math.min(1,.5+L*1.1)))}}}let p=new rr(a,n,n,n);return p.format=xr,p.type=yt,p.minFilter=St,p.magFilter=St,p.wrapS=p.wrapT=p.wrapR=tr,p.unpackAlignment=1,p.needsUpdate=!0,p}var Qt=`
uniform highp sampler3D uNoise;
float n3(vec3 p) { return texture(uNoise, p * 0.0625).r; }
const mat3 ROT3 = mat3(0.80, 0.60, 0.0, -0.48, 0.64, 0.60, 0.36, -0.48, 0.80);
float fbm3(vec3 p) { float s = 0.5 * n3(p); p = ROT3 * p * 2.03; s += 0.25 * n3(p); p = ROT3 * p * 2.01; s += 0.125 * n3(p); return s / 0.875; }
float fbm5(vec3 p) { float s = 0.5 * n3(p); p = ROT3 * p * 2.03; s += 0.25 * n3(p); p = ROT3 * p * 2.01; s += 0.125 * n3(p); p = ROT3 * p * 2.02; s += 0.0625 * n3(p); p = ROT3 * p * 2.04; s += 0.03125 * n3(p); return s / 0.96875; }
float ridge3(vec3 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 3; i++) { float n = 1.0 - abs(n3(p) * 2.0 - 1.0); s += a * n * n; a *= 0.5; p = ROT3 * p * 2.1; } return s / 0.875; }
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash31(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
`;function jp(n,e,t=7){let i=new _t(t),s=new k(i.range(-.5,.5),1,i.range(-.5,.5)).normalize(),r=new Xe({side:Tt,depthWrite:!1,uniforms:{uNoise:{value:e},uTilt:{value:s},uHueA:{value:new se().setHSL(i.range(.62,.8),.7,.32)},uHueB:{value:new se().setHSL(i.range(.48,.56),.75,.3)},uHueC:{value:new se().setHSL(i.range(.94,1.08)%1,.65,.42)},uShift:{value:i.range(0,40)}},vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      precision highp float;
      varying vec3 vDir;
      uniform vec3 uTilt, uHueA, uHueB, uHueC;
      uniform float uShift;
      ${Qt}
      float starLayer(vec3 d, float scale, float density, float size) {
        vec3 p = d * scale;
        vec3 id = floor(p);
        vec3 f = fract(p) - 0.5;
        float h = hash31(id + 3.1);
        if (h > density) return 0.0;
        vec3 off = (vec3(hash31(id + 7.7), hash31(id + 13.3), hash31(id + 19.9)) - 0.5) * 0.7;
        float dist = length(f - off);
        return smoothstep(size, 0.0, dist) * (0.3 + 0.7 * hash31(id + 29.0));
      }
      void main() {
        vec3 d = normalize(vDir);
        vec3 q = d + uShift;
        float gal = dot(d, uTilt);
        float band = exp(-gal * gal * 7.0);
        float warp = n3(q * 2.1) - 0.5;
        float n1 = fbm5(q * 2.4 + warp * 2.4);
        float n2 = fbm5(q * 4.6 - warp * 1.7 + 5.0);
        float n3a = fbm5(q * 1.3 + 17.0);
        vec3 col = vec3(0.0009, 0.0013, 0.003);
        float wisps = fbm5(q * 11.0 + warp * 3.0);
        float cloud = smoothstep(0.5, 0.82, n1) * (0.45 + wisps * 0.9);
        col += uHueA * cloud * cloud * 0.05 * (0.22 + band);
        col += uHueB * smoothstep(0.54, 0.84, n2) * (0.4 + wisps * 0.8) * 0.032 * (0.15 + band);
        col += uHueC * pow(smoothstep(0.58, 0.86, n3a), 2.0) * (0.4 + wisps) * 0.03;
        // The bright river of the galaxy, cut by dark dust lanes.
        float dust = smoothstep(0.42, 0.66, fbm5(q * 6.0 + 2.0));
        col += vec3(0.16, 0.135, 0.17) * band * band * band * (0.2 + n2 * 0.7) * (1.0 - dust * 0.86);
        float dense = band * band;
        float stars = starLayer(d, 240.0, 0.09 + dense * 0.28, 0.2) * 0.8
                    + starLayer(d, 130.0, 0.05 + dense * 0.1, 0.17) * 1.3
                    + starLayer(d, 62.0, 0.03, 0.13) * 2.4;
        vec3 tint = mix(vec3(0.72, 0.82, 1.0), vec3(1.0, 0.86, 0.72), n1);
        col += stars * tint * 0.45;
        gl_FragColor = vec4(col, 1.0);
      }`}),a=new xn;a.add(new $e(new Jt(5,32,24),r));let o=new _s(1536,{type:yt,generateMipmaps:!1,minFilter:St,magFilter:St}),l=new Xn(.1,10,o),c=n.toneMapping;return n.toneMapping=Ri,l.update(n,a),n.toneMapping=c,r.dispose(),o.texture}function Qp(n=5200,e=21){let t=new _t(e),i=new Float32Array(n*3),s=new Float32Array(n*3),r=new Float32Array(n),a=new Float32Array(n),o=[[.68,.8,1],[1,1,1],[1,.92,.78],[1,.76,.56],[.8,.86,1]];for(let p=0;p<n;p++){let u=t.range(-1,1),d=t.range(0,Math.PI*2),m=Math.sqrt(1-u*u);i[p*3]=m*Math.cos(d)*6e3,i[p*3+1]=u*6e3,i[p*3+2]=m*Math.sin(d)*6e3;let x=t.pick(o),f=Math.pow(t.next(),7);s[p*3]=x[0],s[p*3+1]=x[1],s[p*3+2]=x[2],r[p]=.9+f*3.4,a[p]=t.range(0,6.28)}let l=new nt;l.setAttribute("position",new De(i,3)),l.setAttribute("aColor",new De(s,3)),l.setAttribute("aSize",new De(r,1)),l.setAttribute("aPhase",new De(a,1));let c=new Xe({uniforms:{uTime:{value:0},uPixel:{value:1}},vertexShader:`
      attribute vec3 aColor; attribute float aSize, aPhase;
      uniform float uTime, uPixel;
      varying vec3 vC; varying float vB;
      void main() {
        vC = aColor;
        vB = (0.72 + 0.28 * sin(uTime * (0.6 + aPhase * 0.5) + aPhase)) * (aSize > 2.0 ? 2.4 : 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uPixel;
      }`,fragmentShader:`
      varying vec3 vC; varying float vB;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = smoothstep(1.0, 0.0, d);
        gl_FragColor = vec4(vC * vB * a * a, a);
      }`,transparent:!0,depthWrite:!1,blending:jt}),h=new ds(l,c);return h.frustumCulled=!1,h.renderOrder=-10,h}function ef(n,e,{core:t=16756838,hot:i=16773328}={}){let s=new bt,r={uTime:{value:0}},a=new $e(new Jt(n,128,96),new Xe({uniforms:{uTime:r.uTime,uNoise:{value:e},uCore:{value:new se(t)},uHot:{value:new se(i)},uDim:{value:1}},vertexShader:`
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        void main() {
          vP = normalize(position);
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        precision highp float;
        varying vec3 vP; varying vec3 vN; varying vec3 vV;
        uniform float uTime, uDim; uniform vec3 uCore, uHot;
        ${Qt}
        void main() {
          float t = uTime * 0.018;
          vec3 p = vP * 3.0;
          float w = fbm3(p + vec3(t, -t * 0.6, t * 0.4));
          float cells = fbm5(p * 2.4 + w * 3.2 + vec3(0.0, t * 1.4, 0.0));
          float grain = n3(p * 16.0 + t * 5.0);
          float heat = smoothstep(0.28, 0.76, cells) * 0.8 + grain * 0.22;
          float spots = smoothstep(0.66, 0.74, fbm3(vP * 2.4 + 40.0));
          heat *= 1.0 - spots * 0.65;
          float mu = max(dot(normalize(vN), normalize(vV)), 0.0);
          float limb = 0.5 + 0.5 * pow(mu, 0.5);
          vec3 col = mix(uCore * 1.05, uHot, heat) * (1.3 + heat * 3.4) * limb * uDim;
          gl_FragColor = vec4(col, 1.0);
        }`}));a.userData.kind="sun",s.add(a);let o=new $e(new ps(n*11,n*11),new Xe({uniforms:{uTime:r.uTime,uNoise:{value:e},uCore:{value:new se(t)},uR:{value:n/(n*5.5)}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv * 2.0 - 1.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        precision highp float;
        varying vec2 vUv;
        uniform float uTime, uR; uniform vec3 uCore;
        ${Qt}
        void main() {
          float r = length(vUv);
          float a = atan(vUv.y, vUv.x);
          vec3 q = vec3(cos(a), sin(a), 0.0) * 3.0;
          float rays = fbm3(q + vec3(0.0, 0.0, uTime * 0.03));
          float rays2 = fbm3(q * 3.3 + vec3(0.0, 0.0, uTime * 0.05));
          float d = max(r - uR, 0.0);
          float glow = exp(-d * mix(16.0, 6.5, rays)) * (0.55 + rays2 * 0.8);
          float wide = exp(-d * 4.5) * 0.09;
          float k = (glow * 0.7 + wide) * (1.0 - smoothstep(0.72, 1.0, r));
          vec3 col = mix(uCore, vec3(1.0, 0.9, 0.75), exp(-d * 18.0)) * k * 1.25;
          gl_FragColor = vec4(col, 0.0);
        }`,transparent:!0,depthWrite:!1,blending:wn,blendEquation:ni,blendSrc:zi,blendDst:zi}));return o.renderOrder=5,s.add(o),s.userData={update(l,c){r.uTime.value=l,a.rotation.y=l*.012,o.quaternion.copy(c.quaternion);let h=c.position.length()/n;a.material.uniforms.uDim.value=.2+.8*Math.min(1,Math.max(0,(h-2)/12))},surface:a},s}var Sr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},E1=new fs(-1,1,1,-1,0,1),ru=class extends nt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},A1=new ru,Kn=class{constructor(e){this._mesh=new $e(A1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,E1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ws=class extends mi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=En.clone(e.uniforms),this.material=new Xe({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Kn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Na=class extends mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},nc=class extends mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var sc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Me);this._width=i.width,this._height=i.height,t=new Mt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ws(Sr),this.copyPass.material.blending=_n,this.timer=new ga}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Na!==void 0&&(a instanceof Na?i=!0:a instanceof nc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var rc=class extends mi{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new se}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var tf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Mr=class n extends mi{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Mt(r,a,{type:yt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let p=new Mt(r,a,{type:yt,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let u=new Mt(r,a,{type:yt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=tf;this.highPassUniforms=En.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=En.clone(Sr.uniforms),this.blendMaterial=new Xe({uniforms:this.copyUniforms,vertexShader:Sr.vertexShader,fragmentShader:Sr.fragmentShader,premultipliedAlpha:!0,blending:jt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new se,this._oldClearAlpha=1,this._basic=new vn,this._fsQuad=new Kn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Xe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Xe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Mr.BlurDirectionX=new Me(1,0);Mr.BlurDirectionY=new Me(0,1);var Fa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ac=class extends mi{constructor(){super(),this.isOutputPass=!0,this.uniforms=En.clone(Fa.uniforms),this.material=new ur({name:Fa.name,uniforms:this.uniforms,vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader}),this._fsQuad=new Kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===va?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ya?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_a&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var R1={uniforms:{tDiffuse:{value:null},uWarp:{value:0},uTime:{value:0},uSunUv:{value:new Me(.5,.5)},uSunVis:{value:0},uAspect:{value:1},uFade:{value:1},uFlash:{value:0},uFlashColor:{value:new se(1,1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform float uWarp, uTime, uSunVis, uAspect, uFade, uFlash;
    uniform vec2 uSunUv;
    uniform vec3 uFlashColor;
    float grain(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    float disc(vec2 uv, vec2 c, float r, float soft) { return smoothstep(r, r * soft, length((uv - c) * vec2(uAspect, 1.0))); }
    void main() {
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      vec3 col;
      if (uWarp > 0.002) {
        const int N = 12;
        vec3 sum = vec3(0.0);
        for (int i = 0; i < N; i++) {
          float k = float(i) / float(N - 1);
          float s = 1.0 - uWarp * 0.16 * k * smoothstep(0.0, 0.3, r2 * 2.2);
          vec3 tint = mix(vec3(1.0, 0.92, 0.9), vec3(0.85, 0.92, 1.0), k);
          sum += texture2D(tDiffuse, 0.5 + c * s).rgb * tint;
        }
        col = sum / float(N);
      } else {
        float ca = r2 * 0.0035;
        col = vec3(texture2D(tDiffuse, vUv + c * ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - c * ca).b);
      }
      if (uSunVis > 0.003) {
        vec2 axis = vec2(0.5) - uSunUv;
        vec3 flare = vec3(0.0);
        flare += vec3(1.0, 0.72, 0.45) * disc(vUv, uSunUv + axis * 0.55, 0.018, 0.5) * 0.10;
        flare += vec3(0.45, 0.72, 1.0) * disc(vUv, uSunUv + axis * 1.24, 0.042, 0.82) * 0.055;
        flare += vec3(0.8, 0.5, 1.0) * disc(vUv, uSunUv + axis * 1.62, 0.074, 0.92) * 0.035;
        flare += vec3(0.5, 1.0, 0.75) * disc(vUv, uSunUv + axis * 2.05, 0.028, 0.6) * 0.05;
        vec2 d = (vUv - uSunUv) * vec2(uAspect, 1.0);
        float streak = exp(-abs(d.y) * 260.0) * exp(-abs(d.x) * 5.5);
        flare += vec3(1.0, 0.82, 0.62) * streak * 0.1;
        col += flare * uSunVis;
      }
      col = mix(col, uFlashColor, uFlash);
      col *= 1.0 - smoothstep(0.26, 0.92, r2 * 1.75) * 0.5;
      col += (grain(vUv * 913.0 + fract(uTime) * 71.0) - 0.5) * 0.009;
      gl_FragColor = vec4(max(col, 0.0) * uFade, 1.0);
    }`},C1={uniforms:{tDiffuse:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    void main() {
      // min/max return the non-NaN operand, which also defuses NaN and infinity.
      gl_FragColor = vec4(max(min(texture2D(tDiffuse, vUv).rgb, vec3(48.0)), vec3(0.0)), 1.0);
    }`};function nf(n,e,t,{samples:i=4,bloom:s=!0}={}){let r=n.getDrawingBufferSize(new Me),a=new Mt(r.x,r.y,{type:yt,samples:i}),o=new sc(n,a);o.addPass(new rc(e,t)),o.addPass(new ws(C1));let l=new Mr(new Me(r.x/2,r.y/2),.34,.6,1);l.enabled=s,o.addPass(l);let c=new ws(R1);return o.addPass(c),o.addPass(new ac),{composer:o,bloom:l,finish:c}}var P1=[[[0,0,-1],[0,1,0],[1,0,0]],[[0,0,1],[0,1,0],[-1,0,0]],[[1,0,0],[0,0,-1],[0,1,0]],[[1,0,0],[0,0,1],[0,-1,0]],[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]]];function au(n,e,t){let s=(e+1)*(e+1)*6,r=new Float32Array(s*3),a=new Float32Array(s*3),o=new Float32Array(s*2),l=new Uint32Array(e*e*6*6),c=e+3,h=new Float32Array(c*c*3),p=[0,0,0],u=0,d=0;for(let x=0;x<6;x++){let[f,g,v]=P1[x],w=u,_=new Float32Array(c*c),M=new Float32Array(c*c);for(let S=0;S<c;S++){let y=Math.tan(((S-1)/e*2-1)*(Math.PI/4));for(let b=0;b<c;b++){let C=Math.tan(((b-1)/e*2-1)*(Math.PI/4)),R=v[0]+f[0]*C+g[0]*y,L=v[1]+f[1]*C+g[1]*y,D=v[2]+f[2]*C+g[2]*y,B=Math.hypot(R,L,D);R/=B,L/=B,D/=B,t(R,L,D,p);let P=n+p[0],O=(S*c+b)*3;h[O]=R*P,h[O+1]=L*P,h[O+2]=D*P,_[S*c+b]=p[1],M[S*c+b]=p[2]}}for(let S=1;S<=e+1;S++)for(let y=1;y<=e+1;y++){let b=(S*c+y)*3,C=(S*c+y-1)*3,R=(S*c+y+1)*3,L=((S-1)*c+y)*3,D=((S+1)*c+y)*3,B=h[R]-h[C],P=h[R+1]-h[C+1],O=h[R+2]-h[C+2],U=h[D]-h[L],H=h[D+1]-h[L+1],te=h[D+2]-h[L+2],$=P*te-O*H,Z=O*U-B*te,ee=B*H-P*U,ye=Math.hypot($,Z,ee)||1;$/=ye,Z/=ye,ee/=ye,r[u*3]=h[b],r[u*3+1]=h[b+1],r[u*3+2]=h[b+2],a[u*3]=$,a[u*3+1]=Z,a[u*3+2]=ee,o[u*2]=_[S*c+y],o[u*2+1]=M[S*c+y],u++}for(let S=0;S<e;S++)for(let y=0;y<e;y++){let b=w+S*(e+1)+y,C=b+1,R=b+e+1,L=R+1;l[d++]=b,l[d++]=C,l[d++]=L,l[d++]=b,l[d++]=L,l[d++]=R}}let m=new nt;return m.setAttribute("position",new De(r,3)),m.setAttribute("normal",new De(a,3)),m.setAttribute("aInfo",new De(o,2)),m.setIndex(new De(l,1)),m.boundingSphere=new Ei(new k,n*1.3),m}var k1=`
vec3 bumpOf(vec3 p, float f, float amp) {
  const float e = 0.35;
  float c = n3(p * f);
  return amp * vec3(n3(p * f + vec3(e, 0.0, 0.0)) - c, n3(p * f + vec3(0.0, e, 0.0)) - c, n3(p * f + vec3(0.0, 0.0, e)) - c);
}
void liquid(vec3 p, float h, vec3 deep, vec3 shallow, float waveSize, inout vec3 albedo, inout float rough, inout float metal, inout vec3 bump) {
  float d = clamp(-h / 0.42, 0.0, 1.0);
  albedo = mix(shallow, deep, pow(d, 0.65));
  rough = 0.09;
  metal = 0.0;
  vec3 q = p * waveSize;
  bump += bumpOf(q + vec3(uTime * 0.05, 0.0, uTime * 0.04), 1.0, 0.13);
  bump += bumpOf(q * 3.1 - vec3(0.0, uTime * 0.09, uTime * 0.06), 1.0, 0.07);
}
`;function sf(n,e){let t=new Ai({color:16777215,roughness:1,metalness:0});return t.onBeforeCompile=i=>{Object.assign(i.uniforms,e),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute vec2 aInfo;
        varying vec2 vInfo;
        varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vInfo = aInfo;
        vLocal = position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vInfo;
        varying vec3 vLocal;
        uniform mat3 normalMatrix;
        uniform vec3 uSunLocal;
        uniform float uTime;
        uniform float uHazeAmt;
        uniform float uCloudCover;
        uniform float uCloudScale;
        uniform vec3 uHazeColor;
        uniform float uFogD;
        uniform vec3 uFogC;
        ${Qt}
        ${k1}
        ${n.surfaceGLSL}
      `).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 sP = normalize(vLocal);
        vec3 sAlbedo = vec3(0.5);
        float sRough = 0.9, sMetal = 0.0;
        vec3 sEmissive = vec3(0.0), sBump = vec3(0.0);
        float sDist = length(vViewPosition);
        float sDay = dot(sP, uSunLocal);
        surface(sP, vInfo.x, vInfo.y, sDist, sDay, sAlbedo, sRough, sMetal, sEmissive, sBump);
        if (uCloudCover > 0.0) {
          vec3 cp = sP * uCloudScale + vec3(uTime * 0.006, 0.0, uTime * 0.003);
          float shadow = smoothstep(uCloudCover, uCloudCover + 0.2, fbm3(cp));
          sAlbedo *= 1.0 - shadow * 0.42;
        }
        diffuseColor.rgb = sAlbedo;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = sRough;`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = sMetal;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        normal = normalize(normal + normalMatrix * sBump);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += sEmissive;`).replace("#include <opaque_fragment>",`
        float hazeF = pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 2.6);
        outgoingLight += uHazeColor * hazeF * smoothstep(-0.25, 0.45, sDay) * uHazeAmt;
        #include <opaque_fragment>`).replace("#include <fog_fragment>",`
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogC, 1.0 - exp(-uFogD * uFogD * dot(vViewPosition, vViewPosition)));`)},t.customProgramCacheKey=()=>`terrain-${n.id}`,t}function rf(n,e,t){let i=n*(e.thickness||1.26),s=new Xe({uniforms:{uCam:{value:new k},uSun:{value:new k(1,0,0)},uRp:{value:n},uRa:{value:i},uBetaR:{value:new k(...e.rayleigh).multiplyScalar(1/n)},uBetaM:{value:new k(...e.mie||[.5,.5,.5]).multiplyScalar(1/n)},uHR:{value:n*(e.scaleR||.07)},uHM:{value:n*(e.scaleM||.025)},uG:{value:e.g??.82},uSunI:{value:e.intensity??16},uNight:{value:new k(...e.night||[.002,.003,.008])}},vertexShader:`
      varying vec3 vPos;
      void main() { vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      precision highp float;
      varying vec3 vPos;
      uniform vec3 uCam, uSun, uBetaR, uBetaM, uNight;
      uniform float uRp, uRa, uHR, uHM, uG, uSunI;
      vec2 rsi(vec3 ro, vec3 rd, float r) {
        float b = dot(ro, rd), c = dot(ro, ro) - r * r, d = b * b - c;
        if (d < 0.0) return vec2(1e9, -1e9);
        d = sqrt(d);
        return vec2(-b - d, -b + d);
      }
      void main() {
        vec3 rd = normalize(vPos - uCam);
        vec2 a = rsi(uCam, rd, uRa);
        if (a.x > a.y) discard;
        float t0 = max(a.x, 0.0), t1 = a.y;
        vec2 g = rsi(uCam, rd, uRp);
        if (g.x > 0.0 && g.x < g.y) t1 = min(t1, g.x);
        const int VS = 10;
        const int LS = 4;
        float ds = (t1 - t0) / float(VS);
        float mu = dot(rd, uSun);
        float pr = 3.0 / (16.0 * 3.14159) * (1.0 + mu * mu);
        float gg = uG * uG;
        float pm = 3.0 / (8.0 * 3.14159) * ((1.0 - gg) * (1.0 + mu * mu)) / ((2.0 + gg) * pow(max(1.0 + gg - 2.0 * uG * mu, 1e-3), 1.5));
        vec3 sumR = vec3(0.0), sumM = vec3(0.0);
        float odR = 0.0, odM = 0.0;
        float t = t0 + ds * 0.5;
        for (int i = 0; i < VS; i++) {
          vec3 p = uCam + rd * t;
          float h = max(length(p) - uRp, 0.0);
          float hr = exp(-h / uHR) * ds, hm = exp(-h / uHM) * ds;
          odR += hr; odM += hm;
          vec2 l = rsi(p, uSun, uRa);
          float dl = l.y / float(LS), lR = 0.0, lM = 0.0, lt = dl * 0.5;
          float shade = 1.0;
          for (int j = 0; j < LS; j++) {
            vec3 q = p + uSun * lt;
            float hq = length(q) - uRp;
            shade *= smoothstep(-uRp * 0.018, uRp * 0.006, hq);
            hq = max(hq, 0.0);
            lR += exp(-hq / uHR) * dl;
            lM += exp(-hq / uHM) * dl;
            lt += dl;
          }
          vec3 tau = uBetaR * (odR + lR) + uBetaM * 1.1 * (odM + lM);
          vec3 att = exp(-tau) * shade;
          sumR += att * hr;
          sumM += att * hm;
          t += ds;
        }
        vec3 col = uSunI * (sumR * uBetaR * pr + sumM * uBetaM * pm);
        col += uNight * (1.0 - exp(-odR * 0.1 / uHR));
        float lum = max(col.r, max(col.g, col.b));
        float alpha = clamp(lum * 2.2, 0.0, 1.0);
        gl_FragColor = vec4(col, alpha);
      }`,side:Tt,transparent:!0,depthWrite:!1,blending:wn,blendEquation:ni,blendSrc:zi,blendDst:gs}),r=new $e(new Jt(i,96,64),s);return r.renderOrder=2,r.frustumCulled=!1,r}function af(n,e,t,i){let s=n*(e.altitude||1.115),r=new Xe({uniforms:{uNoise:{value:t},uTime:i.uTime,uSunLocal:i.uSunLocal,uCover:{value:e.cover??.5},uScale:{value:e.scale??4.2},uSpeed:{value:e.speed??1},uColor:{value:new se(e.color||16777215)},uShadow:{value:new se(e.shadow||4872824)},uDusk:{value:new se(e.dusk||16751206)},uOpacity:{value:e.opacity??.92},uCamAlt:{value:10},uAlt:{value:s-n},uRp:{value:n},uGlow:{value:new se(e.glow||0)},uBand:{value:e.banded??0}},vertexShader:`
      varying vec3 vP; varying vec3 vN; varying vec3 vView;
      void main() {
        vP = normalize(position);
        vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vView = -mv.xyz;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      precision highp float;
      varying vec3 vP; varying vec3 vN; varying vec3 vView;
      uniform vec3 uSunLocal, uColor, uShadow, uDusk, uGlow;
      uniform float uTime, uCover, uScale, uOpacity, uCamAlt, uAlt, uSpeed, uBand, uRp;
      ${Qt}
      float field(vec3 p) {
        vec3 q = p * uScale + vec3(uTime * 0.006 * uSpeed, 0.0, uTime * 0.003 * uSpeed);
        q.y *= 1.0 + uBand * 2.0;
        float warp = n3(q * 0.7 + 11.0) - 0.5;
        float d = fbm5(q + warp * 1.3);
        // Crisp small puffs on the edges of the big weather systems.
        return d + (n3(q * 11.0) - 0.5) * 0.045 + (n3(q * 27.0) - 0.5) * 0.02;
      }
      void main() {
        float d = field(vP);
        float a = smoothstep(uCover, uCover + 0.17, d);
        if (a < 0.01) discard;
        float lightD = field(normalize(vP + uSunLocal * 0.035));
        float selfShadow = smoothstep(uCover - 0.04, uCover + 0.24, lightD);
        float ndl = dot(vP, uSunLocal);
        float day = smoothstep(-0.14, 0.26, ndl);
        float dusk = smoothstep(-0.2, 0.05, ndl) * smoothstep(0.34, 0.08, ndl);
        vec3 lit = mix(uShadow, uColor, 1.0 - selfShadow * 0.75);
        vec3 col = lit * day * 1.02 + uDusk * dusk * 0.8 * (1.0 - selfShadow * 0.4);
        col += uGlow * a;
        col += uShadow * 0.012;
        // Thin out on approach, so that the city stays visible once you are near the ground.
        float fade = uCamAlt > uAlt
          ? mix(0.03, 1.0, smoothstep(uAlt * 2.6, uRp * 1.25, uCamAlt))
          : smoothstep(0.0, uAlt * 0.6, uAlt - uCamAlt) * 0.8;
        float view = dot(normalize(vN), normalize(vView));
        float limb = smoothstep(0.0, 0.25, abs(view));
        float opacity = a * uOpacity * fade * mix(0.55, 1.0, limb);
        gl_FragColor = vec4(col * opacity, opacity);
      }`,side:It,transparent:!0,depthWrite:!1,blending:wn,blendEquation:ni,blendSrc:zi,blendDst:gs}),a=new $e(new Jt(s,128,96),r);return a.renderOrder=3,a}function of(n,e,t,i){let s=n*(e.inner||1.45),r=n*(e.outer||2.35),a=new ca(s,r,196,8),o=new Xe({uniforms:{uInner:{value:s},uOuter:{value:r},uR:{value:n},uSun:i,uNoise:{value:t},uA:{value:new se(e.colorA||15255946)},uB:{value:new se(e.colorB||9071176)}},vertexShader:`
      varying vec3 vLocal;
      void main() { vLocal = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      precision highp float;
      varying vec3 vLocal;
      uniform float uInner, uOuter, uR;
      uniform vec3 uSun, uA, uB;
      ${Qt}
      void main() {
        float r = length(vLocal);
        float t = (r - uInner) / (uOuter - uInner);
        float bands = n3(vec3(t * 15.0, 2.0, 0.0)) * 0.6 + n3(vec3(t * 62.0, 9.0, 0.0)) * 0.4;
        float gaps = 0.25 + 0.75 * smoothstep(0.34, 0.56, bands);
        float edge = smoothstep(0.0, 0.04, t) * smoothstep(1.0, 0.92, t);
        float cassini = 1.0 - 0.85 * smoothstep(0.022, 0.0, abs(t - 0.63));
        float a = gaps * edge * cassini * 0.5;
        if (a < 0.01) discard;
        vec3 col = mix(uB, uA, bands);
        vec3 p = vLocal;
        float along = dot(p, uSun);
        float perp = length(p - uSun * along);
        float shadow = along < 0.0 ? smoothstep(uR * 0.97, uR * 1.04, perp) : 1.0;
        col *= shadow * 0.9 + 0.012;
        gl_FragColor = vec4(col * a, a);
      }`,side:It,transparent:!0,depthWrite:!1,blending:wn,blendEquation:ni,blendSrc:zi,blendDst:gs}),l=new $e(a,o);return l.renderOrder=1,l}function lf(n,e,t,i){let s=n*(e.radius||1.17),r=new Jt(s,96,32,0,Math.PI*2,0,Math.PI),a=new Xe({uniforms:{uNoise:{value:t},uTime:i.uTime,uSunLocal:i.uSunLocal,uA:{value:new se(e.colorA||5701556)},uB:{value:new se(e.colorB||11693311)},uLat:{value:e.latitude??.72},uGain:{value:e.gain??3.2}},vertexShader:`
      varying vec3 vP;
      void main() { vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      precision highp float;
      varying vec3 vP;
      uniform vec3 uA, uB, uSunLocal;
      uniform float uTime, uLat, uGain;
      ${Qt}
      void main() {
        float lat = abs(vP.y);
        float lon = atan(vP.z, vP.x);
        float wob = (n3(vec3(lon * 1.6, uTime * 0.05, vP.y * 2.0)) - 0.5) * 0.18;
        float band = smoothstep(0.075, 0.0, abs(lat - uLat + wob));
        float curtain = 0.35 + 0.65 * n3(vec3(lon * 14.0, uTime * 0.16, 3.0));
        float dark = smoothstep(0.35, -0.2, dot(vP, uSunLocal));
        vec3 col = mix(uA, uB, smoothstep(0.0, 0.08, abs(lat - uLat + wob))) * band * curtain * uGain * (0.15 + dark);
        gl_FragColor = vec4(col, 0.0);
      }`,side:It,transparent:!0,depthWrite:!1,blending:wn,blendEquation:ni,blendSrc:zi,blendDst:zi}),o=new $e(r,a);return o.renderOrder=4,o}var I1=`
float hash2(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
// Returns emissive light; darkens or glazes the base where a window is.
vec3 facade(vec2 uv, float style, float seed, float night, float pixel, vec3 winColor, inout vec3 base, inout float rough, inout float metal) {
  vec2 id = floor(uv);
  vec2 f = fract(uv);
  float detail = smoothstep(1.1, 0.35, pixel);
  float m = 0.0;
  float rnd = hash2(id + seed * 17.3);
  float lit = step(0.36, rnd);
  float power = 0.45 + rnd * 1.0;
  if (style < 1.5) {
    m = step(0.17, f.x) * step(f.x, 0.83) * step(0.22, f.y) * step(f.y, 0.78);
  } else if (style < 2.5) {
    m = step(0.28, f.y) * step(f.y, 0.72);
    rnd = hash2(vec2(floor(uv.x * 0.2), id.y) + seed * 9.1);
    lit = step(0.3, rnd);
    power = 0.5 + rnd * 0.9;
  } else if (style < 3.5) {
    m = step(0.3, f.x) * step(f.x, 0.7);
    rnd = hash2(vec2(id.x, floor(uv.y * 0.25)) + seed * 5.7);
    lit = step(0.25, rnd);
    power = 0.5 + rnd * 0.9;
  } else if (style < 4.5) {
    float d = length(f - 0.5);
    m = smoothstep(0.24, 0.19, d);
    power = 0.4 + rnd * 0.9;
  } else if (style < 5.5) {
    float band = fract(uv.y * 0.11 - uTime * 0.18 + hash2(vec2(id.x, seed)) * 3.0);
    m = step(0.2, f.x) * step(f.x, 0.8);
    lit = 1.0;
    power = smoothstep(0.65, 1.0, band) * 1.7 + 0.05;
    night = 1.0;
  } else {
    float d = length(f - 0.5);
    m = smoothstep(0.42, 0.14, d);
    lit = 1.0;
    power = (0.25 + 0.75 * pow(0.5 + 0.5 * sin(uTime * 1.3 + rnd * 6.28 + uv.y * 0.3), 3.0)) * 1.4;
    night = max(night, 0.45);
  }
  if (style > 6.5) {
    // Crystal: no openings at all, just veins of light rising through the solid.
    float vein = smoothstep(0.42, 0.5, abs(f.x - 0.5));
    float rise = pow(0.5 + 0.5 * sin(uv.y * 0.55 - uTime * 0.6 + rnd * 6.28), 3.0);
    base *= 0.92 + 0.16 * rnd;
    return winColor * vein * (0.05 + rise * 0.5) * detail * (0.25 + night * 1.2);
  }
  float glaze = m * detail;
  // Weathering, floor lines and a recessed frame around each opening.
  float floorLine = 1.0 - 0.14 * smoothstep(0.12, 0.0, abs(f.y - 0.03)) * detail;
  float weather = 0.9 + 0.2 * hash2(vec2(floor(uv.x * 0.25), floor(uv.y * 0.2)) + seed);
  base *= floorLine * weather;
  float frame = m * (1.0 - smoothstep(0.0, 0.06, min(min(f.x - 0.17, 0.83 - f.x), min(f.y - 0.22, 0.78 - f.y))));
  base = mix(base, base * 0.45, clamp(frame, 0.0, 1.0) * detail * (style < 1.5 ? 1.0 : 0.0));
  float tint = hash2(id + seed * 3.1);
  vec3 pane = mix(vec3(0.012, 0.016, 0.024), vec3(0.05, 0.075, 0.1), tint);
  base = mix(base, pane, glaze * (style > 3.5 && style < 4.5 ? 0.6 : 0.93));
  rough = mix(rough, 0.07 + tint * 0.12, glaze);
  metal = mix(metal, 0.9, glaze);
  float avg = 0.13;
  return winColor * mix(avg, m * lit * power, detail) * night * 1.15;
}
`;function Jn(n,e,{spin:t=!1,instanced:i=!1}={}){let s=new Ai({color:16777215,roughness:1,metalness:0,vertexColors:!0});return s.onBeforeCompile=r=>{Object.assign(r.uniforms,e),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        attribute vec2 aPbr; attribute float aGlow; attribute vec3 aWin; attribute float aPage;
        uniform highp sampler2D uFocusTex; uniform float uFocusAmt;
        uniform highp sampler2D uSecTex; uniform float uSecPage, uSecIdx;
        varying float vDim; varying float vKin; varying float vSecRead; varying float vSecNow;
        ${t?"attribute vec3 aPivot; attribute vec4 aAxis;":""}
        varying vec2 vPbr; varying float vGlow; varying vec3 vWin; varying float vPage; varying float vDay; varying float vAbove; varying vec3 vLP;
        uniform vec3 uSunLocal; uniform float uTime, uGrow, uGround;
        ${t?"vec3 rodrigues(vec3 v, vec3 k, float a) { float c = cos(a), s = sin(a); return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }":""}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        ${t?"objectNormal = rodrigues(objectNormal, aAxis.xyz, uTime * aAxis.w);":""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        ${t?"transformed = aPivot + rodrigues(transformed - aPivot, aAxis.xyz, uTime * aAxis.w);":""}
        ${i?"":`
        { float rr = length(transformed);
          if (uGrow < 0.999) transformed *= (uGround + (rr - uGround) * uGrow) / max(rr, 1e-4); }`}
        vPbr = aPbr; vGlow = aGlow; vWin = aWin; vPage = aPage; vLP = transformed;
        // What isn't connected to the page in focus steps back; its neighbours step forward.
        vDim = 0.0; vKin = 0.0;
        // Section buildings carry their number in the fraction of the page id (see city.js).
        vSecRead = 0.0; vSecNow = 0.0;
        float cFrac = fract(aPage);
        if (aPage > -0.5 && cFrac > 0.39) {
          int cIdx = int((cFrac - 0.4) / 0.004 + 0.5);
          float cPageId = floor(aPage);
          vec4 cMask = texelFetch(uSecTex, ivec2(int(cPageId), 0), 0);
          int cByte = int(cMask[cIdx / 8] * 255.0 + 0.5);
          vSecRead = float((cByte >> (cIdx - (cIdx / 8) * 8)) & 1);
          vSecNow = (abs(cPageId - uSecPage) < 0.5 && abs(float(cIdx) - uSecIdx) < 0.5) ? 1.0 : 0.0;
        }
        if (uFocusAmt > 0.001) {
          if (aPage > -0.5) {
            vec4 rel = texelFetch(uFocusTex, ivec2(int(aPage + 0.5), 0), 0);
            vKin = max(rel.g * 0.42, rel.b * 0.8);
            vDim = uFocusAmt * (1.0 - max(max(rel.r, rel.g), rel.b)) * 0.66;
            vKin *= uFocusAmt;
          } else {
            vDim = uFocusAmt * 0.3;
          }
        }
        #ifdef USE_INSTANCING
          vDay = dot(normalize((instanceMatrix * vec4(transformed, 1.0)).xyz), uSunLocal);
          vAbove = 1.0;
        #else
          vDay = dot(normalize(transformed), uSunLocal);
          // Walls darken toward the ground; flat pieces of ground themselves stay as painted.
          float facingUp = dot(normalize(objectNormal), normalize(transformed));
          vAbove = mix(length(transformed) - uGround, 1.0, smoothstep(0.8, 0.97, facingUp));
        #endif`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vPbr; varying float vGlow; varying vec3 vWin; varying float vPage; varying float vDay; varying float vAbove; varying vec3 vLP;
        varying float vDim; varying float vKin; varying float vSecRead; varying float vSecNow;
        uniform float uTime, uHover, uSelected, uFogD;
        uniform vec3 uWinColor, uAccent, uFogC;
        ${Qt}
        ${I1}`).replace("#include <color_fragment>",`#include <color_fragment>
        float cNight = smoothstep(0.16, -0.08, vDay);
        float cRough = vPbr.x, cMetal = vPbr.y;
        vec3 cEmissive = vec3(0.0);
        if (vWin.z > 0.5) {
          float px = clamp((fwidth(vWin.x) + fwidth(vWin.y)) * 0.75, 0.0, 2.0);
          // Rounded: interpolation jitters the value slightly, and the window hash would amplify that.
          cEmissive += facade(vWin.xy, floor(vWin.z + 0.5), floor(vPage + 0.5) + 2.0, max(cNight, vSecRead * 0.85), px, uWinColor, diffuseColor.rgb, cRough, cMetal);
        }
        // Weathering at two scales, so that no surface reads as flat paint from up close.
        #ifndef USE_INSTANCING
          float cCloseUp = 1.0 - smoothstep(4.0, 26.0, length(vViewPosition));
          if (cCloseUp > 0.0) {
            float grime = n3(vLP * 7.0) * 0.55 + n3(vLP * 31.0) * 0.3 + n3(vLP * 110.0) * 0.15;
            diffuseColor.rgb *= mix(1.0, 0.72 + grime * 0.56, cCloseUp);
            cRough = clamp(cRough + (grime - 0.5) * 0.25 * cCloseUp, 0.03, 1.0);
          }
        #endif
        // Ambient occlusion where walls meet the ground: cheap, and it seats buildings in the world.
        diffuseColor.rgb *= 0.42 + 0.58 * smoothstep(0.0, 0.1, vAbove);
        if (vGlow > 0.0) cEmissive += vColor.rgb * vGlow;
        else if (vGlow < 0.0) cEmissive += vColor.rgb * -vGlow * cNight;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = cRough;`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = cMetal;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += cEmissive;
        if (vPage >= 0.0) {
          float hl = max(step(abs(vPage - uHover), 0.5) * 0.7, step(abs(vPage - uSelected), 0.5));
          // Neighbourhood buildings are marked by a quarter on their page id.
          float cOwn = abs(fract(vPage) - 0.25) < 0.12 ? 0.1 : 1.0;
          hl *= cOwn;
          if (hl > 0.0) {
            float rim = pow(1.0 - saturate(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
            totalEmissiveRadiance += uAccent * hl * (0.015 + rim * 0.55) * (0.8 + 0.2 * sin(uTime * 3.0));
          }
          if (vKin > 0.001) {
            float rim = pow(1.0 - saturate(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
            totalEmissiveRadiance += uAccent * vKin * cOwn * (0.01 + rim * 0.5);
          }
          if (vSecNow + vSecRead > 0.01) {
            float rim = pow(1.0 - saturate(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
            totalEmissiveRadiance += uAccent * vSecNow * (0.42 + rim * 2.2) * (0.8 + 0.2 * sin(uTime * 3.0));
            // Bright enough to tell by day, when the lit windows alone would drown in the sun.
            totalEmissiveRadiance += uWinColor * vSecRead * (1.0 - vSecNow) * (0.05 + rim * 0.5);
          }
        }`).replace("#include <lights_fragment_maps>",`#include <lights_fragment_maps>
        { float iblDay = 0.04 + 0.96 * smoothstep(-0.2, 0.3, vDay);
          #if defined(USE_ENVMAP) && defined(RE_IndirectSpecular)
            radiance *= iblDay;
          #endif
          #if defined(RE_IndirectDiffuse) && defined(USE_ENVMAP)
            iblIrradiance *= iblDay;
          #endif
        }`).replace("#include <fog_fragment>",`
        gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(dot(gl_FragColor.rgb, vec3(0.3, 0.59, 0.11))) * 0.42, vDim);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogC, 1.0 - exp(-uFogD * uFogD * dot(vViewPosition, vViewPosition)));`)},s.customProgramCacheKey=()=>`city${t?"-spin":""}${i?"-inst":""}`,s}function cf(n,e){let t=new Ai({color:16777215,roughness:1,metalness:0});return t.onBeforeCompile=i=>{Object.assign(i.uniforms,e),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute vec2 aRoad; attribute vec2 aEnds;
        varying vec2 vRoad; varying vec2 vEnds; varying float vDay; varying vec3 vRP;
        uniform highp sampler2D uFocusTex; uniform float uFocusAmt;
        varying float vDim; varying float vOnRoute;
        uniform vec3 uSunLocal; uniform float uGrow, uGround;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vRoad = aRoad; vEnds = aEnds;
        vDay = dot(normalize(transformed), uSunLocal);
        vRP = normalize(transformed);
        vDim = 0.0; vOnRoute = 0.0;
        if (uFocusAmt > 0.001) {
          vec4 ra = texelFetch(uFocusTex, ivec2(int(aEnds.x + 0.5), 0), 0);
          vec4 rb = texelFetch(uFocusTex, ivec2(int(aEnds.y + 0.5), 0), 0);
          vOnRoute = ra.b * rb.b * uFocusAmt;
          vDim = uFocusAmt * (1.0 - max(max(ra.r, rb.r), vOnRoute)) * 0.6;
        }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vRoad; varying vec2 vEnds; varying float vDay; varying vec3 vRP;
        varying float vDim; varying float vOnRoute;
        uniform float uTime, uSelected, uHover, uFogD;
        uniform vec3 uAccent, uFogC;
        ${Qt}
        ${n.road.glsl}`).replace("#include <color_fragment>",`#include <color_fragment>
        float rNight = smoothstep(0.16, -0.08, vDay);
        vec3 rAlbedo = vec3(0.1); float rRough = 0.9, rMetal = 0.0; vec3 rEmissive = vec3(0.0);
        roadSurface(vRoad.x, vRoad.y, rNight, rAlbedo, rRough, rMetal, rEmissive);
        diffuseColor.rgb = rAlbedo;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = rRough;`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = rMetal;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += rEmissive;
        float rSel = max(max(step(abs(vEnds.x - uSelected), 0.5), step(abs(vEnds.y - uSelected), 0.5)),
                         max(step(abs(vEnds.x - uHover), 0.5), step(abs(vEnds.y - uHover), 0.5)) * 0.6);
        if (rSel > 0.0) {
          float pulse = 0.5 + 0.5 * sin(vRoad.y * 5.0 - uTime * 5.0);
          totalEmissiveRadiance += uAccent * rSel * (0.1 + pulse * 0.55) * smoothstep(1.0, 0.55, abs(vRoad.x));
        }
        if (vOnRoute > 0.01) {
          float dash = 0.5 + 0.5 * sin(vRoad.y * 3.0 - uTime * 7.0);
          totalEmissiveRadiance += uAccent * vOnRoute * (0.25 + dash * 1.1) * smoothstep(1.0, 0.5, abs(vRoad.x));
        }`).replace("#include <fog_fragment>",`
        gl_FragColor.rgb *= 1.0 - vDim;
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogC, 1.0 - exp(-uFogD * uFogD * dot(vViewPosition, vViewPosition)));`)},t.customProgramCacheKey=()=>`road-${n.id}`,t}function hf(n,e){return new Xe({uniforms:{uTime:n.uTime,uSelected:n.uSelected,uHover:n.uHover,uColor:{value:new se(e)},uAccent:n.uAccent,uFade:{value:1}},vertexShader:`
      attribute float aS; attribute vec2 aEnds;
      varying float vS; varying vec2 vEnds;
      void main() { vS = aS; vEnds = aEnds; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying float vS; varying vec2 vEnds;
      uniform float uTime, uSelected, uHover, uFade;
      uniform vec3 uColor, uAccent;
      void main() {
        float sel = max(step(abs(vEnds.x - uSelected), 0.5), step(abs(vEnds.y - uSelected), 0.5));
        sel = max(sel, max(step(abs(vEnds.x - uHover), 0.5), step(abs(vEnds.y - uHover), 0.5)) * 0.7);
        float dash = smoothstep(0.4, 0.6, fract(vS * 1.6 - uTime * 0.7));
        vec3 col = mix(uColor * (0.015 + dash * 0.11), uAccent * (0.8 + dash * 2.2), sel);
        gl_FragColor = vec4(col, 1.0) * uFade;
      }`,transparent:!0,depthWrite:!1,blending:jt})}function uf(n,e){return new Xe({uniforms:{uSunLocal:n.uSunLocal,uColor:{value:new se(e)},uScale:{value:1},uFade:{value:1}},vertexShader:`
      attribute float aSize;
      uniform vec3 uSunLocal; uniform float uScale;
      varying float vN;
      void main() {
        vN = smoothstep(0.1, -0.2, dot(normalize(position), uSunLocal));
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.2, aSize * uScale / -mv.z);
      }`,fragmentShader:`
      varying float vN;
      uniform vec3 uColor; uniform float uFade;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = pow(max(1.0 - d, 0.0), 2.0) * vN * uFade;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor * a * 2.6, a);
      }`,transparent:!0,depthWrite:!1,blending:jt})}var Vi=new k,ou=new k,L1=new k;function ai(n,e){return Math.acos(Math.max(-1,Math.min(1,n.dot(e))))}function D1(n,e,t,i=new k){let s=ai(n,e);if(s<1e-5)return i.copy(n);let r=Math.sin(s);return i.copy(n).multiplyScalar(Math.sin((1-t)*s)/r).addScaledVector(e,Math.sin(t*s)/r).normalize()}function tn(n,e,t,i=new k){let s=Math.abs(n.y)>.95?Vi.set(1,0,0):Vi.set(0,1,0),r=ou.crossVectors(s,n).normalize(),a=L1.crossVectors(r,n).normalize();return i.copy(n).addScaledVector(r,Math.cos(e)*t).addScaledVector(a,Math.sin(e)*t).normalize()}function df(n,e,t,i,s){let r=n.length,a=Math.PI*(3-Math.sqrt(5));n.forEach((c,h)=>{let p=r===1?.35:1-(h+.5)/r*2,u=Math.sqrt(1-p*p),d=h*a+i.range(-.3,.3);c.dir=new k(Math.cos(d)*u,p*.92,Math.sin(d)*u).normalize()});let o=n.map(()=>new k),l=Math.min(1.2,2.6/Math.sqrt(Math.max(r,2)));for(let c=0;c<240;c++){let h=1-c/240;o.forEach(p=>p.set(0,0,0));for(let p=0;p<r;p++)for(let u=p+1;u<r;u++){let d=Vi.subVectors(n[p].dir,n[u].dir),m=Math.max(d.lengthSq(),1e-4),x=(.03+((n[p].rD+n[u].rD)/t)**2*.5)/m;o[p].addScaledVector(d,x),o[u].addScaledVector(d,-x)}for(let p of e){let u=Vi.subVectors(n[p.b].dir,n[p.a].dir),d=u.length()||1e-4,m=.05*Math.min(2,p.weight)*(d-l);o[p.a].addScaledVector(u,m/d),o[p.b].addScaledVector(u,-m/d)}n.forEach((p,u)=>{let d=o[u];d.addScaledVector(p.dir,-d.dot(p.dir));let m=d.length();m>.2&&d.multiplyScalar(.2/m),p.dir.addScaledVector(d,.34*h+.02).normalize(),Math.abs(p.dir.y)>.86&&(p.dir.y*=.97,p.dir.normalize())})}for(let c of n){let h=c.dir.clone(),p=-1/0;for(let u=0;u<14;u++){let d=u===0?c.dir.clone():tn(c.dir,i.range(0,6.28),i.range(.02,.22)),m=0;for(let f of n){if(f===c)continue;let g=(c.rD+f.rD+.5)/t,v=ai(d,f.dir);v<g&&(m+=g-v)}let x=s(d)-m*30-(u===0?0:ai(d,c.dir)*.8);x>p&&(p=x,h=d)}c.dir.copy(h)}for(let c=0;c<60;c++){let h=!1;for(let p=0;p<r;p++)for(let u=p+1;u<r;u++){let d=(n[p].rD+n[u].rD+.35)/t,m=ai(n[p].dir,n[u].dir);if(m<d){let x=Vi.subVectors(n[p].dir,n[u].dir).normalize();n[p].dir.addScaledVector(x,(d-m)*.55).normalize(),n[u].dir.addScaledVector(x,-(d-m)*.55).normalize(),h=!0}}if(!h)break}}function N1(n,e,t,i){let s=new k().crossVectors(n,e),r=new k().crossVectors(t,i),a=new k().crossVectors(s,r);if(a.lengthSq()<1e-10)return!1;a.normalize();let o=(l,c,h)=>Math.abs(ai(c,l)+ai(l,h)-ai(c,h))<1e-4;for(let l of[a,a.clone().negate()])if(o(l,n,e)&&o(l,t,i))return!0;return!1}function pf(n,e,t=1.15){let i=n.length,s=Array.from({length:i},(u,d)=>d),r=u=>{for(;s[u]!==u;)s[u]=s[s[u]],u=s[u];return u};for(let u of e)u.angle=ai(n[u.a].dir,n[u.b].dir);let a=[...e].sort((u,d)=>u.angle-d.angle),o=[],l=[],c=u=>{let d=0;for(let m of o)m.a===u.a||m.a===u.b||m.b===u.a||m.b===u.b||N1(n[u.a].dir,n[u.b].dir,n[m.a].dir,n[m.b].dir)&&d++;return d},h=[];for(let u of a){let d=r(u.a),m=r(u.b);d!==m?(s[d]=m,o.push(u)):h.push(u)}let p=Math.round(i*1.9);for(let u of h)o.length<p&&u.angle<t&&c(u)<=1?o.push(u):l.push(u);return{roads:o,air:l}}function ff(n,e,t,i,s,r,a=.4){let o=ai(n,e),l=Math.max(10,Math.ceil(o*s/.28)),c=new k().crossVectors(n,e);c.lengthSq()<1e-8&&c.set(0,1,0),c.normalize();let h=r.range(1.2,2.4),p=r.range(3,5),u=r.range(0,6.28),d=r.range(0,6.28),m=[];for(let x=0;x<=l;x++){let f=x/l,g=D1(n,e,f),v=(Math.sin(f*h*Math.PI+u)*.7+Math.sin(f*p*Math.PI+d)*.3)*Math.sin(f*Math.PI)*a/s;g.addScaledVector(c,v).normalize(),m.push(g)}for(let x=0;x<5;x++){for(let f=1;f<m.length-1;f++){let g=m[f];for(let v=0;v<t.length;v++){if(v===i[0]||v===i[1])continue;let w=(t[v].rD*1.02+.2)/s,_=ai(g,t[v].dir);_<w&&(Vi.copy(g).sub(t[v].dir),Vi.addScaledVector(g,-Vi.dot(g)),Vi.lengthSq()<1e-8&&Vi.copy(c),g.addScaledVector(Vi.normalize(),(w-_)*.8).normalize())}}for(let f=1;f<m.length-1;f++)ou.copy(m[f-1]).add(m[f+1]).normalize(),m[f].lerp(ou,.45).normalize()}return m}var Oa=class{constructor(e=.09){this.cell=e,this.map=new Map,this.items=[]}key(e,t,i){return(e+512)*1048576+(t+512)*1024+(i+512)}add(e,t,i){let s={x:e.x,y:e.y,z:e.z,r:t,f:i};this.items.push(s);let r=t+i,a=this.cell,o=Math.floor((e.x-r)/a),l=Math.floor((e.x+r)/a),c=Math.floor((e.y-r)/a),h=Math.floor((e.y+r)/a),p=Math.floor((e.z-r)/a),u=Math.floor((e.z+r)/a);for(let d=o;d<=l;d++)for(let m=c;m<=h;m++)for(let x=p;x<=u;x++){let f=this.key(d,m,x),g=this.map.get(f);g||(g=[],this.map.set(f,g)),g.push(s)}}sample(e,t,i){let s=this.cell,r=this.map.get(this.key(Math.floor(e/s),Math.floor(t/s),Math.floor(i/s)));if(!r)return 0;let a=0;for(let o=0;o<r.length;o++){let l=r[o],c=e-l.x,h=t-l.y,p=i-l.z,u=Math.sqrt(c*c+h*h+p*p);if(u<=l.r)return 1;if(u<l.r+l.f){let d=1-(u-l.r)/l.f,m=d*d*(3-2*d);m>a&&(a=m)}}return a}},oc=class{constructor(e=.06){this.cell=e,this.map=new Map}_key(e,t,i){return(e+512)*1048576+(t+512)*1024+(i+512)}add(e,t){let i=this.cell,s={x:e.x,y:e.y,z:e.z,r:t},r=Math.floor((e.x-t)/i),a=Math.floor((e.x+t)/i),o=Math.floor((e.y-t)/i),l=Math.floor((e.y+t)/i),c=Math.floor((e.z-t)/i),h=Math.floor((e.z+t)/i);for(let p=r;p<=a;p++)for(let u=o;u<=l;u++)for(let d=c;d<=h;d++){let m=this._key(p,u,d),x=this.map.get(m);x||(x=[],this.map.set(m,x)),x.push(s)}}free(e,t){let i=this.cell,s=Math.floor((e.x-t)/i),r=Math.floor((e.x+t)/i),a=Math.floor((e.y-t)/i),o=Math.floor((e.y+t)/i),l=Math.floor((e.z-t)/i),c=Math.floor((e.z+t)/i);for(let h=s;h<=r;h++)for(let p=a;p<=o;p++)for(let u=l;u<=c;u++){let d=this.map.get(this._key(h,p,u));if(d)for(let m=0;m<d.length;m++){let x=d[m],f=e.x-x.x,g=e.y-x.y,v=e.z-x.z,w=t+x.r;if(f*f+g*g+v*v<w*w)return!1}}return!0}};var mf=new Map;function lc(n){if(Array.isArray(n))return n;let e=mf.get(n);if(!e){let t=new se(n);e=[t.r,t.g,t.b],mf.set(n,e)}return e}function dt(n,e,t){let i=lc(n),s=lc(e);return[i[0]+(s[0]-i[0])*t,i[1]+(s[1]-i[1])*t,i[2]+(s[2]-i[2])*t]}function gf(n,e){let t=lc(n);return[t[0]*e,t[1]*e,t[2]*e]}var Ae={NONE:0,GRID:1,BANDS:2,STRIPES:3,SPOTS:4,DATA:5,PULSE:6,CRYSTAL:7},ki=class{constructor({spin:e=!1}={}){this.pos=[],this.nor=[],this.col=[],this.pbr=[],this.glw=[],this.wn=[],this.pg=[],this.isSpin=e,e&&(this.piv=[],this.axr=[]),this.e=new Oe().elements.slice(),this.stack=[],this.c=[1,1,1],this.r=.8,this.m=0,this.g=0,this.winStyle=0,this.cw=.1,this.ch=.12,this.page=-1,this.pv=[0,0,0],this.ax=[0,1,0,1],this._t=new Oe}get vertexCount(){return this.pos.length/3}save(){return this.stack.push(this.e.slice()),this}restore(){return this.e=this.stack.pop(),this}setMatrix(e){return this.e=e.elements.slice(),this}_mul(e){let t=this.e,i=e.elements,s=new Array(16);for(let r=0;r<4;r++){let a=i[r*4],o=i[r*4+1],l=i[r*4+2],c=i[r*4+3];s[r*4]=t[0]*a+t[4]*o+t[8]*l+t[12]*c,s[r*4+1]=t[1]*a+t[5]*o+t[9]*l+t[13]*c,s[r*4+2]=t[2]*a+t[6]*o+t[10]*l+t[14]*c,s[r*4+3]=t[3]*a+t[7]*o+t[11]*l+t[15]*c}return this.e=s,this}move(e,t,i){return this._mul(this._t.makeTranslation(e,t,i))}rotX(e){return this._mul(this._t.makeRotationX(e))}rotY(e){return this._mul(this._t.makeRotationY(e))}rotZ(e){return this._mul(this._t.makeRotationZ(e))}scale(e,t=e,i=e){return this._mul(this._t.makeScale(e,t,i))}paint(e,{rough:t=.8,metal:i=0,glow:s=0,win:r=0,cw:a=.1,ch:o=.12}={}){return this.c=lc(e),this.r=t,this.m=i,this.g=s,this.winStyle=r,this.cw=a,this.ch=o,this}spinAbout(e,t,i,s,r,a,o){let l=this.e;this.pv=[l[0]*e+l[4]*t+l[8]*i+l[12],l[1]*e+l[5]*t+l[9]*i+l[13],l[2]*e+l[6]*t+l[10]*i+l[14]];let c=l[0]*s+l[4]*r+l[8]*a,h=l[1]*s+l[5]*r+l[9]*a,p=l[2]*s+l[6]*r+l[10]*a,u=Math.hypot(c,h,p)||1;return this.ax=[c/u,h/u,p/u,o],this}_v(e,t,i,s,r,a,o,l){let c=this.e;this.pos.push(c[0]*e+c[4]*t+c[8]*i+c[12],c[1]*e+c[5]*t+c[9]*i+c[13],c[2]*e+c[6]*t+c[10]*i+c[14]);let h=c[0]*s+c[4]*r+c[8]*a,p=c[1]*s+c[5]*r+c[9]*a,u=c[2]*s+c[6]*r+c[10]*a,d=Math.hypot(h,p,u)||1;this.nor.push(h/d,p/d,u/d),this.col.push(this.c[0],this.c[1],this.c[2]),this.pbr.push(this.r,this.m),this.glw.push(this.g),this.wn.push(o,l,o===void 0?0:this.winStyle),this.pg.push(this.page),this.isSpin&&(this.piv.push(this.pv[0],this.pv[1],this.pv[2]),this.axr.push(this.ax[0],this.ax[1],this.ax[2],this.ax[3]))}tri(e,t,i,s,r,a){let o=t[0]-e[0],l=t[1]-e[1],c=t[2]-e[2],h=i[0]-e[0],p=i[1]-e[1],u=i[2]-e[2],d=l*u-c*p,m=c*h-o*u,x=o*p-l*h,f=s!==void 0&&this.winStyle>0;return this._vw(e,d,m,x,f?s:null),this._vw(t,d,m,x,f?r:null),this._vw(i,d,m,x,f?a:null),this}_vw(e,t,i,s,r){r?this._v(e[0],e[1],e[2],t,i,s,r[0],r[1]):(this._v(e[0],e[1],e[2],t,i,s,0,0),this.wn[this.wn.length-1]=0)}quad(e,t,i,s,r){return r?(this.tri(e,t,i,r[0],r[1],r[2]),this.tri(e,i,s,r[0],r[2],r[3])):(this.tri(e,t,i),this.tri(e,i,s)),this}box(e,t,i,{y:s=0,top:r=1,topZ:a=r,caps:o=!0}={}){let l=e/2,c=i/2,h=l*r,p=c*a,u=s+t,d=[-l,s,c],m=[l,s,c],x=[l,s,-c],f=[-l,s,-c],g=[-h,u,p],v=[h,u,p],w=[h,u,-p],_=[-h,u,-p],M=this.cw,S=this.ch,y=(b,C)=>[[b/M,s/S],[C/M,s/S],[C/M,u/S],[b/M,u/S]];return this.quad(d,m,v,g,y(0,e)),this.quad(m,x,w,v,y(0,i)),this.quad(x,f,_,w,y(0,e)),this.quad(f,d,g,_,y(0,i)),o&&(this.quad(g,v,w,_),this.quad(f,x,m,d)),this}cyl(e,t,i,s=12,{y:r=0,smooth:a=!0,caps:o=!0}={}){let l=r+i,c=(e-t)/(i||1),h=2*Math.PI*Math.max(e,t);for(let p=0;p<s;p++){let u=p/s*Math.PI*2,d=(p+1)/s*Math.PI*2,m=Math.sin(u),x=Math.cos(u),f=Math.sin(d),g=Math.cos(d),v=p/s*h/this.cw,w=(p+1)/s*h/this.cw,_=r/this.ch,M=l/this.ch,S=this.winStyle>0;if(a){let y=(b,C,R,L,D,B)=>{this._v(R*b,L,R*C,b,c,C,D,B),S||(this.wn[this.wn.length-1]=0)};y(m,x,e,r,v,_),y(f,g,e,r,w,_),y(f,g,t,l,w,M),y(m,x,e,r,v,_),y(f,g,t,l,w,M),y(m,x,t,l,v,M)}else this.quad([e*m,r,e*x],[e*f,r,e*g],[t*f,l,t*g],[t*m,l,t*x],[[v,_],[w,_],[w,M],[v,M]]);o&&t>1e-4&&this.tri([0,l,0],[t*m,l,t*x],[t*f,l,t*g]),o&&e>1e-4&&this.tri([0,r,0],[e*f,r,e*g],[e*m,r,e*x])}return this}cone(e,t,i=10,s={}){return this.cyl(e,0,t,i,s)}lathe(e,t=16,{smooth:i=!0}={}){let s=e.length,r=[];for(let a=0;a<s;a++){let o=e[Math.max(0,a-1)],l=e[Math.min(s-1,a+1)],c=l[0]-o[0],h=l[1]-o[1],p=Math.hypot(c,h)||1;r.push([h/p,-c/p])}for(let a=0;a<s-1;a++){let[o,l]=e[a],[c,h]=e[a+1],p=l/this.ch,u=h/this.ch;for(let d=0;d<t;d++){let m=d/t*Math.PI*2,x=(d+1)/t*Math.PI*2,f=Math.sin(m),g=Math.cos(m),v=Math.sin(x),w=Math.cos(x),_=d/t*6.283*o/this.cw,M=(d+1)/t*6.283*o/this.cw;if(i){let S=(y,b,C,R,L,D,B)=>{this._v(C*y,R,C*b,L[0]*y,L[1],L[0]*b,D,B),this.winStyle||(this.wn[this.wn.length-1]=0)};S(f,g,o,l,r[a],_,p),S(v,w,o,l,r[a],M,p),S(v,w,c,h,r[a+1],M,u),S(f,g,o,l,r[a],_,p),S(v,w,c,h,r[a+1],M,u),S(f,g,c,h,r[a+1],_,u)}else this.quad([o*f,l,o*g],[o*v,l,o*w],[c*v,h,c*w],[c*f,h,c*g])}}return this}sphere(e,{y:t=0,seg:i=12,rings:s=8,sx:r=1,sy:a=1,from:o=0,to:l=1}={}){let c=[];for(let h=0;h<=s;h++){let p=o+(l-o)*(h/s),u=-Math.PI/2+p*Math.PI;c.push([Math.max(0,Math.cos(u))*e*r,t+e*a*(1+Math.sin(u))])}return this.lathe(c,i)}dome(e,{y:t=0,seg:i=16,rings:s=6,sy:r=1}={}){let a=[];for(let o=0;o<=s;o++){let l=o/s*Math.PI/2;a.push([Math.cos(l)*e,t+Math.sin(l)*e*r])}return this.lathe(a,i)}prism(e,t,{y:i=0,top:s=1,cap:r=!0}={}){let a=e.length,o=i+t,l=0,c=0;for(let p of e)l+=p[0],c+=p[1];l/=a,c/=a;let h=0;for(let p=0;p<a;p++){let u=e[p],d=e[(p+1)%a],m=Math.hypot(d[0]-u[0],d[1]-u[1]),x=[l+(u[0]-l)*s,c+(u[1]-c)*s],f=[l+(d[0]-l)*s,c+(d[1]-c)*s],g=[[h/this.cw,i/this.ch],[(h+m)/this.cw,i/this.ch],[(h+m)/this.cw,o/this.ch],[h/this.cw,o/this.ch]];this.quad([u[0],i,u[1]],[d[0],i,d[1]],[f[0],o,f[1]],[x[0],o,x[1]],g),h+=m,r&&s>.001&&this.tri([l,o,c],[x[0],o,x[1]],[f[0],o,f[1]])}return this}ngon(e,t,i,{y:s=0,top:r=1,rot:a=0,cap:o=!0}={}){let l=[];for(let c=0;c<e;c++){let h=a-c/e*Math.PI*2;l.push([Math.cos(h)*t,Math.sin(h)*t])}return this.prism(l,i,{y:s,top:r,cap:o})}crystal(e,t,i,{y:s=0,tip:r=.3,foot:a=.12,rot:o=0}={}){let l=i*a,c=i*r;return this.ngon(e,t,l,{y:s,top:1,rot:o,cap:!1}),this.ngon(e,t,i-l-c,{y:s+l,top:.92,rot:o,cap:!1}),this.ngon(e,t*.92,c,{y:s+i-c,top:.001,rot:o,cap:!1})}gable(e,t,i,{y:s=0,over:r=.02}={}){let a=e/2+r,o=i/2+r,l=s+t;return this.quad([-a,s,o],[a,s,o],[a,l,0],[-a,l,0]),this.quad([a,s,-o],[-a,s,-o],[-a,l,0],[a,l,0]),this.tri([a,s,o],[a,s,-o],[a,l,0]),this.tri([-a,s,-o],[-a,s,o],[-a,l,0]),this}disc(e,{y:t=0,seg:i=24,inner:s=0}={}){for(let r=0;r<i;r++){let a=r/i*Math.PI*2,o=(r+1)/i*Math.PI*2,l=Math.sin(a),c=Math.cos(a),h=Math.sin(o),p=Math.cos(o);s>0?this.quad([s*l,t,s*c],[e*l,t,e*c],[e*h,t,e*p],[s*h,t,s*p]):this.tri([0,t,0],[e*l,t,e*c],[e*h,t,e*p])}return this}ring(e,t,{y:i=0,seg:s=24,tseg:r=6}={}){for(let a=0;a<s;a++){let o=a/s*Math.PI*2,l=(a+1)/s*Math.PI*2;for(let c=0;c<r;c++){let h=c/r*Math.PI*2,p=(c+1)/r*Math.PI*2,u=(x,f)=>{let g=e+t*Math.cos(f);return[g*Math.sin(x),i+t*Math.sin(f),g*Math.cos(x)]},d=(x,f)=>[Math.cos(f)*Math.sin(x),Math.sin(f),Math.cos(f)*Math.cos(x)],m=(x,f)=>{let g=u(x,f),v=d(x,f);this._v(g[0],g[1],g[2],v[0],v[1],v[2],0,0),this.wn[this.wn.length-1]=0};m(o,h),m(l,h),m(l,p),m(o,h),m(l,p),m(o,p)}}return this}tube(e,t,{seg:i=6,taper:s=1}={}){let r=e.length;if(r<2)return this;let a=[0,1,0],o=[];for(let c=0;c<r;c++){let h=e[c],p=e[Math.max(0,c-1)],u=e[Math.min(r-1,c+1)],d=u[0]-p[0],m=u[1]-p[1],x=u[2]-p[2],f=Math.hypot(d,m,x)||1;d/=f,m/=f,x/=f,Math.abs(a[0]*d+a[1]*m+a[2]*x)>.95&&(a=[1,0,0]);let g=m*a[2]-x*a[1],v=x*a[0]-d*a[2],w=d*a[1]-m*a[0],_=Math.hypot(g,v,w)||1;g/=_,v/=_,w/=_;let M=v*x-w*m,S=w*d-g*x,y=g*m-v*d;a=[M,S,y];let b=t*(1+(s-1)*(c/(r-1))),C=[];for(let R=0;R<i;R++){let L=R/i*Math.PI*2,D=Math.cos(L),B=Math.sin(L),P=g*D+M*B,O=v*D+S*B,U=w*D+y*B;C.push([h[0]+P*b,h[1]+O*b,h[2]+U*b,P,O,U])}o.push(C)}let l=c=>{this._v(c[0],c[1],c[2],c[3],c[4],c[5],0,0),this.wn[this.wn.length-1]=0};for(let c=0;c<r-1;c++)for(let h=0;h<i;h++){let p=o[c][h],u=o[c][(h+1)%i],d=o[c+1][(h+1)%i],m=o[c+1][h];l(p),l(m),l(d),l(p),l(d),l(u)}return this}toGeometry(){let e=new nt;return e.setAttribute("position",new De(new Float32Array(this.pos),3)),e.setAttribute("normal",new De(new Float32Array(this.nor),3)),e.setAttribute("color",new De(new Float32Array(this.col),3)),e.setAttribute("aPbr",new De(new Float32Array(this.pbr),2)),e.setAttribute("aGlow",new De(new Float32Array(this.glw),1)),e.setAttribute("aWin",new De(new Float32Array(this.wn),3)),e.setAttribute("aPage",new De(new Float32Array(this.pg),1)),this.isSpin&&(e.setAttribute("aPivot",new De(new Float32Array(this.piv),3)),e.setAttribute("aAxis",new De(new Float32Array(this.axr),4))),e}};function oi(n,e,t=0,i=new Oe){let s=new k(n.x,n.y,n.z).normalize(),r=Math.abs(s.y)>.95?new k(1,0,0):new k(0,1,0),a=new k().crossVectors(r,s).normalize(),o=new k().crossVectors(a,s).normalize(),l=Math.cos(t),c=Math.sin(t),h=a.clone().multiplyScalar(l).addScaledVector(o,c),p=o.clone().multiplyScalar(l).addScaledVector(a,-c);return i.makeBasis(h,s,p),i.setPosition(s.x*e,s.y*e,s.z*e),i}var F1=new Oe,xf=new Oe,vf=.12,O1=.4,U1=.004;function B1(n,e){let t=n.filter(a=>a.level<=3);if(t.length<=e)return t;let i=Math.min(...t.map(a=>a.level)),s=new Set(t.filter(a=>a.level===i).slice(0,e)),r=[];for(let a of t)a.level===i?r.push([]):(r.at(-1)??(r[0]=[])).push(a);for(let a=0;s.size<e&&r.some(o=>o.length>a);a++)for(let o of r)o[a]&&s.size<e&&s.add(o[a]);return t.filter(a=>s.has(a))}function yf(n,e,t,i=1){let s=n.importance??.5,r=Math.log2(1+n.words/250),a=Math.min(1,n.rank/(e||1)),o=Math.min(t*.24,.6+Math.pow(s,1.6)*3+r*.1),l=.32+s*.4+r*.03,c=B1(n.sections,i<.5?5:8+Math.round(s*12)),h=l*.82+.3,p=h+.62+s*s*2.5+Math.sqrt(c.length)*.34;return{h:o,w:l,rank:a,importance:s,tier:n.tier??2,sections:c,plaza:h,rD:p}}function z1(n,e,t,i){let s=e.layout||"grid",r=e.block||.44,a=n.rD,o=[],l=[],c=[],h=x=>a*(.82+.22*Math.sin(x*3+n.h*7)*Math.sin(x*5+n.w*11));if(s==="grid"){let x=Math.ceil(a/r);for(let f=-x;f<x;f++)for(let g=-x;g<x;g++){let v=(f+.5)*r,w=(g+.5)*r,_=Math.hypot(v,w),M=Math.atan2(w,v);_<n.plaza+r*.4||_>h(M)||o.push({x:v,y:w,d:_,size:r,turn:t.int(0,3)*(Math.PI/2)})}}else if(s==="rings"){let x=n.plaza+r*.75;for(;x<a;){let v=Math.max(6,Math.floor(x*Math.PI*2/r)),w=t.range(0,6.28);for(let _=0;_<v;_++){let M=w+_/v*Math.PI*2;x>h(M)||o.push({x:Math.cos(M)*x,y:Math.sin(M)*x,d:x,size:r,turn:-M+Math.PI/2})}x+=r}let f=48;for(let v=0;x-v*r>n.plaza;v++){let w=x-(v+.5)*r;if(w<n.plaza)break;for(let _=0;_<f;_++){let M=_/f*Math.PI*2,S=(_+1)/f*Math.PI*2;l.push([Math.cos(M)*w,Math.sin(M)*w,Math.cos(S)*w,Math.sin(S)*w])}if(w<a*.96){let _=v%2?1:-1;c.push({loop:!0,points:Array.from({length:f+1},(M,S)=>[Math.cos(_*S*Math.PI*2/f)*w,Math.sin(_*S*Math.PI*2/f)*w])})}}let g=6;for(let v=0;v<g;v++){let w=v/g*Math.PI*2+.3;l.push([Math.cos(w)*n.plaza,Math.sin(w)*n.plaza,Math.cos(w)*a*.96,Math.sin(w)*a*.96])}}else{let x=Math.round(a*a/(r*r)*3.2);for(let f=0;f<x;f++){let g=t.range(0,6.283),v=n.plaza+r*.3+Math.pow(t.next(),.75)*(a-n.plaza);v>h(g)||o.push({x:Math.cos(g)*v,y:Math.sin(g)*v,d:v,size:r*t.range(.75,1.15),turn:t.range(0,6.28)})}}let p=.35+n.importance*1.05;for(let x of o)x.tier=p*(1-Math.min(1,(x.d-n.plaza)/Math.max(a-n.plaza,.01)));o.sort((x,f)=>x.d-f.d);let u=Math.min(1,.42+n.importance*1.1)*Math.min(1,i),d=n.sections.length+6,m=o.filter((x,f)=>f<d||t.next()<u);return s==="grid"&&H1(m,r,n.plaza,l,c),{cells:m,streets:l,lanes:c}}function H1(n,e,t,i,s){let r=new Map,a=new Map,o=(c,h,p)=>{c.has(h)||c.set(h,new Set),c.get(h).add(p)};for(let c of n){let h=Math.round(c.x/e-.5),p=Math.round(c.y/e-.5);o(r,h,p),o(r,h+1,p),o(a,p,h),o(a,p+1,h)}let l=(c,h)=>{for(let[p,u]of c){let d=[...u].sort((x,f)=>x-f),m=d[0];for(let x=0;x<d.length;x++){if(x+1<d.length&&d[x+1]===d[x]+1)continue;let f=h(p,m),g=h(p,d[x]+1);i.push([f[0],f[1],g[0],g[1]]),d[x]+1-m>=3&&Math.abs(p*e)>t+e*.5&&s.push({points:p%2?[f,g]:[g,f]}),x+1<d.length&&(m=d[x+1])}}};l(r,(c,h)=>[c*e,h*e]),l(a,(c,h)=>[h*e,c*e])}function V1(n,e){let t=[];for(let i=0;i<n.length-1;i++){let[s,r]=n[i],[a,o]=n[i+1],l=Math.max(1,Math.ceil(Math.hypot(a-s,o-r)/.3));for(let c=i?1:0;c<=l;c++)t.push(e(s+(a-s)*c/l,r+(o-r)*c/l))}return t}function G1(n,e,t,i,s,r,a,o){let l=Math.hypot(i-e,s-t),c=Math.max(1,Math.ceil(l/.3)),h=-(s-t)/(l||1),p=(i-e)/(l||1),u=r/2,d=null,m=null;for(let x=0;x<=c;x++){let f=x/c,g=e+(i-e)*f,v=t+(s-t)*f,w=o(g+h*u,v+p*u).multiplyScalar(a),_=o(g-h*u,v-p*u).multiplyScalar(a);d&&n.quad(m.toArray(),d.toArray(),w.toArray(),_.toArray()),d=w,m=_}}function W1(n,{rng:e,frame:t,accent:i}){let s=e.range(.22,.46),r=e.range(.18,.28);n.paint(t,{rough:.6,metal:.5});let a=.012;for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.save().move(l*r/2,0,c*r/2).box(a,s,a).restore();for(let l=1;l<=3;l++){let c=s*l/3;n.box(r,a,a,{y:c}).save().move(0,0,r/2).box(r,a,a,{y:c}).restore(),n.save().move(0,0,-r/2).box(r,a,a,{y:c}).restore(),n.save().move(r/2,0,0).box(a,a,r,{y:c}).restore(),n.save().move(-r/2,0,0).box(a,a,r,{y:c}).restore()}n.paint(i,{rough:.5,metal:.2});let o=r*.9;n.save().move(o,0,0).box(.02,s*1.5,.02),n.box(.42,.016,.016,{y:s*1.48}).restore(),n.paint(i,{rough:.3,glow:-3}),n.save().move(o,s*1.54,0).box(.024,.024,.024).restore()}function $1(n,e){let{G:t,civ:i}=e,s=new ki({spin:!0}),r=tn(n.dir,n.base+.8,n.plaza*.95/t),a=Math.max(.75,n.h*.78)+.3,o=Math.max(.55,n.w*1.5);s.setMatrix(oi(r,t,n.base)),s.spinAbout(0,0,0,0,1,0,0),s.paint(4869458,{rough:.8}),s.box(.16,.03,.16),s.paint(15905308,{rough:.45,metal:.4});for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])s.save().move(l*.022,.03,c*.022).box(.008,a,.008).restore();for(let l=.1;l<a;l+=.08)s.box(.05,.005,.05,{y:l});return s.paint(14212322,{rough:.5,metal:.3}),s.box(.05,.05,.06,{y:a+.03}),s.save().move(0,a+.08,0),s.spinAbout(0,0,0,0,1,0,.26),s.paint(15905308,{rough:.45,metal:.4}),s.save().move(o*.5,0,0).box(o,.018,.018).restore(),s.save().move(-o*.14,0,0).box(o*.28,.018,.018).restore(),s.save().move(o*.25,.02,0).rotZ(-.09).box(o*.56,.004,.004).restore(),s.paint(3816770,{rough:.8}),s.save().move(-o*.24,-.04,0).box(.08,.05,.05).restore(),s.save().move(o*.72,-a*.3,0).box(.003,a*.3,.003).restore(),s.paint(i.palette.accent,{rough:.5}),s.save().move(o*.72,-a*.34,0).box(.05,.03,.05).restore(),s.paint(16734764,{glow:9}),s.save().move(0,.05,0).sphere(.016,{seg:6,rings:4}).restore(),s.restore(),s}function bf(n){let{civ:e,G:t,R:i,sites:s,occ:r,rng:a}=n,o=new ki,l=new ki,c=new ki({spin:!0}),h=n.budget,p=.01,u=[0,0,0];o.page=-1,n.roadGeometry=q1(n,o);for(let g of s){let v=new _t(`site:${g.page.path}`),w=g.page.id,_=v.range(0,Math.PI*2);g.base=_,o.page=w,c.page=w,r.add(g.dir,g.plaza/t);let{cells:M,streets:S,lanes:y}=z1(g,e,v,h),b=h>=.34,C=(P,O)=>tn(g.dir,Math.atan2(O,P)+_,Math.hypot(P,O)/t);g.lanes=e.street&&b?y.map(P=>({loop:!!P.loop,dirs:V1(P.points,C)})):[],l.page=w+.25;let R=o.vertexCount<n.vertexCap;if((e.lot||e.lotFor)&&R){o.page=-1,o.setMatrix(xf);for(let P of M){let O=e.lotFor?e.lotFor(P.tier,v):v.pick(e.lot);o.paint(O,{rough:e.lotRough??.92});let U=P.size*.5,H=C(P.x-U,P.y-U).multiplyScalar(t+.005),te=C(P.x+U,P.y-U).multiplyScalar(t+.005),$=C(P.x+U,P.y+U).multiplyScalar(t+.005),Z=C(P.x-U,P.y+U).multiplyScalar(t+.005);o.quad(Z.toArray(),$.toArray(),te.toArray(),H.toArray())}o.page=w}if(e.street&&b){o.page=-1,o.setMatrix(xf),o.paint(e.street.color,{rough:e.street.rough??.85,glow:e.street.glow??0});for(let[P,O,U,H]of S)G1(o,P,O,U,H,e.street.width,t+.009,C);o.page=w}let L=o.vertexCount<n.vertexCap*1.2;o.setMatrix(oi(g.dir,t+p,_)),L&&e.plaza(o,{r:g.plaza,rng:v});let D=new k().copy(g.dir).multiplyScalar(t);o.setMatrix(oi(g.dir,t,_)),c.setMatrix(oi(g.dir,t,_)),o.vertexCount<n.vertexCap?e.landmark(o,{h:g.h,w:g.w,rank:g.rank,rng:v,spin:c,capital:g.capital,words:g.page.words}):L?e.section(o,{h:g.h,w:g.w,rng:v,spin:c,index:0}):(o.paint(e.palette.scaffold||9080468,{rough:.7,win:1,cw:.06,ch:.07}),o.box(g.w,g.h,g.w)),n.pickables.push({kind:"page",id:w,local:D.clone().multiplyScalar((t+g.h*.5)/t),r:Math.max(g.h*.52,g.w*.9),top:t+g.h*1.1,foot:g.w*1.2+.1}),g.sectionDirs=[];let B=0;for(let P of M){let O=C(P.x,P.y),U=_+P.turn;if(B<g.sections.length&&o.vertexCount<n.vertexCap*1.2){let te=g.sections[B],$=te.words||20,Z=Math.min(g.h*.66,.26+Math.log2(1+$/60)*.16),ee=Math.min(P.size*.9,.2+Math.min(.18,$/3e3)+v.range(0,.06)),ye=ee*.8/t;if(!r.free(O,ye)||(n.sampleSurface(O.x,O.y,O.z,u),u[2]<.96))continue;r.add(O,ye),o.setMatrix(oi(O,t,U)),c.setMatrix(oi(O,t,U)),o.page=c.page=w+O1+B*U1,e.section(o,{h:Z,w:ee,rng:v,spin:c,index:B}),o.page=c.page=w,n.pickables.push({kind:"section",id:w,slug:te.slug,title:te.title,index:B,local:O.clone().multiplyScalar(t+Z*.5),r:Math.max(Z*.55,ee*.7),top:t+Z*1.1,foot:ee*.9+.04}),g.sectionDirs.push(O),B++;continue}if(l.vertexCount>n.vertexCap)break;let H=P.size*.42*(.85+g.importance*.3);r.free(O,H/t)&&(n.sampleSurface(O.x,O.y,O.z,u),!(u[2]<.96)&&(r.add(O,H*.9/t),l.setMatrix(oi(O,t,U)),c.setMatrix(oi(O,t,U)),e.filler(l,{s:H,rng:v,spin:c,tier:P.tier})))}}o.page=-1,c.page=-1,l.page=-1,n.craneBuilders=new Map;for(let g of s)g.page.fresh&&n.craneBuilders.size<40&&n.craneBuilders.set(g.page.id,$1(g,n));for(let g of n.ghosts){let v=s.find(_=>g.refs.includes(_.page.id))||s[0];if(!v)break;let w=new _t(`ghost:${g.key}`);for(let _=0;_<30;_++){let M=tn(v.dir,w.range(0,6.28),(v.rD+w.range(.1,1.5))/t);if(r.free(M,.38/t)&&(n.sampleSurface(M.x,M.y,M.z,u),!(u[2]<.96))){r.add(M,.32/t),o.setMatrix(oi(M,t,w.range(0,6.28))),W1(o,{rng:w,frame:e.palette.scaffold||12173516,accent:e.palette.accent}),n.pickables.push({kind:"ghost",key:g.key,local:M.clone().multiplyScalar(t+.3),r:.42}),n.ghostLabels.push({ghost:g,dir:M});break}}}e.roadside&&n.roadPaths.forEach((g,v)=>{if(l.vertexCount>n.vertexCap)return;let w=new _t(`road:${v}`),_=g.dirs,M=e.road.width,S=w.range(0,.4);for(let y=1;y<_.length-1;y++){if(S+=_[y].distanceTo(_[y-1])*t,S<e.road.lampEvery)continue;S=0;let b=new k().subVectors(_[y+1],_[y-1]).normalize(),C=new k().crossVectors(_[y],b).normalize();for(let R of[-1,1]){if(!w.chance(e.road.lampChance??.75))continue;let L=M*.5+.05+w.range(0,.1),D=_[y].clone().addScaledVector(C,R*L/t).normalize();if(!r.free(D,.035/t)||(n.sampleSurface(D.x,D.y,D.z,u),u[2]<.96))continue;let B=Math.atan2(C.dot(new k(1,0,0)),C.dot(new k(0,0,1)));l.setMatrix(oi(D,t,B)),c.setMatrix(oi(D,t,B)),e.roadside(l,{rng:w,side:R,elev:e.road.elev||0,spin:c})}}});let d=new _t(`scatter:${n.cluster.id}:${e.id}`),m=Math.round((e.scatterDensity??1)*13*i*i*h),x=new k,f=[0,0,0];for(let g=0;g<m&&l.vertexCount<n.vertexCap;g++){let v=d.range(-1,1),w=d.range(0,6.283),_=Math.sqrt(1-v*v);x.set(_*Math.cos(w),v,_*Math.sin(w)),n.sampleSurface(x.x,x.y,x.z,f);let M=f[1];if(f[2]>.2&&(!r.free(x,.06/t)||s.some(y=>x.distanceTo(y.dir)<y.rD/t))||M<(e.scatterMinH??.015)&&f[2]<.9)continue;let S=oi(x,i+f[0],d.range(0,6.283),F1);l.setMatrix(S),c.setMatrix(S),e.scatter(l,{rng:d,h:M,lat:Math.abs(x.y),x:x.x,y:x.y,z:x.z,spin:c,noise:n.noise})}return{main:o,detail:l,spin:c}}function q1(n,e){let{civ:t,G:i,occ:s,sites:r}=n,a=t.road.width,o=t.road.elev||0,l=.014+o,c=[],h=[],p=[],u=[],d=[],m=(f,g,v,w)=>{let _=0,M=c.length/3,S=new k,y=new k;for(let b=0;b<f.length;b++){let C=f[b];S.subVectors(f[Math.min(f.length-1,b+1)],f[Math.max(0,b-1)]),y.crossVectors(C,S).normalize(),b>0&&(_+=f[b].distanceTo(f[b-1])*i);for(let R of[-1,1]){let L=C.clone().addScaledVector(y,R*a*.5/i).normalize().multiplyScalar(w);c.push(L.x,L.y,L.z),h.push(C.x,C.y,C.z),p.push(R,_),u.push(g,v)}if(b<f.length-1){let R=M+b*2;d.push(R,R+2,R+3,R,R+3,R+1)}}return _};for(let f of n.roads){let g=r[f.a],v=r[f.b],w=g.page.id,_=v.page.id,M=f.dirs.filter(b=>ai(b,g.dir)>g.plaza*.86/i&&ai(b,v.dir)>v.plaza*.86/i);if(M.length<3)continue;let S=m(M,w,_,i+l);for(let b of M)s.add(b,(a*.5+.05)/i);n.roadPaths.push({dirs:M,length:S,a:w,b:_,ab:f.ab,ba:f.ba,points:X1(M,i+l+.006)});let y=0;for(let b=1;b<M.length;b++){y+=M[b].distanceTo(M[b-1])*i;let C=t.terrain.height(n.noise,M[b].x,M[b].y,M[b].z)<-.04;y<(C?.55:t.road.pillarEvery||.8)||!C&&!(o>.01&&t.road.pillar)||(y=0,e.setMatrix(oi(M[b],i,0)),t.road.pillar?t.road.pillar(e,{elev:o,overWater:C}):(e.paint(9210500,{rough:.85}),e.box(a*.82,vf,.05,{y:-vf+.01})))}}let x=new nt;return x.setAttribute("position",new De(new Float32Array(c),3)),x.setAttribute("normal",new De(new Float32Array(h),3)),x.setAttribute("aRoad",new De(new Float32Array(p),2)),x.setAttribute("aEnds",new De(new Float32Array(u),2)),x.setIndex(d),x}function X1(n,e){let t=new Float32Array(n.length*3);return n.forEach((i,s)=>{t[s*3]=i.x*e,t[s*3+1]=i.y*e,t[s*3+2]=i.z*e}),t}function _f(n){let{G:e,sites:t}=n,i=[],s=[],r=[];for(let o of n.airLinks){let l=t[o.a],c=t[o.b],h=ai(l.dir,c.dir),p=.5+h*e*.09,u=Math.max(14,Math.ceil(h*e*2)),d=[],m=0,x=null;for(let v=0;v<=u;v++){let w=v/u,_=Math.sin(h)||1,M=new k().addScaledVector(l.dir,Math.sin((1-w)*h)/_).addScaledVector(c.dir,Math.sin(w*h)/_).normalize().multiplyScalar(e+l.h*(1-w)*.55+c.h*w*.55+Math.sin(w*Math.PI)*p);x&&(m+=M.distanceTo(x)),d.push(M),x=M}let f=0;for(let v=0;v<u;v++){let w=d[v+1].distanceTo(d[v]);i.push(d[v].x,d[v].y,d[v].z,d[v+1].x,d[v+1].y,d[v+1].z),s.push(f,f+w),f+=w,r.push(l.page.id,c.page.id,l.page.id,c.page.id)}let g=new Float32Array(d.length*3);d.forEach((v,w)=>{g[w*3]=v.x,g[w*3+1]=v.y,g[w*3+2]=v.z}),n.airPaths.push({points:g,length:m,a:l.page.id,b:c.page.id,ab:o.ab,ba:o.ba})}let a=new nt;return a.setAttribute("position",new De(new Float32Array(i),3)),a.setAttribute("aS",new De(new Float32Array(s),1)),a.setAttribute("aEnds",new De(new Float32Array(r),2)),a}var Y1=(n,e,t)=>n+(e-n)*t,gi=new k,Z1=new k,Ii=new k,ei=new k,Tr=new k,Ss=class{constructor(e,t){let i=e.length/3;this.n=i,this.pts=t?K1(e):e,this.cum=new Float32Array(i);let s=0;for(let r=1;r<i;r++){let a=(r-1)*3,o=r*3;s+=Math.hypot(this.pts[o]-this.pts[a],this.pts[o+1]-this.pts[a+1],this.pts[o+2]-this.pts[a+2]),this.cum[r]=s}this.length=s}at(e,t){let{cum:i,pts:s,n:r}=this,a=Math.min(t,r-2);for(;a<r-2&&i[a+1]<e;)a++;for(;a>0&&i[a]>e;)a--;let o=i[a+1]-i[a]||1,l=(e-i[a])/o,c=a*3,h=(a+1)*3,p=s[h]-s[c],u=s[h+1]-s[c+1],d=s[h+2]-s[c+2];return gi.set(s[c]+p*l,s[c+1]+u*l,s[c+2]+d*l),ei.set(p,u,d).normalize(),a}};function K1(n){let e=n.length/3,t=new Float32Array(n.length);for(let i=0;i<e;i++){let s=e-1-i;t[i*3]=n[s*3],t[i*3+1]=n[s*3+1],t[i*3+2]=n[s*3+2]}return t}function wf(n,e,t,i,s,r,a,o,l){n[e]=t.x*a,n[e+1]=t.y*a,n[e+2]=t.z*a,n[e+3]=0,n[e+4]=i.x*o,n[e+5]=i.y*o,n[e+6]=i.z*o,n[e+7]=0,n[e+8]=s.x*l,n[e+9]=s.y*l,n[e+10]=s.z*l,n[e+11]=0,n[e+12]=r.x,n[e+13]=r.y,n[e+14]=r.z,n[e+15]=1}var cc=class{constructor(e,t,i){this.planet=e,this.group=new bt,this.group.visible=!1,t.add(this.group);let{civ:s,G:r}=e,a=new _t(`traffic:${s.id}:${e.cluster.id}`),o=Jn(s,i,{instanced:!0});o.envMap=e.envMap,o.envMapIntensity=.5,this.material=o,this.pools=[];let l=(M,S)=>{if(S<=0)return null;let y=new ki;M.build(y,a);let b=new yn(y.toGeometry(),o,S);return b.instanceMatrix.setUsage(vr),b.frustumCulled=!1,b.castShadow=M.shadow!==!1,b.count=0,this.group.add(b),{mesh:b,spec:M,items:[]}},c=s.vehicles||[],h=c.reduce((M,S)=>M+(S.weight||1),0)||1,p=e.roadPaths,u=Math.min(520,Math.round(e.budget*420)),d=Math.min(420,Math.round(e.budget*360)),m=M=>e.siteByPage.get(M)?.importance??.5,x=[];for(let M of p){let S=(.5+Math.min(4,Math.log2(1+M.ab+M.ba))*.5)*Y1(.55,1.75,Math.max(m(M.a),m(M.b))),y=Math.max(1,Math.round(M.length/2.4*S));(M.ab>0||M.ba===0)&&x.push({path:new Ss(M.points,!1),n:y,from:M.a,to:M.b}),M.ba>0&&x.push({path:new Ss(M.points,!0),n:y,from:M.b,to:M.a})}let f=x.reduce((M,S)=>M+S.n,0),g=f>u?u/f:1,v=c.map(M=>l(M,Math.ceil((u+d)*(M.weight||1)/h)+8)),w=()=>{let M=a.next()*h,S=0;for(;S<c.length-1&&(M-=c[S].weight||1)>0;)S++;return v[S]};for(let M of x){let S=Math.max(1,Math.round(M.n*g));for(let y=0;y<S;y++){let b=w();!b||b.items.length>=b.mesh.instanceMatrix.count||b.items.push({path:M.path,s:(y+a.next()*.8)/S*M.path.length,v:(b.spec.speed||.35)*a.range(.82,1.18),hint:0,lane:s.road.width*(s.road.laneOffset??.24),scale:1,loop:!1,from:M.from,to:M.to})}}let _=e.sites.reduce((M,S)=>M+S.importance*S.importance,0)||1;for(let M of e.sites){if(!M.lanes?.length)continue;let S=Math.round(d*M.importance*M.importance/_),y=J1(M.lanes,a).slice(0,Math.max(1,Math.ceil(S/3)));for(let b=0;b<S;b++){let C=y[b%y.length],R=w();!R||R.items.length>=R.mesh.instanceMatrix.count||(C.path??=new Ss(j1(C.dirs,r+.012),!1),R.items.push({path:C.path,s:a.next()*C.path.length,v:(R.spec.speed||.35)*a.range(.55,.85),hint:0,lane:0,scale:.58,loop:C.loop}))}}for(let M of v)M&&this.pools.push(M);if(s.flyer){let M=[];for(let y of e.airPaths){let b=1+Math.min(3,Math.round(Math.log2(1+y.ab+y.ba)*.7)+Math.floor(y.length/12));for(let[C,R]of[[y.ab>0?b:0,!1],[y.ba>0?b:0,!0]]){let L=new Ss(y.points,R),D=R?y.b:y.a,B=R?y.a:y.b;for(let P=0;P<C;P++)M.push({path:L,s:(P+a.next()*.6)/C*L.length,v:(s.flyer.speed||1.1)*a.range(.85,1.15),hint:0,lane:0,scale:1,loop:!1,from:D,to:B,air:!0})}}for(let y of e.sites){let b=Math.round(Math.max(0,y.importance-.32)*13*Math.min(1,e.budget*1.5));for(let C=0;C<b;C++){let R=y.plaza+a.range(.25,.8)*(y.rD-y.plaza),L=r+y.h*a.range(.5,1.05)+.25,D=new Ss(Q1(y.dir,R/r,L,a.chance(.5)),!1);M.push({path:D,s:a.next()*D.length,v:(s.flyer.speed||1.1)*a.range(.32,.5),hint:0,lane:0,scale:.42,loop:!0})}}let S=l(s.flyer,M.length);S&&(S.items=M,S.air=!0,this.pools.push(S))}if(this.walkers=[],s.walker){let M=Math.min(820,Math.round(e.budget*680)),S=C=>.12+C.importance*C.importance*2.4,y=M/e.sites.reduce((C,R)=>C+S(R),0);for(let C of e.sites){let R=Math.max(3,Math.round(y*S(C))),L=Sf(C.dir),D=C.sectionDirs||[];for(let B=0;B<R;B++)if(D.length&&a.chance(.42)){let O=a.pick(D),U=tn(C.dir,Math.atan2(O.dot(L.n),O.dot(L.e)),C.plaza*.95/r);this.walkers.push({shuttle:!0,a:U,b:O,t:a.next(),v:(s.walker.speed||.13)*a.range(.7,1.3)/Math.max(.2,U.distanceTo(O)*r),jitter:a.range(-.05,.05),phase:a.range(0,6.28)})}else this.walkers.push({shuttle:!1,site:C,frame:L,angle:a.range(0,6.28),radius:a.range(C.plaza*1,Math.max(C.plaza*1.06,C.rD*.75)),w:(s.walker.speed||.13)*a.range(.7,1.3)*(a.chance(.5)?1:-1)/C.rD,phase:a.range(0,6.28)})}let b=new ki;if(s.walker.build(b,a),this.walkerMesh=new yn(b.toGeometry(),o,this.walkers.length||1),this.walkerMesh.instanceMatrix.setUsage(vr),this.walkerMesh.frustumCulled=!1,this.walkerMesh.castShadow=!0,s.walker.colors){let C=new se;for(let R=0;R<this.walkers.length;R++)this.walkerMesh.setColorAt(R,C.set(a.pick(s.walker.colors)))}this.group.add(this.walkerMesh)}this.time=0,this.G=r,this.walkLift=s.walker?.lift??.02,this.bob=s.walker?.bob??.006,this.bobRate=s.walker?.bobRate??11}vehicleOn(e,t){let i=null;for(let s of this.pools)for(let r of s.items)r.from===e&&r.to===t&&!r.ridden&&(!i||r.s<i.s)&&(i=r);return i}pick(e,t,i){let s=null,r=1/0;for(let a of this.pools)for(let o of a.items){if(o.from===void 0||o.x===void 0)continue;let l=o.x-e.x,c=o.y-e.y,h=o.z-e.z,p=l*t.x+c*t.y+h*t.z;p<0||p>=r||l*l+c*c+h*h-p*p<i*i&&(s=o,r=p)}return s?{item:s,t:r}:null}update(e){this.time+=e;for(let t of this.pools){let i=t.mesh.instanceMatrix.array,{items:s,spec:r}=t,a=r.y||0,o=0;for(let l=0;l<s.length;l++){let c=s[l];c.s+=c.v*e,c.s>=c.path.length&&(c.ridden?(c.s=c.path.length,c.arrived=!0):c.s=0),c.hint=c.path.at(c.s,c.hint),Ii.copy(gi).normalize(),t.air||ei.addScaledVector(Ii,-ei.dot(Ii)).normalize(),Tr.crossVectors(Ii,ei).normalize();let h=t.air?Z1.crossVectors(ei,Tr).normalize():Ii;gi.addScaledVector(Tr,-c.lane).addScaledVector(Ii,a),c.x=gi.x,c.y=gi.y,c.z=gi.z,c.fx=ei.x,c.fy=ei.y,c.fz=ei.z;let p=Math.min(c.s,c.path.length-c.s),u=(c.loop?1:Math.min(1,p/(t.air?.9:.22)))*c.scale;wf(i,o*16,Tr,h,ei,gi,u,u,u),o++}t.mesh.count=o,t.mesh.instanceMatrix.needsUpdate=!0}if(this.walkerMesh){let t=this.walkerMesh.instanceMatrix.array,i=this.G;for(let s=0;s<this.walkers.length;s++){let r=this.walkers[s],a=1;if(r.shuttle){if(r.t+=r.v*e,r.t>1){r.t=0;let l=r.a;r.a=r.b,r.b=l}gi.copy(r.a).lerp(r.b,r.t).normalize(),Ii.copy(gi),ei.subVectors(r.b,r.a).normalize(),a=Math.min(1,Math.min(r.t,1-r.t)*14)}else{r.angle+=r.w*e;let l=(r.radius+Math.sin(this.time*.3+r.phase)*.08)/i,c=Math.cos(r.angle),h=Math.sin(r.angle);gi.copy(r.site.dir).addScaledVector(r.frame.e,c*l).addScaledVector(r.frame.n,h*l).normalize(),Ii.copy(gi),ei.copy(r.frame.e).multiplyScalar(-h*Math.sign(r.w)).addScaledVector(r.frame.n,c*Math.sign(r.w))}ei.addScaledVector(Ii,-ei.dot(Ii)).normalize(),Tr.crossVectors(Ii,ei).normalize();let o=Math.abs(Math.sin(this.time*this.bobRate+r.phase))*this.bob;gi.multiplyScalar(i+this.walkLift+o),wf(t,s*16,Tr,Ii,ei,gi,a,a,a)}this.walkerMesh.instanceMatrix.needsUpdate=!0}}};function J1(n,e){let t=[...n];for(let i=t.length-1;i>0;i--){let s=Math.floor(e.next()*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}function j1(n,e){let t=new Float32Array(n.length*3);return n.forEach((i,s)=>{t[s*3]=i.x*e,t[s*3+1]=i.y*e,t[s*3+2]=i.z*e}),t}function Q1(n,e,t,i){let s=Sf(n),r=40,a=new Float32Array((r+1)*3),o=Math.cos(e),l=Math.sin(e);for(let c=0;c<=r;c++){let h=(i?-c:c)/r*Math.PI*2,p=n.x*o+(s.e.x*Math.cos(h)+s.n.x*Math.sin(h))*l,u=n.y*o+(s.e.y*Math.cos(h)+s.n.y*Math.sin(h))*l,d=n.z*o+(s.e.z*Math.cos(h)+s.n.z*Math.sin(h))*l;a[c*3]=p*t,a[c*3+1]=u*t,a[c*3+2]=d*t}return a}function Sf(n){let e=Math.abs(n.y)>.95?new k(1,0,0):new k(0,1,0),t=new k().crossVectors(e,n).normalize(),i=new k().crossVectors(t,n).normalize();return{e:t,n:i}}var Mf=.1;function hc(n,e,t){let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function eb(n,e){let t=new xn;t.add(new $e(new Jt(10,24,16),new Xe({side:Tt,uniforms:{uZ:{value:new se(e.zenith)},uH:{value:new se(e.horizon)},uG:{value:new se(e.ground)}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vD; uniform vec3 uZ, uH, uG;
        void main(){ float y = vD.y;
          vec3 c = y > 0.0 ? mix(uH, uZ, pow(y, 0.55)) : mix(uH, uG, pow(-y, 0.4));
          gl_FragColor = vec4(c * 1.5, 1.0); }`})));let i=new br(n),s=i.fromScene(t,.02);return i.dispose(),s.texture}var uc=class{constructor({cluster:e,civ:t,graph:i,noiseTex:s,renderer:r,index:a,quality:o,focus:l}){this.cluster=e,this.civ=t,this.graph=i,this.noiseTex=s,this.renderer=r,this.index=a,this.quality=o,this.seed=An(`${t.id}:${e.name}`),this.noise=new wr(this.seed),this.rng=new _t(this.seed);let c=e.pageIds.length;this.R=(11+2.5*Math.sqrt(c))*(t.sizeScale||1),this.G=this.R+Mf,this.isPlanet=!0,this.minD=.6,this.minEye=.07,this.budget=Math.min(1,20/Math.max(c,1))*o.detail,this.pickables=[],this.roadPaths=[],this.airPaths=[],this.ghostLabels=[],this.flatten=new Oa,this.flattenRoads=new Oa,this.occ=new oc,this.node=new bt,this.tilt=new bt,this.spin=new bt,this.node.add(this.tilt),this.tilt.add(this.spin),this.tilt.rotation.z=(t.tilt??.22)*(this.rng.chance(.5)?1:-1),this.tilt.rotation.x=this.rng.range(-.08,.08),this.spin.rotation.y=this.rng.range(0,Math.PI*2),this.uniforms={uTime:{value:0},uSunLocal:{value:new k(1,0,0)},uNoise:{value:s},uHazeAmt:{value:1},uHazeColor:{value:new se(t.atmosphere.haze||8956671)},uCloudCover:{value:t.clouds&&t.clouds.groundShadow!==!1?t.clouds.cover:0},uCloudScale:{value:t.clouds?.scale??4.2},uGrow:{value:1},uGround:{value:this.G},uHover:{value:-9},uSelected:{value:-9},uAccent:{value:new se(t.palette.accent)},uWinColor:{value:new se(t.palette.window)},uFogD:{value:0},uFogC:{value:new se(0)},uFocusTex:l.texture,uFocusAmt:l.amount,uSecTex:l.sections,uSecPage:l.secPage,uSecIdx:l.secIdx};let h=t.atmosphere.fog||{};this.fogDay=new se(h.day??9417436),this.fogDusk=new se(h.dusk??14256742),this.fogNight=new se(h.night??461332),this.spinRate=Math.PI*2/(t.dayLength||170)}sampleSurface(e,t,i,s){let r=this.civ.terrain.height(this.noise,e,t,i),a=(this.civ.terrain.amp??1.4)*(this.R/15),o=r>0?Math.pow(r,this.civ.terrain.power??1.2)*a:0,l=this.G,c=this.noise.simplex(e*7+31,t*7,i*7)*(.75/l),h=this.noise.simplex(e*7,t*7+47,i*7)*(.75/l),p=this.noise.simplex(e*7,t*7,i*7+59)*(.75/l),u=Math.max(this.flatten.sample(e+c,t+h,i+p),this.flattenRoads.sample(e,t,i));s[0]=o+(Mf-o)*u,s[1]=r,s[2]=u}plan(){let{graph:e,cluster:t,G:i,R:s}=this,r=t.pageIds.map(x=>e.pages[x]),a=Math.max(...r.map(x=>x.rank),.001),o=[...r].sort((x,f)=>(f.importance??f.rank)-(x.importance??x.rank));this.sites=o.map((x,f)=>({page:x,capital:f===0,...yf(x,a,s,this.budget)})),this.siteByPage=new Map(this.sites.map(x=>[x.page.id,x]));let l=new Map(this.sites.map((x,f)=>[x.page.id,f])),c=new Map;for(let x of e.edges){if(!l.has(x.s)||!l.has(x.t))continue;let f=l.get(x.s),g=l.get(x.t),v=f<g?`${f}|${g}`:`${g}|${f}`;c.has(v)||c.set(v,{a:Math.min(f,g),b:Math.max(f,g),ab:0,ba:0});let w=c.get(v);f<g?w.ab+=x.w:w.ba+=x.w}let h=[...c.values()];for(let x of h)x.weight=Math.log2(1+x.ab+x.ba);let p=x=>{let f=0;for(let g=0;g<6;g++){let v=g===0?x:tn(x,g*1.05,2/i);f+=this.civ.terrain.height(this.noise,v.x,v.y,v.z)>.02?1:0}return f/6};df(this.sites,h,i,this.rng,p);let{roads:u,air:d}=pf(this.sites,h);this.roads=u,this.airLinks=d;for(let x of u)x.dirs=ff(this.sites[x.a].dir,this.sites[x.b].dir,this.sites,[x.a,x.b],i,this.rng.fork(`${x.a}-${x.b}`),this.civ.road.meander??.4);for(let x of this.sites)this.flatten.add(x.dir,(x.rD*1.08+.75)/i,1.1/i);let m=(this.civ.road.width*.5+.1)/i;for(let x of u)for(let f=0;f<x.dirs.length;f+=1){let g=x.dirs[f];this.civ.terrain.height(this.noise,g.x,g.y,g.z)>-.04&&this.flattenRoads.add(g,m,.42/i)}this.ghosts=e.ghosts.filter(x=>x.cluster===t.id).sort((x,f)=>f.refs.length-x.refs.length).slice(0,14);for(let x of this.ghosts){let f=this.sites.find(g=>x.refs.includes(g.page.id));f&&this.flatten.add(f.dir,(f.rD+1.9)/i,.9/i)}}buildTerrain(){let{R:e,quality:t,civ:i}=this;this.envMap=eb(this.renderer,i.env);let s=(o,l,c,h)=>this.sampleSurface(o,l,c,h),r=Math.min(t.terrain,Math.round(e*t.terrainPerR)),a=sf(i,this.uniforms);a.envMap=this.envMap,a.envMapIntensity=.2,this.terrainMaterial=a,this.terrainHi=new $e(au(e,r,s),a),this.terrainHi.receiveShadow=!0,this.terrainLo=new $e(au(e,36,s),a),this.terrainLo.receiveShadow=!1,this.terrainHi.frustumCulled=this.terrainLo.frustumCulled=!0,this.terrainHi.userData.planet=this,this.terrainLo.userData.planet=this,this.spin.add(this.terrainHi,this.terrainLo),this.terrainHi.visible=!1}buildCivilisation(){let{civ:e,uniforms:t,G:i}=this,{main:s,detail:r,spin:a}=bf(this),o=Jn(e,t);if(o.envMap=this.envMap,o.envMapIntensity=.4,this.cityMaterial=o,this.cityMesh=new $e(s.toGeometry(),o),this.cityMesh.castShadow=this.cityMesh.receiveShadow=!0,this.detailMesh=new $e(r.toGeometry(),o),this.detailMesh.castShadow=this.detailMesh.receiveShadow=!0,this.detailMesh.visible=!1,this.spin.add(this.cityMesh,this.detailMesh),a.vertexCount){let x=Jn(e,t,{spin:!0});x.envMap=this.envMap,x.envMapIntensity=.4,this.spinMesh=new $e(a.toGeometry(),x),this.spinMesh.frustumCulled=!1,this.spin.add(this.spinMesh)}if(this.craneGroup=new bt,this.spin.add(this.craneGroup),this.cranes=new Map,this.craneBuilders.size){this.craneMaterial=Jn(e,t,{spin:!0}),this.craneMaterial.envMap=this.envMap,this.craneMaterial.envMapIntensity=.4;for(let[x,f]of this.craneBuilders){let g=new $e(f.toGeometry(),this.craneMaterial);g.frustumCulled=!1,g.castShadow=!0,this.craneGroup.add(g),this.cranes.set(x,g)}}this.craneBuilders=null;let l=cf(e,t);l.side=It,l.envMap=this.envMap,l.envMapIntensity=.2,this.roadMesh=new $e(this.roadGeometry,l),this.roadMesh.receiveShadow=!0,this.spin.add(this.roadMesh);let c=_f(this);this.arcMaterial=hf(t,e.palette.route||e.palette.accent),this.arcs=new sa(c,this.arcMaterial),this.arcs.renderOrder=6,this.spin.add(this.arcs);let h=new _t(this.seed+5),p=[],u=[];for(let x of this.sites){let f=Math.round(4+x.rD*x.rD*3.4);for(let g=0;g<f;g++){let v=tn(x.dir,h.range(0,6.28),Math.sqrt(h.next())*x.rD*1.5/i).multiplyScalar(i+.2);p.push(v.x,v.y,v.z),u.push(h.range(.5,1.6)*(.75+x.importance*.6))}}for(let x of this.roadPaths)for(let f=0;f<x.dirs.length;f+=3){let g=x.dirs[f].clone().multiplyScalar(i+.2);p.push(g.x,g.y,g.z),u.push(.45)}let d=new nt;d.setAttribute("position",new De(new Float32Array(p),3)),d.setAttribute("aSize",new De(new Float32Array(u),1)),this.lightsMaterial=uf(t,e.palette.window),this.lights=new ds(d,this.lightsMaterial),this.lights.renderOrder=1,this.spin.add(this.lights),this.traffic=new cc(this,this.spin,t),this.links=new Map;let m=(x,f)=>x<f?`${x}|${f}`:`${f}|${x}`;for(let x of this.roadPaths)this.links.set(m(x.a,x.b),{kind:"road",path:x});for(let x of this.airPaths)this.links.set(m(x.a,x.b),{kind:"air",path:x})}linkBetween(e,t){return this.links.get(e<t?`${e}|${t}`:`${t}|${e}`)||null}clearFresh(e){let t=this.cranes.get(e);t&&(this.craneGroup.remove(t),t.geometry.dispose(),this.cranes.delete(e))}buildSky(){let{civ:e,R:t,noiseTex:i,uniforms:s}=this;this.atmosphere=rf(t,e.atmosphere,i),this.atmosphere.userData.planet=this,this.node.add(this.atmosphere),e.clouds&&(this.clouds=af(t,e.clouds,i,s),this.spin.add(this.clouds)),e.rings&&(this.ringSun={value:new k(1,0,0)},this.rings=of(t,e.rings,i,this.ringSun),this.rings.rotation.x=Math.PI/2+(e.rings.tilt??0),this.tilt.add(this.rings)),e.aurora&&(this.aurora=lf(t,e.aurora,i,s),this.spin.add(this.aurora)),e.customize&&(this.custom=e.customize(this))}setOrbit({radius:e,angle:t,speed:i,inclination:s,ascending:r}){this.orbit={radius:e,angle:t,speed:i,inclination:s,ascending:r},this.applyOrbit(0)}applyOrbit(e){let t=this.orbit;t.angle+=t.speed*e;let i=Math.cos(t.angle)*t.radius,s=Math.sin(t.angle)*t.radius;this.node.position.set(i,0,s).applyAxisAngle(nb,t.inclination).applyAxisAngle(sb,t.ascending)}setHover(e){this.uniforms.uHover.value=e??-9}setSelected(e){this.uniforms.uSelected.value=e??-9}eyeFloor(e){let t=e.length()||1,i=this.G;for(let s of this.pickables){if(s.top===void 0||s.top<=i)continue;let r=Er.copy(s.local).multiplyScalar(t/s.local.length()).distanceTo(e),a=s.foot*1.5;if(r>=a)continue;let o=Math.min(1,(a-r)/(a-s.foot*.9)),l=o*o*(3-2*o);i=Math.max(i,this.G+(s.top-this.G)*l)}return i}worldPositionOf(e,t=new k){return t.copy(e).applyMatrix4(this.spin.matrixWorld)}pick(e,t){let i=e.dot(t),s=e.lengthSq()-this.R*this.R,r=i*i-s,a=r>0?-i-Math.sqrt(r):1/0,o=null,l=1/0;for(let c of this.pickables){Er.copy(c.local).sub(e);let h=Er.dot(t);if(h<0||h>a+.6)continue;let p=Er.lengthSq()-h*h,u=c.r*c.r;if(p>u)continue;let d=h+p/u*1.5;d<l&&(l=d,o=c)}return o}update(e,t,i,s,r,a){this.applyOrbit(e*r),this.spin.rotation.y+=this.spinRate*e*r,this.node.updateMatrixWorld(!0);let o=this.uniforms;o.uTime.value=t,Er.copy(s).applyMatrix4(Tf.copy(this.spin.matrixWorld).invert()).normalize(),o.uSunLocal.value.copy(Er);let l=tb.copy(i.position).sub(this.node.position),c=l.length(),h=c-this.R;this.camDist=c,this.altitude=h;let p=this.atmosphere.material.uniforms;p.uCam.value.copy(l),p.uSun.value.copy(s).sub(this.node.position).normalize(),this.clouds&&(this.clouds.material.uniforms.uCamAlt.value=h),this.ringSun&&(this.rings.updateMatrixWorld(),this.ringSun.value.copy(s).applyMatrix4(Tf.copy(this.rings.matrixWorld).invert()).sub(ib.set(0,0,0)).normalize()),this.custom?.update&&this.custom.update(e,t,i),o.uHazeAmt.value=hc(this.R*.05,this.R*.7,h)*.5;let u=this.R,d=c>u*a.cityRange;this.terrainHi.visible=c<u*7,this.terrainLo.visible=!this.terrainHi.visible,this.cityMesh.visible=!d,this.roadMesh.visible=c<u*12,this.spinMesh&&(this.spinMesh.visible=c<u*9),this.craneGroup.visible=c<u*9,this.detailMesh.visible=c<u*8,this.arcs.visible=c<u*6,this.arcMaterial.uniforms.uFade.value=1-hc(u*3.5,u*6,c),o.uGrow.value=Math.max(1e-4,1-hc(u*(a.cityRange*.55),u*a.cityRange,c)),this.custom?.setVisible&&this.custom.setVisible(c);let m=hc(u*5,u*14,c);this.lights.visible=m>.01,this.lightsMaterial.uniforms.uFade.value=m,this.lightsMaterial.uniforms.uScale.value=a.pixelScale*62;let x=c<u*3.2;this.traffic.group.visible=x,x&&this.traffic.update(e)}},Er=new k,tb=new k,ib=new k,Tf=new Oe,nb=new k(0,0,1),sb=new k(0,1,0);var li=(n,e,t)=>Math.max(e,Math.min(t,n)),rb=n=>n*n*(3-2*n),Ef=n=>n*n*n*(n*(n*6-15)+10),dc=(n,e,t)=>rb(li((t-n)/(e-n),0,1)),Ar=new k,lu=new k,ab=new k;function ob(n){let e=Math.abs(n.y)>.9?new k(1,0,0):new k(0,1,0);return e.sub(n.clone().multiplyScalar(e.dot(n))).normalize()}var pc=class{constructor(e,t){this.camera=e,this.world=t,this.mode="system",this.sys={az:.6,el:.36,dist:620,azT:.6,elT:.36,distT:620,drift:.018},this.body=null,this.dir=new k(0,0,1),this.fwd=new k(0,1,0),this.d=40,this.dT=40,this.tiltOffset=0,this.tiltOffsetT=0,this.lift=0,this.liftT=0,this.pan=new Me,this.turn=0,this.flight=null,this.warp=0,this.baseFov=40,this.pose={pos:new k,look:new k,up:new k(0,1,0)},this.onArrive=null,this.onModeChange=null}get busy(){return!!this.flight}setSystemFit(e){this.sysMin=e*.38,this.sysMax=e*3.6,this.sys.dist=this.sys.distT=e*1.32}systemPose(e){let t=this.sys,i=Math.cos(t.el);return e.pos.set(Math.sin(t.az)*i*t.dist,Math.sin(t.el)*t.dist,Math.cos(t.az)*i*t.dist),e.look.set(0,0,0),e.up.set(0,1,0),e}tiltFor(e,t,i){let s=e.minD??.35,r=(e.R??10)*2.1,a=li((Math.log(t)-Math.log(s))/(Math.log(r)-Math.log(s)),0,1),o=(1-dc(.42,1,a))*(e.maxTilt??1.36);return li(o+i,0,1.5)}bodyPose(e,t,i,s,r,a){let o=e.R,l=e.G??o,c=this.tiltFor(e,s,r),h=dc(o*.45,o*2.1,s),p=(l+this.lift)*(1-h),u=t,d=i,m=Math.sin(c),x=Math.cos(c),f=Ar.copy(u).multiplyScalar(p),g=lu.copy(f).addScaledVector(u,x*s).addScaledVector(d,-m*s);if(h<1){let _=(e.eyeFloor?e.eyeFloor(g):l)+(e.minEye??.05),M=g.length();M<_&&g.multiplyScalar(_/M)}let v=ab.copy(u).multiplyScalar(m).addScaledVector(d,x).normalize(),w=e.spin||e.node;return w.updateWorldMatrix(!0,!1),a.pos.copy(g).applyMatrix4(w.matrixWorld),a.look.copy(f).applyMatrix4(w.matrixWorld),a.up.copy(v).transformDirection(w.matrixWorld),a}drag(e,t,i){if(!this.flight)if(this.world.endRide?.(!1),this.mode==="system")this.sys.azT-=e*.0042,this.sys.elT=li(this.sys.elT+t*.0036,-1.25,1.35),this.sys.drift=0;else{let s=2*Math.tan(this.baseFov*Math.PI/360)/i,r=this.body,a=Math.max(this.d,.1),l=Math.min(a,r.R*2.8)*s/(r.G??r.R);this.pan.x=li(-e*l,-.5,.5),this.pan.y=li(t*l,-.5,.5),this.applyPan(this.pan.x,this.pan.y),this.pan.multiplyScalar(.85)}}applyPan(e,t){let i=Ar.crossVectors(this.fwd,this.dir).normalize();this.dir.addScaledVector(i,e).addScaledVector(this.fwd,t).normalize(),this.fwd.addScaledVector(this.dir,-this.fwd.dot(this.dir)).normalize()}rotateDrag(e,t){this.flight||this.mode!=="body"||(this.world.endRide?.(!1),this.fwd.applyAxisAngle(this.dir,-e*.004).normalize(),this.tiltOffsetT=li(this.tiltOffsetT-t*.0035,-1.3,.8))}zoom(e){if(this.flight)return;this.world.endRide?.(!1);let t=Math.exp(e*.0011);if(this.mode==="system")this.sys.distT=li(this.sys.distT*t,this.sysMin,this.sysMax);else{let i=this.body.minD??.35,s=this.body.maxD??this.body.R*7;this.dT=li(this.dT*t,i,s)}}flyToBody(e,{dir:t,fwd:i,d:s,tiltOffset:r=0,duration:a,onArrive:o}={}){let l={body:e,dir:(t?t.clone():this.dir.clone()).normalize(),fwd:null,d:s??e.R*2.6,tiltOffset:r};if(l.fwd=i?i.clone():ob(l.dir),l.fwd.addScaledVector(l.dir,-l.fwd.dot(l.dir)).normalize(),this.mode==="body"&&this.body===e&&!this.flight){this.flight={kind:"hop",t:0,dur:this.reducedMotion?.4:a??li(1.5+this.dir.angleTo(l.dir)*1.3,1.4,3.6),dir0:this.dir.clone(),fwd0:this.fwd.clone(),d0:this.d,tilt0:this.tiltOffset,target:l,onArrive:o};return}this._startArc(h=>this.bodyPose(e,l.dir,l.fwd,l.d,l.tiltOffset,h),{duration:a,onArrive:o,endBody:l})}flyToSystem({onArrive:e,duration:t}={}){this.sys.drift=.018,this._startArc(i=>this.systemPose(i),{duration:t??3.2,onArrive:e,endBody:null})}_startArc(e,{duration:t,onArrive:i,endBody:s}){let r={pos:this.camera.position.clone(),look:this.pose.look.clone(),up:this.camera.up.clone()},a=this.mode==="body"?this.body:null,o=e({pos:new k,look:new k,up:new k}),l=r.pos.distanceTo(o.pos);this.flight={kind:"arc",t:0,dur:this.reducedMotion?.5:t??li(2.2+l/170,2.6,6.2),from:r,poseFn:e,onArrive:i,endBody:s,fromBody:a,distance:l,out:{pos:new k,look:new k,up:new k}},this.world.onFlightStart?.(s?.body||null)}_updateFlight(e){let t=this.flight;if(t.t=Math.min(1,t.t+e/t.dur),t.kind==="hop"){let g=Ef(t.t),v=t.target,w=t.dir0.angleTo(v.dir);if(w>1e-4){let M=Math.sin(w);this.dir.copy(t.dir0).multiplyScalar(Math.sin((1-g)*w)/M).addScaledVector(v.dir,Math.sin(g*w)/M).normalize()}else this.dir.copy(v.dir);this.fwd.copy(t.fwd0).lerp(v.fwd,g),this.fwd.addScaledVector(this.dir,-this.fwd.dot(this.dir)).normalize();let _=Math.sin(t.t*Math.PI)*w*(this.body.R*.8);if(this.d=Math.exp(Math.log(t.d0)*(1-g)+Math.log(v.d)*g)+_,this.dT=this.d,this.tiltOffset=this.tiltOffsetT=t.tilt0*(1-g)+v.tiltOffset*g,t.t>=1){this.d=this.dT=v.d;let M=t.onArrive;this.flight=null,M?.()}return!1}let i=Ef(t.t),s=t.poseFn(t.out),r=t.distance,a=this.world.sunWorld,o=t.from.pos,l=t.fromBody?Ar.copy(o).sub(t.fromBody.node.position).normalize():Ar.copy(t.from.look).sub(o).normalize(),c=t.endBody?lu.copy(s.pos).sub(t.endBody.body.node.position).normalize():lu.copy(s.pos).normalize(),h=new k().copy(o).addScaledVector(l,r*.42),p=new k().copy(s.pos).addScaledVector(c,r*.42),u=new k().addVectors(h,p).multiplyScalar(.5),d=this.world.sunRadius*2.4;if(u.distanceTo(a)<d){let g=new k(0,1,0);h.addScaledVector(g,d),p.addScaledVector(g,d)}let m=1-i;this.camera.position.set(0,0,0).addScaledVector(o,m*m*m).addScaledVector(h,3*m*m*i).addScaledVector(p,3*m*i*i).addScaledVector(s.pos,i*i*i);let f=dc(.05,.82,t.t);if(this.pose.look.copy(t.from.look).lerp(s.look,f),this.camera.up.copy(t.from.up).lerp(s.up,dc(.15,.95,t.t)).normalize(),this.camera.lookAt(this.pose.look),this.warp=this.reducedMotion?0:Math.sin(Math.PI*li(t.t*1.04,0,1))**2*li(r/240,.25,1),this.camera.fov=this.baseFov+this.warp*20,this.camera.updateProjectionMatrix(),t.t>=1){let g=t.endBody,v=t.onArrive;this.flight=null,this.warp=0,g?(this._setMode("body",g.body),this.dir.copy(g.dir),this.fwd.copy(g.fwd),this.d=this.dT=g.d,this.tiltOffset=this.tiltOffsetT=g.tiltOffset):this._setMode("system",null),v?.()}return!0}_setMode(e,t){this.mode=e,this.body=t,this.onModeChange?.(e,t)}update(e,t){let i=this.camera;if(this.lift+=(this.liftT-this.lift)*(1-Math.exp(-e*3)),this.flight){if(this._updateFlight(e)){this._nearFar();return}}else this.warp>0&&(this.warp=0);let s=1-Math.exp(-e*6.5);if(this.mode==="system"){let r=this.sys;r.azT+=r.drift*e,r.az+=(r.azT-r.az)*s,r.el+=(r.elT-r.el)*s,r.dist=Math.exp(Math.log(r.dist)+(Math.log(r.distT)-Math.log(r.dist))*s),this.systemPose(this.pose)}else{if(!this.flight){let r=this.body;if(this.d=Math.exp(Math.log(this.d)+(Math.log(this.dT)-Math.log(this.d))*s),this.tiltOffset+=(this.tiltOffsetT-this.tiltOffset)*s,t){let a=Math.min(this.d,r.R*2)/(r.G??r.R)*e*1.1,o=(t.has("KeyD")||t.has("ArrowRight")?1:0)-(t.has("KeyA")||t.has("ArrowLeft")?1:0),l=(t.has("KeyW")||t.has("ArrowUp")?1:0)-(t.has("KeyS")||t.has("ArrowDown")?1:0);(o||l)&&(this.world.endRide?.(!1),this.applyPan(o*a,l*a));let c=(t.has("KeyE")?1:0)-(t.has("KeyQ")?1:0);c&&this.fwd.applyAxisAngle(this.dir,c*e*.9).normalize();let h=(t.has("KeyF")||t.has("PageDown")?1:0)-(t.has("KeyR")||t.has("PageUp")?1:0);h&&this.zoom(-h*e*900)}this.pan.lengthSq()>1e-9&&(this.applyPan(this.pan.x*Math.min(1,e*30),this.pan.y*Math.min(1,e*30)),this.pan.multiplyScalar(Math.exp(-e*5)))}this.bodyPose(this.body,this.dir,this.fwd,this.d,this.tiltOffset,this.pose)}i.position.copy(this.pose.pos),i.up.copy(this.pose.up),i.lookAt(this.pose.look),i.fov!==this.baseFov&&(i.fov+=(this.baseFov-i.fov)*s,Math.abs(i.fov-this.baseFov)<.01&&(i.fov=this.baseFov),i.updateProjectionMatrix()),this._nearFar()}_nearFar(){let e=this.camera,t=1/0;for(let r of this.world.planets){let a=e.position.distanceTo(r.node.position)-r.R*1.32;t=Math.min(t,a)}t=Math.min(t,e.position.length()-this.world.sunRadius*1.1);let i=this.flight?.endBody?.body||this.body;i&&!i.isPlanet&&(i.node.getWorldPosition(Ar),t=Math.min(t,e.position.distanceTo(Ar)-i.R*1.6));let s=li(t*.25,.006,40);Math.abs(e.near-s)>s*.05&&(e.near=s,e.far=16e3,e.updateProjectionMatrix())}};function Af(n,e,t,i){let r=new Float32Array(1083),a=new Float32Array(361),o=new k(0,0,1),l=new k(0,1,0),c=new k;for(let d=0;d<=360;d++){let m=d/360*Math.PI*2;c.set(Math.cos(m)*n,0,Math.sin(m)*n).applyAxisAngle(o,e).applyAxisAngle(l,t),r[d*3]=c.x,r[d*3+1]=c.y,r[d*3+2]=c.z,a[d]=m}let h=new nt;h.setAttribute("position",new De(r,3)),h.setAttribute("aAngle",new De(a,1));let p=new Xe({uniforms:{uColor:{value:new se(i)},uAt:{value:0},uBoost:{value:0}},vertexShader:`
      attribute float aAngle; varying float vA;
      void main() { vA = aAngle; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying float vA; uniform vec3 uColor; uniform float uAt, uBoost;
      void main() {
        // A comet-like trail of brightness following the planet.
        float d = mod(uAt - vA, 6.28318);
        float trail = pow(1.0 - d / 6.28318, 7.0);
        gl_FragColor = vec4(uColor * (0.05 + trail * 0.75 + uBoost * 0.2), 1.0);
      }`,transparent:!0,depthWrite:!1,blending:jt}),u=new lr(h,p);return u.frustumCulled=!1,u}var fc=class{constructor({from:e,to:t,count:i,color:s,reverse:r,group:a,rng:o}){this.from=e,this.to=t,this.count=i;let l=64,c=[],h=[],p=[];for(let m=0;m<=l;m++)if(c.push(m/l,m/l),h.push(-1,1),m<l){let x=m*2;p.push(x,x+1,x+3,x,x+3,x+2)}let u=new nt;u.setAttribute("aT",new De(new Float32Array(c),1)),u.setAttribute("aSide",new De(new Float32Array(h),1)),u.setAttribute("position",new De(new Float32Array((l+1)*6),3)),u.setIndex(p),this.A=new k,this.B=new k,this.C=new k,this.material=new Xe({uniforms:{uA:{value:this.A},uB:{value:this.B},uC:{value:this.C},uColor:{value:new se(s)},uWidth:{value:.55+Math.min(1.1,Math.log2(1+i)*.24)},uRes:{value:new Me(1,1)},uTime:{value:0},uAlpha:{value:.25},uLen:{value:100}},vertexShader:`
        attribute float aT, aSide;
        uniform vec3 uA, uB, uC; uniform float uWidth; uniform vec2 uRes;
        varying float vT; varying float vSide;
        vec3 bez(float t) { float u = 1.0 - t; return u * u * uA + 2.0 * u * t * uC + t * t * uB; }
        void main() {
          vT = aT; vSide = aSide;
          vec4 a = projectionMatrix * viewMatrix * vec4(bez(aT), 1.0);
          vec4 b = projectionMatrix * viewMatrix * vec4(bez(min(aT + 0.012, 1.0)), 1.0);
          vec4 c = projectionMatrix * viewMatrix * vec4(bez(max(aT - 0.012, 0.0)), 1.0);
          vec2 asp = vec2(uRes.x / uRes.y, 1.0);
          vec2 d = (b.xy / max(b.w, 0.001) - c.xy / max(c.w, 0.001)) * asp;
          vec2 n = normalize(vec2(-d.y, d.x) + 1e-5) / asp;
          a.xy += n * aSide * uWidth * a.w / uRes.y * 2.0;
          gl_Position = a;
        }`,fragmentShader:`
        varying float vT; varying float vSide;
        uniform vec3 uColor; uniform float uTime, uAlpha, uLen;
        void main() {
          float cross = pow(max(1.0 - abs(vSide), 0.0), 1.6);
          float ends = smoothstep(0.0, 0.06, vT) * (1.0 - smoothstep(0.94, 1.0, vT));
          float dash = fract(vT * uLen * 0.1 - uTime * 0.35);
          float flow = smoothstep(0.0, 0.08, dash) * (1.0 - smoothstep(0.08, 0.55, dash));
          vec3 col = uColor * (0.1 + flow * 0.75) * cross * ends * uAlpha;
          gl_FragColor = vec4(col, 1.0);
        }`,transparent:!0,depthWrite:!1,blending:jt,side:It}),this.mesh=new $e(u,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,a.add(this.mesh),this.sign=r?-1:1,this.ships=[];let d=Math.max(1,Math.min(5,Math.round(Math.log2(1+i)*1.1)));for(let m=0;m<d;m++)this.ships.push({t:(m+o.next()*.7)/d,v:o.range(.018,.03)})}update(e,t,i,s){let r=this.from.node.position,a=this.to.node.position,o=lb.subVectors(a,r),l=o.length();o.divideScalar(l||1);let c=this.from.R*1.06,h=this.to.R*1.06;this.A.copy(r).addScaledVector(o,c),this.B.copy(a).addScaledVector(o,-h),cu.addVectors(this.A,this.B).multiplyScalar(.5);let p=l*.2,u=Rf.copy(cu);u.lengthSq()<1&&u.set(1,0,0),u.normalize(),this.C.copy(cu).addScaledVector(u,p*.65).addScaledVector(Cf,this.sign*p*.8);let d=this.material.uniforms;d.uRes.value.copy(i),d.uTime.value=t,d.uAlpha.value+=(s-d.uAlpha.value)*.08,d.uLen.value=l}sample(e,t,i){let s=1-e;t.set(0,0,0).addScaledVector(this.A,s*s).addScaledVector(this.C,2*s*e).addScaledVector(this.B,e*e),i.set(0,0,0).addScaledVector(this.A,-2*s).addScaledVector(this.C,2*s-2*e).addScaledVector(this.B,2*e).normalize()}},lb=new k,cu=new k,Rf=new k,Cf=new k(0,1,0);function Pf({radius:n,width:e,count:t,orphans:i,graph:s,seed:r=11}){let a=new bt,o=new _t(r),l=new wr(r),c=new hr(1,2),h=c.attributes.position;for(let f=0;f<h.count;f++){let g=h.getX(f),v=h.getY(f),w=h.getZ(f),_=1+l.fbm(g*1.4,v*1.4,w*1.4,3)*.55;h.setXYZ(f,g*_,v*_*.8,w*_)}c.computeVertexNormals();let p=new Ai({color:8024424,roughness:.96,metalness:.05,flatShading:!0,emissive:2367259,emissiveIntensity:.55}),u=new yn(c,p,t),d=new Ct,m=new se;for(let f=0;f<t;f++){let g=o.range(0,6.283),v=n+(o.next()+o.next()-1)*e;d.position.set(Math.cos(g)*v,(o.next()+o.next()-1)*e*.11,Math.sin(g)*v),d.rotation.set(o.range(0,6),o.range(0,6),o.range(0,6));let w=Math.pow(o.next(),4)*2.1+.2;d.scale.set(w,w*o.range(.6,1),w*o.range(.7,1.2)),d.updateMatrix(),u.setMatrixAt(f,d.matrix),m.setHSL(o.range(.05,.11),o.range(.08,.2),o.range(.26,.5)),u.setColorAt(f,m)}a.add(u);let x=[];return i.forEach((f,g)=>{let v=g/Math.max(i.length,1)*Math.PI*2+.6,w=n+o.range(-e*.3,e*.3),_=3.6+Math.log2(1+s.pages[f].words/200)*.7,M=new $e(c,new Ai({color:9141614,roughness:.95,flatShading:!0})),S=new bt;S.position.set(Math.cos(v)*w,o.range(-3,3),Math.sin(v)*w),M.scale.setScalar(_),S.add(M);let y=new $e(new Jt(_*.16,12,8),new vn({color:new se(16757611).multiplyScalar(6)}));y.position.set(0,_*1.02,0),S.add(y),a.add(S),x.push({pageId:f,holder:S,size:_})}),{group:a,beacons:x}}function kf({pageId:n,a:e,b:t,noiseTex:i}){let s=new bt,r=new $e(new hr(1.5,3),new Ai({color:14279918,roughness:.65,emissive:3164248,emissiveIntensity:.6,flatShading:!0}));s.add(r);let a={value:0},o=new $e(new la(9,.8,90,28,28,!0).translate(0,45,0),new Xe({uniforms:{uTime:a,uNoise:{value:i}},vertexShader:`
        varying vec3 vP; varying float vL;
        void main() { vP = position; vL = position.y / 90.0; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        precision highp float;
        varying vec3 vP; varying float vL;
        uniform float uTime;
        ${Qt}
        void main() {
          vec3 q = vec3(atan(vP.z, vP.x) * 1.1, vL * 3.0 - uTime * 0.22, 2.0);
          float n = fbm3(q * 2.0);
          float a = pow(1.0 - vL, 2.0) * smoothstep(0.32, 0.72, n);
          vec3 col = mix(vec3(0.55, 0.85, 1.0), vec3(0.3, 0.45, 1.0), vL) * a * 0.75;
          gl_FragColor = vec4(col, 1.0);
        }`,transparent:!0,depthWrite:!1,blending:jt,side:It}));s.add(o);let l=new $e(new Jt(2.2,16,12),new vn({color:new se(11066623).multiplyScalar(2.6),transparent:!0,opacity:.55,depthWrite:!1,blending:jt}));return s.add(l),{group:s,body:{isComet:!0,pageId:n,R:2,G:2,node:s,spin:s,minD:5,maxD:60,maxTilt:.6,angle:2.2,update(h,p){a.value=p,this.angle+=h*.012*(1+900/(s.position.lengthSq()/40+400));let u=Math.cos(this.angle)*e-e*.55,d=Math.sin(this.angle)*t;s.position.set(u,Math.sin(this.angle*.5)*24,d),o.quaternion.setFromUnitVectors(Cf,Rf.copy(s.position).normalize()),r.rotation.y+=h*.3}}}}function If(n,e,t){let i=new ki;n.ship(i);let s=Jn(n,t,{instanced:!0}),r=new yn(i.toGeometry(),s,e);return r.instanceMatrix.setUsage(vr),r.frustumCulled=!1,r.count=0,r}var Rr=[12169376,11050898,9866366,13025201,9076593],hu=[10771012,9259578,11889488,8274998],uu=[5207702,4156042,6130344,3231850],Lf=[8144440,6183518,9328450,4869461,7027248],cb=[13120301,15198186,2106412,2973608,14068004,9278105];function hb(n,{h:e,w:t,rng:i}){let s=i.pick(Rr),r=3+(e>3?1:0),a=0,o=t*1.5;n.paint(dt(s,0,.25),{rough:.9}),n.box(o*1.15,e*.035,o*1.15),a=e*.035;for(let l=0;l<r;l++){let c=e*.76*[.44,.28,.17,.11][l]*(r===3?1.1:1);n.paint(s,{rough:.72,win:Ae.GRID,cw:.052,ch:.066}),n.box(o,c,o,{y:a,top:l===r-1?.92:.98}),a+=c,n.paint(dt(s,16777215,.3),{rough:.6}),n.box(o*1.03,c*.03+.012,o*1.03,{y:a}),a+=c*.03+.012,n.paint(dt(s,16777215,.14),{rough:.6});for(let[h,p]of[[1,1],[-1,1],[1,-1],[-1,-1]])n.save().move(h*o/2,a-c-c*.03,p*o/2).box(.03,c,.03).restore();o*=.73}n.paint(13149274,{rough:.3,metal:.95}),n.ngon(8,o*.62,e*.07,{y:a,top:.72}),a+=e*.07,n.ngon(8,o*.42,e*.05,{y:a,top:.42}),a+=e*.05,n.paint(14080220,{rough:.35,metal:.9}),n.cyl(.018,.003,e*.12,6,{y:a}),n.paint(16726832,{glow:8}),n.save().move(0,a+e*.12,0).sphere(.014,{seg:6,rings:4}).restore()}function ub(n,{h:e,w:t,rng:i}){let s=i.pick(uu),r=t*.74,a=i.pick([8,12,24]);n.paint(2896440,{rough:.5,metal:.6}),n.ngon(a,r*1.28,.06),n.paint(s,{rough:.14,metal:.85,win:Ae.BANDS,cw:.26,ch:.05}),n.ngon(a,r,e*.82,{y:.06,top:.8,cap:!1}),n.ngon(a,r*.8,e*.18,{y:.06+e*.82,top:.05,cap:!1}),n.paint(14673386,{rough:.4,metal:.8});for(let o=1;o<5;o++){let l=o/5;n.ngon(a,r*(1-l*.2)*1.015,.012,{y:.06+e*.82*l})}n.paint(16729144,{glow:6}),n.save().move(0,e+.05,0).sphere(.012,{seg:6,rings:3}).restore()}function db(n,{h:e,w:t,rng:i}){let s=i.pick(Rr);n.paint(dt(s,0,.2),{rough:.85,win:Ae.STRIPES,cw:.11,ch:.11}),n.box(t*1.9,e*.1,t*1.5),n.paint(s,{rough:.7,win:Ae.GRID,cw:.06,ch:.072}),n.box(t*1.3,e*.8,t*.8,{y:e*.1}),n.paint(3948614,{rough:.6,metal:.5}),n.box(t*.6,e*.05,t*.4,{y:e*.9}),n.paint(15921906,{rough:.5}),n.save().move(t*.3,e*.95,0).cyl(.03,.03,e*.05,8).restore(),n.paint(3948614,{rough:.6}),n.save().move(-t*.32,e*.9,.05).cyl(.012,.004,e*.12,5).restore()}function pb(n,{h:e,w:t,rng:i}){let s=dt(i.pick(Rr),16777215,.25),r=t*2.3,a=t*1.7,o=Math.max(.34,e*.42);n.paint(dt(s,0,.14),{rough:.9}),n.box(r*1.16,.04,a*1.2),n.box(r*1.08,.04,a*1.12,{y:.04}),n.paint(s,{rough:.75,win:Ae.GRID,cw:.085,ch:.12}),n.box(r,o,a,{y:.08}),n.paint(dt(s,16777215,.2),{rough:.7});let l=8;for(let c=0;c<l;c++){let h=(c/(l-1)-.5)*r*.92;n.save().move(h,.08,a*.58).cyl(.02,.016,o,8,{caps:!1}).restore()}n.box(r*1.04,.04,a*1.3,{y:.08+o}),n.gable(r*1.04,.09,a*1.3,{y:.12+o}),n.paint(5938312,{rough:.55,metal:.6}),n.save().move(0,.14+o,0).dome(t*.58,{sy:1.1}).restore(),n.paint(13149274,{rough:.3,metal:.9}),n.save().move(0,.14+o+t*.64,0).cyl(.012,.002,.12,6).restore()}function fb(n,{h:e,w:t,rng:i}){let s=i.next(),r=s<.45?i.pick(hu):i.pick(Rr);s<.3?(n.paint(r,{rough:.9,win:Ae.GRID,cw:.05,ch:.06}),n.box(t*1.2,e,t,{}),n.paint(i.pick(Lf),{rough:.85}),n.gable(t*1.2,t*.3,t,{y:e})):s<.7?(n.paint(r,{rough:.7,win:Ae.GRID,cw:.045,ch:.055}),n.box(t*1.1,e,t*1.1),n.paint(5001302,{rough:.7}),n.box(t*1.14,.012,t*1.14,{y:e}),n.paint(9080468,{rough:.5,metal:.6}),n.save().move(t*.2,e,-t*.15).box(t*.35,.03,t*.3).restore()):(n.paint(i.pick(uu),{rough:.16,metal:.8,win:Ae.BANDS,cw:.2,ch:.044}),n.box(t,e,t*1.05,{}),n.paint(14869992,{rough:.5,metal:.6}),n.box(t*1.04,.012,t*1.09,{y:e}))}function mb(n,{s:e,rng:t,tier:i}){if(i>.42){let r=e*t.range(1.3,2.2)*(1+i*1.5),a=e*t.range(1.15,1.6),o=e*t.range(1.15,1.6);t.chance(.3)?n.paint(t.pick(uu),{rough:.16,metal:.8,win:Ae.BANDS,cw:.2,ch:.05}):n.paint(t.chance(.45)?t.pick(hu):t.pick(Rr),{rough:.85,win:Ae.GRID,cw:.046,ch:.058}),n.box(a,r,o),t.chance(.4)&&n.box(a*.6,r*.25,o*.6,{y:r}),n.paint(5001302,{rough:.7}),n.box(a*1.03,.008,o*1.03,{y:r});return}if(t.chance(.3)){mc(n,t,e*1.5,!1),n.save().move(e*.7,0,-e*.5),mc(n,t,e*1.05,!1),n.restore();return}let s=t.chance(.5)?2:1;for(let r=0;r<s;r++){let a=e*t.range(.85,1.15),o=e*t.range(.9,1.3),l=e*t.range(.55,1.05);n.save().move(s===2?(r-.5)*e*1.25:0,0,0),n.paint(t.chance(.6)?t.pick(Rr):t.pick(hu),{rough:.92,win:Ae.GRID,cw:.04,ch:.05}),n.box(a,l,o),n.paint(t.pick(Lf),{rough:.85}),n.save().rotY(Math.PI/2).gable(o,e*.5,a,{y:l,over:.012}).restore(),n.restore()}}function mc(n,e,t,i){if(i){let s=e.pick([1522215,1851948,2313267,1323555]);n.paint(3812642,{rough:1}),n.cyl(t*.06,t*.04,t*.24,3,{smooth:!1,caps:!1}),n.paint(s,{rough:.95}),n.cone(t*.38,t*.72,5,{y:t*.18,smooth:!1}),n.cone(t*.26,t*.62,5,{y:t*.56,smooth:!1})}else{let s=e.pick([3107372,3897906,2646058,4883512,5933624,3828788]);n.paint(4141092,{rough:1}),n.cyl(t*.06,t*.045,t*.4,3,{smooth:!1,caps:!1}),n.paint(s,{rough:.9}),n.sphere(t*.34,{y:t*.3,seg:6,rings:3,sy:1.1}),e.chance(.45)&&(n.paint(dt(s,16777215,.08),{rough:.9}),n.save().move(t*.15,t*.26,t*.1).sphere(t*.2,{seg:5,rings:3}).restore())}}function gb(n){return e=>{e.paint(n,{rough:.28,metal:.7}),e.box(.052,.018,.105,{y:.008}),e.paint(dt(n,1054752,.55),{rough:.15,metal:.8}),e.box(.046,.016,.054,{y:.026,top:.82,topZ:.7}),e.paint(16773836,{glow:-9}),e.save().move(.017,.017,.053).box(.01,.006,.002).restore(),e.save().move(-.017,.017,.053).box(.01,.006,.002).restore(),e.paint(16720920,{glow:-6}),e.save().move(.018,.018,-.053).box(.01,.005,.002).restore(),e.save().move(-.018,.018,-.053).box(.01,.005,.002).restore()}}var Df={id:"terra",name:{en:"Terra",de:"Terra"},people:{en:"Humans",de:"Menschen"},blurb:{en:"Home. Glass towers, brick walk-ups and wind farms; cars carry knowledge along asphalt, airliners take the long way round.",de:"Die Heimat. Glast\xFCrme, Backsteinh\xE4user und Windparks; Autos tragen das Wissen \xFCber den Asphalt, Linienflieger nehmen die langen Wege."},bridge:{en:"streets & air corridors",de:"Stra\xDFen & Flugkorridore"},dayLength:200,tilt:.3,palette:{accent:8373503,window:16767392,route:9227007,scaffold:13159892},env:{zenith:5211864,horizon:14871799,ground:4674366},terrain:{amp:.8,power:1.3,height(n,e,t,i){let s=n.simplex(e*1.5+11,t*1.5,i*1.5)*.3,r=n.simplex(e*1.5,t*1.5+23,i*1.5)*.3,o=n.fbm(e*1.25+s,t*1.25+r,i*1.25,6,2.05,.52)*2.5-.1;if(o>0){let l=n.ridged(e*2.6+40,t*2.6,i*2.6,4,2,.42);o+=l*l*Math.min(1,o*1.8)*1.1}return o}},scatterDensity:1.2,scatter(n,{rng:e,h:t,lat:i,spin:s,x:r,y:a,z:o,noise:l}){if(t>1.05||l.simplex(r*11+3,a*11,o*11)+l.simplex(r*27,a*27+9,o*27)*.4<-.05&&!e.chance(.04))return;if(t>.5&&e.chance(.012)&&i<.7){n.paint(15659508,{rough:.5}),n.cyl(.014,.007,.42,6,{caps:!1}),s.paint(16185337,{rough:.4}),s.save().move(0,.42,.012),s.spinAbout(0,0,0,0,0,1,1.6);for(let u=0;u<3;u++)s.save().rotZ(u/3*Math.PI*2),s.box(.012,.2,.004),s.restore();s.restore();return}let h=i>.55||t>.42;mc(n,e,e.range(.11,.2)*(h?1.1:1),h)},surfaceGLSL:`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 7.0);
      float fine = n3(p * 58.0);
      float hh = h + (n - 0.5) * 0.16;
      float lat = abs(p.y);
      if (hh < 0.0 && mask < 0.5) {
        liquid(p, hh, vec3(0.006, 0.03, 0.095), vec3(0.03, 0.2, 0.3), 26.0, albedo, rough, metal, bump);
        float foam = smoothstep(-0.016, -0.003, hh) * (0.55 + 0.45 * sin(uTime * 0.9 + n * 30.0));
        albedo = mix(albedo, vec3(0.6), foam * 0.35);
      } else {
        vec3 sand = vec3(0.5, 0.43, 0.3);
        vec3 grass = mix(vec3(0.16, 0.3, 0.08), vec3(0.3, 0.38, 0.12), n);
        vec3 forest = vec3(0.05, 0.14, 0.05);
        vec3 dry = vec3(0.45, 0.36, 0.2);
        vec3 rock = mix(vec3(0.24, 0.21, 0.19), vec3(0.38, 0.34, 0.3), fine);
        vec3 snow = vec3(0.72, 0.75, 0.8);
        float moist = fbm3(p * 3.2 + 7.0);
        vec3 low = mix(grass, forest, smoothstep(0.46, 0.56, moist));
        low = mix(dry, low, smoothstep(0.34, 0.47, moist + (lat - 0.2) * 0.28));
        albedo = mix(sand, low, smoothstep(0.004, 0.034, hh));
        albedo = mix(albedo, rock, smoothstep(0.55, 0.95, hh + (fine - 0.5) * 0.25));
        float snowLine = 1.42 - lat * 1.25 + (n - 0.5) * 0.5;
        albedo = mix(albedo, snow, smoothstep(snowLine, snowLine + 0.1, hh));
        albedo = mix(albedo, snow, smoothstep(0.82, 0.92, lat + (n - 0.5) * 0.16));
        albedo *= 0.82 + fine * 0.36;
        rough = 0.93;
        bump += bumpOf(p, 46.0, 0.09) * smoothstep(70.0, 10.0, dist);
        // Micro detail that only resolves once you are close to the ground.
        float near = smoothstep(14.0, 2.0, dist);
        if (near > 0.0) {
          float tuft = n3(p * 240.0) * 0.6 + n3(p * 620.0) * 0.4;
          albedo *= 1.0 + (tuft - 0.5) * 0.55 * near;
          bump += bumpOf(p, 300.0, 0.12) * near;
        }
        // Town ground: mown parks and paved plots.
        vec3 town = mix(vec3(0.11, 0.2, 0.06), vec3(0.17, 0.26, 0.09), n3(p * 90.0));
        town *= 0.86 + n3(p * 420.0) * 0.3;
        albedo = mix(albedo, town, smoothstep(0.3, 0.9, mask));
      }
    }`,atmosphere:{thickness:1.22,rayleigh:[.8,1.95,4.8],mie:[.4,.4,.4],intensity:8.5,haze:8566015,fog:{density:.0125,day:11060970,dusk:15246718,night:461590}},clouds:{cover:.56,scale:4.6,opacity:.93,shadow:5925512,dusk:16753258},road:{width:.2,laneOffset:.24,meander:.45,lampEvery:.56,lampChance:.8,glsl:`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        albedo = vec3(0.028, 0.03, 0.034) + 0.012 * n3(vRP * 300.0);
        rough = 0.82;
        float edge = smoothstep(0.82, 0.86, abs(x)) * smoothstep(0.96, 0.92, abs(x));
        float dash = step(abs(x), 0.05) * step(fract(s * 6.0), 0.52);
        albedo = mix(albedo, vec3(0.62, 0.58, 0.46), max(edge, dash));
        emissive += vec3(1.0, 0.72, 0.42) * night * 0.035 * (1.0 + 0.6 * sin(s * 11.2));
        emissive += vec3(1.0, 0.9, 0.7) * max(edge, dash) * night * 0.05;
      }`},transit:{road:{en:"Street",de:"Stra\xDFe"},air:{en:"Air corridor",de:"Flugkorridor"}},map:{title:{en:"Road atlas",de:"Stra\xDFenatlas"},paper:"#efe7d3",edge:"#b4a585",ink:"#2b2a26",soft:"#6f6a5b",sea:["#9dc3d6","#c6dee5"],land:["#e3e6c4","#b9a77c"],contour:"rgba(120,100,60,0.3)",grid:"rgba(60,80,110,0.16)",road:"#d8482f",casing:"#7c2a1c",air:"#2f5f9e",traffic:"#1f1e1b",accent:"#c8321e",lines:"atlas",glyph:"atlas",font:"serif"},layout:"grid",block:.46,street:{color:3421754,rough:.85,width:.05,glow:-.22},lotFor(n,e){return n>.42?e.pick([5658202,6184544,5132116]):e.pick([3955244,4613679,3494442,5205046,5726298])},plaza(n,{r:e}){n.paint(7236712,{rough:.8}),n.disc(e,{seg:64}),n.paint(9209983,{rough:.75}),n.disc(e*.97,{y:.002,seg:64,inner:e*.88})},landmark(n,e){e.h<1.15?pb(n,e):e.capital||e.rng.chance(.34)?hb(n,e):e.rng.chance(.62)?ub(n,e):db(n,e)},section:fb,filler:mb,roadside(n,{rng:e,side:t}){if(e.chance(.42)){mc(n,e,e.range(.1,.16),!1);return}n.paint(3685442,{rough:.5,metal:.7}),n.cyl(.0045,.0035,.09,4,{caps:!1,smooth:!1}),n.box(.004,.004,.03,{y:.088}),n.paint(16767904,{glow:-14}),n.save().move(0,.082,t*0).box(.009,.004,.012).restore()},vehicles:[...cb.map(n=>({build:gb(n),speed:.42,weight:1})),{weight:.6,speed:.3,build(n){n.paint(15840032,{rough:.4,metal:.3,win:Ae.BANDS,cw:.05,ch:.03}),n.box(.056,.05,.17,{y:.008}),n.paint(16773836,{glow:-9}),n.save().move(.018,.018,.086).box(.01,.007,.002).restore(),n.save().move(-.018,.018,.086).box(.01,.007,.002).restore(),n.paint(16720920,{glow:-6}),n.save().move(0,.02,-.086).box(.04,.006,.002).restore()}}],flyer:{speed:1.05,shadow:!1,build(n){n.paint(15856630,{rough:.35,metal:.4}),n.save().rotX(Math.PI/2).cyl(.016,.012,.2,8,{y:-.1}).restore(),n.save().move(0,0,.1).rotX(Math.PI/2).cone(.016,.03,8).restore(),n.prism([[.15,-.01],[.015,.045],[-.015,.045],[-.15,-.01],[-.015,-.015],[.015,-.015]],.005),n.save().move(0,.005,-.09).prism([[.05,-.012],[0,.018],[-.05,-.012]],.003).restore(),n.paint(2973608,{rough:.4}),n.save().move(0,.008,-.092).box(.003,.04,.03).restore(),n.paint(16724770,{glow:6}),n.save().move(-.15,0,-.01).sphere(.004,{seg:5,rings:3}).restore(),n.paint(4521830,{glow:6}),n.save().move(.15,0,-.01).sphere(.004,{seg:5,rings:3}).restore()}},walker:{speed:.1,lift:.012,bob:.004,bobRate:10,colors:[3820138,8010298,3092275,12104872,4876874,12618298],build(n){n.paint(gf(16777215,.8),{rough:.8}),n.cyl(.0065,.0075,.021,5,{caps:!1}),n.paint(15254176,{rough:.7}),n.save().move(0,.021,0).sphere(.0048,{seg:5,rings:3}).restore()}},ship(n){n.paint(15330802,{rough:.3,metal:.6}),n.save().rotX(Math.PI/2).cyl(.2,.28,1.4,10,{y:-.7}).restore(),n.save().move(0,0,.7).rotX(Math.PI/2).cone(.2,.5,10).restore(),n.prism([[.8,-.6],[.2,.2],[-.2,.2],[-.8,-.6]],.05),n.paint(9228543,{glow:5}),n.save().move(0,0,-.72).rotX(-Math.PI/2).cone(.2,.55,8).restore()}};var ci=3729663,Ua=16727717,du=9071615,gc=[922136,1185310,658707,1448740];function xb(n,{h:e,w:t,rng:i,spin:s,capital:r}){let a=i.pick([ci,ci,du]),o=i.pick(gc);n.paint(o,{rough:.22,metal:.9}),n.ngon(6,t*1.35,.06),n.paint(a,{glow:1.6}),n.ngon(6,t*1.38,.012,{y:.06}),n.paint(o,{rough:.16,metal:.95,win:Ae.DATA,cw:.075,ch:.12}),n.ngon(6,t*.92,e*.88,{y:.07,top:.62,cap:!1,rot:.4}),n.paint(a,{glow:2.2}),n.ngon(6,t*.56,.02,{y:e*.95,rot:.4}),n.paint(o,{rough:.2,metal:.95}),n.ngon(6,t*.56,e*.06,{y:e*.95+.02,top:.02,rot:.4,cap:!1});let l=r?3:2;for(let c=0;c<l;c++){let h=e*(.34+c*.24);s.save().move(0,h,0),s.spinAbout(0,0,0,0,1,0,(c%2?-1:1)*(.5+c*.25)),s.paint(a,{glow:2.6});let p=t*(1.22-c*.2);s.ring(p,.012,{seg:32,tseg:4}),s.paint(o,{rough:.2,metal:.9});for(let u=0;u<6;u++){let d=u/6*Math.PI*2;s.save().move(Math.cos(d)*p,-.018,Math.sin(d)*p).box(.05,.036,.05).restore()}s.restore()}r&&(n.paint(Ua,{glow:9}),n.save().move(0,e*1.01,0).sphere(.03,{seg:10,rings:6}).restore())}function vb(n,{h:e,w:t,rng:i}){let s=i.pick([ci,du,Ua]),r=i.pick(gc);n.paint(r,{rough:.25,metal:.85,win:Ae.STRIPES,cw:.05,ch:.2}),n.box(t*1.1,e,t,{top:.94}),n.paint(s,{glow:1.4}),n.box(t*1.12,.01,t*1.02,{y:e*.5}),n.paint(r,{rough:.25,metal:.9}),n.box(t*1,.012,t*.9,{y:e}),n.paint(s,{glow:1.4}),n.box(t*.5,.016,.014,{y:e})}var Nf={id:"vektor",name:{en:"Vektor",de:"Vektor"},people:{en:"The Collective",de:"Das Kollektiv"},blurb:{en:"A machine mind on a world of black glass. The ground is a circuit board; packets of light hurry between server-monoliths.",de:"Ein Maschinengeist auf einer Welt aus schwarzem Glas. Der Boden ist eine Platine; Lichtpakete eilen zwischen Server-Monolithen."},bridge:{en:"light traces & drone lanes",de:"Leiterbahnen & Drohnenkorridore"},dayLength:150,tilt:.12,palette:{accent:ci,window:4776191,route:4646655,scaffold:3752271},env:{zenith:725040,horizon:3813232,ground:329484},terrain:{amp:.45,power:1,height(n,e,t,i){let s=n.fbm(e*1.5,t*1.5,i*1.5,4,2,.5);return Math.round((s*2.2+.2)*5)/5+s*.25+.03}},scatterDensity:.3,scatterMinH:0,scatter(n,{rng:e,spin:t}){let i=e.next();if(i<.5){let s=e.range(.1,.34);n.paint(e.pick(gc),{rough:.2,metal:.9,win:Ae.DATA,cw:.05,ch:.08}),n.ngon(4,e.range(.03,.06),s,{top:.6,rot:e.range(0,3)})}else i<.8?(n.paint(1712176,{rough:.3,metal:.8}),n.cyl(.008,.004,.3,4,{caps:!1,smooth:!1}),n.paint(e.pick([ci,Ua]),{glow:6}),n.save().move(0,.3,0).sphere(.012,{seg:6,rings:4}).restore()):(t.save().move(0,.2,0),t.spinAbout(0,0,0,.3,1,.2,.9),t.paint(ci,{glow:2.2}),t.ring(.09,.005,{seg:20,tseg:3}),t.restore())},surfaceGLSL:`
    float gridLine(vec3 q, float w) {
      vec3 g = abs(fract(q) - 0.5);
      return smoothstep(w, 0.0, 0.5 - max(g.x, max(g.y, g.z)));
    }
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.25, -0.15, day);
      vec3 q = p * 24.0;
      vec3 cell = floor(q);
      float rnd = hash31(cell);
      albedo = mix(vec3(0.012, 0.015, 0.022), vec3(0.03, 0.036, 0.05), rnd);
      rough = 0.16 + rnd * 0.2;
      metal = 0.9;
      float coarse = gridLine(q, 0.05);
      float fine = gridLine(p * 96.0, 0.06) * smoothstep(40.0, 8.0, dist);
      float gate = step(0.42, hash31(cell + 3.0));
      float pulse = smoothstep(0.82, 1.0, fract(dot(p, vec3(9.0, 7.0, 11.0)) * 1.4 - uTime * 0.45 + rnd * 9.0));
      vec3 cyan = vec3(0.05, 0.75, 1.0), mag = vec3(1.0, 0.12, 0.5);
      vec3 trace = mix(cyan, mag, step(0.86, hash31(cell + 7.0)));
      emissive += trace * coarse * gate * (0.06 + night * 0.25 + pulse * 1.2);
      emissive += cyan * fine * 0.03 * (0.4 + night);
      albedo = mix(albedo, trace * 0.2, coarse * gate);
      bump += bumpOf(p, 60.0, 0.05);
      if (h < 0.015) {
        // Lowlands: pools of liquid data.
        float depth = smoothstep(0.015, -0.2, h);
        albedo = mix(albedo, vec3(0.004, 0.012, 0.03), depth);
        rough = mix(rough, 0.05, depth);
        emissive += cyan * pow(n3(p * 30.0 + uTime * 0.12), 6.0) * depth * 0.45;
      }
      float plaza = smoothstep(0.3, 0.9, mask);
      albedo = mix(albedo, vec3(0.018, 0.022, 0.03), plaza * 0.7);
    }`,atmosphere:{thickness:1.17,rayleigh:[1.1,.9,3.8],mie:[.4,.3,.7],scaleR:.05,intensity:6.5,haze:6978559,night:[.004,.006,.02],fog:{density:.011,day:2502748,dusk:8142752,night:263698}},clouds:{cover:.66,scale:7.5,opacity:.32,color:12572927,shadow:1054776,dusk:11559167,groundShadow:!1,glow:266790,speed:2},transit:{road:{en:"Light trace",de:"Lichtbahn"},air:{en:"Drone",de:"Drohne"}},map:{title:{en:"Schematic",de:"Schaltplan"},paper:"#050a0e",edge:"#0f3a44",ink:"#bff6ff",soft:"#4fa0b0",sea:["#020507","#061015"],land:["#0a1319","#14282f"],contour:"rgba(56,232,255,0.13)",grid:"rgba(56,232,255,0.07)",road:"#38e8ff",casing:"#0b3b48",air:"#ff3ea5",traffic:"#ffffff",accent:"#38e8ff",lines:"trace",glyph:"chip",font:"mono"},layout:"grid",block:.4,street:{color:866888,rough:.3,width:.022,glow:.9},road:{width:.2,laneOffset:.2,meander:.05,lampEvery:.7,lampChance:.6,glsl:`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        albedo = vec3(0.012, 0.015, 0.02);
        rough = 0.12;
        metal = 0.9;
        float edge = smoothstep(0.74, 0.86, abs(x)) * smoothstep(1.0, 0.92, abs(x));
        float pulse = smoothstep(0.78, 1.0, fract(s * 0.8 - uTime * 0.9));
        emissive += vec3(0.1, 0.8, 1.0) * edge * (0.35 + pulse * 1.5);
        float mid = step(abs(x), 0.03) * step(fract(s * 5.0 - uTime * 2.0), 0.3);
        emissive += vec3(1.0, 0.25, 0.65) * mid * 0.7;
      }`},plaza(n,{r:e}){n.paint(724500,{rough:.14,metal:.95}),n.ngon(6,e,.012,{cap:!0}),n.paint(ci,{glow:1.1}),n.ngon(6,e*1.005,.003,{y:.012}),n.paint(724500,{rough:.14,metal:.95}),n.ngon(6,e*.97,.003,{y:.0145})},lot:[790293,1053724],landmark:xb,section:vb,filler(n,{s:e,rng:t,spin:i,tier:s}){let r=e*t.range(.9,2)*(1+s*1.9);if(t.chance(.14)){n.paint(1053724,{rough:.2,metal:.9}),n.cyl(e*.3,e*.34,r*.5,8,{caps:!0}),i.save().move(0,r*.5+e*.45,0),i.spinAbout(0,0,0,0,1,0,1.4),i.paint(ci,{glow:2.6}),i.ngon(4,e*.3,e*.3,{y:-e*.15,top:.02}),i.restore();return}n.paint(t.pick(gc),{rough:.2,metal:.92,win:t.chance(.5)?Ae.DATA:Ae.STRIPES,cw:.05,ch:.1}),n.box(e*1.5,r,e*1.5,{top:t.range(.74,1)}),n.paint(658707,{rough:.25,metal:.9}),n.box(e*1.2,.008,e*1.2,{y:r}),n.paint(t.pick([ci,du]),{glow:1.1}),n.box(e*.5,.012,.012,{y:r})},roadside(n,{rng:e}){n.paint(1316898,{rough:.3,metal:.9}),n.ngon(4,.012,.12,{top:.4}),n.paint(e.chance(.2)?Ua:ci,{glow:5}),n.save().move(0,.12,0).ngon(4,.01,.02,{top:.01}).restore()},vehicles:[{weight:2,speed:.85,y:.03,shadow:!1,build(n){n.paint(ci,{glow:2.6}),n.box(.045,.022,.1,{top:.8}),n.paint(16777215,{glow:4}),n.box(.02,.006,.05,{y:.022})}},{weight:1,speed:.65,y:.03,shadow:!1,build(n){n.paint(Ua,{glow:5}),n.box(.04,.04,.04),n.paint(1053724,{rough:.2,metal:.9}),n.box(.05,.012,.05,{y:.014})}}],flyer:{speed:1.5,shadow:!1,build(n){n.paint(1053724,{rough:.2,metal:.95}),n.prism([[.09,-.07],[0,.11],[-.09,-.07],[0,-.03]],.012),n.paint(ci,{glow:7}),n.save().move(0,.003,-.05).box(.05,.006,.012).restore()}},walker:{speed:.17,lift:.045,bob:.006,bobRate:3,build(n){n.paint(1712176,{rough:.2,metal:.9}),n.sphere(.0085,{seg:7,rings:4}),n.paint(ci,{glow:5}),n.ring(.012,.0016,{y:.008,seg:10,tseg:3})}},ship(n){n.paint(1185310,{rough:.2,metal:.95}),n.prism([[.65,-.8],[0,1.1],[-.65,-.8],[0,-.45]],.18,{top:.85}),n.paint(ci,{glow:5}),n.save().move(0,.05,-.62).box(.5,.08,.1).restore(),n.save().move(0,.19,.1).box(.02,.01,1.1).restore()}};var Ba=[2367518,2893346,1841431,3353382],Rn=4866106,Cn=16742940,Ms=16761690;function yb(n,{h:e,w:t,rng:i,capital:s}){let r=4+(s?2:i.int(0,1)),a=t*2.1,o=0,l=e*.8/r;for(let c=0;c<r;c++)n.paint(Ba[c%Ba.length],{rough:.92,win:Ae.SPOTS,cw:.11,ch:.11}),n.box(a,l,a,{y:o,top:.9}),o+=l,n.paint(Cn,{glow:1.5}),n.box(a*.79,.012,a*.79,{y:o}),o+=.012,a*=.74;n.paint(3682346,{rough:.85}),n.save().move(0,0,t*1.02).rotX(-.62),n.box(t*.28,.02,e*.9),n.restore(),n.paint(Rn,{rough:.5,metal:.8}),n.cyl(a*.46,a*.34,e*.2,12,{y:o,caps:!1}),n.paint(Ms,{glow:3.5}),n.disc(a*.34,{y:o+e*.195,seg:12}),n.paint(Cn,{glow:5}),n.save().move(0,.02,t*1.06).box(t*.44,.1,.012).restore()}function bb(n,{h:e,w:t,rng:i}){n.paint(i.pick(Ba),{rough:.88,win:Ae.SPOTS,cw:.07,ch:.08}),n.box(t*1.2,e*.6,t,{top:.88}),n.paint(Rn,{rough:.55,metal:.8});let s=i.int(1,3);for(let r=0;r<s;r++)n.save().move((r-(s-1)/2)*t*.34,e*.6,0),n.cyl(t*.1,t*.07,e*.5,8,{caps:!1}),n.paint(Ms,{glow:3}),n.disc(t*.07,{y:e*.5,seg:8}),n.paint(Rn,{rough:.55,metal:.8}),n.restore();n.paint(Cn,{glow:4}),n.save().move(0,.01,t*.5).box(t*.4,e*.2,.01).restore()}var Ff={id:"ignis",name:{en:"Ignis",de:"Ignis"},people:{en:"The Forge-Clans",de:"Die Schmiede-Clans"},blurb:{en:"Basalt, magma and ceaseless labour. Stepped ziggurats crown the furnaces; ore carts follow canals of living fire.",de:"Basalt, Magma und unabl\xE4ssige Arbeit. Stufen-Zikkurate kr\xF6nen die Hoch\xF6fen; Erzkarren folgen Kan\xE4len aus lebendigem Feuer."},bridge:{en:"magma canals & cinder barges",de:"Magmakan\xE4le & Glutbarken"},dayLength:230,tilt:.1,palette:{accent:16747052,window:16747566,route:16751164,scaffold:7101004},env:{zenith:2757648,horizon:12604970,ground:1182216},terrain:{amp:1,power:1.15,height(n,e,t,i){let s=n.fbm(e*1.7+4,t*1.7,i*1.7,5,2.1,.55),r=n.ridged(e*3.1,t*3.1+8,i*3.1,4,2.1,.45);return s*2+r*r*.85+.3}},scatterDensity:.3,scatterMinH:.03,scatter(n,{rng:e,h:t}){let i=e.next();if(i<.55){let s=e.range(.05,.18);n.paint(e.pick(Ba),{rough:.95}),n.ngon(e.int(3,5),s,s*e.range(1.5,4.5),{top:.05,rot:e.range(0,6)})}else if(i<.86){let s=e.range(.05,.13);n.paint(1841431,{rough:.9,metal:.1}),n.sphere(s,{seg:5,rings:3,sy:.7})}else t>.2&&(n.paint(2893346,{rough:.95}),n.cyl(.08,.025,.09,7,{caps:!1,smooth:!1}),n.paint(Ms,{glow:10}),n.disc(.025,{y:.088,seg:7}))},surfaceGLSL:`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 8.0);
      float fine = n3(p * 70.0);
      float hh = h + (n - 0.5) * 0.14;
      vec3 basalt = mix(vec3(0.03, 0.026, 0.024), vec3(0.09, 0.075, 0.066), fine);
      vec3 ash = vec3(0.17, 0.15, 0.14);
      albedo = mix(basalt, ash, smoothstep(0.75, 1.2, hh + (fine - 0.5) * 0.3));
      rough = 0.95;
      bump += bumpOf(p, 38.0, 0.16) * smoothstep(90.0, 10.0, dist);
      bump += bumpOf(p, 190.0, 0.12) * smoothstep(16.0, 2.0, dist);
      // Cracks in the crust glow from beneath.
      float cr = 1.0 - abs(n3(p * 26.0 + 5.0) * 2.0 - 1.0);
      float cr2 = 1.0 - abs(n3(p * 66.0 + 13.0) * 2.0 - 1.0);
      float crack = smoothstep(0.93, 1.0, cr) * smoothstep(0.42, 0.56, n3(p * 7.0));
      crack += smoothstep(0.96, 1.0, cr2) * 0.5 * smoothstep(0.45, 0.6, n3(p * 11.0 + 3.0));
      float heat = smoothstep(0.55, 0.0, hh);
      emissive += vec3(1.0, 0.28, 0.04) * crack * (0.3 + heat * 1.3);
      if (hh < 0.0 && mask < 0.6) {
        // Magma sea: crusted plates drifting on incandescent rock.
        float t = uTime * 0.018;
        float plate = fbm5(p * 13.0 + vec3(t, 0.0, -t));
        float crust = smoothstep(0.43, 0.56, plate);
        vec3 lava = mix(vec3(1.0, 0.3, 0.02), vec3(1.0, 0.72, 0.18), smoothstep(0.4, 0.2, plate));
        albedo = mix(vec3(0.0), vec3(0.03, 0.022, 0.02), crust);
        emissive += lava * (1.0 - crust) * 1.35;
        emissive += vec3(1.0, 0.25, 0.03) * crust * 0.05;
        rough = mix(0.5, 0.95, crust);
      } else if (hh < 0.07) {
        emissive += vec3(1.0, 0.3, 0.04) * smoothstep(0.07, 0.0, hh) * 0.5;
      }
      vec3 yard = mix(vec3(0.05, 0.043, 0.038), vec3(0.085, 0.07, 0.06), n3(p * 130.0));
      albedo = mix(albedo, yard, smoothstep(0.3, 0.9, mask));
    }`,atmosphere:{thickness:1.2,rayleigh:[3.4,1.4,.5],mie:[1.1,.7,.4],g:.72,intensity:4.8,haze:16742970,night:[.03,.009,.002],fog:{density:.011,day:6041632,dusk:9058840,night:1312772}},clouds:{cover:.54,scale:3.4,opacity:.78,color:8088160,shadow:1511436,dusk:12142364,glow:1705730,speed:1.6},transit:{road:{en:"Magma canal",de:"Magmakanal"},air:{en:"Cinder barge",de:"Aschekahn"}},map:{title:{en:"Forge ledger",de:"Schmiedebuch"},paper:"#140c09",edge:"#5a2c14",ink:"#ffdcb6",soft:"#b07a50",sea:["#a83a0c","#ff8a24"],land:["#241714","#4f342c"],contour:"rgba(255,140,60,0.16)",grid:"rgba(255,170,90,0.06)",road:"#ff7a1c",casing:"#5a1d06",air:"#ffc477",traffic:"#fff0c8",accent:"#ff7a1c",lines:"magma",glyph:"ember",font:"ui"},layout:"grid",block:.52,street:{color:3806728,rough:.8,width:.045,glow:.8},lot:[2893346,3550760],road:{width:.24,laneOffset:.2,meander:.32,lampEvery:.85,lampChance:.5,glsl:`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Iron-banked canal: flowing magma between two channels of slag.
        float bank = smoothstep(0.62, 0.72, abs(x));
        vec3 q = vec3(x * 1.4, s * 1.6 - uTime * 0.42, 3.0);
        float flow = fbm3(q);
        vec3 lava = mix(vec3(1.0, 0.24, 0.02), vec3(1.0, 0.68, 0.14), smoothstep(0.42, 0.62, flow));
        albedo = mix(vec3(0.0), vec3(0.06, 0.05, 0.045), bank);
        rough = mix(0.6, 0.8, bank);
        metal = bank * 0.7;
        emissive += lava * (1.0 - bank) * (0.5 + flow * 1.0);
        float rivet = step(0.8, fract(s * 3.0)) * bank;
        albedo += vec3(0.05, 0.04, 0.035) * rivet;
      }`},plaza(n,{r:e}){n.paint(2301466,{rough:.9}),n.ngon(8,e,.014),n.paint(Cn,{glow:2.2}),n.ngon(8,e*1.01,.003,{y:.014}),n.paint(2893346,{rough:.9}),n.ngon(8,e*.96,.003,{y:.0165})},landmark:yb,section:bb,filler(n,{s:e,rng:t,tier:i}){let s=e*t.range(.7,1.5)*(1+i*1.3);if(t.chance(.3)){n.paint(Rn,{rough:.55,metal:.8}),n.cyl(e*.5,e*.34,s*1.2,9,{caps:!1}),n.paint(Ms,{glow:2.2}),n.disc(e*.34,{y:s*1.2-.002,seg:9});return}n.paint(t.pick(Ba),{rough:.92,win:Ae.SPOTS,cw:.06,ch:.07}),n.box(e*1.6,s,e*1.4,{top:.82}),i>.4&&n.box(e*.9,s*.5,e*.8,{y:s,top:.8}),n.paint(1841431,{rough:.9}),n.box(e*1.1,.006,e*1,{y:s+(i>.4?s*.5:0)}),n.paint(Cn,{glow:1}),n.box(e*.3,.012,e*.3,{y:s+(i>.4?s*.5:0)})},roadside(n,{rng:e}){n.paint(Rn,{rough:.55,metal:.8}),n.box(.018,.1,.018,{top:.6}),n.paint(e.chance(.5)?Ms:Cn,{glow:7}),n.save().move(0,.1,0).ngon(4,.012,.02,{top:.2}).restore()},vehicles:[{weight:2,speed:.3,y:.005,build(n){n.paint(Rn,{rough:.5,metal:.85}),n.box(.05,.03,.09,{y:.012,top:1.12}),n.paint(Ms,{glow:8}),n.box(.04,.006,.075,{y:.041})}},{weight:1,speed:.24,y:.005,build(n){n.paint(3353382,{rough:.7,metal:.5}),n.box(.055,.04,.12,{y:.01,top:.9}),n.paint(Rn,{rough:.5,metal:.85}),n.save().move(0,.05,-.03).cyl(.008,.01,.04,6).restore(),n.paint(Cn,{glow:8}),n.save().move(0,.03,.06).box(.04,.012,.002).restore()}}],flyer:{speed:.7,shadow:!1,build(n){n.paint(2893346,{rough:.75,metal:.4}),n.box(.08,.04,.24,{top:.82}),n.paint(Rn,{rough:.5,metal:.8}),n.box(.11,.012,.09,{y:.02}),n.paint(Cn,{glow:6}),n.save().move(0,-.006,0).box(.05,.006,.16).restore()}},walker:{speed:.075,lift:.008,bob:.003,bobRate:5,colors:[9075308,7102034,10258552],build(n){n.paint(16777215,{rough:.95}),n.box(.013,.015,.009,{y:.005}),n.box(.009,.005,.007,{y:0}),n.box(.009,.008,.008,{y:.02}),n.paint(Ms,{glow:6}),n.save().move(0,.024,.0042).box(.006,.0016,5e-4).restore()}},ship(n){n.paint(2893346,{rough:.7,metal:.5}),n.box(.8,.5,1.8,{y:-.25,top:.72}),n.paint(Rn,{rough:.5,metal:.8}),n.box(1.3,.14,.7,{y:-.08}),n.paint(Cn,{glow:5}),n.save().move(.26,-.1,-.92).box(.22,.2,.05).restore(),n.save().move(-.26,-.1,-.92).box(.22,.2,.05).restore()}};var za=[9221340,8168660,10536164,7377100],xc=[9203928,8019152,10257632],Cr=9430783,Of=16754412;function _b(n,{h:e,w:t,rng:i,spin:s,capital:r}){let a=i.pick(za),o=i.pick([5,6,6,8]);n.paint(dt(a,3164784,.4),{rough:.3,metal:.25}),n.ngon(o,t*1.36,.05,{top:.82}),n.paint(a,{rough:.08,metal:.55,win:Ae.CRYSTAL,cw:.07,ch:.16}),n.crystal(o,t*.72,e,{y:.04,tip:.24,rot:i.range(0,1)});let l=r?8:i.int(4,6);for(let h=0;h<l;h++){let p=h/l*Math.PI*2+i.range(-.2,.2),u=i.range(.32,.62);n.save().move(Math.cos(p)*t*.86,.02,Math.sin(p)*t*.86),n.rotZ(Math.cos(p)*-.16).rotX(Math.sin(p)*.16),n.paint(h%3===0?i.pick(xc):dt(a,16777215,.2),{rough:.08,metal:.5,win:Ae.CRYSTAL,cw:.05,ch:.12}),n.crystal(o,t*.3*u*1.5,e*u,{rot:i.range(0,2)}),n.restore()}s.save().move(0,e*1.12,0),s.spinAbout(0,0,0,0,1,0,r?1.1:.7),s.paint(r?Of:Cr,{glow:2.6});let c=r?.13:.08;s.ngon(4,c,c*1.3,{top:.001,cap:!1}),s.save().rotX(Math.PI),s.ngon(4,c,c*1.3,{top:.001,cap:!1}),s.restore(),s.restore()}function wb(n,{h:e,w:t,rng:i,spin:s}){let r=i.chance(.3)?i.pick(xc):i.pick(za);n.paint(r,{rough:.1,metal:.45,win:Ae.CRYSTAL,cw:.05,ch:.12}),n.crystal(6,t*.5,e,{rot:i.range(0,1)}),n.save().move(t*.42,0,t*.1).rotZ(-.16),n.crystal(5,t*.24,e*.55,{}),n.restore(),s.save().move(0,e*1.12,0),s.spinAbout(0,0,0,0,1,0,1.3),s.paint(Cr,{glow:4}),s.ngon(4,.022,.03,{top:.001,cap:!1}),s.restore()}var Uf={id:"prisma",name:{en:"Prisma",de:"Prisma"},people:{en:"The Lattice",de:"Das Gitter"},blurb:{en:"A glacier world whose inhabitants are grown, not born. Their spires are crystal; their roads are ribbons of pure light above the ice.",de:"Eine Gletscherwelt, deren Bewohner gewachsen sind, nicht geboren. Ihre T\xFCrme sind Kristall, ihre Stra\xDFen B\xE4nder aus reinem Licht \xFCber dem Eis."},bridge:{en:"ribbons of light",de:"B\xE4nder aus Licht"},dayLength:190,tilt:.42,palette:{accent:11069695,window:10479871,route:12891391,scaffold:9414856},env:{zenith:5932248,horizon:16050431,ground:11060452},terrain:{amp:1.2,power:1.5,height(n,e,t,i){let s=n.fbm(e*1.4+9,t*1.4,i*1.4,5,2.05,.5),r=n.ridged(e*2.2,t*2.2+3,i*2.2,4,2.1,.5);return s*1.4+r*r*.9+.14}},scatterDensity:.55,scatterMinH:0,scatter(n,{rng:e,h:t}){let i=e.range(.05,.16),s=e.chance(.25)?e.pick(xc):e.pick(za);n.paint(s,{rough:.1,metal:.4});let r=t>.3?e.int(2,4):e.int(1,2);for(let a=0;a<r;a++)n.save().move(e.range(-i,i)*.8,0,e.range(-i,i)*.8).rotZ(e.range(-.3,.3)).rotX(e.range(-.3,.3)),n.crystal(e.int(4,6),i*e.range(.25,.5),i*e.range(1.2,3.4),{rot:e.range(0,3)}),n.restore()},surfaceGLSL:`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 6.0);
      float fine = n3(p * 54.0);
      float hh = h + (n - 0.5) * 0.14;
      vec3 snow = vec3(0.5, 0.56, 0.68);
      vec3 ice = mix(vec3(0.16, 0.34, 0.54), vec3(0.3, 0.48, 0.66), fine);
      vec3 violet = vec3(0.33, 0.24, 0.62);
      float flow = fbm3(p * vec3(5.0, 16.0, 5.0));
      albedo = mix(ice, snow, smoothstep(0.42, 0.56, flow + hh * 0.2));
      // Crevasses cut deep and violet through the glacier.
      float c = 1.0 - abs(n3(p * 15.0 + 3.0) * 2.0 - 1.0);
      float crevasse = smoothstep(0.9, 0.99, c) * smoothstep(0.42, 0.55, n3(p * 5.0));
      albedo = mix(albedo, violet * 0.7, crevasse);
      emissive += vec3(0.3, 0.45, 1.0) * crevasse * 0.3 * smoothstep(0.3, -0.2, day);
      rough = mix(0.4, 0.75, smoothstep(0.42, 0.6, flow));
      metal = 0.0;
      bump += bumpOf(p, 28.0, 0.1);
      bump += bumpOf(p, 200.0, 0.05) * smoothstep(16.0, 2.0, dist);
      if (hh < 0.0 && mask < 0.6) {
        // Frozen sea, clear as glass, with pressure cracks.
        float d = clamp(-hh / 0.5, 0.0, 1.0);
        albedo = mix(vec3(0.14, 0.42, 0.62), vec3(0.015, 0.08, 0.24), pow(d, 0.7));
        float cracks = smoothstep(0.96, 1.0, 1.0 - abs(n3(p * 46.0) * 2.0 - 1.0));
        albedo = mix(albedo, vec3(0.75, 0.86, 0.96), cracks * 0.7);
        rough = 0.28;
        bump += bumpOf(p, 80.0, 0.03);
      }
      vec3 terrace = mix(vec3(0.34, 0.4, 0.54), vec3(0.42, 0.48, 0.6), n3(p * 120.0));
      albedo = mix(albedo, terrace, smoothstep(0.3, 0.9, mask));
      rough = mix(rough, 0.45, smoothstep(0.3, 0.9, mask));
    }`,atmosphere:{thickness:1.24,rayleigh:[1.5,1.7,4.6],mie:[.5,.5,.65],intensity:5.5,haze:12372223,night:[.006,.006,.02],fog:{density:.009,day:10267856,dusk:12615864,night:657954}},clouds:{cover:.62,scale:3.4,opacity:.5,color:14476536,shadow:8029880,dusk:16751316,speed:.7},aurora:{colorA:6356920,colorB:13925375,latitude:.78,gain:.5},transit:{road:{en:"Light ribbon",de:"Lichtband"},air:{en:"Glider",de:"Gleiter"}},map:{title:{en:"Light lattice",de:"Lichtgitter"},paper:"#e6f3fb",edge:"#8cb7d4",ink:"#12324a",soft:"#5880a0",sea:["#93bfdd","#c1dff1"],land:["#f0f9fe","#ffffff"],contour:"rgba(60,130,190,0.25)",grid:"rgba(60,130,190,0.12)",road:"#2b7fc4",casing:"#ffffff",air:"#a35cf0",traffic:"#12324a",accent:"#2b7fc4",lines:"beam",glyph:"crystal",font:"ui"},layout:"rings",block:.46,street:{color:7128302,rough:.2,width:.018,glow:1},lot:[6058132,6847648],road:{width:.16,elev:.22,laneOffset:.18,meander:.3,lampEvery:.9,lampChance:.35,pillarEvery:.9,pillar(n,{elev:e}){n.paint(12376304,{rough:.1,metal:.5}),n.ngon(4,.014,e,{top:.35})},glsl:`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        albedo = vec3(0.65, 0.8, 0.95);
        rough = 0.05;
        metal = 0.2;
        float core = exp(-x * x * 7.0);
        float wave = 0.5 + 0.5 * sin(s * 3.4 - uTime * 2.2);
        vec3 tint = mix(vec3(0.5, 0.82, 1.0), vec3(0.85, 0.65, 1.0), 0.5 + 0.5 * sin(s * 0.7 + uTime * 0.3));
        emissive += tint * (0.18 + core * (0.35 + wave * 0.7));
      }`},plaza(n,{r:e}){n.paint(5662860,{rough:.25,metal:.3}),n.disc(e,{seg:48}),n.paint(Cr,{glow:1.8}),n.disc(e*.99,{y:.003,seg:48,inner:e*.95})},landmark:_b,section:wb,filler(n,{s:e,rng:t,tier:i}){let s=t.chance(.28)?t.pick(xc):t.pick(za),r=e*t.range(1.2,2.8)*(1+i*1.7);n.paint(s,{rough:.09,metal:.45,win:Ae.CRYSTAL,cw:.04,ch:.1}),n.crystal(t.int(5,6),e*.46,r,{rot:t.range(0,3)}),t.chance(.6)&&(n.save().move(e*.5,0,t.range(-e,e)*.3).rotZ(-.2),n.crystal(5,e*.24,r*.55,{}),n.restore())},roadside(n,{rng:e}){n.paint(e.pick(za),{rough:.1,metal:.4,glow:0}),n.crystal(4,.016,e.range(.08,.14),{}),n.paint(Cr,{glow:3}),n.save().move(0,.16,0).ngon(4,.008,.012,{top:.01,cap:!1}).restore()},vehicles:[{weight:1,speed:.7,y:.03,shadow:!1,build(n){n.paint(16777215,{glow:5,rough:.1}),n.ngon(4,.022,.03,{top:.001,cap:!1}),n.save().rotX(Math.PI),n.ngon(4,.022,.05,{top:.001,cap:!1}),n.restore()}},{weight:1,speed:.55,y:.03,shadow:!1,build(n){n.paint(Of,{glow:5,rough:.1}),n.save().rotX(Math.PI/2),n.crystal(5,.018,.1,{y:-.05,tip:.5,foot:.3}),n.restore()}}],flyer:{speed:1.1,shadow:!1,build(n){n.paint(13821686,{rough:.06,metal:.6}),n.save().rotX(Math.PI/2),n.crystal(4,.05,.26,{y:-.13,tip:.5,foot:.45}),n.restore(),n.paint(Cr,{glow:5}),n.sphere(.012,{seg:6,rings:4,y:-.012})}},walker:{speed:.1,lift:.05,bob:.01,bobRate:1.6,build(n){n.paint(13167871,{glow:2.2,rough:.1}),n.ngon(4,.008,.012,{top:.001,cap:!1}),n.save().rotX(Math.PI),n.ngon(4,.008,.018,{top:.001,cap:!1}),n.restore()}},ship(n){n.paint(13821686,{rough:.06,metal:.6}),n.save().rotX(Math.PI/2),n.crystal(6,.34,2.2,{y:-1.1,tip:.55,foot:.3}),n.restore(),n.paint(Cr,{glow:4}),n.save().move(0,0,-.5).ring(.5,.03,{seg:18,tseg:4}).restore()}};var Ha=[12864154,10111696,14702218,5925088,13916856],Ts=[14207188,12890312,14734552],hi=3993808,Pn=16735432,Pr=7121151;function Va(n,{h:e,w:t,rng:i,cap:s,stem:r,glow:a=hi,spots:o=!0}){let l=t;n.paint(r,{rough:.72,win:Ae.PULSE,cw:.07,ch:.09}),n.lathe([[l*.52,0],[l*.36,e*.08],[l*.28,e*.4],[l*.26,e*.72],[l*.3,e*.84]],12);let c=l*1.45;if(n.paint(a,{glow:2.6,rough:.5}),n.lathe([[l*.3,e*.84],[c*.7,e*.79],[c*.98,e*.75]],18),n.paint(s,{rough:.5}),n.lathe([[c,e*.745],[c*1.02,e*.77],[c*.92,e*.86],[c*.62,e*.96],[c*.26,e*1.01],[0,e*1.02]],18),o){n.paint(dt(s,16777215,.65),{rough:.5,glow:-.8});let h=7;for(let p=0;p<h;p++){let u=i.range(0,6.28),d=i.range(.32,.82),m=Math.cos(u)*c*d,x=Math.sin(u)*c*d,f=e*(1.015-d*d*.22)-.004;n.save().move(m,f,x).sphere(l*.075,{seg:6,rings:3,sy:.4}).restore()}}}var Bf={id:"myzel",name:{en:"Myzel",de:"Myzel"},people:{en:"The Network",de:"Das Geflecht"},blurb:{en:"One fungal organism spanning a violet world. Towers are fruiting bodies, roads are living veins, and thoughts drift as glowing spores.",de:"Ein einziger Pilzorganismus, der eine violette Welt umspannt. T\xFCrme sind Fruchtk\xF6rper, Stra\xDFen lebende Adern, Gedanken treiben als leuchtende Sporen."},bridge:{en:"living veins & spore drift",de:"Lebende Adern & Sporenflug"},dayLength:240,tilt:.2,palette:{accent:5042900,window:5566680,route:14970111,scaffold:8018570},env:{zenith:2494783,horizon:11553434,ground:1247772},terrain:{amp:.9,power:1.2,height(n,e,t,i){let s=n.fbm(e*1.9,t*1.9+5,i*1.9,5,2,.52),r=n.simplex(e*6,t*6,i*6)*.1;return s*2.2+r+.1}},scatterDensity:.45,scatterMinH:.01,scatter(n,{rng:e,x:t,y:i,z:s,noise:r}){if(r.simplex(t*9,i*9,s*9)<-.25)return;let o=e.next();if(o<.62){let l=e.range(.05,.16);Va(n,{h:l*1.7,w:l*.65,rng:e,cap:e.pick(Ha),stem:e.pick(Ts),glow:e.pick([hi,Pn,Pr]),spots:!1})}else if(o<.86){let l=e.pick([hi,Pn,Pr]);for(let c=0;c<4;c++){let h=e.range(0,6.28),p=e.range(.02,.06),u=e.range(.07,.17);n.paint(1839656,{rough:.7}),n.tube([[0,0,0],[Math.cos(h)*p*.5,u*.6,Math.sin(h)*p*.5],[Math.cos(h)*p,u,Math.sin(h)*p]],.005,{seg:3,taper:.4}),n.paint(l,{glow:5}),n.save().move(Math.cos(h)*p,u,Math.sin(h)*p).sphere(.008,{seg:5,rings:3}).restore()}}else n.paint(e.pick(Ts),{rough:.8,win:Ae.PULSE,cw:.05,ch:.05}),n.sphere(e.range(.03,.07),{seg:8,rings:5,sy:.85})},surfaceGLSL:`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      float n = fbm5(p * 8.0);
      float fine = n3(p * 62.0);
      float hh = h + (n - 0.5) * 0.15;
      vec3 moss = mix(vec3(0.06, 0.028, 0.11), vec3(0.16, 0.05, 0.2), n);
      vec3 rust = vec3(0.24, 0.07, 0.17);
      albedo = mix(moss, rust, smoothstep(0.44, 0.62, fbm3(p * 4.0 + 9.0)));
      albedo = mix(albedo, vec3(0.2, 0.15, 0.24), smoothstep(0.75, 1.15, hh));
      albedo *= 0.8 + fine * 0.4;
      rough = 0.82;
      bump += bumpOf(p, 40.0, 0.1) * smoothstep(90.0, 10.0, dist);
      bump += bumpOf(p, 240.0, 0.11) * smoothstep(14.0, 2.0, dist);
      // Mycelium: a web of veins through the soil, pulsing with traffic.
      float v1 = 1.0 - abs(n3(p * 21.0) * 2.0 - 1.0);
      float v2 = 1.0 - abs(n3(p * 53.0 + 7.0) * 2.0 - 1.0);
      float vein = smoothstep(0.955, 1.0, v1) + smoothstep(0.97, 1.0, v2) * 0.55;
      float pulse = 0.55 + 0.45 * sin(dot(p, vec3(13.0, 9.0, 11.0)) * 2.5 - uTime * 1.3);
      vec3 veinCol = mix(vec3(0.1, 1.0, 0.82), vec3(1.0, 0.25, 0.8), smoothstep(0.42, 0.6, n3(p * 3.0)));
      emissive += veinCol * vein * pulse * (0.18 + night * 0.95);
      // Pale bioluminescent patches.
      emissive += vec3(0.08, 0.5, 0.45) * smoothstep(0.58, 0.72, n3(p * 12.0 + 4.0)) * night * 0.16;
      if (hh < 0.0 && mask < 0.6) {
        liquid(p, hh, vec3(0.004, 0.03, 0.05), vec3(0.03, 0.22, 0.2), 20.0, albedo, rough, metal, bump);
        emissive += vec3(0.05, 0.75, 0.6) * pow(n3(p * 42.0 + uTime * 0.06), 7.0) * (0.3 + night * 1.3);
      }
      vec3 spongy = mix(vec3(0.09, 0.04, 0.12), vec3(0.15, 0.07, 0.17), n3(p * 130.0));
      albedo = mix(albedo, spongy, smoothstep(0.3, 0.9, mask));
    }`,atmosphere:{thickness:1.25,rayleigh:[3.2,1,3.8],mie:[.8,.5,.9],g:.7,scaleR:.08,intensity:5.5,haze:14183664,night:[.012,.012,.03],fog:{density:.019,day:6958970,dusk:11550842,night:919072}},clouds:{cover:.58,scale:5.5,opacity:.5,color:14199008,shadow:3151944,dusk:16740528,glow:529423},transit:{road:{en:"Living vein",de:"Lebensader"},air:{en:"Spore drift",de:"Sporenflug"}},map:{title:{en:"Spore chart",de:"Sporenkarte"},paper:"#120a1c",edge:"#4a2a66",ink:"#d8ffe9",soft:"#7fb79c",sea:["#090410","#1a0f2c"],land:["#21122f","#40265a"],contour:"rgba(140,255,200,0.11)",grid:"rgba(140,255,200,0.05)",road:"#7dffcb",casing:"#14533f",air:"#ff7de0",traffic:"#f4fff9",accent:"#7dffcb",lines:"vein",glyph:"spore",font:"ui"},layout:"organic",block:.5,lot:null,road:{width:.17,laneOffset:.2,meander:.75,lampEvery:.5,lampChance:.7,glsl:`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        float w = n3(vec3(s * 2.0, x * 2.0, 1.0));
        float edge = 1.0 - smoothstep(0.55, 1.0, abs(x) + (w - 0.5) * 0.5);
        albedo = mix(vec3(0.05, 0.02, 0.06), vec3(0.16, 0.08, 0.15), edge);
        rough = 0.5;
        float vein = exp(-x * x * 14.0);
        float pulse = pow(0.5 + 0.5 * sin(s * 2.6 - uTime * 2.3), 4.0);
        emissive += mix(vec3(0.06, 0.9, 0.72), vec3(1.0, 0.4, 0.85), pulse) * vein * (0.35 + pulse * 1.2 + night * 0.25);
      }`},plaza(n,{r:e}){n.paint(2758712,{rough:.65}),n.disc(e,{seg:48}),n.paint(hi,{glow:1.6}),n.disc(e*.97,{y:.003,seg:48,inner:e*.93}),n.paint(3678282,{rough:.6}),n.disc(e*.6,{y:.003,seg:32,inner:e*.5})},landmark(n,{h:e,w:t,rng:i,spin:s,capital:r}){Va(n,{h:e,w:t*1.05,rng:i,cap:i.pick(Ha),stem:i.pick(Ts),glow:r?Pn:hi});let a=r?7:i.int(3,5);for(let o=0;o<a;o++){let l=o/a*Math.PI*2+i.range(-.3,.3),c=i.range(.24,.5);n.save().move(Math.cos(l)*t*1.1,0,Math.sin(l)*t*1.1).rotZ(Math.cos(l)*-.14).rotX(Math.sin(l)*.14),Va(n,{h:e*c,w:t*c*.8,rng:i,cap:i.pick(Ha),stem:i.pick(Ts),glow:i.pick([hi,Pn,Pr]),spots:!1}),n.restore()}for(let o=0;o<6;o++){let l=o/6*Math.PI*2;s.save().move(0,e*i.range(1.1,1.3),0),s.spinAbout(0,0,0,0,1,0,i.range(.25,.6)*(o%2?1:-1)),s.paint(i.pick([hi,Pn]),{glow:7}),s.save().move(Math.cos(l)*t*1.4,0,Math.sin(l)*t*1.4).sphere(.012,{seg:5,rings:3}).restore(),s.restore()}},section(n,{h:e,w:t,rng:i}){Va(n,{h:e*1.1,w:t*.75,rng:i,cap:i.pick(Ha),stem:i.pick(Ts),glow:i.pick([hi,Pr])})},filler(n,{s:e,rng:t,tier:i}){let s=t.next();if(s<.62){let r=e*t.range(1.3,2.6)*(1+i*1.4);Va(n,{h:r,w:e*t.range(.55,.85),rng:t,cap:t.pick(Ha),stem:t.pick(Ts),glow:t.pick([hi,Pn,Pr]),spots:t.chance(.4)})}else if(s<.85)n.paint(t.pick(Ts),{rough:.75,win:Ae.PULSE,cw:.05,ch:.05}),n.sphere(e*.5,{seg:10,rings:6,sy:.9}),n.save().move(e*.5,0,0).sphere(e*.28,{seg:8,rings:5}).restore();else{n.paint(t.pick([hi,Pn]),{glow:4});for(let r=0;r<3;r++){let a=t.range(0,6.28),o=t.range(0,e*.5);n.save().move(Math.cos(a)*o,0,Math.sin(a)*o).cyl(.006,.002,e*t.range(.6,1.3),4,{caps:!1,smooth:!1}).restore()}}},roadside(n,{rng:e}){let t=e.pick([hi,Pn,Pr]);n.paint(3285054,{rough:.7}),n.tube([[0,0,0],[.008,.05,0],[.018,.09,0]],.0065,{seg:4,taper:.5}),n.paint(t,{glow:5}),n.save().move(.018,.09,0).sphere(.014,{seg:6,rings:4}).restore()},vehicles:[{weight:1,speed:.32,y:.03,shadow:!1,build(n){n.paint(hi,{glow:6}),n.sphere(.022,{seg:8,rings:5,y:-.022}),n.paint(2758712,{rough:.4}),n.save().move(0,-.002,-.022).sphere(.01,{seg:5,rings:3}).restore()}},{weight:1,speed:.26,y:.03,shadow:!1,build(n){n.paint(Pn,{glow:6}),n.sphere(.018,{seg:8,rings:5,y:-.018,sx:.8})}}],flyer:{speed:.5,shadow:!1,build(n){n.paint(14713056,{rough:.4,glow:1.4}),n.lathe([[.075,-.015],[.08,.02],[.06,.06],[.03,.085],[0,.09]],12),n.paint(hi,{glow:4});for(let e=0;e<6;e++){let t=e/6*Math.PI*2,i=Math.cos(t)*.05,s=Math.sin(t)*.05;n.tube([[i,-.015,s],[i*1.12,-.07,s*1.12],[i*.85,-.13,s*.85]],.0025,{seg:3,taper:.4})}}},walker:{speed:.06,lift:.03,bob:.012,bobRate:2,colors:[9240552,16751840,11061503],build(n){n.paint(16777215,{rough:.3,glow:1.3}),n.lathe([[.011,0],[.012,.007],[.009,.014],[.004,.018],[0,.0185]],8),n.save().move(0,-.012,0).cyl(.0015,.004,.012,3,{caps:!1,smooth:!1}).restore()}},ship(n){n.paint(10111696,{rough:.45,glow:.45}),n.save().rotX(Math.PI/2),n.lathe([[0,-1],[.34,-.72],[.52,-.1],[.42,.5],[.16,1],[0,1.12]],12),n.restore(),n.paint(hi,{glow:4}),n.save().move(0,0,-1).sphere(.2,{seg:8,rings:5,y:-.2}).restore()}};var pu=[13212260,13937268,12159576,14464644,11106892],vc=[11032634,12085828,9194034],Ga=3123360,Wa=15251530,yc=15787208;function Sb(n,e,t,i){for(let s=0;s<t;s++){let r=s/t*Math.PI*2;n.save().move(Math.cos(r)*e,0,Math.sin(r)*e),n.paint(8152132,{rough:.7}),n.spinAbout(0,0,0,0,1,0,0),n.cyl(.006,.006,.06,4,{caps:!1,smooth:!1}),n.save().move(0,.065,0),n.spinAbout(0,0,0,0,1,0,i.range(.14,.26)),n.rotX(-.8),n.paint(15003380,{rough:.04,metal:1}),n.box(.09,.004,.09),n.restore(),n.restore()}}function Mb(n,{h:e,w:t,rng:i,spin:s,capital:r}){let a=i.pick(pu),o=t*1.7;n.paint(dt(a,0,.14),{rough:.95,win:Ae.SPOTS,cw:.1,ch:.1}),n.box(o*1.4,e*.14,o*1.4,{top:.94}),n.paint(a,{rough:.94,win:Ae.SPOTS,cw:.085,ch:.095}),n.box(o,e*.2,o,{y:e*.14,top:.92});for(let[h,p]of[[1,1],[-1,1],[1,-1],[-1,-1]])n.save().move(h*o/2,e*.14,p*o/2),n.paint(dt(a,16777215,.14),{rough:.9,win:Ae.STRIPES,cw:.04,ch:.2}),n.box(t*.26,e*.46,t*.26,{top:.84}),n.paint(Ga,{rough:.35,metal:.25}),n.save().move(0,e*.46,0).dome(t*.12,{seg:10,rings:4,sy:1.35}).restore(),n.restore();let l=o*.42;n.paint(a,{rough:.9,win:Ae.SPOTS,cw:.07,ch:.08}),n.cyl(l,l*.96,e*.16,24,{y:e*.34,caps:!1}),n.paint(r?Wa:Ga,{rough:r?.25:.32,metal:r?1:.3});let c=e*.5;n.save().move(0,c,0).dome(l*.98,{seg:24,rings:8,sy:Math.min(1.25,e*.44/l)}).restore(),n.paint(Wa,{rough:.25,metal:1}),n.save().move(0,c+Math.min(l*1.22,e*.43),0).cyl(.012,.002,e*.1,6,{caps:!1}).restore(),Sb(s,o*.74,r?12:8,i)}var zf={id:"auris",name:{en:"Auris",de:"Auris"},people:{en:"The Sunweavers",de:"Die Sonnenweber"},blurb:{en:"Desert nomads turned astronomers under a golden ring. Adobe domes and wind-towers, fields of turning mirrors, sail-sleds on the dunes.",de:"W\xFCstennomaden, die unter einem goldenen Ring zu Astronomen wurden. Lehmkuppeln und Windt\xFCrme, Felder drehender Spiegel, Segelschlitten auf den D\xFCnen."},bridge:{en:"caravan tracks & solar kites",de:"Karawanenpfade & Sonnendrachen"},dayLength:210,tilt:.34,rings:{inner:1.42,outer:2.2,colorA:15784104,colorB:10122832},palette:{accent:16762730,window:16757854,route:16764798,scaffold:10125400},env:{zenith:5146824,horizon:15915180,ground:9202242},terrain:{amp:.75,power:1.1,height(n,e,t,i){let s=n.fbm(e*1.3,t*1.3,i*1.3+2,4,2,.5),r=Math.abs(n.simplex(e*7+s*2,t*2.4,i*7)),a=Math.min(1,Math.max(0,(n.fbm(e*2.5+7,t*2.5,i*2.5,3)-.16)*6));return .14+s*.34+r*.18+a*a*.75}},scatterDensity:.2,scatterMinH:.04,scatter(n,{rng:e,h:t,spin:i}){let s=e.next();if(t>.62&&s<.5){let r=e.range(.1,.2);n.paint(e.pick(vc),{rough:.95}),n.ngon(e.int(5,7),r,r*e.range(.7,1.8),{top:.6,rot:e.range(0,3)})}else if(s<.4){let r=e.range(.04,.09);n.paint(e.pick(vc),{rough:.95}),n.sphere(r,{seg:5,rings:3,sy:.62})}else if(s<.6){let r=e.range(.13,.23);n.paint(8019004,{rough:.9}),n.tube([[0,0,0],[.012,r*.6,0],[.024,r,0]],.0065,{seg:4,taper:.7}),n.paint(5016136,{rough:.7});for(let a=0;a<6;a++){let o=a/6*Math.PI*2;n.tube([[.024,r,0],[.024+Math.cos(o)*.04,r+.012,Math.sin(o)*.04],[.024+Math.cos(o)*.08,r-.03,Math.sin(o)*.08]],.005,{seg:3,taper:.2})}}else if(s<.68){n.paint(13212260,{rough:.9}),n.cyl(.012,.008,.24,5,{caps:!1,smooth:!1}),i.save().move(0,.24,.01),i.spinAbout(0,0,0,0,0,1,1),i.paint(yc,{rough:.7});for(let r=0;r<4;r++)i.save().rotZ(r/4*Math.PI*2).box(.016,.1,.002).restore();i.restore()}},surfaceGLSL:`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 5.0);
      vec3 sand = mix(vec3(0.62, 0.42, 0.2), vec3(0.78, 0.58, 0.3), n);
      vec3 pale = vec3(0.82, 0.68, 0.46);
      vec3 rust = mix(vec3(0.4, 0.17, 0.09), vec3(0.54, 0.26, 0.13), n3(p * vec3(14.0, 66.0, 14.0)));
      float strat = smoothstep(0.38, 0.6, h + (n - 0.5) * 0.25);
      albedo = mix(mix(sand, pale, smoothstep(0.4, 0.62, fbm3(p * 9.0))), rust, strat);
      rough = 0.96;
      // Wind ripples, running across every dune.
      float rip = sin((p.x * 86.0 + p.z * 60.0 + p.y * 40.0) + n * 34.0);
      float rip2 = sin((p.x * 300.0 - p.z * 240.0) + n * 60.0);
      vec3 grad = normalize(vec3(86.0, 40.0, 60.0));
      bump += grad * rip * 0.05 * smoothstep(60.0, 6.0, dist) * (1.0 - strat);
      bump += vec3(0.76, 0.0, -0.64) * rip2 * 0.05 * smoothstep(9.0, 1.0, dist) * (1.0 - strat);
      bump += bumpOf(p, 36.0, 0.1) * strat;
      // Oases.
      float oasis = smoothstep(0.08, 0.015, h + (n - 0.5) * 0.1);
      albedo = mix(albedo, mix(vec3(0.06, 0.25, 0.14), vec3(0.03, 0.22, 0.3), smoothstep(0.03, 0.0, h)), oasis);
      rough = mix(rough, 0.35, oasis);
      vec3 yard = mix(vec3(0.6, 0.43, 0.25), vec3(0.72, 0.56, 0.36), n3(p * 120.0));
      albedo = mix(albedo, yard, smoothstep(0.3, 0.9, mask));
    }`,atmosphere:{thickness:1.2,rayleigh:[1.5,2,3.5],mie:[1.1,.9,.6],g:.78,intensity:7.5,haze:16764826,fog:{density:.014,day:15256992,dusk:15239754,night:789012}},clouds:{cover:.64,scale:3.2,opacity:.42,color:16773336,shadow:10520680,dusk:16751190,banded:1,speed:2.4,groundShadow:!1},transit:{road:{en:"Caravan track",de:"Karawanenpfad"},air:{en:"Solar kite",de:"Sonnendrachen"}},map:{title:{en:"Sun scroll",de:"Sonnenrolle"},paper:"#e9cf95",edge:"#9a7433",ink:"#4a2f10",soft:"#8a6a38",sea:["#b58a45","#d0ab66"],land:["#f0deb0","#c79a55"],contour:"rgba(120,80,30,0.3)",grid:"rgba(120,80,30,0.14)",road:"#8a3f12",casing:"#e9cf95",air:"#b4630f",traffic:"#3a2208",accent:"#a8480e",lines:"caravan",glyph:"sun",font:"serif"},layout:"rings",block:.48,street:{color:11111004,rough:.9,width:.05},lot:[12096612,12886128,11044436],road:{width:.2,laneOffset:.22,meander:.6,lampEvery:.8,lampChance:.6,glsl:`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        float n = n3(vRP * 400.0);
        albedo = mix(vec3(0.5, 0.36, 0.22), vec3(0.62, 0.46, 0.3), n);
        rough = 0.92;
        float kerb = smoothstep(0.84, 0.9, abs(x));
        albedo = mix(albedo, vec3(0.32, 0.22, 0.14), kerb);
        float rut = smoothstep(0.1, 0.0, abs(abs(x) - 0.45));
        albedo *= 1.0 - rut * 0.3;
        float studs = step(0.7, fract(s * 1.6)) * smoothstep(0.08, 0.0, abs(abs(x) - 0.96));
        emissive += vec3(1.0, 0.72, 0.3) * studs * night * 1.8;
      }`},plaza(n,{r:e}){n.paint(12754028,{rough:.9}),n.disc(e,{seg:48}),n.paint(Ga,{rough:.3,metal:.3}),n.disc(e*.97,{y:.003,seg:48,inner:e*.91}),n.paint(11106892,{rough:.9});for(let t=0;t<12;t++){let i=t/12*Math.PI*2;n.save().rotY(i).move(0,.003,e*.72).box(.026,.002,e*.28).restore()}},landmark:Mb,section(n,{h:e,w:t,rng:i}){let s=i.pick(pu);n.paint(s,{rough:.94,win:Ae.SPOTS,cw:.06,ch:.075}),n.box(t*1.15,e*.72,t*1.15,{top:.92}),n.paint(i.chance(.5)?Ga:i.pick(vc),{rough:.4,metal:.15}),n.save().move(0,e*.72,0).dome(t*.48,{seg:14,rings:5,sy:.9}).restore()},filler(n,{s:e,rng:t,tier:i}){let s=t.pick(pu);if(t.chance(.2)){let a=e*t.range(2.4,3.8)*(1+i*.9);n.paint(s,{rough:.92,win:Ae.STRIPES,cw:.04,ch:.2}),n.box(e*.6,a,e*.6,{top:.72}),n.paint(Ga,{rough:.35,metal:.25}),n.save().move(0,a,0).dome(e*.22,{seg:8,rings:3,sy:1.3}).restore();return}if(t.chance(.25)){n.paint(8152132,{rough:.8});for(let[a,o]of[[1,1],[-1,1],[1,-1],[-1,-1]])n.save().move(a*e/1.5,0,o*e/1.5).cyl(.005,.005,e*.9,4,{caps:!1,smooth:!1}).restore();n.paint(t.pick([yc,14178362,3123360,Wa]),{rough:.7}),n.box(e*1.6,.003,e*1.6,{y:e*.86,top:.5});return}let r=e*t.range(.7,1.4)*(1+i*1.1);n.paint(s,{rough:.96,win:Ae.SPOTS,cw:.05,ch:.065}),n.box(e*1.5,r,e*1.5,{top:.93}),n.paint(dt(s,16777215,.18),{rough:.9}),t.chance(.55)?n.save().move(0,r,0).dome(e*.6,{seg:10,rings:4,sy:.76}).restore():n.box(e*1.55,.016,e*1.55,{y:r})},roadside(n,{rng:e}){e.chance(.5)?(n.paint(9202242,{rough:.9}),n.cyl(.009,.006,.09,5,{caps:!1,smooth:!1}),n.paint(16757854,{glow:-7}),n.save().move(0,.09,0).sphere(.011,{seg:6,rings:4}).restore()):(n.paint(e.pick(vc),{rough:.95}),n.sphere(e.range(.012,.03),{seg:5,rings:3,sy:.7}))},vehicles:[{weight:2,speed:.32,y:.022,build(n){n.paint(9202242,{rough:.7}),n.box(.05,.012,.14,{top:.72}),n.paint(6047280,{rough:.7}),n.cyl(.0025,.0025,.09,4,{y:.01,caps:!1,smooth:!1}),n.paint(yc,{rough:.8}),n.quad([0,.098,0],[0,.02,.06],[0,.02,.06],[0,.02,-.03]),n.quad([0,.02,-.03],[0,.02,.06],[0,.02,.06],[0,.098,0]),n.paint(16757854,{glow:-6}),n.save().move(0,.006,.068).box(.02,.006,.002).restore()}},{weight:1,speed:.22,y:.02,build(n){n.paint(8150074,{rough:.8}),n.box(.05,.022,.13,{}),n.paint(yc,{rough:.8}),n.save().rotX(Math.PI/2).cyl(.024,.024,.11,8,{y:-.055}).restore()}}],flyer:{speed:.62,shadow:!1,build(n){n.paint(2103312,{rough:.4,metal:.6}),n.box(.012,.008,.11),n.paint(Wa,{rough:.2,metal:.9});let e=[[.2,-.05],[.02,.09],[-.02,.09],[-.2,-.05],[0,.01]];n.save().move(0,.008,0).prism(e,.003).restore()}},walker:{speed:.075,lift:.004,bob:.002,bobRate:7,colors:[15260864,3123360,12737082,3816026],build(n){n.paint(16777215,{rough:.9}),n.cone(.009,.026,6,{smooth:!1}),n.paint(9198650,{rough:.7}),n.save().move(0,.022,0).sphere(.0045,{seg:5,rings:3}).restore()}},ship(n){n.paint(9202242,{rough:.5,metal:.4}),n.box(.34,.2,1.6,{y:-.1,top:.6}),n.paint(Wa,{rough:.2,metal:1}),n.prism([[1.5,-.3],[.05,.9],[-.05,.9],[-1.5,-.3],[0,.1]],.02),n.paint(16762730,{glow:4.5}),n.save().move(0,0,-.85).box(.26,.12,.05).restore()}};var fu=[15920356,15261932,15003886,16049884],Tb=[15759708,15899244,15227516,13130408],jn=5697752,Eb=16774888;function Ab(n,{h:e,w:t,rng:i,spin:s,capital:r}){let a=i.pick(fu),o=r?8:6;n.paint(dt(a,7113364,.3),{rough:.5}),n.dome(t*1.25,{sy:.24,seg:28});let l=.05,c=t*.92,h=e*.9/o;for(let p=0;p<o;p++){let u=c*.78;n.paint(p%2?a:dt(a,14207200,.45),{rough:.16,metal:.45,win:Ae.SPOTS,cw:.08,ch:.065}),n.lathe([[c*.8,l],[c,l+h*.36],[c*.96,l+h*.7],[u*.82,l+h]],20),l+=h,c=u}n.paint(a,{rough:.14,metal:.5}),n.lathe([[c*.82,l],[c*.5,l+e*.06],[0,l+e*.1]],16),n.paint(Eb,{rough:.05,metal:.25,glow:r?1.15:.6}),n.save().move(0,l+e*.08,0).sphere(t*.19,{seg:16,rings:10}).restore(),s.save().move(0,l+e*.17,0),s.spinAbout(0,0,0,0,1,0,.6),s.paint(jn,{glow:1.3}),s.ring(t*.42,.007,{seg:28,tseg:4}),s.restore();for(let p=0;p<6;p++){let u=p/6*Math.PI*2+.3;n.save().move(Math.cos(u)*t*1.08,.02,Math.sin(u)*t*1.08).rotY(-u),mu(n,i,t*.34),n.restore()}}function mu(n,e,t){n.paint(e.pick(Tb),{rough:.72});let i=4;for(let s=0;s<i;s++){let r=(s/(i-1)-.5)*1.4;n.tube([[0,0,0],[Math.sin(r)*t*.45,t*.55,0],[Math.sin(r)*t*.9,t,t*.08]],t*.075,{seg:4,taper:.3})}}var Hf={id:"thalassa",name:{en:"Thalassa",de:"Thalassa"},people:{en:"The Pearlkeepers",de:"Die Perlenh\xFCter"},blurb:{en:"An ocean with a few islands in it. Nacre spirals and pearl domes rise from coral atolls; manta-craft skim along chains of glowing buoys.",de:"Ein Ozean mit wenigen Inseln. Perlmuttspiralen und Perlenkuppeln wachsen aus Korallenatollen; Manta-Schiffe gleiten an Ketten leuchtender Bojen entlang."},bridge:{en:"sea-lanes & manta flight",de:"Seewege & Mantaflug"},dayLength:185,tilt:.26,palette:{accent:6485212,window:12451824,route:7270624,scaffold:11847876},env:{zenith:3840736,horizon:14218996,ground:940656},terrain:{amp:.55,power:1.1,height(n,e,t,i){return n.fbm(e*2.2+2,t*2.2,i*2.2,5,2.1,.5)*1.8-.42}},scatterDensity:.6,scatterMinH:0,scatter(n,{rng:e}){if(e.chance(.55))mu(n,e,e.range(.05,.13));else{let t=e.range(.12,.2);n.paint(8021064,{rough:.85}),n.tube([[0,0,0],[.014,t*.6,0],[.03,t,.006]],.006,{seg:4,taper:.6}),n.paint(3055722,{rough:.7});for(let i=0;i<6;i++){let s=i/6*Math.PI*2;n.tube([[.03,t,.006],[.03+Math.cos(s)*.04,t+.014,.006+Math.sin(s)*.04],[.03+Math.cos(s)*.075,t-.028,.006+Math.sin(s)*.075]],.005,{seg:3,taper:.2})}}},surfaceGLSL:`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.25, -0.15, day);
      float n = fbm5(p * 9.0);
      float hh = h + (n - 0.5) * 0.11;
      if (hh < 0.0 && mask < 0.6) {
        float d = clamp(-hh / 0.5, 0.0, 1.0);
        vec3 lagoon = vec3(0.06, 0.62, 0.55), reef = vec3(0.02, 0.32, 0.46), deep = vec3(0.004, 0.05, 0.16);
        albedo = mix(lagoon, reef, smoothstep(0.0, 0.2, d));
        albedo = mix(albedo, deep, smoothstep(0.2, 0.75, d));
        // Coral reefs show through the shallows.
        albedo = mix(albedo, vec3(0.5, 0.35, 0.34), smoothstep(0.5, 0.64, n3(p * 44.0)) * (1.0 - smoothstep(0.0, 0.14, d)) * 0.6);
        rough = 0.07;
        vec3 q = p * 30.0;
        bump += bumpOf(q + vec3(uTime * 0.06, 0.0, uTime * 0.05), 1.0, 0.11);
        bump += bumpOf(q * 3.3 - vec3(0.0, uTime * 0.1, uTime * 0.07), 1.0, 0.06);
        float foam = smoothstep(-0.018, -0.003, hh) * (0.5 + 0.5 * sin(uTime * 1.1 + n * 34.0));
        albedo = mix(albedo, vec3(0.62), foam * 0.42);
        // Plankton lights up the night sea.
        emissive += vec3(0.05, 0.7, 0.62) * pow(n3(p * 62.0 + uTime * 0.05), 8.0) * night * 1.5;
      } else {
        vec3 sand = mix(vec3(0.68, 0.62, 0.48), vec3(0.8, 0.74, 0.6), n3(p * 92.0));
        vec3 green = mix(vec3(0.1, 0.3, 0.13), vec3(0.2, 0.42, 0.15), n);
        albedo = mix(sand, green, smoothstep(0.03, 0.09, hh));
        rough = 0.9;
        bump += bumpOf(p, 80.0, 0.05);
        vec3 terrace = mix(vec3(0.62, 0.58, 0.48), vec3(0.72, 0.68, 0.58), n3(p * 140.0));
        albedo = mix(albedo, terrace, smoothstep(0.35, 0.9, mask));
      }
    }`,atmosphere:{thickness:1.22,rayleigh:[.6,2.4,4.6],mie:[.5,.55,.55],intensity:8.5,haze:8186111,fog:{density:.012,day:11592942,dusk:15770760,night:397344}},clouds:{cover:.54,scale:5.2,opacity:.92,color:16777215,shadow:6326944,dusk:16754816},transit:{road:{en:"Sea-lane",de:"Seeweg"},air:{en:"Manta craft",de:"Mantagleiter"}},map:{title:{en:"Sea chart",de:"Seekarte"},paper:"#0d2a3f",edge:"#3d7a9c",ink:"#eaf6ff",soft:"#8fbcd4",sea:["#0a2f4a","#15557f"],land:["#e8dcb4","#cdb98a"],contour:"rgba(170,220,255,0.18)",grid:"rgba(170,220,255,0.1)",road:"#f5e7b8",casing:"#0a2f4a",air:"#7ff0e0",traffic:"#ffffff",accent:"#7ff0e0",lines:"sealane",glyph:"pearl",font:"serif"},layout:"rings",block:.46,street:{color:12892316,rough:.8,width:.03},lot:[13945e3,13156e3,14472376],road:{width:.13,laneOffset:.2,meander:.65,lampEvery:.6,lampChance:.9,pillarEvery:2,pillar(n,{overWater:e}){e&&(n.paint(15261908,{rough:.4}),n.cyl(.018,.024,.13,6,{y:-.12,caps:!1}))},glsl:`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Pontoon causeway of pale, sea-worn nacre.
        float plank = step(0.1, fract(s * 9.0));
        albedo = mix(vec3(0.2, 0.2, 0.2), mix(vec3(0.62, 0.6, 0.54), vec3(0.76, 0.76, 0.72), n3(vRP * 500.0)), plank);
        rough = 0.32;
        float edge = smoothstep(0.84, 0.92, abs(x));
        emissive += vec3(0.1, 0.9, 0.78) * edge * (0.25 + night * 1.2) * (0.6 + 0.4 * sin(s * 3.0 - uTime * 1.5));
      }`},plaza(n,{r:e}){n.paint(15261900,{rough:.6}),n.disc(e,{seg:48}),n.paint(4901056,{rough:.1,metal:.3}),n.disc(e*.82,{y:.002,seg:48,inner:e*.72}),n.paint(jn,{glow:-2}),n.disc(e*.99,{y:.0025,seg:48,inner:e*.96})},landmark:Ab,section(n,{h:e,w:t,rng:i}){let s=i.pick(fu);n.paint(s,{rough:.15,metal:.4,win:Ae.SPOTS,cw:.055,ch:.05}),n.dome(t*.78,{sy:e/(t*.78),seg:22,rings:8}),n.paint(jn,{rough:.15,glow:.8}),n.save().move(0,e*.98,0).sphere(.024,{seg:8,rings:5}).restore()},filler(n,{s:e,rng:t,tier:i}){let s=t.pick(fu),r=t.next();if(r<.5){let a=e*t.range(.55,.85),o=t.range(.8,1.2)*(1+i*1.3);n.paint(s,{rough:.18,metal:.35,win:Ae.SPOTS,cw:.05,ch:.05}),n.dome(a,{sy:o,seg:16,rings:6}),t.chance(.45)&&n.save().move(a*.82,0,0).dome(a*.46,{sy:o,seg:12,rings:4}).restore()}else if(r<.8){let a=e*t.range(1.8,3.4)*(1+i*1.3);n.paint(dt(s,13154520,.3),{rough:.16,metal:.4,win:Ae.SPOTS,cw:.05,ch:.055}),n.lathe([[e*.42,0],[e*.46,a*.25],[e*.34,a*.55],[e*.2,a*.86],[0,a]],12)}else mu(n,t,e*1.5)},roadside(n,{rng:e}){n.paint(15261908,{rough:.4}),n.cyl(.011,.007,.06,6,{caps:!1}),n.paint(e.chance(.25)?16761e3:jn,{glow:4}),n.save().move(0,.06,0).sphere(.012,{seg:7,rings:4}).restore()},vehicles:[{weight:2,speed:.42,y:.012,build(n){n.paint(3824234,{rough:.3,metal:.4}),n.save().scale(1,.3,1).sphere(.03,{seg:8,rings:4,y:-.03,sx:1.2}).restore(),n.prism([[.06,-.02],[.012,.045],[-.012,.045],[-.06,-.02],[0,-.012]],.004),n.paint(jn,{glow:4}),n.save().move(0,.006,-.03).box(.03,.003,.006).restore()}},{weight:1,speed:.28,y:.008,build(n){n.paint(15261908,{rough:.35,metal:.2}),n.box(.05,.016,.11,{top:.8}),n.paint(9234656,{rough:.05,metal:.6}),n.save().move(0,.016,-.01).dome(.018,{seg:10,rings:4}).restore()}}],flyer:{speed:.82,shadow:!1,build(n){n.paint(2771032,{rough:.35,metal:.35}),n.prism([[.15,-.05],[.03,.11],[-.03,.11],[-.15,-.05],[-.015,-.03],[0,-.13],[.015,-.03]],.008),n.paint(jn,{glow:4.5}),n.save().move(.1,.005,-.02).sphere(.005,{seg:5,rings:3}).restore(),n.save().move(-.1,.005,-.02).sphere(.005,{seg:5,rings:3}).restore()}},walker:{speed:.08,lift:.012,bob:.006,bobRate:3.4,build(n){n.paint(14221304,{rough:.05,metal:.25,glow:.65}),n.sphere(.01,{seg:8,rings:5}),n.paint(jn,{glow:4}),n.save().move(0,.008,0).sphere(.0032,{seg:5,rings:3}).restore()}},ship(n){n.paint(15261908,{rough:.25,metal:.4}),n.save().scale(1,.32,1.6).sphere(.55,{y:-.55,seg:14,rings:7}).restore(),n.prism([[1.5,-.4],[.3,.7],[-.3,.7],[-1.5,-.4],[0,-.1]],.05),n.paint(jn,{glow:4.5}),n.save().move(0,.03,-.82).box(.4,.07,.04).restore()}};var xi=13212226,kr=12085566,bc=5217418,Es=3947064,Rb=15262940,gu=[8014390,7093806,8869184];function $a(n,e,t,i,s,r,a){n.paint(s,{rough:.3,metal:1}),n.spinAbout(0,0,0,a[0],a[1],a[2],r),n.save(),a[2]&&n.rotX(Math.PI/2),n.cyl(e*.82,e*.82,i,Math.max(10,t),{y:-i/2});for(let o=0;o<t;o++){let l=o/t*Math.PI*2;n.save().rotY(l).move(0,-i/2,e*.92).box(e*.2,i,e*.2).restore()}n.paint(Es,{rough:.4,metal:.9}),n.cyl(e*.22,e*.22,i*1.3,8,{y:-i*1.3/2}),n.restore()}function Cb(n,{h:e,w:t,rng:i,spin:s,capital:r}){let a=i.pick(gu),o=t*1.25;n.paint(4999234,{rough:.85}),n.box(o*1.8,.08,o*1.8),n.paint(a,{rough:.84,win:Ae.GRID,cw:.075,ch:.11}),n.box(o*1.25,e*.62,o*1.25,{y:.08,top:.84}),n.paint(xi,{rough:.3,metal:1});for(let p=1;p<=3;p++)n.box(o*(1.28-p*.05),.016,o*(1.28-p*.05),{y:.08+e*.155*p});let l=.08+e*.62,c=o*1.08;n.paint(kr,{rough:.36,metal:.9}),n.box(c,c,c,{y:l});let h=c*.4;for(let p=0;p<4;p++)n.save().rotY(p/4*Math.PI*2).move(0,l+c/2,c/2+.002).rotX(Math.PI/2),n.paint(xi,{rough:.3,metal:1}),n.ring(h,.008,{seg:28,tseg:4}),n.paint(16773320,{rough:.6,glow:-.6}),n.disc(h,{seg:28}),n.restore(),s.save().rotY(p/4*Math.PI*2).move(0,l+c/2,c/2+.008),s.spinAbout(0,0,0,0,0,1,-.105),s.paint(1710618,{rough:.5}),s.box(h*.09,h*.86,.002),s.spinAbout(0,0,0,0,0,1,-.0087),s.box(h*.14,h*.56,.003),s.restore();n.paint(bc,{rough:.55,metal:.55}),n.ngon(4,c*.72,e*.26,{y:l+c,top:.04,rot:Math.PI/4}),n.paint(xi,{rough:.28,metal:1}),n.save().move(0,l+c+e*.26,0).sphere(.024,{seg:8,rings:5}).restore(),s.save().move(o*.84,e*.34,0),$a(s,o*.46,12,.03,xi,r?.7:.5,[0,0,1]),s.restore(),s.save().move(o*.84,e*.34+o*.74,0),$a(s,o*.3,8,.03,kr,r?-1.05:-.75,[0,0,1]),s.restore()}function Pb(n,{h:e,w:t,rng:i,spin:s}){n.paint(i.pick(gu),{rough:.86,win:Ae.GRID,cw:.055,ch:.075}),n.box(t*1.2,e*.7,t,{}),n.paint(bc,{rough:.55,metal:.5}),n.save().rotY(Math.PI/2).gable(t,e*.2,t*1.2,{y:e*.7}).restore(),n.paint(Es,{rough:.5,metal:.8}),n.save().move(t*.3,e*.7,0).cyl(.02,.016,e*.6,7,{caps:!1}).restore(),s.save().move(0,e*.42,t*.53),$a(s,t*.24,8,.016,xi,.9,[0,0,1]),s.restore()}var Vf={id:"kronos",name:{en:"Kronos",de:"Kronos"},people:{en:"The Clockmakers",de:"Die Uhrwerker"},blurb:{en:"A copper world wound up like a watch. Brass towers with turning gears, steam trams on trestles, zeppelins moored to every spire.",de:"Eine Kupferwelt, aufgezogen wie eine Taschenuhr. Messingt\xFCrme mit drehenden Zahnr\xE4dern, Dampftrams auf Viadukten, Zeppeline an jeder Turmspitze."},bridge:{en:"brass rails & zeppelin lines",de:"Messingschienen & Zeppelinlinien"},dayLength:200,tilt:.18,palette:{accent:16761438,window:16765566,route:15251552,scaffold:9202242},env:{zenith:8022608,horizon:15255696,ground:4863268},terrain:{amp:.75,power:1.1,height(n,e,t,i){let s=n.fbm(e*1.5+3,t*1.5,i*1.5,5,2,.5);return Math.round((s*2+.1)*7)/7*.8+s*.45}},scatterDensity:.3,scatterMinH:.02,scatter(n,{rng:e,spin:t}){let i=e.next();if(i<.34){let s=e.range(.1,.26);t.save().move(0,s*.25,0).rotY(e.range(0,3)),$a(t,s,10,.04,e.chance(.5)?xi:kr,e.range(-.5,.5),[0,0,1]),t.restore()}else if(i<.6)n.paint(Es,{rough:.5,metal:.85}),n.cyl(.02,.014,e.range(.12,.26),7,{caps:!1});else if(i<.86){let s=e.range(.1,.18);n.paint(6044198,{rough:.7,metal:.4}),n.cyl(.009,.006,s,5,{caps:!1,smooth:!1}),n.paint(e.chance(.5)?bc:kr,{rough:.5,metal:.8}),n.sphere(s*.42,{y:s*.76,seg:5,rings:3})}else n.paint(4999234,{rough:.95}),n.sphere(e.range(.03,.08),{seg:5,rings:3,sy:.66})},surfaceGLSL:`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float n = fbm5(p * 7.0);
      float fine = n3(p * 70.0);
      float hh = h + (n - 0.5) * 0.08;
      vec3 copper = mix(vec3(0.34, 0.15, 0.07), vec3(0.54, 0.28, 0.13), fine);
      vec3 verd = mix(vec3(0.1, 0.32, 0.26), vec3(0.2, 0.46, 0.38), fine);
      vec3 brass = vec3(0.5, 0.37, 0.14);
      float tarnish = smoothstep(0.44, 0.58, fbm3(p * 5.0 + 3.0));
      albedo = mix(copper, verd, tarnish * smoothstep(0.7, 0.15, hh));
      albedo = mix(albedo, brass, smoothstep(0.62, 1.0, hh));
      rough = mix(0.5, 0.75, tarnish);
      metal = mix(0.75, 0.2, tarnish);
      // Riveted plates cover the whole world.
      vec3 q = p * 18.0;
      vec3 g = abs(fract(q) - 0.5);
      float seam = smoothstep(0.03, 0.0, 0.5 - max(g.x, max(g.y, g.z)));
      albedo *= 1.0 - seam * 0.55;
      vec3 r = fract(q * 3.0) - 0.5;
      float rivet = smoothstep(0.12, 0.08, length(r)) * smoothstep(40.0, 8.0, dist);
      albedo += vec3(0.1, 0.08, 0.04) * rivet;
      bump += bumpOf(p, 66.0, 0.06);
      if (hh < 0.0 && mask < 0.6) {
        // A sea of oil and verdigris, turning slowly.
        liquid(p, hh, vec3(0.012, 0.05, 0.05), vec3(0.06, 0.3, 0.25), 18.0, albedo, rough, metal, bump);
        metal = 0.4;
      }
      vec3 yard = mix(vec3(0.24, 0.14, 0.08), vec3(0.32, 0.2, 0.11), n3(p * 130.0));
      albedo = mix(albedo, yard, smoothstep(0.3, 0.9, mask));
      metal = mix(metal, 0.3, smoothstep(0.3, 0.9, mask));
    }`,atmosphere:{thickness:1.2,rayleigh:[2,1.75,1.3],mie:[1.1,.95,.7],g:.75,intensity:6.6,haze:15384708,fog:{density:.017,day:11836016,dusk:12876354,night:1182986}},clouds:{cover:.56,scale:4,opacity:.72,color:15391940,shadow:5786172,dusk:15239242},transit:{road:{en:"Brass rail",de:"Messingbahn"},air:{en:"Zeppelin",de:"Zeppelin"}},map:{title:{en:"Brass engraving",de:"Messinggravur"},paper:"#2a1a0f",edge:"#a8763f",ink:"#f2d9a8",soft:"#b08c5a",sea:["#1a100a","#2d1d12"],land:["#6a4526","#a8763f"],contour:"rgba(240,200,130,0.16)",grid:"rgba(240,200,130,0.07)",road:"#f0c060",casing:"#3a2412",air:"#e89a58",traffic:"#fff2d0",accent:"#f0c060",lines:"rail",glyph:"gear",font:"serif"},layout:"grid",block:.48,street:{color:4860956,rough:.5,width:.05},lot:[3943456,4863526,3417628],road:{width:.17,elev:.1,laneOffset:.22,meander:.2,lampEvery:.8,lampChance:.6,pillarEvery:.6,pillar(n,{elev:e}){n.paint(Es,{rough:.5,metal:.85}),n.save().move(.06,0,0).box(.012,e+.012,.012).restore(),n.save().move(-.06,0,0).box(.012,e+.012,.012).restore(),n.box(.13,.008,.012,{y:e*.5})},glsl:`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        // Sleepers and two polished brass rails on each track.
        float tie = step(0.45, fract(s * 13.0));
        albedo = mix(vec3(0.05, 0.035, 0.025), vec3(0.2, 0.13, 0.08), tie);
        rough = 0.75;
        metal = 0.2;
        float d = min(abs(abs(x) - 0.3), abs(abs(x) - 0.62));
        float rail = smoothstep(0.05, 0.02, d);
        albedo = mix(albedo, vec3(0.8, 0.62, 0.28), rail);
        rough = mix(rough, 0.2, rail);
        metal = mix(metal, 1.0, rail);
        float lamp = smoothstep(0.06, 0.0, abs(fract(s * 0.8) - 0.5)) * smoothstep(0.88, 0.96, abs(x));
        emissive += vec3(1.0, 0.75, 0.38) * lamp * night * 2.0;
      }`},plaza(n,{r:e}){n.paint(4864556,{rough:.75}),n.disc(e,{seg:48}),n.paint(xi,{rough:.3,metal:1}),n.disc(e*.98,{y:.003,seg:48,inner:e*.93});for(let t=0;t<12;t++){let i=t/12*Math.PI*2;n.save().rotY(i).move(0,.003,e*.8).box(.016,.002,e*.2).restore()}},landmark:Cb,section:Pb,filler(n,{s:e,rng:t,spin:i,tier:s}){let r=e*t.range(.9,1.9)*(1+s*1.6),a=t.pick(gu);n.paint(a,{rough:.88,win:Ae.GRID,cw:.046,ch:.066}),n.box(e*1.45,r,e*1.35);let o=t.next();n.paint(t.chance(.55)?bc:kr,{rough:.5,metal:.65}),o<.5?n.save().rotY(Math.PI/2).gable(e*1.35,e*.5,e*1.45,{y:r}).restore():o<.75?n.save().move(0,r,0).dome(e*.58,{seg:10,rings:4}).restore():n.ngon(4,e*.92,e*.8,{y:r,top:.08,rot:Math.PI/4}),t.chance(.5)&&(n.paint(Es,{rough:.5,metal:.85}),n.save().move(e*.45,r,e*.3).cyl(.012,.01,e*.9,6,{caps:!1}).restore()),s>.4&&t.chance(.3)&&(i.save().move(0,r*.55,e*.69),$a(i,e*.34,8,.012,xi,t.range(-1.1,1.1),[0,0,1]),i.restore())},roadside(n,{rng:e}){e.chance(.3)||(n.paint(Es,{rough:.5,metal:.85}),n.cyl(.004,.006,.1,5,{caps:!1,smooth:!1}),n.paint(16765566,{glow:-9}),n.save().move(0,.1,0).sphere(.009,{seg:6,rings:4}).restore())},vehicles:[{weight:2,speed:.32,y:.006,build(n){n.paint(8007202,{rough:.4,metal:.4,win:Ae.GRID,cw:.024,ch:.022}),n.box(.05,.036,.13,{y:.008}),n.paint(xi,{rough:.3,metal:1}),n.box(.054,.005,.134,{y:.044}),n.save().move(0,.05,.03).cyl(.006,.008,.02,6).restore(),n.paint(16765566,{glow:-9}),n.save().move(0,.022,.066).sphere(.006,{seg:5,rings:3}).restore()}},{weight:1,speed:.42,y:.006,build(n){n.paint(xi,{rough:.28,metal:1}),n.box(.04,.02,.08,{y:.01,top:.86}),n.paint(Es,{rough:.5,metal:.85}),n.save().move(0,.03,-.022).cyl(.012,.012,.012,8).restore(),n.paint(16765566,{glow:-8}),n.save().move(0,.018,.041).box(.022,.005,.002).restore()}}],flyer:{speed:.48,shadow:!0,build(n){n.paint(14207140,{rough:.6}),n.save().rotX(Math.PI/2),n.lathe([[0,-.15],[.03,-.12],[.044,-.03],[.042,.06],[.024,.13],[0,.17]],12),n.restore(),n.paint(xi,{rough:.3,metal:1}),n.ring(.045,.002,{y:0,seg:12,tseg:3}),n.paint(8007202,{rough:.5}),n.save().move(0,-.054,0).box(.016,.012,.05).restore(),n.paint(14207140,{rough:.6}),n.save().move(0,0,-.12).box(.002,.05,.04).restore(),n.save().move(0,0,-.12).box(.05,.002,.04).restore(),n.paint(16765566,{glow:-6}),n.save().move(0,-.06,.02).box(.01,.002,.004).restore()}},walker:{speed:.08,lift:.009,bob:.004,bobRate:13,build(n){n.paint(kr,{rough:.36,metal:.9}),n.cyl(.006,.0062,.016,6,{}),n.paint(xi,{rough:.3,metal:1}),n.save().move(0,.021,0).sphere(.0046,{seg:6,rings:4}).restore(),n.paint(Rb,{glow:2}),n.save().move(0,.023,.0046).box(.003,.001,6e-4).restore()}},ship(n){n.paint(14207140,{rough:.55}),n.save().rotX(Math.PI/2),n.lathe([[0,-1.3],[.26,-1],[.42,-.2],[.38,.6],[.2,1.2],[0,1.4]],12),n.restore(),n.paint(xi,{rough:.3,metal:1}),n.save().move(0,-.5,0).box(.14,.12,.5).restore(),n.paint(16765566,{glow:4}),n.save().move(0,0,-1.3).sphere(.14,{y:-.14,seg:7,rings:4}).restore()}};var Ir=[5914672,7097400,4994598],_c=[4168284,5549150,3115612,7648346,3842176],vu=[15769800,16037076,15240384,16173216],xu=16765562;function Wf(n,e,t,i,s,r=7){let a=r*3;for(let o=0;o<a;o++){let l=e.range(0,6.28),c=Math.sqrt((o+.5)/a),h=c*t*.95,p=t*(.44-c*.2)*e.range(.85,1.15),u=(1-c*c)*t*.42+e.range(-.05,.05)*t,d=.72+u/(t*.5)*.3;n.paint(dt(e.pick(s),0,Math.max(0,1-d)),{rough:.88}),n.save().move(Math.cos(l)*h,i+u,Math.sin(l)*h),n.sphere(p,{y:-p,seg:8,rings:5,sy:.74}),n.restore()}}function kb(n,{h:e,w:t,rng:i,spin:s,capital:r}){let a=i.pick(Ir),o=t*.72;n.paint(a,{rough:.9,win:Ae.SPOTS,cw:.085,ch:.11}),n.lathe([[o*1.9,0],[o*1.25,e*.05],[o,e*.16],[o*.82,e*.42],[o*.74,e*.68],[o*.86,e*.76]],14),n.paint(a,{rough:.95});for(let l=0;l<7;l++){let c=l/7*Math.PI*2+i.range(-.2,.2),h=Math.cos(c),p=Math.sin(c),u=o;n.tube([[h*u*1,e*.06,p*u*1],[h*u*1.9,.02,p*u*1.9],[h*u*2.7,-.01,p*u*2.7]],u*.13,{seg:5,taper:.3})}for(let l=0;l<6;l++){let c=l/6*Math.PI*2,h=Math.cos(c),p=Math.sin(c),u=o;n.tube([[h*u*.7,e*.7,p*u*.7],[h*u*1.8,e*.84,p*u*1.8],[h*u*2.7,e*.86,p*u*2.7]],u*.16,{seg:5,taper:.35})}for(let l=0;l<(r?4:3);l++){let c=e*(.26+l*.15),h=o*(1.34-l*.05);n.paint(9071176,{rough:.8}),n.cyl(h,h,.012,18,{y:c}),n.paint(xu,{glow:-5});for(let p=0;p<8;p++){let u=p/8*Math.PI*2;n.save().move(Math.cos(u)*h,c-.016,Math.sin(u)*h).sphere(.009,{seg:5,rings:3}).restore()}}Wf(n,i,t*1.9,e*.88,r?vu:_c,r?10:8);for(let l=0;l<10;l++){let c=l/10*Math.PI*2,h=t*i.range(1.8,2.5);s.save().move(0,e*i.range(.52,.72),0),s.spinAbout(0,0,0,0,1,0,i.range(.15,.5)*(l%2?1:-1)),s.paint(15269768,{glow:9}),s.save().move(Math.cos(c)*h,0,Math.sin(c)*h).sphere(.008,{seg:5,rings:3}).restore(),s.restore()}}function Gf(n,{h:e,w:t,rng:i}){let s=i.pick(Ir);n.paint(s,{rough:.92,win:Ae.SPOTS,cw:.07,ch:.09}),n.lathe([[t*.72,0],[t*.48,e*.12],[t*.38,e*.55],[t*.42,e*.7]],10),Wf(n,i,t*1.1,e*.88,i.chance(.2)?vu:_c,5),n.paint(9071176,{rough:.8}),n.cyl(t*.58,t*.58,.01,12,{y:e*.38})}function Ib(n,e,t,i){let s=e*t.range(.8,1.2)*(1+i*.7);n.paint(t.pick(Ir),{rough:.9,win:Ae.SPOTS,cw:.045,ch:.05}),n.cyl(e*.68,e*.6,s,10),n.paint(t.pick([9075268,10259024,5012042]),{rough:.95}),n.cone(e*.92,e*.9,10,{y:s})}var $f={id:"sylva",name:{en:"Sylva",de:"Sylva"},people:{en:"The Treefolk",de:"Das Baumvolk"},blurb:{en:"They never cut a tree on this soft green world: they live inside them, in lantern-lit halls linked by vine bridges high above the moss.",de:"Auf dieser sanften gr\xFCnen Welt wird nie ein Baum gef\xE4llt: Man wohnt in ihnen, in laternenhellen Hallen, verbunden durch Rankenbr\xFCcken hoch \xFCber dem Moos."},bridge:{en:"vine bridges & seed gliders",de:"Rankenbr\xFCcken & Samensegler"},dayLength:220,tilt:.24,palette:{accent:12120186,window:16764786,route:13168776,scaffold:8019006},env:{zenith:6072520,horizon:15398088,ground:2639916},terrain:{amp:.85,power:1.2,height(n,e,t,i){return n.fbm(e*1.7+6,t*1.7,i*1.7,5,2,.5)*1.7+.26}},scatterDensity:2.2,scatterMinH:.012,scatter(n,{rng:e,h:t,x:i,y:s,z:r,noise:a}){if(a.simplex(i*8+1,s*8,r*8)+.3<0&&!e.chance(.08))return;let l=e.range(.12,.28)*(t>.5?.8:1);if(e.chance(.08)){n.paint(e.pick(Ir),{rough:.95}),n.cyl(l*.08,l*.05,l*.55,3,{smooth:!1,caps:!1}),n.paint(e.pick(vu),{rough:.85}),n.sphere(l*.42,{y:l*.32,seg:6,rings:3,sy:1});return}n.paint(e.pick(Ir),{rough:.95}),n.cyl(l*.075,l*.05,l*.6,3,{smooth:!1,caps:!1}),n.paint(e.pick(_c),{rough:.9}),n.sphere(l*.34,{y:l*.4,seg:6,rings:3,sy:1.25}),e.chance(.4)&&(n.paint(dt(e.pick(_c),16777215,.12),{rough:.9}),n.save().move(l*.16,l*.32,l*.08).sphere(l*.2,{seg:5,rings:3}).restore())},surfaceGLSL:`
    void surface(vec3 p, float h, float mask, float dist, float day, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive, inout vec3 bump) {
      float night = smoothstep(0.3, -0.15, day);
      float n = fbm5(p * 6.0);
      float fine = n3(p * 62.0);
      float hh = h + (n - 0.5) * 0.14;
      if (hh < 0.0 && mask < 0.6) {
        liquid(p, hh, vec3(0.006, 0.06, 0.07), vec3(0.08, 0.36, 0.28), 24.0, albedo, rough, metal, bump);
      } else {
        vec3 moss = mix(vec3(0.07, 0.24, 0.09), vec3(0.2, 0.42, 0.12), n);
        vec3 fern = vec3(0.05, 0.2, 0.15);
        vec3 meadow = vec3(0.4, 0.5, 0.15);
        float m = fbm3(p * 4.0 + 5.0);
        albedo = mix(moss, fern, smoothstep(0.46, 0.58, m));
        albedo = mix(albedo, meadow, smoothstep(0.54, 0.66, fbm3(p * 7.0 + 1.0)) * 0.7);
        albedo = mix(vec3(0.42, 0.38, 0.22), albedo, smoothstep(0.004, 0.04, hh));
        albedo = mix(albedo, vec3(0.26, 0.26, 0.2), smoothstep(0.75, 1.1, hh));
        // Wildflower meadows, and glowworms after dark.
        float blossom = smoothstep(0.6, 0.68, n3(p * 88.0)) * smoothstep(0.5, 0.6, n3(p * 11.0));
        albedo = mix(albedo, vec3(0.86, 0.5, 0.7), blossom * 0.55 * smoothstep(40.0, 8.0, dist));
        emissive += vec3(0.6, 1.0, 0.3) * pow(n3(p * 210.0), 12.0) * night * 3.5 * smoothstep(40.0, 6.0, dist);
        albedo *= 0.82 + fine * 0.36;
        rough = 0.9;
        bump += bumpOf(p, 46.0, 0.08) * smoothstep(90.0, 10.0, dist);
        bump += bumpOf(p, 280.0, 0.12) * smoothstep(14.0, 2.0, dist);
        vec3 clearing = mix(vec3(0.13, 0.28, 0.08), vec3(0.2, 0.34, 0.1), n3(p * 110.0));
        albedo = mix(albedo, clearing, smoothstep(0.3, 0.9, mask));
      }
    }`,atmosphere:{thickness:1.23,rayleigh:[1.1,2.4,3.1],mie:[.6,.65,.5],intensity:8.2,haze:12382388,fog:{density:.016,day:12902584,dusk:15773816,night:529424}},clouds:{cover:.56,scale:4.2,opacity:.88,color:16777200,shadow:6982276,dusk:16756864},transit:{road:{en:"Vine bridge",de:"Rankenbr\xFCcke"},air:{en:"Seed glider",de:"Samengleiter"}},map:{title:{en:"Leaf map",de:"Blattkarte"},paper:"#dfe8c8",edge:"#7c9a60",ink:"#223a1e",soft:"#5a7a4c",sea:["#8fb7a6","#b6d4bf"],land:["#c9daa2","#7fa561"],contour:"rgba(50,90,40,0.22)",grid:"rgba(50,90,40,0.1)",road:"#3f6e2c",casing:"#dfe8c8",air:"#a0722f",traffic:"#1d2f18",accent:"#3f6e2c",lines:"vine",glyph:"leaf",font:"serif"},layout:"organic",block:.56,lot:null,road:{width:.1,elev:.3,laneOffset:0,meander:.5,lampEvery:.48,lampChance:.9,pillarEvery:1.1,pillar(n,{elev:e}){n.paint(4994598,{rough:.95}),n.cyl(.018,.009,e+.02,5,{caps:!1,smooth:!1}),n.paint(4168284,{rough:.9}),n.save().move(0,e+.05,0).sphere(.042,{y:-.042,seg:6,rings:3,sy:.72}).restore()},glsl:`
      void roadSurface(float x, float s, float night, inout vec3 albedo, inout float rough, inout float metal, inout vec3 emissive) {
        float plank = step(0.14, fract(s * 15.0));
        float vary = n3(vec3(floor(s * 15.0) * 3.0, 0.0, 1.0));
        albedo = mix(vec3(0.02, 0.015, 0.01), mix(vec3(0.3, 0.2, 0.11), vec3(0.42, 0.3, 0.17), vary), plank);
        rough = 0.9;
        float rope = smoothstep(0.82, 0.95, abs(x));
        albedo = mix(albedo, vec3(0.2, 0.34, 0.12), rope);
        float lantern = smoothstep(0.1, 0.0, abs(fract(s * 1.1) - 0.5)) * rope;
        emissive += vec3(1.0, 0.76, 0.38) * lantern * night * 2.8;
      }`},plaza(n,{r:e}){n.paint(5007928,{rough:.9}),n.disc(e,{seg:48}),n.paint(9075284,{rough:.9}),n.disc(e*.98,{y:.003,seg:48,inner:e*.86})},landmark:kb,section:Gf,filler(n,{s:e,rng:t,tier:i}){let s=t.next();if(s<.34)Ib(n,e,t,i);else if(s<.75)Gf(n,{h:e*t.range(2.4,4.4)*(1+i*1),w:e*.78,rng:t});else{n.paint(t.pick(Ir),{rough:.9});for(let[r,a]of[[1,0],[-.5,.86],[-.5,-.86]])n.save().move(r*e*.5,0,a*e*.5).cyl(.007,.007,e*1.1,4,{caps:!1,smooth:!1}).restore();n.paint(9071176,{rough:.85,win:Ae.SPOTS,cw:.04,ch:.04}),n.save().move(0,e*.95,0).sphere(e*.52,{y:-e*.52,seg:9,rings:6}).restore(),n.paint(5012042,{rough:.95}),n.cone(e*.62,e*.5,9,{y:e*1.32})}},roadside(n,{elev:e}){n.paint(4994598,{rough:.95}),n.cyl(.005,.004,e+.09,3,{caps:!1,smooth:!1}),n.paint(xu,{glow:-7}),n.save().move(0,e+.075,0).sphere(.01,{seg:6,rings:3}).restore()},vehicles:[{weight:1,speed:.2,y:.002,build(n){n.paint(2771514,{rough:.2,metal:.65}),n.sphere(.02,{y:-.004,seg:8,rings:5,sx:.85,sy:.75}),n.paint(15269768,{glow:6}),n.save().move(0,.008,-.02).sphere(.007,{seg:5,rings:3}).restore()}},{weight:1,speed:.15,y:.002,build(n){n.paint(7097400,{rough:.9}),n.cyl(.01,.012,.03,6,{}),n.paint(10259024,{rough:.9}),n.save().move(0,.03,-.008).sphere(.012,{y:-.012,seg:6,rings:4}).restore()}}],flyer:{speed:.55,shadow:!1,build(n){n.paint(9071176,{rough:.85}),n.sphere(.014,{y:-.014,seg:6,rings:4}),n.paint(11851888,{rough:.7}),n.prism([[.15,-.03],[.02,.06],[-.02,.06],[-.15,-.03],[0,-.005]],.002),n.paint(15269768,{glow:6}),n.save().move(0,-.012,0).sphere(.006,{seg:5,rings:3}).restore()}},walker:{speed:.05,lift:.005,bob:.003,bobRate:8,colors:[8035404,11041868,6064746,13148252],build(n){n.paint(16777215,{rough:.9}),n.cone(.0075,.022,6,{smooth:!1}),n.paint(9202252,{rough:.8}),n.save().move(0,.019,0).sphere(.0045,{seg:5,rings:3}).restore(),n.paint(xu,{glow:-5}),n.save().move(.0075,.011,0).sphere(.002,{seg:4,rings:2}).restore()}},ship(n){n.paint(7097400,{rough:.7}),n.save().rotX(Math.PI/2),n.lathe([[0,-1.1],[.32,-.7],[.42,-.1],[.28,.7],[0,1.1]],10),n.restore(),n.paint(11851888,{rough:.75}),n.prism([[1.6,-.5],[.1,.7],[-.1,.7],[-1.6,-.5],[0,-.1]],.02),n.paint(15269768,{glow:4.5}),n.save().move(0,0,-1.1).sphere(.16,{y:-.16,seg:7,rings:4}).restore()}};var kn={terra:Df,vektor:Nf,ignis:Ff,prisma:Uf,myzel:Bf,auris:zf,thalassa:Hf,kronos:Vf,sylva:$f};var wc=(n,e,t)=>Math.max(e,Math.min(t,n)),Qn=(n,e,t)=>{let i=wc((t-n)/(e-n),0,1);return i*i*(3-2*i)},Qe=new k,vi=new k,Li=new k,Lr=new k,qf=new k,yu=new Oe,Xf={low:{detail:.45,terrain:96,terrainPerR:5,shadow:0,samples:0,bloom:!0,maxDpr:1,cityRange:14,vertices:25e5},medium:{detail:.75,terrain:150,terrainPerR:7,shadow:2048,samples:2,bloom:!0,maxDpr:1.5,cityRange:26,vertices:5e6},high:{detail:1,terrain:200,terrainPerR:9.5,shadow:3072,samples:4,bloom:!0,maxDpr:2,cityRange:50,vertices:8e6}},Sc=class extends EventTarget{constructor(e,t,{quality:i="high"}={}){super(),this.canvas=e,this.graph=t,this.qualityName=Xf[i]?i:"high",this.quality=Xf[this.qualityName],this.planets=[],this.bodies=[],this.routes=[],this.keys=new Set,this.time=0,this.timeScale=1,this.sunWorld=new k(0,0,0),this.sunRadius=21,this.hover=null,this.selected=null,this.res=new Me(1,1),this.pointer=new Me(-9,-9),this.pointerPx={x:0,y:0},this.raycaster=new xa,this.viewOffset=0,this.viewOffsetT=0,this.dayGoal=null,this.frameInfo={cityRange:this.quality.cityRange,pixelScale:1},this.fps=60,this.dprScale=1}async init(e=()=>{}){let{graph:t,quality:i}=this,s=new ec({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1});s.setPixelRatio(Math.min(window.devicePixelRatio||1,i.maxDpr)),s.setSize(window.innerWidth,window.innerHeight),s.toneMapping=xs,s.toneMappingExposure=.95,s.shadowMap.enabled=i.shadow>0,s.shadowMap.type=ms,this.renderer=s;let r=new xn;this.scene=r;let a=new Gt(40,window.innerWidth/window.innerHeight,1,16e3);this.camera=a,this.rig=new pc(a,this),e(.02,"noise"),await As(),this.noiseTex=Jp(),e(.05,"sky"),await As();let o=An(t.meta.title);if(r.background=jp(s,this.noiseTex,o),r.backgroundIntensity=1,this.stars=Qp(5200,o+1),r.add(this.stars),this.sun=ef(this.sunRadius,this.noiseTex),r.add(this.sun),this.sunBody={isSun:!0,R:this.sunRadius,G:this.sunRadius,node:this.sun,spin:this.sun,minD:this.sunRadius*1.5,maxD:this.sunRadius*6,maxTilt:.35},this.pointLight=new fa(16773596,3.4,0,0),r.add(this.pointLight),this.dirLight=new ma(16773596,0),r.add(this.dirLight,this.dirLight.target),i.shadow){let d=this.dirLight.shadow;d.mapSize.set(i.shadow,i.shadow),d.bias=-4e-4,d.normalBias=.012,d.radius=2.2,d.camera.near=1,d.camera.far=220,this.dirLight.castShadow=!0}this.hemi=new ua(10334950,2499374,.42),r.add(this.hemi),this.createFocus();let l=t.clusters,c=l.length*4,h=0,p=d=>e(.08+h++/Math.max(c,1)*.86,d);l.forEach((d,m)=>{let x=kn[d.civ]||kn.terra,f=new uc({cluster:d,civ:x,graph:t,noiseTex:this.noiseTex,renderer:s,index:m,quality:i,focus:this.focus});f.vertexCap=Math.round(i.vertices/l.length/2),this.planets.push(f),r.add(f.node)});for(let d of this.planets)p({step:"plan",planet:d}),await As(),d.plan(),p({step:"terrain",planet:d}),await As(),d.buildTerrain(),p({step:"city",planet:d}),await As(),d.buildCivilisation(),p({step:"sky",planet:d}),await As(),d.buildSky();this.layoutSystem(),this.buildRoutes(),this.buildOutskirts(),e(.97,"compile"),await As(),this.setupPipeline(),this.bindInput(),this.resize(),window.addEventListener("resize",()=>this.resize());let u=this.planets.map(d=>[d.terrainHi.visible,d.detailMesh.visible,d.traffic.group.visible]);this.planets.forEach(d=>{d.terrainHi.visible=!0,d.detailMesh.visible=!0,d.traffic.group.visible=!0});try{s.compile(r,a)}catch{}this.planets.forEach((d,m)=>{[d.terrainHi.visible,d.detailMesh.visible,d.traffic.group.visible]=u[m]}),e(1,"done"),this.rig.sys.dist=this.rig.sys.distT*1.55,this.rig.sys.el=this.rig.sys.elT+.26,this.lastTime=performance.now(),this.running=!0,this.fade=0,s.setAnimationLoop(()=>this.frame())}layoutSystem(){let e=new _t(An(this.graph.meta.title)),t=[...this.planets].sort((s,r)=>An(s.cluster.name)-An(r.cluster.name)),i=this.sunRadius*2.4;t.forEach((s,r)=>{let a=s.R*(s.civ.rings?s.civ.rings.outer||2.35:1.32);i+=a+7+r*1.5;let o=e.range(-.05,.05),l=e.range(0,6.28);s.setOrbit({radius:i,angle:e.range(0,6.283),speed:.42/Math.pow(i,1.2)*1.6,inclination:o,ascending:l}),s.orbitLine=Af(i,o,l,s.civ.palette.accent),this.scene.add(s.orbitLine),i+=a}),this.outerRadius=i,this.rig.setSystemFit(i)}buildRoutes(){let{graph:e,planets:t}=this,i=new Map;for(let o of e.edges){let l=e.pages[o.s].cluster,c=e.pages[o.t].cluster;if(l<0||c<0||l===c)continue;let h=`${l}>${c}`;i.set(h,(i.get(h)||0)+o.w)}let s=new Map,r=new bt;this.scene.add(r);let a=new _t(99);this.spaceUniforms={uTime:{value:0},uSunLocal:{value:new k(0,1,0)},uGrow:{value:1},uGround:{value:1},uHover:{value:-9},uSelected:{value:-9},uAccent:{value:new se(16777215)},uWinColor:{value:new se(16777215)},uFogD:{value:0},uFogC:{value:new se(0)},uNoise:{value:this.noiseTex},uFocusTex:this.focus.texture,uFocusAmt:this.focus.amount,uSecTex:this.focus.sections,uSecPage:this.focus.secPage,uSecIdx:this.focus.secIdx};for(let[o,l]of i){let[c,h]=o.split(">").map(Number),p=t[c],u=t[h];if(!p||!u)continue;let d=new fc({from:p,to:u,count:l,color:p.civ.palette.route||p.civ.palette.accent,reverse:c>h,group:r,rng:a});this.routes.push(d),s.set(p,(s.get(p)||0)+d.ships.length)}this.shipPools=new Map;for(let[o,l]of s){let c=If(o.civ,l,this.spaceUniforms);this.scene.add(c),this.shipPools.set(o,c)}}createFocus(){let e=Math.max(1,this.graph.pages.length),t=new Uint8Array(e*4),i=new Vn(t,e,1,ri);i.magFilter=i.minFilter=wt,i.needsUpdate=!0,this.focus={data:t,tex:i,texture:{value:i},amount:{value:0},id:null,journey:new Set};let s=new Uint8Array(e*4),r=new Vn(s,e,1,ri);r.magFilter=r.minFilter=wt,r.needsUpdate=!0,Object.assign(this.focus,{secData:s,secTex:r,sections:{value:r},secPage:{value:-9},secIdx:{value:-9}}),this.neighbours=new Map;let a=(o,l)=>{this.neighbours.has(o)||this.neighbours.set(o,new Set),this.neighbours.get(o).add(l)};for(let o of this.graph.edges)a(o.s,o.t),a(o.t,o.s)}sectionBuilding(e,t){return this.planets[this.graph.pages[e]?.cluster]?.pickables.find(s=>s.kind==="section"&&s.id===e&&s.slug===t)??null}setSectionFocus(e,t){let i=t==null?null:this.sectionBuilding(e,t);this.focus.secPage.value=i?e:-9,this.focus.secIdx.value=i?i.index:-9}setSectionsRead(e,t){let{secData:i,secTex:s}=this.focus;i.fill(0,e*4,e*4+4);for(let r of t){let a=this.sectionBuilding(e,r);a&&(i[e*4+(a.index>>3)]|=1<<(a.index&7))}s.needsUpdate=!0}setKeysLocked(e){this.keysLocked=e,e&&this.keys.clear()}setJourneyStops(e){this.focus.journey=new Set(e||[]),this.writeFocus()}writeFocus(){let e=this.focus;if(e.data.fill(0),e.id!=null){for(let t of this.neighbours.get(e.id)||[])e.data[t*4+1]=255;e.data[e.id*4]=255}for(let t of e.journey)e.data[t*4+2]=255;e.tex.needsUpdate=!0}updateFocus(e){let t=this.focus,i=this.hover&&(this.hover.kind==="page"||this.hover.kind==="section")?this.hover.id:null,s=this.selected??i;s!==t.id&&(t.id=s,this.writeFocus());let r=this.selected!=null||t.journey.size?1:i!=null?.55:0,a=t.amount;a.value+=(r-a.value)*(1-Math.exp(-e*(r>a.value?3.5:7))),a.value<.002&&r===0&&(a.value=0)}buildOutskirts(){let{graph:e}=this,t=this.outerRadius+26,i=Pf({radius:t,width:22,count:this.quality.detail>=1?2200:1100,orphans:e.orphans,graph:e});this.belt=i,this.scene.add(i.group),this.rig.setSystemFit(t);for(let s of i.beacons)s.body={isBeacon:!0,pageId:s.pageId,R:s.size,G:s.size*1.05,node:s.holder,spin:s.holder,minD:s.size*2,maxD:s.size*14,maxTilt:.4};if(e.comet!=null){let s=kf({pageId:e.comet,a:this.outerRadius*.94,b:this.outerRadius*.46,noiseTex:this.noiseTex});this.comet=s,this.scene.add(s.group)}}setupPipeline(){let{renderer:e,scene:t,camera:i,quality:s}=this,r=nf(e,t,i,{samples:s.samples,bloom:s.bloom});this.composer=r.composer,this.bloom=r.bloom,this.bloomBase=r.bloom?.strength??0,this.finish=r.finish}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.res.set(e,t),this.finish.uniforms.uAspect.value=e/t;let i=this.renderer.getPixelRatio();this.frameInfo.pixelScale=t*i/1e3,this.stars.material.uniforms.uPixel.value=i,this.applyViewOffset()}applyViewOffset(){let e=this.res.x,t=this.res.y;Math.abs(this.viewOffset)>.5?this.camera.setViewOffset(e,t,this.viewOffset,0,e,t):this.camera.clearViewOffset()}setSideInset(e){this.viewOffsetT=e/2}bindInput(){let e=this.canvas,t=null,i=0,s=!1,r=new Map,a=0;e.addEventListener("contextmenu",l=>l.preventDefault()),e.addEventListener("pointerdown",l=>{if(r.set(l.pointerId,{x:l.clientX,y:l.clientY}),r.size===2){let[c,h]=[...r.values()];a=Math.hypot(c.x-h.x,c.y-h.y),i=100}t={x:l.clientX,y:l.clientY},i=0,s=l.button===2||l.button===1||l.shiftKey,e.setPointerCapture(l.pointerId),e.classList.add("dragging")}),e.addEventListener("pointermove",l=>{if(this.pointerPx.x=l.clientX,this.pointerPx.y=l.clientY,this.pointer.set(l.clientX/window.innerWidth*2-1,-(l.clientY/window.innerHeight)*2+1),r.has(l.pointerId)&&r.set(l.pointerId,{x:l.clientX,y:l.clientY}),r.size===2){let[p,u]=[...r.values()],d=Math.hypot(p.x-u.x,p.y-u.y);a>0&&this.handleWheel((a-d)*6),a=d;return}if(!t)return;let c=l.clientX-t.x,h=l.clientY-t.y;t.x=l.clientX,t.y=l.clientY,i+=Math.abs(c)+Math.abs(h),s?this.rig.rotateDrag(c,h):this.rig.drag(c,h,window.innerHeight)});let o=l=>{if(r.delete(l.pointerId),!t)return;let c=i<6&&l.button===0;t=null,e.classList.remove("dragging"),c&&this.handleClick()};e.addEventListener("pointerup",o),e.addEventListener("pointercancel",l=>{r.delete(l.pointerId),t=null,e.classList.remove("dragging")}),e.addEventListener("pointerleave",()=>{t||this.pointer.set(-9,-9)}),e.addEventListener("dblclick",()=>{!this.hover&&this.rig.mode==="body"&&this.rig.body.isPlanet&&(this.rig.dT=Math.max(this.rig.body.minD??.35,this.rig.dT*.45))}),e.addEventListener("wheel",l=>{l.preventDefault(),this.handleWheel(l.deltaY*(l.deltaMode===1?32:1))},{passive:!1}),window.addEventListener("keydown",l=>{this.inputLocked||this.keysLocked||/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName||"")||this.keys.add(l.code)}),window.addEventListener("keyup",l=>this.keys.delete(l.code)),window.addEventListener("blur",()=>this.keys.clear())}handleWheel(e){let t=this.rig;if(!t.busy)if(t.mode==="system"){if(e<0){let i=this.hover?.planet?this.hover.planet:null;if(i){this.enterPlanet(i);return}if(t.sys.distT<=t.sysMin*1.02){let s=this.planetNearestView();if(s){this.enterPlanet(s);return}}}t.zoom(e)}else{let i=t.body,s=i.maxD??i.R*7;if(e>0&&t.dT>=s*.985){this.goToSystem();return}t.zoom(e)}}planetNearestView(){let e=null,t=1/0;for(let i of this.planets){if(Qe.copy(i.node.position).project(this.camera),Qe.z>1)continue;let s=Qe.x*Qe.x+Qe.y*Qe.y;s<t&&(t=s,e=i)}return e}pickUnderPointer(){if(Math.abs(this.pointer.x)>1.5)return null;this.raycaster.setFromCamera(this.pointer,this.camera);let e=this.raycaster.ray,t=this.rig;if(t.mode==="body"&&t.body.isPlanet){let o=t.body;yu.copy(o.spin.matrixWorld).invert(),Qe.copy(e.origin).applyMatrix4(yu),vi.copy(e.direction).transformDirection(yu).normalize();let l=o.pick(Qe,vi);if(t.d<7&&!t.ride&&o.traffic.group.visible){let c=o.traffic.pick(Qe,vi,Math.max(.1,t.d*.03));if(c&&(!l||c.t<Li.copy(l.local).sub(Qe).length()))return{kind:"vehicle",item:c.item,planet:o,id:c.item.from,key:c.item.to}}return l?{...l,planet:o}:null}let i=null,s=1/0,r=2*Math.tan(this.camera.fov*Math.PI/360)/window.innerHeight,a=(o,l,c)=>{Qe.copy(o).sub(e.origin);let h=Qe.dot(e.direction);if(h<0)return;let p=Math.max(l,h*r*16);Qe.lengthSq()-h*h<p*p&&h<s&&(s=h,i=c)};if(t.mode==="system"){for(let o of this.planets)a(o.node.position,o.R*1.2,{kind:"planet",planet:o});a(this.sunWorld,this.sunRadius*1.05,{kind:"sun"}),this.comet&&a(this.comet.group.position,5,{kind:"comet",pageId:this.graph.comet});for(let o of this.belt.beacons)o.holder.getWorldPosition(Li),a(Li.clone(),o.size*1.5,{kind:"orphan",pageId:o.pageId,beacon:o})}else a(t.body.node.getWorldPosition(Li).clone(),t.body.R*1.2,{kind:"self"});return i}handleClick(){let e=this.pickUnderPointer();this.dispatchEvent(new CustomEvent("pick",{detail:e}))}enterPlanet(e,{orbit:t=!1,onArrive:i}={}){let s=e.sites[0],r=s.dir.clone();this.arriveInDaylight(e,r),this.rig.flyToBody(e,{dir:r,fwd:this.approachForward(e,r),d:t?e.R*2.6:s.h*2.2+2.6,onArrive:i}),this.dispatchEvent(new CustomEvent("focus",{detail:e}))}arriveInDaylight(e,t){if(this.rig.mode==="body"&&this.rig.body===e)return;let i=e.uniforms.uSunLocal.value,s=t.y*i.y+Math.sqrt(Math.max(0,1-t.y*t.y)*Math.max(0,1-i.y*i.y));this.dayGoal={planet:e,target:Math.min(.55,s*.8),budget:Math.PI*2,dir:t.clone(),speed:2.4,far:!0}}approachForward(e,t){let i=e.uniforms.uSunLocal.value,s=i.clone().addScaledVector(t,-i.dot(t));return s.lengthSq()<1e-4&&s.set(0,1,0).addScaledVector(t,-t.y),s.normalize().applyAxisAngle(t,.8)}goToSystem(){this.rig.flyToSystem({}),this.dispatchEvent(new CustomEvent("focus",{detail:null}))}flyToPage(e,{slug:t=null,onArrive:i}={}){let s=this.graph.pages[e];if(!s)return;if(e===this.graph.star){this.rig.flyToBody(this.sunBody,{dir:new k(.4,.5,.75),d:this.sunRadius*3.6,onArrive:i}),this.dispatchEvent(new CustomEvent("focus",{detail:null}));return}if(e===this.graph.comet&&this.comet){this.rig.flyToBody(this.comet.body,{dir:new k(.6,.5,.6),d:22,onArrive:i}),this.dispatchEvent(new CustomEvent("focus",{detail:null}));return}let r=this.belt?.beacons.find(d=>d.pageId===e);if(r){this.rig.flyToBody(r.body,{dir:new k(.3,.7,.6),d:r.size*4.5,onArrive:i}),this.dispatchEvent(new CustomEvent("focus",{detail:null}));return}let a=this.planets[s.cluster];if(!a)return;let o=a.siteByPage.get(e);if(!o)return;let l=o.dir.clone(),c=o.h*2.3+1.1,h=null;if(t){let d=a.pickables.find(m=>m.kind==="section"&&m.id===e&&m.slug===t);d&&(l=d.local.clone().normalize(),c=Math.max(2.8,d.r*8,o.h*1.7+1),h=o.dir.clone().sub(l),h.addScaledVector(l,-h.dot(l)),h=h.lengthSq()>1e-8?h.normalize():null)}let p=this.rig.mode==="body"&&this.rig.body===a;p||this.arriveInDaylight(a,l);let u=h??(p?this.rig.fwd.clone():this.approachForward(a,l));this.rig.flyToBody(a,{dir:l,fwd:u,d:c,tiltOffset:-.1,onArrive:i}),this.dispatchEvent(new CustomEvent("focus",{detail:a}))}rideLink(e,t){let i=this.graph.pages[e],s=this.planets[i?.cluster];if(!s||i.cluster!==this.graph.pages[t]?.cluster)return!1;let r=s.traffic.vehicleOn(e,t);if(!r||this.rig.reducedMotion)return!1;let a=r.path.pts,o=Math.min(3,r.path.n-1),l=new k(a[0],a[1],a[2]).normalize(),c=new k(a[o*3]-a[0],a[o*3+1]-a[1],a[o*3+2]-a[2]);return c.addScaledVector(l,-c.dot(l)).normalize(),this.endRide(!1),this.rig.flyToBody(s,{dir:l,fwd:c,d:r.air?1.8:1,tiltOffset:-.16,onArrive:()=>{r.s=0,this.boardVehicle(r,s)}}),this.dispatchEvent(new CustomEvent("focus",{detail:s})),!0}boardVehicle(e,t){this.endRide(!1);let i=wc(e.path.length/11,1,3.4);this.ride={item:e,planet:t,v0:e.v,to:e.to,from:e.from,air:!!e.air},e.v=i,e.ridden=!0,e.arrived=!1,this.rig.ride=this.ride,this.dispatchEvent(new CustomEvent("ride",{detail:{state:"start",ride:this.ride}}))}endRide(e){let t=this.ride;t&&(this.ride=null,this.rig.ride=null,this.rig.liftT=0,t.item.ridden=!1,t.item.arrived=!1,t.item.v=t.v0,this.dispatchEvent(new CustomEvent("ride",{detail:{state:"end",arrived:e,ride:t}})))}updateRide(e){let t=this.ride;if(!t)return;let i=t.item,s=this.rig;if(s.body!==t.planet||s.mode!=="body"){this.endRide(!1);return}if(i.arrived){this.endRide(!0);return}if(i.x===void 0||s.busy)return;let r=1-Math.exp(-e*9),a=t.planet.G;Qe.set(i.x,i.y,i.z);let o=Math.max(0,Qe.length()-a);Qe.x+=i.fx*i.v*.12,Qe.y+=i.fy*i.v*.12,Qe.z+=i.fz*i.v*.12,Qe.normalize(),s.dir.lerp(Qe,r).normalize(),vi.set(i.fx,i.fy,i.fz),s.fwd.lerp(vi,r*.6),s.fwd.addScaledVector(s.dir,-s.fwd.dot(s.dir)).normalize(),s.dT=t.air?1.8:1,s.tiltOffsetT=-.16,s.liftT=t.air?o:0}setSelected(e){this.selected=e;for(let t of this.planets)t.setSelected(e)}setDayPhase(e){let t=this.rig.body;if(!t?.isPlanet)return;let{dir:i}=this.rig,s=t.uniforms.uSunLocal.value,r=i.y*s.y,a=Math.sqrt(Math.max(0,1-i.y*i.y)*Math.max(0,1-s.y*s.y)),o=e==="night"?Math.max(-.5,r-a*.8):Math.min(.68,r+a*.8);this.dayGoal={planet:t,target:o,budget:Math.PI*2,speed:1.7}}get currentPhase(){let e=this.rig.body;return e?.isPlanet?this.rig.dir.dot(e.uniforms.uSunLocal.value)<.05?"night":"day":null}project(e,t=new k){return t.copy(e).project(this.camera),t}frame(){let e=performance.now(),t=Math.min((e-this.lastTime)/1e3,.066);this.lastTime=e,this.step(t),this.renderFrame(),this.adaptQuality(t),this.dispatchEvent(new CustomEvent("frame",{detail:t}))}step(e){this.time+=e;let t=this.time,i=this.rig,{camera:s}=this,r=i.mode==="body"&&i.body.isPlanet&&i.d<i.body.R*1.2,a=this.timeScale*(r?.45:1);if(this.frameInfo.dt=e,this.dayGoal){let l=this.dayGoal,c=l.planet,h=(l.dir||i.dir).dot(c.uniforms.uSunLocal.value),p=l.speed||1.15;Math.abs(h-l.target)<.06||l.budget<=0||!l.far&&c!==i.body?this.dayGoal=null:(c.spin.rotation.y+=p*e,l.budget-=p*e)}for(let l of this.planets)l.update(e,t,s,this.sunWorld,a,this.frameInfo),l.orbitLine&&(l.orbitLine.material.uniforms.uAt.value=l.orbit.angle,l.orbitLine.material.uniforms.uBoost.value=this.hover?.planet===l?1:0);this.comet?.body.update(e*a,t),this.belt.group.rotation.y+=e*.0035*a,this.belt.group.updateMatrixWorld(!0),this.updateRide(e),i.update(e,this.inputLocked?null:this.keys),s.updateMatrixWorld(),this.sun.userData.update(t,s),this.stars.position.copy(s.position),this.stars.material.uniforms.uTime.value=t;for(let l of this.planets){let c=Qe.copy(s.position).sub(l.node.position);l.atmosphere.material.uniforms.uCam.value.copy(c),l.clouds&&(l.clouds.material.uniforms.uCamAlt.value=c.length()-l.R)}if(this.updateRoutes(e,t),this.updateLights(),this.updateFlare(),Math.abs(this.viewOffsetT-this.viewOffset)>.5&&(this.viewOffset+=(this.viewOffsetT-this.viewOffset)*(1-Math.exp(-e*6)),this.applyViewOffset()),!i.busy&&!this.inputLocked){let l=this.pickUnderPointer(),c=l?.kind==="vehicle"?"vehicle":l?`${l.kind}:${l.id??""}:${l.slug??""}:${l.key??""}:${l.pageId??""}:${l.planet?.index??""}`:"";if(c!==this.hoverKey){this.hoverKey=c,this.hover=l;for(let h of this.planets)h.setHover(l&&(l.kind==="page"||l.kind==="section")?l.id:null);this.canvas.classList.toggle("pointing",!!l&&l.kind!=="self"),this.dispatchEvent(new CustomEvent("hover",{detail:l}))}}else if(this.hover){this.hover=null,this.hoverKey="";for(let l of this.planets)l.setHover(null);this.canvas.classList.remove("pointing"),this.dispatchEvent(new CustomEvent("hover",{detail:null}))}if(this.updateFocus(e),this.fade<1&&(this.fade=Math.min(1,this.fade+e/2.2),this.finish.uniforms.uFade.value=this.fade*this.fade),this.bloom){let l=i.mode==="body"&&i.body.isPlanet?1-Qn(.7,3.2,i.d):0;this.bloom.strength=this.bloomBase*(1-l*.72)}let o=this.finish.uniforms;o.uTime.value=t,o.uWarp.value=i.warp}updateRoutes(e,t){let i=this.rig.mode==="body"&&this.rig.body?.isPlanet?this.rig.body:this.hover?.planet||null,r=(this.selected!=null?this.planets[this.graph.pages[this.selected]?.cluster]:null)||i,a=new Map,o=this.camera.position;for(let l of this.routes){let c=r&&(l.from===r||l.to===r);l.update(this.sunWorld,t,this.res,c?1.15:r?.1:.34);let h=this.shipPools.get(l.from);if(!h)continue;let p=a.get(h)||0,u=h.instanceMatrix.array;for(let d of l.ships){d.t+=d.v*e*this.timeScale,d.t>1&&(d.t-=1),l.sample(d.t,Qe,vi);let m=Qe.distanceTo(o),x=wc(m*.0036,.4,2.6)*Math.min(1,Math.min(d.t,1-d.t)*12);qf.set(0,1,0),Lr.crossVectors(qf,vi).normalize(),Li.crossVectors(vi,Lr).normalize();let f=p*16;u[f]=Lr.x*x,u[f+1]=Lr.y*x,u[f+2]=Lr.z*x,u[f+3]=0,u[f+4]=Li.x*x,u[f+5]=Li.y*x,u[f+6]=Li.z*x,u[f+7]=0,u[f+8]=vi.x*x,u[f+9]=vi.y*x,u[f+10]=vi.z*x,u[f+11]=0,u[f+12]=Qe.x,u[f+13]=Qe.y,u[f+14]=Qe.z,u[f+15]=1,p++}a.set(h,p)}for(let[l,c]of a)l.count=c,l.instanceMatrix.needsUpdate=!0;this.spaceUniforms.uTime.value=t}updateLights(){let e=this.rig,t=null,i=1/0;for(let a of this.planets){let o=a.altitude/a.R;o<i&&(i=o,t=a)}this.nearPlanet=t;let s=1-Qn(1.2,3,i),r=3.4;if(this.pointLight.intensity=r*(1-s),this.dirLight.intensity=r*s,s>0&&t){let a=Qe.set(0,0,0),o;e.mode==="body"&&e.body===t?(a.copy(e.pose.look),o=wc(e.d*1.6,6,t.R*2.2)):(a.copy(t.node.position),o=t.R*2.2);let l=vi.copy(this.sunWorld).sub(t.node.position).normalize();this.dirLight.position.copy(a).addScaledVector(l,90),this.dirLight.target.position.copy(a),this.dirLight.target.updateMatrixWorld(),this.dirLight.updateMatrixWorld();let c=this.dirLight.shadow.camera;Math.abs(c.right-o)>o*.05&&(c.left=-o,c.right=o,c.top=o,c.bottom=-o,c.updateProjectionMatrix()),this.dirLight.castShadow=!!this.quality.shadow&&i<1.4}else this.dirLight.castShadow=!1;for(let a of this.planets){let o=a.civ.atmosphere.fog,l=a.altitude,c=o?o.density*(1-Qn(a.R*.05,a.R*.55,l)):0;if(a.uniforms.uFogD.value=c,c>0&&a===t){let p=Li.copy(this.camera.position).sub(a.node.position).normalize().dot(Lr.copy(this.sunWorld).sub(a.node.position).normalize()),u=Qn(-.05,.45,p),d=Qn(-.24,0,p)*(1-Qn(.06,.42,p));a.uniforms.uFogC.value.copy(a.fogNight).lerp(a.fogDay,u).lerp(a.fogDusk,d*.7)}}}updateFlare(){let e=this.finish.uniforms;Qe.copy(this.sunWorld).project(this.camera);let t=0;if(Qe.z<1&&Math.abs(Qe.x)<1.25&&Math.abs(Qe.y)<1.25){t=1;let i=vi.copy(this.sunWorld).sub(this.camera.position),s=i.length();i.divideScalar(s);for(let r of this.planets){Li.copy(r.node.position).sub(this.camera.position);let a=Li.dot(i);if(a<0||a>s)continue;let o=Math.sqrt(Math.max(Li.lengthSq()-a*a,0));t=Math.min(t,Qn(r.R*.96,r.R*1.14,o))}t*=1-Qn(.9,1.25,Math.max(Math.abs(Qe.x),Math.abs(Qe.y)))}e.uSunUv.value.set(Qe.x*.5+.5,Qe.y*.5+.5),e.uSunVis.value+=(t-e.uSunVis.value)*.12}renderFrame(){this.paused||(this.portraitQueue?.length&&this.takePortrait(this.portraitQueue.shift()),this.composer.render())}capturePortraits(e){this.onPortrait=e,this.portraitQueue=[...this.planets]}takePortrait(e){let{scene:t,composer:i,renderer:s,sunWorld:r,frameInfo:a}=this,o=i.passes[0],l=this.spaceUniforms.uTime.value,c=e.node.position.clone().sub(r).negate().normalize(),h=new k(0,1,0).cross(c).normalize(),p=s.domElement,u=new Gt(26,p.width/p.height,Math.max(.05,e.R*.2),e.R*60),d=c.clone().addScaledVector(h,.62).add(new k(0,.34,0)).normalize();u.position.copy(e.node.position).addScaledVector(d,e.R*1.16/Math.tan(13*Math.PI/180)),u.lookAt(e.node.position),u.updateMatrixWorld();let m=[];for(let _ of t.children)_===e.node||_.isLight||!_.visible||(_.visible=!1,m.push(_));let x=this.finish.uniforms,f={fade:x.uFade.value,warp:x.uWarp.value,sun:x.uSunVis.value,flash:x.uFlash.value,point:this.pointLight.intensity,dir:this.dirLight.intensity,cast:this.dirLight.castShadow,bloom:this.bloom?.strength};x.uFade.value=1,x.uWarp.value=0,x.uSunVis.value=0,x.uFlash.value=0,this.pointLight.intensity=3.4,this.dirLight.intensity=0,this.dirLight.castShadow=!1,this.bloom&&(this.bloom.strength=this.bloomBase);let g={id:this.focus.amount.value};this.focus.amount.value=0,o.camera=u,e.update(0,l,u,r,0,a),i.render();let v=document.createElement("canvas");v.width=v.height=160;let w=Math.min(p.width,p.height);v.getContext("2d").drawImage(p,(p.width-w)/2,(p.height-w)/2,w,w,0,0,160,160),o.camera=this.camera;for(let _ of m)_.visible=!0;x.uFade.value=f.fade,x.uWarp.value=f.warp,x.uSunVis.value=f.sun,x.uFlash.value=f.flash,this.pointLight.intensity=f.point,this.dirLight.intensity=f.dir,this.dirLight.castShadow=f.cast,this.bloom&&(this.bloom.strength=f.bloom),this.focus.amount.value=g.id,e.update(0,l,this.camera,r,0,a),this.onPortrait?.(e,v.toDataURL("image/jpeg",.86))}adaptQuality(e){if(this.fps+=(1/Math.max(e,.001)-this.fps)*.03,this.qualityTimer=(this.qualityTimer||0)+e,this.qualityTimer<2.5||this.rig.busy||this.paused)return;let t=Math.min(window.devicePixelRatio||1,this.quality.maxDpr),i=this.dprScale;this.fps<28&&i>.5?i=Math.max(.5,i*.82):this.fps>56&&i<1&&(i=Math.min(1,i*1.08)),Math.abs(i-this.dprScale)>.01&&(this.dprScale=i,this.renderer.setPixelRatio(t*i),this.composer.setPixelRatio(t*i),this.resize(),this.qualityTimer=0)}};function As(){return new Promise(n=>requestAnimationFrame(()=>n()))}var bu={system:[55,82.41,110,164.81],terra:[65.41,98,130.81,196],vektor:[55,110,164.81,233.08],ignis:[41.2,61.74,82.41,123.47],prisma:[87.31,130.81,174.61,261.63],myzel:[51.91,77.78,103.83,155.56],auris:[58.27,87.31,116.54,174.61],thalassa:[73.42,110,146.83,220],kronos:[49,73.42,98,146.83],sylva:[69.3,103.83,138.59,207.65]},Mc=class{constructor(){this.ctx=null,this.on=!1}start(){if(this.ctx){this.ctx.resume(),this.master.gain.setTargetAtTime(.5,this.ctx.currentTime,1.2),this.on=!0;return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=0;let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=600,i.Q.value=.6,this.filter=i;let s=t.createDelay(2);s.delayTime.value=.61;let r=t.createGain();r.gain.value=.46;let a=t.createGain();a.gain.value=.4,i.connect(this.master),i.connect(s),s.connect(r),r.connect(s),s.connect(a),a.connect(this.master),this.master.connect(t.destination),this.voices=bu.system.map((d,m)=>{let x=t.createOscillator(),f=t.createOscillator();x.type="sine",f.type="triangle",x.frequency.value=d,f.frequency.value=d*1.003;let g=t.createGain();g.gain.value=.11/(1+m*.5);let v=t.createOscillator();v.frequency.value=.03+m*.017;let w=t.createGain();return w.gain.value=.045/(1+m*.5),v.connect(w),w.connect(g.gain),x.connect(g),f.connect(g),g.connect(i),x.start(),f.start(),v.start(),{a:x,b:f}});let o=t.sampleRate*3,l=t.createBuffer(1,o,t.sampleRate),c=l.getChannelData(0),h=0;for(let d=0;d<o;d++)h=h*.985+(Math.random()*2-1)*.015,c[d]=h*8;let p=t.createBufferSource();p.buffer=l,p.loop=!0;let u=t.createBiquadFilter();u.type="bandpass",u.frequency.value=380,u.Q.value=.5,this.wind=t.createGain(),this.wind.gain.value=0,p.connect(u),u.connect(this.wind),this.wind.connect(this.master),p.start(),this.master.gain.setTargetAtTime(.5,t.currentTime,1.6),this.on=!0,this.pendingChord&&this.setWorld(this.pendingChord)}stop(){this.ctx&&(this.master.gain.setTargetAtTime(0,this.ctx.currentTime,.5),this.on=!1)}toggle(){return this.on?this.stop():this.start(),this.on}setWorld(e){if(this.pendingChord=e,!this.ctx)return;let t=bu[e]||bu.system,i=this.ctx.currentTime;this.voices.forEach((s,r)=>{s.a.frequency.setTargetAtTime(t[r],i,2.4),s.b.frequency.setTargetAtTime(t[r]*1.003,i,2.4)})}setAtmosphere(e){if(!this.ctx)return;let t=this.ctx.currentTime;this.wind.gain.setTargetAtTime(e*.1,t,.8),this.filter.frequency.setTargetAtTime(420+e*900,t,1.2)}};var Tc={en:{system:"System",pages:"pages",page:"page",links:"links",worlds:"worlds",words:"words",linksIn:"in",linksOut:"out",updated:"updated",contents:"Contents",minutes:"min",readAll:"Read it all",readMode:"Reading mode (T)",readModeOff:"Back to the city view (T)",tabDistricts:"Districts",tabText:"Text",tabLinks:"Connections",tabSources:"Sources",intro:"Introduction",fullText:"Full text",nextDistrict:"Next",districtsRead:(n,e)=>`${n} of ${e} districts read`,showInCity:"Show in the city",backTo:n=>`Back to ${n}`,showAll:n=>`Show all ${n}`,sourcesStated:"Stated on this page",sourcesCited:"Cited in the text",sourceWord:"Source",peekFly:"Click to fly there",peekGo:"Click to go there",enlargeTable:"Enlarge table",sections:"sections",search:"Search this wiki\u2026",noResults:"Nothing here. Try another word.",dayNight:"Time-lapse to day or night (N)",sound:"Ambient sound (M)",help:"How to read this map (?)",searchTool:"Search (/)",close:"Close",back:"Back to the system",star:"The star",starSub:"Index of the wiki",comet:"The comet",cometSub:"The wiki\u2019s log",asteroids:"Asteroid belt",asteroid:"Asteroid",asteroidSub:"Orphan page, nothing links here",building:"Building",landmark:"Landmark",section:"Section",world:"World",site:"Construction site",siteTitle:"Not written yet",siteBody:"This page is linked from the wiki but doesn\u2019t exist yet. On the map it is a construction site beside the page that mentions it.",referencedBy:"Mentioned on",clickWorld:"Click to land",clickPage:"Click to read",clickSection:"Click to read this section",edges:"Links travel by",changed:"The wiki has changed.",reload:"Reload worlds",hintTitle:"Click a world to land on it, or scroll toward it",loaderTitle:"Charting your wiki",stepNoise:"Mixing the cosmic background",stepSky:"Painting the galaxy",stepPlan:"Surveying",stepTerrain:"Terraforming",stepCity:"Settling",stepAtmo:"Lighting the sky over",stepCompile:"Warming up the engines",legendTitle:"How to read this map",legend:[["Star","The wiki\u2019s index page: everything orbits it"],["Planet","A topic cluster, inhabited by its own civilisation"],["City","A Markdown page. The more it is linked and the more it says, the bigger and busier: from hamlet to metropolis"],["Nearby buildings","The headings of that page; click to open the section"],["Roads, rails, light","Links between pages on the same world"],["Traffic","Vehicles travel in the link\u2019s direction, denser when it is mentioned more"],["Air routes","Links too long or tangled to run on the ground"],["Starships","Links that connect different topics"],["Construction sites","Pages that are linked but not written yet"],["Tower cranes","Pages that are new or changed since your last visit"],["Lit windows by day","Districts of a page you have read"],["Asteroids","Orphan pages that nothing links to"],["Comet","The wiki\u2019s log"]],keysTitle:"Controls",keys:[["Drag","Move across the surface, or orbit the system"],["Right-drag / Shift-drag","Look around: heading and tilt"],["Scroll","Zoom, from space down to street level"],["W A S D","Fly; Q and E turn; R and F change altitude"],["K","Planet map with a directory of all places"],["E (on the map)","Plan your own expedition, step by step"],["T","Reading mode: the whole page, wide"],["L","Ship\u2019s log: expeditions, route planner, what you\u2019ve read"],[", and .","Previous and next stop on a journey"],["Click a vehicle","Ride along to the page its link leads to"],["N","Time-lapse to day or night"],["/ or Ctrl K","Search"],["Esc","Leave reading mode, close the page, or go up a level"]],tierNames:["Hamlet","Village","Town","City","Metropolis"],mapTool:"Planet map (K)",mapButton:"Map",logTool:"Ship\u2019s log: expeditions, routes, what you\u2019ve read (L)",logTitle:"Ship\u2019s log",mapFilter:"Find a place\u2026",mapSort:"Sort places",mapPlaces:"Places on this world",sortSize:"By size",sortName:"By name",sortDate:"Recently changed",sortNew:"New and unread first",mapMatches:(n,e)=>`${n} of ${e} pages`,youAreHere:"You are here",visited:"Read",explored:(n,e)=>`${n} of ${e} explored`,flyThere:"Fly there and read",routeHere:"Route to here",badgeNew:"NEW",badgeChanged:"CHANGED",departures:"Departures",arrivals:"Arrivals",ride:"Ride along",link:"Link",starship:"Starship",linkedTimes:n=>`Linked ${n} time${n===1?"":"s"}`,planOwn:"Plan your own expedition",planOwnSub:"Step by step, right on the map",planFromHere:"Expedition from here",planKicker:"Your expedition",planHintStart:"Pick a place to begin. Any city will do: click it on the map or in this list.",planHintNext:(n,e)=>`${e} way${e===1?"":"s"} on from \u201C${n}\u201D. The glowing places are one link away. Click one to add it.`,planHintEnd:n=>`No unvisited links lead on from \u201C${n}\u201D. Click any other place and the route finds the connection.`,planBridged:(n,e)=>`To reach \u201C${n}\u201D, the route goes by way of ${e}.`,planAlready:n=>`\u201C${n}\u201D is already on your route.`,planAllRead:"You have read everything here, so this route covers all of it again.",planLeave:"Leave the planner (Esc); your route stays",planSuggest:"Or let the map suggest a route",planAllWorld:(n,e)=>`All ${n} place${n===1?"":"s"} on \u201C${e}\u201D`,planAllWiki:n=>`Everything in this wiki: ${n} place${n===1?"":"s"}`,planUnreadOnly:"Skip what I have already read",planRoute:(n,e)=>`Your route: ${n} place${n===1?"":"s"}, about ${e} min`,planUndo:"Undo",planClear:"Clear",planRemove:"Remove from route",planMore:n=>`\u2026and ${n} more`,planReachable:n=>`Where next? ${n} place${n===1?"":"s"} one link away`,planStartAt:"Good places to begin",planPointsHere:"links back here",planOnWorld:n=>`\u25B8 ${n}`,planDotted:n=>`${n} step${n===1?" has":"s have"} no direct link. Dotted on the map: the way there leads through other places.`,planStart:(n,e)=>`Set off: ${n} stop${n===1?"":"s"}${e>1?` on ${e} worlds`:""}`,planStartEmpty:"Pick a place to begin",planTitleWorld:n=>`All of ${n}`,planTitleWiki:"Through the whole wiki",resume:"Carry on",resumeToast:(n,e,t)=>`Your expedition is waiting: ${n}, stop ${e} of ${t}.`,journeyFinished:(n,e)=>`Expedition complete: ${n}. ${e} place${e===1?"":"s"} explored.`,legFollows:n=>`\u201C${n}\u201D links here`,legPoints:n=>`This page links to \u201C${n}\u201D`,legShip:n=>`By starship from \u201C${n}\u201D`,legVia:(n,e)=>`From \u201C${n}\u201D by way of ${e}`,legJump:n=>`No link from \u201C${n}\u201D: a jump to another part of the wiki`,journeyLabel:"Current journey",stopOf:(n,e)=>`Stop ${n} of ${e}`,nextStop:"Next",prevStop:"Previous stop",endJourney:"End this journey",journeyDone:"Finish the journey",tabExpeditions:"Expeditions",tabRoute:"Route",tabLog:"Logbook",noExpeditions:"This wiki is too small for an expedition.",routeFrom:"From",routeTo:"To",routeSwap:"Swap start and destination",routePick:"Choose a page\u2026",routeHint:"Pick two pages to see how the wiki connects them.",noRoute:"No chain of links connects these two pages.",sameStop:"You are already there.",hops:n=>`${n} link${n===1?"":"s"} apart`,legLinksTo:"links to",legLinkedFrom:"is linked from",routeStart:"Start this journey",sinceLast:"Since your last visit",markSeen:"Mark all as seen",removedPages:(n,e)=>`${n} page${n===1?" was":"s were"} removed: ${e}`,exploration:"Exploration",recently:"Recently read",resetLog:"Forget what I\u2019ve read",resetConfirm:"Forget which pages you have read in this wiki?",logEmpty:"Nothing read yet. Pages you open are logged here.",logPrivate:"Your log stays in this browser.",freshToast:n=>`${n} page${n===1?" is":"s are"} new or changed since your last visit.`,freshShow:"Show me",riding:"Riding to",getOff:"Get off (Esc)",vehicle:"Vehicle",vehicleTo:(n,e)=>`${n} \u2192 ${e}`,rideHint:"Click to ride along",expGrand:"The grand tour",expGrandSub:"The capital of every world",expWorld:n=>`Through ${n}`,expWorldSub:"Its biggest cities, along their links",expSites:"Site inspection",expSitesSub:"Pages that link to something not written yet",expNew:"What changed",expNewSub:"Everything new or changed since your last visit",expBlank:"White spots",expBlankSub:"The most important places you haven\u2019t read",altitude:"ALT",local:"local"},de:{system:"System",pages:"Seiten",page:"Seite",links:"Links",worlds:"Welten",words:"W\xF6rter",linksIn:"ein",linksOut:"aus",updated:"aktualisiert",contents:"Inhalt",minutes:"Min",readAll:"Ganz lesen",readMode:"Lesemodus (T)",readModeOff:"Zur\xFCck zur Stadttafel (T)",tabDistricts:"Viertel",tabText:"Text",tabLinks:"Verbindungen",tabSources:"Quellen",intro:"Einleitung",fullText:"Gesamter Text",nextDistrict:"Weiter",districtsRead:(n,e)=>`${n} von ${e} Vierteln gelesen`,showInCity:"In der Stadt zeigen",backTo:n=>`Zur\xFCck zu ${n}`,showAll:n=>`Alle ${n} zeigen`,sourcesStated:"Auf dieser Seite genannt",sourcesCited:"Im Text zitiert",sourceWord:"Quelle",peekFly:"Klicken zum Hinfliegen",peekGo:"Klicken, um dorthin zu gehen",enlargeTable:"Tabelle vergr\xF6\xDFern",sections:"Abschnitte",search:"Dieses Wiki durchsuchen\u2026",noResults:"Nichts gefunden. Versuch ein anderes Wort.",dayNight:"Zeitraffer zu Tag oder Nacht (N)",sound:"Klangkulisse (M)",help:"So liest du diese Karte (?)",searchTool:"Suche (/)",close:"Schlie\xDFen",back:"Zur\xFCck zum System",star:"Der Stern",starSub:"Index des Wikis",comet:"Der Komet",cometSub:"Das Protokoll des Wikis",asteroids:"Asteroideng\xFCrtel",asteroid:"Asteroid",asteroidSub:"Verwaiste Seite, nichts verweist hierher",building:"Geb\xE4ude",landmark:"Wahrzeichen",section:"Abschnitt",world:"Welt",site:"Baustelle",siteTitle:"Noch nicht geschrieben",siteBody:"Das Wiki verlinkt diese Seite, aber es gibt sie noch nicht. Auf der Karte ist sie eine Baustelle neben der Seite, die sie erw\xE4hnt.",referencedBy:"Erw\xE4hnt auf",clickWorld:"Klicken zum Landen",clickPage:"Klicken zum Lesen",clickSection:"Klicken, um diesen Abschnitt zu lesen",edges:"Links reisen \xFCber",changed:"Das Wiki hat sich ge\xE4ndert.",reload:"Welten neu laden",hintTitle:"Klicke auf eine Welt, um zu landen, oder scrolle auf sie zu",loaderTitle:"Dein Wiki wird kartiert",stepNoise:"Der kosmische Hintergrund wird gemischt",stepSky:"Die Galaxie wird gemalt",stepPlan:"Vermessung von",stepTerrain:"Terraforming von",stepCity:"Besiedlung von",stepAtmo:"Der Himmel \xFCber",stepCompile:"Triebwerke werden vorgeheizt",legendTitle:"So liest du diese Karte",legend:[["Stern","Die Indexseite des Wikis: Alles kreist um sie"],["Planet","Ein Themencluster, bewohnt von einer eigenen Zivilisation"],["Stadt","Eine Markdown-Seite. Je st\xE4rker verlinkt und je umfangreicher, desto gr\xF6\xDFer und belebter: von der Siedlung bis zur Metropole"],["Geb\xE4ude ringsum","Die \xDCberschriften der Seite; ein Klick \xF6ffnet den Abschnitt"],["Stra\xDFen, Schienen, Licht","Links zwischen Seiten derselben Welt"],["Verkehr","Fahrzeuge fahren in Richtung des Links, dichter, je \xF6fter er vorkommt"],["Flugrouten","Links, die zu lang oder zu verworren f\xFCr den Boden sind"],["Raumschiffe","Links zwischen verschiedenen Themen"],["Baustellen","Seiten, die verlinkt, aber noch nicht geschrieben sind"],["Turmkr\xE4ne","Seiten, die seit deinem letzten Besuch neu sind oder sich ge\xE4ndert haben"],["Erleuchtete Fenster am Tag","Viertel einer Seite, die du gelesen hast"],["Asteroiden","Verwaiste Seiten, auf die nichts verweist"],["Komet","Das Protokoll des Wikis"]],keysTitle:"Steuerung",keys:[["Ziehen","\xDCber die Oberfl\xE4che bewegen oder um das System kreisen"],["Rechts ziehen / Umschalt + Ziehen","Umsehen: Richtung und Neigung"],["Scrollen","Zoomen, vom All bis auf Stra\xDFenh\xF6he"],["W A S D","Fliegen; Q und E drehen; R und F \xE4ndern die H\xF6he"],["K","Planetenkarte mit Verzeichnis aller Orte"],["E (auf der Karte)","Eigene Expedition planen, Schritt f\xFCr Schritt"],["T","Lesemodus: die ganze Seite, breit"],["L","Bordbuch: Expeditionen, Routenplaner, Gelesenes"],[", und .","Vorherige und n\xE4chste Station einer Reise"],["Fahrzeug anklicken","Mitfahren bis zur Seite, zu der sein Link f\xFChrt"],["N","Zeitraffer zu Tag oder Nacht"],["/ oder Strg K","Suche"],["Esc","Lesemodus verlassen, Seite schlie\xDFen oder eine Ebene h\xF6her"]],tierNames:["Siedlung","Dorf","Stadt","Gro\xDFstadt","Metropole"],mapTool:"Planetenkarte (K)",mapButton:"Karte",logTool:"Bordbuch: Expeditionen, Routen, Gelesenes (L)",logTitle:"Bordbuch",mapFilter:"Ort finden\u2026",mapSort:"Orte sortieren",mapPlaces:"Orte auf dieser Welt",sortSize:"Nach Gr\xF6\xDFe",sortName:"Nach Name",sortDate:"Zuletzt ge\xE4ndert",sortNew:"Neu und Ungelesen zuerst",mapMatches:(n,e)=>`${n} von ${e} Seiten`,youAreHere:"Du bist hier",visited:"Gelesen",explored:(n,e)=>`${n} von ${e} erkundet`,flyThere:"Hinfliegen und lesen",routeHere:"Route hierher",badgeNew:"NEU",badgeChanged:"GE\xC4NDERT",departures:"Abfahrten",arrivals:"Ank\xFCnfte",ride:"Mitfahren",link:"Link",starship:"Raumschiff",linkedTimes:n=>`${n}\xD7 verlinkt`,planOwn:"Eigene Expedition planen",planOwnSub:"Schritt f\xFCr Schritt, direkt auf der Karte",planFromHere:"Expedition ab hier",planKicker:"Deine Expedition",planHintStart:"W\xE4hle einen Startort. Jede Stadt ist recht: Klicke sie auf der Karte oder in dieser Liste an.",planHintNext:(n,e)=>`Von \u201E${n}\u201C ${e===1?"f\xFChrt 1 Weg":`f\xFChren ${e} Wege`} weiter. Die leuchtenden Orte sind einen Link entfernt. Klicke einen an, um ihn aufzunehmen.`,planHintEnd:n=>`Von \u201E${n}\u201C f\xFChrt kein neuer Link weiter. Klicke einen anderen Ort an, die Route findet die Verbindung.`,planBridged:(n,e)=>`Um \u201E${n}\u201C zu erreichen, f\xFChrt die Route \xFCber ${e}.`,planAlready:n=>`\u201E${n}\u201C ist schon auf deiner Route.`,planAllRead:"Du hast hier schon alles gelesen, deshalb f\xFChrt diese Route noch einmal durch alles.",planLeave:"Planer verlassen (Esc); deine Route bleibt",planSuggest:"Oder lass dir eine Route vorschlagen",planAllWorld:(n,e)=>`${n===1?"Der eine Ort":`Alle ${n} Orte`} auf \u201E${e}\u201C`,planAllWiki:n=>`Das ganze Wiki: ${n} ${n===1?"Ort":"Orte"}`,planUnreadOnly:"Bereits Gelesenes \xFCberspringen",planRoute:(n,e)=>`Deine Route: ${n} ${n===1?"Ort":"Orte"}, etwa ${e} Min`,planUndo:"R\xFCckg\xE4ngig",planClear:"Leeren",planRemove:"Von der Route nehmen",planMore:n=>`\u2026und ${n} weitere`,planReachable:n=>`Wohin als N\xE4chstes? ${n} ${n===1?"Ort":"Orte"} einen Link entfernt`,planStartAt:"Gute Startpunkte",planPointsHere:"verweist hierher",planOnWorld:n=>`\u25B8 ${n}`,planDotted:n=>`${n} ${n===1?"Schritt hat":"Schritte haben"} keinen direkten Link. Gepunktet auf der Karte: Der Weg f\xFChrt \xFCber andere Orte.`,planStart:(n,e)=>`Aufbrechen: ${n} ${n===1?"Station":"Stationen"}${e>1?` auf ${e} Welten`:""}`,planStartEmpty:"W\xE4hle einen Startort",planTitleWorld:n=>`Alle Orte: ${n}`,planTitleWiki:"Durch das ganze Wiki",resume:"Weiterreisen",resumeToast:(n,e,t)=>`Deine Expedition wartet: ${n}, Station ${e} von ${t}.`,journeyFinished:(n,e)=>`Expedition geschafft: ${n}. ${e} ${e===1?"Ort":"Orte"} erkundet.`,legFollows:n=>`\u201E${n}\u201C verweist hierher`,legPoints:n=>`Diese Seite verweist auf \u201E${n}\u201C`,legShip:n=>`Per Raumschiff von \u201E${n}\u201C`,legVia:(n,e)=>`Von \u201E${n}\u201C \xFCber ${e}`,legJump:n=>`Kein Link von \u201E${n}\u201C: ein Sprung in einen anderen Teil des Wikis`,journeyLabel:"Aktuelle Reise",stopOf:(n,e)=>`Station ${n} von ${e}`,nextStop:"Weiter",prevStop:"Vorherige Station",endJourney:"Reise beenden",journeyDone:"Reise abschlie\xDFen",tabExpeditions:"Expeditionen",tabRoute:"Route",tabLog:"Logbuch",noExpeditions:"F\xFCr eine Expedition ist dieses Wiki zu klein.",routeFrom:"Von",routeTo:"Nach",routeSwap:"Start und Ziel tauschen",routePick:"Seite w\xE4hlen\u2026",routeHint:"W\xE4hle zwei Seiten und sieh, wie das Wiki sie verbindet.",noRoute:"Keine Linkkette verbindet diese beiden Seiten.",sameStop:"Du bist schon da.",hops:n=>`${n} ${n===1?"Link":"Links"} entfernt`,legLinksTo:"verweist auf",legLinkedFrom:"wird verlinkt von",routeStart:"Diese Reise starten",sinceLast:"Seit deinem letzten Besuch",markSeen:"Alle als gesehen markieren",removedPages:(n,e)=>`${n} ${n===1?"Seite wurde":"Seiten wurden"} entfernt: ${e}`,exploration:"Erkundung",recently:"Zuletzt gelesen",resetLog:"Gelesenes vergessen",resetConfirm:"Vergessen, welche Seiten du in diesem Wiki gelesen hast?",logEmpty:"Noch nichts gelesen. Seiten, die du \xF6ffnest, landen hier.",logPrivate:"Dein Logbuch bleibt in diesem Browser.",freshToast:n=>`${n} ${n===1?"Seite ist":"Seiten sind"} neu oder ge\xE4ndert seit deinem letzten Besuch.`,freshShow:"Zeigen",riding:"Unterwegs nach",getOff:"Aussteigen (Esc)",vehicle:"Fahrzeug",vehicleTo:(n,e)=>`${n} \u2192 ${e}`,rideHint:"Klicken zum Mitfahren",expGrand:"Die gro\xDFe Rundreise",expGrandSub:"Die Hauptstadt jeder Welt",expWorld:n=>`Durch ${n}`,expWorldSub:"Ihre gr\xF6\xDFten St\xE4dte, entlang ihrer Links",expSites:"Baustellen-Inspektion",expSitesSub:"Seiten, die auf noch nicht Geschriebenes verweisen",expNew:"Was sich ge\xE4ndert hat",expNewSub:"Alles Neue oder Ge\xE4nderte seit deinem letzten Besuch",expBlank:"Wei\xDFe Flecken",expBlankSub:"Die wichtigsten Orte, die du noch nicht gelesen hast",altitude:"H\xD6HE",local:"Ortszeit"}};var Ye={search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>',moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',sound:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10v4h3l5 4V6L7 10z"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5M18 7a7 7 0 0 1 0 10"/></svg>',help:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.5a2.5 2.5 0 1 1 3.6 2.3c-.8.4-1.2 1-1.2 1.9"/><path d="M12 16.8v.2"/></svg>',close:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',logo:'<svg width="26" height="26" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="6.5" fill="#ffc477"/><ellipse cx="16" cy="16" rx="14" ry="5" stroke="#7fc4ff" stroke-width="1.5" transform="rotate(-24 16 16)"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M9 4.5 3.5 6.5v13L9 17.5l6 2 5.5-2v-13L15 6.5z"/><path d="M9 4.5v13M15 6.5v13"/></svg>',compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',road:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M8 3 4 21M16 3l4 18"/><path d="M12 4v3M12 11v3M12 18v2"/></svg>',air:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 3c-1 0-1.5 1.5-1.5 3v3.5L3 14v2l7.5-2v4L8 20v1.5l4-1 4 1V20l-2.5-2v-4l7.5 2v-2l-7.5-4.5V6c0-1.5-.5-3-1.5-3z"/></svg>',ship:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"><path d="M14 4c3 0 5 0 6 0 0 1 0 3 0 6l-7 7-6-6z"/><path d="M7 11l-3 1-1.5 3 4.5-.5M13 17l-1 3-3 1.5.5-4.5"/><circle cx="15.5" cy="8.5" r="1.2"/></svg>',site:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21V5M3 21h8M7 5l12 2M7 5 3 7h4M17 7v5"/><path d="M15.5 12h3v2.5h-3z"/></svg>',prev:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 6-6 6 6 6"/></svg>',expand:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/></svg>',collapse:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h5V4M20 9h-5V4M4 15h5v5M20 15h-5v5"/></svg>',book:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10 5 7 4.5 3.5 5v13.5C7 18 10 18.5 12 20c2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5V20"/></svg>',pin:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>',back:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',next:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 6 6 6-6 6"/></svg>'};function T(n,e={},...t){let i=document.createElement(n);for(let[s,r]of Object.entries(e))s==="class"?i.className=r:s==="html"?i.innerHTML=r:s==="text"?i.textContent=r:s.startsWith("on")?i.addEventListener(s.slice(2),r):r!==!1&&r!=null&&i.setAttribute(s,r===!0?"":r);for(let s of t.flat())s!=null&&i.append(s);return i}var Rs=n=>`#${n.toString(16).padStart(6,"0")}`;function Di(n,e){return T("span",{class:"face","aria-hidden":"true",style:`--f:var(--face-${n.index}, none);--c:${Rs(n.civ.palette.accent)};--s:${e}px`})}function Lb(){let n=new Map;return{getItem:e=>n.has(e)?n.get(e):null,setItem:(e,t)=>{n.set(e,t)},removeItem:e=>{n.delete(e)}}}function Db(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(36)}var Ec=class{constructor(e,t){this.graph=e,this.key=`wikitary:${Db(`${e.meta.root}|${e.meta.title}`)}`,this.storage=t??Lb();let i=this.read();this.firstVisit=!i,this.seen=i?.seen??{},this.visits=i?.visits??{},this.sections=i?.sections??{},this.trip=i?.trip??null,this.fresh=new Set,this.added=new Set;for(let r of e.pages)this.firstVisit?this.seen[r.path]=r.hash:this.seen[r.path]!==r.hash&&(this.fresh.add(r.id),r.path in this.seen||this.added.add(r.id),delete this.sections[r.path]),r.fresh=this.fresh.has(r.id);let s=new Set(e.pages.map(r=>r.path));this.removed=Object.keys(this.seen).filter(r=>!s.has(r));for(let r of this.removed)delete this.seen[r],delete this.visits[r],delete this.sections[r];this.write()}read(){try{let e=this.storage.getItem(this.key),t=e?JSON.parse(e):null;return t?.version===1?t:null}catch{return null}}write(){try{this.storage.setItem(this.key,JSON.stringify({version:1,seen:this.seen,visits:this.visits,sections:this.sections,trip:this.trip}))}catch{}}isVisited(e){return this.graph.pages[e]?.path in this.visits}isFresh(e){return this.fresh.has(e)}visit(e,t=Date.now()){let i=this.graph.pages[e];if(!i)return!1;this.visits[i.path]=t,this.seen[i.path]=i.hash;let s=this.fresh.delete(e);return this.added.delete(e),i.fresh=!1,this.write(),s}sectionsRead(e){return new Set(this.sections[this.graph.pages[e]?.path]??[])}markSection(e,t){let i=this.graph.pages[e]?.path;if(i==null)return!1;let s=this.sections[i]??=[];return s.includes(t)?!1:(s.push(t),this.write(),!0)}progress(e){let t=0;for(let i of e)this.isVisited(i)&&t++;return{done:t,total:e.length}}saveTrip({title:e,stops:t,at:i}){this.trip={title:e,at:this.graph.pages[t[i]?.page]?.path??null,stops:t.map(s=>({path:this.graph.pages[s.page].path,note:s.note||""}))},this.write()}clearTrip(){this.trip&&(this.trip=null,this.write())}savedTrip(){if(!this.trip)return null;let e=new Map(this.graph.pages.map(s=>[s.path,s.id])),t=this.trip.stops.filter(s=>e.has(s.path)).map(s=>({page:e.get(s.path),note:s.note}));if(!t.length)return null;let i=Math.max(0,t.findIndex(s=>s.page===e.get(this.trip.at)));return{title:this.trip.title,stops:t,at:i}}recent(e=20){let t=new Map(this.graph.pages.map(i=>[i.path,i]));return Object.entries(this.visits).sort((i,s)=>s[1]-i[1]).slice(0,e).map(([i,s])=>({page:t.get(i),at:s})).filter(i=>i.page)}markAllSeen(){for(let t of this.fresh){let i=this.graph.pages[t];this.seen[i.path]=i.hash,i.fresh=!1}let e=[...this.fresh];return this.fresh.clear(),this.added.clear(),this.removed=[],this.write(),e}resetVisits(){this.visits={},this.sections={},this.write()}};function nn(n){let e=new Map,t=(i,s,r,a)=>{e.has(i)||e.set(i,[]),e.get(i).push({to:s,w:r,forward:a})};for(let i of n.edges)t(i.s,i.t,i.w,!0),t(i.t,i.s,i.w,!1);return e}function Ac(n,e,t,i=nn(n)){if(e===t)return{stops:[e],legs:[]};let s=new Map([[e,0]]),r=new Map,a=new Set,o=[[0,e]];for(;o.length;){let c=0;for(let u=1;u<o.length;u++)o[u][0]<o[c][0]&&(c=u);let[h,p]=o.splice(c,1)[0];if(!a.has(p)){if(a.add(p),p===t)break;for(let u of i.get(p)||[]){if(a.has(u.to))continue;let d=h+1+(u.forward?0:.04)+.04/(1+u.w);d<(s.get(u.to)??1/0)&&(s.set(u.to,d),r.set(u.to,{from:p,link:u}),o.push([d,u.to]))}}}if(!r.has(t))return null;let l=[];for(let c=t;c!==e;c=r.get(c).from){let{from:h,link:p}=r.get(c);l.unshift({from:h,to:c,forward:p.forward,w:p.w,across:n.pages[h].cluster!==n.pages[c].cluster})}return{stops:[e,...l.map(c=>c.to)],legs:l}}function Yf(n,e,t,i=nn(n)){if(e.includes(t))return e;if(!e.length)return[t];let s=Ac(n,e.at(-1),t,i);return s?[...e,...s.stops.slice(1).filter(r=>!e.includes(r))]:[...e,t]}function Zf(n,e,{start:t=null,adjacency:i=nn(n)}={}){let s=[...new Set(e)];if(!s.length)return[];let r=u=>n.pages[u].importance??0,a=(u,d)=>(i.get(u)||[]).some(m=>m.to===d),o=u=>u.reduce((d,m,x)=>d+(x>0&&a(u[x-1],m)?1:0),0),l=u=>{let d=new Set(s),m=t!=null&&d.has(t)?t:s.reduce((f,g)=>r(g)>r(f)?g:f),x=[m];for(d.delete(m);d.size;){let f=new Set([m]),g=[m],v=null,w=-1/0,_=null;for(let M=1;g.length&&(_==null||M<=_+1);M++){let S=[];for(let y of g)for(let{to:b}of i.get(y)||[]){if(f.has(b)||(f.add(b),S.push(b),!d.has(b)))continue;_??=M;let C=(i.get(b)||[]).filter(L=>d.has(L.to)).length,R=-M*10+(n.pages[b].cluster===n.pages[m].cluster?15:0)+r(b)*2-C*u;R>w&&(w=R,v=b)}g=S}m=v??[...d].reduce((M,S)=>r(S)>r(M)?S:M),x.push(m),d.delete(m)}return x},c=s.length>300?[.5]:[0,.25,.5,1,2],h=null,p=-1;for(let u of c){let d=l(u),m=o(d);m>p&&(p=m,h=d)}return h}function Nb(n,e,t=nn(n),i=6){let s=new Set(e.pageIds),r=c=>n.pages[c].importance??0,a=[...e.pageIds].sort((c,h)=>r(h)-r(c));if(!a.length)return[];let o=[a[0]],l=new Set(o);for(;o.length<Math.min(i,s.size);){let c=null;for(let h=o.length-1;h>=0&&c==null;h--){let p=(t.get(o[h])||[]).filter(u=>s.has(u.to)&&!l.has(u.to));p.length&&(c=p.reduce((u,d)=>r(d.to)>r(u.to)?d:u).to)}if(c==null&&(c=a.find(h=>!l.has(h))),c==null)break;o.push(c),l.add(c)}return o}function Kf(n,e,t){let i=nn(n),s=[];for(let[p,u]of(n.expeditions||[]).entries())s.push({id:`authored:${p}`,kind:"authored",title:u.title,description:u.description,stops:u.stops});let r=p=>p.map(u=>({page:u,note:""})),a=p=>n.pages[p].importance??0,o=p=>[...p].sort((u,d)=>a(d)-a(u));if(e.fresh.size){let p=o(e.fresh).filter(u=>n.pages[u].cluster>=0).slice(0,12);p.length&&s.push({id:"new",kind:"new",title:t.expNew,description:t.expNewSub,stops:r(p)})}if(n.clusters.length>1){let p=n.clusters.map(d=>o(d.pageIds)[0]).filter(d=>d!=null),u=n.star!=null?[n.star]:[];s.push({id:"grand",kind:"grand",title:t.expGrand,description:t.expGrandSub,stops:r([...u,...p])})}for(let p of n.clusters){let u=Nb(n,p,i);u.length>1&&s.push({id:`world:${p.id}`,kind:"world",title:t.expWorld(p.name),description:t.expWorldSub,stops:r(u)})}let l=new Map;for(let p of n.ghosts||[])for(let u of p.refs)n.pages[u].cluster>=0&&l.set(u,(l.get(u)||0)+1);if(l.size){let p=[...l.entries()].sort((u,d)=>d[1]-u[1]).slice(0,8).map(([u])=>u);s.push({id:"sites",kind:"sites",title:t.expSites,description:t.expSitesSub,stops:r(p)})}let c=o(n.pages.filter(p=>p.cluster>=0&&!e.isVisited(p.id)).map(p=>p.id)).slice(0,6);return n.pages.some(p=>e.isVisited(p.id))&&c.length>1&&s.push({id:"blank",kind:"blank",title:t.expBlank,description:t.expBlankSub,stops:r(c)}),s}var Fb=[["summary",/^(zusammenfassung|summary|tl;?dr|abstract|kurzfassung|overview|überblick)$/i],["sources",/^(quellen?|sources?|references?|referenzen|belege)$/i],["updated",/^(zuletzt aktualisiert|last updated|updated|aktualisiert|stand)$/i]],Ob=/^\*\*([^*\n]{1,40}?)(:?)\*\*(:?)[ \t]*(\S[\s\S]*)$/;function Jf(n){let e=Ob.exec(n.trim());if(!e||!(e[2]||e[3]))return null;let t=e[1].trim(),i=e[4].trim(),s=Fb.find(([,r])=>r.test(t))?.[0]??"other";return s==="other"&&(i.length>120||i.includes(`
`))?null:{label:t,kind:s,value:i}}function jf(n){let e=n.replace(/^\s*#[ \t]+[^\n]*(\n|$)/,"").replace(/^\s+/,""),t=[];for(;e;){let i=e.search(/\n[ \t]*\n/),s=i<0?e:e.slice(0,i),a=s.split(`
`).map(Jf),o=a.every(Boolean)?a:[Jf(s)];if(!o[0])break;t.push(...o),e=i<0?"":e.slice(i).replace(/^\s+/,"")}return t.length&&(e=e.replace(/^[-*_]{3,}[ \t]*(\n|$)/,"").replace(/^\s+/,"")),{facts:t,body:e}}var Ub=/^\(\s*(?:Quellen?|Sources?)\s*:\s*/i;function Qf(n){return n.search(/\(\s*(?:Quellen?|Sources?)\s*:/i)}function e0(n){let e=Ub.exec(n);if(!e)return null;let t=1,i=[],s="";for(let r=e[0].length;r<n.length;r++){let a=n[r];if(a===`
`)return null;if(a==="("&&t++,a===")"&&--t===0){i.push(s);let o=i.map(l=>l.trim()).filter(Boolean);return o.length?{raw:n.slice(0,r+1),parts:o}:null}a===";"&&t===1?(i.push(s),s=""):s+=a}return null}var Bb=[["warn",/warn|achtung|vorsicht|caution|danger|risik|gefahr/i],["tip",/tip|hilfe|hint|empfehlung/i],["example",/beispiel|example/i],["key",/wichtig|important|merke|key/i],["ask",/frage|question|faq|offen/i]];function _u(n){return Bb.find(([,e])=>e.test(n))?.[0]??"note"}function es(n){return Math.max(1,Math.round(n/220))}function t0(n){return Math.min(25,Math.max(1.5,n/6))}function i0(n){if(!n.length)return null;let e=new Map;for(let i of n)e.set(i,(e.get(i)||0)+1);let t=[...e.keys()].sort((i,s)=>i-s);return t.find(i=>e.get(i)>1)??t[0]}var wu=150,zb=40,Rc=class{constructor(e,t){this.ui=e,this.map=t,this.active=!1,this.stops=[],this.history=[],this.title=null,this.unreadOnly=!0,this.note="",this.next=[],this.node=T("div",{class:"plan"})}get adjacency(){return this.ui.adjacency??=nn(this.ui.graph)}get last(){return this.stops.at(-1)??null}visitable(e){let{graph:t}=this.ui;return e!==t.comet&&e!==t.star&&t.pages[e].cluster>=0}enter(e=null){this.active=!0,this.map.select(null),this.map.sheet.classList.add("planning"),e!=null&&!this.stops.includes(e)&&(this.stops.length?this.add(e):this.change([e])),this.afterChange()}exit(){this.active=!1,this.map.sheet.classList.remove("planning"),this.map.dirty=!0}toggle(e){this.active?this.exit():this.enter(e)}change(e,t=null){this.history.push({stops:this.stops,title:this.title}),this.history.length>40&&this.history.shift(),this.stops=e,this.title=t}undo(){let e=this.history.pop();e&&(this.stops=e.stops,this.title=e.title,this.note="",this.afterChange())}pick(e){if(this.visitable(e)){if(e===this.last){this.remove(e);return}if(this.stops.includes(e)){this.note=this.ui.t.planAlready(this.ui.graph.pages[e].title),this.render();return}this.add(e)}}add(e){let{graph:t,t:i}=this.ui,s=this.stops.length,r=Yf(t,this.stops,e,this.adjacency).filter(l=>l===e||this.visitable(l)||this.stops.includes(l)),a=r.slice(s,-1);this.note=a.length?i.planBridged(t.pages[e].title,a.map(l=>t.pages[l].title).join(", ")):"",this.change(r),this.afterChange();let o=t.pages[e];o.cluster!==this.map.planet.index&&this.ui.world.planets[o.cluster]&&this.map.show(this.ui.world.planets[o.cluster],!1)}remove(e){this.note="",this.change(this.stops.filter(t=>t!==e)),this.afterChange()}clear(){this.note="",this.change([]),this.afterChange()}planThrough(e,t){let{logbook:i,currentPage:s,t:r}=this.ui,a=e.filter(h=>!i.isVisited(h)),l=this.unreadOnly&&a.length>0?a:e,c=this.last!=null&&l.includes(this.last)?this.last:s!=null&&l.includes(s)?s:null;this.note=this.unreadOnly&&!a.length?r.planAllRead:"",this.change(Zf(this.ui.graph,l,{start:c,adjacency:this.adjacency}),t),this.afterChange()}planWorld(){let{planet:e}=this.map;this.planThrough(e.cluster.pageIds.filter(t=>this.visitable(t)),this.ui.t.planTitleWorld(e.cluster.name))}planWiki(){let{graph:e,t}=this.ui;this.planThrough(e.pages.filter(i=>this.visitable(i.id)).map(i=>i.id),t.planTitleWiki)}start(){let{graph:e,journey:t}=this.ui;if(!this.stops.length)return;let i=e.pages[this.stops[0]].title,s=e.pages[this.last].title,r=this.title??(this.stops.length>1?`${i} \u2192 ${s}`:i),a=this.stops.map(o=>({page:o,note:""}));this.exit(),this.stops=[],this.history=[],this.title=null,this.note="",this.map.close(),t.start({title:r,stops:a})}afterChange(){this.computeNext(),this.map.dirty=!0,this.map.renderTabs(),this.render()}computeNext(){let{graph:e,logbook:t}=this.ui,i=o=>(t.isVisited(o)?0:1)+(e.pages[o].importance??0);if(this.last==null){let o=this.map.planet.cluster.pageIds.filter(l=>this.visitable(l));this.next=[...o].sort((l,c)=>i(c)-i(l)).slice(0,5).map(l=>({id:l}));return}let s=new Map;for(let o of this.adjacency.get(this.last)||[]){if(!this.visitable(o.to)||this.stops.includes(o.to))continue;(!s.get(o.to)||o.forward)&&s.set(o.to,{id:o.to,forward:o.forward})}let r=this.map.planet?.index,a=o=>e.pages[o].cluster===r?2:0;this.next=[...s.values()].sort((o,l)=>a(l.id)+i(l.id)-a(o.id)-i(o.id))}litHere(){return this.next.map(e=>e.id).filter(e=>this.map.data?.byId.has(e))}render(){if(!this.active)return;let{ui:e,map:t}=this,{t:i,graph:s,logbook:r,world:a}=e,o=t.planet;if(!o)return;let l=this.stops.reduce((S,y)=>S+es(s.pages[y].words),0),c=new Set(this.stops.map(S=>s.pages[S].cluster)),h=o.cluster.pageIds.filter(S=>this.visitable(S)),p=s.pages.filter(S=>this.visitable(S.id)).length,u=S=>S.filter(y=>!r.isVisited(y)).length,d=this.stops.length===0?i.planHintStart:this.next.length?i.planHintNext(s.pages[this.last].title,this.next.length):i.planHintEnd(s.pages[this.last].title),m=T("div",{class:"plan-head"},T("div",{},T("div",{class:"plan-kicker",text:i.planKicker}),T("div",{class:"plan-hint",text:d}),this.note?T("div",{class:"plan-note",text:this.note}):null),T("button",{class:"icon-btn",html:Ye.close,title:i.planLeave,"aria-label":i.planLeave,onclick:()=>this.exit()})),x=S=>this.unreadOnly&&u(S)||S.length,f=T("div",{class:"plan-suggest"},T("div",{class:"plan-h",text:i.planSuggest}),T("button",{class:"plan-auto",onclick:()=>this.planWorld()},Di(o,26),T("span",{text:i.planAllWorld(x(h),o.cluster.name)})),a.planets.length>1?T("button",{class:"plan-auto",onclick:()=>this.planWiki()},T("span",{class:"plan-auto-icon",html:Ye.compass}),T("span",{text:i.planAllWiki(this.unreadOnly&&u(s.pages.filter(S=>this.visitable(S.id)).map(S=>S.id))||p)})):null,T("label",{class:"plan-check"},T("input",{type:"checkbox",checked:this.unreadOnly?!0:null,onchange:S=>{this.unreadOnly=S.target.checked,this.render()}}),i.planUnreadOnly)),g=[];if(this.stops.length){g.push(T("div",{class:"plan-h plan-h-row"},T("span",{text:i.planRoute(this.stops.length,l)}),T("button",{class:"plan-link",text:i.planUndo,disabled:this.history.length?null:!0,onclick:()=>this.undo()}),T("button",{class:"plan-link",text:i.planClear,onclick:()=>this.clear()}))),g.push(T("ol",{class:"plan-stops"},this.stops.slice(0,wu).map((y,b)=>{let C=s.pages[y],R=C.cluster!==o.index?a.planets[C.cluster]:null;return T("li",{class:`plan-stop${r.isVisited(y)?" read":""}`},T("span",{class:"plan-num",text:String(b+1)}),T("button",{class:"plan-stop-name",onclick:()=>{R&&t.show(R,!1),t.bringIntoView(t.data.byId.get(y))},onmouseenter:()=>t.setHover(t.data?.byId.get(y)??null),onmouseleave:()=>t.setHover(null)},R?Di(R,16):null,T("span",{text:C.title})),T("span",{class:"plan-time",text:`${es(C.words)} ${i.minutes}`}),T("button",{class:"plan-x",html:Ye.close,title:i.planRemove,"aria-label":`${i.planRemove}: ${C.title}`,onclick:()=>this.remove(y)}))}))),this.stops.length>wu&&g.push(T("div",{class:"plan-more",text:i.planMore(this.stops.length-wu)}));let S=this.stops.filter((y,b)=>b>0&&!(this.adjacency.get(this.stops[b-1])||[]).some(C=>C.to===y)).length;S&&g.push(T("div",{class:"plan-more",text:i.planDotted(S)}))}let v=this.next.slice(0,zb).map(({id:S,forward:y})=>{let b=s.pages[S],C=b.cluster!==o.index?a.planets[b.cluster]:null,R=[C?`${i.starship} \xB7 ${C.cluster.name}`:i.tierNames[b.tier],`${es(b.words)} ${i.minutes}`,r.isVisited(S)?`\u2713 ${i.visited}`:"",this.last!=null&&y===!1?i.planPointsHere:""].filter(Boolean).join(" \xB7 ");return T("button",{class:"plan-next",title:b.summary||b.title,onclick:()=>this.pick(S),onmouseenter:()=>t.setHover(t.data?.byId.get(S)??null),onmouseleave:()=>t.setHover(null)},C?Di(C,26):T("span",{class:"plan-plus",text:"+"}),T("span",{class:"plan-next-text"},T("span",{class:"plan-next-title",text:b.title}),T("span",{class:"plan-next-sub",text:R})))}),w=v.length?[T("div",{class:"plan-h",text:this.stops.length?i.planReachable(this.next.length):i.planStartAt}),T("div",{class:"plan-nexts"},v)]:[],M=this.scrollBox?.scrollTop??0;this.scrollBox=T("div",{class:"plan-scroll"},...w,...this.stops.length?g:[],f),this.node.replaceChildren(m,this.scrollBox,T("button",{class:"plan-go",disabled:this.stops.length?null:!0,onclick:()=>this.start()},T("span",{text:this.stops.length?i.planStart(this.stops.length,c.size):i.planStartEmpty}),T("span",{html:Ye.next}))),this.scrollBox.scrollTop=M}};var qa=-.081106,Xa=893e-6,Ya=.003796,Cc=Math.sqrt(3)/2,Cs=2.7064,ts=1.3173;function Dr(n,e,t=[0,0]){let i=Math.asin(Cc*Math.sin(e)),s=i*i,r=s*s*s;return t[0]=n*Math.cos(i)/(Cc*(1.340264+3*qa*s+r*(7*Xa+9*Ya*s))),t[1]=i*(1.340264+qa*s+r*(Xa+Ya*s)),t}function Su(n){let e=n/1.340264;for(let t=0;t<8;t++){let i=e*e,s=i*i*i,r=e*(1.340264+qa*i+s*(Xa+Ya*i))-n,a=1.340264+3*qa*i+s*(7*Xa+9*Ya*i);e-=r/a}return e}function n0(n,e,t=[0,0]){if(Math.abs(e)>ts)return null;let i=Su(e),s=i*i,r=s*s*s,a=n*Cc*(1.340264+3*qa*s+r*(7*Xa+9*Ya*s))/Math.cos(i);return Math.abs(a)>Math.PI?null:(t[0]=a,t[1]=Math.asin(Math.sin(i)/Cc),t)}function Za(n){let e=n;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function s0(n){if(!n.length)return 0;let e=[...n].map(Za).sort((s,r)=>s-r),t=-1,i=0;for(let s=0;s<e.length;s++){let r=e[s],a=s+1<e.length?e[s+1]:e[0]+Math.PI*2;a-r>t&&(t=a-r,i=(r+a)/2)}return Za(i+Math.PI)}var Ps=[3,4,5.4,7.4,10.5],sn={serif:"Georgia, 'Times New Roman', serif",mono:"'IBM Plex Mono', ui-monospace, monospace",ui:"'Space Grotesk', system-ui, sans-serif"},Hb={title:{en:"Chart",de:"Karte"},paper:"#0b0f18",edge:"#33415c",ink:"#e8eefc",soft:"#8a97b4",sea:["#0d1626","#1a2a44"],land:["#26324a","#4a5a78"],contour:"rgba(255,255,255,0.1)",grid:"rgba(255,255,255,0.06)",road:"#9cc4ff",casing:"#14213a",air:"#ffb46b",traffic:"#ffffff",accent:"#9cc4ff",lines:"beam",glyph:"atlas",font:"ui"},rn=(n,e,t)=>Math.max(e,Math.min(t,n)),Mu=n=>n*n*n*(n*(n*6-15)+10),Tu=n=>[1,3,5].map(e=>parseInt(n.slice(e,e+2),16));function Vb(n){let e=(d,m)=>Math.atan2(d,m),t=n.sites.map(d=>({s:d,lon:e(d.dir.x,d.dir.z),lat:Math.asin(rn(d.dir.y,-1,1))})),i=s0(t.map(d=>d.lon)),s=[0,0],r=(d,m,x,f=1)=>(Dr(Za(e(d,x)-i),Math.asin(rn(m/f,-1,1)),s),s),a=t.map(({s:d})=>{let[m,x]=r(d.dir.x,d.dir.y,d.dir.z);return{id:d.page.id,page:d.page,site:d,tier:d.tier,importance:d.importance,x:d.dir.x,y:d.dir.y,z:d.dir.z,mx:m,my:x}}),o=new Map(a.map(d=>[d.id,d])),l=(d,m,x)=>{let f=Math.floor(d.length/m),g=new Float32Array(f*3),v=new Float32Array(f*2),w=new Float32Array(f),_=new Uint8Array(f),M=0,S=0,y=0;for(let b=0;b<f;b++){let[C,R,L]=m===3?[d[b*3],d[b*3+1],d[b*3+2]]:d[b],D=Math.hypot(C,R,L)||1;g[b*3]=C/D,g[b*3+1]=R/D,g[b*3+2]=L/D;let[B,P]=r(C,R,L,D);v[b*2]=B,v[b*2+1]=P;let O=Za(e(C,L)-i);b&&Math.abs(O-y)>Math.PI&&(_[b]=1),w[b]=b?w[b-1]+(_[b]?0:Math.hypot(B-M,P-S)):0,M=B,S=P,y=O}return{...x,n:f,dirs:g,map:v,cum:w,breaks:_,length:w[f-1]||.001}},c=d=>{let m=n.siteByPage.get(d).dir;return[m.x,m.y,m.z]},h=n.roadPaths.map(d=>l([c(d.a),...d.dirs.map(m=>[m.x,m.y,m.z]),c(d.b)],1,{a:d.a,b:d.b,ab:d.ab,ba:d.ba,kind:"road"})),p=n.airPaths.map(d=>l(d.points,3,{a:d.a,b:d.b,ab:d.ab,ba:d.ba,kind:"air"})),u=n.ghostLabels.map(({ghost:d,dir:m})=>{let[x,f]=r(m.x,m.y,m.z);return{ghost:d,mx:x,my:f,x:m.x,y:m.y,z:m.z}});return{centre:i,sites:a,byId:o,roads:h,air:p,ghosts:u,toMap:(d,m,x)=>[...r(d,m,x)]}}var Eu=class{constructor(e,t,i){this.planet=e,this.centre=t,this.w=e.sites.length>120?720:1024,this.h=Math.round(this.w*ts/Cs),this.canvas=document.createElement("canvas"),this.canvas.width=this.w,this.canvas.height=this.h,this.ctx=this.canvas.getContext("2d"),this.image=this.ctx.createImageData(this.w,this.h),this.row=0,this.prevH=new Float32Array(this.w),this.prevBand=new Int8Array(this.w),this.sea=i.sea.map(Tu),this.land=i.land.map(Tu),this.contour=Wb(i.contour),this.sample=[0,0,0]}get done(){return this.row>=this.h}step(e){let t=performance.now(),i=this.row,{w:s,h:r,image:a,planet:o,sea:l,land:c,contour:h,sample:p,prevH:u,prevBand:d}=this;for(;this.row<r&&performance.now()-t<e;){let m=this.row,x=ts*(1-(m+.5)/r*2),f=Su(x),g=0,v=-1;for(let w=0;w<s;w++){let _=(m*s+w)*4,M=Cs*((w+.5)/s*2-1),S=n0(M,x,Gb);if(!S){a.data[_+3]=0;continue}let y=S[0]+this.centre,b=S[1],C=Math.cos(b);o.sampleSurface(C*Math.sin(y),Math.sin(b),C*Math.cos(y),p);let R=p[1],L=p[2],D=R<0&&L<.5,B=D?R:Math.max(R,0)*(1-L),P=D?-1:Math.floor(B*2.6),O,U,H;if(D){let $=rn(-R*2.4,0,1);O=l[1][0]+(l[0][0]-l[1][0])*$,U=l[1][1]+(l[0][1]-l[1][1])*$,H=l[1][2]+(l[0][2]-l[1][2])*$}else{let $=rn(B*.62,0,1);O=c[0][0]+(c[1][0]-c[0][0])*$,U=c[0][1]+(c[1][1]-c[0][1])*$,H=c[0][2]+(c[1][2]-c[0][2])*$;let Z=1+rn((u[w]-B+g-B)*3.4,-.12,.12);O*=Z,U*=Z,H*=Z}if(w>0&&m>0&&(P!==v||P!==d[w])){let $=h[3]*(P===-1||v===-1||d[w]===-1?2.4:.9);O+=(h[0]-O)*$,U+=(h[1]-U)*$,H+=(h[2]-H)*$}a.data[_]=O,a.data[_+1]=U,a.data[_+2]=H,a.data[_+3]=255,u[w]=B,d[w]=P,g=B,v=P}this.row++}return this.row>i&&this.ctx.putImageData(a,0,0,0,i,s,this.row-i),this.row>i}},Gb=[0,0];function Wb(n){let e=/rgba?\(([^)]+)\)/.exec(n);if(!e)return[...Tu(n),1];let[t,i,s,r=1]=e[1].split(",").map(Number);return[t,i,s,r]}function r0(n,e,t,i,s){switch(n.beginPath(),e){case"chip":{n.rect(t-s,i-s,s*2,s*2);break}case"ember":{for(let r=0;r<6;r++){let a=r/6*Math.PI*2+Math.PI/6;n[r?"lineTo":"moveTo"](t+Math.cos(a)*s*1.12,i+Math.sin(a)*s*1.12)}n.closePath();break}case"crystal":{n.moveTo(t,i-s*1.4),n.lineTo(t+s,i),n.lineTo(t,i+s*1.4),n.lineTo(t-s,i),n.closePath();break}case"sun":{for(let a=0;a<24;a++){let o=a/24*Math.PI*2,l=a%2?s*.82:s*1.3;n[a?"lineTo":"moveTo"](t+Math.cos(o)*l,i+Math.sin(o)*l)}n.closePath();break}case"gear":{for(let a=0;a<32;a++){let o=(a+.5)/32*Math.PI*2,l=a%4<2?s*1.22:s*.92;n[a?"lineTo":"moveTo"](t+Math.cos(o)*l,i+Math.sin(o)*l)}n.closePath();break}case"leaf":{n.moveTo(t,i-s*1.45),n.quadraticCurveTo(t+s*1.5,i-s*.2,t,i+s*1.25),n.quadraticCurveTo(t-s*1.5,i-s*.2,t,i-s*1.45);break}default:n.arc(t,i,s,0,Math.PI*2)}}function a0(n,e,t,i,s,{visited:r,tier:a}){let o=e.glyph;r0(n,o,t,i,s),n.fillStyle=r?e.accent:e.paper,n.fill(),n.lineWidth=Math.max(1,s*.2),n.strokeStyle=e.ink,n.stroke();let l=r?e.paper:e.ink;if(a>=3&&(n.fillStyle=l,o==="chip"?n.fillRect(t-s*.42,i-s*.42,s*.84,s*.84):o==="crystal"?(r0(n,"crystal",t,i,s*.42),n.fill()):o==="leaf"?(n.strokeStyle=l,n.lineWidth=Math.max(.8,s*.13),n.beginPath(),n.moveTo(t,i-s),n.lineTo(t,i+s*.9),n.stroke()):(n.beginPath(),n.arc(t,i,s*(a===4?.48:.34),0,Math.PI*2),n.fill())),o==="chip"&&s>3.5){n.strokeStyle=e.ink,n.lineWidth=1,n.beginPath();for(let c=-1;c<=1;c++){let h=c*s*.55;n.moveTo(t+h,i-s),n.lineTo(t+h,i-s-2.5),n.moveTo(t+h,i+s),n.lineTo(t+h,i+s+2.5),n.moveTo(t-s,i+h),n.lineTo(t-s-2.5,i+h),n.moveTo(t+s,i+h),n.lineTo(t+s+2.5,i+h)}n.stroke()}if(o==="spore"&&s>3.5){n.fillStyle=e.ink;for(let c=0;c<5;c++){let h=c/5*Math.PI*2+.4;n.beginPath(),n.arc(t+Math.cos(h)*s*1.5,i+Math.sin(h)*s*1.5,Math.max(.7,s*.13),0,Math.PI*2),n.fill()}}o==="pearl"&&(n.fillStyle="rgba(255,255,255,0.75)",n.beginPath(),n.arc(t-s*.32,i-s*.34,Math.max(.6,s*.22),0,Math.PI*2),n.fill())}function $b(n,e,t,i,s){n.lineCap="round",n.lineJoin="round",n.setLineDash([]);let r=i*(s>1?1.5:1);switch(n.globalAlpha=s<1?.28:1,e.lines){case"atlas":n.strokeStyle=e.casing,n.lineWidth=r+1.6,t(),n.stroke(),n.strokeStyle=e.road,n.lineWidth=r,n.stroke();break;case"trace":n.strokeStyle=e.road,n.globalAlpha*=.22,n.lineWidth=r+3,t(),n.stroke(),n.globalAlpha=s<1?.28:1,n.lineWidth=Math.max(1,r*.6),n.stroke();break;case"magma":n.strokeStyle=e.casing,n.lineWidth=r+2.5,t(),n.stroke(),n.strokeStyle=e.road,n.lineWidth=r*.95,n.stroke(),n.strokeStyle="#ffe2a0",n.lineWidth=Math.max(.6,r*.3),n.stroke();break;case"beam":n.strokeStyle=e.road,n.globalAlpha*=.25,n.lineWidth=r+2.4,t(),n.stroke(),n.globalAlpha=s<1?.28:1,n.lineWidth=Math.max(.8,r*.45),n.stroke();break;case"vein":n.strokeStyle=e.casing,n.lineWidth=r+2.2,t(),n.stroke(),n.strokeStyle=e.road,n.lineWidth=Math.max(.8,r*.6),n.stroke();break;case"caravan":n.strokeStyle=e.road,n.lineWidth=Math.max(1.3,r*.9),n.setLineDash([.1,Math.max(4,r*3)]),t(),n.stroke();break;case"sealane":n.strokeStyle=e.road,n.lineWidth=Math.max(1,r*.7),n.setLineDash([7,5]),t(),n.stroke();break;case"rail":n.strokeStyle=e.road,n.lineWidth=Math.max(1,r*.55),t(),n.stroke(),n.lineCap="butt",n.lineWidth=r+3.4,n.setLineDash([1.3,5.5]),n.stroke();break;default:n.strokeStyle=e.road,n.lineWidth=Math.max(1,r*.7),t(),n.stroke(),n.lineWidth=r+2.4,n.setLineDash([.1,10]),n.stroke();break}n.setLineDash([]),n.globalAlpha=1}var Pc=class{constructor(e){this.ui=e,this.cache=new Map,this.painters=new Map,this.openState=!1,this.morph=1,this.zoom=1,this.panX=0,this.panY=0,this.targetPan=null,this.hover=null,this.selected=null,this.sort="size",this.filter="",this.time=0,this.dirty=!0,this.build()}get isOpen(){return this.openState}build(){let{t:e}=this.ui;this.canvas=T("canvas",{class:"pmap-canvas",tabindex:"-1"}),this.staticLayer=document.createElement("canvas"),this.heading=T("div",{class:"pmap-heading"}),this.tabs=T("nav",{class:"pmap-tabs","aria-label":e.worlds}),this.legend=T("div",{class:"pmap-legend"}),this.tip=T("div",{class:"pmap-tip",role:"status"}),this.card=T("div",{class:"pmap-card"}),this.filterInput=T("input",{class:"pmap-filter",type:"search",placeholder:e.mapFilter,"aria-label":e.mapFilter,autocomplete:"off",spellcheck:"false"}),this.filterInput.addEventListener("input",()=>{this.filter=this.filterInput.value.trim().toLowerCase(),this.renderList()}),this.sortSelect=T("select",{class:"pmap-sort","aria-label":e.mapSort},[["size",e.sortSize],["name",e.sortName],["date",e.sortDate],["new",e.sortNew]].map(([t,i])=>T("option",{value:t,text:i}))),this.sortSelect.addEventListener("change",()=>{this.sort=this.sortSelect.value,this.renderList()}),this.count=T("div",{class:"pmap-count"}),this.list=T("div",{class:"pmap-list",role:"listbox","aria-label":e.mapPlaces}),this.stage=T("div",{class:"pmap-stage"},this.canvas,this.legend,this.card,this.tip),this.planner=new Rc(this.ui,this),this.planButton=T("button",{class:"pmap-plan",title:`${e.planOwn} (E)`,onclick:()=>this.planner.enter(this.selected)},T("span",{html:Ye.compass}),T("span",{class:"pmap-plan-text"},T("b",{text:e.planOwn}),T("span",{text:e.planOwnSub}))),this.sheet=T("div",{class:"pmap-sheet",role:"dialog","aria-modal":"true","aria-label":e.mapTool},T("header",{class:"pmap-head"},this.heading,this.tabs,T("button",{class:"icon-btn",html:Ye.close,title:e.close,"aria-label":e.close,onclick:()=>this.close()})),T("div",{class:"pmap-body"},this.stage,T("aside",{class:"pmap-side"},this.planner.node,this.planButton,T("div",{class:"pmap-controls"},this.filterInput,this.sortSelect),this.count,this.list))),this.root=T("div",{class:"pmap",onclick:t=>{t.target===this.root&&this.close()}},this.sheet),this.ui.root.append(this.root),this.ctx=this.canvas.getContext("2d"),this.staticCtx=this.staticLayer.getContext("2d"),this.bindCanvas()}bindCanvas(){let e=this.canvas,t=null;e.addEventListener("pointerdown",i=>{t={x:i.clientX,y:i.clientY,moved:0},e.setPointerCapture(i.pointerId),this.targetPan=null}),e.addEventListener("pointermove",i=>{let s=e.getBoundingClientRect();if(this.mouse={x:i.clientX-s.left,y:i.clientY-s.top},t){let r=i.clientX-t.x,a=i.clientY-t.y;t.x=i.clientX,t.y=i.clientY,t.moved+=Math.abs(r)+Math.abs(a),t.moved>4&&(this.panX+=r,this.panY+=a,this.limitPan(),this.dirty=!0,e.classList.add("dragging"));return}this.setHover(this.hitAt(this.mouse.x,this.mouse.y))}),e.addEventListener("pointerup",i=>{let s=t&&t.moved<=4;if(t=null,e.classList.remove("dragging"),!s)return;let r=e.getBoundingClientRect(),a=this.hitAt(i.clientX-r.left,i.clientY-r.top);if(this.planner.active){a&&!a.ghost&&this.planner.pick(a.id);return}if(a?.ghost){this.close(),this.ui.openGhost(a.ghost.key);return}a?this.pickCity(a.id):this.select(null)}),e.addEventListener("pointerleave",()=>{t||this.setHover(null)}),e.addEventListener("wheel",i=>{i.preventDefault();let s=e.getBoundingClientRect(),r=i.clientX-s.left,a=i.clientY-s.top,o=this.zoom;this.zoom=rn(this.zoom*Math.exp(-i.deltaY*(i.deltaMode===1?.04:.0014)),1,10);let l=this.zoom/o;this.panX=r-this.W/2-(r-this.W/2-this.panX)*l,this.panY=a-this.H/2-(a-this.H/2-this.panY)*l,this.limitPan(),this.targetPan=null,this.dirty=!0},{passive:!1})}defaultPlanet(){let{world:e,focused:t}=this.ui;return e.rig.mode==="body"&&e.rig.body?.isPlanet?e.rig.body:t||e.hover?.planet||e.planetNearestView()||e.planets[0]}open(e=this.defaultPlanet()){if(!e)return;let{world:t}=this.ui;t.endRide(!1),t.inputLocked=!0,t.keys.clear(),t.pointer.set(-9,-9),this.openState=!0,this.root.classList.add("open"),this.ui.freshToast.classList.remove("show"),this.show(e,!0),this.ui.tip.classList.remove("show"),this.filterInput.value="",this.filter="",this.renderList(),this.lastFocus=document.activeElement,this.canvas.focus({preventScroll:!0})}close(){if(!this.openState)return;this.openState=!1,this.root.classList.remove("open"),this.planner.exit();let{world:e}=this.ui;e.inputLocked=!1,e.paused=!1,this.setHover(null),this.lastFocus?.isConnected&&this.lastFocus.focus({preventScroll:!0})}toggle(){this.openState?this.close():this.open()}show(e,t){let{ui:i}=this;this.planet=e,this.style={...Hb,...e.civ.map||{}},this.cache.has(e)||this.cache.set(e,Vb(e)),this.data=this.cache.get(e),this.painters.has(e)||this.painters.set(e,new Eu(e,this.data.centre,this.style)),this.painter=this.painters.get(e),this.zoom=1,this.panX=0,this.panY=0,this.targetPan=null,this.select(innerWidth>900&&i.currentPage!=null&&this.data.byId.has(i.currentPage)?i.currentPage:null),this.hover=null,this.morph=t&&!i.world.rig.reducedMotion?0:1,this.morphFrom=this.viewBasis(),this.labelWidths=new Map;let s=this.style;for(let[r,a]of Object.entries({paper:s.paper,edge:s.edge,ink:s.ink,soft:s.soft,accent:s.accent,font:sn[s.font]||sn.ui}))this.sheet.style.setProperty(`--m-${r}`,a);this.renderHeading(),this.renderTabs(),this.renderLegend(),this.renderList(),this.planner.active&&(this.planner.computeNext(),this.planner.render()),this.dirty=!0}viewBasis(){let{rig:e}=this.ui.world,t=[0,0,1];e.mode==="body"&&e.body===this.planet&&(t=[e.dir.x,e.dir.y,e.dir.z]);let i=[0,1,0],s=i[0]*t[0]+i[1]*t[1]+i[2]*t[2],r=[i[0]-t[0]*s,i[1]-t[1]*s,i[2]-t[2]*s],a=Math.hypot(...r)||1;return r=r.map(l=>l/a),{u:[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]],v:r,w:t}}renderHeading(){let{ui:e,planet:t,style:i}=this,{lang:s}=e,{done:r,total:a}=e.logbook.progress(t.cluster.pageIds);this.heading.replaceChildren(T("div",{class:"pmap-kicker",text:`${i.title[s]} \xB7 ${t.civ.name[s]}`}),T("h2",{text:t.cluster.name}),T("div",{class:"pmap-explored"},T("span",{class:"pmap-meter",style:`--p:${a?r/a*100:0}%`}),e.t.explored(r,a)))}renderTabs(){let{ui:e,planet:t}=this;this.tabs.childElementCount||this.tabs.append(...e.world.planets.map(i=>T("button",{class:"pmap-tab",title:`${i.cluster.name} \xB7 ${i.civ.name[e.lang]} \xB7 ${i.cluster.keywords.slice(0,4).join(", ")}`,"data-index":i.index,onclick:()=>{i!==this.planet&&this.show(i,!1)}},Di(i,44),T("span",{class:"pmap-tab-text"},T("span",{class:"pmap-tab-name",text:i.cluster.name}),T("span",{class:"pmap-tab-sub"})))));for(let i of this.tabs.children){let s=Number(i.dataset.index)===t.index,r=e.world.planets[Number(i.dataset.index)],{done:a,total:o}=e.logbook.progress(r.cluster.pageIds),l=this.planner.active?this.planner.stops.filter(c=>e.graph.pages[c].cluster===r.index).length:0;i.querySelector(".pmap-tab-sub").textContent=`${r.civ.name[e.lang]} \xB7 ${a}/${o}${l?` \xB7 ${e.t.planOnWorld(l)}`:""}`,i.classList.toggle("on",s),s?i.setAttribute("aria-current","true"):i.removeAttribute("aria-current")}}renderLegend(){let{ui:e,style:t,data:i}=this,{t:s}=e,r=[0,0,0,0,0];for(let l of i.sites)r[l.tier]++;let a=(l,c)=>{let p=T("canvas",{class:"pmap-mark",width:60,height:60,style:"width:30px;height:30px"}),u=p.getContext("2d");return u.scale(2,2),a0(u,t,30/2,30/2,Ps[l],{visited:c,tier:l}),p},o=[4,3,2,1,0].filter(l=>r[l]).map(l=>T("span",{class:"pmap-key"},a(l,!1),`${s.tierNames[l]} `,T("b",{text:String(r[l])})));o.push(T("span",{class:"pmap-key"},a(2,!0),s.visited)),this.legend.replaceChildren(...o)}renderList(){if(!this.data)return;let{ui:e,data:t,filter:i,sort:s}=this,{t:r,logbook:a,lang:o}=e,l=t.sites;i&&(l=l.filter(u=>u.page.title.toLowerCase().includes(i)||u.page.path.toLowerCase().includes(i)||u.page.sections.some(d=>d.title.toLowerCase().includes(i))));let c={size:(u,d)=>d.importance-u.importance,name:(u,d)=>u.page.title.localeCompare(d.page.title,o),date:(u,d)=>String(d.page.updated).localeCompare(String(u.page.updated))||d.importance-u.importance,new:(u,d)=>a.isFresh(d.id)-a.isFresh(u.id)||a.isVisited(u.id)-a.isVisited(d.id)||d.importance-u.importance}[s];l=[...l].sort(c),this.count.textContent=i?r.mapMatches(l.length,t.sites.length):e.countPages(t.sites.length);let h=[],p=null;for(let u of l){s==="size"&&p!==u.tier&&(p=u.tier,h.push(T("div",{class:"pmap-group",text:r.tierNames[u.tier]})));let d=u.page.inDeg+u.page.outDeg,m=T("button",{class:`pmap-row${u.id===this.selected?" sel":""}${a.isVisited(u.id)?" read":""}`,role:"option","aria-selected":u.id===this.selected?"true":"false","data-id":u.id,onclick:()=>this.pickCity(u.id),onmouseenter:()=>this.setHover(u),onmouseleave:()=>this.setHover(null),onfocus:()=>this.setHover(u)},T("span",{class:"pmap-dot",style:`--r:${Math.round(Ps[u.tier]*1.1)}px`}),T("span",{class:"pmap-row-text"},T("span",{class:"pmap-row-title",text:u.page.title}),T("span",{class:"pmap-row-sub",text:s==="date"&&u.page.updated?u.page.updated:`${u.page.words.toLocaleString(o)} ${r.words} \xB7 ${d} ${r.links}`})),a.isFresh(u.id)?T("span",{class:"badge-new",text:a.added.has(u.id)?r.badgeNew:r.badgeChanged}):null);h.push(m)}l.length||h.push(T("div",{class:"empty",text:r.noResults})),this.list.replaceChildren(...h)}pickCity(e){if(this.selected===e){this.go(e);return}this.select(e,!0)}go(e){let{ui:t}=this;this.close(),t.openPage(e)}select(e,t=!1){this.selected=e,this.dirty=!0;for(let i of this.list.querySelectorAll(".pmap-row")){let s=Number(i.dataset.id)===e;i.classList.toggle("sel",s),i.setAttribute("aria-selected",s?"true":"false"),s&&i.scrollIntoView({block:"nearest"})}this.renderCard(),t&&e!=null&&this.bringIntoView(this.data.byId.get(e))}bringIntoView(e){if(!e||!this.W)return;let t=this.sx(e.mx),i=this.sy(e.my),s=90;t>s&&t<this.W-s&&i>s&&i<this.H-s-150||(this.targetPan={x:this.panX+this.W/2-t,y:this.panY+this.H*.42-i})}renderCard(){let{ui:e,selected:t}=this,i=t!=null?this.data?.byId.get(t):null;if(!i){this.card.classList.remove("show");return}let{t:s,lang:r,logbook:a}=e,o=i.page;this.card.replaceChildren(T("div",{class:"pmap-card-kicker",text:s.tierNames[i.tier]}),T("h3",{text:o.title}),o.summary?T("p",{text:o.summary}):null,T("div",{class:"pmap-card-facts"},T("span",{},T("b",{text:o.words.toLocaleString(r)}),` ${s.words}`),T("span",{},T("b",{text:String(o.inDeg)}),` ${s.linksIn} / `,T("b",{text:String(o.outDeg)}),` ${s.linksOut}`),T("span",{},T("b",{text:String(o.sections.length)}),` ${s.sections}`),a.isVisited(i.id)?T("span",{class:"done",text:`\u2713 ${s.visited}`}):null),T("div",{class:"pmap-card-actions"},T("button",{class:"pmap-go",text:s.flyThere,onclick:()=>this.go(i.id)}),T("button",{class:"pmap-route",text:s.routeHere,onclick:()=>{e.shiplog.planTo(i.id)}}),T("button",{class:"pmap-route",text:s.planFromHere,onclick:()=>{this.planner.enter(i.id)}}))),this.card.classList.add("show")}setHover(e){if(this.hover===e)return;this.hover=e,this.dirty=!0,this.canvas.classList.toggle("pointing",!!e);let{ui:t}=this;if(!e){this.tip.classList.remove("show");return}let{t:i}=t;e.ghost?this.tip.replaceChildren(T("div",{class:"k",text:i.site}),T("div",{class:"t",text:e.ghost.title}),T("div",{class:"s",text:i.siteTitle})):this.tip.replaceChildren(T("div",{class:"k",text:i.tierNames[e.tier]}),T("div",{class:"t",text:e.page.title}),e.page.summary?T("div",{class:"s",text:e.page.summary}):""),this.tip.classList.add("show")}hitAt(e,t){if(!this.hits)return null;let i=null,s=1/0;for(let r of this.hits){let a=Math.hypot(r.x-e,r.y-t)-r.r;a<7&&a<s&&(s=a,i=r.item)}return i}fit(){let e=this.canvas.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),i=Math.max(1,Math.round(e.height)),s=Math.min(window.devicePixelRatio||1,2);if(t!==this.W||i!==this.H||s!==this.dpr){this.W=t,this.H=i,this.dpr=s;for(let r of[this.canvas,this.staticLayer])r.width=t*s,r.height=i*s;this.dirty=!0}this.k=Math.min((t-40)/(Cs*2),(i-40)/(ts*2))}limitPan(){let e=Math.max(0,Cs*this.k*this.zoom-this.W*.3),t=Math.max(0,ts*this.k*this.zoom-this.H*.3);this.panX=rn(this.panX,-e,e),this.panY=rn(this.panY,-t,t)}sx(e){return this.W/2+e*this.k*this.zoom+this.panX}sy(e){return this.H/2-e*this.k*this.zoom+this.panY}place(e,t,i,s,r){if(this.morph>=1)return[this.sx(s),this.sy(r),1];let a=Mu(this.morph),{u:o,v:l,w:c}=this.morphFrom,h=Math.min(this.W,this.H)*.44,p=this.W/2+(e*o[0]+t*o[1]+i*o[2])*h,u=this.H/2-(e*l[0]+t*l[1]+i*l[2])*h,d=e*c[0]+t*c[1]+i*c[2];return[p+(this.sx(s)-p)*a,u+(this.sy(r)-u)*a,d>0?1:rn(a*2.5,0,1)]}frame(e){if(!this.openState||!this.planet)return;if(this.time+=e,this.fit(),this.painter&&!this.painter.done&&this.painter.step(11)&&(this.dirty=!0),this.morph<1?(this.morph=Math.min(1,this.morph+e/1.05),this.dirty=!0,this.morph>=1&&(this.ui.world.paused=!0)):this.ui.world.paused=!0,this.targetPan){let s=1-Math.exp(-e*7);this.panX+=(this.targetPan.x-this.panX)*s,this.panY+=(this.targetPan.y-this.panY)*s,this.dirty=!0,Math.hypot(this.targetPan.x-this.panX,this.targetPan.y-this.panY)<.5&&(this.targetPan=null)}this.dirty&&(this.drawStatic(),this.dirty=!1);let{ctx:t,dpr:i}=this;if(t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,this.canvas.width,this.canvas.height),t.drawImage(this.staticLayer,0,0),t.setTransform(i,0,0,i,0,0),this.drawLive(t),this.tip.classList.contains("show")&&this.mouse){let s=this.tip.offsetWidth,r=this.tip.offsetHeight;this.tip.style.transform=`translate(${Math.min(this.mouse.x+14,this.W-s-8)}px, ${Math.min(this.mouse.y+14,this.H-r-8)}px)`}}relatedIds(){if(this.planner.active){let{last:i,stops:s,next:r}=this.planner;if(i==null)return null;let a=new Set(s);for(let o of r)a.add(o.id);return{focus:i,related:a}}let e=this.hover?.id??this.selected;if(e==null)return null;let t=new Set([e]);for(let i of this.ui.world.neighbours.get(e)||[])this.data.byId.has(i)&&t.add(i);return t.size>1?{focus:e,related:t}:null}traceFor(e,t){let{style:i}=this;if(i.lines==="trace"&&this.morph>=1&&!t.breaks.some(s=>s)){let s=this.sx(t.map[0]),r=this.sy(t.map[1]),a=this.sx(t.map[(t.n-1)*2]),o=this.sy(t.map[(t.n-1)*2+1]),l=a-s,c=o-r,h=Math.min(Math.abs(l),Math.abs(c));return()=>{e.beginPath(),e.moveTo(s,r),e.lineTo(s+Math.sign(l)*h,r+Math.sign(c)*h),e.lineTo(a,o)}}return()=>{e.beginPath();for(let s=0;s<t.n;s++){let[r,a]=this.place(t.dirs[s*3],t.dirs[s*3+1],t.dirs[s*3+2],t.map[s*2],t.map[s*2+1]);s===0||t.breaks[s]?e.moveTo(r,a):e.lineTo(r,a)}}}drawStatic(){let{staticCtx:e,W:t,H:i,dpr:s,style:r,data:a,morph:o,ui:l}=this;e.setTransform(s,0,0,s,0,0),e.clearRect(0,0,t,i),e.fillStyle=r.paper,e.fillRect(0,0,t,i);let c=Mu(o);if(this.drawDecor(e),o<1){let d=Math.min(t,i)*.44;e.globalAlpha=1-c,e.fillStyle=r.sea[1],e.beginPath(),e.arc(t/2,i/2,d,0,Math.PI*2),e.fill(),e.strokeStyle=r.edge,e.lineWidth=1.5,e.stroke(),e.globalAlpha=1}this.painter.row>0&&(e.globalAlpha=c*c,e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(this.painter.canvas,this.sx(-Cs),this.sy(ts),Cs*2*this.k*this.zoom,ts*2*this.k*this.zoom),e.globalAlpha=1),c>.3&&this.drawGraticule(e,c);let h=this.relatedIds(),p=Math.pow(this.zoom,.35);e.lineCap="round";for(let d of a.air){let m=h&&(d.a===h.focus||d.b===h.focus);e.globalAlpha=h?m?.95:.14:.55,e.strokeStyle=r.air,e.lineWidth=(m?1.8:1.1)*p,e.setLineDash([2.5*p,4.5*p]),this.traceFor(e,d)(),e.stroke()}e.setLineDash([]),e.globalAlpha=1;for(let d of a.roads){let m=(.9+Math.log2(1+d.ab+d.ba)*.55)*p,x=h&&(d.a===h.focus||d.b===h.focus);$b(e,r,this.traceFor(e,d),m,h?x?2:.5:1)}this.drawJourney(e),this.hits=[];let u=Math.pow(this.zoom,.3);for(let d of[...a.sites].sort((m,x)=>m.importance-x.importance)){let[m,x,f]=this.place(d.x,d.y,d.z,d.mx,d.my);if(m<-30||m>t+30||x<-30||x>i+30)continue;let g=(Ps[d.tier]+(d.tier===4?(d.importance-.82)*6:0))*u;e.globalAlpha=f*(h&&!h.related.has(d.id)?.4:1),(d.id===this.selected||d.id===this.hover?.id)&&(e.fillStyle=r.accent,e.globalAlpha=.28,e.beginPath(),e.arc(m,x,g+7,0,Math.PI*2),e.fill(),e.globalAlpha=f),a0(e,r,m,x,g,{visited:l.logbook.isVisited(d.id),tier:d.tier}),this.hits.push({x:m,y:x,r:g,item:d})}e.globalAlpha=1;for(let d of a.ghosts){let[m,x,f]=this.place(d.x,d.y,d.z,d.mx,d.my);e.globalAlpha=f,e.strokeStyle=r.soft,e.lineWidth=1.4,e.beginPath(),e.moveTo(m-3,x-3),e.lineTo(m+3,x+3),e.moveTo(m+3,x-3),e.lineTo(m-3,x+3),e.stroke(),this.hits.push({x:m,y:x,r:3,item:d})}e.globalAlpha=1,o>=.6&&this.drawLabels(e,h,rn((o-.6)/.4,0,1))}drawDecor(e){let{W:t,H:i,style:s}=this;if(e.save(),e.strokeStyle=s.grid,e.lineWidth=1,s.lines==="atlas"){e.strokeStyle="rgba(70,60,40,0.16)",e.beginPath();for(let r of[.25,.5,.75])e.moveTo(t*r,0),e.lineTo(t*r,i);e.moveTo(0,i/2),e.lineTo(t,i/2),e.stroke()}else if(s.lines==="sealane"){e.beginPath();let r=Math.hypot(t,i);for(let a=0;a<16;a++){let o=a/16*Math.PI*2;e.moveTo(t*.9,i*.14),e.lineTo(t*.9+Math.cos(o)*r,i*.14+Math.sin(o)*r)}e.stroke()}else if(s.lines==="trace"){e.fillStyle=s.grid;for(let r=12;r<t;r+=24)for(let a=12;a<i;a+=24)e.fillRect(r,a,1.5,1.5)}else if(s.lines==="caravan"||s.lines==="rail"){e.beginPath();for(let r=80;r<Math.hypot(t,i);r+=80)e.moveTo(t/2+r,i/2),e.arc(t/2,i/2,r,0,Math.PI*2);e.stroke()}e.restore()}drawGraticule(e,t){e.save(),e.globalAlpha=t,e.strokeStyle=this.style.grid,e.lineWidth=1,e.beginPath();let i=[0,0];for(let s=-180;s<=180;s+=30)for(let r=-90;r<=90;r+=6){Dr(s*Math.PI/180,r*Math.PI/180,i);let a=this.sx(i[0]),o=this.sy(i[1]);r===-90?e.moveTo(a,o):e.lineTo(a,o)}for(let s=-60;s<=60;s+=30)for(let r=-180;r<=180;r+=10){Dr(r*Math.PI/180,s*Math.PI/180,i);let a=this.sx(i[0]),o=this.sy(i[1]);r===-180?e.moveTo(a,o):e.lineTo(a,o)}e.stroke(),e.strokeStyle=this.style.edge,e.beginPath();for(let s=-90;s<=90;s+=3){Dr(Math.PI,s*Math.PI/180,i);let r=this.sx(i[0]),a=this.sy(i[1]);s===-90?e.moveTo(r,a):e.lineTo(r,a)}for(let s=90;s>=-90;s-=3)Dr(-Math.PI,s*Math.PI/180,i),e.lineTo(this.sx(i[0]),this.sy(i[1]));e.closePath(),e.stroke(),e.restore()}drawJourney(e){let{journey:t}=this.ui,{planner:i,style:s,data:r,zoom:a}=this,o=i.active?i.stops:t.active?t.stops.map(u=>u.page):null;if(!o?.length||this.morph<.5)return;let l=i.active?o.length-1:t.at,c=o.map((u,d)=>({i:d,s:r.byId.get(u)})).filter(u=>u.s);if(!c.length)return;let h=(u,d)=>r.roads.find(m=>m.a===u&&m.b===d||m.a===d&&m.b===u)??r.air.find(m=>m.a===u&&m.b===d||m.a===d&&m.b===u);e.save(),e.lineCap="round",e.lineJoin="round";for(let u=1;u<c.length;u++){if(c[u].i!==c[u-1].i+1)continue;let d=c[u-1].s,m=c[u].s,x=h(d.id,m.id),f=x?this.traceFor(e,x):()=>{e.beginPath(),e.moveTo(this.sx(d.mx),this.sy(d.my)),e.lineTo(this.sx(m.mx),this.sy(m.my))},g=!i.active&&c[u].i>l;e.setLineDash([]),e.strokeStyle=s.paper,e.lineWidth=6.5,e.globalAlpha=.85,f(),e.stroke(),e.globalAlpha=1,e.strokeStyle=s.accent,e.lineWidth=3.4,e.setLineDash(g||!x?[1,7]:[]),f(),e.stroke()}e.setLineDash([]),e.textAlign="center",e.textBaseline="middle";let p=c.length>40&&a<2.2;for(let{i:u,s:d}of c){let m=this.sx(d.mx),x=this.sy(d.my)-Ps[d.tier]-13;if(p&&u!==l&&u!==o.length-1&&u!==0)continue;let f=u===l,g=u+1>99?11.5:9.5;e.fillStyle=f?s.accent:s.paper,e.strokeStyle=s.accent,e.lineWidth=1.6,e.beginPath(),e.arc(m,x,g,0,Math.PI*2),e.fill(),e.stroke(),e.font=`600 ${u+1>99?10:11}px ${sn.ui}`,e.fillStyle=f?s.paper:s.ink,e.fillText(String(u+1),m,x+.5)}e.restore()}drawLabels(e,t,i){let{data:s,style:r,zoom:a,W:o,H:l,ui:c}=this,h=s.sites.length<=14||a>=3?0:a>=1.7?1:2,p=[];for(let m of s.sites){let x=m.id===this.selected||m.id===this.hover?.id||m.id===c.currentPage;m.tier<h&&!x&&!(t&&t.related.has(m.id))||p.push({s:m,score:(x?100:0)+(t?.related.has(m.id)?10:0)+m.tier*2+m.importance})}p.sort((m,x)=>x.score-m.score);let u=[];for(let m of this.hits)u.push({l:m.x-m.r,r:m.x+m.r,t:m.y-m.r,b:m.y+m.r,city:m.item.id});let d=Math.pow(a,.3);e.textBaseline="middle",e.lineJoin="round";for(let{s:m}of p){let x=this.sx(m.mx),f=this.sy(m.my);if(x<-60||x>o+60||f<-20||f>l+20)continue;let g=[10.5,11,12,13.5,15.5][m.tier],w=`${m.tier>=3?600:400} ${g}px ${sn[r.font]||sn.ui}`;e.font=w;let _=m.page.title.length>34?`${m.page.title.slice(0,32)}\u2026`:m.page.title,M=e.measureText(_).width,S=Ps[m.tier]*d+5,y=[[x+S,f,"left"],[x-S-M,f,"left"],[x-M/2,f+S+g*.55,"left"],[x-M/2,f-S-g*.55,"left"]];for(let[b,C]of y){let R={l:b-2,r:b+M+2,t:C-g*.62,b:C+g*.62};if(!(R.l<2||R.r>o-2||R.t<2||R.b>l-2)&&!u.some(L=>L.city!==m.id&&R.l<L.r&&R.r>L.l&&R.t<L.b&&R.b>L.t)){u.push(R),e.globalAlpha=i*(t&&!t.related.has(m.id)?.6:1),e.strokeStyle=r.paper,e.lineWidth=3.2,e.strokeText(_,b,C),e.fillStyle=m.id===this.selected?r.accent:r.ink,e.fillText(_,b,C);break}}}e.globalAlpha=1}drawLive(e){let{data:t,style:i,time:s,morph:r,ui:a,planet:o}=this,l=Mu(r);if(l>.5){let h=this.relatedIds();e.fillStyle=i.traffic;let p=Math.pow(this.zoom,.3),u=(m,x,f,g)=>{for(let v=0;v<f;v++){let w=(s*g/m.length+v/f+m.a%7*.13)%1,_=(x>0?w:1-w)*m.length,M=0,S=m.n-1;for(;S-M>1;){let L=M+S>>1;m.cum[L]<_?M=L:S=L}if(m.breaks[S])continue;let y=m.cum[S]-m.cum[M]||1,b=(_-m.cum[M])/y,C=this.sx(m.map[M*2]+(m.map[S*2]-m.map[M*2])*b),R=this.sy(m.map[M*2+1]+(m.map[S*2+1]-m.map[M*2+1])*b);e.globalAlpha=h&&m.a!==h.focus&&m.b!==h.focus?.2:1,e.beginPath(),e.arc(C,R,(m.kind==="air"?1.1:1.45)*p,0,Math.PI*2),e.fill()}};for(let m of[...t.roads,...t.air]){let x=m.kind==="air"?.16:.09;m.ab>0&&u(m,1,Math.min(6,1+Math.round(Math.log2(1+m.ab)*1.3)),x),m.ba>0&&u(m,-1,Math.min(6,1+Math.round(Math.log2(1+m.ba)*1.3)),x)}if(e.globalAlpha=1,this.planner.active){let m=s*.85%1;for(let x of this.planner.litHere()){let f=t.byId.get(x),g=this.sx(f.mx),v=this.sy(f.my),w=Ps[f.tier]*p+3;e.strokeStyle=i.accent,e.lineWidth=2,e.globalAlpha=.9,e.beginPath(),e.arc(g,v,w,0,Math.PI*2),e.stroke(),e.globalAlpha=(1-m)*.8,e.beginPath(),e.arc(g,v,w+m*13,0,Math.PI*2),e.stroke()}e.globalAlpha=1}let d=s*.7%1;for(let m of t.sites){if(!a.logbook.isFresh(m.id))continue;let x=this.sx(m.mx),f=this.sy(m.my),g=Ps[m.tier]*p+3+d*13;e.strokeStyle="#ffb21e",e.lineWidth=2,e.globalAlpha=1-d,e.beginPath(),e.arc(x,f,g,0,Math.PI*2),e.stroke()}e.globalAlpha=1}let{rig:c}=a.world;if(c.mode==="body"&&c.body===o){let h=c.dir,[p,u]=t.toMap(h.x,h.y,h.z),[d,m]=this.place(h.x,h.y,h.z,p,u),x=.5+.5*Math.sin(s*3);if(e.strokeStyle=i.accent,e.fillStyle=i.accent,e.lineWidth=2,e.globalAlpha=.5+x*.3,e.beginPath(),e.arc(d,m,10+x*4,0,Math.PI*2),e.stroke(),e.globalAlpha=1,e.lineWidth=1.5,e.strokeStyle=i.paper,e.beginPath(),e.arc(d,m,4.5,0,Math.PI*2),e.fill(),e.stroke(),l>=1){e.font=`600 11px ${sn.ui}`,e.textBaseline="alphabetic";let f=a.t.youAreHere;e.lineWidth=3,e.strokeStyle=i.paper,e.strokeText(f,d+15,m-17),e.fillStyle=i.accent,e.fillText(f,d+15,m-17)}}}};var kc=class{constructor(e){this.ui=e,this.stops=null,this.at=0,this.hud=T("div",{class:"journey",role:"region","aria-label":e.t.journeyLabel}),e.root.append(this.hud)}get active(){return!!this.stops}start(e){this.title=e.title,this.stops=e.stops,this.at=0,this.finished=!1,document.body.classList.add("journeying"),this.ui.world.setJourneyStops(this.stops.map(t=>t.page)),this.go(e.at??0)}go(e){if(!this.stops)return;this.at=Math.max(0,Math.min(this.stops.length-1,e));let t=this.stops[this.at];this.ui.openPage(t.page),this.save(),this.render()}save(){this.ui.logbook.saveTrip({title:this.title,stops:this.stops,at:this.at})}next(){if(!this.stops)return;if(this.at<this.stops.length-1){this.go(this.at+1);return}let{title:e,stops:t}=this;this.end(),this.ui.announce(this.ui.t.journeyFinished(e,t.length))}prev(){this.stops&&this.go(this.at-1)}end(){this.stops&&(this.stops=null,this.ui.logbook.clearTrip(),document.body.classList.remove("journeying"),this.ui.world.setJourneyStops(null),this.hud.classList.remove("show"))}noticePage(e){if(!this.stops||this.stops[this.at]?.page===e)return;let t=this.stops.findIndex(i=>i.page===e);t>=0&&(this.at=t,this.save(),this.render())}legLine(){let{ui:e,stops:t,at:i}=this;if(i===0)return null;let{t:s,graph:r}=e,a=r.pages[t[i-1].page],o=r.pages[t[i].page];e.adjacency??=nn(r);let l=(e.adjacency.get(a.id)||[]).find(h=>h.to===o.id);if(l)return(a.cluster!==o.cluster?s.legShip:l.forward?s.legFollows:s.legPoints)(a.title);let c=Ac(r,a.id,o.id,e.adjacency);return c?s.legVia(a.title,c.stops.slice(1,-1).map(h=>r.pages[h].title).join(", ")):s.legJump(a.title)}render(){let{ui:e,stops:t,at:i}=this,{t:s,graph:r,world:a}=e,o=t[i],l=r.pages[o.page],c=t[i+1],h=c?r.pages[c.page]:null,u=h&&l.cluster>=0&&l.cluster===h.cluster&&a.planets[l.cluster]?.traffic.vehicleOn(o.page,c.page),d=18,m=t.length>d*2?Math.max(0,Math.min(t.length-d*2,i-d)):0,x=t.slice(m,m+d*2).map((g,v)=>{let w=m+v;return T("button",{class:`journey-dot${w===i?" here":""}${w<i?" past":""}`,title:r.pages[g.page].title,"aria-label":r.pages[g.page].title,style:`--c:${e.accentOf(r.pages[g.page])}`,onclick:()=>this.go(w)})}),f=this.legLine();this.hud.replaceChildren(...[T("div",{class:"journey-top"},T("span",{class:"journey-title",text:this.title}),T("span",{class:"journey-count",text:s.stopOf(i+1,t.length)}),T("button",{class:"icon-btn",html:Ye.close,title:s.endJourney,"aria-label":s.endJourney,onclick:()=>this.end()})),T("div",{class:"journey-dots"},x),f?T("div",{class:"journey-leg",text:f}):null,T("div",{class:"journey-note",text:o.note||l.summary||l.title}),T("div",{class:"journey-actions"},T("button",{class:"journey-btn",html:Ye.prev,title:`${s.prevStop} (,)`,"aria-label":s.prevStop,disabled:i===0?!0:null,onclick:()=>this.prev()}),u?T("button",{class:"journey-btn ride",text:s.ride,onclick:()=>e.rideTo(o.page,c.page)}):null,T("button",{class:"journey-btn primary",title:`${s.nextStop} (.)`,onclick:()=>this.next()},h?`${s.nextStop}: ${h.title}`:s.journeyDone,T("span",{html:Ye.next})))].filter(Boolean)),this.hud.classList.add("show")}},Ic=class{constructor(e){this.ui=e;let{t}=e;this.tab="expeditions",this.tabs=T("div",{class:"log-tabs",role:"tablist"}),this.body=T("div",{class:"log-body"}),this.panel=T("div",{class:"panel log-panel",role:"dialog","aria-modal":"true","aria-label":t.logTitle},T("div",{class:"log-head"},this.tabs,T("button",{class:"icon-btn",html:Ye.close,title:t.close,"aria-label":t.close,onclick:()=>this.close()})),this.body),this.overlay=T("div",{class:"overlay",onclick:i=>{i.target===this.overlay&&this.close()}},this.panel),e.root.append(this.overlay),this.routeFrom=null,this.routeTo=null}get isOpen(){return this.overlay.classList.contains("open")}open(e=this.tab){this.tab=e,this.ui.currentPage!=null&&this.routeFrom==null&&(this.routeFrom=this.ui.currentPage),this.overlay.classList.add("open"),this.render()}close(){this.overlay.classList.remove("open")}toggle(){this.isOpen?this.close():this.open()}planTo(e){this.routeTo=e,this.routeFrom=this.ui.currentPage??this.routeFrom,this.routeFrom===e&&(this.routeFrom=null),this.open("route")}render(){let{t:e}=this.ui,t=[["expeditions",e.tabExpeditions],["route",e.tabRoute],["log",e.tabLog]];this.tabs.replaceChildren(...t.map(([i,s])=>T("button",{class:`log-tab${this.tab===i?" on":""}`,role:"tab","aria-selected":this.tab===i?"true":"false",text:s,onclick:()=>{this.tab=i,this.render()}}))),this.body.replaceChildren(...{expeditions:()=>this.renderExpeditions(),route:()=>this.renderRoute(),log:()=>this.renderLog()}[this.tab]())}renderExpeditions(){let{ui:e}=this,{t,graph:i,logbook:s}=e,r=Kf(i,s,t),a=[],o=e.journey.active?null:s.savedTrip();return o&&a.push(T("button",{class:"trip trip-resume",onclick:()=>{this.close(),e.map.close(),e.journey.start(o)}},T("span",{class:"trip-icon",html:Ye.next}),T("span",{class:"trip-text"},T("span",{class:"trip-title",text:`${t.resume}: ${o.title}`}),T("span",{class:"trip-sub",text:t.stopOf(o.at+1,o.stops.length)})))),e.world.planets.length&&a.push(T("button",{class:"trip trip-plan",onclick:()=>{this.close(),e.map.open(),e.map.planner.enter()}},T("span",{class:"trip-icon",html:Ye.map}),T("span",{class:"trip-text"},T("span",{class:"trip-title",text:t.planOwn}),T("span",{class:"trip-sub",text:t.planOwnSub})))),r.length?[...a,...r.map(l=>{let c=new Set(l.stops.map(u=>i.pages[u.page].cluster).filter(u=>u>=0)),{done:h,total:p}=s.progress(l.stops.map(u=>u.page));return T("button",{class:"trip",onclick:()=>{this.close(),e.map.close(),e.journey.start(l)}},T("span",{class:"trip-orbs"},[...c].slice(0,4).map(u=>Di(e.world.planets[u],21))),T("span",{class:"trip-text"},T("span",{class:"trip-title",text:l.title}),l.description?T("span",{class:"trip-sub",text:l.description}):null),T("span",{class:"trip-meta",text:`${h}/${p}`}))})]:[...a,T("div",{class:"empty",text:t.noExpeditions})]}pagePicker(e,t,i){let{ui:s}=this,{graph:r,t:a}=s,o=T("input",{class:"route-input",type:"search",placeholder:a.routePick,autocomplete:"off",spellcheck:"false","aria-label":e,value:t!=null?r.pages[t].title:""}),l=T("div",{class:"route-results",hidden:!0}),c=()=>{let h=o.value.trim().toLowerCase(),p=r.pages.filter(u=>u.cluster>=0&&(!h||u.title.toLowerCase().includes(h)||u.path.toLowerCase().includes(h))).sort((u,d)=>d.importance-u.importance).slice(0,6);l.replaceChildren(...p.map(u=>T("button",{class:"route-hit",onmousedown:d=>{d.preventDefault(),i(u.id)}},T("span",{class:"orb",style:`--c:${s.accentOf(u)}`}),T("span",{text:u.title})))),l.hidden=!p.length};return o.addEventListener("input",c),o.addEventListener("focus",()=>{o.select(),c()}),o.addEventListener("blur",()=>{l.hidden=!0}),o.addEventListener("keydown",h=>{h.key==="Enter"&&(h.preventDefault(),l.querySelector(".route-hit")?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,cancelable:!0})))}),T("label",{class:"route-field"},T("span",{class:"route-label",text:e}),o,l)}renderRoute(){let{ui:e}=this,{t,graph:i}=e,s=c=>h=>{this[c]=h,this.render()},r=T("div",{class:"route-fields"},this.pagePicker(t.routeFrom,this.routeFrom,s("routeFrom")),T("button",{class:"route-swap",title:t.routeSwap,"aria-label":t.routeSwap,text:"\u21C5",onclick:()=>{[this.routeFrom,this.routeTo]=[this.routeTo,this.routeFrom],this.render()}}),this.pagePicker(t.routeTo,this.routeTo,s("routeTo")));if(this.routeFrom==null||this.routeTo==null)return[r,T("p",{class:"route-hint",text:t.routeHint})];e.adjacency??=nn(i);let a=Ac(i,this.routeFrom,this.routeTo,e.adjacency);if(!a)return[r,T("p",{class:"route-hint",text:t.noRoute})];if(!a.legs.length)return[r,T("p",{class:"route-hint",text:t.sameStop})];let o=[];a.stops.forEach((c,h)=>{let p=i.pages[c];o.push(T("li",{class:"route-stop"},T("span",{class:"orb",style:`--c:${e.accentOf(p)}`}),T("button",{class:"route-stop-name",text:p.title,onclick:()=>{this.close(),e.map.close(),e.openPage(c)}})));let u=a.legs[h];if(u){let d=u.forward?t.legLinksTo:t.legLinkedFrom,m=u.across?t.starship:"";o.push(T("li",{class:"route-leg"},`${u.forward?"\u2193":"\u2191"} ${d}${m?` \xB7 ${m}`:""}`))}});let l=`${i.pages[this.routeFrom].title} \u2192 ${i.pages[this.routeTo].title}`;return[r,T("p",{class:"route-summary",text:t.hops(a.legs.length)}),T("ol",{class:"route-line"},o),T("button",{class:"route-go",text:t.routeStart,onclick:()=>{this.close(),e.map.close(),e.journey.start({title:l,stops:a.stops.map(c=>({page:c,note:""}))})}})]}renderLog(){let{ui:e}=this,{t,graph:i,logbook:s,world:r,lang:a}=e,o=[],l=[...s.fresh].map(h=>i.pages[h]).filter(h=>h.cluster>=0||h.id===i.star||h.id===i.comet);(l.length||s.removed.length)&&(o.push(T("h3",{class:"log-h",text:t.sinceLast})),l.length&&o.push(T("ul",{class:"log-list"},l.sort((h,p)=>p.importance-h.importance).slice(0,30).map(h=>T("li",{},T("button",{onclick:()=>{this.close(),e.map.close(),e.openPage(h.id)}},T("span",{class:"orb",style:`--c:${e.accentOf(h)}`}),T("span",{class:"log-title",text:h.title}),T("span",{class:"badge-new",text:s.added.has(h.id)?t.badgeNew:t.badgeChanged})))))),s.removed.length&&o.push(T("p",{class:"log-note",text:t.removedPages(s.removed.length,s.removed.slice(0,5).join(", "))})),o.push(T("button",{class:"log-action",text:t.markSeen,onclick:()=>{for(let h of s.markAllSeen())r.planets[i.pages[h].cluster]?.clearFresh(h);e.refreshProgress(),this.render()}}))),o.push(T("h3",{class:"log-h",text:t.exploration})),o.push(T("ul",{class:"log-worlds"},r.planets.map(h=>{let{done:p,total:u}=s.progress(h.cluster.pageIds);return T("li",{},T("button",{onclick:()=>{this.close(),e.map.open(h)}},Di(h,28),T("span",{class:"log-title",text:h.cluster.name}),T("span",{class:"log-count",text:`${p}/${u}`})),T("span",{class:"log-bar",style:`--p:${u?p/u*100:0}%;--c:${Rs(h.civ.palette.accent)}`}))})));let c=s.recent(12);return c.length?(o.push(T("h3",{class:"log-h",text:t.recently})),o.push(T("ul",{class:"log-list"},c.map(({page:h,at:p})=>T("li",{},T("button",{onclick:()=>{this.close(),e.map.close(),e.openPage(h.id)}},T("span",{class:"orb",style:`--c:${e.accentOf(h)}`}),T("span",{class:"log-title",text:h.title}),T("span",{class:"log-count",text:new Date(p).toLocaleDateString(a,{day:"numeric",month:"short"})})))))),o.push(T("button",{class:"log-action quiet",text:t.resetLog,onclick:()=>{confirm(t.resetConfirm)&&(s.resetVisits(),e.refreshProgress(),this.render())}}))):o.push(T("p",{class:"log-note",text:t.logEmpty})),o.push(T("p",{class:"log-note",text:t.logPrivate})),o}};var ks=new k,In=new k,Is=new k,qb=7,Lc=class{constructor(e,t){this.ui=e,this.root=t,this.pool=[],this.targets=[],this.page=null}setPage(e){if(e===this.page)return;this.page=e;let{graph:t,world:i}=this.ui;if(this.targets=[],e==null)return;let s=new Map;for(let r of t.edges)r.s===e&&s.set(r.t,(s.get(r.t)||0)+r.w*1.5),r.t===e&&s.set(r.s,(s.get(r.s)||0)+r.w);this.targets=[...s.entries()].sort((r,a)=>a[1]-r[1]).map(([r])=>{let a=t.pages[r];if(a.cluster<0)return null;let o=i.planets[a.cluster],l=o?.siteByPage.get(r);return l?{id:r,page:a,planet:o,site:l}:null}).filter(Boolean)}update(){let{world:e,lang:t}=this.ui,{rig:i,camera:s}=e,r=innerWidth-(this.ui.reader.classList.contains("open")&&innerWidth>760?this.ui.reader.offsetWidth:0),a=innerHeight,o=[];if(i.mode==="body"&&i.body?.isPlanet&&!i.busy&&!i.ride&&!e.inputLocked&&!this.ui.pageView.wide){let c=i.body,h=[];(!this.obstacleClock||--this.obstacleClock<=0)&&(this.obstacleClock=30,this.leftEdge=document.querySelector(".atlas")?.getBoundingClientRect().right||0,this.obstacles=[...document.querySelectorAll(".world-card:not([hidden]), .journey.show, .ride-bar.show")].map(f=>f.getBoundingClientRect()).filter(f=>f.width>0&&getComputedStyle(document.body).display!=="none"));let p=r/2,u=a/2,d=26,m=88,x=46;for(let f of this.targets){if(o.length>=qb)break;let g,v,w=!1;if(f.planet===c){ks.copy(f.site.dir).multiplyScalar(c.G+f.site.h);let P=c.worldPositionOf(ks,In);Is.copy(P).project(s);let O=f.site.dir.dot(ks.copy(i.pose.pos).applyMatrix4(Xb.copy(c.spin.matrixWorld).invert()).sub(In.copy(f.site.dir).multiplyScalar(c.G)))>0,U=(Is.x*.5+.5)*innerWidth,H=(-Is.y*.5+.5)*a;w=O&&Is.z<1&&U>d&&U<r-d&&H>m&&H<a-x;let te=Math.min(.12,i.dir.angleTo(f.site.dir)*.5);ks.copy(i.dir).lerp(f.site.dir,te/Math.max(i.dir.angleTo(f.site.dir),.001)).normalize().multiplyScalar(c.G),c.worldPositionOf(ks,In).project(s),ks.copy(i.dir).multiplyScalar(c.G),c.worldPositionOf(ks,Is).project(s),g=(In.x-Is.x)*innerWidth,v=-(In.y-Is.y)*a}else{In.copy(f.planet.node.position).project(s);let P=In.z>1;g=(In.x*.5+.5)*innerWidth-p,v=(-In.y*.5+.5)*a-u,P&&(g=-g,v=-v)}if(w)continue;let _=Math.hypot(g,v)||1,M=g/_,S=v/_,y=p-d,b=u-m,C=a-u-x,R=Math.min(M?y/Math.abs(M):1/0,S<0?b/-S:S>0?C/S:1/0),L=p+M*R,D=u+S*R;for(let P of this.obstacles)L>P.left-120&&L<P.right+120&&D>P.top-24&&D<P.bottom+24&&(D=P.top-26);if(h.some(P=>Math.abs(P.y-D)<36&&Math.abs(P.x-L)<250))continue;h.push({x:L,y:D});let B=f.planet!==c?kn[f.planet.cluster.civ].name[t]:"";o.push({id:f.id,title:f.page.title,away:B,x:Math.max(L,this.leftEdge+34),y:D,angle:Math.atan2(S,M)})}}for(;this.pool.length<o.length;){let c=T("span",{class:"sign-arrow","aria-hidden":"true"}),h=T("span",{class:"sign-name"}),p=T("span",{class:"sign-away"}),u={arrow:c,name:h,away:p,id:null};u.node=T("button",{class:"sign",onclick:()=>{u.id!=null&&this.ui.openPage(u.id)}},c,T("span",{class:"sign-text"},h,p)),this.root.append(u.node),this.pool.push(u)}this.pool.forEach((c,h)=>{let p=o[h];if(!p){c.id!==null&&(c.node.classList.remove("show"),c.id=null);return}c.id!==p.id&&(c.id=p.id,c.name.textContent=p.title,c.away.textContent=p.away,c.away.hidden=!p.away,c.node.classList.add("show"));let u=p.x>r*.66?"-100%":p.x<r*.34?"0%":"-50%",d=p.y>a*.66?"-100%":p.y<a*.34?"0%":"-50%";c.node.style.transform=`translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) translate(${u}, ${d})`,c.arrow.style.transform=`rotate(${p.angle.toFixed(3)}rad)`})}},Xb=new Oe;function Cu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Os=Cu();function x0(n){Os=n}var Ds={exec:()=>null};function Ls(n){let e=[];return t=>{let i=Math.max(0,Math.min(3,t-1)),s=e[i];return s||(s=n(i),e[i]=s),s}}function He(n,e=""){let t=typeof n=="string"?n:n.source,i={replace:(s,r)=>{let a=typeof r=="string"?r:r.source;return a=a.replace(Nt.caret,"$1"),t=t.replace(s,a),i},getRegex:()=>new RegExp(t,e)};return i}var v0=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),Nt={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\][ \t]+\S/,listReplaceTask:/^\[[ xX]\][ \t]+/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Ls(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Ls(n=>new RegExp(`^ {0,${n}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:Ls(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:Ls(n=>new RegExp(`^ {0,${n}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:Ls(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:Ls(n=>new RegExp(`^ {0,${n}}(?:</?(?:${Qa})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,"i")),blockquoteBeginRegex:Ls(n=>new RegExp(`^ {0,${n}}>`))},Yb=/^(?:[ \t]*(?:\n|$))+/,Zb=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Kb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/,ja=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Jb=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Pu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,y0=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/,b0=He(y0).replace(/bull/g,Pu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),jb=He(y0).replace(/bull/g,Pu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ku=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Qb=/^[^\n]+/,Iu=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/,e_=He(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Iu).replace("title",/(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex(),t_=He(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Pu).getRegex(),Qa="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Lu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,i_=He("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Lu).replace("tag",Qa).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),_0=n=>He(ku).replace("hr",ja).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",n).replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",Qa).getRegex(),n_=_0(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),s_=_0(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),r_=He(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph",s_).getRegex(),Du={blockquote:r_,code:Zb,def:e_,fences:Kb,heading:Jb,hr:ja,html:i_,lheading:b0,list:t_,newline:Yb,paragraph:n_,table:Ds,text:Qb},o0=He("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ja).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",Qa).getRegex(),a_={...Du,lheading:jb,table:o0,paragraph:He(ku).replace("hr",ja).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",o0).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",Qa).getRegex()},o_={...Du,html:He(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace("comment",Lu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ds,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:He(ku).replace("hr",ja).replace("heading",` *#{1,6} *[^
]`).replace("lheading",b0).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},l_=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,c_=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,w0=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,h_=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,an=/[\p{P}\p{S}]/u,Or=/[\s\p{P}\p{S}]/u,eo=/[^\s\p{P}\p{S}]/u,u_=He(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Or).getRegex(),d_=/[\p{Pi}\p{Ps}"']/u,S0=/(?!~)[\p{P}\p{S}]/u,p_=/(?!~)[\s\p{P}\p{S}]/u,f_=/(?:[^\s\p{P}\p{S}]|~)/u,m_=He(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",v0?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),M0=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,g_=He(M0,"u").replace(/punct/g,an).getRegex(),x_=He(M0,"u").replace(/punct/g,S0).getRegex(),v_=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,y_=He(v_,"u").replace(/openQuote/g,d_).replace(/punct/g,an).getRegex(),T0="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",b_=He(T0,"gu").replace(/notPunctSpace/g,eo).replace(/punctSpace/g,Or).replace(/punct/g,an).getRegex(),__=He(T0,"gu").replace(/notPunctSpace/g,f_).replace(/punctSpace/g,p_).replace(/punct/g,S0).getRegex(),w_="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",S_=He(w_,"gu").replace(/notPunctSpace/g,eo).replace(/punctSpace/g,Or).replace(/punct/g,an).getRegex(),M_=He("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,eo).replace(/punctSpace/g,Or).replace(/punct/g,an).getRegex(),T_="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",E_=He(T_,"gu").replace(/notPunctSpace/g,eo).replace(/punctSpace/g,Or).replace(/punct/g,an).getRegex(),A_=He(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,an).getRegex(),R_="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",C_=He(R_,"gu").replace(/notPunctSpace/g,eo).replace(/punctSpace/g,Or).replace(/punct/g,an).getRegex(),P_=He(/\\(punct)/,"gu").replace(/punct/g,an).getRegex(),k_=He(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,"gu").replace(/punct/g,an).getRegex(),I_=He(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),L_=He(Lu).replace("(?:-->|$)","-->").getRegex(),D_=He("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",L_).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),E0=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Oc=He(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",E0).getRegex(),N_=He(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",Oc).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex(),F_=He(/^!?\[(label)\]\[(ref)\]/).replace("label",Oc).replace("ref",Iu).getRegex(),O_=He(/^!?\[(ref)\](?:\[\])?/).replace("ref",Iu).getRegex(),l0=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,U_=He(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",E0).getRegex(),B_=He("reflink|nolink(?!\\()","g").replace("reflink",He(/^!?\[(label)\]\[(ref)\]/).replace("label",U_).replace("ref",l0).getRegex()).replace("nolink",He(/^!?\[(ref)\](?:\[\])?/).replace("ref",l0).getRegex()).getRegex(),c0=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,z_=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,H_=He(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,z_).getRegex(),Nu={_backpedal:Ds,anyPunctuation:P_,anyPunctuationOutsideCode:k_,autolink:I_,blockSkip:m_,br:w0,code:c_,del:Ds,delLDelim:Ds,delRDelim:Ds,emStrongLDelim:g_,emStrongRDelimAst:b_,emStrongRDelimUnd:M_,escape:l_,link:N_,nolink:O_,punctuation:u_,reflink:F_,reflinkSearch:B_,tag:D_,text:h_,url:Ds},V_={...Nu,emStrongLDelim:y_,emStrongRDelimAst:S_,emStrongRDelimUnd:E_,link:He(/^!?\[(label)\]\((.*?)\)/).replace("label",Oc).getRegex(),reflink:He(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Oc).getRegex()},Au={...Nu,emStrongRDelimAst:__,emStrongLDelim:x_,delLDelim:A_,delRDelim:C_,url:He(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",H_).replace("protocol",c0).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:He(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",c0).replace(/emailProtocol/g,/(?:mailto|xmpp):/).replace("wwwStart",v0?"(?<![^\\s*_~(])www\\.":"www\\.").getRegex()},G_={...Au,br:He(w0).replace("{2,}","*").getRegex(),text:He(Au.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Dc={normal:Du,gfm:a_,pedantic:o_},Ka={normal:Nu,gfm:Au,breaks:G_,pedantic:V_},W_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h0=n=>W_[n];function yi(n,e){if(e){if(Nt.escapeTest.test(n))return n.replace(Nt.escapeReplace,h0)}else if(Nt.escapeTestNoEncode.test(n))return n.replace(Nt.escapeReplaceNoEncode,h0);return n}function $_(n){return Nt.numericCharacterReference.test(n)?n.replace(Nt.numericCharacterReferenceOrAmpersand,(e,t,i)=>{if(t===void 0&&i===void 0)return"&amp;";let s=t===void 0?Number.parseInt(i,16):Number.parseInt(t,10);return s===0||s>1114111||s>=55296&&s<=57343?"\uFFFD":s===38?"&amp;":String.fromCodePoint(s)}):n}function u0(n){try{n=encodeURI(n).replace(Nt.percentDecode,"%")}catch{return null}return n}function d0(n,e){let t=n.replace(Nt.findPipe,(r,a,o)=>{let l=!1,c=a;for(;--c>=0&&o[c]==="\\";)l=!l;return l?"|":" |"}),i=t.split(Nt.splitPipe),s=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(Nt.slashPipe,"|");return i}function Ln(n,e,t){let i=n.length;if(i===0)return"";let s=0;for(;s<i;){let r=n.charAt(i-s-1);if(r===e&&!t)s++;else if(r!==e&&t)s++;else break}return n.slice(0,i-s)}function p0(n){let e=n.split(`
`),t=e.length-1;for(;t>=0&&Nt.blankLine.test(e[t]);)t--;return e.length-t<=2?n:e.slice(0,t+1).join(`
`)}function Uc(n){return n.trim().replace(Nt.multipleSpaceGlobal," ").toLowerCase().toUpperCase().toLowerCase()}function f0(n,e){if(n.indexOf(e[0])===-1&&n.indexOf(e[1])===-1)return-1;let t=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])t++;else if(n[i]===e[1]&&(t--,t<0))return i;return t>0?-2:-1}var Fr=new WeakMap;function Fu(n){let e={"*":-1,_:-1},t=-1,i=n.length;for(let s=0;s<i;s++){let r=n[s];if(r!=="*"&&r!=="_"&&r!=="~")continue;let a=s===0?`
`:n[s-1],o=s+1;for(;o<i&&n[o]===r;)o++;a!==" "&&a!=="	"&&a!==`
`&&a!=="\r"&&a!=="\f"&&(r==="~"?t=s:e[r]=s),s=o-1}return{maskedSrc:n,lastPossibleEmStrongCloserIndex:e,lastPossibleDelCloserIndex:t}}function q_(n,e){let t=Fu(e),i=Fr.get(n);i?i.push(t):Fr.set(n,[t])}function X_(n){let e=Fr.get(n);e&&(e.pop(),e.length===0&&Fr.delete(n))}function Y_(n,e,t){let i=Fr.get(n)?.at(-1);return i&&i.maskedSrc===e?i.lastPossibleEmStrongCloserIndex[t]:Fu(e).lastPossibleEmStrongCloserIndex[t]}function Z_(n,e){let t=Fr.get(n)?.at(-1);return t&&t.maskedSrc===e?t.lastPossibleDelCloserIndex:Fu(e).lastPossibleDelCloserIndex}function Nc(n,e=0){let t=e,i="";for(let s of n)if(s==="	"){let r=4-t%4;i+=" ".repeat(r),t+=r}else i+=s,t++;return i}function m0(n,e,t,i,s){let r=e.href,a=e.title||null,o=n[1].replace(s.other.outputLinkReplace,"$1"),l=n[0].charAt(0)==="!",c=i.state.inLink,h=i.state.linkEmitted,p=i.state.inRawBlock;i.state.inLink=!0,i.state.linkEmitted=!1;let u=i.inlineTokens(o),d=i.state.linkEmitted;if(i.state.linkEmitted=h,i.state.inLink=c,!l){if(d){i.state.inRawBlock=p;return}i.state.linkEmitted=!0}return{type:l?"image":"link",raw:t,href:r,title:a,text:o,tokens:u}}function K_(n,e,t){let i=n.match(t.other.indentCodeCompensation);if(i===null)return e;let s=i[1];return e.split(`
`).map(r=>{let a=r.match(t.other.beginningSpace);if(a===null)return r;let[o]=a;return r.slice(Math.min(o.length,s.length))}).join(`
`)}function g0(n,e,t,i){if(!e.includes("<"))return!1;for(let s=0;s<e.length;s++){if(e[s]==="\\"){s++;continue}if(e[s]==="`"){let o=i.inline.code.exec(e.slice(s));if(o){s+=o[0].length-1;continue}}if(e[s]!=="<")continue;let r=n.slice(t+s),a=i.inline.tag.exec(r)||i.inline.autolink.exec(r);if(a){if(a[0].length>e.length-s)return!0;s+=a[0].length-1}}return!1}var Nr=class{constructor(n){at(this,"options");at(this,"rules");at(this,"lexer");this.options=n||Os}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=this.options.pedantic?e[0]:p0(e[0]),i=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:i}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],i=K_(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let i=Ln(t,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceTabChar.test(i))&&(t=i.trim())}return{type:"heading",raw:Ln(e[0],`
`),depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:Ln(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=Ln(e[0],`
`).split(`
`),i="",s="",r=[];for(;t.length>0;){let a=!1,o=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))o.push(t[l]),a=!0;else if(!a)o.push(t[l]);else break;t=t.slice(l);let c=o.join(`
`),h=c.replace(this.rules.other.blockquoteMarkerWhitespace,(d,m,x)=>m+Nc(x,m.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${c}`:c,s=s?`${s}
${h}`:h;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,r,!0),this.lexer.state.top=p,t.length===0)break;let u=r.at(-1);if(u?.type==="code"||u?.type==="heading"||u?.type==="hr"||u?.type==="html"||u?.type==="table")break;if(u?.type==="blockquote"){let d=u,m=t.join(`
`),x=d.raw+`
`+m.replace(this.rules.other.blockquoteSetextReplace2,""),f=this.blockquote(x);r[r.length-1]=f;let g=x.substring(f.raw.length).replace(/^\n/,""),v=g?g.split(`
`).length:0,w=v?t.slice(0,-v):t;if(w.length>0&&(i=`${i}
${w.join(`
`)}`),s=s.substring(0,s.length-d.text.length)+f.text,t=t.slice(w.length),t.length>0&&this.rules.other.blockquoteStart.test(t[0]))continue;break}else if(u?.type==="list"){let d=u,m=d.raw+`
`+t.join(`
`),x=this.list(m);r[r.length-1]=x;let f=x.raw.length>d.raw.length?m.slice(d.raw.length+1,x.raw.length).split(`
`).length:0;if(f>0){let g=t.slice(0,f).join(`
`);i=`${i}
${g}`,s=`${s}
${g}`}t=t.slice(f);continue}}return{type:"blockquote",raw:i,tokens:r,text:s}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=n,i=()=>t.length-n.length,s=e[1].trim(),r=s.length>1,a={type:"list",raw:"",ordered:r,start:r?+s.slice(0,-1):"",loose:!1,items:[]};s=r?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=r?s:"[*+-]");let o=this.rules.other.listItemRegex(s),l=!1;for(;n;){let h=!1,p="";if(!(e=o.exec(n))||this.rules.block.hr.test(n))break;let u=i();n=n.substring(e[0].length);let d=e[2].split(`
`,1)[0],m=e[1].length,x=this.options.pedantic?Nc(d,m):d.replace(this.rules.other.leadingSpaceTab,_=>Nc(_,m)),f=n.split(`
`,1)[0],g=!x.trim(),v=0;if(this.options.pedantic?(v=2,p=x.trimStart()):g?v=m+1:(v=x.search(this.rules.other.nonSpaceChar),v=v>4?1:v,p=x.slice(v),v+=m),g&&this.rules.other.blankLine.test(f)&&(n=n.substring(f.length+1),h=!0),!h){let _=this.rules.other.nextBulletRegex(v),M=this.rules.other.hrRegex(v),S=this.rules.other.fencesBeginRegex(v),y=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(v):this.rules.other.headingBeginRegex(v),b=this.rules.other.htmlBeginRegex(v),C=this.rules.other.blockquoteBeginRegex(v);for(;n;){let R=n.split(`
`,1)[0],L;if(f=R,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),L=f):L=f.replace(this.rules.other.leadingSpaceTab,D=>Nc(D)),S.test(f)||y.test(f)||b.test(f)||C.test(f)||_.test(f)||M.test(f))break;if(L.search(this.rules.other.nonSpaceChar)>=v||!f.trim())p+=`
`+L.slice(v);else{if(g||x.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||S.test(x)||y.test(x)||b.test(x)||M.test(x))break;let D=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(f)&&this.rules.block.lheading.test(`${x}
${f}`)?`    ${L.replace(/^ {0,3}/,"")}`:f;p+=`
`+D}g=!f.trim(),n=n.substring(R.length+1),x=L.slice(v)}}let w=t.slice(u,i());a.loose||(l?a.loose=!0:this.rules.other.doubleBlankLine.test(w)&&(l=!0)),a.items.push({type:"list_item",raw:w,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]})}let c=a.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;a.raw=t.slice(0,i()).trimEnd();for(let h of a.items)if(this.lexer.state.top=!1,h.tokens=this.lexer.blockTokens(h.text,[]),!a.loose){let p=h.tokens.filter(d=>d.type==="space"),u=p.length>0&&p.some(d=>this.rules.other.anyLine.test(d.raw));a.loose=u}for(let h of a.items){let p=h.tokens[0];if(h.task&&(p?.type==="text"||p?.type==="paragraph")){h.text=h.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(h.raw);if(u){let d={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};h.checked=d.checked,a.loose?h.tokens[0]&&["paragraph","text"].includes(h.tokens[0].type)&&"tokens"in h.tokens[0]&&h.tokens[0].tokens?(h.tokens[0].raw=d.raw+h.tokens[0].raw,h.tokens[0].text=d.raw+h.tokens[0].text,h.tokens[0].tokens.unshift(d)):h.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):h.tokens.unshift(d)}}else h.task&&(h.task=!1)}if(a.loose)for(let h of a.items){h.loose=!0;for(let p of h.tokens)p.type==="text"&&(p.type="paragraph")}return a}}html(n){let e=this.rules.block.html.exec(n);if(e){let t=p0(e[0]);return{type:"html",block:!0,raw:t,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:t}}}def(n){let e=this.rules.block.def.exec(n);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&f0(e[2],"()")!==-1)return;let t=Uc(e[1]),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:Ln(e[0],`
`),href:i,title:s}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=d0(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],r={type:"table",raw:Ln(e[0],`
`),header:[],align:[],rows:[]};if(t.length===i.length){for(let a of i)this.rules.other.tableAlignRight.test(a)?r.align.push("right"):this.rules.other.tableAlignCenter.test(a)?r.align.push("center"):this.rules.other.tableAlignLeft.test(a)?r.align.push("left"):r.align.push(null);for(let a=0;a<t.length;a++)r.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:r.align[a]});for(let a of s)r.rows.push(d0(a,r.header.length).map((o,l)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:r.align[l]})));return r}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e){let t=e[1].trim();return{type:"heading",raw:Ln(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){if(this.lexer.state.linkParenPossible===!1)return;let e=this.rules.inline.link.exec(n);if(e){let t=e[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&g0(n,e[1],t,this.rules))return;let i=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let o=Ln(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{let o=f0(e[2],"()");if(o===-2)return;if(o>-1){let l=(e[0].indexOf("!")===0?5:4)+e[1].length+o;e[2]=e[2].substring(0,o),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let s=Ln(e[0].slice(0,-1),"\\");if((e[0].length-s.length)%2===0)return;let r=e[2],a="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(r);o&&(r=o[1],a=o[3])}else a=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?r=r.slice(1):r=r.slice(1,-1)),m0(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let i=t[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&g0(n,t[1],i,this.rules))return;let s=e[Uc(t[2]||t[1])];if(!s){let r=t[0].charAt(0);return{type:"text",raw:r,text:r}}return m0(t,s,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!i||!i[1]&&!i[2]&&!i[3]&&!i[4])return;let s=i[0][0],r=t===s,a=e.length-n.length,o=a;for(;!this.options.pedantic&&o>0&&e[o-1]===s;)o--;let l=[...e.slice(Math.max(0,o-2),o)].at(-1)??"",c=l==="*"||l==="_"||!!this.rules.inline.punctuation.exec(l);o<a&&(t=l);let h=o<a?c:!!this.rules.inline.punctuation.exec(t);if(i[4]&&t.match(this.rules.other.unicodeAlphaNumeric))return;let p=i[1]||i[3]||"";if(!p||!t||h){let u=[...i[0]].length-1,d,m,x=u,f=0,g=a-o+u,v=!this.options.pedantic&&!!l.trim()&&(!!p||s==="*"&&!c);if(s!=="*"&&s!=="_")return;let w=s==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd,_=Y_(this,e,s),M=e.length-n.length+u;if(_<M)return;e=e.slice(-1*n.length+u);let S=_-M;for(w.lastIndex=0;(i=w.exec(e))!==null&&!(i.index>S);){if(d=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!d)continue;if(m=[...d].length,i[3]||i[4]){x+=m;continue}else if(i[5]||i[6]||v){if(r&&(i[5]||i[6]))break;if(g%3&&!((g+m)%3)){f+=m;continue}}if(x-=m,x>0)continue;m=Math.min(m,m+x+f);let y=[...i[0]][0].length,b=n.slice(0,u+i.index+y+m);if(Math.min(u,m)%2){let R=b.slice(1,-1);return{type:"em",raw:b,text:R,tokens:this.lexer.inlineTokens(R)}}let C=b.slice(2,-2);return{type:"strong",raw:b,text:C,tokens:this.lexer.inlineTokens(C)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return i&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let i=this.rules.inline.delLDelim.exec(n);if(i&&(!i[1]||!t||this.rules.inline.punctuation.exec(t))){let s=[...i[0]].length-1,r,a,o=s,l=this.rules.inline.delRDelim,c=Z_(this,e),h=e.length-n.length+s;if(c<h)return;e=e.slice(-1*n.length+s);let p=c-h;for(l.lastIndex=0;(i=l.exec(e))!==null&&!(i.index>p);){if(r=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!r||(a=[...r].length,a!==s))continue;if(i[3]||i[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let u=[...i[0]][0].length,d=n.slice(0,s+i.index+u+a),m=d.slice(s,-s);return{type:"del",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,i;return e[2]==="@"?(t=e[1],i="mailto:"+t):(t=e[1],i=t),{type:"link",raw:e[0],text:t,href:i,autolink:!0,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,i;if(e[2]==="@")t=e[0],i="mailto:"+t;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(s!==e[0]);t=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:t,href:i,autolink:!0,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:t?e[0]:$_(e[0]),escaped:t}}}},ns,A0,R0,C0,Ns,Gi=(Ns=class{constructor(e){ed(this,ns);at(this,"tokens");at(this,"options");at(this,"state");at(this,"inlineQueue");at(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Os,this.options.tokenizer=this.options.tokenizer||new Nr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:Nt,block:Dc.normal,inline:Ka.normal};this.options.pedantic?(t.block=Dc.pedantic,t.inline=Ka.pedantic):this.options.gfm&&(t.block=Dc.gfm,this.options.breaks?t.inline=Ka.breaks:t.inline=Ka.gfm),this.tokenizer.rules=t}static get rules(){return{block:Dc,inline:Ka}}static lex(e,t){return new Ns(t).lex(e)}static lexInline(e,t){return new Ns(t).inlineTokens(e)}lex(e){e=e.replace(Nt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let i=this.inlineQueue[t];this.state.inRawBlock=!1,this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Nt.tabCharGlobal,"    ").replace(Nt.spaceLine,""));let s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let r;if(this.options.extensions?.block?.some(o=>(r=o.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let o=t.at(-1);r.raw.length===1&&o!==void 0?o.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.raw,this.inlineQueue.at(-1).src=o.text):(this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}),t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let a=e;if(this.options.extensions?.startBlock){let o=1/0,l=e.slice(1),c;this.options.extensions.startBlock.forEach(h=>{c=h.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(a=e.substring(0,o+1))}if(this.state.top&&(r=this.tokenizer.paragraph(a))){let o=t.at(-1);i&&o?.type==="paragraph"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r),i=a.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let o=t.at(-1);o?.type==="text"?(o.raw+=(o.raw.endsWith(`
`)?"":`
`)+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes("["))return!1;let t=this.tokenizer.rules.inline.link;for(let i of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(i[0])&&e.charAt(i.index-1)!=="!")return!0;for(let i of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let s=i[0],r=s.lastIndexOf("[");if(!(s.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,Uc(s.slice(r+1,-1))))&&!(r>1&&this.linkInText(s.slice(1,r-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let i=this.state.linkParenPossible;this.state.linkParenPossible=i&&e.includes(")");try{return ro(this,ns,A0).call(this,e,t)}finally{this.state.linkParenPossible=i}}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}},ns=new WeakSet,A0=function(e,t){let i=e.includes("*")||e.includes("_")||e.includes("~")||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==Nr.prototype.emStrong||this.tokenizer.del!==Nr.prototype.del?ro(this,ns,C0).call(this,e):e;q_(this.tokenizer,i);try{return ro(this,ns,R0).call(this,e,i,t)}finally{X_(this.tokenizer)}},R0=function(e,t,i){let s=!1,r="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}s||(r=""),s=!1;let o;if(this.options.extensions?.inline?.some(c=>(o=c.call({lexer:this},e,i))?(e=e.substring(o.raw.length),i.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let c=i.at(-1);o.type==="text"&&c?.type==="text"?(c.raw+=o.raw,c.text+=o.text):i.push(o);continue}if(o=this.tokenizer.emStrong(e,t,r)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.del(e,t,r)){e=e.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),i.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),i.push(o);continue}let l=e;if(this.options.extensions?.startInline){let c=1/0,h=e.slice(1),p;this.options.extensions.startInline.forEach(u=>{p=u.call({lexer:this},h),typeof p=="number"&&p>=0&&(c=Math.min(c,p))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(o=this.tokenizer.inlineText(l)){e=e.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(r=o.raw.slice(-1)),s=!0;let c=i.at(-1);c?.type==="text"?(c.raw+=o.raw,c.text+=o.text):i.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return i},C0=function(e){let t=e;if(this.tokens.links&&e.includes("[")){let i=this.tokenizer.rules.inline.reflinkSearch,s=r=>{let a=r.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,Uc(r.slice(a+1,-1))))return r;if(a>1&&r.charAt(0)!=="!"){let o=r.slice(1,a-1);if(this.linkInText(o))return"["+o.replace(i,s)+"]["+"a".repeat(r.length-a-2)+"]"}return"["+"a".repeat(r.length-2)+"]"};t=t.replace(i,s)}return t=t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(i,s,r)=>r?"+".repeat(i.length):s?s+i.slice(s.length,-s.length).replace(/`/g,"+")+s:i),t=t.replace(this.tokenizer.rules.inline.blockSkip,(i,s,r)=>{let a=r?r.length:0;return i.slice(0,a)+"["+"a".repeat(i.length-a-2)+"]"}),t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t,t},Ns),Bc=class{constructor(n){at(this,"options");at(this,"parser");this.options=n||Os}space(n){return""}code({text:n,lang:e,escaped:t}){let i=(e||"").match(Nt.notSpaceStart)?.[0],s=n?n.replace(Nt.endingNewline,"")+`
`:"";return i?'<pre><code class="language-'+yi(i)+'">'+(t?s:yi(s,!0))+`</code></pre>
`:"<pre><code>"+(t?s:yi(s,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:e}){return`<h${e}>${this.parser.parseInline(n)}</h${e}>
`}hr(n){return`<hr>
`}list(n){let e=n.ordered,t=n.start,i="";for(let a=0;a<n.items.length;a++){let o=n.items[a];i+=this.listitem(o)}let s=e?"ol":"ul",r=e&&t!==1?' start="'+t+'"':"";return"<"+s+r+`>
`+i+"</"+s+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let e="",t="";for(let s=0;s<n.header.length;s++)t+=this.tablecell(n.header[s]);e+=this.tablerow({text:t});let i="";for(let s=0;s<n.rows.length;s++){let r=n.rows[s];t="";for(let a=0;a<r.length;a++)t+=this.tablecell(r[a]);i+=this.tablerow({text:t})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${yi(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,text:t,tokens:i,autolink:s}){let r=s?yi(t,!0):this.parser.parseInline(i),a=u0(n);if(a===null)return r;n=yi(a,s);let o='<a href="'+n+'"';return e&&(o+=' title="'+yi(e)+'"'),o+=">"+r+"</a>",o}image({href:n,title:e,text:t,tokens:i}){i&&(t=this.parser.parseInline(i,this.parser.textRenderer));let s=u0(n);if(s===null)return yi(t);n=s;let r=`<img src="${yi(n)}" alt="${yi(t)}"`;return e&&(r+=` title="${yi(e)}"`),r+=">",r}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:yi(n.text)}},Ou=class{constructor(){at(this,"parser")}strong({text:n,tokens:e}){return e?this.parser.parseInline(e,this):n}em({text:n,tokens:e}){return e?this.parser.parseInline(e,this):n}codespan({text:n}){return n}del({text:n,tokens:e}){return e?this.parser.parseInline(e,this):n}html({text:n}){return n}text({text:n}){return n}link({text:n,tokens:e}){return e?this.parser.parseInline(e,this):n}image({text:n,tokens:e}){return e?this.parser.parseInline(e,this):n}br(){return""}checkbox({raw:n}){return n}},Wi=class Ru{constructor(e){at(this,"options");at(this,"renderer");at(this,"textRenderer");this.options=e||Os,this.options.renderer=this.options.renderer||new Bc,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ou,this.textRenderer.parser=this}static parse(e,t){return new Ru(t).parse(e)}static parseInline(e,t){return new Ru(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let i=0;i<e.length;i++){let s=e[i];if(this.options.extensions?.renderers?.[s.type]){let a=s,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(a.type)){t+=o||"";continue}}let r=s;switch(r.type){case"space":{t+=this.renderer.space(r);break}case"hr":{t+=this.renderer.hr(r);break}case"heading":{t+=this.renderer.heading(r);break}case"code":{t+=this.renderer.code(r);break}case"table":{t+=this.renderer.table(r);break}case"blockquote":{t+=this.renderer.blockquote(r);break}case"list":{t+=this.renderer.list(r);break}case"checkbox":{t+=this.renderer.checkbox(r);break}case"html":{t+=this.renderer.html(r);break}case"def":{t+=this.renderer.def(r);break}case"paragraph":{t+=this.renderer.paragraph(r);break}case"text":{t+=this.renderer.text(r);break}default:{let a='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let i="";for(let s=0;s<e.length;s++){let r=e[s];if(this.options.extensions?.renderers?.[r.type]){let o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(r.type)){i+=o||"";continue}}let a=r;switch(a.type){case"escape":{i+=t.text(a);break}case"html":{i+=t.html(a);break}case"link":{i+=t.link(a);break}case"image":{i+=t.image(a);break}case"checkbox":{i+=t.checkbox(a);break}case"strong":{i+=t.strong(a);break}case"em":{i+=t.em(a);break}case"codespan":{i+=t.codespan(a);break}case"br":{i+=t.br(a);break}case"del":{i+=t.del(a);break}case"text":{i+=t.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}},Fc,Ja=(Fc=class{constructor(n){at(this,"options");at(this,"block");this.options=n||Os}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?Gi.lex:Gi.lexInline}provideParser(n=this.block){return n?Wi.parse:Wi.parseInline}},at(Fc,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),at(Fc,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Fc);function is(n,e){if(Array.isArray(e))for(let t=0;t<e.length;t++)n.push(e[t]);else n.push(e)}var Uu=class{constructor(...n){at(this,"defaults",Cu());at(this,"options",this.setOptions);at(this,"parse",this.parseMarkdown(!0));at(this,"parseInline",this.parseMarkdown(!1));at(this,"Parser",Wi);at(this,"Renderer",Bc);at(this,"TextRenderer",Ou);at(this,"Lexer",Gi);at(this,"Tokenizer",Nr);at(this,"Hooks",Ja);this.use(...n)}walkTokens(n,e){let t=[];for(let i of n)switch(is(t,e.call(this,i)),i.type){case"table":{let s=i;for(let r of s.header)is(t,this.walkTokens(r.tokens,e));for(let r of s.rows)for(let a of r)is(t,this.walkTokens(a.tokens,e));break}case"list":{let s=i;is(t,this.walkTokens(s.items,e));break}default:{let s=i;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(r=>{let a=s[r].flat(1/0);is(t,this.walkTokens(a,e))}):s.tokens&&is(t,this.walkTokens(s.tokens,e))}}return t}use(...n){let e=this.defaults.extensions||{renderers:Object.create(null),childTokens:Object.create(null)};return n.forEach(t=>{let i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let r=e.renderers[s.name];r?e.renderers[s.name]=function(...a){let o=s.renderer.apply(this,a);return o===!1&&(o=r.apply(this,a)),o}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let r=e[s.level];r?r.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),i.extensions=e),t.renderer){let s=this.defaults.renderer||new Bc(this.defaults);for(let r in t.renderer){if(!(r in s))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let a=r,o=t.renderer[a],l=s[a];s[a]=(...c)=>{let h=o.apply(s,c);return h===!1&&(h=l.apply(s,c)),h===!1?"":h??""}}i.renderer=s}if(t.tokenizer){let s=this.defaults.tokenizer||new Nr(this.defaults);for(let r in t.tokenizer){if(!(r in s))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let a=r,o=t.tokenizer[a],l=s[a];s[a]=(...c)=>{let h=o.apply(s,c);return h===!1&&(h=l.apply(s,c)),h}}i.tokenizer=s}if(t.hooks){let s=this.defaults.hooks||new Ja;for(let r in t.hooks){if(!(r in s))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let a=r,o=t.hooks[a],l=s[a];Ja.passThroughHooks.has(r)?s[a]=c=>{if(s.options.async&&Ja.passThroughHooksRespectAsync.has(r))return(async()=>{let p=await o.call(s,c);return l.call(s,p)})();let h=o.call(s,c);return l.call(s,h)}:s[a]=(...c)=>{if(s.options.async)return(async()=>{let p=await o.apply(s,c);return p===!1&&(p=await l.apply(s,c)),p})();let h=o.apply(s,c);return h===!1&&(h=l.apply(s,c)),h}}i.hooks=s}if(t.walkTokens){let s=this.defaults.walkTokens,r=t.walkTokens;i.walkTokens=function(a){let o=[];return is(o,r.call(this,a)),s&&is(o,s.call(this,a)),o}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return Gi.lex(n,e??this.defaults)}parser(n,e){return Wi.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let i={...t},s={...this.defaults,...i},r=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&i.async===!1)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=n),s.async)return(async()=>{let a=s.hooks?await s.hooks.preprocess(e):e,o=await(s.hooks?await s.hooks.provideLexer(n):n?Gi.lex:Gi.lexInline)(a,s),l=s.hooks?await s.hooks.processAllTokens(o):o;s.walkTokens&&await Promise.all(this.walkTokens(l,s.walkTokens));let c=await(s.hooks?await s.hooks.provideParser(n):n?Wi.parse:Wi.parseInline)(l,s);return s.hooks?await s.hooks.postprocess(c):c})().catch(r);try{s.hooks&&(e=s.hooks.preprocess(e));let a=(s.hooks?s.hooks.provideLexer(n):n?Gi.lex:Gi.lexInline)(e,s);s.hooks&&(a=s.hooks.processAllTokens(a)),s.walkTokens&&this.walkTokens(a,s.walkTokens);let o=(s.hooks?s.hooks.provideParser(n):n?Wi.parse:Wi.parseInline)(a,s);return s.hooks&&(o=s.hooks.postprocess(o)),o}catch(a){return r(a)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let i="<p>An error occurred:</p><pre>"+yi(t.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(t);throw t}}},Fs=new Uu;function ht(n,e){return Fs.parse(n,e)}ht.options=ht.setOptions=function(n){return Fs.setOptions(n),ht.defaults=Fs.defaults,x0(ht.defaults),ht};ht.getDefaults=Cu;ht.defaults=Os;function J_(...n){return Fs.use(...n),ht.defaults=Fs.defaults,x0(ht.defaults),ht}ht.use=J_;ht.walkTokens=function(n,e){return Fs.walkTokens(n,e)};ht.parseInline=Fs.parseInline;ht.Parser=Wi;ht.parser=Wi.parse;ht.Renderer=Bc;ht.TextRenderer=Ou;ht.Lexer=Gi;ht.lexer=Gi.lex;ht.Tokenizer=Nr;ht.Hooks=Ja;ht.parse=ht;var jE=ht.options,QE=ht.setOptions,e3=ht.walkTokens,t3=ht.parseInline;var i3=Wi.parse,n3=Gi.lex;function Ur(n){return String(n).toLowerCase().normalize("NFC").replace(/<[^>]+>/g,"").replace(/[`*_~[\]()!?.,:;"'„“”‚‘’/\\|«»&@#%^=+{}<>]/g,"").trim().replace(/\s+/g,"-")}function P0(){let n=new Map;return e=>{let t=Ur(e),i=(n.get(t)||0)+1;return n.set(t,i),i===1?t:`${t}-${i}`}}function k0(n){return n.replace(/\[\[([^\]|]*?)(?:\\?\|([^\]]*))?\]\]/g,(e,t,i)=>i||t.replace(/#.*$/,"")).replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/[`*_~]+/g,"").replace(/\s+/g," ").trim()}function Bu(n){let e=n.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu);return e?e.length:0}function Ft(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function I0(n,e){if(typeof n=="number"){let t=e.pages[n],i=t.cluster>=0?e.clusters[t.cluster]:null;return{cls:"wl",attrs:`data-page="${n}"`,civ:i?.civ}}return typeof n=="string"&&n.startsWith("g:")?{cls:"wl ghost",attrs:`data-ghost="${Ft(n.slice(2))}"`}:null}var j_=/hinweis|note|info|anmerkung|warn|achtung|vorsicht|tip|wichtig|important|beispiel|example|hilfe/i;function Q_(n){let e=(s,r,a)=>`<aside class="callout callout-${s}"><div class="callout-label">${r}</div>${a}</aside>
`,t=/^<p>\[!([\w-]+)\][+-]?[ \t]*([^\n<]*)(\n|<\/p>\n?)/.exec(n);if(t){let s=n.slice(t[0].length),r=t[3]===`
`?`<p>${s}`:s;return e(_u(t[1]),t[2].trim()||t[1],r)}let i=/^<p><strong>([^<]{1,40}?)(:?)<\/strong>(:?)\s*/.exec(n);return i&&(i[2]||i[3]||j_.test(i[1]))?e(_u(i[1]),i[1],`<p>${n.slice(i[0].length)}`):`<blockquote>${n}</blockquote>
`}function ew(n,e){let t=(()=>{let a=n.path.includes("/")?n.path.slice(0,n.path.lastIndexOf("/")+1):"";return o=>{let l=[];for(let c of(a+o).split("/"))c===".."?l.pop():c&&c!=="."&&l.push(encodeURIComponent(L0(c)));return`wiki-asset/${l.join("/")}`}})(),i=new Map,s=P0(),r=new Uu({gfm:!0,breaks:!1,extensions:[{name:"wikilink",level:"inline",start(a){return a.indexOf("[[")},tokenizer(a){let o=/^!?\[\[([^\]\n]+?)\]\]/.exec(a);if(!o)return;let[l,...c]=o[1].split(/\\?\|/),h=l.indexOf("#"),p=(h>=0?l.slice(0,h):l).trim(),u=h>=0?l.slice(h+1).trim():"",d=c.join("|").trim();return{type:"wikilink",raw:o[0],target:p,anchor:u,text:d||p||u}},renderer(a){let o=n.linkMap[a.target],l=I0(o,e);if(!a.target&&a.anchor)return`<a class="wl" href="#${Ft(Ur(a.anchor))}" data-anchor="${Ft(Ur(a.anchor))}">${Ft(a.text)}</a>`;if(!l)return Ft(a.text);let c=a.anchor?` data-slug="${Ft(Ur(a.anchor))}"`:"";return`<a class="${l.cls}" href="#" ${l.attrs}${c}>${Ft(a.text)}</a>`}},{name:"citation",level:"inline",start(a){let o=Qf(a);return o<0?void 0:o},tokenizer(a){let o=e0(a);return o?{type:"citation",raw:o.raw,parts:o.parts}:void 0},renderer(a){return a.parts.map(o=>{let l=r.parseInline(o),c=tw(l.replace(/<[^>]+>/g,"")),h=i.get(c);return h||(h={n:i.size+1,html:l,text:c,count:0},i.set(c,h)),h.count++,`<button type="button" class="cite" data-cite="${h.n}" aria-label="${Ft(c)}">${h.n}</button>`}).join("")}}],renderer:{html({text:a}){return Ft(a)},heading({tokens:a,depth:o,text:l}){let c=this.parser.parseInline(a),h=k0(l),p=o===1?Ur(h):s(h);return`<h${o} id="s-${Ft(p)}" data-slug="${Ft(p)}">${c}</h${o}>
`},blockquote({tokens:a}){return Q_(this.parser.parse(a))},link({href:a,title:o,tokens:l}){let c=this.parser.parseInline(l),h=a||"",p=n.linkMap[h]??n.linkMap[L0(h.split(/[?#]/)[0])],u=I0(p,e);if(u){let d=h.includes("#")?` data-slug="${Ft(h.split("#")[1])}"`:"";return`<a class="${u.cls}" href="#" ${u.attrs}${d}>${c}</a>`}if(h.startsWith("#"))return`<a class="wl" href="${Ft(h)}" data-anchor="${Ft(h.slice(1))}">${c}</a>`;if(/^(https?:|mailto:)/i.test(h)){let d=o?` title="${Ft(o)}"`:"";return`<a href="${Ft(h)}"${d} target="_blank" rel="noopener noreferrer">${c}</a>`}return c},image({href:a,text:o}){let l=a||"",c=/^https?:/i.test(l)?l:/^[a-z][a-z0-9+.-]*:/i.test(l)?null:t(l);return c?`<img src="${Ft(c)}" alt="${Ft(o||"")}" loading="lazy" onerror="this.replaceWith(document.createTextNode(this.alt))">`:Ft(o||"")},table(a){let o=a.header.map(c=>`<th${c.align?` style="text-align:${c.align}"`:""}>${this.parser.parseInline(c.tokens)}</th>`).join(""),l=a.rows.map(c=>`<tr>${c.map(h=>`<td${h.align?` style="text-align:${h.align}"`:""}>${this.parser.parseInline(h.tokens)}</td>`).join("")}</tr>`).join("");return`<div class="table-wrap"><table><thead><tr>${o}</tr></thead><tbody>${l}</tbody></table></div>
`}}});return{marked:r,sources:i}}function D0(n,e){let{marked:t,sources:i}=ew(n,e),{facts:s,body:r}=jf(n.md),a=t.parse(r);return{facts:s.map(o=>({label:o.label,kind:o.kind,value:o.value,html:t.parseInline(o.value)})),html:a,sources:[...i.values()]}}function tw(n){return n.replace(/&(amp|lt|gt|quot|#39);/g,(e,t)=>({amp:"&",lt:"<",gt:">",quot:'"',"#39":"'"})[t])}function L0(n){try{return decodeURIComponent(n)}catch{return n}}function iw(n){let e=Math.min(4,Math.max(1,Math.ceil(Math.log2(1+n))));return T("span",{class:"freq","aria-hidden":"true"},Array.from({length:4},(t,i)=>T("i",{class:i<e?"on":""})))}function nw(n,e,t){let{graph:i,world:s,lang:r,t:a}=n,o=i.pages[e],l=i.pages[t];if(o.cluster<0||l.cluster<0)return{kind:"ship",label:a.starship};if(o.cluster!==l.cluster)return{kind:"ship",label:a.starship,away:kn[i.clusters[l.cluster].civ].name[r]};let c=s.planets[o.cluster],h=c?.linkBetween(e,t),p=c?.civ;return h?{kind:h.kind,label:p.transit?.[h.kind]?.[r]??a.link,km:h.path.length*.08}:{kind:"road",label:a.link}}function N0(n,e,t,i,s){let{graph:r,t:a,lang:o}=n,l=r.pages[t],c=nw(n,e,t),h=c.km!=null?`${c.label} \xB7 ${c.km.toLocaleString(o,{maximumFractionDigits:1})} km`:c.away?`${c.label} \xB7 ${c.away}`:c.label,p=T("button",{class:"board-dest",title:a.linkedTimes(i),onclick:()=>n.openPage(t)},T("span",{class:"board-icon",html:Ye[c.kind]}),T("span",{class:"board-text"},T("span",{class:"board-title",text:l.title}),T("span",{class:"board-via",text:h})),iw(i)),u=s&&c.km!=null;return T("li",{},p,u?T("button",{class:"board-ride",text:a.ride,title:`${a.ride}: ${l.title}`,onclick:()=>n.rideTo(e,t)}):null)}var zu=6;function F0(n,e){let t=T("ul",{},n.slice(0,zu));if(n.length<=zu)return[t];let i=T("button",{class:"board-more",text:e(n.length),onclick:()=>{t.append(...n.slice(zu)),i.remove()}});return[t,i]}function O0(n,e){let{graph:t,t:i}=n,s=h=>h===t.star||h===t.comet,r=new Map,a=new Map;for(let h of t.edges)h.s===e.id&&!s(h.t)&&r.set(h.t,h.w),h.t===e.id&&!s(h.s)&&a.set(h.s,h.w);let o=h=>[...h.entries()].sort((p,u)=>u[1]-p[1]||t.pages[u[0]].importance-t.pages[p[0]].importance),l=t.ghosts.filter(h=>h.refs.includes(e.id));if(!r.size&&!a.size&&!l.length)return null;let c=[];return(r.size||l.length)&&(c.push(T("h4",{text:`${i.departures} \xB7 ${r.size+l.length}`})),c.push(...F0([...o(r).map(([h,p])=>N0(n,e.id,h,p,!0)),...l.map(h=>T("li",{},T("button",{class:"board-dest",onclick:()=>n.openGhost(h.key)},T("span",{class:"board-icon",html:Ye.site}),T("span",{class:"board-text"},T("span",{class:"board-title",text:h.title}),T("span",{class:"board-via site",text:i.siteTitle})))))],i.showAll))),a.size&&(c.push(T("h4",{text:`${i.arrivals} \xB7 ${a.size}`})),c.push(...F0(o(a).map(([h,p])=>N0(n,e.id,h,p,!1)),i.showAll))),T("section",{class:"board",id:"board","data-departures":r.size+l.length,"data-arrivals":a.size},c)}var sw=180,rw=70,U0="__intro",Us={min:420,share:.34,max:640,wide:1240,strip:72,phone:760},B0=.5,zc=class{constructor(e){this.ui=e,this.wide=!1,this.flat=!1,this.tab="text",this.trail=[],this.page=null,this.quarters=[],this.tracked=[],this.active=null,this.tabScroll=0;let{t}=e;this.backBtn=T("button",{class:"reader-back",hidden:!0,onclick:()=>this.goBack()}),this.where=T("div",{class:"reader-where"}),this.wideBtn=T("button",{class:"icon-btn",html:Ye.expand,title:t.readMode,"aria-label":t.readMode,"aria-pressed":"false",onclick:()=>this.setWide(!this.wide)}),this.eyebrow=T("div",{class:"reader-eyebrow"}),this.title=T("h1"),this.chips=T("div",{class:"chips"}),this.tabs=T("div",{class:"reader-tabs",role:"tablist"}),this.progress=T("i"),this.toc=T("nav",{class:"reader-toc","aria-label":t.contents}),this.text=T("div",{class:"reader-text"}),this.scroller=T("div",{class:"reader-scroll",tabindex:"-1"},this.text),this.sideLinks=T("div",{class:"side-links"}),this.sideSources=T("div",{class:"side-sources"}),this.side=T("aside",{class:"reader-side"},this.sideLinks,this.sideSources),this.body=T("div",{class:"reader-body"},this.toc,this.scroller,this.side),this.node=T("article",{class:"reader","data-tab":"text"},T("div",{class:"reader-head"},T("div",{class:"reader-bar"},this.backBtn,this.where,this.wideBtn,T("button",{class:"icon-btn",html:Ye.close,title:t.close,"aria-label":t.close,onclick:()=>e.closeReader()})),this.eyebrow,this.title,this.chips,this.tabs,T("span",{class:"reader-progress","aria-hidden":"true"},this.progress)),this.body),this.peek=T("div",{class:"peek",role:"tooltip"}),this.tableFull=T("div",{class:"overlay table-full",onclick:i=>{i.target===this.tableFull&&this.closeTable()}}),this.node.addEventListener("click",i=>this.onClick(i)),this.tableFull.addEventListener("click",i=>this.onClick(i)),this.node.addEventListener("pointerover",i=>this.onPointerOver(i)),this.node.addEventListener("pointerout",i=>this.onPointerOut(i)),this.node.addEventListener("focusin",i=>this.onPeekTarget(i.target.closest?.("a, .cite"))),this.node.addEventListener("focusout",()=>this.hidePeek()),this.scroller.addEventListener("scroll",()=>this.scheduleScroll(),{passive:!0});for(let i of["wheel","touchmove","pointerdown","keydown"])this.scroller.addEventListener(i,()=>{this.pinned=!1},{passive:!0});this.text.addEventListener("beforematch",i=>this.onBeforeMatch(i)),addEventListener("resize",()=>{this.isOpen&&this.layout()}),this.layout(),setInterval(()=>this.tick(B0),B0*1e3)}get isOpen(){return this.node.classList.contains("open")}get allOpen(){return this.wide||this.flat}panelWidth(){let e=innerWidth;return e<=Us.phone?e:this.wide?Math.min(Us.wide,e-Us.strip):Math.max(Us.min,Math.min(Us.max,e*Us.share))}layout(){let e=this.panelWidth();document.documentElement.style.setProperty("--reader-w",`${e}px`),this.isOpen&&this.ui.world.setSideInset(innerWidth>Us.phone?e:0)}setWide(e){if(e===this.wide)return;let{world:t,t:i}=this.ui,s=this.active;this.wide=e,this.node.classList.toggle("wide",e),document.body.classList.toggle("reading-wide",e),this.wideBtn.innerHTML=e?Ye.collapse:Ye.expand,this.wideBtn.title=e?i.readModeOff:i.readMode,this.wideBtn.setAttribute("aria-label",this.wideBtn.title),this.wideBtn.setAttribute("aria-pressed",e?"true":"false"),t.setKeysLocked(e),this.setTab("text"),this.hidePeek(),this.updateFold(),this.layout(),this.body.classList.remove("settle"),this.body.offsetWidth,this.body.classList.add("settle"),s&&this.scrollTo(s,!1),e&&this.scroller.focus({preventScroll:!0}),this.updateActive()}show(e,{slug:t=null,find:i=null,restore:s=null,wasFresh:r=!1,wasNew:a=!1}={}){let{t:o,world:l,lang:c,logbook:h}=this.ui;this.page=e,this.ghost=null,this.active=null,this.pinned=!1,this.hidePeek(),this.setTab("text");let p=this.ui.civOf(e),u=e.cluster>=0?l.planets[e.cluster]:null;this.node.style.setProperty("--h-font",sn[p?.map?.font]??sn.ui),this.where.replaceChildren(T("span",{class:"orb",style:`--c:${this.ui.accentOf(e)};width:9px;height:9px`}),T("span",{text:e.path})),this.eyebrow.replaceChildren(T("span",{text:p?`${p.name[c]} \xB7 ${o.tierNames[e.tier]}`:e.id===this.ui.graph.star?o.star:e.id===this.ui.graph.comet?o.comet:o.asteroid}),...r?[T("span",{class:"badge-new",text:a?o.badgeNew:o.badgeChanged})]:[]),this.title.textContent=e.title;let d;try{d=D0(e,this.ui.graph)}catch(f){console.error(f),d={facts:[],html:"",sources:[]}}let m=es(e.words),x=[T("span",{},T("b",{text:`\u2248 ${m} ${o.minutes}`})),T("span",{},T("b",{text:e.words.toLocaleString(c)}),` ${o.words}`)];e.updated&&x.push(T("span",{},`${o.updated} `,T("b",{text:e.updated}))),this.chips.replaceChildren(...x),this.flat=e.words<=sw,this.node.classList.toggle("flat",this.flat),this.buildText(e,d,u),this.buildSide(e,d),this.buildTabs(),this.buildToc(),this.refreshMarks(),this.updateFold(),this.scroller.scrollTop=0,this.reveal(),s?(s.open&&this.openQuarter(this.quarterBySlug(s.open)),this.setTab(s.tab),this.scroller.scrollTop=s.scroll):t?this.goTo(t,{fly:!1,smooth:!1}):i?this.findText(i):this.quarters.length===1&&!this.flat&&this.openQuarter(this.quarters[0]),this.updateBack(),this.updateActive()}showGhost(e){let{t}=this.ui;this.page=null,this.ghost=e,this.active=null,this.quarters=[],this.tracked=[],this.flat=!0,this.hidePeek(),this.setWide(!1),this.setTab("text"),this.node.style.setProperty("--h-font",sn.ui),this.where.replaceChildren(T("span",{text:t.site})),this.eyebrow.replaceChildren(T("span",{text:t.siteTitle})),this.title.textContent=e.title,this.chips.replaceChildren(),this.tabs.replaceChildren(),this.toc.replaceChildren(),this.tocItems=new Map,this.node.classList.add("no-toc"),this.sideLinks.replaceChildren(),this.sideSources.replaceChildren(),this.text.replaceChildren(T("div",{class:"prose"},T("p",{text:t.siteBody})),T("div",{class:"links"},T("h4",{text:`${t.referencedBy} \xB7 ${e.refs.length}`}),T("ul",{},e.refs.map(i=>T("li",{},T("button",{onclick:()=>this.ui.openPage(i)},T("span",{class:"orb",style:`--c:${this.ui.accentOf(this.ui.graph.pages[i])}`}),T("span",{text:this.ui.graph.pages[i].title}))))))),this.scroller.scrollTop=0,this.reveal(),this.updateBack(),this.ui.world.setSectionFocus(null,null)}reveal(){this.node.classList.add("open"),document.body.classList.add("reading"),this.layout()}close(){this.hidePeek(),this.closeTable(),this.setWide(!1),this.node.classList.remove("open"),document.body.classList.remove("reading"),this.page=null,this.ghost=null,this.active=null,this.trail=[],this.ui.world.setSideInset(0),this.ui.world.setSectionFocus(null,null)}remember(){this.page&&(this.trail.push({id:this.page.id,scroll:this.scroller.scrollTop,open:this.quarters.find(e=>e.open)?.slug??null,tab:this.tab,slug:this.active}),this.trail.length>40&&this.trail.shift())}takeBack(e){return this.trail.at(-1)?.id!==e?null:this.trail.pop()}goBack(){let e=this.trail.pop();e&&this.ui.openPage(e.id,{restore:e,slug:e.slug})}updateBack(){let e=this.trail.at(-1);if(this.backBtn.hidden=!e,!e)return;let t=this.ui.graph.pages[e.id].title;this.backBtn.innerHTML=Ye.back,this.backBtn.append(T("span",{text:t})),this.backBtn.title=this.ui.t.backTo(t)}buildText(e,t,i){let{t:s}=this.ui,r=document.createElement("template");r.innerHTML=t.html;let a=f=>f.nodeType===1&&/^H[1-6]$/.test(f.tagName),o=[...r.content.childNodes].filter(f=>f.nodeType===1||f.textContent.trim()),l=i0(o.filter(a).map(f=>Number(f.tagName[1]))),c=[],h=[];for(let f of o)a(f)&&Number(f.tagName[1])===l?h.push({heading:f,nodes:[]}):(h.at(-1)?.nodes??c).push(f);this.quarters=[];let p=Bu(c.map(f=>f.textContent).join(" ")),u=!this.flat&&p>rw,d=[this.buildLead(e,t,u?[]:c)];if(c.length&&!u&&d.push(T("div",{class:"prose reader-intro"},c)),u){let f=T("h2",{id:"s-__intro","data-slug":U0});h.unshift({heading:f,nodes:c,title:h.length?s.intro:s.fullText})}h.forEach((f,g)=>{let v=this.buildQuarter(f,g);this.quarters.push(v),d.push(v.node)}),this.quarters.forEach((f,g)=>{let v=this.quarters[g+1];v&&f.body.append(T("button",{class:"quarter-next","data-next":v.slug},T("span",{text:s.nextDistrict}),T("b",{text:v.title}),T("span",{html:Ye.next})))}),this.text.replaceChildren(...d);for(let f of this.text.querySelectorAll(".table-wrap")){let g=f.querySelector("table"),v=T("div",{class:"table-box"});f.replaceWith(v),v.append(f),(g.rows.length>5||g.rows[0]?.cells.length>3)&&v.append(T("button",{class:"table-expand",html:Ye.expand,title:s.enlargeTable,"aria-label":s.enlargeTable}))}let m=new Map(e.sections.map(f=>[f.slug,f.words])),x=this.ui.logbook.sectionsRead(e.id);this.buildings=new Set,this.tracked=[...this.text.querySelectorAll("h1[data-slug], h2[data-slug], h3[data-slug]")].map(f=>{let g=f.dataset.slug,v=this.quarters.find(w=>w.node.contains(f))??null;return i&&this.ui.world.sectionBuilding(e.id,g)&&(this.buildings.add(g),f.classList.add("in-city"),f.classList.contains("quarter-h")||f.append(T("span",{class:"heading-pin",html:Ye.pin,title:s.showInCity}))),{slug:g,heading:f,title:f.textContent,quarter:v,need:t0(m.get(g)??(g===U0?v.words:40)),dwell:0,read:x.has(g),level:Number(f.tagName[1])}});for(let f of this.quarters)f.tracked=this.tracked.filter(g=>g.quarter===f),this.buildings.has(f.slug)&&(f.pin.hidden=!1)}buildLead(e,t,i){let{t:s}=this.ui,r=t.facts.find(l=>l.kind==="summary"),a=t.facts.filter(l=>l.kind==="other"||l.kind==="updated"&&!l.value.includes(e.updated)),o=T("div",{class:"reader-lead"});return r?o.append(T("p",{class:"lead-summary",html:r.html})):e.summary&&!i.map(l=>l.textContent).join(" ").replace(/\s+/g," ").trim().startsWith(e.summary.slice(0,40))&&o.append(T("p",{class:"lead-summary",text:e.summary})),a.length&&o.append(T("dl",{class:"lead-facts"},a.flatMap(l=>[T("dt",{text:l.label}),T("dd",{html:l.html})]))),this.flat?(this.meter=null,this.meterText=null):(this.meter=T("span",{class:"lead-meter"}),this.meterText=T("span",{class:"lead-read"}),o.append(T("div",{class:"lead-actions"},T("button",{class:"lead-all",onclick:()=>this.setWide(!0)},T("span",{html:Ye.book}),T("span",{text:s.readAll}),T("kbd",{text:"T"})),T("div",{class:"lead-progress"},this.meterText,this.meter)))),o}buildQuarter(e,t){let{t:i}=this.ui,{heading:s,nodes:r}=e,a=s.cloneNode(!0);a.querySelectorAll(".cite").forEach(f=>f.remove());let o=e.title??a.textContent.trim(),l=s.dataset.slug,c=Bu(r.map(f=>f.textContent).join(" ")),h=T("span",{class:"quarter-mark","aria-hidden":"true"}),p=T("span",{class:"quarter-pin",html:Ye.pin,title:i.showInCity,hidden:!0}),u=T("button",{class:"quarter-toggle",type:"button","aria-expanded":"false"},h,T("span",{class:"quarter-title",text:o}),p,T("span",{class:"quarter-time",text:`${es(c)} ${i.minutes}`}));s.replaceChildren(u),s.classList.add("quarter-h");let d=T("div",{class:"quarter-body prose"},r),m=T("section",{class:"quarter","data-slug":l},s,d),x={slug:l,title:o,node:m,body:d,toggle:u,heading:s,pin:p,words:c,index:t,open:!1,tracked:[]};return u.addEventListener("click",f=>{f.target.closest(".quarter-pin")||this.onToggle(x)}),u.addEventListener("pointerenter",()=>this.hint(l)),u.addEventListener("pointerleave",()=>this.hint(null)),x}buildSide(e,t){let{t:i}=this.ui,s=O0(this.ui,e);this.linkCount=s?Number(s.dataset.departures)+Number(s.dataset.arrivals):0,this.sideLinks.replaceChildren(...s?[s]:[]);let r=t.facts.filter(l=>l.kind==="sources"),a=e.sources??[];this.sourceCount=t.sources.length+r.length+a.length;let o=[];if(r.length||a.length){o.push(T("h4",{text:i.sourcesStated}));for(let l of r)o.push(T("p",{class:"source-stated",html:l.html}));a.length&&o.push(T("ul",{class:"source-plain"},a.map(l=>T("li",{text:l}))))}t.sources.length&&(o.push(T("h4",{text:i.sourcesCited})),o.push(T("ol",{class:"source-list"},t.sources.map(l=>T("li",{id:`cite-${l.n}`,value:String(l.n)},T("span",{html:l.html}),l.count>1?T("span",{class:"source-count",text:`${l.count}\xD7`}):null))))),this.sideSources.replaceChildren(...o),this.citations=new Map(t.sources.map(l=>[String(l.n),l]))}buildTabs(){let{t:e}=this.ui,t=(s,r)=>T("button",{class:"reader-tab",role:"tab","data-id":s,type:"button",onclick:()=>this.setTab(s)},r),i=[t("text",this.quarters.length>1&&!this.flat?`${e.tabDistricts} \xB7 ${this.quarters.length}`:e.tabText)];this.linkCount&&i.push(t("links",`${e.tabLinks} \xB7 ${this.linkCount}`)),this.sourceCount&&i.push(t("sources",`${e.tabSources}${this.citations.size?` \xB7 ${this.citations.size}`:""}`)),this.tabs.replaceChildren(...i.length>1?i:[]),this.setTab(this.tab)}setTab(e){this.tab==="text"&&e!=="text"&&(this.tabScroll=this.scroller.scrollTop);let t=this.tab!=="text"&&e==="text";this.tab=e,this.node.dataset.tab=e;for(let i of this.tabs.children){let s=i.dataset.id===e;i.classList.toggle("on",s),i.setAttribute("aria-selected",s?"true":"false")}t&&(this.scroller.scrollTop=this.tabScroll)}buildToc(){let{t:e}=this.ui;this.tocItems=new Map;let t=this.quarters.length<2||this.flat;if(this.node.classList.toggle("no-toc",t),t){this.toc.replaceChildren();return}let i=(r,a,o,l)=>{let c=T("button",{class:`toc-item ${o}`,type:"button",onclick:()=>this.goTo(r,{fly:!0}),onpointerenter:()=>this.hint(r),onpointerleave:()=>this.hint(null)},T("span",{class:"toc-mark","aria-hidden":"true"}),T("span",{class:"toc-title",text:a}),l?T("span",{class:"toc-time",text:l}):null);return this.tocItems.set(r,c),c},s=[];for(let r of this.quarters){s.push(i(r.slug,r.title,"l1",`${es(r.words)} ${e.minutes}`));for(let a of r.tracked)a.slug!==r.slug&&a.level>1&&a.heading!==r.heading&&s.push(i(a.slug,a.title,"l2"))}this.toc.replaceChildren(T("div",{class:"toc-label",text:e.tabDistricts}),...s)}updateFold(){for(let e of this.quarters){let t=this.allOpen||e.open;e.node.classList.toggle("open",t),e.toggle.setAttribute("aria-expanded",t?"true":"false"),t?e.body.removeAttribute("hidden"):e.body.setAttribute("hidden","until-found")}}openQuarter(e){if(e){for(let t of this.quarters)t.open=t===e;this.updateFold()}}quarterBySlug(e){return this.quarters.find(t=>t.slug===e)??null}onToggle(e){if(this.allOpen){this.goTo(e.slug,{fly:!0});return}if(e.open){e.open=!1,this.pinned=!1,this.updateFold(),this.updateActive();return}this.goTo(e.slug,{fly:!0})}onBeforeMatch(e){let t=this.quarters.find(i=>i.body===e.target);t&&(this.openQuarter(t),this.updateActive())}goTo(e,{fly:t=!1,smooth:i=!0}={}){if(!this.page)return!1;let s=this.text.querySelector(`[id="s-${CSS.escape(e)}"]`);if(!s)return!1;this.setTab("text");let r=this.quarters.find(o=>o.node.contains(s));r&&!r.open&&this.openQuarter(r),this.scrollTo(e,i),this.setActive(e),this.pinned=!0;let a=this.placeOf(e);return t&&a&&this.ui.world.flyToPage(this.page.id,{slug:a}),this.ui.replaceHash(`#/page/${encodeURIComponent(this.page.path)}/${encodeURIComponent(e)}`),!0}scrollTo(e,t){let i=this.text.querySelector(`[id="s-${CSS.escape(e)}"]`);if(!i)return;let s=this.ui.world.rig.reducedMotion,r=i.closest(".quarter"),a=i.classList.contains("quarter-h"),o=a?r:i,l=!a&&r?r.querySelector(".quarter-h").offsetHeight+6:0,c=this.scroller.scrollTop+o.getBoundingClientRect().top-this.scroller.getBoundingClientRect().top-l;this.scroller.scrollTo({top:Math.max(0,c),behavior:t&&!s?"smooth":"auto"})}findText(e){let t=document.createTreeWalker(this.text,NodeFilter.SHOW_TEXT),i=e.toLowerCase();for(let s=t.nextNode();s;s=t.nextNode()){if(s.parentElement.closest("button"))continue;let r=s.textContent.toLowerCase().indexOf(i);if(r<0)continue;let a=this.quarters.find(h=>h.body.contains(s));a&&this.openQuarter(a);let o=document.createRange();o.setStart(s,r),o.setEnd(s,r+e.length);let l=T("mark",{class:"search-hit"});o.surroundContents(l);let c=this.scroller.scrollTop+l.getBoundingClientRect().top-this.scroller.getBoundingClientRect().top;return this.scroller.scrollTop=Math.max(0,c-this.scroller.clientHeight*.3),!0}return!1}scheduleScroll(){this.scrollPending||(this.scrollPending=!0,requestAnimationFrame(()=>{this.scrollPending=!1,this.updateActive()}))}isShown(e){return this.tab==="text"&&(this.allOpen||!e.quarter||e.quarter.open)}placeOf(e){if(e==null||!this.buildings)return null;if(this.buildings.has(e))return e;let t=this.tracked.findIndex(s=>s.slug===e),i=this.tracked[t]?.quarter;for(let s=t-1;s>=0&&this.tracked[s].quarter===i;s--)if(this.tracked[s].level<this.tracked[t].level&&this.buildings.has(this.tracked[s].slug))return this.tracked[s].slug;return i&&this.buildings.has(i.slug)?i.slug:null}updateActive(){if(!this.page||!this.isOpen)return;if(!this.pinned){let t=this.scroller.getBoundingClientRect(),i=t.top+t.height*.3,s=null;for(let r of this.tracked)if(this.isShown(r))if(r.heading.getBoundingClientRect().top<=i)s=r;else{!s&&!this.allOpen&&(s=r);break}this.setActive(s?.slug??null)}let e=this.scroller.scrollHeight-this.scroller.clientHeight;this.progress.style.width=this.wide&&e>0?`${this.scroller.scrollTop/e*100}%`:"0%"}setActive(e){if(e===this.active)return;this.active=e,this.ui.world.setSectionFocus(this.page?.id,this.placeOf(e));let t=null;for(let[i,s]of this.tocItems??[]){let r=i===e;s.classList.toggle("now",r),r&&(t=s)}if(t){let i=this.toc.getBoundingClientRect(),s=t.getBoundingClientRect();s.top<i.top+30?this.toc.scrollTop+=s.top-i.top-30:s.bottom>i.bottom-30&&(this.toc.scrollTop+=s.bottom-i.bottom+30)}}hint(e){this.page&&this.ui.world.setSectionFocus(this.page.id,this.placeOf(e??this.active))}hintFromCity(e){for(let t of this.quarters)t.node.classList.toggle("hinted",t.slug===e||t.tracked.some(i=>i.slug===e));for(let[t,i]of this.tocItems??[])i.classList.toggle("hinted",t===e)}tick(e){if(!this.page||!this.isOpen||document.hidden||this.tab!=="text"||this.ui.map?.isOpen||!this.tracked.some(i=>!i.read))return;let t=this.scroller.getBoundingClientRect();this.tracked.forEach((i,s)=>{if(i.read||!this.isShown(i))return;let r=i.heading.getBoundingClientRect().top,a=this.tracked[s+1],o=a&&a.quarter===i.quarter?a.heading.getBoundingClientRect().top:(i.quarter?.node??this.text).getBoundingClientRect().bottom;Math.min(o,t.bottom)-Math.max(r,t.top)<Math.min((o-r)*.5,t.height*.5)||(i.dwell+=e,i.dwell>=i.need&&this.markRead(i))})}markRead(e){e.read=!0;let{logbook:t,world:i}=this.ui;t.markSection(this.page.id,e.slug)&&i.setSectionsRead(this.page.id,t.sectionsRead(this.page.id)),this.refreshMarks()}refreshMarks(){let{t:e}=this.ui,t=this.quarters.filter(s=>s.tracked.length),i=0;for(let s of t){let r=s.tracked.every(a=>a.read);s.node.classList.toggle("done",r),this.tocItems?.get(s.slug)?.classList.toggle("done",r),r&&i++}for(let s of this.tracked)this.tocItems?.get(s.slug)?.classList.toggle("done",s.read);if(this.meterText){let s=t.length>1;this.meterText.textContent=s?e.districtsRead(i,t.length):"",this.meter.style.setProperty("--p",`${s?i/t.length*100:0}%`),this.meter.hidden=!s}}onClick(e){let t=e.target.closest(".table-expand");if(t){this.openTable(t.closest(".table-box").querySelector("table"));return}let i=e.target.closest(".quarter-next");if(i){this.goTo(i.dataset.next,{fly:!0});return}let s=e.target.closest(".cite");if(s){this.revealSource(s.dataset.cite);return}let r=e.target.closest("a");if(r){r.dataset.page!=null?(e.preventDefault(),this.closeTable(),this.ui.openPage(Number(r.dataset.page),{slug:r.dataset.slug||null})):r.dataset.ghost?(e.preventDefault(),this.closeTable(),this.ui.openGhost(r.dataset.ghost)):r.dataset.anchor&&(e.preventDefault(),this.closeTable(),this.goTo(r.dataset.anchor,{fly:!1}));return}let a=e.target.closest(".heading-pin, .quarter-pin");if(a){let o=a.closest("[data-slug]")?.dataset.slug;o&&this.buildings.has(o)&&(e.stopPropagation(),this.ui.world.flyToPage(this.page.id,{slug:o}))}}revealSource(e){let t=this.sideSources.querySelector(`#cite-${CSS.escape(String(e))}`);t&&(this.hidePeek(),getComputedStyle(this.tabs).display!=="none"&&this.tabs.children.length&&this.setTab("sources"),t.scrollIntoView({block:"nearest"}),t.classList.remove("flash"),t.offsetWidth,t.classList.add("flash"))}openTable(e){let{t}=this.ui,i=e.cloneNode(!0);this.tableFull.replaceChildren(T("div",{class:"table-sheet"},T("div",{class:"table-sheet-head"},T("span",{text:this.page?.title??""}),T("button",{class:"icon-btn",html:Ye.close,title:t.close,"aria-label":t.close,onclick:()=>this.closeTable()})),T("div",{class:"table-sheet-scroll prose"},i))),this.tableFull.classList.add("open")}closeTable(){this.tableFull.classList.remove("open")}get tableOpen(){return this.tableFull.classList.contains("open")}onPointerOver(e){e.pointerType==="mouse"&&this.onPeekTarget(e.target.closest("a[data-page], a[data-ghost], .cite"))}onPointerOut(e){e.target.closest("a[data-page], a[data-ghost], .cite")&&!e.relatedTarget?.closest?.(".peek")&&this.hidePeek()}onPeekTarget(e){clearTimeout(this.peekTimer),!(!e||!e.matches("a[data-page], a[data-ghost], .cite"))&&(this.peekTimer=setTimeout(()=>this.showPeek(e),170))}showPeek(e){let{t,graph:i,lang:s,world:r,logbook:a}=this.ui,o="",l="",c="",h="";if(e.classList.contains("cite")){let g=this.citations?.get(e.dataset.cite);if(!g)return;o=t.sourceWord,l=g.text}else if(e.dataset.ghost){let g=i.ghosts.find(v=>v.key===e.dataset.ghost);o=t.site,l=g?.title??e.textContent,c=t.siteTitle}else{let g=i.pages[Number(e.dataset.page)];if(!g)return;let v=this.ui.civOf(g);o=[v?`${v.name[s]} \xB7 ${t.tierNames[g.tier]}`:"",a.isVisited(g.id)?t.visited:"",a.isFresh(g.id)?t.badgeNew:""].filter(Boolean).join(" \xB7 "),l=g.title;let _=e.dataset.slug&&g.sections.find(M=>M.slug===e.dataset.slug);c=_?`\u203A ${_.title}`:g.summary,h=g.cluster===this.page?.cluster&&g.cluster>=0?t.peekGo:t.peekFly,g.cluster>=0&&(this.peekPlanet=r.planets[g.cluster],this.peekPlanet?.setHover(g.id))}this.peek.replaceChildren(T("div",{class:"k",text:o}),T("div",{class:"t",text:l}),c?T("div",{class:"s",text:c}):"",h?T("div",{class:"h",text:h}):""),this.peek.classList.add("show");let p=e.getBoundingClientRect(),u=this.peek.offsetWidth,d=this.peek.offsetHeight,m=this.node.getBoundingClientRect(),x,f;!this.wide&&m.left>u+24?(x=m.left-u-14,f=p.top+p.height/2-d/2):(x=p.left+p.width/2-u/2,f=p.top-d-10,f<10&&(f=p.bottom+10)),x=Math.max(10,Math.min(innerWidth-u-10,x)),f=Math.max(10,Math.min(innerHeight-d-10,f)),this.peek.style.transform=`translate(${x.toFixed(0)}px, ${f.toFixed(0)}px)`}hidePeek(){clearTimeout(this.peekTimer),this.peek.classList.remove("show"),this.peekPlanet?.setHover(null),this.peekPlanet=null}};function z0(n){let{logbook:e,world:t,graph:i}=n;for(let s of i.pages){let r=e.sectionsRead(s.id);r.size&&s.cluster>=0&&t.setSectionsRead(s.id,r)}}var Br=new k,to=new k,io=new k,H0=new Oe;function V0(n,e){return new Hu(n,e)}var Hu=class{constructor(e,t){this.root=e,this.labelsRoot=t,this.t=Tc.en,this.audio=new Mc,this.labelPool=[],this.loader=T("div",{class:"loader"},T("div",{class:"loader-inner"},T("div",{class:"loader-orbit"},T("i"),T("i"),T("b"),T("em")),this.loaderTitle=T("div",{class:"loader-title",text:"Wikitary"}),this.loaderStep=T("div",{class:"loader-step"}),T("div",{class:"loader-bar"},this.loaderBar=T("i")))),e.append(this.loader)}fatal(e){this.loader.classList.remove("done"),this.loader.querySelector(".loader-inner").replaceChildren(T("div",{class:"fatal",text:e}))}setGraph(e){this.graph=e,this.t=Tc[e.meta.lang]||Tc.en,this.lang=e.meta.lang==="de"?"de":"en",document.documentElement.lang=this.lang,document.title=`${e.meta.title} \xB7 Wikitary`,this.loaderTitle.textContent=this.t.loaderTitle;let t=null;try{t=window.localStorage}catch{}this.logbook=new Ec(e,t)}progress(e,t){this.loaderBar.style.width=`${Math.round(e*100)}%`;let{t:i}=this;if(t&&typeof t=="object"){let s=t.planet.civ.name[this.lang],r={plan:i.stepPlan,terrain:i.stepTerrain,city:i.stepCity,sky:i.stepAtmo}[t.step];this.loaderStep.textContent=`${r} ${s}: ${t.planet.cluster.name}`}else this.loaderStep.textContent={noise:i.stepNoise,sky:i.stepSky,compile:i.stepCompile}[t]||""}notifyChanged(){this.toast?.classList.add("show")}announce(e,t=null,i=null){this.notice.replaceChildren(T("span",{text:e}),t?T("button",{text:t,onclick:()=>{this.notice.classList.remove("show"),i()}}):""),this.notice.classList.add("show"),clearTimeout(this.noticeTimer),this.noticeTimer=setTimeout(()=>this.notice.classList.remove("show"),t?2e4:9e3)}worldName(e){return e.civ.name[this.lang]}countPages(e){return`${e} ${e===1?this.t.page:this.t.pages}`}civOf(e){return e.cluster>=0?kn[this.graph.clusters[e.cluster].civ]:null}accentOf(e){let t=this.civOf(e);return t?Rs(t.palette.accent):e.id===this.graph.star?"#ffc477":"#a8dcff"}attach(e){this.world=e,this.buildChrome(),this.buildSearch(),this.buildHelp(),this.map=new Pc(this),this.journey=new kc(this),this.shiplog=new Ic(this),this.signs=new Lc(this,this.signsRoot),z0(this),e.capturePortraits((i,s)=>document.documentElement.style.setProperty(`--face-${i.index}`,`url("${s}")`)),this.bindKeys(),matchMedia("(prefers-reduced-motion: reduce)").matches&&(e.rig.reducedMotion=!0),e.addEventListener("frame",()=>this.onFrame()),e.addEventListener("hover",i=>this.onHover(i.detail)),e.addEventListener("pick",i=>this.onPick(i.detail)),e.addEventListener("focus",i=>this.setFocus(i.detail)),e.addEventListener("ride",i=>this.onRide(i.detail)),e.rig.onModeChange=i=>{document.body.classList.toggle("landed",i==="body"),this.updateCrumbs()},this.setFocus(null),setTimeout(()=>{this.loader.classList.add("done"),setTimeout(()=>this.loader.remove(),1200)},200),addEventListener("popstate",()=>{this.map.close(),this.applyHash(!1)}),this.applyHash(!1)||(this.titleCard.classList.add("show"),setTimeout(()=>this.titleCard.classList.remove("show"),7500)),this.logbook.fresh.size&&(this.freshToast.classList.add("show"),setTimeout(()=>this.freshToast.classList.remove("show"),14e3));let t=this.logbook.savedTrip();t&&this.announce(this.t.resumeToast(t.title,t.at+1,t.stops.length),this.t.resume,()=>this.journey.start(t))}buildChrome(){let{graph:e,t}=this,i=e.clusters.length,s=T("div",{class:"brand"},T("span",{html:Ye.logo}),T("div",{},T("div",{class:"brand-title",text:e.meta.title}),T("div",{class:"brand-sub",text:`${this.countPages(e.pages.length)} \xB7 ${e.edges.length} ${t.links} \xB7 ${i} ${t.worlds}`})));this.crumbs=T("nav",{class:"crumbs","aria-label":"Location",hidden:!0});let r=(o,l,c,h={})=>T("button",{class:"tool",html:Ye[o],title:l,"aria-label":l,onclick:c,...h});this.dayTool=r("moon",t.dayNight,()=>this.toggleDay(),{hidden:!0}),this.soundTool=r("sound",t.sound,()=>this.toggleSound(),{"aria-pressed":"false"}),this.tools=T("div",{class:"tools"},r("map",t.mapTool,()=>this.map.toggle(),{hidden:!this.world.planets.length}),r("compass",t.logTool,()=>this.shiplog.toggle()),this.dayTool,this.soundTool,r("search",t.searchTool,()=>this.openSearch()),r("help",t.help,()=>this.helpOverlay.classList.toggle("open")));let a=T("header",{class:"top"},s,this.crumbs,this.tools);this.atlas=T("nav",{class:"atlas","aria-label":t.worlds}),this.buildAtlas(),this.worldCard=T("aside",{class:"world-card",hidden:!0}),this.readout=T("div",{class:"readout"}),this.tip=T("div",{class:"tip",role:"status"}),this.titleCard=T("div",{class:"title-card"},T("h1",{text:e.meta.title}),T("p",{text:t.hintTitle})),this.pageView=new zc(this),this.reader=this.pageView.node,this.toast=T("div",{class:"toast",role:"status"},T("span",{text:t.changed}),T("button",{text:t.reload,onclick:()=>location.reload()})),this.freshToast=T("div",{class:"toast fresh",role:"status"},T("span",{text:t.freshToast(this.logbook.fresh.size)}),T("button",{text:t.freshShow,onclick:()=>{this.freshToast.classList.remove("show"),this.shiplog.open("log")}})),this.notice=T("div",{class:"toast notice",role:"status"}),this.rideBar=T("div",{class:"ride-bar",role:"status"}),this.signsRoot=T("div",{class:"signs"}),this.root.append(a,this.atlas,this.worldCard,this.readout,this.titleCard,this.signsRoot,this.rideBar,this.reader,this.pageView.peek,this.pageView.tableFull,this.tip,this.toast,this.freshToast,this.notice)}buildAtlas(){let{graph:e,world:t,t:i}=this,s=[];e.star!=null&&s.push(T("button",{class:"atlas-item",onclick:()=>this.openPage(e.star)},T("span",{class:"orb",style:"--c:#ffc477"}),T("span",{class:"atlas-text"},T("span",{class:"atlas-name",text:i.star}),T("span",{class:"atlas-sub",text:i.starSub})))),s.length&&s.push(T("div",{class:"atlas-sep"})),this.atlasByPlanet=new Map;for(let r of t.planets){let a=r.cluster.name,o=T("button",{class:"atlas-item",onclick:()=>{this.closeReader(!1),t.enterPlanet(r),this.pushHash(`#/world/${r.index}`)}},Di(r,30),T("span",{class:"atlas-text"},T("span",{class:"atlas-name",text:a}),r.atlasSub=T("span",{class:"atlas-sub"})));this.atlasByPlanet.set(r,o),s.push(o)}(e.comet!=null||e.orphans.length)&&s.push(T("div",{class:"atlas-sep"})),e.comet!=null&&s.push(T("button",{class:"atlas-item",onclick:()=>this.openPage(e.comet)},T("span",{class:"orb",style:"--c:#a8dcff"}),T("span",{class:"atlas-text"},T("span",{class:"atlas-name",text:i.comet}),T("span",{class:"atlas-sub",text:i.cometSub})))),e.orphans.length&&s.push(T("button",{class:"atlas-item",onclick:()=>this.openPage(e.orphans[0])},T("span",{class:"orb",style:"--c:#b09a80"}),T("span",{class:"atlas-text"},T("span",{class:"atlas-name",text:i.asteroids}),T("span",{class:"atlas-sub",text:this.countPages(e.orphans.length)})))),this.atlas.replaceChildren(...s),this.refreshProgress()}refreshProgress(){let{logbook:e,t}=this;for(let i of this.world.planets){let{done:s,total:r}=e.progress(i.cluster.pageIds),a=i.cluster.pageIds.filter(o=>e.isFresh(o)).length;i.atlasSub&&(i.atlasSub.textContent=`${this.worldName(i)} \xB7 ${s}/${r}${a?` \xB7 ${a} ${t.badgeNew}`:""}`)}this.focused&&this.renderWorldCard(this.focused),this.shiplog?.isOpen&&this.shiplog.render()}setFocus(e){this.focused=e;let{t}=this;for(let[i,s]of this.atlasByPlanet)s.classList.toggle("active",i===e);this.dayTool.hidden=!e,e?(document.documentElement.style.setProperty("--accent",Rs(e.civ.palette.accent)),this.renderWorldCard(e),this.worldCard.hidden=!1,this.audio.setWorld(e.civ.id)):(this.worldCard.hidden=!0,document.documentElement.style.setProperty("--accent","#7fc4ff"),this.audio.setWorld("system")),this.titleCard?.classList.remove("show"),this.updateCrumbs()}renderWorldCard(e){let{t,logbook:i}=this,s=e.civ,r=new Set(e.cluster.pageIds),a=this.graph.edges.filter(h=>r.has(h.s)&&r.has(h.t)).length,o=this.graph.edges.filter(h=>r.has(h.s)!==r.has(h.t)).length,{done:l,total:c}=i.progress(e.cluster.pageIds);this.worldCard.replaceChildren(T("div",{class:"card-head"},Di(e,54),T("div",{},T("div",{class:"eyebrow",text:`${s.name[this.lang]} \xB7 ${s.people[this.lang]}`}),T("h2",{text:e.cluster.name}))),T("p",{text:s.blurb[this.lang]}),T("div",{class:"facts"},T("div",{},T("b",{text:String(e.cluster.pageIds.length)}),e.cluster.pageIds.length===1?t.page:t.pages),T("div",{},T("b",{text:String(a)}),t.links),T("div",{},T("b",{text:String(o)}),this.lang==="de"?"interplanetar":"interplanetary")),T("div",{class:"people",style:"margin-top:10px",text:`${t.edges} ${s.bridge[this.lang]}`}),T("div",{class:"card-explore"},T("span",{class:"card-meter",style:`--p:${c?l/c*100:0}%`}),T("span",{class:"card-explored",text:t.explored(l,c)}),T("button",{class:"card-map",html:`${Ye.map}<span>${t.mapButton}</span>`,title:t.mapTool,onclick:()=>this.map.open(e)})))}updateCrumbs(){let{t:e,focused:t,currentPage:i}=this,s=[],r=t||i!=null;r&&s.push(T("button",{text:e.system,title:e.back,onclick:()=>{this.closeReader(!1),this.world.goToSystem(),this.pushHash("#/")}})),t&&(s.push(T("span",{class:"sep",text:"/"})),i!=null?s.push(T("button",{text:t.cluster.name,onclick:()=>this.closeReader()})):s.push(T("span",{class:"here",text:t.cluster.name}))),i!=null&&(s.push(T("span",{class:"sep",text:"/"})),s.push(T("span",{class:"here",text:this.graph.pages[i].title}))),this.crumbs.hidden=!r,this.crumbs.replaceChildren(...s)}onHover(e){if(this.hoverHit=e,e?.kind!=="section"&&this.pageView.hintFromCity(null),!e||e.kind==="self"){this.tip.classList.remove("show");return}let{t,graph:i}=this,s="",r="",a="",o="";if(e.kind==="planet"){let l=e.planet;s=`${this.worldName(l)} \xB7 ${l.civ.people[this.lang]}`,r=l.cluster.name,a=`${this.countPages(l.cluster.pageIds.length)} \xB7 ${l.cluster.keywords.slice(0,4).join(", ")}`,o=t.clickWorld}else if(e.kind==="sun")s=t.star,r=i.star!=null?i.pages[i.star].title:i.meta.title,a=t.starSub,o=t.clickPage;else if(e.kind==="comet")s=t.comet,r=i.pages[e.pageId].title,a=i.pages[e.pageId].summary,o=t.clickPage;else if(e.kind==="orphan")s=t.asteroid,r=i.pages[e.pageId].title,a=t.asteroidSub,o=t.clickPage;else if(e.kind==="vehicle")s=t.vehicle,r=t.vehicleTo(i.pages[e.item.from].title,i.pages[e.item.to].title),o=t.rideHint;else if(e.kind==="page"){let l=i.pages[e.id];s=`${t.tierNames[l.tier]}${this.logbook.isVisited(l.id)?` \xB7 ${t.visited}`:""}${this.logbook.isFresh(l.id)?` \xB7 ${this.logbook.added.has(l.id)?t.badgeNew:t.badgeChanged}`:""}`,r=l.title,a=l.summary,o=t.clickPage}else if(e.kind==="section")s=`${t.section} \xB7 ${i.pages[e.id].title}`,r=e.title,o=t.clickSection,e.id===this.currentPage&&this.pageView.hintFromCity(e.slug);else if(e.kind==="ghost"){let l=i.ghosts.find(c=>c.key===e.key);s=t.site,r=l?.title||"",a=t.siteTitle,o=t.clickPage}this.tip.replaceChildren(T("div",{class:"k",text:s}),T("div",{class:"t",text:r}),a?T("div",{class:"s",text:a}):"",T("div",{class:"h",text:o})),this.tip.classList.add("show")}onPick(e){if(!e)return;let{world:t,graph:i}=this;switch(e.kind){case"planet":this.closeReader(!1),t.enterPlanet(e.planet),this.pushHash(`#/world/${e.planet.index}`);break;case"sun":i.star!=null&&this.openPage(i.star);break;case"comet":case"orphan":this.openPage(e.pageId);break;case"page":this.openPage(e.id);break;case"section":this.openPage(e.id,{slug:e.slug});break;case"ghost":this.openGhost(e.key);break;case"vehicle":this.closeReader(!1),t.boardVehicle(e.item,e.planet);break;default:}}openPage(e,{slug:t=null,fly:i=!0,push:s=!0,find:r=null,restore:a=null}={}){let o=this.graph.pages[e];if(!o)return;let{world:l,pageView:c}=this;if(this.currentPage===e&&c.isOpen){t?c.goTo(t,{fly:i}):r?c.findText(r):i&&l.flyToPage(e);return}let h=a??(s?null:c.takeBack(e));!h&&s&&this.currentPage!=null&&c.remember(),this.currentPage=e,this.currentGhost=null,l.endRide(!1),l.setSelected(e),this.signs.setPage(e),i&&l.flyToPage(e,{slug:t??h?.slug??null});let p=this.logbook.isFresh(e),u=this.logbook.added.has(e);this.logbook.visit(e)&&o.cluster>=0&&l.planets[o.cluster]?.clearFresh(e),this.refreshProgress(),this.journey.noticePage(e),s&&this.pushHash(`#/page/${encodeURIComponent(o.path)}${t?`/${encodeURIComponent(t)}`:""}`),document.documentElement.style.setProperty("--accent",this.accentOf(o)),c.show(o,{slug:t,find:r,restore:h,wasFresh:p,wasNew:u}),this.updateCrumbs()}openGhost(e){let{graph:t,world:i,pageView:s}=this,r=t.ghosts.find(a=>a.key===e);r&&(this.currentPage!=null&&s.remember(),this.currentPage=null,this.currentGhost=e,i.endRide(!1),i.setSelected(null),this.signs.setPage(null),s.showGhost(r))}closeReader(e=!0){this.pageView.isOpen&&(this.pageView.close(),this.currentPage=null,this.currentGhost=null,this.world.setSelected(null),this.signs.setPage(null),this.focused&&document.documentElement.style.setProperty("--accent",Rs(this.focused.civ.palette.accent)),e&&this.pushHash(this.focused?`#/world/${this.focused.index}`:"#/"),this.updateCrumbs())}pushHash(e){location.hash===e||e==="#/"&&!location.hash||history.pushState(null,"",e)}replaceHash(e){location.hash!==e&&history.replaceState(null,"",e)}applyHash(){let e=location.hash.replace(/^#\/?/,"").split("/");if(e[0]==="page"&&e[1]){let t=decodeURIComponent(e[1]),i=this.graph.pages.find(s=>s.path===t);if(i)return this.openPage(i.id,{slug:e[2]?decodeURIComponent(e[2]):null,push:!1}),!0}return e[0]==="world"&&this.world.planets[Number(e[1])]?(this.closeReader(!1),this.world.enterPlanet(this.world.planets[Number(e[1])]),!0):((this.world.rig.mode==="body"||this.reader.classList.contains("open"))&&(this.closeReader(!1),this.world.rig.mode==="body"&&this.world.goToSystem()),!1)}buildSearch(){let{graph:e,t}=this;this.searchIndex=[];for(let s of e.pages){this.searchIndex.push({kind:"page",id:s.id,title:s.title,sub:s.summary||s.path,hay:`${s.title} ${s.path} ${s.tags.join(" ")}`.toLowerCase(),lower:s.title.toLowerCase()});for(let r of s.sections)r.level>3||this.searchIndex.push({kind:"section",id:s.id,slug:r.slug,title:r.title,sub:s.title,hay:r.title.toLowerCase(),lower:r.title.toLowerCase()})}this.searchInput=T("input",{class:"search-input",placeholder:t.search,"aria-label":t.search,type:"search",autocomplete:"off",spellcheck:"false"}),this.searchResults=T("div",{class:"results",role:"listbox"});let i=T("div",{class:"panel",role:"dialog","aria-modal":"true","aria-label":t.searchTool},this.searchInput,this.searchResults);this.searchOverlay=T("div",{class:"overlay",onclick:s=>{s.target===this.searchOverlay&&this.closeSearch()}},i),this.root.append(this.searchOverlay),this.searchInput.addEventListener("input",()=>this.runSearch()),this.searchInput.addEventListener("keydown",s=>{if(s.key==="ArrowDown"||s.key==="ArrowUp"){s.preventDefault();let r=this.searchHits?.length||0;r&&this.setSearchSel((this.searchSel+(s.key==="ArrowDown"?1:r-1))%r)}else s.key==="Enter"?(s.preventDefault(),this.chooseResult(this.searchSel)):s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),this.closeSearch())})}openSearch(){this.searchOverlay.classList.add("open"),this.searchInput.value="",this.runSearch(),setTimeout(()=>this.searchInput.focus(),20)}closeSearch(){this.searchOverlay.classList.remove("open"),this.searchInput.blur()}runSearch(){let{graph:e,t}=this,i=this.searchInput.value.trim().toLowerCase(),s;if(!i)s=[...e.pages].sort((r,a)=>a.rank-r.rank).slice(0,8).map(r=>({kind:"page",id:r.id,title:r.title,sub:r.summary||r.path}));else{let r=i.split(/\s+/),a=[];for(let o of this.searchIndex){if(!r.every(c=>o.hay.includes(c)))continue;let l=o.kind==="page"?20:0;o.lower===i?l+=100:o.lower.startsWith(i)?l+=70:new RegExp(`(^|[\\s\\-_/(])${aw(r[0])}`).test(o.lower)?l+=45:o.lower.includes(i)&&(l+=30),a.push({...o,score:l})}if(a.length<12)for(let o of e.pages){if(a.some(p=>p.kind==="page"&&p.id===o.id))continue;let l=o.md.toLowerCase();if(!r.every(p=>l.includes(p)))continue;let c=l.indexOf(r[0]),h=o.md.slice(Math.max(0,c-40),c+80).replace(/\s+/g," ").replace(/[[\]*#|`]/g,"").trim();if(a.push({kind:"text",id:o.id,title:o.title,sub:`\u2026${h}\u2026`,score:4,find:r[0]}),a.length>30)break}s=a.sort((o,l)=>l.score-o.score).slice(0,30)}if(this.searchHits=s,this.searchSel=0,!s.length){this.searchResults.replaceChildren(T("div",{class:"empty",text:t.noResults}));return}this.searchResults.replaceChildren(...s.map((r,a)=>{let o=e.pages[r.id],l=this.civOf(o);return T("button",{class:`result${a===0?" sel":""}`,role:"option",onclick:()=>this.chooseResult(a),onmousemove:()=>{this.searchSel!==a&&this.setSearchSel(a)}},T("span",{class:"orb",style:`--c:${this.accentOf(o)}`}),T("span",{class:"result-text"},T("div",{class:"result-title",text:r.title}),T("div",{class:"result-sub",text:r.sub})),T("span",{class:"result-kind",text:l?l.name[this.lang]:""}))}))}setSearchSel(e){this.searchSel=e,[...this.searchResults.children].forEach((t,i)=>t.classList.toggle("sel",i===e)),this.searchResults.children[e]?.scrollIntoView({block:"nearest"})}chooseResult(e){let t=this.searchHits?.[e];t&&(this.closeSearch(),this.openPage(t.id,{slug:t.slug||null,find:t.find||null}))}buildHelp(){let{t:e}=this,t=T("div",{class:"overlay",onclick:i=>{i.target===t&&t.classList.remove("open")}},T("div",{class:"panel",role:"dialog","aria-modal":"true","aria-label":e.legendTitle},T("div",{class:"help"},T("h2",{text:e.legendTitle}),T("dl",{class:"legend"},e.legend.flatMap(([i,s])=>[T("dt",{text:i}),T("dd",{text:s})])),T("h3",{text:e.keysTitle}),T("div",{class:"keys"},e.keys.flatMap(([i,s])=>[T("kbd",{text:i}),T("span",{text:s})])))));this.helpOverlay=t,this.root.append(t)}rideTo(e,t){this.closeReader(!1),this.world.rideLink(e,t)||this.openPage(t)}onRide({state:e,arrived:t,ride:i}){if(e==="start"){let{t:s,graph:r}=this,a=r.pages[i.to],o=i.air?"air":"road";this.rideMeter=T("i"),this.rideBar.replaceChildren(T("span",{class:"ride-icon",html:Ye[o]}),T("span",{class:"ride-text"},T("span",{class:"ride-where",text:`${s.riding} ${a.title}`}),T("span",{class:"ride-how",text:i.planet.civ.transit?.[o]?.[this.lang]??""})),T("button",{class:"ride-off",text:s.getOff,onclick:()=>this.world.endRide(!1)}),T("span",{class:"ride-meter"},this.rideMeter)),this.rideBar.classList.add("show"),this.tip.classList.remove("show");return}this.rideBar.classList.remove("show"),t&&this.openPage(i.to)}updateRideBar(){let{ride:e}=this.world;e&&this.rideMeter&&(this.rideMeter.style.width=`${e.item.s/e.item.path.length*100}%`)}toggleDay(){let e=this.world.currentPhase==="night"?"day":"night";this.world.setDayPhase(e)}toggleSound(){let e=this.audio.toggle();this.soundTool.setAttribute("aria-pressed",e?"true":"false")}bindKeys(){addEventListener("keydown",e=>{let t=/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName||"");if(e.key==="k"&&(e.ctrlKey||e.metaKey)||e.key==="/"&&!t){e.preventDefault(),this.openSearch();return}t||(e.key==="Escape"?this.helpOverlay.classList.contains("open")?this.helpOverlay.classList.remove("open"):this.pageView.tableOpen?this.pageView.closeTable():this.shiplog.isOpen?this.shiplog.close():this.map.isOpen&&this.map.planner.active?this.map.planner.exit():this.map.isOpen?this.map.close():this.world.ride?this.world.endRide(!1):this.pageView.wide?this.pageView.setWide(!1):this.reader.classList.contains("open")?this.closeReader():this.world.rig.mode==="body"&&(this.world.goToSystem(),this.pushHash("#/")):e.key==="k"||e.key==="K"?this.shiplog.isOpen||this.map.toggle():e.key==="l"||e.key==="L"?this.shiplog.toggle():e.key==="."&&this.journey.active?this.journey.next():e.key===","&&this.journey.active?this.journey.prev():(e.key==="e"||e.key==="E")&&this.map.isOpen&&!this.shiplog.isOpen?this.map.planner.toggle(this.map.selected):(e.key==="t"||e.key==="T")&&this.pageView.page&&!this.map.isOpen&&!this.shiplog.isOpen?this.pageView.setWide(!this.pageView.wide):e.key==="n"||e.key==="N"?this.toggleDay():e.key==="m"||e.key==="M"?this.toggleSound():e.key==="?"&&this.helpOverlay.classList.toggle("open"))})}onFrame(){let{world:e,t}=this,{rig:i}=e;if(this.map.isOpen){let s=performance.now();this.map.frame(Math.min((s-(this.mapClock||s))/1e3,.1)),this.mapClock=s;return}if(this.mapClock=0,this.updateLabels(),this.signs.update(),this.updateRideBar(),this.tip.classList.contains("show")){let s=this.tip.offsetWidth,r=this.tip.offsetHeight,a=Math.min(e.pointerPx.x+16,innerWidth-s-10),o=Math.min(e.pointerPx.y+16,innerHeight-r-10);this.tip.style.transform=`translate(${a}px, ${o}px)`}if(this.readoutTimer=(this.readoutTimer||0)+1,this.readoutTimer%8===0){let s=i.body;if(i.mode==="body"&&s?.isPlanet&&!i.flight){let r=Math.max(0,s.altitude??0)*.08,a=s.uniforms.uSunLocal.value,o=Br.set(0,1,0).cross(i.dir).normalize(),l=(Math.atan2(a.dot(o),a.dot(i.dir))/(Math.PI*2)*24+12+24)%24,c=String(Math.floor(l)).padStart(2,"0"),h=String(Math.floor(l%1*60)).padStart(2,"0");this.readout.replaceChildren(`${t.altitude} `,T("b",{text:`${r<10?r.toFixed(2):r.toFixed(0)} km`}),"  \xB7  ",T("b",{text:`${c}:${h}`}),` ${t.local}`),this.dayTool.innerHTML=e.currentPhase==="night"?Ye.sun:Ye.moon}else this.readout.textContent="";if(this.audio.on){let r=e.nearPlanet,a=r?r.altitude/r.R:9;this.audio.setAtmosphere(Math.max(0,Math.min(1,1-a)))}}}updateLabels(){let{world:e,graph:t}=this,{rig:i,camera:s}=e,r=innerWidth,a=innerHeight,o=[],l=d=>(to.copy(d).project(s),to.z>1||to.z<-1?null:{x:(to.x*.5+.5)*r,y:(-to.y*.5+.5)*a}),c=i.mode==="body"&&i.body?.isPlanet;if(!i.busy){for(let d of e.planets){if(c&&d===i.body||(Br.copy(d.node.position).project(s),Br.z>1))continue;let m=s.position.distanceTo(d.node.position),x=d.R/m/Math.tan(s.fov*Math.PI/360)*(a/2);io.copy(s.up).multiplyScalar(d.R*1.32);let f=l(Br.copy(d.node.position).add(io));f&&o.push({key:`w${d.index}`,cls:"world",name:d.cluster.name,sub:`${this.worldName(d)}`,...f,priority:1e3+x,stem:!1,opacity:c?.8:1})}if(!c&&i.mode==="system"){let d=l(io.copy(s.up).multiplyScalar(e.sunRadius*1.5));if(d&&t.star!=null&&o.push({key:"sun",cls:"world",name:t.pages[t.star].title,sub:this.t.star,...d,priority:900}),e.comet){let m=l(io.copy(e.comet.group.position).addScaledVector(s.up,6));m&&o.push({key:"comet",cls:"",name:t.pages[t.comet].title,sub:this.t.comet,...m,priority:500})}}if(c){let d=i.body;H0.copy(d.spin.matrixWorld).invert();let m=io.copy(s.position).applyMatrix4(H0),x=i.d,f=x<d.R*.5?14:x<d.R*1.5?10:7,g=[];for(let w of d.sites){let _=w.dir.clone().multiplyScalar(d.G+w.h*1.02),M=Br.copy(m).sub(_),S=M.length();if(_.dot(M)/(_.length()*S)<-.04)continue;let b=this.currentPage!=null&&e.neighbours.get(this.currentPage)?.has(w.page.id);g.push({site:w,dist:S,score:w.importance*2.4-S/(d.R*1.2)+(w.page.id===this.currentPage?9:b?4:0)})}g.sort((w,_)=>_.score-w.score);for(let{site:w,score:_}of g.slice(0,f)){let M=d.worldPositionOf(w.dir.clone().multiplyScalar(d.G+w.h*1.03)),S=l(M);if(!S)continue;let y=w.page.id===this.currentPage,b=`${this.logbook.isFresh(w.page.id)?"fresh ":""}${this.logbook.isVisited(w.page.id)?"read ":""}`;o.push({key:`p${w.page.id}`,cls:`tier${w.tier} ${b}${y?"selected":""}`,name:w.page.title,...S,priority:_+(y?100:0),stem:!0})}let v=this.currentPage!=null?this.pageView.placeOf(this.pageView.active):null;if(x<4.5||v){let w=this.currentPage!=null&&d.siteByPage.has(this.currentPage)?d.siteByPage.get(this.currentPage):g.length?[...g].sort((_,M)=>_.dist-M.dist)[0].site:null;if(w)for(let _ of d.pickables){if(_.kind!=="section"||_.id!==w.page.id)continue;let M=_.id===this.currentPage&&_.slug===v;if(x>=4.5&&!M)continue;let S=_.local.clone().multiplyScalar(1+_.r/d.G),y=Br.copy(m).sub(S);if(S.dot(y)/(S.length()*y.length())<0)continue;let b=l(d.worldPositionOf(S));b&&o.push({key:`s${_.id}:${_.slug}`,cls:M?"selected section-now":"",name:_.title,...b,priority:M?50:-5-y.length(),stem:!0,small:!0})}}}}o.sort((d,m)=>m.priority-d.priority);let p=[],u=[];for(let d of o){if(d.x<-40||d.x>r+40||d.y<10||d.y>a+20)continue;let m=Math.min(240,d.name.length*7.2)+12,f={l:d.x-m/2,r:d.x+m/2,t:d.y-34,b:d.y};if(!p.some(g=>f.l<g.r&&f.r>g.l&&f.t<g.b&&f.b>g.t)&&(p.push(f),u.push(d),u.length>=24))break}for(;this.labelPool.length<u.length;){let d=T("div",{class:"name"}),m=T("div",{class:"sub"}),x=T("div",{class:"stem"}),f=T("div",{class:"label"},T("div",{class:"inner"},d,m,x));this.labelsRoot.append(f),this.labelPool.push({node:f,name:d,sub:m,stem:x,key:null,cls:null})}this.labelPool.forEach((d,m)=>{let x=u[m];if(!x){d.key!==null&&(d.node.style.opacity=0,d.key=null);return}d.key!==x.key&&(d.key=x.key,d.name.textContent=x.name,d.sub.textContent=x.sub||"",d.sub.style.display=x.sub?"":"none",d.stem.style.display=x.stem?"":"none"),d.cls!==x.cls&&(d.cls=x.cls,d.node.className=`label ${x.cls}`),d.node.style.opacity=x.opacity??1,d.node.style.transform=`translate(${x.x.toFixed(1)}px, ${x.y.toFixed(1)}px)`})}};function aw(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function ow(){let n=document.getElementById("wikitary-data");if(n)return JSON.parse(n.textContent);let e=await fetch("graph.json",{cache:"no-store"});if(!e.ok)throw new Error(`Could not load graph.json (${e.status})`);return e.json()}function lw(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}async function cw(){let n=new URLSearchParams(location.search),e=V0(document.getElementById("ui"),document.getElementById("labels"));if(!lw()){e.fatal("WebGL 2 is not available in this browser, so the solar system cannot be drawn. Try a current Chrome, Edge, Firefox or Safari with hardware acceleration enabled.");return}let t;try{t=await ow()}catch(s){e.fatal(s.message);return}e.setGraph(t);let i=new Sc(document.getElementById("scene"),t,{quality:n.get("q")||hw()});try{await i.init((s,r)=>e.progress(s,r))}catch(s){console.error(s),e.fatal(`Could not build the world: ${s.message}`);return}if(e.attach(i),window.__wikitary={world:i,ui:e,graph:t},!document.getElementById("wikitary-data"))try{new EventSource("events").addEventListener("graph",()=>e.notifyChanged())}catch{}}function hw(){if(/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent))return"low";let e=navigator.deviceMemory||8,t=navigator.hardwareConcurrency||8;return e<=4||t<=4?"medium":"high"}cw();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
