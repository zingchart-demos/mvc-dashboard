var plans_breakout_pie_chart = {
    type: 'pie',
    plot: {
        cursor: 'hand',
        valueBox: {
            fontSize: 14
        },
        slice: 100, //creates the donut
        valueBox: {
            decimal: 2,
            thousandsSeparator: ",",
            text: "%t: <br>$%v</span> ", //Value box text.
            placement: 'center',   //Value box placement is centered.
            fontColor: 'black',
            fontSize: 30,
            fontWeight: 'normal',
            rules: [
              {
                  rule: "%p != 0",
                  visible: false
              }
            ]
        },
        tooltip: {
            visible: true,
            text: "%t: $%v -- %npv%",
            decimals: 2,
            thousandsSeparator: ","
        },
        onChange: true, // onChange true will listen for changes to re-animate
        onLegend: true, // Will trigger the onLegend change when toggleAction is set to remove
        animation: {
            effect: 5,
            speed: 360
        }
    },
    plotarea: {
        x: 40
    },
    legend: {
        backgroundColor: 'none',
        align: 'left',
        layout: 'vertical',
        toggleAction: 'remove',
        borderWidth: 0,
        marker: {
            borderWidth: 0,
            size: 7
        },
        item: {
            cursor: 'hand',
            markerStyle: 'circle',
            fontColor: '#3f3f3f',
            fontSize: 10,
            text: "%t $%v <span style='font-style:italic; color:#cacaca; padding-right:20px;'>( %npv% )</span>"
        }
    },
    scaleR: {
        refAngle: 200 // rotates the donut
    },
    series: [
        {
            values: [26],
            "text": "Personal",
        },
        {
            values: [25],
            "text": "Startup",
        },
        {
            values: [21],
            "text": "Professional",
        },
        {
            values: [15],
            "text": "Agency",
        },
        {
            values: [13],
            "text": "Enterprise",
        }
    ]
};

zingchart.node_click = function (p) {
    console.log(p);

    // Only apply this node click to this chart
    if (p.id === 'plans_breakout_pie_chart') {
        var plotIndex = p.plotindex;
        var ruleTemplate = {
            'rules': []
        };

        ruleTemplate['rules'][0] = {
            'rule': '%p != ' + plotIndex,
            'visible': false
        }

        console.log('rules', ruleTemplate['rules'])
        zingchart.exec(p.id, 'modify', {
            data: {
                'plot': {
                    'value-box': {
                        'rules': ruleTemplate['rules']
                    }
                }
            }
        });
    }
}