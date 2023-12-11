import { tariffInformationDto } from '../../src/app/modules/orders/models/order-summary-tariff-information.dto';

export const tariffInformation: tariffInformationDto = {
	tariff: {
		name: 'MyNet 200',
		discount: {
			amount: '15,00',
			currency: 'EUR',
			currencySymbol: '€'
		},
		monthlyPriceFirstTerm: {
			amount: '50,00',
			currency: 'EUR',
			currencySymbol: '€'
		},
		monthlyPriceSecondTerm: {
			amount: '65,00',
			currency: 'EUR',
			currencySymbol: '€'
		}
	},
	monthlyPrice: {
		options: [
			{
				name: 'Upload Boost',
				price: {
					amount: '4,90',
					currency: 'EUR',
					currencySymbol: '€'
				}
			},
			{
				name: 'Festnetz Flatrate',
				price: {
					amount: '4,90',
					currency: 'EUR',
					currencySymbol: '€'
				}
			}
		],
		coupons: [
			{
				name: 'Rufnummernportierung',
				value: {
					amount: '10,00',
					currency: 'EUR',
					currencySymbol: '€'
				}
			}
		],
		totalMonthlyPriceFirstTerm: {
			amount: '49,80',
			currency: 'EUR',
			currencySymbol: '€'
		},
		totalMonthlyPriceSecondTerm: {
			amount: '64,80',
			currency: 'EUR',
			currencySymbol: '€'
		}
	},
	oneTimePrice: {
		options: [
			{
				name: 'Bereitstellungsgebühr',
				price: {
					amount: '59,50',
					currency: 'EUR',
					currencySymbol: '€'
				}
			},
			{
				name: 'Komfort Konfigurationsservice',
				price: {
					amount: '59,50',
					currency: 'EUR',
					currencySymbol: '€'
				}
			}
		],
		coupons: [
			{
				name: 'Automatik-Code',
				value: {
					amount: '59,50',
					currency: 'EUR',
					currencySymbol: '€'
				}
			},
			{
				name: 'Frühbucher50',
				value: {
					amount: '29,50',
					currency: 'EUR',
					currencySymbol: '€'
				}
			}
		],
		totalOneTimePrice: {
			amount: '119,00',
			currency: 'EUR',
			currencySymbol: '€'
		},
		totalOneTimePriceDiscounted: {
			amount: '30,00',
			currency: 'EUR',
			currencySymbol: '€'
		}
	}
}