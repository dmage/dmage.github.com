Vis.blocks['i-static-random-data-provider'] = {
    get: function() {
        var x = [], y = [];
        for (var i = 1; i < 20; ++i) {
            x.push(i);
            y.push(Math.random());
        }
        return { x: x, y: y };
    }
};
