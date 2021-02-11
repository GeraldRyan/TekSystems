Object.defineProperty(String.prototype, 'hashCode', {
  value: function(ll=1000) {
    return (Math.abs(this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)) * 331) % ll
  }
}); 
