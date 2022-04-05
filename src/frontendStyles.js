import {StyleSheet} from 'aphrodite';
import color from 'color';

export default class StyleSheetFactory {
    static getSheet(props) {
        return StyleSheet.create({
            formContainer: {
                backgroundColor: '#fff',
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                maxWidth: '650px',
                margin: '1rem auto 1.5rem',
                padding: '0',
                position: 'relative',
                transition: 'all .5s ease-in-out',
            },
            formContainerInner: {
                padding: '30px',
                transition: 'all .5s ease-in-out',
            },
            loadingWrap: {
                background: 'rgb(255 255 255 / 85%)',
                zIndex: '9999',
                borderRadius: '8px',
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
                gap: '20px',
                gridAutoRows: 'minmax(40px, auto)',
                '@media (max-width: 480px)': {
                    gridTemplateColumns: 'repeat(1, 1fr)',
                },
            },
            formButtonRow: {
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                gridAutoRows: 'minmax(60px, auto)',
                margin: '0 0 30px',
                '@media (max-width: 400px)': {
                    gridTemplateColumns: 'repeat(2, 1fr)',
                },
            },
            noticeBase: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '18px',
                fontWeight: '400',
                backgroundColor: '#FFF8C5',
                border: `1px solid rgba(212, 167, 44, 0.4)`,
                color: '#333',
                margin: '0 auto 20px',
                padding: '10px 15px',
                borderRadius: '6px',
                maxWidth: '650px',
            },
            noticeIcon: {
                marginRight: '10px',
                flexShrink: '0',
            },
            noticeParagraph: {
                margin: '0',
                lineHeight: '22px',
            },
            noticeInfo: {
                backgroundColor: '#DDF4FF',
                border: '1px solid rgba(84, 174, 255, 0.4)',
                margin: '30px 0',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: '600',
            },
            noticeValidationError: {
                backgroundColor: '#FFEBE9',
                border: '1px solid rgba(255, 129, 130, 0.4)',
                margin: '30px 0 0',
            },
            noticeDonation: {
                background: `${color(props.attributes.color).lighten(1.22)}`,
                border: `1px solid ${color(props.attributes.color).lighten(0.9)}`,
                margin: '0 0 30px',
            },
            noticeDonationParagraph: {
                fontSize: '22px',
                fontWeight: '600',
                margin: '0',
                color: '#333',
            },
            buttonBase: {
                color: '#FFF',
                background: `${props.attributes.color}`,
                borderRadius: '6px',
                border: `3px solid ${props.attributes.color}`,
                fontSize: '28px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                lineHeight: '1.6',
                cursor: 'pointer',
                padding: '0',
                margin: '0',
                height: '70px',
                textTransform: 'none',
                textAlign: 'center',
            },
            buttonPrimary: {
                ':hover': {
                    background: `${color(props.attributes.color).lighten(0.2)}`,
                    border: `3px solid ${color(props.attributes.color).lighten(0.2)}`,
                },
            },
            buttonSelected: {
                color: `${props.attributes.color}`,
                background: '#FFF',
                fontWeight: '600',
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
                fontWeight: '600',
            },
            payBtn: {
                margin: '50px auto 0',
                padding: '0 25px',
                display: 'block',
            },
            donateBtnIcon: {
                margin: '0 0 0 10px',
                display: 'inline',
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
                height: '80px',
                fontSize: '36px',
                padding: '0 20px',
                letterSpacing: '0',
                boxShadow: 'none',
                border: '2px solid #424242',
                borderRadius: '8px',
                textAlign: 'right',
                fontWeight: '500',
                lineHeight: '1',
                boxSizing: 'border-box',
                color: '#333',
                ':hover': {},
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
            },
            stripePaymentWrap: {
                minHeight: '200px',
            },
            donationReceipt: {
                minHeight: '520px',
            },
            donationReceiptEmailText: {
                textAlign: 'center',
                margin: '0 0 30px',
            },
            donationReceiptDetails: {
                fontWeight: '600',
                fontSize: '22px',
                padding: '0 10px 15px',
                margin: '0',
                borderBottom: '1px solid #DDD',
            },
            donationReceiptDetailsList: {
                listStyle: 'none',
                padding: '0',
                margin: '0',
            },
            donationReceiptDetailsListItem: {
                '@media (min-width: 599px)': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                },
                margin: '0',
                padding: '15px 10px',
                borderBottom: '1px solid #DDD',
            },
            donationReceiptDetailsListItemParagraph: {
                margin: '0',
                padding: '0',
            },
            donationReceiptDetailsListItemSpan: {
                fontWeight: '600',
            },
            lottieWrap: {
                position: 'absolute',
                top: '0',
                left: '0',
            },
            giveAgainBtn: {
                minWidth: '200px',
                margin: '40px auto 20px',
                display: 'block',
            },
            // Donation Summary Notice on Step 2.
            editDonationNotice: {
                '@media (max-width: 599px)': {
                    display: 'block',
                    textAlign: 'center',
                },
            },
            donationSummaryAmountWrap: {
                margin: '0 6px 0 0',
                '@media (max-width: 599px)': {
                    display: 'block',
                },
            },
            donationSummaryAmountText: {
                fontSize: '24px',
                fontWeight: '600',
                margin: '0',
            },
            donationSummaryText: {
                margin: '0',
                padding: '0',
                lineHeight: '1.2',
            },
            donationSummaryCurrencyIcon: {
                fontSize: '16px',
                margin: '0 2px 0 0',
                position: 'relative',
                top: '-4px',
            },
            donationPaymentInstructions: {
                fontSize: '14px',
            },
            donationTypeText: {
                textTransform: 'uppercase',
                fontWeight: '500',
                fontSize: '14px',
            },
            editDonationBtn: {
                fontSize: '13px',
                background: '#FFF',
                border: `1px solid ${color(props.attributes.color).lighten(0.8)}`,
                color: `${color(props.attributes.color)}`,
                borderRadius: '6px',
                whiteSpace: 'nowrap',
                marginLeft: 'auto',
                ':hover': {
                    border: `1px solid ${color(props.attributes.color).lighten(0.2)}`,
                },
                '@media (max-width: 599px)': {
                    margin: '10px 0'
                },
            },
            heartIconWrap: {
                background: `${color(props.attributes.color).lighten(0.8)}`,
                borderRadius: '100%',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60px',
                width: '60px',
                margin: '0 10px 0 0',
                '@media (max-width: 599px)': {
                    display: 'none',
                },
            },
            heartIcon: {
                color: '#FFF',
            }
        });
    }
}
