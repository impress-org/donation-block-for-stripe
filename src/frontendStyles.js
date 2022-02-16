import {StyleSheet} from "aphrodite";
import color from "color";


export default class StyleSheetFactory {
    static getSheet(props) {
        return StyleSheet.create({
            formContainer: {
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                maxWidth: '650px',
                margin: '1rem auto',
                padding: '0',
            },
            formContainerInner: {
                padding: '20px',
            },
            formHeaderImage: {
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '215px',
                width: '100%',
                borderRadius: '7px 7px 0 0',
            },
            formHeading: {
                fontSize: '22px',
                fontWeight: '500',
                lineHeight: '1.4',
                color: '#333',
                margin: '0 0 20px',
                padding: '0 0 1rem',
                borderBottom: '1px solid #DDD',
            },
            formParagraph: {
                fontSize: '16px',
                fontWeight: '400',
                color: '#444',
            },
            noticeParagraph: {
                margin: '0',
            },
            formFieldRow: {
                margin: '0 0 20px',
                ':last-child': {
                    marginBottom: '0',
                },
            },
            donationFormFieldsRow: {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                gridAutoRows: 'minmax(40px, auto)',
            },
            formButtonRow: {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                gridAutoRows: 'minmax(60px, auto)',
            },
            noticeBase: {
                fontSize: '18px',
                fontWeight: '400',
                backgroundColor: '#FFF8C5',
                border: `1px solid rgba(212, 167, 44, 0.4)`,
                color: '#333',
                margin: '0 0 20px',
                padding: '10px 15px',
            },
            buttonBase: {
                color: '#FFF',
                background: `${props.attributes.color}`,
                borderRadius: '6px',
                border: `3px solid ${props.attributes.color}`,
                fontSize: '28px',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                lineHeight: '1.6',
                cursor: 'pointer',
            },
            buttonPrimary: {
                ':hover': {
                    background: `${color(`${props.attributes.color}`).lighten(0.2)}`,
                    border: `${color(`${props.attributes.color}`).lighten(0.2)}`,
                },
            },
            buttonSelected: {
                color: `${props.attributes.color}`,
                background: '#FFF',
            },
            currencyField: {
                width: '100%',
                fontSize: '2.5rem',
                padding: '1rem 1.5rem',
                border: '2px solid #424242',
                borderRadius: '8px',
                textAlign: 'right',
                lineHeight: '1',
                boxSizing: 'border-box',
                ':hover': {}
            }
        })
    }
}
