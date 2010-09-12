var Hash = new Class({
  Extends: Object,

  initialize: function(options){
    this.attributes = new Object(options);
  },

  get: function(key){
    return (this.attributes.hasOwnProperty(key)) ? this.attributes[key] : null;
  },

  set: function(key, value){
    if (!this.attributes[key] || this.attributes.hasOwnProperty(key)){
      this.attributes[key] = value;
      Hash.fireEvent('onChange', this).fireEvent('onChange:' + key, this);
     }
    return this.attributes;
  }
}).extend(Events.prototype);

var HashClass = function(options){
  return new Class({
    Extends: Hash,
  }).extend({
    onChange: function(attribute, callback){
      if(typeOf(attribute) == 'function'){
        Hash.addEvent('onChange', attribute);
      }else{
        Hash.addEvent('onChange:' + attribute, callback);
      }
    }
  }).implement(options);
};

exports.HashClass = HashClass;

exports.apply = function(object){
  Object.append(object, exports);
};
