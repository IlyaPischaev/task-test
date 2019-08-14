import React from 'react';
class Week extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            arrayAges : [                                                                                             //Массив количества просмотров
                {
                    name: "undefined",
                    count: 0,
                },
                {
                    name: "kid",
                    count: 0,
                },
                {
                    name: "young",
                    count: 0,
                },
                {
                    name: "adult",
                    count: 0,
                },
                {
                    name: "old",
                    count: 0,
                },
            ],
            arrayWeek : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            numberNew: 50,
        }

    }

    componentDidMount = () =>{
        this.handleDays();
    }

    componentDidUpdate(prevProps) {
        if (this.props.listCheck !== prevProps.listCheck) {
            this.handleDays();
        }
    }

    handleDays = () => {
        const listDays = this.state.arrayAges.map((item) => {
            let count1 = 0;
            this.props.newData.data.o.map((itemNumber, indexNumber) => {
                if (this.props.listCheck[indexNumber] === true) {
                    itemNumber.o.map((itemNumberDate) => {
                        const date = new Date(itemNumberDate.n);
                        if (this.props.item === this.state.arrayWeek[date.getDay()]) {
                            itemNumberDate.o.map((itemNumberDateAge) => {
                                if (item.name === itemNumberDateAge.n) {
                                    count1 += itemNumberDateAge.v;
                                }
                            })
                        }
                    })
                }
            })
            return {
                name: item.name,
                count: count1
            };
        });
        this.props._newChange(listDays, this.props.item);
    }

    render() {

        return(
            <div/>
        )
    }
}

export default Week;