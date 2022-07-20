import { getRoomsInfo } from '../services/roomsService';
import guests from "../data/guests.json"

const MIN_PREMIUM_PRICE = 100

test('Algorithm test 1 (Premium: 3, Economy: 3)', async () => {
    const freePremium = 3
    const freeEconomy = 3
    const { premium, economy } = getRoomsInfo({
      guests,
      minPremiumPrice: MIN_PREMIUM_PRICE,
      premium: freePremium,
      economy: freeEconomy
    })
  
    expect(premium.count).toBe(3);
    expect(economy.count).toBe(3);
    expect(premium.price).toBe(738);
    expect(economy.price).toBe(167);
  });
  
  test('Algorithm test 2 (Premium: 7, Economy: 5)', async () => {
    const freePremium = 7
    const freeEconomy = 5
    const { premium, economy } = getRoomsInfo({
      guests,
      minPremiumPrice: MIN_PREMIUM_PRICE,
      premium: freePremium,
      economy: freeEconomy
    })
  
    expect(premium.count).toBe(6);
    expect(economy.count).toBe(4);
    expect(premium.price).toBe(1054);
    expect(economy.price).toBe(189);
  });
  
  test('Algorithm test 3 (Premium: 2, Economy: 7)', async () => {
    const freePremium = 2
    const freeEconomy = 7
    const { premium, economy } = getRoomsInfo({
      guests,
      minPremiumPrice: MIN_PREMIUM_PRICE,
      premium: freePremium,
      economy: freeEconomy
    })
  
    expect(premium.count).toBe(2);
    expect(economy.count).toBe(4);
    expect(premium.price).toBe(583);
    expect(economy.price).toBe(189);
  });
  
  test('Algorithm test 4 (Premium: 7, Economy: 1)', async () => {
    const freePremium = 7
    const freeEconomy = 1
    const { premium, economy } = getRoomsInfo({
      guests,
      minPremiumPrice: MIN_PREMIUM_PRICE,
      premium: freePremium,
      economy: freeEconomy
    })
  
    expect(premium.count).toBe(7);
    expect(economy.count).toBe(1);
    expect(premium.price).toBe(1153);
    expect(economy.price).toBe(45);
  });
  
  test('Algorithm test 5 (Premium: 5, Economy: 20)', async () => {
    const freePremium = 5
    const freeEconomy = 20
    const { premium, economy } = getRoomsInfo({
      guests,
      minPremiumPrice: MIN_PREMIUM_PRICE,
      premium: freePremium,
      economy: freeEconomy
    })
  
    expect(premium.count).toBe(5);
    expect(economy.count).toBe(4);
    expect(premium.price).toBe(954);
    expect(economy.price).toBe(189);
  });
  
  test('Algorithm test 6 (Premium: 1, Economy: 12)', async () => {
    const freePremium = 1
    const freeEconomy = 12
    const { premium, economy } = getRoomsInfo({
      guests,
      minPremiumPrice: MIN_PREMIUM_PRICE,
      premium: freePremium,
      economy: freeEconomy
    })
  
    expect(premium.count).toBe(1);
    expect(economy.count).toBe(4);
    expect(premium.price).toBe(374);
    expect(economy.price).toBe(189);
  });
  
  test('Algorithm test 7 (Premium: 0, Economy: 0)', async () => {
    const freePremium = 0
    const freeEconomy = 0
    const { premium, economy } = getRoomsInfo({
      guests,
      minPremiumPrice: MIN_PREMIUM_PRICE,
      premium: freePremium,
      economy: freeEconomy
    })
  
    expect(premium.count).toBe(0);
    expect(economy.count).toBe(0);
    expect(premium.price).toBe(0);
    expect(economy.price).toBe(0);
  });
  
  test('Algorithm test 8 (Premium: 12, Economy: 2)', async () => {
    const freePremium = 12
    const freeEconomy = 2
    const { premium, economy } = getRoomsInfo({
      guests,
      minPremiumPrice: MIN_PREMIUM_PRICE,
      premium: freePremium,
      economy: freeEconomy
    })
  
    expect(premium.count).toBe(8);
    expect(economy.count).toBe(2);
    expect(premium.price).toBe(1198);
    expect(economy.price).toBe(45);
  });
  