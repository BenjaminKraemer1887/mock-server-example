// for real data please use a models
import { PartnersTableEntry } from '../../src/app/modules/partners/models';
import { partnerDetails } from './partnerDetails';

export const partners: PartnersTableEntry[] = [];
partnerDetails.forEach(partner => {
  partners.push({
    id: partner.id,
    partnerId: '123 456 789',
    companyName: partner.companyNameAdditional,
    partnerType: partner.partnerType,
    city: partner.city,
    validFrom: partner.validFrom,
    validTo: partner.validTo,
    active: partner.active,
  });
});
