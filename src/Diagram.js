import React from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Diagram extends React.Component {
    constructor(props){
        super(props);
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
        this.state ={
            options: {},
        }
    }

    toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }

    render() {

        //alert(this.props.diagramNew.length);

        if(this.props.diagramNew.length != 7) {
            return(
                <div/>
            )
        }
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Total views: Age (by day of week)",
                fontFamily: "verdana"
            },
            axisY: {
                title: "View count",
            },
            toolTip: {
                shared: false,
                enabled: false,
                reversed: true,
            },
            legend: {
                verticalAlign: "center",
                horizontalAlign: "right",
                //reversed: true,
                cursor: "pointer",
                itemclick: this.toggleDataSeries
            },
            height: 1000,
            data: [
                {
                    type: "stackedColumn",
                    color: this.props.diagramColor[0].color,
                    name: "Undefined",
                    showInLegend: true,
                    yValueFormatString: "###",
                    dataPoints: [
                        {label: "Sunday", y: this.props.diagramNew[0].weekViews[0].count},
                        {label: "Monday", y: this.props.diagramNew[1].weekViews[0].count},
                        {label: "Tuesday", y: this.props.diagramNew[2].weekViews[0].count},
                        {label: "Wednesday", y: this.props.diagramNew[3].weekViews[0].count},
                        {label: "Thursday", y: this.props.diagramNew[4].weekViews[0].count},
                        {label: "Friday", y: this.props.diagramNew[5].weekViews[0].count},
                        {label: "Saturday", y: this.props.diagramNew[6].weekViews[0].count},
                    ]
                },
                {
                    type: "stackedColumn",
                    color: this.props.diagramColor[1].color,
                    name: "Kids",
                    showInLegend: true,
                    yValueFormatString: "###",
                    dataPoints: [
                        {label: "Sunday", y: this.props.diagramNew[0].weekViews[1].count},
                        {label: "Monday", y: this.props.diagramNew[1].weekViews[1].count},
                        {label: "Tuesday", y: this.props.diagramNew[2].weekViews[1].count},
                        {label: "Wednesday", y: this.props.diagramNew[3].weekViews[1].count},
                        {label: "Thursday", y: this.props.diagramNew[4].weekViews[1].count},
                        {label: "Friday", y: this.props.diagramNew[5].weekViews[1].count},
                        {label: "Saturday", y: this.props.diagramNew[6].weekViews[1].count},
                    ]
                },
                {
                    type: "stackedColumn",
                    color: this.props.diagramColor[2].color,
                    name: "Young Adult",
                    showInLegend: true,
                    yValueFormatString: "###",
                    dataPoints: [
                        {label: "Sunday", y: this.props.diagramNew[0].weekViews[2].count},
                        {label: "Monday", y: this.props.diagramNew[1].weekViews[2].count},
                        {label: "Tuesday", y: this.props.diagramNew[2].weekViews[2].count},
                        {label: "Wednesday", y: this.props.diagramNew[3].weekViews[2].count},
                        {label: "Thursday", y: this.props.diagramNew[4].weekViews[2].count},
                        {label: "Friday", y: this.props.diagramNew[5].weekViews[2].count},
                        {label: "Saturday", y: this.props.diagramNew[6].weekViews[2].count},
                    ]
                },
                {
                    type: "stackedColumn",
                    color: this.props.diagramColor[3].color,
                    name: "Adult",
                    showInLegend: true,
                    yValueFormatString: "###",
                    dataPoints: [
                        {label: "Sunday", y: this.props.diagramNew[0].weekViews[3].count},
                        {label: "Monday", y: this.props.diagramNew[1].weekViews[3].count},
                        {label: "Tuesday", y: this.props.diagramNew[2].weekViews[3].count},
                        {label: "Wednesday", y: this.props.diagramNew[3].weekViews[3].count},
                        {label: "Thursday", y: this.props.diagramNew[4].weekViews[3].count},
                        {label: "Friday", y: this.props.diagramNew[5].weekViews[3].count},
                        {label: "Saturday", y: this.props.diagramNew[6].weekViews[3].count},
                    ]
                },
                {
                    type: "stackedColumn",
                    color: this.props.diagramColor[4].color,
                    name: "Senior",
                    showInLegend: true,
                    yValueFormatString: "###",
                    dataPoints: [
                        {label: "Sunday", y: this.props.diagramNew[0].weekViews[4].count},
                        {label: "Monday", y: this.props.diagramNew[1].weekViews[4].count},
                        {label: "Tuesday", y: this.props.diagramNew[2].weekViews[4].count},
                        {label: "Wednesday", y: this.props.diagramNew[3].weekViews[4].count},
                        {label: "Thursday", y: this.props.diagramNew[4].weekViews[4].count},
                        {label: "Friday", y: this.props.diagramNew[5].weekViews[4].count},
                        {label: "Saturday", y: this.props.diagramNew[6].weekViews[4].count},
                    ]
                }]
        }

        return(
            <div>
                <CanvasJSChart options = {options}
                               onRef={ref => this.chart = ref}
                />
            </div>
        )
    }
}

export default Diagram;