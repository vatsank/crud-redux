import React from 'react';
import AddMedicine from '../../component/AddMedicine/AddMedicine.react';
import ShowMedicines from '../../component/ShowMedicines/ShowMedicines.react';



class MedicineDashBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
          <AddMedicine></AddMedicine>
          <ShowMedicines></ShowMedicines>
            </div>
        );
    }
}

export default MedicineDashBoard;