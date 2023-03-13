import GroceryShoppingList from '../components/GroceryShoppingList'
import { render, fireEvent } from '@testing-library/react-native';

describe('GroceryList', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText, getByTestId, getByText } = render(<GroceryShoppingList />);

        const input = getByPlaceholderText('Enter grocery item');
        expect(input).toBeDefined();

        const addButton = getByText('Add the item to list');
        expect(addButton).toBeDefined();

        const flatList = getByTestId('flatlist');
        expect(flatList).toBeDefined();
    });

    it('adds items to the list', () => {
        const { getByPlaceholderText, getByText, getByTestId } = render(<GroceryShoppingList />);

        const input = getByPlaceholderText('Enter grocery item');
        const addButton = getByText('Add the item to list');
        const flatList = getByTestId('flatlist');

        fireEvent.changeText(input, 'Milk');
        fireEvent.press(addButton);

        expect(getByText('Milk')).toBeDefined();
        expect(flatList.props.data).toContain('Milk');
        expect(flatList.props.data[0]).toContain('Milk');
    });
});