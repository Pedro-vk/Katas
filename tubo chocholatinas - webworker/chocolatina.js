Array.prototype.clone = function() {
		return this.slice(0);
};
Array.prototype.higher = function() {
	a = this.clone();
	a.sort(function(a,b){return a-b;});
	return a.pop();
};

self.addEventListener('message',function(e){
	var r = [],
		o=e.data,
		h = o.length;
	
	function s(a,j,h,d){
		j++;
		h--;
		var m = [];
		if(h!=0){
			for(var M=0;M<2;M++)
				m[M] = s(a,j,h,M);
		}else{
			var l = r.length;
			r[l] = 0;
			m[0]=[{
				R:l,
				O:o.clone()
			}];
		}
		if(j==0) return z;
		var z = [];
		for(var M=0;M<m.length;M++)
			for(var a=0;a<m[M].length;a++){
				var p = h + 1;
				r[m[M][a].R] += d==0 ? m[M][a].O.shift() * p : m[M][a].O.pop() * p;
				z.push({
					R:m[M][a].R,
					O:m[M][a].O.clone()
				});
			}
		return z;
	}
	s(o,0,h,0);
	self.postMessage({n:r.higher(),o:o});
},false);