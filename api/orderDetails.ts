import { OrderDto } from '../../src/app/modules/orders/models';

const { faker } = require('@faker-js/faker');

export const orderDetails: OrderDto[] = [];

for (let i = 0; i < 100; i++) {
  orderDetails.push({
    id: faker.datatype.uuid(),
    orderDate: faker.datatype.datetime(),
    partner: faker.datatype.uuid(),
    createdAt: faker.datatype.datetime(),
    createdTime: '',
    modifiedAt: faker.datatype.datetime(),
    modifiedTime: '',
    createdBy: faker.name.fullName(),
    userId: faker.datatype.uuid(),
    user: faker.name.fullName(),
    companyName: faker.name.fullName(),
    partnerId: faker.datatype.uuid(),
    modifiedBy: faker.name.fullName(),
    modifiedById: faker.datatype.uuid(),
    jobNumber: faker.datatype.number(),
    product: 'MyNet1000',
    orderNumber: faker.datatype.number(),
    status: faker.word.noun(),
    orderType: faker.word.noun(),
    address: {
      id: faker.datatype.uuid(),
      street: faker.address.street(),
      houseNumber: faker.address.buildingNumber(),
      zipCode: faker.address.zipCode(),
      city: faker.address.cityName(),
    },
    customer: {
      id: faker.datatype.uuid(),
      salutation: faker.name.prefix(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      company: faker.company.name(),
      legalForm: '',
      taxId: faker.datatype.uuid(),
      commercialRegister: '',
      partnerId: faker.datatype.uuid(),
      street: faker.address.street(),
      houseNumber: faker.address.buildingNumber(),
      zipCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      phone: faker.phone.number('+48 91 ### ## ##'),
      mobile: faker.phone.number('+48 91 ### ## ##'),
      email: faker.internet.email(),
      birthdate: faker.datatype.datetime().toLocaleDateString(),
    },

    alternateAccountHolder: {
      company: faker.company.name(),
      salutation: faker.name.prefix(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      street: faker.address.street(),
      houseNumber: faker.address.buildingNumber(),
      postalCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      phone: faker.phone.number('+48 91 ### ## ##'),
      mobile: faker.phone.number('+48 91 ### ## ##'),
      email: faker.internet.email(),
    },

    deviatingInvoiceRecipient: {
      company: faker.company.name(),
      salutation: faker.name.prefix(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      street: faker.address.street(),
      houseNumber: faker.address.buildingNumber(),
      postalCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      phone: faker.phone.number('+48 91 ### ## ##'),
      mobile: faker.phone.number('+48 91 ### ## ##'),
      email: faker.internet.email(),
    },

    buildingOwner: {
      company: faker.company.name(),
      salutation: faker.name.prefix(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      street: faker.address.street(),
      houseNumber: faker.address.buildingNumber(),
      postalCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      phone: faker.phone.number('+48 91 ### ## ##'),
      mobile: faker.phone.number('+48 91 ### ## ##'),
      email: faker.internet.email(),
    },

    optionsAndDisclaimer: {
      phone: true,
      email: false,
      post: true,
      sepaDirectDebit: false,
      agb: true,
      ggnv: true,
    },

    documentDetailInformation: {
      vzf: 'Dokument XYZ.pdf',
      ggnv: 'Dokument XYZ.pdf',
      buildingPart: 'Dokument XYZ.pdf',
      floor: 'Dokument XYZ.pdf',
    },

    interfaceHistory: {
      exportedToIl: faker.datatype.datetime(),
      exportedToK7: faker.datatype.datetime(),
      requestIlK7: true,
      export: 'xyz.json',
    },

    statusHistory: {
      leadDataCaptured: faker.datatype.datetime(),
      visitReport: faker.datatype.datetime(),
      resubmission: faker.datatype.datetime(),
      orderRecorded: faker.datatype.datetime(),
      vzfPending: faker.datatype.datetime(),
      vzfConfirmed: faker.datatype.datetime(),
      transferred: faker.datatype.datetime(),
      clearing: faker.datatype.datetime(),
    },

    paymentInformation: {
      iban: faker.finance.iban(),
      bic: faker.finance.bic(),
      creditInstitute: faker.finance.currencyName(),
    },

    buildingDetailInformation: {
      addressPointId: faker.datatype.uuid(),
      buildingType: 'House',
      floor: faker.datatype.number({ max: 10 }),
      apartmentLocation: faker.address.country(),
      description: faker.datatype.string(),
    },

    buildingAdministration: {
      administration: faker.company.name(),
      contactPerson: faker.name.fullName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
    },

    evnAndPhoneDirectory: {
      itemizedBill: 'gekürzte EVN',
      phoneDirectoryEntry: 'Gekürzter Telefonbucheintrag',
    },

    tariffAndOptions: {
      myNet300: faker.commerce.price(),
      discount: faker.commerce.price(0, 200),
      portingDiscount: faker.commerce.price(0, 200),
      uploadBoost: faker.commerce.price(),
      professionalPackage: faker.commerce.price(),
      landlineFlatRate: faker.commerce.price(),
      mobileFlatRate: faker.commerce.price(),
      invoicingByPost: faker.commerce.price(),
      totalMonthlyCost: faker.commerce.price(),
      costFromThirteenthMonth: faker.commerce.price(),
      provisionFee: faker.commerce.price(),
      comfortConfigurationService: faker.commerce.price(),
      earlyBooking50: faker.commerce.price(0, 200),
      oneOffCosts: faker.commerce.price(),
    },
  });
}
