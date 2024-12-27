import React from "react";

function InputNameField({ currentName, updateName, onAddName }) {
    const isNameEmpty = !currentName.trim();

    return (
        <div>
            <input
                type="text"
                value={currentName}
                onChange={(event) => updateName(event.target.value)}
                placeholder="Введите ваше имя"
            />
            <button onClick={onAddName} disabled={isNameEmpty}>
                Добавить имя
            </button>
        </div>
    );
}

export default InputNameField;
