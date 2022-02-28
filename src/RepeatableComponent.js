import {Component} from '@wordpress/element';
import {BaseControl, PanelRow, IconButton, Button} from '@wordpress/components';

class RepeatableComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.initialData || [{}],
        };

        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.triggerOnChange = this.triggerOnChange.bind(this);
    }

    addRow() {
        this.setState((prevState, props) => ({
            ...prevState,
            data: [
                ...prevState.data,
                props.defaultData || {}
            ]
        }), this.triggerOnChange);
    }

    removeRow(index) {
        this.setState(prevState => ({
            ...prevState,
            data: [
                ...prevState.data.slice(0, index),
                ...prevState.data.slice(index + 1)
            ]
        }), this.triggerOnChange);
    }

    handleChange(index, key, value) {
        this.setState(prevState => ({
            ...prevState,
            data: [
                ...prevState.data.slice(0, index),
                {
                    ...prevState.data[index],
                    [key]: value
                },
                ...prevState.data.slice(index + 1)
            ]
        }), this.triggerOnChange);
    }

    triggerOnChange() {
        if (this.props.onChange) {
            this.props.onChange(this.state.data);
        }
    }

    render() {
        const {data} = this.state;
        const {label, render} = this.props;

        return (
            <BaseControl label={label}>
                {
                    data.map((item, index) => (
                        <PanelRow>
                            <div>
                                {render(item, index, this.handleChange.bind(null, index))}
                            </div>
                            <IconButton onClick={this.removeRow.bind(null, index)} icon="minus" label="Remove" isSecondary />
                        </PanelRow>
                    ))
                }
                <Button onClick={this.addRow} isSmall isPrimary>Add Amount</Button>
            </BaseControl>
        );
    }
}

export default RepeatableComponent;
