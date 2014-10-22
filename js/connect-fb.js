/****
Facebook class use Communicate with facebook like you using with Facebook Javascript SDK
****/
function Facebook(){
	this.apiVersion = "v2.1";
	this.accessToken = "";
	this.api = function(cmd,way,callback){
		$.ajax({
			url: "https://graph.facebook.com/"+this.apiVersion+cmd,
			type: way,
			success: function(result) {
				callback(result);
			}
		});
	}
	this.api = function(cmd,callback){
		this.api(cmd,'GET',callback);
	}
	this.setAccessToken = function (Token){
		this.accessToken=Token;
	}
	this.getAccessToken = function(){
		return this.accessToken;
	}
}