import {__} from '@wordpress/i18n';
import {useState, useEffect} from '@wordpress/element';
import {BaseControl, PanelRow, Button, Dashicon} from '@wordpress/components';
import styles from './styles.module.scss';
import CurrencyInput from 'react-currency-input-field';

export default function AmountLevels({
    donationAmounts,
    defaultAmount,
    amountChanged,
    defaultChanged,
    ...baseControlProps
}) {
    const [amounts, setAmounts] = useState(donationAmounts);
    const [newDefaultAmount, setNewDefaultAmount] = useState(defaultAmount);

    const addRow = () => {
        setAmounts((prevAmounts) => {
            const max = Math.max(...prevAmounts);
            return [...prevAmounts, max * 2];
        });
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
        defaultChanged(newDefaultAmount);
    }, [newDefaultAmount]);

    console.log(window.navigator.language);

    return (
        <BaseControl {...baseControlProps}>
            <div className={styles.amountLevelsWrap}>
                {amounts.map((amount, index) => (
                    <PanelRow className={styles.repeatableComponent} key={index}>
                        <input
                            type="radio"
                            checked={amount === defaultAmount}
                            onChange={() => setNewDefaultAmount(amount)}
                        />
                        <CurrencyInput
                            allowDecimals={true}
                            allowNegativeValue={false}
                            maxLength={9}
                            value={amount}
                            intlConfig={{locale: window.navigator.language}}
                            onValueChange={(value) => {
                                updateAmount(index, value)
                            }}
                        />
                        <Button
                            className={styles.removeAmountLevel}
                            isSmall
                            isSecondary
                            onClick={() => removeRow(index)}
                        >
                            <Dashicon icon="no-alt" style={{fontSize: '18px', width: '18px', height: '18px'}} />
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
