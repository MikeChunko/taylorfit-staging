/*! For license information please see candidate-worker.js.LICENSE.txt */
!function(){this.global=this,this.window=this}(),(()=>{var t={43770:t=>{"use strict";t.exports=JSON.parse('[{"id":"X","show":false},{"id":"y","show":false},{"id":"v","show":false},{"id":"w","show":false},{"id":"VdivwSq","show":false},{"id":"BHat","show":false},{"id":"yHat","show":false},{"id":"Vary","show":false},{"id":"nd","globalOnly":true,"format":"int","description":"Number of data (rows) in the corresponding Data Table (Fit, Cross or Validate)"},{"id":"np","globalOnly":true,"format":"int","description":"Number of parameters (or terms) in the Current Model"},{"id":"SSE","sort":">","description":"Sum of squares of the residual errors"},{"id":"TSS","globalOnly":true,"description":"Total sum of squares"},{"id":"SSR","description":"Sum of squares due to regression"},{"id":"MSE","description":"Mean square error (variance of the residual errors)"},{"id":"PLACEHOLDER"},{"id":"Rsq","sort":"<","description":"Square of the multiple correlation coefficient"},{"id":"adjRsq","sort":"<","description":"Adjusted R-squared - similar to Rsq, but penalizes for model complexity"},{"id":"PLACEHOLDER"},{"id":"MaxAbsErr","displayName":"Max|Err|","sort":">","description":"Maximum of the absolute value of the residual errors"},{"id":"RMSE","sort":">","description":"Square root of the mean square error"},{"id":"SKEW","sort":"<","description":"Skewness"},{"id":"XKURT","sort":"<","description":"Excess kurtosis"},{"id":"PLACEHOLDER"},{"id":"AIC","sort":">","description":"Akaike Information Criterion"},{"id":"BIC","sort":">","description":"Bayesian Information Criterion"},{"id":"F","sort":"<","description":"F-statistic"},{"id":"pF","displayName":"p(F)","sort":">","description":"Probability that a larger value of the F-statistic occurs by chance. This is a test of overall model fitness."},{"id":"PLACEHOLDER"},{"id":"seSKEW","displayName":"s.e. SKEW","sort":"<","description":"Estimated standard error of the skewness. If SKEW > 2*s.e.SKEW, there is evidence that residual errors are not normally distributed."},{"id":"seXKURT","displayName":"s.e. XKURT","sort":"<","description":"Estimated standard error of the kurtosis. If |ExKurt|> 2*s.e.ExKurt, there is evidence that residual errors are not normally distributed."},{"id":"t","displayName":"t","sort":"|<|","candidateOnly":true,"default":true,"description":"The t-statistic used to determine how significant this term is. A value above about 2.0 is usually considered significant."},{"id":"pt","displayName":"p(t)","sort":">","candidateOnly":true,"default":true,"description":"The probability that this term occurs by chance. Cell is colored green if p(t) > alpha (default alpha = 0.05)."},{"id":"stdev","show":false},{"id":"mean","show":false},{"id":"weights","show":false},{"id":"log","show":false},{"id":"mean","show":false},{"id":"std","show":false},{"id":"standardize","show":false},{"id":"RMS","show":false},{"id":"rescale","show":false},{"id":"k_order_difference","show":false}]')},28755:(t,r,e)=>{function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function a(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=e(47483),o=Symbol("data"),s=Symbol("m"),u=Symbol("n"),f=Math.pow(2,53)-1;function h(t,r,e){var n,a;for(n=0;n<t[u];n+=1)a=t[o][e*t[u]+n],t[o][e*t[u]+n]=t[o][r*t[u]+n],t[o][r*t[u]+n]=a}function d(t,r,e,n){var a;for(a=0;a<t[u];a+=1)t[o][e*t[u]+a]/=n,r[o][e*t[u]+a]/=n}function c(t,r,e,n){var a,i,f;for(i=0;i<t[s];i+=1)if(f=t[o][i*t[u]+n],i!==e)for(a=0;a<t[u];a+=1)t[o][i*t[u]+a]-=t[o][e*t[u]+a]*f,r[o][i*t[u]+a]-=r[o][e*t[u]+a]*f}var l=function(){function t(r,e,a){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(n(this,t),r instanceof t)return r;if(Array.isArray(r))return t.from(r);if(null!=a){if((a=a instanceof Float64Array?a:Float64Array.from(a)).length!==r*e)throw new Error("Array does not match the specified dimensions")}else a=new Float64Array(r*e);for(var f=new Array(e).fill(!0),h=e,d=0;d<e;d++)for(var c=0;c<r;c++)if(!i&&isNaN(a[c*e+d])){f[d]=!1,h-=1;break}if(h!=e){for(var l=new Float64Array(h*r),p=0,v=0;v<r*e;v++){var y=v%e;f[y]&&(l[p++]=a[v])}a=l,e=h}return this[o]=a,this[s]=r,this[u]=e,this}var r,e,l;return r=t,l=[{key:"random",value:function(r,e){var n,a,i=new t(r,e);for(n=0;n<r;n+=1)for(a=0;a<e;a+=1)i[o][n*e+a]=Math.random();return i}},{key:"eye",value:function(r){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,a=new t(r,n);for(e=0;e<r;e+=1)a[o][e*n+e]=1;return a}},{key:"from",value:function(r,e,n){if(r instanceof t)return r.clone();if(!Array.isArray(r))throw new TypeError("Expected an array or Matrix");if(r.length<=0)return new t(0,0);var a;if(e=e||r.length,n=n||r[0].length,null==r[0].length)return new t(1,r.length,Float64Array.from(r));for(a=0;a<r.length;a+=1)if(r[a].length!==n)throw new Error("All rows must have equal length");return new t(e,n,Float64Array.from(i.join(r)))}},{key:"diag",value:function(r){var e,n=r.length,a=new t(n,n);for(e=0;e<n;e+=1)a.data[e*n+e]=r[e];return a}},{key:"zeros",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return this.eye(t,r).dotMultiply(0)}}],(e=[{key:"get",value:function(t,r){return this[o][t*this[u]+r]}},{key:"set",value:function(t,r,e){return this[o][t*this[u]+r]=e}},{key:"add",value:function(t){var r,e=this.clone();if("number"==typeof t)for(r=0;r<e[o].length;r+=1)e[o][r]+=t;else{if(this[s]!==t[s]||this[u]!==t[u])throw new Error("Dimensions ("+this.shape+") and ("+t.shape+") do not match: "+this[u]+" !== "+t[s]+" && "+this[s]+" !== "+t[s]);for(r=0;r<e[o].length;r+=1)e[o][r]+=t[o][r]}return e}},{key:"sub",value:function(t){var r,e=this.clone();if("number"==typeof t)for(r=0;r<e[o].length;r+=1)e[o][r]-=t;else{if(this[s]!==t[s]||this[u]!==t[u])throw new Error("Dimensions ("+this.shape+") and ("+t.shape+") do not match: "+this[u]+" !== "+t[s]+" && "+this[s]+" !== "+t[s]);for(r=0;r<e[o].length;r+=1)e[o][r]-=t[o][r]}return e}},{key:"dot",value:function(r){if(this[u]!==r[s])throw new Error("Dimensions ("+this.shape+") and ("+r.shape+") do not match: "+this[u]+" !== "+r[s]);var e,n,a,i,f=new t(this[s],r[u]);for(e=0;e<this[s];e+=1)for(n=0;n<r[u];n+=1){for(a=0,i=0;a<this[u];a+=1)i+=this[o][e*this[u]+a]*r[o][a*r[u]+n];f[o][e*r[u]+n]=i}return f}},{key:"inv",value:function(){if(this[s]!==this[u])throw new Error("Must be square");var r,e,n,a=this.clone(),i=t.eye(this[s],this[u]);for(r=0,e=0;r<a[s]&&e<a[u];r+=1,e+=1){if(0===a[o]){for(n=0;0!==a[o][n*a[u]+e]&&n<a[s];n+=1);if(n>=a[s]){e+=1;continue}h(a,e,n),h(i,e,n)}d(a,i,e,a[o][e*a[u]+e]),c(a,i,r,e)}return i}},{key:"clone",value:function(){return new t(this[s],this[u],this[o].slice())}},{key:"hstack",value:function(r){if(this[s]!==r[s])throw new Error("Dimensions ("+this.shape+") and ("+r.shape+") do not match: "+this[s]+" !== "+r[s]);var e,n,a=this[u]+r[u],i=new t(this[s],a);for(e=0;e<this[s];e+=1){for(n=0;n<this[u];n+=1)i[o][e*a+n]=this[o][e*this[u]+n];for(n=0;n<r[u];n+=1)i[o][e*a+this[u]+n]=r[o][e*r[u]+n]}return i}},{key:"vstack",value:function(r){if(this[u]!==r[u])throw new Error("Dimensions ("+this.shape+") and ("+r.shape+") do not match: "+this[u]+" !== "+r[u]);var e=new t(this[s]+r[s],this[u]);return e[o].subarray(0,this[s]*this[u]).set(this[o]),e[o].subarray(this[s]*this[u]).set(r[o]),e}},{key:"dotPow",value:function(t){var r,e=this.clone();for(r=0;r<e[o].length;r+=1)e[o][r]=Math.pow(e[o][r],t),Number.isFinite(e[o][r])||(e[o][r]=f);return e}},{key:"dotMultiply",value:function(r){var e,n=this.clone();if("number"==typeof r)for(e=0;e<n[o].length;e+=1)n[o][e]=n[o][e]*r;else if(r instanceof t)for(e=0;e<n[o].length;e+=1)n[o][e]=n[o][e]*r[o][e];return n}},{key:"dotDivide",value:function(r){var e,n,a=this.clone();if("number"==typeof r)for(e=0;e<a[o].length;e+=1)a[o][e]=a[o][e]/r;else if(r instanceof t)for(e=0,n=0;e<a[o].length;e+=1,n+=1)n>=r[o].length&&(n=0),a[o][e]=a[o][e]/r[o][n];return a}},{key:"log",value:function(){var t,r=this.clone();for(t=0;t<r[o].length;t+=1)r[o][t]=Math.log10(r[o][t]);return r}},{key:"appendM",value:function(r){var e,n,a=r.shape,i=this[s],f=this[u]+a[1],h=new t(i,f);for(e=0;e<i;e+=1)for(n=0;n<f;n+=1){var d=n-this[u],c=d>=0?r[o][e*a[1]+d]:this[o][e*this[u]+n];h[o][e*f+n]=c}return h}},{key:"toString",value:function(){return this.inspect()}},{key:"toJSON",value:function(){var t,r;for(t=1,r=[];t<=this[s];t+=1)r.push(Array.from(this[o].slice((t-1)*this[u],t*this[u])));return r}},{key:"inspect",value:function(t){var r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{stylize:function(t){return""+t}},n=e.stylize(this.constructor.name,"none"),a=Array.from(this[o]).map((function(t){return(""+t).match(/(NaN|-?Infinity|-?\d*)\.?(\d*)/)})),f=Math.max.apply(null,a.map((function(t){return t[1].length}))),h=Math.min(Math.max.apply(null,a.map((function(t){return t[2].length}))),5),d=[];for(a=Array.from(this[o]).map((function(t){return e.stylize(i.formatNum(f,h,t),"number")})),r=0;r<this[s];r+=1)d.push("[ "+a.slice(r*this[u],(r+1)*this[u]).join(", ")+" ]");return n+" "+i.padAll(this.constructor.name.length+1,d.join("\n")).trim()}},{key:"col",value:function(r,e){var n,a=new t(this[s],1);if(null!=e){if(e.length>this[s])throw new RangeError("newCol cannot be longer than "+this[s]);for(n=0;n<this[s];n+=1)this[o][n*this[u]+r]=e[n]}for(n=0;n<this[s];n+=1)a[o][n]=this[o][n*this[u]+r];return a}},{key:"row",value:function(r,e){if(null!=e){if(e.length>this[u])throw new RangeError("newRow cannot be longer than "+this[u]);this[o].subarray(r*this[u]).set(e)}return new t(1,this[u],this[o].slice(r*this[u],(r+1)*this[u]))}},{key:"subset",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":";r=i.convertRange(r,this[s]),e=i.convertRange(e,this[u]);var n,a,f=new t(r.length,e.length);for(n=0;n<r.length;n+=1)for(a=0;a<e.length;a+=1)f[o][n*f[u]+a]=this[o][r[n]*this[u]+e[a]];return f}},{key:"lo",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new t(this[s]-r,this[u],this[o].slice(r*this[u]))}},{key:"hi",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new t(r,this[u],this[o].slice(0,r*this[u]))}},{key:"delColumn",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this[u];return new t(this[s],this[u]-1,this[o].filter((function(t,n){return n%e!==r})))}},{key:"shift",value:function(r){var e=new Float64Array(this[s]*this[u]);return e.subarray(this[u]*r).set(this[o].subarray(0,-this[u]*r||this[o].length)),new t(this[u],this[s],e)}},{key:"diag",value:function(){var r,e=new t(1,Math.min(this[s],this[u]));for(r=0;r<this[s]&&r<this[u];r+=1)e[o][r]=this[o][r*this[u]+r];return e}},{key:"abs",value:function(){var t,r=this.clone();for(t=0;t<r[o].length;t+=1)r[o][t]=Math.abs(r[o][t]);return r}},{key:"sum",value:function(){var t,r=0;for(t=0;t<this[o].length;t+=1)r+=this[o][t];return r}},{key:"prod",value:function(){var t,r=1;for(t=0;t<this[o].length;t+=1)r*=this[o][t];return r}},{key:"min",value:function(){var t,r;for(t=0,r=1/0;t<this[o].length;t+=1)r=Math.min(r,this[o][t]);return r}},{key:"max",value:function(){var t,r;for(t=0,r=-1/0;t<this[o].length;t+=1)r=Math.max(r,this[o][t]);return r}},{key:"T",get:function(){var r,e,n=new t(this[u],this[s]);for(r=0;r<this[s];r+=1)for(e=0;e<this[u];e+=1)n[o][e*this[s]+r]=this[o][r*this[u]+e];return n}},{key:"shape",get:function(){return[this[s],this[u]]}},{key:"data",get:function(){return this[o]}}])&&a(r.prototype,e),l&&a(r,l),t}();t.exports=l},66030:(t,r,e)=>{t.exports=e(28755)},86308:(t,r,e)=>{e(90401),t.exports.N=e(26873).lstsqSVD},26873:(t,r,e)=>{"use strict";var n=e(66030),a=e(90401),i=(e(66911),e(83453));e(47483),t.exports.lstsqSVD=function(t,r,e){var i,o=a(t),s=o[0],u=n.from(o[1]),f=o[2],h=f.dotDivide(u).dotPow(2),d=e||function(t,r,e,n,a){var i,o,s=e,u=t.shape[0],f=t.shape[1],h=Number.EPSILON,d=Math.max.apply(null,s.data);for(i=0;i<f;i++)s.data[i]<Math.max(u,f)*h*d&&(s.data[i]=0);for(o=(o=r.T.dot(a)).dotDivide(s),i=0;i<f;i++)Math.abs(o.data[i])===1/0&&(o.data[i]=0);return n.dot(o)}(t,s,u,f,r),c=d.dotDivide(1);for(i=0;i<h.data.length;i+=1)(Math.abs(h.data[i])===1/0||isNaN(h.data[i]))&&(h.data[i]=0);return{X:t,y:r,BHat:d,VdivwSq:h,stdev:1,mean:0,weights:c,V:f,w:u}},t.exports.lstsqNE=function(t,r){var e=t.T,n=e.dot(t).inv(),a=n.dot(e).dot(r),o=t.dot(a),s=t.shape[0],u=t.shape[1],f=r.sub(o).dotPow(2).sum(),h=r.sub(r.sum()/r.shape[0]).dotPow(2).sum(),d=f/(s-u),c=1-f/h,l=1-d/(h/(s-1)),p=(h-f)/(u-1)/d,v=Math.log10(d)+u/s*2,y=Math.log10(d)+u*(Math.log10(s)/s),m=Math.sqrt(d),g=n.diag().abs().dotPow(.5).dotMultiply(m),w=a.dotDivide(g),M=w.clone();return M.data.set(M.data.map((function(t){return i.pt(t,s-u)}))),{weights:a,tstats:w,mse:d,rsq:c,adjrsq:l,f:p,pf:i.pf(p,u,s-u),aic:v,bic:y,pts:M}}},90401:(t,r,e)=>{"use strict";var n=e(66030);function a(t,r){var e=Math.abs(t),n=Math.abs(r);return e>n?e*Math.sqrt(1+Math.pow(n/e,2)):0===n?0:n*Math.sqrt(1+Math.pow(e/n,2))}t.exports=function(t){var r=Number.EPSILON,e=Number.MIN_VALUE/r;if(1+r<=1)throw new Error("Make eps bigger");if(e<=0)throw new Error("Make tol bigger");var i,o,s,u,f,h,d,c,l,p,v,y,m,g=t.clone(),w=g.shape[0],M=g.shape[1],b=[],S=[],E=new n(M,M),k=0,x=0;if(w<M)throw new Error("m is less than n");for(i=0;i<M;i++){for(b[i]=k,f=0,u=i+1,o=i;o<w;o++)f+=g.data[o*M+i]*g.data[o*M+i];if(f<e)k=0;else for(d=(h=g.data[i*M+i])*(k=h<0?Math.sqrt(f):-Math.sqrt(f))-f,g.data[i*M+i]=h-k,o=u;o<M;o++){for(f=0,s=i;s<w;s++)f+=g.data[s*M+i]*g.data[s*M+o];for(h=f/d,s=i;s<w;s++)g.data[s*M+o]=g.data[s*M+o]+h*g.data[s*M+i]}for(S[i]=k,f=0,o=u;o<M;o++)f+=g.data[i*M+o]*g.data[i*M+o];if(f<=e)k=0;else{for(d=(h=g.data[i*M+i+1])*(k=h<0?Math.sqrt(f):-Math.sqrt(f))-f,g.data[i*M+i+1]=h-k,o=u;o<M;o++)b[o]=g.data[i*M+o]/d;for(o=u;o<w;o++){for(f=0,s=u;s<M;s++)f+=g.data[o*M+s]*g.data[i*M+s];for(s=u;s<M;s++)g.data[o*M+s]=g.data[o*M+s]+f*b[s]}}(c=Math.abs(S[i])+Math.abs(b[i]))>x&&(x=c)}for(i=M-1;i>-1;i--){if(0!==k){for(d=k*g.data[i*M+i+1],o=u;o<M;o++)E.data[o*M+i]=g.data[i*M+o]/d;for(o=u;o<M;o++){for(f=0,s=u;s<M;s++)f+=g.data[i*M+s]*E.data[s*M+o];for(s=u;s<M;s++)E.data[s*M+o]+=f*E.data[s*M+i]}}for(o=u;o<M;o++)E.data[i*M+o]=0,E.data[o*M+i]=0;E.data[i*M+i]=1,k=b[i],u=i}for(i=M-1;i>-1;i--){for(u=i+1,k=S[i],o=u;o<M;o++)g.data[i*M+o]=0;if(0!==k){for(d=g.data[i*M+i]*k,o=u;o<M;o++){for(f=0,s=u;s<w;s++)f+=g.data[s*M+i]*g.data[s*M+o];for(h=f/d,s=i;s<w;s++)g.data[s*M+o]+=h*g.data[s*M+i]}for(o=i;o<w;o++)g.data[o*M+i]=g.data[o*M+i]/k}else for(o=i;o<w;o++)g.data[o*M+i]=0;g.data[i*M+i]+=1}for(r*=x,s=M-1;s>-1;s--)for(l=0;l<50;l++){for(u=s;u>-1;u--){if(p=!1,Math.abs(b[u])<=r){p=!0;break}if(Math.abs(S[u-1])<=r)break}if(!p)for(y=0,f=1,m=u-1,i=u;i<s+1&&(h=f*b[i],b[i]=y*b[i],!(Math.abs(h)<=r));i++)for(d=a(h,k=S[i]),S[i]=d,y=k/d,f=-h/d,o=0;o<w;o++)c=g.data[o*M+m],v=g.data[o*M+i],g.data[o*M+m]=c*y+v*f,g.data[o*M+i]=-c*f+v*y;if(v=S[s],u===s){if(v<0)for(S[s]=-v,o=0;o<M;o++)E.data[o*M+s]=-E.data[o*M+s];break}if(l>=49)throw new Error("SVD: No convergence");for(x=S[u],k=a(h=(((c=S[s-1])-v)*(c+v)+((k=b[s-1])-(d=b[s]))*(k+d))/(2*d*c),1),h=h<0?((x-v)*(x+v)+d*(c/(h-k)-d))/x:((x-v)*(x+v)+d*(c/(h+k)-d))/x,y=1,f=1,i=u+1;i<s+1;i++){for(k=b[i],c=S[i],d=f*k,k*=y,v=a(h,d),b[i-1]=v,h=x*(y=h/v)+k*(f=d/v),k=-x*f+k*y,d=c*f,c*=y,o=0;o<M;o++)x=E.data[o*M+i-1],v=E.data[o*M+i],E.data[o*M+i-1]=x*y+v*f,E.data[o*M+i]=-x*f+v*y;for(v=a(h,d),S[i-1]=v,h=(y=h/v)*k+(f=d/v)*c,x=-f*k+y*c,o=0;o<w;o++)c=g.data[o*M+i-1],v=g.data[o*M+i],g.data[o*M+i-1]=c*y+v*f,g.data[o*M+i]=-c*f+v*y}b[u]=0,b[s]=h,S[s]=x}return[g,S,E]}},86607:t=>{function r(t,a,i){return(r=e()?Reflect.construct:function(t,r,e){var a=[null];a.push.apply(a,r);var i=new(Function.bind.apply(t,a));return e&&n(i,e.prototype),i}).apply(null,arguments)}function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function n(t,r){return(n=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function a(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){function t(r,e,n,a){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=r,this.args=e,this.fn=n}var r,e;return r=t,(e=[{key:"calc",value:function(t){return t[this.name]=this.fn(t),t}},{key:"inspect",value:function(t){return"".concat(this.name,"(").concat(this.args,")")}}])&&a(r.prototype,e),t}();t.exports=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r(i,e)}},52799:(t,r,e)=>{var n=e(86607),a=e(66030),i=e(83453);t.exports=[n("X",[],(function(t){return t.X})),n("y",[],(function(t){return t.y})),n("BHat",[],(function(t){return t.BHat})),n("yHat",["X","BHat"],(function(t){var r=t.X,e=t.BHat;return r.dot(e)})),n("nd",["X"],(function(t){return t.X.shape[0]})),n("np",["X"],(function(t){return t.X.shape[1]})),n("SSE",["y","yHat"],(function(t){var r=t.y,e=t.yHat;return r.sub(e).dotPow(2).sum()})),n("TSS",["y"],(function(t){var r=t.y;return r.sub(r.sum()/r.shape[0]).dotPow(2).sum()})),n("SSR",["TSS","SSE"],(function(t){return t.TSS-t.SSE})),n("Vary",["TSS","nd"],(function(t){return t.TSS/(t.nd-1)})),n("MSR",["SSR","np"],(function(t){return t.SSR/(t.np-1)})),n("SKEW",["y","yHat","nd"],(function(t){var r=t.y,e=t.yHat,n=t.nd,a=r.sub(e),i=a.sum()/a.shape[0],o=Math.sqrt(a.sub(i).dotPow(2).sum()/(n-1));return n*a.sub(i).dotPow(3).sum()/(n-1)/(n-2)/o/o/o})),n("XKURT",["y","yHat","nd"],(function(t){var r=t.y,e=t.yHat,n=t.nd,a=r.sub(e),i=a.sum()/a.shape[0],o=Math.sqrt(a.sub(i).dotPow(2).sum()/(n-1));return n*(n+1)*a.sub(i).dotPow(4).sum()/(n-1)/(n-2)/(n-3)/o/o/o/o-3*(n-1)*(n-1)/(n-2)/(n-3)})),n("seSKEW",["nd"],(function(t){var r=t.nd;return Math.sqrt(6/r)})),n("seXKURT",["nd"],(function(t){var r=t.nd;return Math.sqrt(24/r)})),n("MSE",["SSE","nd","np"],(function(t){return t.SSE/(t.nd-t.np)})),n("RMSE",["MSE"],(function(t){var r=t.MSE;return Math.sqrt(r)})),n("Rsq",["SSE","TSS"],(function(t){return 1-t.SSE/t.TSS})),n("adjRsq",["Rsq","np","nd"],(function(t){var r=t.Rsq,e=t.nd;return 1-(1-r)*(e-1)/(e-t.np)})),n("F",["MSR","MSE"],(function(t){return t.MSR/t.MSE})),n("AIC",["MSE","np","nd"],(function(t){var r=t.MSE,e=t.np,n=t.nd;return Math.log10(r)+e/n*2})),n("BIC",["MSE","np","nd"],(function(t){var r=t.MSE,e=t.np,n=t.nd;return Math.log10(r)+e*(Math.log10(n)/n)})),n("MaxAbsErr",["y","yHat"],(function(t){var r=t.y,e=t.yHat;return r.sub(e).abs().max()})),n("t",["X","VdivwSq","MSE","BHat"],(function(t){var r,e,n=t.X,i=t.VdivwSq,o=t.MSE,s=t.BHat,u=new a(1,n.shape[1]);for(e=0;e<n.shape[1];e+=1)r=Math.sqrt(i.row(e).sum()*o),u.data[e]=r;return s.dotDivide(u)})),n("pt",["t","np","nd"],(function(t){var r=t.t,e=t.np,n=t.nd,a=r.clone();return a.data.set(a.data.map((function(t){return Math.max(0,i.pt(t,n-e))}))),a})),n("pF",["F","np","nd"],(function(t){var r=t.F,e=t.np,n=t.nd;return Math.max(i.pf(Math.abs(r),e,n-e)-1e-15,0)})),n("log",["X"],(function(t){return t.X.log()})),n("mean",["X"],(function(t){var r=t.X;return r.data.reduce((function(t,r){return t+r}),0)/r.data.length})),n("std",["X","mean"],(function(t){var r=t.X,e=t.mean,n=r.data.map((function(t){return Math.pow(t-e,2)})).reduce((function(t,r){return t+r}),0);return Math.sqrt(n/r.data.length)})),n("standardize",["X","mean","std"],(function(t){var r=t.X,e=t.mean,n=t.std,a=r.clone();return a.data.set(a.data.map((function(t){return(t-e)/n}))),a})),n("RMS",["X"],(function(t){var r=t.X.clone(),e=r.data.map((function(t){return Math.pow(t,2)})).reduce((function(t,r){return t+r}),0);return Math.sqrt(e/r.data.length)})),n("rescale",["X","RMS"],(function(t){var r=t.X,e=t.RMS,n=r.clone();return n.data.set(n.data.map((function(t){return t/e}))),n})),n("k_order_difference",["X","k"],(function(t){var r=t.X,e=t.k;if(!e||isNaN(e))return r;var n=r.clone();return n.data.set(function t(r,e){return 1==e?r.map((function(t,n){return n<e?null:t-r[n-1]})):(k_1_order=t(r,e-1),r.map((function(t,r){return r<e?null:k_1_order[r]-k_1_order[r-1]})))}(n.data,e)),n})),n("sensitivity_part",["data","exp","derivative"],(function(t){var r=t.data,e=t.exp,n=t.derivative;return null==r?-1:n?r.map((function(t){return e*Math.pow(t,e-1)})):r.map((function(t){return Math.pow(t,e)}))}))]},83453:t=>{"use strict";function r(t,r,e,n){for(var a=1,i=a,o=r;o<=e;)i+=a*=t*o/(o-n),o+=2;return i}t.exports.pt=function(t,e){var n=(t=Math.abs(t))/Math.sqrt(e),a=Math.atan(n);if(1===e)return 1-a/(Math.PI/2);var i=Math.sin(a),o=Math.cos(a);return e%2==1?1-(a+i*o*r(o*o,2,e-3,-1))/(Math.PI/2):1-i*r(o*o,1,e-3,-1)},t.exports.pf=function(t,e,n){var a=n/(e*t+n);if(e%2==0)return r(1-a,n,e+n-4,n-2)*Math.pow(a,n/2);if(n%2==0)return 1-r(a,e,e+n-4,e-2)*Math.pow(1-a,e/2);var i=Math.atan(Math.sqrt(e*t/n)),o=i/(Math.PI/2),s=Math.sin(i),u=Math.cos(i);if(n>1&&(o+=s*u*r(u*u,2,n-3,-1)/(Math.PI/2)),1===e)return 1-o;var f=4*r(s*s,n+1,e+n-4,n-2)*s*Math.pow(u,n)/Math.PI;if(1===n)return 1-o+f/2;for(var h=2;h<=(n-1)/2;)f*=h/(h-.5),h+=1;return 1-o+f}},66911:(t,r,e)=>{e(86607);var n=e(36713),a=e(52799),i=e(43770),o=n(a);i.filter((function(t){return!t.show})),t.exports=function(t){return o.reduce((function(t,r){return r.calc(t)}),t)},t.exports.compute=function(t,r){if(stat_def=a.find((function(r){return r.name===t})),null==stat_def)throw new ReferenceError("Cannot find statistic '"+t+"'");return stat_def.calc(r)[t]}},36713:t=>{var r=function(t,r){var e=r.map((function(t){return t.name}));return t.args.filter((function(t){return e.includes(t)})).length};t.exports=function(t){for(var e,n=t.filter((function(t){return 0===t.args.length})),a=[],i=t.filter((function(t){return!n.includes(t)}));n.length>0;)e=n.shift(),i=i.filter((function(t){return t!==e})),a.push(e),n=n.concat(i.filter((function(t){return 0===r(t,i)}))),i=i.filter((function(t){return!n.includes(t)}));if(i.length>0)throw new Error("Statistics are co-dependent");return a}},47483:t=>{"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,r){return t=Math.max(0,t),Array(t+1).join(r)}var n=function(t){return e(t," ")};function a(t,r){return n(t-(""+(r=r||"")).length)+r}var i=t.exports.range=function(t,r){return t>=r?[]:Array(r-t).join(" ").split(" ").map((function(r,e){return e+t}))};t.exports.zeros=function(t){return Array(t).join(" ").split(" ").map((function(){return 0}))},t.exports.sum=function(t){return t.reduce((function(t,r){return t+r}))},t.exports.convertRange=function(r,e){var n,a,i;if("number"==typeof r)return r<0?[e+r]:[r];if("string"!=typeof r)return r.map((function(t){return t<0?e+t:t}));if((n=r.split(":")).length>1)return a=parseInt(n[0])||0,i=parseInt(n[1])||e,a<0&&(a=e+a),i<0&&(i=e+i),t.exports.range(a,i);throw new TypeError("Invalid range")},t.exports.formatNum=function(t,r,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:" ",o=(a=""+a).match(/(NaN|-?Infinity|-?\d*)\.?(\d*)/),s=o[1],u=o[2],f="";return u.length>r&&(u=u.slice(0,r)),f+=n(t-s.length)+s,""!==u||r>0?(f+=".",f+=u.slice(0,r)+e(r-u.length,i)):f+=n(r+1),f};var o=t.exports.padAll=function(t,r){return Array.isArray(r)?r.map((function(r){return o(t+r.length,r)})):"string"==typeof r?r.split("\n").map((function(r){return a(t+r.length,r)})).join("\n"):a(t,r)},s=t.exports.clone=function(t){if("object"!==r(t))return t;if(Array.isArray(t))return t.map(s);var e={};return Object.keys(t).forEach((function(r){return e[r]=s(t[r])})),e};t.exports.split=function(t,r){var e,n=i(0,r).map((function(){return[]}));for(e=0;e<t.length;e+=1)n[e%r].push(t[e]);return n},t.exports.splitToSize=function(t,r){var e,n,a=[];for(n=0,e=[];n<t.length;n+=1)e.push(t[n]),(n+1)%r==0&&(a.push(e),e=[]);return n%r!=0&&a.push(e),a},t.exports.join=function(t){return[].concat.apply([],t)},t.exports.sign=function(t){return t<0?-1:t>0?1:0},t.exports.argmax=function(t){return t.indexOf(Math.max.apply(null,t))}},89047:()=>{!function(){var t=!1;try{document}catch(r){t=!0}if(t){var r=self.postMessage;self.postMessage=function(t,e){try{r(t,e)}catch(t){console.warn(t.message)}},self.Worker=function(t){var r=this;this.id=Math.random().toString(36).substr(2,5),this.eventListeners={message:[]},self.addEventListener("message",(function(t){if(t.data._from===r.id){var e=new MessageEvent("message");e.initMessageEvent("message",!1,!1,t.data.message,r,"",null,[]),r.dispatchEvent(e),r.onmessage&&r.onmessage(e)}})),self.location.pathname;var e=t;self.postMessage({_subworker:!0,cmd:"newWorker",id:this.id,path:e})},Worker.prototype={onerror:null,onmessage:null,postMessage:function(t){self.postMessage({_subworker:!0,id:this.id,cmd:"passMessage",message:t})},terminate:function(){self.postMessage({_subworker:!0,cmd:"terminate",id:this.id})},addEventListener:function(t,r,e){this.eventListeners[t]&&this.eventListeners[t].push(r)},removeEventListener:function(t,r,e){if(t in this.eventListeners){var n=this.eventListeners[t].indexOf(r);-1!==n&&this.eventListeners[t].splice(n,1)}},dispatchEvent:function(t){for(var r=this.eventListeners[t.type],e=0;e<r.length;e++)r[e](t)}}}var e={},n={newWorker:function(t){var r=new Worker(t.data.path);r.addEventListener("message",(function(r){var e={_from:t.data.id,message:r.data};t.target.postMessage(e)})),e[t.data.id]=r},terminate:function(t){e[t.data.id].terminate()},passMessage:function(t){e[t.data.id].postMessage(t.data.message)}},a=function(t){t.data._subworker&&n[t.data.cmd](t)},i=window.Worker;window.Worker=function(t){var r=t.indexOf("blob:");-1!==r&&0!==r&&(t=t.substring(r));var e=new i(t);return e.addEventListener("message",a),e}}()}},r={};function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}(()=>{"undefined"!=typeof window&&e(89047);var t=e(66030),r=e(86308).N,n=e(66911);onmessage=function(e){var a=e.data,i=a.fit,o=a.cross,s=a.validation,u=a.candidates,f=a.jobId;i.X=new t(i.X.m,i.X.n,i.X.data),i.y=new t(i.y.m,i.y.n,i.y.data),o!==i&&(o.X=new t(o.X.m,o.X.n,o.X.data),o.y=new t(o.y.m,o.y.n,o.y.data));var h={fit:i,cross:o,validation:s},d=u.map((function(e,a){var i=e.fit,o=e.cross,s=(e.validation,e.lag);if(!i)return NaN;i={X:h.fit.X.hstack(new t(i.m,i.n,i.data)).lo(s),y:h.fit.y.lo(s)},o={X:h.cross.X.hstack(new t(o.m,o.n,o.data)).lo(s),y:h.cross.y.lo(s)},a%200==0&&postMessage({type:"progress",data:a,jobId:f});try{var u=n(r(i.X,i.y)),d=u.t.get(0,u.t.shape[0]-1),c=u.pt.get(0,u.pt.shape[0]-1);return(u=n(r(o.X,o.y,u.weights))).coeff=u.weights.get(0,u.weights.shape[0]-1),u.t=d,u.pt=c,delete u.weights,u}catch(t){return console.error(t),NaN}}));postMessage({type:"result",data:d,jobId:f})}})()})();