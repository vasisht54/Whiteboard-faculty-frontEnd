import React from "react";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";


class CourseManagerComponent extends React.Component {
    state = {
        layout: "grid",
        courses: [
            {_id:'123',title: 'DBMS',ownedBy: 'me', lastModified: "1/1/2020"},
            {_id:'234',title: 'WebDev',ownedBy: 'me', lastModified: "1/1/2020"},
            {_id:'345',title: 'Algo',ownedBy: 'me', lastModified: "1/1/2020"},
            {_id:'456',title: 'PDP',ownedBy: 'me', lastModified: "1/1/2020"}
        ]
    };

    setGrid = () =>
        this.setState({
            layout: 'grid'
                      });

    setTable = () =>
        this.setState({
            layout: 'table'
                      });

    toggle = () =>
        this.setState(prevState => {
           if(prevState.layout === 'grid') {
               return {
                   layout: 'table'
               }
           }
           else {
               return {
                   layout: 'grid'
               }
           }
        });


    render() {
        return (
            <div>
                {
                    this.state.layout === 'table' &&
                    <CourseTableComponent courses={this.state.courses}/>
                }
                {
                    this.state.layout === 'grid' &&
                    <CourseGridComponent courses={this.state.courses}/>
                }
            </div>
        )
    }
}

export default CourseManagerComponent;