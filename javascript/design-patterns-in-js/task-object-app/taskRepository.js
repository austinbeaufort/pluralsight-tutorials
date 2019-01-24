
let repo = function() {
    
    return {
        get: function(id) {
            console.log('getting task ' + id);
            return {
                name: 'new task from db'
            }
        }
    }

}

module.exports = repo();