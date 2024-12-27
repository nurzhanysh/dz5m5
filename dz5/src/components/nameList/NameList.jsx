import React from "react";

function NameDisplay({ nameList, onNameChange, currentName }) {
    const isCurrentNameEmpty = !currentName.trim();

    return (
        <div>
            {nameList.length === 0 ? (
                <p>Список имён пуст</p>
            ) : (
                <ul>
                    {nameList.map((item, idx) => (
                        <li key={idx}>
                            {item}
                            <button
                                onClick={() => onNameChange(idx)}
                                disabled={isCurrentNameEmpty}
                            >
                                Изменить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NameDisplay;
