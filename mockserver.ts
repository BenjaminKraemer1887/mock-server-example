import { database } from './database';
import { OrderOptionCalculationEntryDto } from '../src/app/modules/orders/models/order-option-calculation-entry.dto';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(database);
const middlewares = jsonServer.defaults();
const port = 55000;

server.use(
  jsonServer.rewriter({
    '/api/v1/*': '/$1',
    '/projects/:id/appointments': '/projectAppointments',
    '/projects/:id/salespartners': '/projectSalesPartners',
    '/projects/:id/storepartners': '/projectStorePartners',
    '/projects/:id': '/projectDetails/:id',
    '/addresses/:id/apartments': '/apartments',
    '/addresses/:id': '/addressDetails/:id',
    '/partners/:id': '/partnerDetails/:id',
    '/users/:id': '/userDetails/:id',
    '/orders/:id': '/orderDetails/:id',
    '/productvariants*': '/productVariants',
    '/search/addressSuggestion*': '/addressSuggestions',
    '/search/addressFull*': '/orderAddressTableEntries',
  })
);

server.use(jsonServer.bodyParser);

server.get('/addresses', function (req, res) {
  try {
    let query = req.query;
    if (query.query) query = JSON.parse(this.navigationService.decodeBase64(query.query));
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const addresses = database.addresses;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(addresses, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/orders', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const orders = database.orders;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(orders, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/projects', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const projects = database.projects;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(projects, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/projects/:id/salespartners', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const salespartners = database.projectSalesPartners;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(salespartners, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/projects/:id/storepartners', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const storepartners = database.projectStorePartners;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(storepartners, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/projects/:id/appointments', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const appointments = database.projectAppointments;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(appointments, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/addresses/:id/apartments', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const apartments = database.apartments;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(apartments, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/users', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const users = database.users;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(users, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/partners', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const partners = database.partners;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(partners, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/orderAddressTableEntries', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const addresses = database.orderAddressTableEntries;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(addresses, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.get('/productvariants*', function (req, res) {
  try {
    const query = req.query;
    if (!query.size) query.size = 10;
    if (!query.page) query.page = 0;
    const productVariants = database.productVariants;
    return res
      .header('Content-Type', 'application/json; charset=utf-8')
      .status(200)
      .jsonp(paginate(productVariants, query.size, query.page));
  } catch (e) {
    console.error(e);
  }
});

server.put('/partnerDetails/:id', function (req) {
  try {
    const partnerBody = req.body;
    const partnerId = req.params['id'];
    const partner = database.partnerDetails.find(partner => partner.id === partnerId);
    const partners = database.partners.find(partners => partners.id === partnerId);

    if (partner) {
      partner.id = partnerId;
      partner.partnerId = partnerBody.partnerId;
      partner.partnerIdOld = partnerBody.partnerIdOld;
      partner.companyNameAdditional = partnerBody.companyNameAdditional;
      partner.companyName = partnerBody.companyName;
      partner.partnerType = partnerBody.partnerType;
      partner.partnerLegalForm = partnerBody.partnerLegalForm;
      partner.street = partnerBody.street;
      partner.houseNumber = partnerBody.houseNumber;
      partner.houseSuffix = partnerBody.houseSuffix;
      partner.postalCode = partnerBody.postalCode;
      partner.city = partnerBody.city;
      partner.phone.areaCode = partnerBody.phone.areaCode;
      partner.phone.number = partnerBody.phone.number;
      partner.mobile.areaCode = partnerBody.mobile.areaCode;
      partner.mobile.number = partnerBody.mobile.number;
      partner.fax.areaCode = partnerBody.fax.areaCode;
      partner.fax.number = partnerBody.fax.number;
      partner.email = partnerBody.email;
      partner.additionalEmail = partnerBody.additionalEmail;
      partner.homepage = partnerBody.homepage;
      partner.validFrom = partnerBody.validFrom;
      partner.validTo = partnerBody.validTo;
      partner.commercialRegister = partnerBody.commercialRegister;
      partner.iban = partnerBody.iban;
      partner.vatLiability = partnerBody.vatLiability;
      partner.taxId = partnerBody.taxId;
      partner.projects = partnerBody.projects;
      partner.createdBy = partnerBody.createdBy;
      partner.created = partnerBody.created;
      partner.modified = partnerBody.modified;
      partner.modifiedBy = partnerBody.modifiedBy;
      partner.active = partnerBody.active;
    }

    if (partners) {
      partners.id = partnerId;
      partners.partnerId = '123 456 789';
      partners.companyName = partnerBody.companyName;
      partners.partnerType = partnerBody.partnerType;
      partners.city = partnerBody.city;
      partners.validFrom = partnerBody.validFrom;
      partners.validTo = partnerBody.validTo;
      partners.active = partnerBody.active;
    }
  } catch (e) {
    console.error(e);
  }
});

server.patch('/userDetails/addressAssignment', function (req) {
  if (req.query.operation == 'assign') {
    try {
      const addressUserIds = req.body;
      addressUserIds.forEach(entry => {
        const address = database.addresses.find(address => address.id === entry.addressId);
        const username = database.users.find(user => user.id === entry.userId);
        address.userName = username.lastname + ',' + username.firstname;
        address.user = entry.userId;
      });
    } catch (e) {
      console.error(e);
    }
  } else {
    try {
      const addressUserIds = req.body;
      addressUserIds.forEach(entry => {
        const address = database.addresses.find(address => address.id === entry.addressId);
        address.userName = null;
      });
    } catch (e) {
      console.error(e);
    }
  }
});

server.post('/coupons/automatic', function (req, res) {
  try {
    const coupon = database.coupons[5];

    return res.status(201).jsonp(coupon);
  } catch (e) {
    console.error(e);
    return res.status(500).jsonp({ error: 'An error occurred validating the coupon' });
  }
});

server.post('/coupons/validation', function (req, res) {
  try {
    const couponToValidate = req.body;
    const coupon = database.coupons.find(coupon => coupon.code === couponToValidate.code);

    return res.status(201).jsonp(coupon);
  } catch (e) {
    console.error(e);
    return res.status(500).jsonp({ error: 'An error occurred validating the coupon' });
  }
});

server.post('/partners', function (req, res) {
  try {
    const newPartner = req.body;
    const lastPartner = database.partnerDetails[database.partnerDetails.length - 1];
    newPartner.id = lastPartner.id + 1;
    database.partnerDetails.push(newPartner);
    database.partners.push(breakDownPartnerDTO(newPartner));
  } catch (e) {
    console.error(e);
    return res.status(500).jsonp({ error: 'An error occurred while creating the partner' });
  }
});

server.post('/calculations/orderprice', function (req, res) {
  const calculatePricesData = req.body;
  const tariff = database.productVariants.find(product => product.id === calculatePricesData.tariffId.toString());
  let optionsArrayMonthly: [] = [];
  let optionsArrayOneTime: [] = [];
  let couponArray: [];
  try {
    if (calculatePricesData.options.length == 0) {
      optionsArrayMonthly = [];
      optionsArrayOneTime = [];
    } else {
      optionHelper(calculatePricesData.options, optionsArrayMonthly, optionsArrayOneTime);
    }
    if (calculatePricesData.coupons.length == 0) {
      couponArray = [];
    }
    const result = {
      tariff: {
        tariff: {
          name: tariff.name,
          discount: {
            amount: '10,00',
            currency: 'Euro',
            currencySymbol: '€',
          },
          monthlyPriceFirstTerm: {
            amount: tariff.monthlyPriceFirstTerm,
            currency: 'Euro',
            currencySymbol: '€',
          },
          monthlyPriceSecondTerm: {
            amount: tariff.monthlyPriceSecondTerm,
            currency: 'Euro',
            currencySymbol: '€',
          },
        },
        monthlyPrice: {
          options: optionsArrayMonthly,
          coupons: couponArray,
          totalMonthlyPriceFirstTerm: {
            amount: totalMonthlyPrice(tariff.monthlyPriceFirstTerm, optionsArrayMonthly).toString(),
            currency: 'Euro',
            currencySymbol: '€',
          },
          totalMonthlyPriceSecondTerm: {
            amount: totalMonthlyPrice(tariff.monthlyPriceSecondTerm, optionsArrayMonthly).toString(),
            currency: 'Euro',
            currencySymbol: '€',
          },
        },
        oneTimePrice: {
          options: optionsArrayOneTime,
          coupons: couponArray,
          totalOneTimePrice: {
            amount: totalMonthlyPrice('00,00', optionsArrayOneTime).toString() + '€',
            currency: 'Euro',
            currencySymbol: '€',
          },
          totalOneTimePriceDiscounted: {
            amount: totalMonthlyPrice('00,00', optionsArrayOneTime).toString() + '€',
            currency: 'Euro',
            currencySymbol: '€',
          },
        },
      },
    };
    return res.json(result);
  } catch (e) {
    console.error(e);
    return res.status(500).jsonp({ error: 'An error occurred while calculating price' });
  }
});

server.post('/validations/iban', function (req, res) {
  if (req.body.iban === 'DE00000000000000000000') {
    return res.status(200).jsonp({
      bankName: 'Test Bank',
      bankShortName: 'Short',
      bic: 'BELADEE12',
      status: 'Ok',
      message: 'Iban is valid',
    });
  } else {
    return res.status(200).jsonp({
      bankName: null,
      bankShortName: null,
      bic: null,
      status: 'Invalid',
      message: 'Invalid Iban',
    });
  }
});

function breakDownPartnerDTO(partnerDTO) {
  return {
    id: partnerDTO.id,
    partnerId: partnerDTO.id,
    companyName: partnerDTO.companyName,
    partnerType: partnerDTO.partnerType,
    city: partnerDTO.city,
    validFrom: partnerDTO.validFrom,
    validTo: partnerDTO.validTo,
    active: true,
  };
}

function paginate(entities, pageSize, pageIndex) {
  const pages = [];
  for (let i = 0; i < entities.length; i = i + Number(pageSize)) {
    pages.push(entities.slice(i, i + Number(pageSize)));
  }
  return {
    page: pages[pageIndex],
    lastPageIndex: pages.length,
    totalElementCount: entities.length,
  };
}

function optionHelper(optionArray, optionsArrayMonthly, optionsArrayOneTime) {
  for (let i = 0; i < optionArray.length; i++) {
    const option = database.orderOptions.find(option => option.id === optionArray[i].optionId.toString());
    if (option.oneTimePrice == '') {
      const optionEntry: OrderOptionCalculationEntryDto = {
        name: option.name,
        price: {
          amount: option.monthlyPrice,
          currency: 'Euro',
          currencySymbol: '€',
        },
      };
      optionsArrayMonthly.push(optionEntry);
    } else {
      const optionEntry: OrderOptionCalculationEntryDto = {
        name: option.name,
        price: {
          amount: option.oneTimePrice,
          currency: 'Euro',
          currencySymbol: '€',
        },
      };
      optionsArrayOneTime.push(optionEntry);
    }
  }
}

function totalMonthlyPrice(monthlyPrice, optionArray) {
  let totalMonthlyPriceFirstTerm: number = parseFloat(monthlyPrice);
  for (let i = 0; i < optionArray.length; i++) {
    totalMonthlyPriceFirstTerm = totalMonthlyPriceFirstTerm + parseFloat(optionArray[i].price.amount);
  }
  return totalMonthlyPriceFirstTerm.toFixed(2);
}

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running');
});
