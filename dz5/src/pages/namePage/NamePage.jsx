import React, { useState } from "react";
import InputNameField from "../../components/nameInput/NameInput";
import NameDisplay from "../../components/nameList/NameList";

function NamesPage() {
    const [currentName, setCurrentName] = useState("");
    const [nameList, setNameList] = useState([]);

    const addNameToList = () => {
        if (currentName.trim()) {
            setNameList([...nameList, currentName]);
            setCurrentName("");
        }
    };

    const updateNameInList = (index) => {
        if (currentName.trim()) {
            const updatedList = nameList.map((item, idx) =>
                idx === index ? currentName : item
            );
            setNameList(updatedList);
            setCurrentName("");
        }
    };

    return (
        <div>
            <InputNameField
                currentName={currentName}
                updateName={setCurrentName}
                onAddName={addNameToList}
            />
            <NameDisplay
                nameList={nameList}
                onNameChange={updateNameInList}
                currentName={currentName}
            />
        </div>
    );
}

export default NamesPage;
