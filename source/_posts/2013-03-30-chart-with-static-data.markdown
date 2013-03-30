---
layout: post
title: "График со статическими данными"
date: 2013-03-30 23:03
comments: true
categories: 
---
Сначала нужно собрать актуальную версию Vis.js

    git clone git://github.com/dmage/vis.git
    cd vis
    gmake

Потом создать файл с графиком

{% codeblock test.html %}
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>Vis.js</title>
<link rel="stylesheet" type="text/css" href="vis.css">
<script src="http://yandex.st/jquery/1.9.1/jquery.min.js"></script>
<script src="vis.js"></script>
<script>
$(function() {
    Vis(
        {
            $object: $('.b-chart'),
            xAxes: [
                { rangeProvider: { name: 'i-static-range-provider', min: 0.5, max: 19.5 } }
            ],
            yAxes: [
                { rangeProvider: { name: 'i-static-range-provider', min: -3.5, max: 9.5 } }
            ],
            items: [
                {
                    dataProvider: {
                        name: 'i-static-data-provider',
                        x: [1,2,3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19],
                        y: [1,0,1,-1,-3,-2,-3,-3,0, 1,-1,-1, 2, 1, 4, 5, 4, 8, 9]
                    }
                },
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

В результате получится график

{% raw %}
<div class="vis b-chart" data-block="b-chart" data-config='{"xAxes": [{"rangeProvider": {"name": "i-static-range-provider", "min": 0.5, "max": 19.5}}], "yAxes": [{"rangeProvider": {"name": "i-static-range-provider", "min": -3.5, "max": 9.5}}], "items": [{"dataProvider": {"name": "i-static-data-provider", "x": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], "y": [1,0,1,-1,-3,-2,-3,-3,0,1,-1,-1,2,1,4,5,4,8,9]}}], "overlays": [{"name": "b-grid-overlay"}, {"name": "b-render-overlay"}, {"name": "b-tooltip-overlay"}]}'></div>
{% endraw %}
