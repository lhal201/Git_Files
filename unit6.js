var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Bob",
        number: "555-222-114",
        address: ['One Hell of Night','At Your','Bach','one more']
    },
    steve: {
        firstName: "Steve",
        lastName: "Daniels",
        number: "555-222-115",
        address: ['Something Lane','Somewhere','Other there','last one']
    }
};

var list = function (friends) {
    for(var prop in friends){
        console.log(prop)
    }    
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};


