import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

const setup = async () => {
  const utils = render(<App />)
  const submitButton = await screen.findByTestId('submit')
  const premiumInput = await screen.findByTestId('premium-rooms')
  const economyInput = await screen.findByTestId('economy-rooms')
  const premiumLabel = await screen.findByTestId('usage-premium')
  const economyLabel = await screen.findByTestId('usage-economy')
  return {
    submitButton,
    premiumInput,
    premiumLabel,
    economyInput,
    economyLabel,
    ...utils,
  }
}

const getRoomsInfoFromLabel = (label: string | null) => {
  if (!label) return {
    rooms: "",
    cost: ""
  }
  const content = label.split(" ") || []
  return {
    rooms: content[2],
    cost: content[4].slice(0, -1)
  }
}

test('UI Test case 1 (Premium: 3, Economy: foo)', async () => {
  const { premiumInput, economyInput, economyLabel, submitButton, premiumLabel } = await setup()
  fireEvent.change(premiumInput, { target: { value: '3' } })
  fireEvent.change(economyInput, { target: { value: 'foo' } })
  fireEvent.click(submitButton)
  const economyContent = economyLabel?.textContent
  const premiumContent = premiumLabel?.textContent
  const economy = getRoomsInfoFromLabel(economyContent)
  const premium = getRoomsInfoFromLabel(premiumContent)

  expect(premium.rooms).toBe("3");
  expect(economy.rooms).toBe("0");
  expect(premium.cost).toBe("738");
  expect(economy.cost).toBe("0");
});

test('UI Test case 2 (Economy: 3)', async () => {
  const { economyInput, economyLabel, submitButton, premiumLabel } = await setup()
  fireEvent.change(economyInput, { target: { value: '3' } })
  fireEvent.click(submitButton)
  const economyContent = economyLabel?.textContent
  const premiumContent = premiumLabel?.textContent
  const economy = getRoomsInfoFromLabel(economyContent)
  const premium = getRoomsInfoFromLabel(premiumContent)

  expect(premium.rooms).toBe("0");
  expect(economy.rooms).toBe("3");
  expect(premium.cost).toBe("0");
  expect(economy.cost).toBe("167");
});

test('UI Test case 3 (3, 3)', async () => {
  const { premiumInput, economyInput, economyLabel, submitButton, premiumLabel } = await setup()
  fireEvent.change(premiumInput, { target: { value: '3' } })
  fireEvent.change(economyInput, { target: { value: '3' } })
  fireEvent.click(submitButton)
  const economyContent = economyLabel?.textContent
  const premiumContent = premiumLabel?.textContent
  const economy = getRoomsInfoFromLabel(economyContent)
  const premium = getRoomsInfoFromLabel(premiumContent)

  expect(premium.rooms).toBe("3");
  expect(economy.rooms).toBe("3");
  expect(premium.cost).toBe("738");
  expect(economy.cost).toBe("167");
});

test('UI test case 4 (7, 5)', async () => {
  const { premiumInput, economyInput, economyLabel, submitButton, premiumLabel } = await setup()
  fireEvent.change(premiumInput, { target: { value: '7' } })
  fireEvent.change(economyInput, { target: { value: '5' } })
  fireEvent.click(submitButton)
  const economyContent = economyLabel?.textContent
  const premiumContent = premiumLabel?.textContent
  const economy = getRoomsInfoFromLabel(economyContent)
  const premium = getRoomsInfoFromLabel(premiumContent)

  expect(premium.rooms).toBe("6");
  expect(economy.rooms).toBe("4");
  expect(premium.cost).toBe("1054");
  expect(economy.cost).toBe("189");
});
