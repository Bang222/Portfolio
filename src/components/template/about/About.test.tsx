import { render, screen } from '@testing-library/react';
import About from "./About"
describe("test page about", () => {
    test("render to component Abount",() =>{
        render(<About/>)
    })
    it("render Title Abount",()=>{
        const{getByTestId} = render(<About/>)
        const titleElementId = getByTestId("title-about")
        // const titleElement = screen.getByText("About");
        // Sử dụng toBeInTheDocument để kiểm tra xem phần tử có tồn tại hay không
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toBe("About")
    })
})
// describe('About component', () => {
//     beforeAll(() => {
//         // Mock IntersectionObserver
//         window.IntersectionObserver = jest.fn(() => ({
//             observe: jest.fn(),
//             disconnect: jest.fn(),
//         }));
//     });
// });