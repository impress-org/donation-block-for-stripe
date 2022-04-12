import {__} from '@wordpress/i18n';
import {useState, useEffect} from '@wordpress/element';
import {BaseControl, PanelRow, Button} from '@wordpress/components';

import styles from './styles.module.scss';

export default function AmountLevels({
    donationAmounts,
    initialDefaultAmount,
    amountChanged,
    defaultChanged,
    ...baseControlProps
}) {

    const [amounts, setAmounts] = useState(donationAmounts);
    const [defaultAmount, setDefaultAmount] = useState(initialDefaultAmount);

    const addRow = () => {
        setAmounts((prevAmounts) => [...prevAmounts, 100]);
    };

    const removeRow = (index) => setAmounts((oldData) => oldData.filter((_, i) => i !== index));

    const updateAmount = (index, amount) => {
        setAmounts((prevAmounts) =>
            prevAmounts.map((prevAmount, prevIndex) => (index === prevIndex ? amount : prevAmount))
        );
    };

    useEffect(() => {
        amountChanged(amounts);
    }, [amounts]);

    useEffect(() => {
        defaultChanged(defaultAmount);
    }, [defaultAmount]);

    return (
        <BaseControl {...baseControlProps}>
            <div className="rows">
                {amounts.map((amount, index) => (
                    <PanelRow className={styles.repeatableComponent} key={index}>
                        <input
                            type="radio"
                            checked={amount === defaultAmount}
                            onChange={() => setDefaultAmount(amount)}
                        />
                        <input
                            type="text"
                            value={amount}
                            onChange={(event) => updateAmount(index, event.target.value)}
                        />
                        <Button isSmall isSecondary onClick={() => removeRow(index)}>
                            X
                        </Button>
                    </PanelRow>
                ))}
            </div>
            <Button onClick={() => addRow()} className={styles.repeatableAddButton} isSmall isSecondary>
                {__('Add Amount', 'donation-form-block')}
            </Button>
        </BaseControl>
    );
}
