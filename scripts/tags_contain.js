hexo.extend.helper.register('tags_contain', function(tag){
    var isTag = false;
    this.post.tags.forEach(function(item) {
        if(item.name === tag) isTag = true;
    })
    return isTag;
});