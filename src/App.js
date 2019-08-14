import React from 'react';
import Data from './Data';
import CreateList from './CreateList';
import Diagram from './Diagram';    // Построение диаграммы
import Week from './Week';  // Производится подсчёт просмотров на каждый день недели
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newData : Data,     // Данные
            listCheck: Data.data.o.map(() => true),     // Проверка выбрано ли устройство
            daysOfTheWeek: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],    // Дни недели
            diagramColor: [     // Массив цветов диграмм
                {
                    name: "undefined",
                    color: "gray",
                },
                {
                    name: "kid",
                    color: "green",
                },
                {
                    name: "young",
                    color: "#00a8f3",
                },
                {
                    name: "adult",
                    color: "blue",
                },
                {
                    name: "old",
                    color: "red",
                },
            ],
            diagramNew: [], // Массив посещений каждую неделю
        }

    }

    // Изменение выбранного устройства
    handleChangeCheck = (_index) => {
        this.setState( state => {
            const newListCheck = state.listCheck.map( (item, index) => {
                if (index === _index) {
                    item = !item;
                }
                return item;
            })
            return {
                listCheck : newListCheck
            }
        })
        this.setState(state => ({
            diagramNew: []
        }))
    }

    // Заполнение массива с данными посещения каждого дня недели
    newChange = (item, weekDay) => {
        let newElement = {};
        newElement = {
            weekDay: weekDay,
            weekViews: item,
        }

        this.setState(prevState => ({
            diagramNew: [...prevState.diagramNew, newElement]
        }))

    }

    render() {
        const testData = this.state.newData.data.o.map( (item, index) =>
            <CreateList
                item={item}
                isChecked={this.state.listCheck[index]}
                _index={index}
                _handleChangeCheck={this.handleChangeCheck}
            />
        )

        const testDays = this.state.daysOfTheWeek.map( (item, index) =>
            <Week
                item={item}
                listCheck={this.state.listCheck}
                index={index}
                newData={this.state.newData}
                diagramColor={this.state.diagramColor}
                _newChange={this.newChange}
                _newTest={this.newTest}
            />
        )

        return(
            <div>
                <div className={'text-column'}>
                    {testData}
                </div>
                <div>
                    {testDays}
                </div>

                <Diagram
                    diagramNew={this.state.diagramNew}
                    diagramColor={this.state.diagramColor}
                />

            </div>
        )
    }
}

export default App;