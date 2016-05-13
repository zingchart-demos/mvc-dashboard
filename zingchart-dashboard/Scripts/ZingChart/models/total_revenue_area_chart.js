var total_revenue_area_chart = {
    type: "area",
    "utc": true, // Must set utc because zingchart pulls from your local computer time
    //labels:[{}],
    plotarea:{},
    plot:{
        aspect: "spline",
        activeArea:true,
        lineWidth:1,
        marker:{
            visible:false
        },
        tooltip:{
            visible: false,
        }
    },
    scaleX:{
        zooming: true,
        transform:{
            type:'date',
            text:'%M %d, %Y'
        },
        tick:{
            visible:false
        },
        refLine:{
            visible:false
        },
        item:{
            fontSize:12
        },
        lineColor:'none'
    },
    scaleY:{
        guide:{
            visible:true
        },
        tick:{
            visible:false
        },
        refLine:{
            visible:false
        },
        item:{
            fontSize:14
        },
        lineColor:'none',
        format:'$%v',
    },
    scrollX:{},
    scrollY:{},
    crosshairX:{
        plotLabel:{
            //text:"Recurring Revenue on <br> %scale-key-value is <span style='font-color:green;font-style:bold;'>$%v</span>",
            text:"Recurring Revenue on<br><span style='color:#900;font-size:17px;'>%scale-key-value</span> is <span style='color:#090;font-size:17px;font-weight:bold;'>$%v</span><br><span style='color:#009;font-weight:bold;'>",
            backgroundColor: 'transparent',
            //alpha: 0.6,
            decimals:2,
            textAlign:"center",
            fontFamily:"Georgia",
            fontSize:16,
            fontColor:"black",//"#666699",
            padding:"10%",
            borderRadius:"5px",
            callout:true,
            placement:"node-top",
            multiple:true,
            offsetY:-5
        },
        scaleLabel:{
            visible:false
        },
        marker:{
            type:"circle",
            size:5,
            backgroundColor:"white",
            borderColor:"#666699",
            borderWidth:1
        },
        lineColor:"white",
        lineWidth:2
    },
    zoom: {
        label: {
            visible:true,
            alpha: 0.7
        }
    },
    series: [
	    {
		    text: 'Recurring Revenue',
		    maxTrackers:10000, // default maxTrackers is 750. It will turn off tooltips if you have more nodes than this amount.
		    values: [
			    [1430092800000, 35],
			    [1430092800000 + 86400000 * 1, 42],
			    [1430092800000 + 86400000 * 2, 67],
			    [1430092800000 + 86400000 * 3, 89],
			    [1430092800000 + 86400000 * 4, 25],
			    [1430092800000 + 86400000 * 5, 34],
			    [1430092800000 + 86400000 * 6, 67],
			    [1430092800000 + 86400000 * 7, 85]
		    ]
	    }
    ]
};