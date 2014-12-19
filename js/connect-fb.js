/****
Facebook class use Communicate with facebook like you using with Facebook Javascript SDK
****/
function Facebook(){
	this.apiVersion = "v2.2";
	this.accessToken = "";
	this.api = function(cmd,way,callback){
		if(typeof callback === "undefined"){
			this.api(cmd,'GET',way);
			return ;
		}
		var seperate = (cmd.indexOf("?") > -1)?"&":"?";
		$.ajax({
			url: "https://graph.facebook.com/"+this.apiVersion+cmd+seperate+"access_token="+this.getAccessToken(),
			type: way,
			success: function(result) {
				var res = this.url.split("access_token=");
				result.access_token = res[1];
				callback(result);
			},
			error: function(jqXHR,data, errorThrown) {
				var err ={"error":errorThrown};
				callback(err);
			}
		});
	}
	this.fql = function(cmd,callback){
		$.ajax({
			url: "https://graph.facebook.com/fql?q="+cmd+"&access_token="+this.getAccessToken(),
			type: 'GET',
			async: false,
			success: function(result) {
				var res = this.url.split("access_token=");
				result.access_token = res[1];
				callback(result);
			},
			error: function(jqXHR,data, errorThrown) {
				var err ={"error":errorThrown};
				callback(err);
			}
		});
	}
	this.setAccessToken = function (Token){
		this.accessToken=Token;
	}
	this.getAccessToken = function(){
		return this.accessToken;
	}
}