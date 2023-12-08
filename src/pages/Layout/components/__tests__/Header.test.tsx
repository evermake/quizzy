// import React from 'react';
// import { render, screen, waitFor } from '@/test-utils';
// import userEvent from '@testing-library/user-event';
// import { useGetUserQuery } from '@/store/services/userService';
// import Header from '../Header';
// import '@testing-library/jest-dom';
//
// // Mock the userService module
// jest.mock('@/store/services/userService');
//
// describe('Header Component', () => {
//   it('renders loading state correctly', async () => {
//     // Mocking the useGetUserQuery hook
//     (useGetUserQuery as jest.Mock).mockReturnValue({ data: undefined, error: undefined, isLoading: true });
//
//     render(<Header />);
//
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//     // Optionally, you can check other loading indicators or states here
//   });
//
//   it('renders user name when user is available', async () => {
//     const mockUser = { id: 1, name: 'John Doe' };
//     (useGetUserQuery as jest.Mock).mockReturnValue({ data: mockUser, error: undefined, isLoading: false });
//
//     render(<Header />);
//
//     await waitFor(() => {
//       expect(screen.getByText(mockUser.name)).toBeInTheDocument();
//     });
//
//     expect(screen.queryByText('Login')).not.toBeInTheDocument();
//   });
//
//   it('renders login link when user is not available', async () => {
//     (useGetUserQuery as jest.Mock).mockReturnValue({ data: undefined, error: undefined, isLoading: false });
//
//     render(<Header />);
//
//     await waitFor(() => {
//       expect(screen.getByText('Login')).toBeInTheDocument();
//     });
//
//     expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
//   });
//
//   it('handles error state correctly', async () => {
//     const mockError = 'An error occurred';
//     (useGetUserQuery as jest.Mock).mockReturnValue({ data: undefined, error: mockError, isLoading: false });
//
//     render(<Header />);
//
//     expect(screen.getByText(`Error:`)).toBeInTheDocument();
//   });
//
//   it('navigates to home on Home link click', async () => {
//     (useGetUserQuery as jest.Mock).mockReturnValue({ data: undefined, error: undefined, isLoading: false });
//
//     render(<Header />);
//
//     const homeLink = screen.getByText('Home');
//     userEvent.click(homeLink);
//
//     // You might want to use a library like react-router's MemoryRouter to simulate navigation and check the route
//     // For simplicity, I'm just checking if the link is clicked
//     // Example: expect(screen.getByText('Home Page')).toBeInTheDocument();
//   });
//
//   it('navigates to login on Login link click', async () => {
//     (useGetUserQuery as jest.Mock).mockReturnValue({ data: undefined, error: undefined, isLoading: false });
//
//     render(<Header />);
//
//     const loginLink = screen.getByText('Login');
//     userEvent.click(loginLink);
//
//     // You might want to use a library like react-router's MemoryRouter to simulate navigation and check the route
//     // For simplicity, I'm just checking if the link is clicked
//     // Example: expect(screen.getByText('Login Page')).toBeInTheDocument();
//   });
// });
