---
layout: post
title: "Простой собственный data provider для данных графика"
date: 2013-03-31 21:22
comments: true
categories: 
---
TODO: сопроводительный текст :)

{% codeblock %}
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
{% endcodeblock %}

{% codeblock %}
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>Vis.js</title>
<link rel="stylesheet" type="text/css" href="vis.css">
<script src="http://yandex.st/jquery/1.9.1/jquery.min.js"></script>
<script src="vis.js"></script>
<script>
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

$(function() {
    Vis(
        {
            $object: $('.b-chart'),
            xAxes: [
                { rangeProvider: { name: 'i-static-range-provider', min: 0.5, max: 19.5 } }
            ],
            yAxes: [
                { rangeProvider: { name: 'i-static-range-provider', min: 0, max: 1 } }
            ],
            items: [
                { dataProvider: { name: 'i-static-random-data-provider' } }
            ],
            overlays: [
                { name: 'b-grid-overlay' },
                { name: 'b-render-overlay' },
                { name: 'b-tooltip-overlay' }
            ]
        },
        'b-chart'
    );
});
</script>
</head>

<body>
<h1>Vis.js</h1>
<div class="b-chart"></div>
</body>

</html>
{% endcodeblock %}

{% raw %}
<script src="/javascripts/2013-03-31-simple-custom-item-data-provider.js"></script>
<div class="vis b-chart" data-block="b-chart" data-config='{"xAxes": [{"rangeProvider": {"name": "i-static-range-provider", "min": 0.5, "max": 19.5}}], "yAxes": [{"rangeProvider": {"name": "i-static-range-provider", "min": 0, "max": 1}}], "items": [{"dataProvider": {"name": "i-static-random-data-provider"}}], "overlays": [{"name": "b-grid-overlay"}, {"name": "b-render-overlay"}, {"name": "b-tooltip-overlay"}]}'></div>
{% endraw %}
