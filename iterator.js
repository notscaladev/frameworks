var iterator = function (object){
  this.object = object;
  this.hasNext = function(bool){
    return false;
  }

  this.next = function(){
    return object;
  }

  this.remove = function(){
    this.object = null;
  }
}
