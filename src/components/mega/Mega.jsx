import React, { useState } from 'react'

export default props => {

    const [numbers, setNumbers] = useState(Array(props.qtdeNumbers).fill(0));

    function generateUncontainedNumbers(actualNumbers) {
        const min = 1;
        const max = 60
        const newNumber = parseInt(Math.random() * (max - min)) + min;
        // se estiver contido
        return actualNumbers.includes(newNumber) ? generateUncontainedNumbers(actualNumbers) : newNumber;
    }

    function generateNumbers() {
        const newNumbers = Array(props.qtdeNumbers)
            .fill(0)
            .reduce((arrayAcumulado) =>
                [...arrayAcumulado, generateUncontainedNumbers(arrayAcumulado)], [])
            .sort((a, b) => a - b)
        setNumbers(newNumbers);
    }

    return (
        <div>
            <p>Mega sena</p>
            <p>{numbers.join(' ')}</p>
            <button onClick={generateNumbers}>Gerar números</button>
        </div>
    )
}