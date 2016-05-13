/**
 * Render Both charts to the homepage. 
 * Order doesn't matter with charts this small, but
 * always keep the user in mind and load the chart in the
 * current viewport first
 */
zingchart.render({
    id: 'total_revenue_area_chart',
    height: 450,
    width: '100%',
    data: total_revenue_area_chart
});

zingchart.render({
    id: 'plans_breakout_pie_chart',
    height: 450,
    width: '100%',
    data: plans_breakout_pie_chart
});