Meteor.publish('posts', function(){

	return Posts.find(); 
})
Meteor.publish('likes', function(postid){

	return Likes.find({post:postid});
})