/****
Facebook class use Communicate with facebook like you using with Facebook Javascript SDK
****/
function Facebook(){
	this.apiVersion = "v2.1";
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
				callback(result);
			},
			error: function(jqXHR,data, errorThrown) {
				var err ={"error":data};
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