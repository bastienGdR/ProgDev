import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import CalculatorPage from './pages/Calculator/Calculator';
// jest.mock("mapbox-gl", () => {
//   return {
//     Map: function() {
//       (this as any).on = jest.fn();
//     },
//     Marker: function() {
//       (this as any).setLngLat = function() {
//         return this;
//       };
//       (this as any).addTo = jest.fn();
//     }
//   };
// });

test('renders App', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test('renders button with label "Kcal"', () => {
  const mockClasses = {
    container: '',
    circleContainer: '',
    redCircle: '',
    kanjiSun: '',
    kanjiBook: '',
    calculatorContainer: '',
    calculatorInnerContainer: '',
    scrollContainer: '',
    mainFoodItems: '',
    itemContainer: '',
    buttonContainer: '',
    lateralBar: '',
    barSpacer: '',
  };

  render(<CalculatorPage classes={mockClasses} />);
  
  const buttonElement = screen.getByText(`0 Kcal`);

  expect(buttonElement).toBeInTheDocument();
});
