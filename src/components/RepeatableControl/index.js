import {useState, useEffect} from '@wordpress/element';
import {BaseControl, PanelRow, Button} from '@wordpress/components';

import styles from './styles.module.scss';

export default function RepeatableControl({Control, initialData = [], newValue = null, onChange, addLabel='Add New', removeLabel = 'Remove', ...baseControlProps}) {
    const [data, setData] = useState(initialData);

    const addData = () => setData(oldData => [...oldData, newValue]);
    const removeData = index => setData(oldData => oldData.filter((_, i) => i !== index));
    const updateData = (index, value) => setData(oldData => oldData.map((item, i) => i === index ? value : item));

    useEffect(() => {
        if (onChange) {
            onChange(data);
        }
    }, [data, onChange]);

    return (
        <BaseControl {...baseControlProps}>
            {
                data.map((item, index) => (
                    <PanelRow key={index} className={styles.repeatableComponent} >
                        <Control className={styles.repeatableControl} value={item} onChange={value => updateData(index, value)} />
                        <Button isSmall isSecondary onClick={() => removeData(index)} >
                            {removeLabel}
                        </Button>
                    </PanelRow>
                ))
            }
            <Button onClick={addData} className={styles.repeatableAddButton} isSmall isSecondary>{addLabel}</Button>
        </BaseControl>
    );
}
