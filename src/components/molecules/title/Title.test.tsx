import React from 'react';
import { render, screen } from '@testing-library/react';
import Title, { propsTitle } from './Title'; // Assuming PropsTitle is the interface for props in your Title component

const mockProps: propsTitle = {
    title: "Contact",
    textPosition: "text-left",
};

describe("render Title Components", () => {
    it("should render Title and Position of Title", () => {
        const { getByText, getByTestId } = render(<Title {...mockProps} />);
        const titleElement = getByText(mockProps.title);
        const containerElement = getByTestId('title-container');

        expect(titleElement).toBeInTheDocument();
        expect(containerElement).toHaveClass(mockProps.textPosition);
    });
});
