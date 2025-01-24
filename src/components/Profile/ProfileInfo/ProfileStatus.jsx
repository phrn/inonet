import React from "react";
import s from './ProfileInfo.module.css'


const ProfileStatus = (props) => {
  const [localState, setLocalState] = React.useState({
    editMode: false,
    status: props.status,
  });
  const activateEditMode = () => {
    setLocalState({ ...localState, editMode: true });
  };

  const deactivateEditMode = () => {
    setLocalState({ ...localState, editMode: false });
    props.updateStatus(localState.status);
  };

  const onStatusChange = (event) => {
    setLocalState({ ...localState, status: event.currentTarget.value });
    console.log(event.currentTarget.value);
    props.updateStatus(localState.status);
  };

  return (
    <div className={s.status}>
      {!localState.editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "Change the status"}</span>
        </div>
      )}
      {localState.editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={localState.status}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;

// import React from "react";

// class ProfileStatus extends React.Component {
  
//   state = {
//     editMode: false,
//     status: this.props.status
//   };
  
//   activateEditMode() {
//     this.setState({
//       editMode: true,
//     });
//   }
//   deActivateEditMode() {

//     this.setState({
//       editMode: false,
//     });
//     this.props.updateStatus(this.state.status)
    
//   }

//   onStatusChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value
//     })
//   }
  
//   render() {
//     return (
//       <div>
//         {!this.state.editMode && (
//           <div>
//             <span onDoubleClick={this.activateEditMode}>
//               {this.props.status}
//             </span>
//           </div>
//         )}
//         {this.state.editMode && (
//           <div>
//             <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default ProfileStatus;


// 

