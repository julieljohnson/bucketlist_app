(function () {
  "use strict";
  angular.module('interests')
    .factory('CommentService', function($http) {

        var comment = [];

        var getOneComment = function (newcomment, id) {
            return $http.get('/bucket_list_items/' + id  + '/comments.json');
        };

        var postComment = function (commentsPushed, newComment, id) {
            if(commentsPushed){
            commentsPushed.push(newComment);
            $http.post('/bucket_list_items/' + id + '/comments.json', commentsPushed);
            }else{
            commentsPushed = [newComment];
            $http.post('/bucket_list_items/' + id  + '/comments.json', commentsPushed);
            console.log('postcomment');
            };
        };

        var addComment=function (newComment, currentUser) {
            // user.push(newUserBucket);
            $http.post('/bucket_list_items/comments' + id  + '/comments.json').success(function() {
                console.log('addComment');
            });
        };

        return {
            getOneComment: getOneComment,
            postComment: postComment
        };

    });


})();
