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
                padding: '30px',
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
                margin: '0 0 15px',
                padding: '0 0 1rem',
                borderBottom: '1px solid #DDD',
            },
            formParagraph: {
                fontSize: '16px',
                fontWeight: '400',
                color: '#444',
            },
            formFieldRow: {
                margin: '0 0 20px',
                ':last-child': {
                    marginBottom: '0',
                },
            },
            introWrap: {
                margin: '0 0 30px',
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
                margin: '0 0 30px',
            },
            noticeBase: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '18px',
                fontWeight: '400',
                backgroundColor: '#FFF8C5',
                border: `1px solid rgba(212, 167, 44, 0.4)`,
                color: '#333',
                margin: '0 0 20px',
                padding: '10px 15px',
                borderRadius: '6px',
            },
            noticeParagraph: {
                margin: '0',
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
                height: '70px',
            },
            buttonPrimary: {
                ':hover': {
                    background: `${color(`${props.attributes.color}`).lighten(0.2)}`,
                    border: `3px solid ${color(`${props.attributes.color}`).lighten(0.2)}`,
                },
            },
            buttonSelected: {
                color: `${props.attributes.color}`,
                background: '#FFF',
            },
            btnDollarSymbol: {
                fontSize: '18px',
                margin: '0 3px 0 -10px',
                position: 'relative',
                top: '-6px',
            },
            donateBtn: {
                fontSize: '22px',
                height: '55px',
            },
            noticeIcon: {
                marginRight: '10px',
            },
            donateBtnIcon: {
                margin: '0 0 0 10px',
            },
            textField: {
                background: '#FFF',
                border: '1.2px solid #666',
                boxSizing: 'border-box',
                boxShadow: 'inset 0px 1.2px 6.3px rgba(0, 0, 0, 0.15)',
                borderRadius: '5px',
                padding: '10px 15px',
                fontSize: '16px',
                lineHeight: '20px',
                height: '55px',
                width: '100%',
            },
            textFieldIcon: {
                paddingLeft: '45px',
            },
            fieldIconWrap: {
                position: 'relative',
                boxSizing: 'border-box',
            },
            fieldIcon: {
                position: 'absolute',
                top: '18px',
                left: '18px',
            },
            emailIcon: {
                top: '20px',
            },
            currencyFieldWrap: {
                position: 'relative',
                boxSizing: 'border-box',
            },
            currencyIcon: {
                position: 'absolute',
                top: '18px',
                left: '15px',
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
            },
            secureFooter: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                color: '#333',
                margin: '30px 0 0',
            },
            iconLock: {
                margin: '0 10px 0 0',
            }
        })
    }
}